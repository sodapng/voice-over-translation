// ==UserScript==
// @name             voice-over-translation
// @match            *://*.youtube.com/*
// @version          1.6
// @require          https://code.jquery.com/jquery-3.6.0.min.js
// @resource         styles https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/styles.css
// @grant            GM_getResourceText
// @grant            GM_addStyle
// @grant            GM_xmlhttpRequest
// @updateURL        https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot.user.js
// @downloadURL      https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot.user.js
// @supportURL       https://github.com/ilyhalight/voice-over-translation/issues
// @homepageURL      https://github.com/ilyhalight/voice-over-translation
// @connect          127.0.0.1
// ==/UserScript==

const styles = GM_getResourceText("styles");
GM_addStyle(styles);

const fragment = new DocumentFragment();
const span = $("<span>");

$(span).addClass("translation-btn").attr("role", "button").attr("aria-label", "Перевести видео").attr("tabindex","0").attr("tabindex","0").text("Перевести видео");

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
      url: "http://127.0.0.1:3000/video",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.119 YaBrowser/22.3.0.2434 Yowser/2.5 Safari/537.36",
      },
      data: JSON.stringify({
          "video_id": videoId
      }),
      onload: (res) => {
        if (res.status === 412) {
          return reject("YaTranslate: Перевод недоступен"); // can not translate
        }

        if (res.status === 200) {
          return resolve(res.response);
        }

        return reject("YaTranslate: Bad request");
      },
      onerror: (err) => {
        return reject("YaTranslate: Ошибка соединения"); // connection error
      },
    });
  });
};

const deleteAudioSrc = () => {
  audio.src = "";
  audio.removeAttribute("src");
};

const removeClassBtnErrorAndBtnSuccess = () => {
  $(span).removeClass("btn-error");
  $(span).removeClass("btn-success");
  $(span).css("color", "#ffffff");
  $(span).css("width", "16.3rem");
  $(span).css("background-image", "url(https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/img/YAlice.svg), url(https://icongr.am/entypo/language.svg?size=18&color=ffffff)");
  $(span).text("Перевести видео");
};

$("body").on("yt-page-data-updated", function () {
  var video = $("video")[0];
  $(".html5-video-container").append(fragment);

  let btnHover = function () {
    let time;

    $(".html5-video-container").on("mousemove", resetTimer);
    $(".html5-video-container").on("mouseout", () => logout(0));
    $(span).on("mousemove", function (event) {
      clearTimeout(time);
      logout(0.8);
      event.stopPropagation();
    });

    function logout(n) {
      $(span).css("opacity", n);
    }

    function resetTimer() {
      clearTimeout(time);
      logout(1);
      time = setTimeout(() => logout(0), 2000);
    }
  };

  function changeColor(n) {
    $(span).css("color", n);
  }

  function changeBackgroundError() {
    $(span).css("background-image", "url(http://localhost:1337/video/YAliceError.svg), url(https://icongr.am/entypo/language.svg?size=18&color=7A7A7D)");
  }

  function changeBackgroundSuccess() {
    $(span).css("background-image", "url(http://localhost:1337/video/YAlice.svg), url(https://icongr.am/entypo/language.svg?size=18&color=A36EFF)");
  }

  btnHover();

  removeClassBtnErrorAndBtnSuccess();

  const lipSync = (mode = false) => {
    audio.currentTime = video.currentTime;
    audio.playbackRate = video.playbackRate;

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
      removeClassBtnErrorAndBtnSuccess();
      deleteAudioSrc();
      event.stopImmediatePropagation();
    }
  });

  $(span).click(async function (event) {
    try {
      event.stopPropagation();

      const VIDEO_ID = getVeideoId();

      if (!VIDEO_ID) {
        throw "YaTranslate: Не найдено ID видео"; // not found video id
      }

      const rawResponse = await getUrlAudio(VIDEO_ID);

      const URL_AUDIO = rawResponse.match(/https.*[a-z0-9]{64}|https.*mp3/);

      if (!URL_AUDIO) {
        throw "YaTranslate: Ошибка необработанной строки"; // raw string error
      }

      audio.src = URL_AUDIO[0];

      $("body").one("yt-page-data-updated", function () {
        removeClassBtnErrorAndBtnSuccess();
        audio.pause();
        $("video").off(".translate");
        deleteAudioSrc();
      });

      if ($(span).hasClass("btn-error")) {
        $(span).removeClass("btn-error");
      }

      if (!video.paused) {
        lipSync("play");
      }

      $("video").on("playing.translate ratechange.translate", function () {
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

      $(span).addClass("btn-success");
      $(span).text('Выключить');
      $(span).css("width", "13rem");
      changeColor("#A36EFF");
      changeBackgroundSuccess();
    } catch (err) {
      if (!err) {
        console.error("something went wrong");
      }

      $(span).attr("data-error", err);
      $(span).text(err.substring(13, err.lenght));
      $(span).css("width", "max-content");
      $(span).css("padding-left", "5.5rem");
      $(span).addClass("btn-error");
      changeColor("#7A7A7D");
      changeBackgroundError();
      console.error(err);
    }
  });
});