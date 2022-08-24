// ==UserScript==
// @name             voice-over-translation
// @name:ru          [VOT] - Закадровый перевод видео
// @description      A small extension that adds a Yandex Browser video translation to other browsers
// @description:ru   Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @version          1.0.7.1
// @author           sodapng, mynovelhost, Toil
// @match            *://*.youtube.com/*
// @icon             https://translate.yandex.ru/icons/favicon.ico
// @require          https://code.jquery.com/jquery-3.6.0.min.js
// @require          https://cdn.jsdelivr.net/gh/dcodeIO/protobuf.js@6.X.X/dist/protobuf.min.js
// @resource         styles https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/styles.css
// @grant            GM_getResourceText
// @grant            GM_addStyle
// @grant            GM_xmlhttpRequest
// @grant            GM_info
// @updateURL        https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot.user.js
// @downloadURL      https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot.user.js
// @supportURL       https://github.com/ilyhalight/voice-over-translation/issues
// @homepageURL      https://github.com/ilyhalight/voice-over-translation
// @connect          api.browser.yandex.ru
// ==/UserScript==

const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";
const yandexUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 CriOS/100.0.4896.160 YaBrowser/22.5.7.49.10 SA/3 Mobile/15E148 Safari/604.1";
const USOV4 = [ // Список расширений, последние версии которых не поддерживают Greasemonkey API V3
  "Greasemonkey",
  "Userscripts",
  "FireMonkey"
];

if (typeof GM_addStyle === 'undefined') {
  GM_addStyle = (aCss) => {
    'use strict';
    let head = document.getElementsByTagName('head')[0];
    if (head) {
      let style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.textContent = aCss;
      head.appendChild(style);
      return style;
    }
    return null;
  };
};

if (!USOV4.includes(GM_info.scriptHandler)) {
  const styles = GM_getResourceText("styles");
  GM_addStyle(styles);
} else {
  fetch('https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/styles.css')
  .then((response) => response.text().then(styles => GM_addStyle(styles)));
};

const $translationBlock = $(`
  <div class = "translationBlock">
      <span class = "translationArea" role = "button">
          <span class = "translationIAlice" tabindex = "-1">
              <img class = "translationImageAlice" src = "https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/img/YAlice.svg">
          </span>
          <span class = "translationITranslate"  tabindex = "-1">
              <img class = "translationImageTranslate" src = "https://icongr.am/entypo/language.svg?size=18&color=ffffff">
          </span>
          <span class = "translationBtn" tabindex = "0">Перевести видео</span>
      </span>
      <span class = "translationMenu" tabindex = "0" role = "button"><img class = "translationMenuIcon" src = "https://icongr.am/entypo/dots-three-vertical.svg?size=14&color=ffffff"></span>
  </div>`);
const $translationBtn = $translationBlock.find('.translationArea > .translationBtn');
const $translationImageAlice = $translationBlock.find('.translationArea > .translationIAlice > img');
const $translationImageTranslate = $translationBlock.find('.translationArea > .translationITranslate > img');

const $translationMenuContent = $('<div class = "translationMenuContent"><p class = "translationMainHeader">Перевод видео</p></div>');

function addTranslationBtn(elem, addElem = undefined) {
  if (addElem !== undefined) {
      $translationBlock.append(addElem);
  }
  $(elem).append($translationBlock);
};

function addTranslationMenu(elem) {
  $(elem).append($translationMenuContent);
};

const audio = new Audio();

const getVideoId = () => {
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
			callback(false, "Не удалось запросить перевод видео");
			return;
		}

		const translateResponse = decodeResponse(response);
		switch (translateResponse.status) {
			case 0:
				callback(false, "Невозможно перевести видео. Зайдите позже, нейронная сеть скоро научится");
				return;
			case 1:
				var hasUrl = void 0 !== translateResponse.url && null !== translateResponse.url;
				callback(hasUrl, hasUrl ? translateResponse.url : "Не получена ссылка на аудио");
				return;
			case 2:
				callback(false, "Перевод займет около минуты");
				return;
		}
	});
}

const deleteAudioSrc = () => {
  audio.src = "";
  audio.removeAttribute("src");
};

// --- IndexedDB functions start:
function openDB (name) {
  var openRequest = indexedDB.open(name, 1);
  return openRequest;
}

