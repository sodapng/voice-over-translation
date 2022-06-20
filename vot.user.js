// ==UserScript==
// @name             voice-over-translation
// @match            *://*.youtube.com/*
// @version          1.0.5
// @require          https://code.jquery.com/jquery-3.6.0.min.js
// @require          https://code.jquery.com/ui/1.13.0/jquery-ui.min.js
// @require          https://cdn.jsdelivr.net/gh/dcodeIO/protobuf.js@6.X.X/dist/protobuf.min.js
// @resource         styles https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/styles.css
// @grant            GM_getResourceText
// @grant            GM_addStyle
// @grant            GM_xmlhttpRequest
// @updateURL        https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot.user.js
// @downloadURL      https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot.user.js
// @supportURL       https://github.com/ilyhalight/voice-over-translation/issues
// @homepageURL      https://github.com/ilyhalight/voice-over-translation
// @connect          api.browser.yandex.ru
// ==/UserScript==

const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";
const yandexUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 CriOS/100.0.4896.160 YaBrowser/22.5.7.49.10 SA/3 Mobile/15E148 Safari/604.1";

const styles = GM_getResourceText("styles");
GM_addStyle(styles);

const fragment = new DocumentFragment();
const span = $("<span>");

$(span).addClass("translation-btn").attr("role", "button").attr("aria-label", "Перевести видео").attr("tabindex", "0").text("Перевести видео");

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

const decodeResponse = (function () {
	var proto = new protobuf.Type("VideoTranslationResponse").add(new protobuf.Field("url", 1, "string")).add(new protobuf.Field("status", 4, "int32"));
	new protobuf.Root().define("yandex").add(proto);
	return function(response) {
		return proto.decode(new Uint8Array(response));
	};
})();

function requestVideoTranslation (videoId, callback) {
	var deviceId = ([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
	var body = `\x1A\x1Chttps://youtu.be/${videoId}" ${deviceId}\x28\x01\x31\x00\x00\x00\x00\x00\x00\x1C\x40\x38\x01\x42\x02\x65\x6E\x48\x00\x50\x00`;

	var utf8Encoder = new TextEncoder("utf-8");
	window.crypto.subtle.importKey('raw', utf8Encoder.encode(yandexHmacKey), { name: 'HMAC', hash: {name: 'SHA-256'}}, false, ['sign', 'verify']).then(key => {
		window.crypto.subtle.sign('HMAC', key, utf8Encoder.encode(body)).then(signature => {
			GM_xmlhttpRequest({url: "https://api.browser.yandex.ru/video-translation/translate", method: "POST", headers: {
				"Content-Type": "application/x-protobuf",
				"User-Agent": yandexUserAgent,
				"Vtrans-Signature": Array.prototype.map.call(new Uint8Array(signature), x => x.toString(16).padStart(2, '0')).join('')
			}, data: body, responseType: "arraybuffer", onload: (http) => {
				callback((http.status === 200), http.response);
			}, onerror: (error) => {
				callback(false);
			}});
		});
	});
}

function translateVideo(videoId, callback) {
	requestVideoTranslation(videoId, function (success, response) {
		if (!success) {
			callback(false, "Failed to request video translation");
			return;
		}

		const translateResponse = decodeResponse(response);
		switch (translateResponse.status) {
			case 0:
				displayMessage("Couldn't translate video. Come back later, the neural network will learn how to soon.");
				callback(false, "Couldn't translate video. Come back later, the neural network will learn how to soon.");
				return;
			case 1:
				var hasUrl = void 0 !== translateResponse.url && null !== translateResponse.url;
				callback(hasUrl, hasUrl ? translateResponse.url : "Didn't recieved audio url");
				return;
			case 2:
				displayMessage("The translation will take about a munute.");
				callback(false, "The translation will take about a munute.");
				return;
		}
	});
}

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
  try {
    $(".translation-volume-box").remove();
  } catch (e) {}
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

    try {
      $(".translation-volume-box").on("mousemove", function (event) {
          clearTimeout(time);
          logout(0.8);
          event.stopPropagation();
      });
    } catch (e) {}

    function logout(n) {
      $(span).css("opacity", n);
      try {
        $(".translation-volume-box").css("opacity", n);
      } catch (e) {}
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
    $(span).css("background-image", "url(https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/img/YAliceError.svg), url(https://icongr.am/entypo/language.svg?size=18&color=7A7A7D)");
  }

  function changeBackgroundSuccess() {
    $(span).css("background-image", "url(https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/img/YAlice.svg), url(https://icongr.am/entypo/language.svg?size=18&color=A36EFF)");
  }

  function transformBtnError(err) {
    $(span).attr("data-error", `YaTranslate: ${err}`);
    $(span).text(err);
    $(span).css("width", "max-content");
    $(span).css("padding-left", "5.5rem");
    $(span).addClass("btn-error");
    changeColor("#7A7A7D");
    changeBackgroundError();
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
      var audioPromise = audio.play();
      if (audioPromise !== undefined) {
        audioPromise.catch(e => {
          console.error(e)
          if (e.name === "NotAllowedError") {
            transformBtnError('Предоставьте разрешение на автовоспроизведение')
            throw "YaTranslate: Предоставьте разрешение на автовоспроизведение"
          } else if (e.name === "NotSupportedError") {
            transformBtnError('Формат аудио не поддерживается')
            throw "YaTranslate: Формат аудио не поддерживается"
          } else if (e.name !== "AbortError" || !e.toString().includes("pause()")) {
            transformBtnError('Ошибка загрузки или воспроизведения аудио')
            throw "YaTranslate: Ошибка загрузки или воспроизведения аудио"
          }
        })
      }
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

	  translateVideo(VIDEO_ID, function (success, urlOrError) {

      if (!success) {
        transformBtnError(urlOrError);
        throw urlOrError;
      }

      audio.src = urlOrError;

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
      try {
        const sliderFragment = new DocumentFragment();
        const sliderBoxFragment = new DocumentFragment();
        const slider = $("<div>");
        const sliderBox = $("<div>")

        $(sliderBox).addClass("translation-volume-box").attr("tabindex","0");

        $(slider).attr("id", "translation-volume").attr("role", "slider").attr("aria-label", "Громкость видео").attr("tabindex","0");

        sliderBoxFragment.appendChild(sliderBox[0]);
        sliderFragment.appendChild(slider[0]);

        $(".html5-video-container").append(sliderBoxFragment);
        $(sliderBox).append(sliderFragment);
        $(slider).slider({
            value : 100,
            step  : 1,
            range : 'min',
            min   : 0,
            max   : 100,
            slide : function(){
                var value = $(slider).slider("value");
                audio.volume = (value / 100);
            }
        });
      } catch (err) {
          console.error("YaTranslate: Не удалось добавить ползунок громкости");
          console.error(err);
      }
	  });
    } catch (err) {
      if (!err) {
        console.error("something went wrong");
      }

      transformBtnError(err.substring(13, err.lenght))
      console.error(err);
    }
  });
});
