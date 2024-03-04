import { sitesInvidious, sitesPiped } from "./config/alternativeUrls.js";
import {
  defaultAutoVolume,
  defaultDetectService,
  defaultTranslationService,
  m3u8ProxyHost,
  proxyWorkerHost,
} from "./config/config.js";
import {
  actualTTS,
  additionalTTS,
  availableLangs,
  cfOnlyExtensions,
} from "./config/constants.js";
import {
  availableLocales,
  localizationProvider,
} from "./localization/localizationProvider.js";
import "./styles/main.scss";
import ui from "./ui.js";
import { VOTLocalizedError } from "./utils/VOTLocalizedError.js";
import debug from "./utils/debug.js";
import {
  getVideoId,
  initHls,
  isPiPAvailable,
  lang,
  secsToStrTime,
} from "./utils/utils.js";
import { syncVolume } from "./utils/volume.js";
import { yandexProtobuf } from "./yandexProtobuf.js";

import Bowser from "bowser";

import requestStreamPing from "./rsp.js";
import requestStreamTranslation from "./rst.js";
import requestVideoTranslation from "./rvt.js";
import { SubtitlesWidget, fetchSubtitles, getSubtitles } from "./subtitles.js";

import youtubeUtils from "./utils/youtubeUtils.js";
import coursehunterUtils from "./utils/coursehunterUtils.js";
import courseraUtils from "./utils/courseraUtils.js";
import udemyUtils from "./utils/udemyUtils.js";
import bannedvideoUtils from "./utils/bannedvideoUtils.js";
import weverseUtils from "./utils/weverseUtils.js";

import sites from "./config/sites.js";
import { VideoObserver } from "./utils/VideoObserver.js";
import { votStorage } from "./utils/storage.js";
import {
  detectServices,
  translate,
  translateServices,
} from "./utils/translateApis.js";

const browserInfo = Bowser.getParser(window.navigator.userAgent).getResult();

const sitesChromiumBlocked = [...sitesInvidious, ...sitesPiped];

const videoLipSyncEvents = [
  "playing",
  "ratechange",
  "play",
  "waiting",
  "pause",
];

function genOptionsByOBJ(obj, conditionString, validateLangs = false) {
  return obj.map((code) => ({
    label: `${validateLangs && !actualTTS.includes(code) ? "❌ " : ""}${
      localizationProvider.get("langs")[code] ?? code.toUpperCase()
    }`,
    value: code,
    selected: conditionString === code,
  }));
}

if (BUILD_MODE === "cloudflare") {
  var translationPanding = false;
}

function translateVideo(
  url,
  duration,
  requestLang,
  responseLang,
  translationHelp,
  callback,
) {
  debug.log(
    `Translate video (url: ${url}, duration: ${duration}, requestLang: ${requestLang}, responseLang: ${responseLang})`,
  );

  debug.log("translationHelp:", translationHelp);

  if (BUILD_MODE === "cloudflare" && translationPanding) {
    debug.log("translationPanding return");
    return;
  }

  translationPanding = true;

  requestVideoTranslation(
    url,
    duration,
    requestLang,
    responseLang,
    translationHelp,
    (success, response) => {
      translationPanding = false;

      debug.log("[exec callback] Requesting video translation");
      if (!success) {
        callback(false, localizationProvider.get("requestTranslationFailed"));
        return;
      }

      const translateResponse =
        yandexProtobuf.decodeTranslationResponse(response);
      console.log("[VOT] Translation response: ", translateResponse);

      switch (translateResponse.status) {
        case 0:
          callback(false, translateResponse.message);
          break;
        case 1:
          callback(
            !!translateResponse.url,
            translateResponse.url ||
              localizationProvider.get("audioNotReceived"),
          );
          break;
        case 2:
          callback(
            false,
            translateResponse.remainingTime
              ? secsToStrTime(translateResponse.remainingTime)
              : localizationProvider.get("translationTakeFewMinutes"),
          );
          break;
        case 3:
        case 6:
          /*
            status: 3
            Иногда, в ответе приходит статус код 3, но видео всё, так же, ожидает перевода.
            В конечном итоге, это занимает слишком много времени,
            как-будто сервер не понимает, что данное видео уже недавно было переведено
            и заместо возвращения готовой ссылки на перевод начинает переводить видео заново
            при чём у него это получается за очень длительное время.

            status: 6
            Случайно встретил 6 статус код при котором видео так же продолжается перевод,
            но после него ничего сверхъестественного не происходит.
            Он появляется при первом запросе с 17=1, но не исключено,
            что может появится и просто так
          */
          callback(false, localizationProvider.get("videoBeingTranslated"));
          break;
      }
    },
  );
}

function translateStream(url, requestLang, responseLang, callback) {
  debug.log(
    `Translate stream (url: ${url}, requestLang: ${requestLang}, responseLang: ${responseLang})`,
  );

  requestStreamTranslation(
    url,
    requestLang,
    responseLang,
    (success, response) => {
      debug.log("[exec callback] Requesting stream translation");
      if (!success) {
        callback(false, localizationProvider.get("requestTranslationFailed"));
        return;
      }

      const streamResponse = yandexProtobuf.decodeStreamResponse(response);
      console.log("[VOT] Stream Translation response: ", streamResponse);

      switch (streamResponse.interval) {
        case 10:
          callback(
            false,
            streamResponse.interval,
            localizationProvider.get("translationTakeFewMinutes"),
          );
          break;
        case 20:
          callback(
            true,
            streamResponse.interval,
            streamResponse || localizationProvider.get("audioNotReceived"),
          );
          break;
        case 0:
          // stream removed or ended
          callback(
            false,
            streamResponse.interval,
            localizationProvider.get("streamNoConnectionToServer"),
          );
          break;
      }
    },
  );
}

class VideoHandler {
  // translate properties
  translateFromLang = "en"; // default language of video
  translateToLang = lang; // default language of audio response

  timer;

  ytData = "";
  videoData = "";
  firstPlay = true;
  audio = new Audio();
  hls = initHls(); // debug enabled only in dev mode

  videoTranslations = [];
  videoTranslationTTL = 7200;

  downloadTranslationUrl = null;
  downloadSubtitlesUrl = null;

  autoRetry;
  streamPing;
  volumeOnStart;
  tempOriginalVolume;
  tempVolume;

  subtitlesList = [];
  subtitlesListVideoId = null;

  videoLastSrcObject = null;

  constructor(video, container, site) {
    debug.log(
      "[VideoHandler] add video:",
      video,
      "container:",
      container,
      this,
    );
    this.video = video;
    this.container = container;
    this.site = site;
    this.handleSrcChangedBound = this.handleSrcChanged.bind(this);
    this.video.addEventListener("loadedmetadata", this.handleSrcChangedBound);
    this.stopTranslationBound = this.stopTranslation.bind(this);
    this.handleVideoEventBound = this.handleVideoEvent.bind(this);
    this.changeOpacityOnEventBound = this.changeOpacityOnEvent.bind(this);
    this.resetTimerBound = this.resetTimer.bind(this);
    this.init();
  }

