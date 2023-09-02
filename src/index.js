import "./styles/main-old.css"; // TODO: remove
import "./styles/main.scss";
import { VOTLocalizedError } from "./utils/VOTLocalizedError.js";
import { youtubeUtils } from "./utils/youtubeUtils.js";
import { yandexProtobuf } from "./yandexProtobuf.js";
import { getVideoId, secsToStrTime } from "./utils/utils.js";
import { autoVolume } from "./config/config.js";
import { sitesInvidious, sitesPiped } from "./config/alternativeUrls.js";
import {
  availableLangs,
  additionalTTS,
  siteTranslates,
  cfOnlyExtensions,
} from "./config/constants.js";
import { localizationProvider } from "./localization/localizationProvider.js";
import { initDB, readDB, updateDB, deleteDB } from "./indexedDB.js";
import {
  transformBtn,
  addTranslationBlock,
  createTranslationMenu,
  createMenuCheckbox,
  createMenuSlider,
  createMenuSelect,
  genOptionsByOBJ,
  lang,
} from "./menu-old.js"; // TODO: remove
import ui from "./ui.js";
import { syncVolume } from "./utils/volume.js";
import { workerHost } from "./config/config-cloudflare.js";
import debug from "./utils/debug.js";

import requestVideoTranslation from "./rvt.js";
import {
  getSubtitles,
  fetchSubtitles,
  addSubtitlesWidget,
  setSubtitlesWidgetContent,
  setSubtitlesMaxLength,
  setSubtitlesHighlightWords,
} from "./subtitles.js";
import { courseraUtils } from "./utils/courseraUtils.js";
import { udemyUtils } from "./utils/udemyUtils.js";

import { VideoObserver } from "./utils/VideoObserver.js";
import sites from "./config/sites.js";

const sitesChromiumBlocked = [...sitesInvidious, ...sitesPiped];

// translate properties
let translateFromLang = "en"; // default language of video

let translateToLang = lang; // default language of audio response

let ytData = "";
let subtitlesList = [];
let subtitlesListVideoId = null;

let timer;
const audio = new Audio();
let opacityRatio = 0.9;
let openedMenu = false;

if (BUILD_MODE === "cloudflare") {
  var translationPanding = false;
}

function logout(n) {
  if (openedMenu) return;

  document.querySelector(".translationBlock").style.opacity = n;
}

function resetTimer() {
  clearTimeout(timer);
  logout(1);
  timer = setTimeout(() => {
    logout(0);
  }, 2000);
}

function changeOpacityOnEvent(event, timer, opacityRatio) {
  clearTimeout(timer);
  logout(opacityRatio);
  event.stopPropagation();
}

const deleteAudioSrc = async () => {
  audio.src = "";
  audio.removeAttribute("src");
};

// Add menu container
function addTranslationMenu(element) {
  if (element.querySelector(".translationMenuContent")) return;

  const container = createTranslationMenu();
  element.appendChild(container);

  // click to translation menu icon
  document
    .querySelector(".translationMenu")
    ?.addEventListener("click", (event) => {
      event.stopPropagation();
      const content = document.querySelector(".translationMenuContent");
      content.style.display = openedMenu ? "none" : "block";
      content.style.opacity = opacityRatio;
      openedMenu = !openedMenu;
    });

  document
    .querySelector(".translationDropDB")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      deleteDB();
      location.reload();
    });

  debug.log("Added translation menu to ", element);
}

function translateVideo(
  url,
  duration,
  requestLang,
  responseLang,
  translationHelp,
  callback
) {
  debug.log(
    `Translate video (url: ${url}, duration: ${duration}, requestLang: ${requestLang}, responseLang: ${responseLang})`
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
              localizationProvider.get("audioNotReceived")
          );
          break;
        case 2:
          callback(
            false,
            translateResponse.remainingTime
              ? secsToStrTime(translateResponse.remainingTime)
              : localizationProvider.get("translationTakeFewMinutes")
          );
          break;
        case 3:
          /*
            Иногда, в ответе приходит статус код 3, но видео всё, так же, ожидает перевода.
            В конечном итоге, это занимает слишком много времени,
            как-будто сервер не понимает, что данное видео уже недавно было переведено
            и заместо возвращения готовой ссылки на перевод начинает переводить видео заново
            при чём у него это получается за очень длительное время.
          */
          callback(false, localizationProvider.get("videoBeingTranslated"));
          break;
      }
    }
  );
}