async function initDB () {
  return new Promise((resolve, reject) => {
    var openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error("VOT: Ошибка инициализации Базы Данных: " + openRequest.errorCode);
      reject(false);
    }

    openRequest.onupgradeneeded = event => {
      var db = openRequest.result;

      db.onerror = () => {
        alert('VOT: Не удалось загрузить базу данных')
        console.error("VOT: Не удалось загрузить базу данных: " + openRequest.error);
        reject(false);
      }

      var objectStore = db.createObjectStore('settings', {keyPath: 'key'});

      objectStore.createIndex('autoTranslate', 'autoTranslate', { unique: false })
      console.log('VOT: База Данных создана')

      objectStore.transaction.oncomplete = event => {
        var objectStore = db.transaction('settings', 'readwrite').objectStore('settings');
        var contestsDefault = {
          key: 'settings',
          autoTranslate: 0,
        }
        var request = objectStore.add(contestsDefault);

        request.onsuccess = () => {
          console.log("VOT: Стандартные настройки добавлены в Базу Данных: ", request.result);
          resolve(true);
        };
        request.onerror = () => {
          console.log("VOT: Ошибка при добавление стандартных настроек в Базу Данных: ", request.error);
          reject(false);
        };
      };
    };

    openRequest.onsuccess = () => {
      var db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        alert("Базе данных нужно обновление, пожалуйста, перезагрузите страницу.");
        console.log("VOT: Базе данных нужно обновление, пожалуйста, перезагрузите страницу");
        window.location.reload();
        reject(false);
      }
      resolve(true);
    };

    openRequest.onblocked = () => {
      var db = openRequest.result;
      console.error('VOT: База Данных временно заблокирована из-за ошибки: ', db);
      alert("VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с youtube.com и попробуйте снова.");
      reject(false);
    };
  });
}

async function updateDB(autoTranslate = undefined) {
  return new Promise((resolve, reject) => {
    if (autoTranslate !== undefined) {
      var openRequest = openDB("VOT");

      openRequest.onerror = () => {
        alert('VOT: Произошла ошибка');
        console.error("VOT: Ошибка Базы Данных: " + openRequest.errorCode);
        reject(false);
      };

      openRequest.onupgradeneeded = () => {
        var db = openRequest.result;
        db.close();
        initDB();
        resolve(true);
      };

      openRequest.onsuccess = () => {
        var db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          console.log("VOT: Базе данных нужно обновление, пожалуЙста, перезагрузите страницу");
          window.location.reload();
          reject(false);
        };

        var objectStore = db.transaction('settings', 'readwrite').objectStore('settings');
        var request = objectStore.get('settings');

        request.onerror = (event) => {
          console.error("VOT: Не удалось получить данные из Базы Данных: ", event.error);
          reject(false);
        };

        request.onsuccess = () => {
          console.log('VOT: Получены данные из Базы Данных: ', request.result);
          var data = request.result;

          if (typeof(autoTranslate) === 'number') {
            data.autoTranslate = autoTranslate;
          };

          var requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) =>{
            console.error("VOT: Не удалось обновить данные в Базе Данных: ", event.error);
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            console.log('VOT: Данные в Базе Данных обновлены, вы великолепны!');
            resolve(true);
          };
        };
      };

      openRequest.onblocked = () => {
        var db = openRequest.result;
        console.error('VOT: База Данных временно заблокирована из-за ошибки: ', db);
        alert("VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с youtube.com и попробуйте снова.");
        reject(false);
      };
    };
  });
}

async function readDB() {
  return new Promise((resolve, reject) => {
    var openRequest = openDB("VOT");

    openRequest.onerror = () => {
      alert('VOT: Произошла ошибка');
      console.error("VOT: Ошибка Базы Данных: " + openRequest.errorCode);
      reject(false);
    }

    openRequest.onupgradeneeded = () => {
      var db = openRequest.result;
      db.close();
      initDB();
      resolve(true);
    }

    openRequest.onsuccess = () => {
      var db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        alert("VOT: База данных устарела, пожалуЙста, перезагрузите страницу.");
        reject(false);
      }

      var objectStore = db.transaction('settings').objectStore('settings');
      var request = objectStore.get('settings');

      request.onerror = (event) => {
        console.error("VOT: Не удалось получить данные из Базы Данных: ", event.error);
        console.error(event);
        reject(false);
      }

      request.onsuccess = () => {
        console.log('VOT: Получены данные из Базы Данных: ', request.result);
        if (request.result === undefined) {
          db.close()
          deleteDB();
          reject(false);
        }
        var data = request.result;
        resolve(data);
      }
    }

    openRequest.onblocked = () => {
      var db = openRequest.result;
      console.error('VOT: База Данных временно заблокирована из-за ошибки: ', db);
      alert("VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с youtube.com и попробуйте снова.");
      reject(false);
    }
  });
}

function deleteDB() {
  indexedDB.deleteDatabase('VOT');
}