  async init() {
    if (this.initialized) return;

    const audioProxyDefault =
      lang === "uk" && BUILD_MODE === "cloudflare" ? 1 : 0;

    const dataPromises = {
      autoTranslate: votStorage.get("autoTranslate", 0, true),
      dontTranslateLanguage: votStorage.get("dontTranslateLanguage", lang),
      dontTranslateYourLang: votStorage.get("dontTranslateYourLang", 1, true),
      autoSetVolumeYandexStyle: votStorage.get(
        "autoSetVolumeYandexStyle",
        1,
        true,
      ),
      autoVolume: votStorage.get("autoVolume", defaultAutoVolume, true),
      showVideoSlider: votStorage.get("showVideoSlider", 1, true),
      syncVolume: votStorage.get("syncVolume", 0, true),
      subtitlesMaxLength: votStorage.get("subtitlesMaxLength", 300, true),
      highlightWords: votStorage.get("highlightWords", 0, true),
      responseLanguage: votStorage.get("responseLanguage", lang),
      defaultVolume: votStorage.get("defaultVolume", 100, true),
      udemyData: votStorage.get("udemyData", { accessToken: "", expires: 0 }),
      audioProxy: votStorage.get("audioProxy", audioProxyDefault, true),
      showPiPButton: votStorage.get("showPiPButton", 0, true),
      translateAPIErrors: votStorage.get("translateAPIErrors", 1, true),
      translationService: votStorage.get(
        "translationService",
        defaultTranslationService,
      ),
      detectService: votStorage.get("detectService", defaultDetectService),
      m3u8ProxyHost: votStorage.get("m3u8ProxyHost", m3u8ProxyHost),
      proxyWorkerHost: votStorage.get("proxyWorkerHost", proxyWorkerHost),
    };

    const dataEntries = await Promise.all(
      Object.entries(dataPromises).map(async ([key, promise]) => [
        key,
        await promise,
      ]),
    );
    this.data = Object.fromEntries(dataEntries);

    this.videoData = await this.getVideoData();

    console.log("[db] data from db: ", this.data);

    this.subtitlesWidget = new SubtitlesWidget(
      this.video,
      this.container,
      this.site,
    );
    this.subtitlesWidget.setMaxLength(this.data.subtitlesMaxLength);
    this.subtitlesWidget.setHighlightWords(this.data.highlightWords);

    this.initUI();
    this.initUIEvents();

    const videoHasNoSource =
      !this.video.src && !this.video.currentSrc && !this.video.srcObject;
    this.votButton.container.hidden = videoHasNoSource;
    if (videoHasNoSource) {
      this.votMenu.container.hidden = true;
    }

    await this.updateSubtitles();
    await this.changeSubtitlesLang("disabled");
    this.setSelectMenuValues(
      this.videoData.detectedLanguage,
      this.data.responseLanguage ?? "ru",
    );
    this.translateToLang = this.data.responseLanguage ?? "ru";

    this.initExtraEvents();

    this.initialized = true;
  }

  transformBtn(status = "none", text) {
    this.votButton.container.dataset.status = status;
    this.votButton.label.innerHTML = text;
  }