async function translateProccessor(videoContainer, siteHostname, stop = false) {
  debug.log("[translateProccessor] execute on element: ", videoContainer);

  let video;
  let autoRetry;
  let volumeOnStart;
  let tempOriginalVolume;
  let tempVolume;
  let dbSubtitlesMaxLength;
  let dbHighlightWords;
  let dbAutoTranslate;
  let dbDefaultVolume;
  let dbShowVideoSlider;
  let dbAutoSetVolumeYandexStyle;
  let dontTranslateYourLang;
  let dbSyncVolume;
  let dbUdemyData;
  let dbResponseLanguage;
  let dbAudioProxy; // cf version only
  let firstPlay = true;
  let isDBInited;
  let videoData = "";

  debug.log("videoContainer", videoContainer);

  video =
    siteHostname === "vimeo"
      ? videoContainer.querySelector(
          ".vp-video-wrapper > .vp-video > .vp-telecine > video"
        )
      : videoContainer.querySelector("video");

  debug.log("video", video);

  const container =
    siteHostname === "pornhub" &&
    window.location.pathname.includes("view_video.php")
      ? document.querySelector(".original.mainPlayerDiv")
      : siteHostname === "pornhub" &&
        window.location.pathname.includes("embed/")
      ? document.querySelector("body")
      : window.location.hostname.includes("m.youtube.com")
      ? document.querySelector("#player-control-container")
      : videoContainer;

  addTranslationBlock(container);
  addTranslationMenu(container);
  if (
    window.location.hostname.includes("youtube.com") &&
    !window.location.hostname.includes("m.youtube.com")
  ) {
    addSubtitlesWidget(container.parentElement);
  } else {
    addSubtitlesWidget(container);
  }
  await changeSubtitlesLang("disabled");

  try {
    isDBInited = await initDB();
  } catch (err) {
    console.error(
      "[VOT] Failed to initialize database settings. All changes made will not be saved",
      err
    );
  }

  const menuOptions = document.querySelector(".translationMenuOptions");
  if (menuOptions && !menuOptions.querySelector("#VOTTranslateFromLang")) {
    const selectFromLangOptions = [
      {
        label: localizationProvider.get("videoLanguage"),
        value: "default",
        disabled: true,
      },
      ...genOptionsByOBJ(availableLangs, videoData.detectedLanguage),
    ];

    const selectToLangOptions = [
      {
        label: localizationProvider.get("translationLanguage"),
        value: "default",
        disabled: true,
      },
      ...genOptionsByOBJ(availableLangs, videoData.responseLanguage),
      {
        label: "─────────",
        value: "separator",
        disabled: true,
      },
      ...genOptionsByOBJ(additionalTTS, videoData.responseLanguage),
    ];

    const selectFromLang = createMenuSelect(
      "VOTTranslateFromLang",
      selectFromLangOptions
    );

    const selectToLang = createMenuSelect(
      "VOTTranslateToLang",
      selectToLangOptions
    ).firstElementChild;

    selectFromLang.id = "VOTSelectLanguages";
    selectFromLang.innerHTML += `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"/>
      </svg>
    `;

    selectFromLang.appendChild(selectToLang);
    menuOptions.appendChild(selectFromLang);

    menuOptions
      .querySelector("#VOTTranslateFromLang")
      .addEventListener("change", async (event) => {
        debug.log("[onchange] select from language", event.target.value);
        videoData = await getVideoData();
        await setSelectMenuValues(
          event.target.value,
          videoData.responseLanguage
        );
      });

    menuOptions
      .querySelector("#VOTTranslateToLang")
      .addEventListener("change", async (event) => {
        debug.log("[onchange] select to language", event.target.value);
        if (isDBInited) {
          translateToLang = event.target.value;
          await updateDB({ responseLanguage: event.target.value });
          debug.log(
            "Response Language value changed. New value: ",
            event.target.value
          );
        }
        videoData = await getVideoData();
        await setSelectMenuValues(
          videoData.detectedLanguage,
          event.target.value
        );
      });
  }

  async function changeSubtitlesLang(subs) {
    debug.log("[onchange] subtitles", subs);
    const select = document
      .querySelector(".translationMenuOptions")
      ?.querySelector("#VOTSubtitlesLang");
    select && (select.value = subs);
    if (!video) {
      console.error("[VOT] video not found");
      select && (select.value = "disabled");
      return;
    }
    if (subs === "disabled") {
      setSubtitlesWidgetContent(video, null);
    } else {
      setSubtitlesWidgetContent(
        video,
        await fetchSubtitles(subtitlesList.at(parseInt(subs)))
      );
    }
  }

  async function updateSubtitlesLangSelect() {
    const select = document
      .querySelector(".translationMenuOptions")
      ?.querySelector("#VOTSubtitlesLang");

    if (!select) {
      console.error("[VOT] #VOTSubtitlesLang not found");
      return;
    }

    const oldValue = select.value;
    select.innerHTML = "";

    const disabledOption = document.createElement("option");
    disabledOption.value = "disabled";
    disabledOption.innerHTML = localizationProvider.get(
      "VOTSubtitlesDisabled"
    );
    select.append(disabledOption);

    for (let i = 0; i < subtitlesList.length; i++) {
      const s = subtitlesList[i];
      const option = document.createElement("option");
      option.value = i;
      option.innerHTML =
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
          : "");
      select.append(option);
    }

    await changeSubtitlesLang(oldValue);
  }

  if (menuOptions && !menuOptions.querySelector("#VOTSubtitlesLang")) {
    const options = [
      {
        label: localizationProvider.get("VOTSubtitlesDisabled"),
        value: "disabled",
        disabled: false,
      },
    ];

    const select = createMenuSelect("VOTSubtitlesLang", options);

    select.id = "VOTSubtitlesLangContainer";
    const span = document.createElement("span");
    span.textContent = localizationProvider.get("VOTSubtitles");
    select.prepend(span);

    menuOptions.appendChild(select);

    menuOptions
      .querySelector("#VOTSubtitlesLang")
      .addEventListener("change", async (event) => {
        await changeSubtitlesLang(event.target.value);
      });
  }

  if (isDBInited) {
    const dbData = await readDB();
    if (dbData) {
      dbSubtitlesMaxLength = dbData.subtitlesMaxLength;
      dbHighlightWords = dbData.highlightWords;
      dbAutoTranslate = dbData.autoTranslate;
      dbDefaultVolume = dbData.defaultVolume;
      dbShowVideoSlider = dbData.showVideoSlider;
      dbAutoSetVolumeYandexStyle = dbData.autoSetVolumeYandexStyle;
      dontTranslateYourLang = dbData.dontTranslateYourLang;
      dbResponseLanguage = dbData.responseLanguage;
      dbAudioProxy = dbData.audioProxy; // cf version only
      dbSyncVolume = dbData.syncVolume; // youtube only
      dbUdemyData = dbData.udemyData; // udemy only

      debug.log("[db] data from db: ", dbData);

      if (dbSubtitlesMaxLength !== undefined) {
        setSubtitlesMaxLength(dbSubtitlesMaxLength);
      }

      if (dbHighlightWords !== undefined) {
        setSubtitlesHighlightWords(dbHighlightWords);
      }

      if (dbResponseLanguage !== undefined) {
        videoData = await getVideoData();
        setSelectMenuValues(videoData.detectedLanguage, dbResponseLanguage);
        translateToLang = dbResponseLanguage;
      }

      if (
        dbSubtitlesMaxLength !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTSubtitlesMaxLengthSlider")
      ) {
        const slider = createMenuSlider(
          "VOTSubtitlesMaxLengthSlider",
          dbSubtitlesMaxLength,
          `${localizationProvider.get(
            "VOTSubtitlesMaxLength"
          )}: <b id="VOTSubtitlesMaxLengthValue">${dbSubtitlesMaxLength}</b>`,
          50,
          300
        );

        slider.querySelector("#VOTSubtitlesMaxLengthSlider").oninput = async (
          event
        ) => {
          const value = Number(event.target.value);
          await updateDB({ subtitlesMaxLength: value });
          dbSubtitlesMaxLength = value;
          slider.querySelector(
            "#VOTSubtitlesMaxLengthValue"
          ).innerText = `${value}`;
          setSubtitlesMaxLength(value);
        };

        menuOptions.appendChild(slider);
      }

      if (
        dbHighlightWords !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTHighlightWords")
      ) {
        const checkbox = createMenuCheckbox(
          "VOTHighlightWords",
          dbHighlightWords,
          localizationProvider.get("VOTHighlightWords")
        );

        checkbox.querySelector("#VOTHighlightWords").onclick = async (
          event
        ) => {
          event.stopPropagation();
          const value = Number(event.target.checked);
          await updateDB({ highlightWords: value });
          dbHighlightWords = value;
          debug.log(
            "highlightWords value changed. New value: ",
            dbHighlightWords
          );
          setSubtitlesHighlightWords(value);
        };

        menuOptions.appendChild(checkbox);
      }

      if (
        dbAutoTranslate !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTAutoTranslate")
      ) {
        const checkbox = createMenuCheckbox(
          "VOTAutoTranslate",
          dbAutoTranslate,
          localizationProvider.get("VOTAutoTranslate") +
            (siteHostname === "vk" ||
            window.location.hostname.includes("m.twitch.tv")
              ? ` <strong>(${localizationProvider.get(
                  "recommended"
                )})</strong>`
              : "")
        );

        checkbox.querySelector("#VOTAutoTranslate").onclick = async (
          event
        ) => {
          event.stopPropagation();
          const value = Number(event.target.checked);
          await updateDB({ autoTranslate: value });
          dbAutoTranslate = value;
          debug.log(
            "autoTranslate value changed. New value: ",
            dbAutoTranslate
          );
        };

        menuOptions.appendChild(checkbox);
      }

      if (
        window.location.hostname.includes("youtube.com") &&
        dontTranslateYourLang !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTDontTranslateYourLang")
      ) {
        const checkbox = createMenuCheckbox(
          "VOTDontTranslateYourLang",
          dontTranslateYourLang,
          localizationProvider.get("VOTDontTranslateYourLang")
        );

        checkbox.querySelector("#VOTDontTranslateYourLang").onclick = async (
          event
        ) => {
          event.stopPropagation();
          const value = Number(event.target.checked);
          await updateDB({ dontTranslateYourLang: value });
          dontTranslateYourLang = value;
          debug.log(
            "dontTranslateYourLang value changed. New value: ",
            dontTranslateYourLang
          );
        };

        menuOptions.appendChild(checkbox);
      }

      if (
        dbAutoSetVolumeYandexStyle !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTAutoSetVolume")
      ) {
        const checkbox = createMenuCheckbox(
          "VOTAutoSetVolume",
          dbAutoSetVolumeYandexStyle,
          localizationProvider.get("VOTAutoSetVolume") +
            `${autoVolume * 100}%`
        );

        checkbox.querySelector("#VOTAutoSetVolume").onclick = async (
          event
        ) => {
          event.stopPropagation();
          const value = Number(event.target.checked);
          await updateDB({ autoSetVolumeYandexStyle: value });
          dbAutoSetVolumeYandexStyle = value;
          debug.log(
            "autoSetVolumeYandexStyle value changed. New value: ",
            dbAutoSetVolumeYandexStyle
          );
        };

        menuOptions.appendChild(checkbox);
      }

      if (
        dbShowVideoSlider !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTShowVideoSlider")
      ) {
        const checkbox = createMenuCheckbox(
          "VOTShowVideoSlider",
          dbShowVideoSlider,
          localizationProvider.get("VOTShowVideoSlider")
        );

        checkbox.querySelector("#VOTShowVideoSlider").onclick = async (
          event
        ) => {
          event.stopPropagation();
          const value = Number(event.target.checked);
          await updateDB({ showVideoSlider: value });
          dbShowVideoSlider = value;
          debug.log(
            "showVideoSlider value changed. New value: ",
            dbShowVideoSlider
          );
          if (
            dbShowVideoSlider === 1 &&
            document.querySelector(".translationBtn").dataset.state ===
              "success"
          ) {
            addVideoSlider();
          } else {
            document.querySelector("#VOTVideoSlider")?.parentElement.remove();
          }
        };

        menuOptions.appendChild(checkbox);
      }

      if (
        window.location.hostname.includes("youtube.com") &&
        !window.location.hostname.includes("m.youtube.com") &&
        dbSyncVolume !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTSyncVolume")
      ) {
        const checkbox = createMenuCheckbox(
          "VOTSyncVolume",
          dbSyncVolume,
          localizationProvider.get("VOTSyncVolume")
        );

        checkbox.querySelector("#VOTSyncVolume").onclick = async (event) => {
          event.stopPropagation();
          const value = Number(event.target.checked);
          await updateDB({ syncVolume: value });
          dbSyncVolume = value;
          debug.log("syncVolume value changed. New value: ", dbSyncVolume);
        };

        menuOptions.appendChild(checkbox);
      }

      // cf version only
      if (
        BUILD_MODE === "cloudflare" &&
        dbAudioProxy !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTAudioProxy")
      ) {
        const checkbox = createMenuCheckbox(
          "VOTAudioProxy",
          dbAudioProxy,
          localizationProvider.get("VOTAudioProxy")
        );

        checkbox.querySelector("#VOTAudioProxy").onclick = async (event) => {
          event.stopPropagation();
          const value = Number(event.target.checked);
          await updateDB({ audioProxy: value });
          dbAudioProxy = value;
          debug.log("audioProxy value changed. New value: ", dbAudioProxy);
        };

        menuOptions.appendChild(checkbox);
      }

      if (
        window.location.hostname.includes("udemy.com") &&
        dbUdemyData !== undefined &&
        menuOptions &&
        !menuOptions.querySelector("#VOTUdemyData")
      ) {
        // TODO: Along with the rework of the menu, change to the input field
        const btn = document.createElement("button");
        btn.classList.add("translationUdemyData");
        btn.innerText = localizationProvider.get("VOTUdemyData");
        btn.onclick = async (event) => {
          event.stopPropagation();
          const accessToken = prompt(
            localizationProvider.get("enterUdemyAccessToken")
          );
          const udemyData = {
            accessToken,
            expires: new Date().getTime(),
          };
          await updateDB({ udemyData });
          dbUdemyData = udemyData;
          debug.log("udemyData value changed. New value: ", dbUdemyData);
          window.location.reload();
        };
        menuOptions.appendChild(btn);
      }
    }
  }

  transformBtn("none", localizationProvider.get("translateVideo"));

  if (
    window.location.hostname.includes("youtube.com") &&
    !window.location.hostname.includes("m.youtube.com")
  ) {
    const syncVolumeObserver = new MutationObserver(async function (
      mutations
    ) {
      mutations.forEach(async function (mutation) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "aria-valuenow" &&
          document.querySelector("#VOTVideoSlider")
        ) {
          syncVideoVolumeSlider();
        }
      });
    });

    const ytpVolumePanel = document.querySelector(".ytp-volume-panel");
    if (ytpVolumePanel) {
      syncVolumeObserver.observe(ytpVolumePanel, {
        attributes: true,
        childList: false,
        subtree: true,
        attributeOldValue: true,
      });
    }
  }

  async function setSelectMenuValues(from, to) {
    if (!document.querySelector("#VOTSelectLanguages")) {
      return;
    }
    document.querySelector("#VOTTranslateFromLang").value = from;
    document.querySelector("#VOTTranslateToLang").value = to;
    console.log(`[VOT] Set translation from ${from} to ${to}`);
    videoData.detectedLanguage = from;
    videoData.responseLanguage = to;
  }

  async function stopTraslate() {
    // Default actions on stop translate
    audio.pause();
    video.removeEventListener(".translate", stopTraslate, false);
    await deleteAudioSrc();
    document.querySelector("#VOTVideoSlider")?.parentElement.remove();
    document.querySelector("#VOTTranslationSlider")?.parentElement.remove();
    const downloadBtn = document.querySelector(".translationDownload");
    if (downloadBtn) {
      downloadBtn.href = "";
      downloadBtn.style.display = "none";
    }
    transformBtn("none", localizationProvider.get("translateVideo"));
    if (volumeOnStart) {
      debug.log(`Volume on start: ${volumeOnStart}`);
      if (window.location.hostname.includes("youtube.com")) {
        document
          .querySelector(".html5-video-player")
          .setVolume(volumeOnStart * 100);
      } else {
        video.volume = volumeOnStart;
      }
    }
  }

  async function syncVideoVolumeSlider() {
    // Sync volume slider with original video (youtube only)
    const newSlidersVolume = Math.round(getVideoVolume() * 100);

    const videoSlider = document.querySelector("#VOTVideoSlider");

    if (!videoSlider) {
      return;
    }
    videoSlider.value = newSlidersVolume;

    const videoVolumeLabel = document.querySelector("#VOTOriginalVolume");

    if (videoVolumeLabel) {
      videoVolumeLabel.innerText = `${newSlidersVolume}%`;
    }

    if (dbSyncVolume === 1) {
      tempOriginalVolume = Number(newSlidersVolume);
    }
  }

  function getVideoVolume() {
    /**
     * Get video volume in 0.00-1.00 format
     */
    let videoVolume = video?.volume;
    if (window.location.hostname.includes("youtube.com")) {
      videoVolume = youtubeUtils.getVideoVolume() || videoVolume;
    }
    return videoVolume;
  }

  function setVideoVolume(volume) {
    /**
     * Set video volume in 0.00-1.00 format
     */
    if (window.location.hostname.includes("youtube.com")) {
      return youtubeUtils.setVideoVolume(volume);
    }

    video.volume = volume;
  }

  async function getVideoData() {
    const videoData = {};

    videoData.translationHelp = null; // ! should be null for ALL websites except coursera and udemy !
    videoData.duration = video?.duration || 343; // ! if 0 - we get 400 error
    videoData.videoId = getVideoId(siteHostname);
    videoData.detectedLanguage = translateFromLang;
    videoData.responseLanguage = translateToLang;

    if (window.location.hostname.includes("youtube.com")) {
      ytData = await youtubeUtils.getVideoData();
      if (ytData.author !== "") {
        videoData.detectedLanguage = ytData.detectedLanguage;
        videoData.responseLanguage = translateToLang;
      }
    } else if (
      window.location.hostname.includes("rutube") ||
      window.location.hostname.includes("my.mail.ru")
    ) {
      videoData.detectedLanguage = "ru";
      videoData.responseLanguage = "en";
    } else if (window.location.hostname.includes("bilibili.com")) {
      videoData.detectedLanguage = "zh";
    } else if (window.location.hostname.includes("coursera.org")) {
      const courseraData = await courseraUtils.getVideoData(translateToLang);
      videoData.duration = courseraData.duration || videoData.duration; // courseraData.duration sometimes it can be equal to NaN
      videoData.detectedLanguage = courseraData.detectedLanguage;
      videoData.translationHelp = courseraData.translationHelp;
    } else if (window.location.hostname.includes("udemy.com")) {
      const udemyData = await udemyUtils.getVideoData(
        dbUdemyData,
        translateToLang
      );
      videoData.duration = udemyData.duration || videoData.duration;
      videoData.detectedLanguage = udemyData.detectedLanguage;
      videoData.translationHelp = udemyData.translationHelp;
    }

    return videoData;
  }

  const lipSync = async (mode = false) => {
    debug.log("lipsync video", video);
    if (!video) {
      return;
    }
    audio.currentTime = video.currentTime;
    audio.playbackRate = video.playbackRate;

    if (!mode) {
      debug.log("lipsync mode is not set");
      return;
    }

    if (mode === "play") {
      debug.log("lipsync mode is play");
      const audioPromise = audio.play();
      if (audioPromise !== undefined) {
        audioPromise.catch((e) => {
          console.error("[VOT]", e);
          if (e.name === "NotAllowedError") {
            transformBtn(
              "error",
              localizationProvider.get("grantPermissionToAutoPlay")
            );
            throw new VOTLocalizedError("grantPermissionToAutoPlay");
          } else if (e.name === "NotSupportedError") {
            transformBtn(
              "error",
              sitesChromiumBlocked.includes(window.location.hostname)
                ? localizationProvider.get("neededAdditionalExtension")
                : localizationProvider.get("audioFormatNotSupported")
            );
            throw sitesChromiumBlocked.includes(window.location.hostname)
              ? new VOTLocalizedError("neededAdditionalExtension")
              : new VOTLocalizedError("audioFormatNotSupported");
          }
        });
      }
      return;
    }
    if (mode === "pause") {
      debug.log("lipsync mode is pause");
      audio.pause();
    }
    if (mode === "stop") {
      debug.log("lipsync mode is stop");
      audio.pause();
    }
    if (mode === "waiting") {
      debug.log("lipsync mode is waiting");
      audio.pause();
    }
    if (mode === "playing") {
      debug.log("lipsync mode is playing");
      audio.play();
    }
  };

  function addVideoSlider() {
    if (
      dbShowVideoSlider !== 1 ||
      document.querySelector("#VOTVideoSlider") ||
      document.querySelector(".translationBtn").dataset.state !== "success"
    ) {
      return;
    }

    const newVolume = getVideoVolume() * 100;
    tempOriginalVolume = newVolume;

    const slider = createMenuSlider(
      "VOTVideoSlider",
      newVolume,
      `${localizationProvider.get(
        "VOTVolume"
      )}: <b class = "volumePercent" id="VOTOriginalVolume">${newVolume}%</b>`
    );

    slider.querySelector("#VOTVideoSlider").oninput = async (event) => {
      const { value } = event.target;
      setVideoVolume(value / 100);
      slider.querySelector("#VOTOriginalVolume").innerText = `${value}%`;

      if (dbSyncVolume !== 1) {
        return;
      }

      // Sync translation volume slider with video volume slider
      const translateVolumeSlider = document.querySelector(
        "#VOTTranslationSlider"
      );

      if (!translateVolumeSlider) {
        return;
      }
      const translateVolume = Number(translateVolumeSlider.value);
      const finalValue = syncVolume(
        audio,
        value,
        translateVolume,
        tempOriginalVolume
      );

      translateVolumeSlider.value = finalValue;

      const translateVolumeLabel = document.querySelector(
        "#VOTTranslationVolume"
      );

      if (translateVolumeLabel) {
        translateVolumeLabel.innerText = `${finalValue}%`;
      }

      tempVolume = finalValue;
      tempOriginalVolume = value;
    };

    const menuOptions = document.querySelector(".translationMenuOptions");
    menuOptions.appendChild(slider);
  }

  async function addTranslationSlider() {
    // Return early if slider already exists or translation is not successful
    if (
      document.querySelector("#VOTTranslationSlider") ||
      document.querySelector(".translationBtn").dataset.state !== "success"
    ) {
      return;
    }

    // Use dbDefaultVolume or 100 as the default translation volume
    const defaultTranslateVolume =
      typeof dbDefaultVolume === "number" ? dbDefaultVolume : 100;
    tempOriginalVolume = defaultTranslateVolume;

    // Create a slider element with the default volume and label
    const slider = createMenuSlider(
      "VOTTranslationSlider",
      defaultTranslateVolume,
      `${localizationProvider.get(
        "VOTVolumeTranslation"
      )}: <b class = "volumePercent" id="VOTTranslationVolume">${defaultTranslateVolume}%</b>`
    );

    // Add an input event listener to the slider
    slider.querySelector("#VOTTranslationSlider").oninput = async ({
      target: { value },
    }) => {
      // Set the audio volume to the slider value
      audio.volume = value / 100;

      // Update the volume label
      document.querySelector("#VOTTranslationVolume").innerText = `${value}%`;

      // Update the database with the new volume value
      await updateDB({ defaultVolume: Number(value) });
      dbDefaultVolume = Number(value);

      // Sync translation volume with video volume if dbSyncVolume is 1
      if (dbSyncVolume === 1) {
        syncTranslationWithVideo(value);
      }
    };

    // Append the slider to the menu options
    const menuOptions = document.querySelector(".translationMenuOptions");
    menuOptions.appendChild(slider);
  }

  // A helper function to sync translation volume with video volume
  function syncTranslationWithVideo(translationValue) {
    // Get the video volume slider element
    const videoVolumeSlider = document.querySelector("#VOTVideoSlider");

    if (!videoVolumeSlider) {
      return;
    }
    // Get the video volume value
    const videoVolume = Number(videoVolumeSlider.value);

    // Calculate the synced video volume based on the translation volume
    const finalValue = syncVolume(
      video,
      translationValue,
      videoVolume,
      tempVolume
    );

    // Set the video volume slider value to the synced value
    videoVolumeSlider.value = finalValue;

    // Update the video volume label
    const videoVolumeLabel = document.querySelector("#VOTOriginalVolume");
    if (videoVolumeLabel) videoVolumeLabel.innerText = `${finalValue}%`;

    // Update the temp variables for future syncing
    tempOriginalVolume = finalValue;
    tempVolume = translationValue;
  }

  async function videoValidator() {
    if (window.location.hostname.includes("youtube.com")) {
      debug.log("VideoValidator videoData: ", videoData);
      if (
        dontTranslateYourLang === 1 &&
        videoData.detectedLanguage === lang &&
        videoData.responseLanguage === lang
      ) {
        throw new VOTLocalizedError("VOTDisableFromYourLang");
      }
      if (ytData.isPremiere) {
        throw new VOTLocalizedError("VOTPremiere");
      }
      if (ytData.isLive) {
        throw new VOTLocalizedError("VOTLiveNotSupported");
      }
      if (videoData.duration > 14_400) {
        throw new VOTLocalizedError("VOTVideoIsTooLong");
      }
    }
    return true;
  }

  const translateExecutor = async (VIDEO_ID) => {
    if (!videoData.detectedLanguage) {
      videoData = await getVideoData();
      await setSelectMenuValues(
        videoData.detectedLanguage,
        videoData.responseLanguage
      );
    }
    debug.log("Run videoValidator");
    await videoValidator();
    debug.log("Run translateFunc");
    await translateFunc(
      VIDEO_ID,
      videoData.detectedLanguage,
      videoData.responseLanguage,
      videoData.translationHelp
    );
  };

  // Define a function to handle common events
  async function handleVideoEvent(event) {
    debug.log(`video ${event.type}`);
    await lipSync(event.type);
  }

  // Define a function to stop translation and clean up
  async function stopTranslation() {
    await stopTraslate();
    await syncVideoVolumeSlider();
  }

  // Define a function to translate a video and handle the callback
  async function translateFunc(
    VIDEO_ID,
    requestLang,
    responseLang,
    translationHelp
  ) {
    console.log("[VOT] Video Data: ", videoData);
    const videoURL = `${siteTranslates[siteHostname]}${VIDEO_ID}`;
    if (["udemy", "coursera"].includes(siteHostname) && !translationHelp) {
      throw new VOTLocalizedError("VOTTranslationHelpNull");
    }
    translateVideo(
      videoURL,
      videoData.duration,
      requestLang,
      responseLang,
      translationHelp,
      async (success, urlOrError) => {
        debug.log("[exec callback] translateVideo");
        if (getVideoId(siteHostname) !== VIDEO_ID) return;
        if (!success) {
          if (urlOrError?.name === "VOTLocalizedError") {
            transformBtn("error", urlOrError.localizedMessage);
          } else {
            transformBtn("error", urlOrError);
          }
          // if the error line contains information that the translation is being performed, then we wait
          if (
            urlOrError.includes(localizationProvider.get("translationTake"))
          ) {
            clearTimeout(autoRetry);
            autoRetry = setTimeout(
              () =>
                translateFunc(
                  VIDEO_ID,
                  requestLang,
                  responseLang,
                  translationHelp
                ),
              60_000
            );
          }
          throw urlOrError;
        }

        audio.src = urlOrError;

        // cf version only
        if (
          BUILD_MODE === "cloudflare" &&
          dbAudioProxy === 1 &&
          urlOrError.startsWith("https://")
        ) {
          const audioPath = urlOrError.replace(
            "https://vtrans.s3-private.mds.yandex.net/tts/prod/",
            ""
          );
          const proxiedAudioUrl = `https://${workerHost}/video-translation/audio-proxy/${audioPath}`;
          console.log(`[VOT] Audio proxied via ${proxiedAudioUrl}`);
          audio.src = proxiedAudioUrl;
        }

        volumeOnStart = getVideoVolume();
        if (typeof dbDefaultVolume === "number") {
          audio.volume = dbDefaultVolume / 100;
        }
        if (
          typeof dbAutoSetVolumeYandexStyle === "number" &&
          dbAutoSetVolumeYandexStyle
        ) {
          setVideoVolume(autoVolume);
        }

        switch (siteHostname) {
          case "twitter":
            document
              .querySelector('div[data-testid="app-bar-back"][role="button"]')
              .addEventListener("click", stopTranslation);
            break;
          case "invidious":
          case "piped":
            break;
        }

        if (stop || !video.src) {
          stopTranslation();
          return;
        }

        const siteHostnames = [
          "twitch",
          "vimeo",
          "facebook",
          "rutube",
          "twitter",
          "bilibili",
          "mail_ru",
        ];
        for (let i = 0; i < siteHostnames.length; i++) {
          if (siteHostname === siteHostnames[i]) {
            const mutationObserver = new MutationObserver(
              async (mutations) => {
                mutations.forEach(async (mutation) => {
                  if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "src" &&
                    mutation.target === video &&
                    mutation.target.src !== ""
                  ) {
                    stopTranslation();
                    firstPlay = true;
                  }
                });
              }
            );
            mutationObserver.observe(videoContainer, {
              attributes: true,
              childList: false,
              subtree: true,
              attributeOldValue: true,
            });
            break;
          }
        }

        if (video && !video.paused) lipSync("play");
        const videos = document.querySelectorAll("video");
        const events = ["playing", "ratechange", "play", "waiting", "pause"];
        videos.forEach((v) =>
          events.forEach((e) => v.addEventListener(e, handleVideoEvent))
        );
        transformBtn("success", localizationProvider.get("disableTranslate"));
        addVideoSlider();
        await addTranslationSlider();

        const VOTVideoSlider = document.querySelector("#VOTVideoSlider");
        if (VOTVideoSlider) VOTVideoSlider.value = autoVolume * 100;

        const VOTOriginalVolume =
          document.querySelector("#VOTOriginalVolume");
        if (VOTOriginalVolume) {
          VOTOriginalVolume.innerText = `${autoVolume * 100}%`;
        }

        const downloadBtn = document.querySelector(".translationDownload");
        downloadBtn.href = urlOrError;
        downloadBtn.style.display = "initial";
      }
    );
  }

  document.addEventListener("click", async (event) => {
    const block = document.querySelector(".translationBlock");
    const menuContainer = document.querySelector(".translationMenuContent");
    const isBlock =
      block || event.target === block ? block.contains(event.target) : false;
    const isContent =
      menuContainer || event.target === menuContainer
        ? menuContainer.contains(event.target)
        : false;
    const isVideo =
      videoContainer || event.target === videoContainer
        ? videoContainer.contains(event.target)
        : false;

    debug.log(`[document click] ${isBlock} ${isContent} ${isVideo}`);
    if (!(!isBlock && !isContent)) return;
    if (!isVideo) logout(0);

    menuContainer.style.display = "none";
    openedMenu = false;
  });

  const addEventListeners = (element, events, handler) => {
    events.forEach((event) =>
      element.addEventListener(event, async (event) => {
        await handler(event);
      })
    );
  };

  if (siteHostname === "pornhub") {
    if (window.location.pathname.includes("view_video.php")) {
      const videoElement = document.querySelector(
        ".original.mainPlayerDiv > video-element > div"
      );
      addEventListeners(videoElement, ["mousemove", "mouseout"], resetTimer);
    } else if (window.location.pathname.includes("embed/")) {
      const playerElement = document.querySelector("#player");
      addEventListeners(playerElement, ["mousemove", "mouseout"], resetTimer);
    }
  } else if (siteHostname === "twitter") {
    const videoPlayerElement = document.querySelector(
      'div[data-testid="videoPlayer"'
    );
    addEventListeners(
      videoPlayerElement,
      ["mousemove", "mouseout"],
      resetTimer
    );
  } else {
    addEventListeners(videoContainer, ["mousemove", "mouseout"], resetTimer);
  }

  document
    .querySelector(".translationBlock")
    .addEventListener("mousemove", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
  document
    .querySelector(".translationMenuContent")
    .addEventListener("mousemove", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );

  document.addEventListener("touchstart", (event) =>
    changeOpacityOnEvent(event, timer, opacityRatio)
  );
  document.addEventListener("touchmove", (event) =>
    changeOpacityOnEvent(event, timer, opacityRatio)
  );
  document.addEventListener("touchend", (event) =>
    changeOpacityOnEvent(event, timer, opacityRatio)
  );
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("abort", async () => {
      debug.log("lipsync mode is abort");
      await stopTranslation();
      videoData = "";
    });
  });

  document
    .querySelector(".translationBtn")
    .addEventListener("click", async (event) => {
      debug.log("[click translationBtn] before all functions & methods");
      event.stopPropagation();
      event.stopImmediatePropagation();

      // check if the audio source is not empty
      if (audio.src) {
        debug.log("[click translationBtn] audio.src is not empty");
        await stopTraslate();
        return;
      }

      try {
        debug.log("[click translationBtn] trying execute translation");
        const VIDEO_ID = getVideoId(siteHostname);

        if (!VIDEO_ID) {
          throw new VOTLocalizedError("VOTNoVideoIDFound");
        }

        await translateExecutor(VIDEO_ID);
      } catch (err) {
        console.error("[VOT]", err);
        if (err?.name === "VOTLocalizedError") {
          transformBtn("error", err.localizedMessage);
        } else {
          transformBtn("error", err);
        }
      }
    });

  video.addEventListener("progress", async (event) => {
    event.stopPropagation();

    if (!(firstPlay && dbAutoTranslate === 1)) {
      return;
    }
    const VIDEO_ID = getVideoId(siteHostname);

    if (!VIDEO_ID) {
      throw new VOTLocalizedError("VOTNoVideoIDFound");
    }

    try {
      await translateExecutor(VIDEO_ID);
      firstPlay = false;
    } catch (err) {
      console.error("[VOT]", err);
      if (err?.name === "VOTLocalizedError") {
        transformBtn("error", err.localizedMessage);
      } else {
        transformBtn("error", err);
      }
      firstPlay = false;
    }
  });

  document
    .querySelector(".translationMenu")
    .addEventListener("click", async (event) => {
      event.stopPropagation();
      event.stopImmediatePropagation();

      const select = document
        .querySelector(".translationMenuOptions")
        ?.querySelector("#VOTSubtitlesLang");

      if (!openedMenu || !select) {
        return;
      }

      const VIDEO_ID = getVideoId(siteHostname);

      if (!VIDEO_ID) {
        console.error(
          `[VOT] ${localizationProvider.getDefault("VOTNoVideoIDFound")}`
        );
        subtitlesList = [];
        subtitlesListVideoId = null;
        await updateSubtitlesLangSelect();
        return;
      }

      if (subtitlesListVideoId === VIDEO_ID) {
        return;
      }

      if (!videoData.detectedLanguage) {
        videoData = await getVideoData();
        await setSelectMenuValues(
          videoData.detectedLanguage,
          videoData.responseLanguage
        );
      }

      subtitlesList = await getSubtitles(
        siteHostname,
        VIDEO_ID,
        videoData.detectedLanguage
      );
      if (!subtitlesList) {
        await changeSubtitlesLang("disabled");
      } else {
        subtitlesListVideoId = VIDEO_ID;
      }
      await updateSubtitlesLangSelect();
    });
}