$("body").on("yt-page-data-updated", async function () {
  var video = $("video")[0];
  var firstPlay = true;
  var isDBInited = await initDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
  addTranslationBtn(".html5-video-container");
  addTranslationMenu(".html5-video-container");
  if (isDBInited) {
    var dbData = await readDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    var dbAT = dbData !== undefined ? dbData.autoTranslate : undefined;
    console.log('VOT: DB autotranslate value: ', dbAT)
    if (!$('.translationAT').length && dbAT !== undefined) {
      var $translationATCont = $(
        `<div class = "translationMenuContainer">
          <input type="checkbox" name="auto_translate" value=${dbAT} class = "translationAT" ${dbAT === 1 ? "checked" : ''}>
          <label class = "translationMenuText" for = "auto_translate">Автоматический перевод видео</label>
        </div>
        `
      );
      var $translationAT = $($translationATCont).find('.translationAT');
      $translationAT.on('click', async (event) => {
        event.stopPropagation();
        let atValue = event.target.checked ? 1 : 0;
        await updateDB(atValue);
        dbAT = atValue;
      });
      $translationMenuContent.append($translationATCont)
    }
  }

  let btnHover = function () {
    let time;
    var isOpened = false;
    var $translationMenu = $(".translationMenu");

    $translationMenu.on('click', (event) => {
      event.stopPropagation();
      isOpened ? $translationMenuContent.hide() : ($translationMenuContent.show(), $translationMenuContent.css('opacity', 0.9));
      isOpened = !isOpened;
    })

    $(".html5-video-container").on("mousemove", () => resetTimer());
    $(".html5-video-container").on("mouseout", () => logout(0));

    $(document).on("click", (event) => {
      let isBlock = event.target == $($translationBlock)[0] || $($translationBlock)[0].contains(event.target);
      let isContent = event.target == $($translationMenuContent)[0] || $($translationMenuContent)[0].contains(event.target);
      let isVideo = event.target == $(".html5-video-container")[0]|| $(".html5-video-container")[0].contains(event.target);
      if (!isBlock && !isContent) {
        $translationMenuContent.hide();
        isOpened = false
        if (!isVideo)
        {
          logout(0);
        }
      }
    })

    $translationBlock.on("mousemove", (event) => {
      clearTimeout(time);
      logout(0.8);
      event.stopPropagation();
    });

    $translationMenuContent.on("mousemove", (event) => {
      clearTimeout(time);
      logout(0.8);
      event.stopPropagation();
    });

    function logout(n) {
      if (!isOpened) {
        $translationBlock.css("opacity", n);
      }
    }

    function resetTimer() {
      clearTimeout(time);
      logout(1);
      time = setTimeout(() => {
        logout(0);
      }, 2000);
    }
  };

  const translateYTFunc = (VIDEO_ID) => translateVideo(VIDEO_ID, function (success, urlOrError) {

    if (!success) {
      transformBtnError(urlOrError);
      throw urlOrError;
    }

    audio.src = urlOrError;

    $("body").on("yt-page-data-updated", function () {
      audio.pause();
      $("video").off(".translate");
      deleteAudioSrc();
    });

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

    $translationBtn.text('Выключить');
    changeColor("#A36EFF");
    changeBackgroundSuccess();
    const volumeBox = $('<div class = "translationMenuContainer"><span class = "translationHeader">Громкость перевода: <b class = "volumePercent">100%</b></span><div class = "translationVolumeBox" tabindex = "0"><input type="range" min="0" max="100" value="100" class="translationVolumeSlider"></div></div>');
    const volumeSlider = volumeBox.find('.translationVolumeSlider');

    if (!$translationMenuContent.has('.translationVolumeBox').length) {
      $translationMenuContent.append(volumeBox);
      $volumePercent = volumeBox.find('.volumePercent');
      volumeSlider.on('input', () => {
        var value = volumeSlider.val();
        audio.volume = (value / 100);
        $volumePercent.text(`${value}%`);
      });
    }
  });

  function changeColor(n) {
    $translationBtn.css("color", n);
  }

  function changeBackgroundError() {
    $translationImageAlice.attr('src', 'https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/img/YAliceError.svg')
    $translationImageTranslate.attr('src', 'https://icongr.am/entypo/language.svg?size=18&color=7A7A7D')
  }

  function changeBackgroundSuccess() {
    $translationImageAlice.attr('src', 'https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/img/YAlice.svg')
    $translationImageTranslate.attr('src', 'https://icongr.am/entypo/language.svg?size=18&color=A36EFF')
  }

  function changeBackgroundDefault() {
    $translationImageAlice.attr('src', 'https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/img/YAlice.svg')
    $translationImageTranslate.attr('src', 'https://icongr.am/entypo/language.svg?size=18&color=FFFFFF')
  }

  function transformBtnError(err) {
    $translationBtn.text(err);
    changeBackgroundError();
    changeColor('#7A7A7D')
  }

  function transformBtnDefault(err) {
    $translationBtn.text(err);
    changeBackgroundDefault();
    changeColor('#FFFF')
  }

  btnHover();

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
          }
        })
      }
    }

    else if (mode === "pause") {
      audio.pause();
    }
  };

  $(video).on('progress', event => {
    event.stopPropagation();

    const VIDEO_ID = getVideoId();

    if (!VIDEO_ID) {
      throw "YaTranslate: Не найдено ID видео";
    }

    if (firstPlay && dbAT === 1) {
      translateYTFunc(VIDEO_ID);
      firstPlay = false;
    }
  });

  $translationBtn.click(function (event) {
    event.stopPropagation();

    if (audio.src) {
      deleteAudioSrc();
      transformBtnDefault('Перевести видео')
      event.stopImmediatePropagation();
    }
  });

  $translationBtn.click(async function (event) {
    try {
      event.stopPropagation();

      const VIDEO_ID = getVideoId();

      if (!VIDEO_ID) {
        throw "YaTranslate: Не найдено ID видео"; // not found video id
      }

      translateYTFunc(VIDEO_ID)
    } catch (err) {
      transformBtnError(err.substring(13, err.length))
      console.error(err);
    }
  });
});