  initUI() {
    // VOT Button
    {
      this.votButton = ui.createVOTButton(
        localizationProvider.get("translateVideo"),
      );
      this.container.appendChild(this.votButton.container);

      this.votButton.pipButton.hidden =
        !isPiPAvailable() || !this.data?.showPiPButton;
      this.votButton.separator2.hidden =
        !isPiPAvailable() || !this.data?.showPiPButton;

      this.votButton.container.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      });
    }

    // VOT Menu
    {
      this.votMenu = ui.createVOTMenu(localizationProvider.get("VOTSettings"));
      this.container.appendChild(this.votMenu.container);

      this.votDownloadButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"/></svg>`,
      );
      this.votDownloadButton.hidden = true;
      this.votMenu.headerContainer.appendChild(this.votDownloadButton);

      this.votDownloadSubtitlesButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 0 24 24"><path d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm2-4h8v-2H6v2Zm10 0h2v-2h-2v2ZM6 12h2v-2H6v2Zm4 0h8v-2h-8v2Z"/></svg>`,
      );
      this.votDownloadSubtitlesButton.hidden = true;
      this.votMenu.headerContainer.appendChild(this.votDownloadSubtitlesButton);

      this.votSettingsButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M555-80H405q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 5-28 1t-22-17L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q7-14 21.5-17.5T220-761l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-5 28-1t22 17l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v27q0 6.5-2 13.5l75 57q12 9 15 24t-5 28l-74 128q-8 13-22.5 17.5T738-199l-85-36q-11 8-23 15t-24 12l-12 93q-2 15-13 25t-26 10Zm-73-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Z"/></svg>`,
      );
      this.votMenu.headerContainer.appendChild(this.votSettingsButton);

      this.votTranslationLanguageSelect = ui.createVOTLanguageSelect({
        fromTitle:
          localizationProvider.get("langs")[this.video.detectedLanguage],
        fromDialogTitle: localizationProvider.get("videoLanguage"),
        fromItems: [
          {
            label: localizationProvider.get("langs")["auto"],
            value: "auto",
            selected: "",
          },
          ...genOptionsByOBJ(availableLangs, this.videoData.detectedLanguage),
        ],
        fromOnSelectCB: async (e) => {
          debug.log(
            "[fromOnSelectCB] select from language",
            e.target.dataset.votValue,
          );
          this.videoData = await this.getVideoData();
          this.setSelectMenuValues(
            e.target.dataset.votValue,
            this.videoData.responseLanguage,
          );
        },
        toTitle: localizationProvider.get("langs")[this.video.responseLanguage],
        toDialogTitle: localizationProvider.get("translationLanguage"),
        toItems: [
          ...genOptionsByOBJ(
            availableLangs,
            this.videoData.responseLanguage,
            true,
          ),
          {
            label: "─────────",
            value: "separator",
            disabled: true,
          },
          ...genOptionsByOBJ(
            additionalTTS,
            this.videoData.responseLanguage,
            true,
          ),
        ],
        toOnSelectCB: async (e) => {
          const newLang = e.target.dataset.votValue;
          debug.log("[toOnSelectCB] select to language", newLang);
          this.data.responseLanguage = this.translateToLang = newLang;
          await votStorage.set("responseLanguage", this.data.responseLanguage);
          debug.log(
            "Response Language value changed. New value: ",
            this.data.responseLanguage,
          );
          this.videoData = await this.getVideoData();
          this.setSelectMenuValues(
            this.videoData.detectedLanguage,
            this.data.responseLanguage,
          );
        },
      });

      this.votMenu.bodyContainer.appendChild(
        this.votTranslationLanguageSelect.container,
      );

      this.votSubtitlesSelect = ui.createVOTSelect(
        localizationProvider.get("VOTSubtitlesDisabled"),
        localizationProvider.get("VOTSubtitles"),
        [
          {
            label: localizationProvider.get("VOTSubtitlesDisabled"),
            value: "disabled",
            selected: true,
            disabled: false,
          },
        ],
        {
          onSelectCb: async (e) => {
            await this.changeSubtitlesLang(e.target.dataset.votValue);
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTSubtitles"),
          ),
        },
      );

      this.votMenu.bodyContainer.appendChild(this.votSubtitlesSelect.container);

      this.votVideoVolumeSlider = ui.createSlider(
        `${localizationProvider.get("VOTVolume")}: <strong>${
          this.getVideoVolume() * 100
        }%</strong>`,
        this.getVideoVolume() * 100,
      );
      this.votVideoVolumeSlider.container.hidden =
        this.data.showVideoSlider !== 1 ||
        this.votButton.container.dataset.status !== "success";
      this.votMenu.bodyContainer.appendChild(
        this.votVideoVolumeSlider.container,
      );

      this.votVideoTranslationVolumeSlider = ui.createSlider(
        `${localizationProvider.get("VOTVolumeTranslation")}: <strong>${
          this.data?.defaultVolume ?? 100
        }%</strong>`,
        this.data?.defaultVolume ?? 100,
      );
      this.votVideoTranslationVolumeSlider.container.hidden =
        this.votButton.container.dataset.status !== "success";
      this.votMenu.bodyContainer.appendChild(
        this.votVideoTranslationVolumeSlider.container,
      );

      this.votMenu.container.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      });
    }

    // VOT Settings
    {
      this.votSettingsDialog = ui.createDialog(
        localizationProvider.get("VOTSettings"),
      );
      document.documentElement.appendChild(this.votSettingsDialog.container);

      this.votTranslationHeader = ui.createHeader(
        localizationProvider.get("translationSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votTranslationHeader,
      );

      this.votAutoTranslateCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTAutoTranslate"),
        this.data?.autoTranslate ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoTranslateCheckbox.container,
      );

      this.votDontTranslateYourLangSelect = ui.createVOTSelect(
        localizationProvider.get("langs")[
          votStorage.syncGet("dontTranslateLanguage", lang)
        ],
        localizationProvider.get("VOTDontTranslateYourLang"),
        genOptionsByOBJ(
          availableLangs,
          votStorage.syncGet("dontTranslateLanguage", lang),
        ),
        {
          onSelectCb: async (e) => {
            this.data.dontTranslateLanguage = e.target.dataset.votValue;
            await votStorage.set(
              "dontTranslateLanguage",
              this.data.dontTranslateLanguage,
            );
          },
          labelElement: ui.createCheckbox(
            localizationProvider.get("VOTDontTranslateYourLang"),
            this.data?.dontTranslateYourLang ?? true,
          ).container,
        },
      );

      this.votSettingsDialog.bodyContainer.appendChild(
        this.votDontTranslateYourLangSelect.container,
      );

      this.votAutoSetVolumeCheckbox = ui.createCheckbox(
        `${localizationProvider.get("VOTAutoSetVolume")}`,
        this.data?.autoSetVolumeYandexStyle ?? true,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoSetVolumeCheckbox.container,
      );
      this.votAutoSetVolumeSlider = ui.createSlider(
        `<strong>${(this.data?.autoVolume ?? defaultAutoVolume) * 100}%</strong>`,
        (this.data?.autoVolume ?? defaultAutoVolume) * 100,
        0,
        100,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoSetVolumeSlider.container,
      );

      this.votShowVideoSliderCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTShowVideoSlider"),
        this.data?.showVideoSlider ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votShowVideoSliderCheckbox.container,
      );

      // udemy only
      this.votUdemyDataTextfield = ui.createTextfield(
        localizationProvider.get("VOTUdemyData"),
        this.data?.udemyData?.accessToken ?? "",
      );
      this.votUdemyDataTextfield.container.hidden = this.site.host !== "udemy";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votUdemyDataTextfield.container,
      );

      // youtube only
      this.votSyncVolumeCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTSyncVolume"),
        this.data?.syncVolume ?? false,
      );
      this.votSyncVolumeCheckbox.container.hidden =
        !["youtube", "googledrive"].includes(this.site.host) ||
        this.site.additionalData === "mobile";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSyncVolumeCheckbox.container,
      );

      this.votTranslationServiceSelect = ui.createVOTSelect(
        votStorage.syncGet("translationService", defaultTranslationService),
        localizationProvider.get("VOTTranslationService"),
        genOptionsByOBJ(
          translateServices,
          votStorage.syncGet("translationService", defaultTranslationService),
        ),
        {
          onSelectCb: async (e) => {
            this.data.translationService = e.target.dataset.votValue;
            await votStorage.set(
              "translationService",
              this.data.translationService,
            );
          },
          labelElement: ui.createCheckbox(
            localizationProvider.get("VOTTranslateAPIErrors"),
            this.data.translateAPIErrors ?? true,
          ).container,
        },
      );
      this.votTranslationServiceSelect.container.hidden =
        localizationProvider.lang === "ru";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votTranslationServiceSelect.container,
      );

      this.votDetectServiceSelect = ui.createVOTSelect(
        votStorage.syncGet("detectService", defaultDetectService),
        localizationProvider.get("VOTDetectService"),
        genOptionsByOBJ(
          detectServices,
          votStorage.syncGet("detectService", defaultDetectService),
        ),
        {
          onSelectCb: async (e) => {
            this.data.detectService = e.target.dataset.votValue;
            await votStorage.set("detectService", this.data.detectService);
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTDetectService"),
          ),
        },
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votDetectServiceSelect.container,
      );

      // SUBTITLES

      this.votSubtitlesHeader = ui.createHeader(
        localizationProvider.get("subtitlesSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(this.votSubtitlesHeader);

      this.votSubtitlesMaxLengthSlider = ui.createSlider(
        `${localizationProvider.get("VOTSubtitlesMaxLength")}: <strong>${
          this.data?.subtitlesMaxLength ?? 300
        }</strong>`,
        this.data?.subtitlesMaxLength ?? 300,
        50,
        300,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSubtitlesMaxLengthSlider.container,
      );

      this.votSubtitlesHighlightWordsCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTHighlightWords"),
        this.data?.highlightWords ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSubtitlesHighlightWordsCheckbox.container,
      );

      // PROXY

      this.votProxyHeader = ui.createHeader(
        localizationProvider.get("proxySettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(this.votProxyHeader);

      this.votM3u8ProxyHostTextfield = ui.createTextfield(
        localizationProvider.get("VOTM3u8ProxyHost"),
        this.data?.m3u8ProxyHost,
        m3u8ProxyHost,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votM3u8ProxyHostTextfield.container,
      );

      // cf version only
      this.votProxyWorkerHostTextfield = ui.createTextfield(
        localizationProvider.get("VOTProxyWorkerHost"),
        this.data?.proxyWorkerHost,
        proxyWorkerHost,
      );
      this.votProxyWorkerHostTextfield.container.hidden =
        BUILD_MODE !== "cloudflare";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votProxyWorkerHostTextfield.container,
      );

      // cf version only
      this.votAudioProxyCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTAudioProxy"),
        this.data?.audioProxy ?? false,
      );
      this.votAudioProxyCheckbox.container.hidden = BUILD_MODE !== "cloudflare";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAudioProxyCheckbox.container,
      );

      // ABOUT

      this.votAboutHeader = ui.createHeader(localizationProvider.get("about"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votAboutHeader);

      this.votLanguageSelect = ui.createVOTSelect(
        localizationProvider.get("langs")[
          votStorage.syncGet("locale-lang-override", "auto")
        ],
        localizationProvider.get("VOTMenuLanguage"),
        genOptionsByOBJ(
          availableLocales,
          votStorage.syncGet("locale-lang-override", "auto"),
        ),
        {
          onSelectCb: async (e) => {
            await votStorage.set(
              "locale-lang-override",
              e.target.dataset.votValue,
            );
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTMenuLanguage"),
          ),
        },
      );

      this.votSettingsDialog.bodyContainer.appendChild(
        this.votLanguageSelect.container,
      );

      this.votShowPiPButtonCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTShowPiPButton"),
        this.data?.showPiPButton ?? false,
      );
      this.votShowPiPButtonCheckbox.container.hidden = !isPiPAvailable();
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votShowPiPButtonCheckbox.container,
      );

      this.votVersionInfo = ui.createInformation(
        `${localizationProvider.get("VOTVersion")}:`,
        BUILD_MODE === "cloudflare"
          ? `cloudflare ${GM_info.script.version}`
          : GM_info.script.version,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votVersionInfo.container,
      );

      this.votAuthorsInfo = ui.createInformation(
        `${localizationProvider.get("VOTAuthors")}:`,
        GM_info.script.author,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAuthorsInfo.container,
      );

      this.votLoaderInfo = ui.createInformation(
        `${localizationProvider.get("VOTLoader")}:`,
        `${GM_info.scriptHandler} v${GM_info.version}`,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votLoaderInfo.container,
      );

      this.votBrowserInfo = ui.createInformation(
        `${localizationProvider.get("VOTBrowser")}:`,
        `${browserInfo.browser.name} ${browserInfo.browser.version} (${browserInfo.os.name} ${browserInfo.os.version})`,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votBrowserInfo.container,
      );

      this.votResetSettingsButton = ui.createButton(
        localizationProvider.get("resetSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votResetSettingsButton,
      );
    }
  }

  initUIEvents() {
    // VOT Button
    {
      this.votButton.translateButton.addEventListener("click", () => {
        (async () => {
          if (this.audio.src) {
            debug.log("[click translationBtn] audio.src is not empty");
            this.stopTranslate();
            return;
          }

          if (this.hls.url) {
            debug.log("[click translationBtn] hls is not empty");
            this.stopTranslate();
            return;
          }

          try {
            debug.log("[click translationBtn] trying execute translation");

            if (!this.videoData.videoId) {
              throw new VOTLocalizedError("VOTNoVideoIDFound");
            }

            await this.translateExecutor(this.videoData.videoId);
          } catch (err) {
            console.error("[VOT]", err);
            if (err?.name === "VOTLocalizedError") {
              this.transformBtn("error", err.localizedMessage);
            } else {
              this.transformBtn("error", err);
            }
          }
        })();
      });

      this.votButton.pipButton.addEventListener("click", () => {
        (async () => {
          if (this.video !== document.pictureInPictureElement) {
            await this.video.requestPictureInPicture();
          } else {
            await document.exitPictureInPicture();
          }
        })();
      });

      this.votButton.menuButton.addEventListener("click", () => {
        this.votMenu.container.hidden = !this.votMenu.container.hidden;
      });
    }

    // VOT Menu
    {
      this.votDownloadButton.addEventListener("click", () => {
        if (this.downloadTranslationUrl) {
          window.open(this.downloadTranslationUrl, "_blank").focus();
        }
      });

      this.votDownloadSubtitlesButton.addEventListener("click", () => {
        console.log(this.downloadSubtitlesUrl);
        if (this.downloadSubtitlesUrl) {
          window.open(this.downloadSubtitlesUrl, "_blank").focus();
        }
      });

      this.votSettingsButton.addEventListener("click", () => {
        this.votSettingsDialog.container.hidden =
          !this.votSettingsDialog.container.hidden;
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          document.webkitExitFullscreen && document.webkitExitFullscreen();
          document.exitFullscreen && document.exitFullscreen();
        }
      });

      this.votVideoVolumeSlider.input.addEventListener("input", (e) => {
        const value = Number(e.target.value);
        this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
          `${value}%`;
        this.setVideoVolume(value / 100);
        if (this.data.syncVolume === 1) {
          const translateVolume = Number(
            this.votVideoTranslationVolumeSlider.input.value,
          );
          const finalValue = syncVolume(
            this.audio,
            value,
            translateVolume,
            this.tempOriginalVolume,
          );

          this.votVideoTranslationVolumeSlider.input.value = finalValue;
          this.votVideoTranslationVolumeSlider.label.querySelector(
            "strong",
          ).innerHTML = `${finalValue}%`;
          ui.updateSlider(this.votVideoTranslationVolumeSlider.input);

          this.tempVolume = finalValue;
          this.tempOriginalVolume = value;
        }
      });

      this.votVideoTranslationVolumeSlider.input.addEventListener(
        "input",
        (e) => {
          (async () => {
            this.data.defaultVolume = Number(e.target.value);
            await votStorage.set("defaultVolume", this.data.defaultVolume);
            this.votVideoTranslationVolumeSlider.label.querySelector(
              "strong",
            ).innerHTML = `${this.data.defaultVolume}%`;
            this.audio.volume = this.data.defaultVolume / 100;
            if (this.data.syncVolume === 1) {
              this.syncTranslationWithVideo(this.data.defaultVolume);
            }
          })();
        },
      );
    }

    // VOT Settings
    {
      this.votAutoTranslateCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.autoTranslate = Number(e.target.checked);
          await votStorage.set("autoTranslate", this.data.autoTranslate);
          debug.log(
            "autoTranslate value changed. New value: ",
            this.data.autoTranslate,
          );
        })();
      });

      this.votDontTranslateYourLangSelect.labelElement.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.dontTranslateYourLang = Number(e.target.checked);
            await votStorage.set(
              "dontTranslateYourLang",
              this.data.dontTranslateYourLang,
            );
            debug.log(
              "dontTranslateYourLang value changed. New value: ",
              this.data.dontTranslateYourLang,
            );
          })();
        },
      );

      this.votAutoSetVolumeCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.autoSetVolumeYandexStyle = Number(e.target.checked);
          await votStorage.set(
            "autoSetVolumeYandexStyle",
            this.data.autoSetVolumeYandexStyle,
          );
          debug.log(
            "autoSetVolumeYandexStyle value changed. New value: ",
            this.data.autoSetVolumeYandexStyle,
          );
        })();
      });

      this.votAutoSetVolumeSlider.input.addEventListener("input", (e) => {
        (async () => {
          const presetAutoVolume = Number(e.target.value);
          this.data.autoVolume = (presetAutoVolume / 100).toFixed(2);
          await votStorage.set("autoVolume", this.data.autoVolume);
          this.votAutoSetVolumeSlider.label.querySelector("strong").innerHTML =
            `${presetAutoVolume}%`;
        })();
      });

      this.votShowVideoSliderCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.showVideoSlider = Number(e.target.checked);
          await votStorage.set("showVideoSlider", this.data.showVideoSlider);
          debug.log(
            "showVideoSlider value changed. New value: ",
            this.data.showVideoSlider,
          );
          this.votVideoVolumeSlider.container.hidden =
            this.data.showVideoSlider !== 1 ||
            this.votButton.container.dataset.status !== "success";
        })();
      });

      this.votUdemyDataTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.udemyData = {
            accessToken: e.target.value,
            expires: new Date().getTime(),
          };
          await votStorage.set("udemyData", this.data.udemyData);
          debug.log(
            "udemyData value changed. New value: ",
            this.data.udemyData,
          );
          window.location.reload();
        })();
      });

      this.votSyncVolumeCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.syncVolume = Number(e.target.checked);
          await votStorage.set("syncVolume", this.data.syncVolume);
          debug.log(
            "syncVolume value changed. New value: ",
            this.data.syncVolume,
          );
        })();
      });

      this.votTranslationServiceSelect.labelElement.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.translateAPIErrors = Number(e.target.checked);
            await votStorage.set(
              "translateAPIErrors",
              this.data.translateAPIErrors,
            );
            debug.log(
              "translateAPIErrors value changed. New value: ",
              this.data.translateAPIErrors,
            );
          })();
        },
      );

      // SUBTITLES

      this.votSubtitlesMaxLengthSlider.input.addEventListener("input", (e) => {
        (async () => {
          this.data.subtitlesMaxLength = Number(e.target.value);
          await votStorage.set(
            "subtitlesMaxLength",
            this.data.subtitlesMaxLength,
          );
          this.votSubtitlesMaxLengthSlider.label.querySelector(
            "strong",
          ).innerHTML = `${this.data.subtitlesMaxLength}`;
          this.subtitlesWidget.setMaxLength(this.data.subtitlesMaxLength);
        })();
      });

      this.votSubtitlesHighlightWordsCheckbox.input.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.highlightWords = Number(e.target.checked);
            await votStorage.set("highlightWords", this.data.highlightWords);
            debug.log(
              "highlightWords value changed. New value: ",
              this.data.highlightWords,
            );
            this.subtitlesWidget.setHighlightWords(this.data.highlightWords);
          })();
        },
      );

      this.votShowPiPButtonCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.showPiPButton = Number(e.target.checked);
          await votStorage.set("showPiPButton", this.data.showPiPButton);
          debug.log(
            "showPiPButton value changed. New value: ",
            this.data.showPiPButton,
          );
          this.votButton.pipButton.hidden =
            !isPiPAvailable() || !this.data.showPiPButton;
          this.votButton.separator2.hidden =
            !isPiPAvailable() || !this.data.showPiPButton;
        })();
      });

      // PROXY

      this.votM3u8ProxyHostTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.m3u8ProxyHost = e.target.value || m3u8ProxyHost;
          await votStorage.set("m3u8ProxyHost", this.data.m3u8ProxyHost);
          debug.log(
            "m3u8ProxyHost value changed. New value: ",
            this.data.m3u8ProxyHost,
          );
        })();
      });

      this.votProxyWorkerHostTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.proxyWorkerHost = e.target.value || proxyWorkerHost;
          await votStorage.set("proxyWorkerHost", this.data.proxyWorkerHost);
          debug.log(
            "proxyWorkerHost value changed. New value: ",
            this.data.proxyWorkerHost,
          );
          window.location.reload();
        })();
      });

      this.votAudioProxyCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.audioProxy = Number(e.target.checked);
          await votStorage.set("audioProxy", this.data.audioProxy);
          debug.log(
            "audioProxy value changed. New value: ",
            this.data.audioProxy,
          );
        })();
      });

      this.votResetSettingsButton.addEventListener("click", () => {
        (async () => {
          localizationProvider.reset();
          const valuesForClear = await votStorage.list();
          valuesForClear
            .filter((v) => !localizationProvider.gmValues.includes(v))
            .forEach((v) => votStorage.syncDelete(v));
          window.location.reload();
        })();
      });
    }
  }

  releaseExtraEvents() {
    clearInterval(this.resizeInterval);
    this.resizeObserver?.disconnect();
    if (
      ["youtube", "googledrive"].includes(this.site.host) &&
      this.site.additionalData !== "mobile"
    ) {
      this.syncVolumeObserver?.disconnect();
    }

    this.extraEvents?.forEach((e) => {
      e.element.removeEventListener(e.event, e.handler);
    });
  }

  initExtraEvents() {
    this.extraEvents = [];

    const addExtraEventListener = (element, event, handler) => {
      this.extraEvents.push({
        element,
        event,
        handler,
      });
      element.addEventListener(event, handler);
    };

    const addExtraEventListeners = (element, events, handler) => {
      events.forEach((event) => {
        addExtraEventListener(element, event, handler);
      });
    };

    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((e) => {
        this.votMenu.container.setAttribute(
          "style",
          `--vot-container-height: ${e.contentRect.height}px`,
        );
      });
    });
    this.resizeObserver.observe(this.video);
    this.votMenu.container.setAttribute(
      "style",
      `--vot-container-height: ${this.video.getBoundingClientRect().height}px`,
    );
    this.resizeInterval = setInterval(() => {
      this.votMenu.container.setAttribute(
        "style",
        `--vot-container-height: ${
          this.video.getBoundingClientRect().height
        }px`,
      );
    }, 500);
    // Sync volume slider with original video (youtube only)
    if (
      ["youtube", "googledrive"].includes(this.site.host) &&
      this.site.additionalData !== "mobile"
    ) {
      this.syncVolumeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "aria-valuenow"
          ) {
            this.syncVideoVolumeSlider();
          }
        });
      });

      const ytpVolumePanel = document.querySelector(".ytp-volume-panel");
      if (ytpVolumePanel) {
        this.syncVolumeObserver.observe(ytpVolumePanel, {
          attributes: true,
          childList: false,
          subtree: true,
          attributeOldValue: true,
        });
      }
    }

    document.addEventListener("click", (event) => {
      const e = event.target;

      const button = this.votButton.container;
      const menu = this.votMenu.container;
      const container = this.container;
      const settings = this.votSettingsDialog.container;
      const tempDialog = document.querySelector(".vot-dialog-temp");

      const isButton = button.contains(e);
      const isMenu = menu.contains(e);
      const isVideo = container.contains(e);
      const isSettings = settings.contains(e);
      const isTempDialog = tempDialog?.contains(e) ?? false;

      debug.log(
        `[document click] ${isButton} ${isMenu} ${isVideo} ${isSettings} ${isTempDialog}`,
      );
      if (!(!isButton && !isMenu && !isSettings && !isTempDialog)) return;
      if (!isVideo) this.logout(0);

      this.votMenu.container.hidden = true;
    });

    let eContainer;
    if (this.site.host === "pornhub") {
      if (this.site.additionalData === "embed") {
        eContainer = document.querySelector("#player");
      } else {
        // const e = document.querySelector(".original.mainPlayerDiv > video-element > div");
        eContainer = this.container.querySelector(
          ".video-element-wrapper-js > div",
        );
      }
    } else if (this.site.host === "twitter") {
      eContainer = document.querySelector('div[data-testid="videoPlayer"]');
    } else if (this.site.host === "yandexdisk") {
      eContainer = document.querySelector(".video-player__player");
    } else {
      eContainer = this.container;
    }
    if (eContainer)
      addExtraEventListeners(
        eContainer,
        ["mousemove", "mouseout"],
        this.resetTimerBound,
      );

    addExtraEventListener(
      this.votButton.container,
      "mousemove",
      this.changeOpacityOnEventBound,
    );
    addExtraEventListener(
      this.votMenu.container,
      "mousemove",
      this.changeOpacityOnEventBound,
    );
    addExtraEventListeners(
      document,
      ["touchstart", "touchmove", "touchend"],
      this.changeOpacityOnEventBound,
    );

    // fix youtube hold to fast
    addExtraEventListener(this.votButton.container, "mousedown", (e) => {
      e.stopImmediatePropagation();
    });
    addExtraEventListener(this.votMenu.container, "mousedown", (e) => {
      e.stopImmediatePropagation();
    });

    // fix draggable menu in youtube (#394, #417)
    if (this.site.host === "youtube") {
      this.container.draggable = false;
    }

    addExtraEventListener(this.video, "emptied", () => {
      debug.log("lipsync mode is emptied");
      this.stopTranslation();
    });

    addExtraEventListener(this.video, "progress", async () => {
      if (
        !(this.firstPlay && this.data.autoTranslate === 1) ||
        getVideoId(this.site.host, this.video) !== this.videoData.videoId
      ) {
        return;
      }

      if (!this.videoData.videoId) {
        throw new VOTLocalizedError("VOTNoVideoIDFound");
      }

      try {
        this.firstPlay = false;
        await this.translateExecutor(this.videoData.videoId);
      } catch (err) {
        console.error("[VOT]", err);
        if (err?.name === "VOTLocalizedError") {
          this.transformBtn("error", err.localizedMessage);
        } else {
          this.transformBtn("error", err);
        }
        this.firstPlay = false;
      }
    });
  }

  logout(n) {
    if (!this.votMenu.container.hidden) return;
    this.votButton.container.style.opacity = n;
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.logout(1);
    this.timer = setTimeout(() => {
      this.logout(0);
    }, 2000);
  }

  changeOpacityOnEvent(event) {
    clearTimeout(this.timer);
    this.logout(1);
    event.stopPropagation();
  }

  async changeSubtitlesLang(subs) {
    debug.log("[onchange] subtitles", subs);
    this.votSubtitlesSelect.setSelected(subs);
    if (subs === "disabled") {
      this.votSubtitlesSelect.setTitle(
        localizationProvider.get("VOTSubtitlesDisabled"),
      );
      this.subtitlesWidget.setContent(null);
      this.votDownloadSubtitlesButton.hidden = true;
      this.downloadSubtitlesUrl = null;
    } else {
      const fetchedSubs = await fetchSubtitles(
        this.subtitlesList.at(parseInt(subs)),
      );
      this.subtitlesWidget.setContent(fetchedSubs);
      this.votDownloadSubtitlesButton.hidden = false;
      this.downloadSubtitlesUrl = this.subtitlesList.at(parseInt(subs))?.url;
    }
  }

  async updateSubtitlesLangSelect() {
    const updatedOptions = [
      {
        label: localizationProvider.get("VOTSubtitlesDisabled"),
        value: "disabled",
        selected: true,
        disabled: false,
      },
      ...this.subtitlesList.map((s, idx) => ({
        label:
          (localizationProvider.get("langs")[s.language] ??
            s.language.toUpperCase()) +
          (s.translatedFromLanguage
            ? ` ${localizationProvider.get("VOTTranslatedFrom")} ${
                localizationProvider.get("langs")[s.translatedFromLanguage] ??
                s.translatedFromLanguage.toUpperCase()
              }`
            : "") +
          (s.source !== "yandex" ? ` ${s.source}` : "") +
          (s.isAutoGenerated
            ? ` (${localizationProvider.get("VOTAutogenerated")})`
            : ""),
        value: idx,
        selected: false,
        disabled: false,
      })),
    ];

    this.votSubtitlesSelect.updateItems(updatedOptions);

    await this.changeSubtitlesLang(updatedOptions[0].value);
  }

  async updateSubtitles() {
    await this.changeSubtitlesLang("disabled");

    if (!this.videoData.videoId) {
      console.error(
        `[VOT] ${localizationProvider.getDefault("VOTNoVideoIDFound")}`,
      );
      this.subtitlesList = [];
      this.subtitlesListVideoId = null;
      await this.updateSubtitlesLangSelect();
      return;
    }

    if (this.subtitlesListVideoId === this.videoData.videoId) {
      return;
    }

    this.subtitlesList = await getSubtitles(
      this.site,
      this.videoData.videoId,
      this.videoData.detectedLanguage,
    );
    if (!this.subtitlesList) {
      await this.changeSubtitlesLang("disabled");
    } else {
      this.subtitlesListVideoId = this.videoData.videoId;
    }
    await this.updateSubtitlesLangSelect();
  }

  // Get video volume in 0.00-1.00 format
  getVideoVolume() {
    let videoVolume = this.video?.volume;
    if (["youtube", "googledrive"].includes(this.site.host)) {
      videoVolume = youtubeUtils.getVideoVolume() || videoVolume;
    }
    return videoVolume;
  }

  // Set video volume in 0.00-1.00 format
  setVideoVolume(volume) {
    if (["youtube", "googledrive"].includes(this.site.host)) {
      const videoVolume = youtubeUtils.setVideoVolume(volume);
      if (videoVolume) {
        return;
      }
    }
    this.video.volume = volume;
  }

  // Sync volume slider with original video (youtube only)
  syncVideoVolumeSlider() {
    const newSlidersVolume = Math.round(this.getVideoVolume() * 100);

    this.votVideoVolumeSlider.input.value = newSlidersVolume;
    this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
      `${newSlidersVolume}%`;
    ui.updateSlider(this.votVideoVolumeSlider.input);

    if (this.data.syncVolume === 1) {
      this.tempOriginalVolume = Number(newSlidersVolume);
    }
  }

  setSelectMenuValues(from, to) {
    this.votTranslationLanguageSelect.fromSelect.setTitle(
      localizationProvider.get("langs")[from],
    );
    this.votTranslationLanguageSelect.toSelect.setTitle(
      localizationProvider.get("langs")[to],
    );
    this.votTranslationLanguageSelect.fromSelect.setSelected(from);
    this.votTranslationLanguageSelect.toSelect.setSelected(to);
    console.log(`[VOT] Set translation from ${from} to ${to}`);
    this.videoData.detectedLanguage = from;
    this.videoData.responseLanguage = to;
  }

  // A helper function to sync translation volume with video volume
  syncTranslationWithVideo(translationValue) {
    // Get the video volume value
    const videoVolume = Number(this.votVideoVolumeSlider.input.value);

    // Calculate the synced video volume based on the translation volume
    const finalValue = syncVolume(
      this.video,
      translationValue,
      videoVolume,
      this.tempVolume,
    );

    // Set the video volume slider value to the synced value
    this.votVideoVolumeSlider.input.value = finalValue;
    this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
      `${finalValue}%`;
    ui.updateSlider(this.votVideoVolumeSlider.input);

    // Update the temp variables for future syncing
    this.tempOriginalVolume = finalValue;
    this.tempVolume = translationValue;
  }

  async getVideoData() {
    const videoData = {
      // ! should be null for ALL websites except coursera and udemy !
      // else use direct link: `{url: xxx.mp4}`
      translationHelp: null,
      isStream: false, // by default, we request the translation of the video
      duration: this.video?.duration || 343, // ! if 0 - we get 400 error
      videoId: getVideoId(this.site.host, this.video),
      detectedLanguage: this.translateFromLang,
      responseLanguage: this.translateToLang,
    };

    if (!videoData.videoId) {
      this.ytData = {};
      return videoData;
    }

    if (window.location.hostname.includes("youtube.com")) {
      this.ytData = await youtubeUtils.getVideoData();
      videoData.isStream = this.ytData.isLive;
      if (this.ytData.author !== "") {
        videoData.detectedLanguage = this.ytData.detectedLanguage;
        videoData.responseLanguage = this.translateToLang;
      }
    } else if (
      window.location.hostname.includes("rutube") ||
      window.location.hostname.includes("ok.ru") ||
      window.location.hostname.includes("my.mail.ru")
    ) {
      videoData.detectedLanguage = "ru";
    } else if (["bilibili", "youku"].includes(this.site.host)) {
      videoData.detectedLanguage = "zh";
    } else if (["vk"].includes(this.site.host)) {
      const trackLang = document.getElementsByTagName("track")?.[0]?.srclang;
      videoData.detectedLanguage = trackLang || "auto";
    } else if (window.location.hostname.includes("coursera.org")) {
      const courseraData = await courseraUtils.getVideoData(
        this.translateToLang,
      );
      videoData.duration = courseraData.duration || videoData.duration; // courseraData.duration sometimes it can be equal to NaN
      videoData.detectedLanguage = courseraData.detectedLanguage;
      videoData.translationHelp = courseraData.translationHelp;
    } else if (window.location.hostname.includes("coursehunter.net")) {
      const coursehunterData = await coursehunterUtils.getVideoData();
      videoData.translationHelp = {
        // use direct link
        url: coursehunterData.url,
      };
      videoData.duration = coursehunterData.duration || videoData.duration;
    } else if (window.location.hostname.includes("banned.video")) {
      const bannedvideoData = await bannedvideoUtils.getVideoData(
        videoData.videoId,
      );
      videoData.translationHelp = {
        url: bannedvideoData.url,
      };

      videoData.duration = bannedvideoData.duration || videoData.duration;
      videoData.isStream = bannedvideoData.live;
    } else if (window.location.hostname.includes("weverse.io")) {
      const weverseData = await weverseUtils.getVideoData();
      videoData.detectedLanguage = "ko";
      if (weverseData) {
        videoData.translationHelp = {
          url: weverseData.url,
        };
        videoData.duration = weverseData.duration || videoData.duration;
      }
    } else if (window.location.hostname.includes("udemy.com")) {
      const udemyData = await udemyUtils.getVideoData(
        this.data.udemyData,
        this.translateToLang,
      );
      videoData.duration = udemyData.duration || videoData.duration;
      videoData.detectedLanguage = udemyData.detectedLanguage;
      videoData.translationHelp = udemyData.translationHelp;
    } else if (
      [
        "piped",
        "invidious",
        "bitchute",
        "rumble",
        "peertube",
        "dailymotion",
        "trovo",
        "yandexdisk",
        "coursehunter",
      ].includes(this.site.host)
    ) {
      videoData.detectedLanguage = "auto";
    }
    return videoData;
  }
  videoValidator() {
    if (["youtube", "ok.ru", "vk"].includes(this.site.host)) {
      debug.log("VideoValidator videoData: ", this.videoData);
      if (
        this.data.dontTranslateYourLang === 1 &&
        this.videoData.detectedLanguage === this.data.dontTranslateLanguage &&
        this.videoData.responseLanguage === this.data.dontTranslateLanguage
      ) {
        throw new VOTLocalizedError("VOTDisableFromYourLang");
      }
      // if (this.ytData.isPremiere) {
      //   throw new VOTLocalizedError("VOTPremiere");
      // }
      // if (this.ytData.isLive) {
      //   throw new VOTLocalizedError("VOTLiveNotSupported");
      // }
      if (!this.videoData.isStream && this.videoData.duration > 14_400) {
        throw new VOTLocalizedError("VOTVideoIsTooLong");
      }
    }
    return true;
  }

  lipSync(mode = false) {
    debug.log("lipsync video", this.video);
    if (!this.video) {
      return;
    }
    this.audio.currentTime = this.video.currentTime;
    this.audio.playbackRate = this.video.playbackRate;

    if (!mode) {
      debug.log("lipsync mode is not set");
      return;
    }

    if (mode == "play") {
      debug.log("lipsync mode is play");
      const audioPromise = this.audio.play();
      if (audioPromise !== undefined) {
        audioPromise.catch((e) => {
          console.error("[VOT]", e);
          if (e.name === "NotAllowedError") {
            this.transformBtn(
              "error",
              localizationProvider.get("grantPermissionToAutoPlay"),
            );
            throw new VOTLocalizedError("grantPermissionToAutoPlay");
          } else if (e.name === "NotSupportedError") {
            this.transformBtn(
              "error",
              sitesChromiumBlocked.includes(window.location.hostname)
                ? localizationProvider.get("neededAdditionalExtension")
                : localizationProvider.get("audioFormatNotSupported"),
            );
            throw sitesChromiumBlocked.includes(window.location.hostname)
              ? new VOTLocalizedError("neededAdditionalExtension")
              : new VOTLocalizedError("audioFormatNotSupported");
          }
        });
      }
      return;
    }
    // video is inactive
    if (["pause", "stop", "waiting"].includes(mode)) {
      debug.log(`lipsync mode is ${mode}`);
      this.audio.pause();
    }

    if (mode == "playing") {
      debug.log("lipsync mode is playing");
      this.audio.play();
    }
  }

  // Define a function to handle common events
  handleVideoEvent(event) {
    debug.log(`video ${event.type}`);
    this.lipSync(event.type);
  }

  // Default actions on stop translate
  stopTranslate() {
    videoLipSyncEvents.forEach((e) =>
      this.video.removeEventListener(e, this.handleVideoEventBound),
    );
    this.audio.pause();
    this.audio.src = "";
    this.audio.removeAttribute("src");
    this.votVideoVolumeSlider.container.hidden = true;
    this.votVideoTranslationVolumeSlider.container.hidden = true;
    this.votDownloadButton.hidden = true;
    this.downloadTranslationUrl = null;
    this.transformBtn("none", localizationProvider.get("translateVideo"));
    debug.log(`Volume on start: ${this.volumeOnStart}`);
    if (this.volumeOnStart) {
      this.setVideoVolume(this.volumeOnStart);
    }
    this.volumeOnStart = "";
    clearInterval(this.streamPing);
    this.hls?.destroy();
    this.hls = initHls();
  }

  async translateExecutor(VIDEO_ID) {
    debug.log("Run translateFunc");
    this.translateFunc(
      VIDEO_ID,
      this.videoData.isStream,
      this.videoData.detectedLanguage,
      this.videoData.responseLanguage,
      this.videoData.translationHelp,
    );
  }

  async updateTranslationErrorMsg(errorMessage) {
    const translationTake = localizationProvider.get("translationTake");
    const VOTTranslatingError = localizationProvider.get("VOTTranslatingError");
    const lang = localizationProvider.lang;

    if (errorMessage?.name === "VOTLocalizedError") {
      this.transformBtn("error", errorMessage.localizedMessage);
    } else if (
      this.data.translateAPIErrors === 1 &&
      !errorMessage.includes(translationTake) &&
      lang !== "ru"
    ) {
      const translatedMessage = await translate(errorMessage, "ru", lang);
      this.transformBtn("error", VOTTranslatingError);
      this.transformBtn("error", translatedMessage);
    } else {
      this.transformBtn("error", errorMessage);
    }
  }

  afterUpdateTranslation(audioUrl) {
    this.votVideoVolumeSlider.container.hidden =
      this.data.showVideoSlider !== 1 ||
      this.votButton.container.dataset.status !== "success";
    this.votVideoTranslationVolumeSlider.container.hidden =
      this.votButton.container.dataset.status !== "success";

    if (this.data.autoSetVolumeYandexStyle === 1) {
      this.votVideoVolumeSlider.input.value = this.data.autoVolume * 100;
      this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
        `${this.data.autoVolume * 100}%`;
      ui.updateSlider(this.votVideoVolumeSlider.input);
    }

    this.votDownloadButton.hidden = false;
    this.downloadTranslationUrl = audioUrl;
  }

  // update translation audio src
  updateTranslation(audioUrl) {
    // ! Don't use this function for streams
    this.audio.src = audioUrl;

    // cf version only
    if (
      BUILD_MODE === "cloudflare" &&
      this.data.audioProxy === 1 &&
      audioUrl.startsWith("https://vtrans.s3-private.mds.yandex.net/tts/prod/")
    ) {
      const audioPath = audioUrl.replace(
        "https://vtrans.s3-private.mds.yandex.net/tts/prod/",
        "",
      );
      const proxiedAudioUrl = `https://${this.data.proxyWorkerHost}/video-translation/audio-proxy/${audioPath}`;
      console.log(`[VOT] Audio proxied via ${proxiedAudioUrl}`);
      this.audio.src = proxiedAudioUrl;
    }

    this.volumeOnStart = this.getVideoVolume();
    if (typeof this.data.defaultVolume === "number") {
      this.audio.volume = this.data.defaultVolume / 100;
    }
    if (
      typeof this.data.autoSetVolumeYandexStyle === "number" &&
      this.data.autoSetVolumeYandexStyle
    ) {
      this.setVideoVolume(this.data.autoVolume);
    }

    switch (this.site.host) {
      case "twitter":
        document
          .querySelector('div[data-testid="app-bar-back"][role="button"]')
          .addEventListener("click", this.stopTranslationBound);
        break;
      case "invidious":
      case "piped":
        break;
    }

    if (this.video && !this.video.paused) this.lipSync("play");
    videoLipSyncEvents.forEach((e) =>
      this.video.addEventListener(e, this.handleVideoEventBound),
    );
    this.transformBtn("success", localizationProvider.get("disableTranslate"));
    this.afterUpdateTranslation(audioUrl);
  }

  // Define a function to translate a video and handle the callback
  translateFunc(
    VIDEO_ID,
    isStream,
    requestLang,
    responseLang,
    translationHelp,
  ) {
    console.log("[VOT] Video Data: ", this.videoData);
    const videoURL = translationHelp?.url
      ? translationHelp.url
      : `${this.site.url}${VIDEO_ID}`;

    // fix enabling the old requested voiceover when changing the language to the native language (#)
    debug.log("Run videoValidator");
    this.videoValidator();

    if (isStream) {
      debug.log("Executed stream translation");
      translateStream(
        videoURL,
        requestLang,
        responseLang,
        async (success, reqInterval, resOrError) => {
          debug.log("[exec callback] translateStream callback");
          if (getVideoId(this.site.host, this.video) !== VIDEO_ID) return;
          if (!success || !resOrError.translatedInfo) {
            await this.updateTranslationErrorMsg(resOrError);

            if (reqInterval === 10) {
              // if wait translating
              clearTimeout(this.autoRetry);
              this.autoRetry = setTimeout(
                () =>
                  this.translateFunc(
                    VIDEO_ID,
                    isStream,
                    requestLang,
                    responseLang,
                    translationHelp,
                  ),
                reqInterval * 1000,
              );
            }

            return;
          }

          this.transformBtn(
            "success",
            localizationProvider.get("disableTranslate"),
          );

          console.log(resOrError);
          const pingId = resOrError.pingId;
          debug.log(`Stream pingId: ${pingId}`);
          // if you don't make ping requests, then the translation of the stream dies
          this.streamPing = setInterval(
            async () =>
              await requestStreamPing(pingId, (result) =>
                debug.log("Stream ping result: ", result),
              ),
            reqInterval * 1000,
          );

          debug.log(resOrError.translatedInfo.url);
          const streamURL = `https://${
            this.data.m3u8ProxyHost
          }/?all=yes&origin=${encodeURIComponent(
            "https://strm.yandex.ru",
          )}&referer=${encodeURIComponent(
            "https://strm.yandex.ru",
          )}&url=${encodeURIComponent(resOrError.translatedInfo.url)}`;
          debug.log(streamURL);

          if (this.hls) {
            this.hls.on(Hls.Events.MEDIA_ATTACHED, function () {
              debug.log("audio and hls.js are now bound together !");
            });
            this.hls.on(Hls.Events.MANIFEST_PARSED, function (data) {
              debug.log(
                "manifest loaded, found " +
                  data?.levels?.length +
                  " quality level",
              );
            });
            this.hls.loadSource(streamURL);
            this.hls.attachMedia(this.audio);
            this.hls.on(Hls.Events.ERROR, function (data) {
              if (data.fatal) {
                switch (data.type) {
                  case Hls.ErrorTypes.MEDIA_ERROR:
                    console.log(
                      "fatal media error encountered, try to recover",
                    );
                    this.hls.recoverMediaError();
                    break;
                  case Hls.ErrorTypes.NETWORK_ERROR:
                    console.error("fatal network error encountered", data);
                    // All retries and media options have been exhausted.
                    // Immediately trying to restart loading could cause loop loading.
                    // Consider modifying loading policies to best fit your asset and network
                    // conditions (manifestLoadPolicy, playlistLoadPolicy, fragLoadPolicy).
                    break;
                  default:
                    // cannot recover
                    this.hls.destroy();
                    break;
                }
              }
            });
            debug.log(this.hls);
          } else if (this.audio.canPlayType("application/vnd.apple.mpegurl")) {
            // safari
            this.audio.src = streamURL;
          } else {
            // browser doesn't support m3u8 (hls unsupported and it's not a safari)
            throw new VOTLocalizedError("audioFormatNotSupported");
          }

          if (this.site.host === "youtube") {
            youtubeUtils.videoSeek(this.video, 10); // 10 is the most successful number for streaming. With it, the audio is not so far behind the original
          }

          this.volumeOnStart = this.getVideoVolume();
          if (typeof this.data.defaultVolume === "number") {
            this.audio.volume = this.data.defaultVolume / 100;
          }

          if (
            typeof this.data.autoSetVolumeYandexStyle === "number" &&
            this.data.autoSetVolumeYandexStyle
          ) {
            this.setVideoVolume(this.data.autoVolume);
          }

          if (
            !this.video.src &&
            !this.video.currentSrc &&
            !this.video.srcObject
          ) {
            this.stopTranslation();
            return;
          }

          if (this.video && !this.video.paused) this.lipSync("play");
          videoLipSyncEvents.forEach((e) =>
            this.video.addEventListener(e, this.handleVideoEventBound),
          );

          this.afterUpdateTranslation(streamURL);
        },
      );

      return;
    }

    if (["udemy", "coursera"].includes(this.site.host) && !translationHelp) {
      throw new VOTLocalizedError("VOTTranslationHelpNull");
    }

    const cachedTranslation = this.videoTranslations.find(
      (t) =>
        t.videoId === VIDEO_ID &&
        t.expires > Date.now() / 1000 &&
        t.from === requestLang &&
        t.to === responseLang,
    );

    if (cachedTranslation) {
      this.updateTranslation(cachedTranslation.url);
      debug.log("[translateFunc] A cached translate was received");
      return;
    }

    translateVideo(
      videoURL,
      this.videoData.duration,
      requestLang,
      responseLang,
      translationHelp,
      async (success, urlOrError) => {
        debug.log("[exec callback] translateVideo callback");
        if (getVideoId(this.site.host, this.video) !== VIDEO_ID) return;
        if (!success) {
          await this.updateTranslationErrorMsg(urlOrError);

          // if the error line contains information that the translation is being performed, then we wait
          if (
            urlOrError.includes(localizationProvider.get("translationTake"))
          ) {
            clearTimeout(this.autoRetry);
            this.autoRetry = setTimeout(
              () =>
                this.translateFunc(
                  VIDEO_ID,
                  isStream,
                  requestLang,
                  responseLang,
                  translationHelp,
                ),
              60_000,
            );
          }
          console.error("[VOT]", urlOrError);
          return;
        }

        this.updateTranslation(urlOrError);

        this.videoTranslations.push({
          videoId: VIDEO_ID,
          from: requestLang,
          to: responseLang,
          url: urlOrError,
          expires: Date.now() / 1000 + this.videoTranslationTTL,
        });
      },
    );
  }

  // Define a function to stop translation and clean up
  stopTranslation() {
    this.stopTranslate();
    this.syncVideoVolumeSlider();
  }

  async handleSrcChanged() {
    debug.log("[VideoHandler] src changed", this);

    this.stopTranslation();

    this.firstPlay = true;

    this.videoData = await this.getVideoData();
    if (this.videoData.detectedLanguage) {
      this.setSelectMenuValues(
        this.videoData.detectedLanguage,
        this.videoData.responseLanguage,
      );
    }

    const hide =
      !this.video.src && !this.video.currentSrc && !this.video.srcObject;
    this.votButton.container.hidden = hide;
    hide && (this.votMenu.container.hidden = hide);

    if (!this.site.selector) {
      this.container = this.video.parentElement;
    }

    if (!this.container.contains(this.votButton.container)) {
      this.container.appendChild(this.votButton.container);
      this.container.appendChild(this.votMenu.container);
    }

    await this.updateSubtitles();
    await this.changeSubtitlesLang("disabled");
    this.translateToLang = this.data.responseLanguage ?? "ru";
  }

  async release() {
    debug.log("[VideoHandler] release");

    this.initialized = false;
    this.stopTranslation();
    this.releaseExtraEvents();
    this.subtitlesWidget.release();
    this.votButton.container.remove();
    this.votMenu.container.remove();
  }
}