// TODO: Create button, menu and events specifically for each video
class VideoHandler {
  constructor(video, container, site) {
    debug.log("[VideoHandler] add video:", video, "container:", container);
    this.video = video;
    this.container = container;
    this.site = site;
    this.handleSrcChangedBound = this.handleSrcChanged.bind(this);
    this.srcObserver = new MutationObserver(this.handleSrcChangedBound);
    this.srcObserver.observe(this.video, {
      attributeFilter: ["src", "currentSrc"]
    });
    // this.initUI();
    this.translateProccessor();
  }

  initUI() {
    // VOT Button
    {
      this.votButton = ui.createVOTButton(localizationProvider.get("translateVideo"));
      this.container.appendChild(this.votButton.container);

      this.votButton.container.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
      });

      this.votButton.translateButton.addEventListener("click", () => {
        console.log("translate"); // TODO
      });
  
      this.votButton.menuButton.addEventListener("click", () => {
        this.votMenu.container.hidden = !this.votMenu.container.hidden;
      });
    }
    
    // VOT Menu
    {
      this.votMenu = ui.createVOTMenu(localizationProvider.get("translationSettings"));
      this.container.appendChild(this.votMenu.container);
  
      this.votDownloadButton = ui.createIconButton(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"/></svg>`);
      // this.votDownloadButton.hidden = true;
      this.votMenu.headerContainer.appendChild(this.votDownloadButton);
  
      this.votSettingsButton = ui.createIconButton(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M555-80H405q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 5-28 1t-22-17L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q7-14 21.5-17.5T220-761l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-5 28-1t22 17l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v27q0 6.5-2 13.5l75 57q12 9 15 24t-5 28l-74 128q-8 13-22.5 17.5T738-199l-85-36q-11 8-23 15t-24 12l-12 93q-2 15-13 25t-26 10Zm-73-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Z"/></svg>`);
      this.votMenu.headerContainer.appendChild(this.votSettingsButton);
  
      this.votTranslationLanguageSelect = ui.createVOTLanguageSelect();
      this.votMenu.bodyContainer.appendChild(this.votTranslationLanguageSelect.container);
  
      this.votSubtitlesSelect = ui.createSelect(localizationProvider.get("VOTSubtitles"));
      this.votMenu.bodyContainer.appendChild(this.votSubtitlesSelect.container);
  
      this.votVideoVolumeSlider = ui.createSlider(localizationProvider.get("VOTVolume"));
      this.votMenu.bodyContainer.appendChild(this.votVideoVolumeSlider.container);
  
      this.votVideoTranslationVolumeSlider = ui.createSlider(localizationProvider.get("VOTVolumeTranslation"));
      this.votMenu.bodyContainer.appendChild(this.votVideoTranslationVolumeSlider.container);
  
      this.resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((e) => {
          this.votMenu.container.setAttribute("style", `--vot-container-height: ${e.contentRect.height}px`);
        });
      });
      this.resizeObserver.observe(this.video);
      this.votMenu.container.setAttribute("style", `--vot-container-height: ${this.video.getBoundingClientRect().height}px`);
  
      this.votMenu.container.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
      });
  
      this.votSettingsButton.addEventListener("click", () => {
        this.votSettingsDialog.container.hidden = !this.votSettingsDialog.container.hidden;
        document.webkitExitFullscreen && document.webkitExitFullscreen();
        document.mozCancelFullscreen && document.mozCancelFullscreen();
        document.exitFullscreen && document.exitFullscreen();
      });
    }

    // VOT Settings
    {
      this.votSettingsDialog = ui.createDialog(localizationProvider.get("VOTSettings")); // TODO: add localization
      document.documentElement.appendChild(this.votSettingsDialog.container);

      // TODO: Header: Translation

      this.votAutoTranslateCheckbox = ui.createCheckbox(localizationProvider.get("VOTAutoTranslate"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votAutoTranslateCheckbox.container);

      this.votDontTranslateYourLangCheckbox = ui.createCheckbox(localizationProvider.get("VOTDontTranslateYourLang"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votDontTranslateYourLangCheckbox.container);

      this.votAutoSetVolumeCheckbox = ui.createCheckbox(localizationProvider.get("VOTAutoSetVolume"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votAutoSetVolumeCheckbox.container);

      this.votShowVideoSliderCheckbox = ui.createCheckbox(localizationProvider.get("VOTShowVideoSlider"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votShowVideoSliderCheckbox.container);

      this.votSyncVolumeCheckbox = ui.createCheckbox(localizationProvider.get("VOTSyncVolume"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votSyncVolumeCheckbox.container);

      this.votAudioProxyCheckbox = ui.createCheckbox(localizationProvider.get("VOTAudioProxy"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votAudioProxyCheckbox.container);

      // TODO: Header: Subtitles

      this.votSubtitlesMaxLengthSlider = ui.createSlider(localizationProvider.get("VOTSubtitlesMaxLength"), 300, 50, 300);
      this.votSettingsDialog.bodyContainer.appendChild(this.votSubtitlesMaxLengthSlider.container);

      this.votSubtitlesHighlightWordsCheckbox = ui.createCheckbox(localizationProvider.get("VOTHighlightWords"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votSubtitlesHighlightWordsCheckbox.container);

      // TODO: Header: About

      this.votLanguageSelect = ui.createSelect(localizationProvider.get("VOTMenuLanguage")); // TODO: add localization
      this.votSettingsDialog.bodyContainer.appendChild(this.votLanguageSelect.container);

      // TODO: dbg

      this.votResetSettingsButton = ui.createButton(localizationProvider.get("resetSettings"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votResetSettingsButton);
    }
  }

  translateProccessor(stop = false) {
    try {
      translateProccessor(this.container, this.site.host, stop);
    } catch (e) {
      console.error("[VOT]", e);
    }
  }

  remove() {
    debug.log("[VideoHandler] remove");
    this.translateProccessor(true);
    this.resizeObserver.disconnect();
    this.srcObserver.disconnect();
  }

  handleSrcChanged() {
    debug.log("[VideoHandler] src changed");
    this.translateProccessor();
  }
}

function getSite() {
  return sites.find((e) => {
    const isMathes = (match) => {
      return (match instanceof RegExp && match.test(window.location.hostname))
        || (typeof match === "string" && window.location.hostname.includes(match))
        || (typeof match === "function" && match(window.location));
    }
    if (isMathes(e.match) || (e.match instanceof Array && e.match.some((e) => isMathes(e.match)))) {
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
      `[VOT] ${localizationProvider
        .getDefault("unSupportedExtensionError")
        .format(GM_info.scriptHandler)}`
    );
    return alert(
      `[VOT] ${localizationProvider
        .get("unSupportedExtensionError")
        .format(GM_info.scriptHandler)}`
    );
  }

  debug.log("Extension compatibility passed...");

  videoObserver.onVideoAdded.addListener((video) => {
    const site = getSite();
    if (!site) return;
    const container = site.selector ? Object.values(document.querySelectorAll(site.selector)).find(e => e.contains(video)) : video.parentElement;
    if (!container) return;
    if (!videosWrappers.has(video)) {
      videosWrappers.set(video, new VideoHandler(video, container, site));
    }
  });
  videoObserver.onVideoRemoved.addListener((video) => {
    if (videosWrappers.has(video)) {
      videosWrappers.get(video).remove();
      videosWrappers.delete(video);
    }
  });
  videoObserver.enable();
}

main().catch((e) => {
  console.error("[VOT]", e);
});
