// ==UserScript==
// @name             voice-over-translation
// @match            *://*.youtube.com/*
// @version          1.0
// @require          https://code.jquery.com/jquery-3.6.0.min.js
// @resource         styles https://raw.githubusercontent.com/sodapng/voice-over-translation/master/styles.css
// @grant            GM_getResourceText
// @grant            GM_addStyle
// @grant            GM_xmlhttpRequest
// @updateURL        https://raw.githubusercontent.com/sodapng/voice-over-translation/master/vot.user.js
// @downloadURL      https://raw.githubusercontent.com/sodapng/voice-over-translation/master/vot.user.js
// @supportURL       https://github.com/sodapng/voice-over-translation/issues
// @homepageURL      https://github.com/sodapng/voice-over-translation
// ==/UserScript==

const styles = GM_getResourceText("styles");
GM_addStyle(styles);

const fragment = new DocumentFragment();
const span = $("<span>");

$(span).addClass("translation-btn");

fragment.appendChild(span[0]);
const audio = new Audio();

const getVeideoId = () => {
  const url = new URL(window.location.href);

  if (url.pathname.includes("watch")) {
    return url.searchParams.get("v");
  }

  if (url.pathname.includes("embed")) {
    return url.pathname.substr(7, 11);
  }

  return false;
};

const getUrlAudio = (videoId) => {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url: "https://api.browser.yandex.ru/video-translation/translate",
      method: "POST",
      headers: {
        "Content-Type": "application/x-protobuf",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.2.773 Yowser/2.5 Safari/537.36",
      },
      data: `\x1A\x1Chttps://youtu.be/${videoId}\x28\x01`,
      onload: (res) => {
        if (res.total === 40 || res.total === 42) {
          return reject("VIDEO-TRANSLATION: can not translate");
        }

        if (res.status === 200) {
          return resolve(res.response);
        }

        return reject("VIDEO-TRANSLATION: bad request");
      },
      onerror: (err) => {
        return reject("VIDEO-TRANSLATION: connection error");
      },
    });
  });
};

const deleteAudioSrc = () => {
  audio.src = "";
  audio.removeAttribute("src");
};

$("body").on("yt-page-data-updated", function () {
  var video = $("video")[0];
  $(".html5-video-container").append(fragment);

  const lipSync = (mode = false) => {
    audio.currentTime = video.currentTime;
    // audio.volume = video.volume

    if (!mode) {
      return;
    }

    if (mode === "play") {
      audio.play();
    }

    if (mode === "pause") {
      audio.pause();
    }
  };

  $(span).click(function (event) {
    event.stopPropagation();

    if (audio.src) {
      deleteAudioSrc();
      event.stopImmediatePropagation();
    }
  });

  $(span).click(async function (event) {
    try {
      event.stopPropagation();

      const VIDEO_ID = getVeideoId();

      if (!VIDEO_ID) {
        throw "VIDEO-TRANSLATION: not found video id";
      }

      const rawResponse = await getUrlAudio(VIDEO_ID);

      const URL_AUDIO = rawResponse.match(/https.*[a-z0-9]{64}|https.*mp3/);

      if (!URL_AUDIO) {
        throw "VIDEO-TRANSLATION: raw string error";
      }

      audio.src = URL_AUDIO[0];

      $("body").one("yt-page-data-updated", function () {
        audio.pause();
        $("video").off(".translate");
        deleteAudioSrc();
      });

      if (!video.paused) {
        lipSync("play");
      }

      $("video").on("playing.translate", function () {
        lipSync();
      });

      $("video").on("play.translate canplaythrough.translate", function () {
        lipSync();

        if (!video.paused) {
          lipSync("play");
        }
      });

      $("video").on("pause.translate waiting.translate", function () {
        lipSync("pause");
      });
    } catch (err) {
      if (!err) {
        console.error("something went wrong");
      }

      console.error(err);
    }
  });
});