function getSites() {
  return sites.filter((e) => {
    const isMathes = (match) => {
      return (
        (match instanceof RegExp && match.test(window.location.hostname)) ||
        (typeof match === "string" &&
          window.location.hostname.includes(match)) ||
        (typeof match === "function" && match(new URL(window.location)))
      );
    };
    if (
      isMathes(e.match) ||
      (e.match instanceof Array && e.match.some((e) => isMathes(e)))
    ) {
      return e.host && e.url;
    }
    return false;
  });
}

const videoObserver = new VideoObserver();
const videosWrappers = new WeakMap();

async function main() {
  debug.log("Loading extension...");

  await localizationProvider.update();

  debug.log(`Selected menu language: ${localizationProvider.lang}`);

  if (
    BUILD_MODE !== "cloudflare" &&
    GM_info?.scriptHandler &&
    cfOnlyExtensions.includes(GM_info.scriptHandler)
  ) {
    console.error(
      `[VOT] ${localizationProvider.getDefault("unSupportedExtensionError").replace("{0}", GM_info.scriptHandler)}`,
    );
    return alert(
      `[VOT] ${localizationProvider.get("unSupportedExtensionError").replace("{0}", GM_info.scriptHandler)}`,
    );
  }

  debug.log("Extension compatibility passed...");

  videoObserver.onVideoAdded.addListener((video) => {
    for (const site of getSites()) {
      if (!site) continue;

      let container;
      if (site.shadowRoot) {
        container = site.selector
          ? Object.values(document.querySelectorAll(site.selector)).find((e) =>
              e.shadowRoot.contains(video),
            )
          : video.parentElement;
        container =
          container && container.shadowRoot
            ? container.parentElement
            : container;
      } else {
        const browserVersion = browserInfo.browser.version.split(".")?.[0];

        if (
          site.selector?.includes(":not") &&
          site.selector?.includes("*") &&
          browserVersion &&
          ((browserInfo.browser.name === "Chrome" &&
            Number(browserVersion) < 88) ||
            (browserInfo.browser.name === "Firefox" &&
              Number(browserVersion) < 84))
        ) {
          const selector = site.selector?.split(" *")?.[0];
          container = selector
            ? Object.values(document.querySelectorAll(selector)).find((e) =>
                e.contains(video),
              )
            : video.parentElement;
        } else {
          container = site.selector
            ? Object.values(document.querySelectorAll(site.selector)).find(
                (e) => e.contains(video),
              )
            : video.parentElement;
        }
      }
      if (!container) continue;
      if (site.host === "rumble" && container.querySelector("vot-block")) {
        // fix multiply translation buttons in rumble.com
        continue;
      }

      if (site.host === "peertube") {
        // we set the url of the current site, since peertube doesn't have a main server
        site.url = window.location.origin;
      }

      if (!videosWrappers.has(video)) {
        videosWrappers.set(video, new VideoHandler(video, container, site));
        break;
      }
    }
  });
  videoObserver.onVideoRemoved.addListener(async (video) => {
    if (videosWrappers.has(video)) {
      await videosWrappers.get(video).release();
      videosWrappers.delete(video);
    }
  });
  videoObserver.enable();
}

main().catch((e) => {
  console.error("[VOT]", e);
});

// if (import.meta.webpackHot) {
//   import.meta.webpackHot.monkeyReload();
//   import.meta.webpackHot.dispose(() => {
//     for (const selector of [
//       ".vot-menu",
//       ".vot-segmented-button",
//       ".vot-subtitles-widget",
//     ]) {
//       document.querySelector(selector)?.remove();
//     }
//   });
// }
