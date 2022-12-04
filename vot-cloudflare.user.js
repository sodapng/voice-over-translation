// ==UserScript==
// @name             Voice Over Translations (Cloudflare)
// @name:ru          [VOT Cloudflare] - Закадровый перевод видео
// @description      A small extension that adds a Yandex Browser video translation to other browsers
// @description:ru   Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @version          1.0.9.5
// @author           sodapng, mynovelhost, Toil
// @match            *://*.youtube.com/*
// @match            *://*.youtube-nocookie.com/*
// @match            *://*.twitch.tv/*
// @match            *://*.xvideos.com/*
// @match            *://*.pornhub.com/*
// @match            *://*.vk.com/*
// @match            *://*.vk.ru/*
// @match            *://invidious.snopyta.org/*
// @match            *://invidious.kavin.rocks/*
// @match            *://vid.puffyan.us/*
// @match            *://invidious.namazso.eu/*
// @match            *://inv.riverside.rocks/*
// @match            *://yt.artemislena.eu/*
// @match            *://invidious.flokinet.to/*
// @match            *://invidious.esmailelbob.xyz/*
// @match            *://invidious.nerdvpn.de/*
// @match            *://invidious.slipfox.xyz/*
// @match            *://invidio.xamh.de/*
// @match            *://invidious.dhusch.de/*
// @match            *://*.yewtu.be/*
// @match            *://inv.vern.cc/*
// @match            *://*.vimeo.com/*
// @match            *://*.9gag.com/*
// @icon             https://translate.yandex.ru/icons/favicon.ico
// @require          https://code.jquery.com/jquery-3.6.0.min.js
// @require          https://cdn.jsdelivr.net/gh/dcodeIO/protobuf.js@6.X.X/dist/protobuf.min.js
// @resource         styles https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/styles.css
// @grant            GM_getResourceText
// @grant            GM_addStyle
// @grant            GM_xmlhttpRequest
// @updateURL        https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js
// @downloadURL      https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js
// @supportURL       https://github.com/ilyhalight/voice-over-translation/issues
// @homepageURL      https://github.com/ilyhalight/voice-over-translation
// @connect          api.browser.yandex.ru
// @inject-into      page
// ==/UserScript==

(async function() {
  const workerHost = "cors.yandexproxy.workers.dev";
  const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";
  const yandexUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 CriOS/104.0.5112.114 YaBrowser/22.9.4.633.10 SA/3 Mobile/15E148 Safari/604.1";

  const siteTranslates = {
    'youtube': {
      'url': 'https://youtu.be/',
      'func_param': 0x4075500000000000
    },
    'twitch': {
      'url': 'https://twitch.tv/videos/',
      'func_param': 0x4075500000000000
    },
    'vimeo': {
      'url': 'https://vimeo.com/',
      'func_param': 0x4075500000000000
    },
    '9gag': {
      'url': 'https://9gag.com/gag/',
      'func_param': 0x4075500000000000
    },
    'vk': {
      'url': 'https://vk.com/video/',
      'func_param': 0x4075500000000000
    },
    'xvideos': {
      'url': 'https://www.xvideos.com/',
      'func_param': 0x4075500000000000
    },
    'pornhub': {
      'url': 'https://rt.pornhub.com/view_video.php?viewkey=',
      'func_param': 0x4075500000000000
    },
  }

  // Сайты хостящие Invidious. Мной была протестирована работоспособность только на invidious.kavin.rocks, yewtu.be и inv.vern.cc
  const sitesInvidious = [
    'invidious.snopyta.org',
    'yewtu.be',
    'invidious.kavin.rocks',
    'vid.puffyan.us',
    'invidious.namazso.eu',
    'inv.riverside.rocks',
    'yt.artemislena.eu',
    'invidious.flokinet.to',
    'invidious.esmailelbob.xyz',
    'y.com.sb',
    'invidious.nerdvpn.de',
    'inv.vern.cc',
    'invidious.slipfox.xyz',
    'invidio.xamh.de',
    'invidious.dhusch.de'
  ];

  const sitesChromiumBlocked = Object.assign([], sitesInvidious); // Вынес в отдельную переменную на будущее, если вдруг понадобится


  // https://github.com/greasemonkey/gm4-polyfill
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

  if (typeof GM_getResourceText === 'undefined') {
    fetch('https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/styles.css')
    .then((response) => response.text().then(styles => GM_addStyle(styles)));
  } else {
    const styles = GM_getResourceText("styles");
    GM_addStyle(styles);
  }

  const $translationBlock = $(`
    <div class = "translationBlock">
        <span class = "translationArea" role = "button">
            <span class = "translationIAlice" tabindex = "-1">
              <svg class="translationIconAlice" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask-main" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <circle cx="12" cy="12" r="12" fill="#fff"></circle>
                </mask>
                <g mask="url(#mask-main)">
                    <path transform="translate(0 .028)" fill="url(#gradient-main)" d="M0 0h24v24H0z"></path>
                    <path fill="#7626FF" d="M0 .028h24v24H0z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.283 16.193c.9.888 3.297 1.42 5.74 1.43 2.444-.01 4.841-.542 5.74-1.43 2.236-2.204-3.199-10.653-5.737-10.665-2.544.012-7.979 8.461-5.743 10.665" fill="#fff"></path>
                </g>
                <defs>
                    <linearGradient id="gradient-main" x1="19.778" y1="30.357" x2="30.132" y2="4.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C826FF"></stop>
                        <stop offset="1" stop-color="#5426FF"></stop>
                    </linearGradient>
                </defs>
              </svg>
            </span>
            <span class = "translationITranslate" tabindex = "-1">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="translateIcon" fill-rule="evenodd" clip-rule="evenodd" d="M17.605 19.703c.794-.13 1.647-.476 2.47-.983.695 1.013 1.255 1.546 1.306 1.593l1.166-1.207c-.011-.01-.504-.48-1.124-1.401.277-.25.547-.512.797-.798a12.1 12.1 0 0 0 2.268-3.826c.383.216.761.541.96 1.027.68 1.649-.301 3.557-1.215 4.385l1.152 1.22c1.52-1.378 2.571-3.959 1.638-6.227-.368-.892-1.077-1.59-2.064-2.037.162-.763.216-1.38.233-1.785h-1.698c-.017.307-.06.762-.173 1.323-1.325-.187-2.818-.006-4.248.508a25.994 25.994 0 0 1-.313-2.547c5.092-.287 8.098-1.488 8.237-1.546l-.654-1.533c-.03.013-2.875 1.14-7.65 1.418-.001-.405-.008-.666-.012-.85-.008-.339-.01-.423.03-.67L17.01 5.75c-.026.283-.024.573-.018 1.278l.002.318c-.026 0-.051 0-.077.002l-.08.001a39.286 39.286 0 0 1-3.27-.14L13.25 8.89c.5.043 2.023.122 3.397.122h.1a19.457 19.457 0 0 1 .208-.003l.106-.002c.067.948.196 2.034.421 3.22a8.05 8.05 0 0 0-2.267 1.963l.811 1.871c.327-.732.995-1.51 1.856-2.111a16.762 16.762 0 0 0 1.33 3.346c-.811.514-1.64.818-2.301.804l.694 1.603Zm2.953-3.488a8.18 8.18 0 0 0 .374-.389 10.465 10.465 0 0 0 1.927-3.224c-.198-.021-.4-.031-.606-.031-.907 0-1.885.199-2.834.574.31 1.209.718 2.23 1.14 3.07ZM9.769 11.688 4.25 24.438h2.259l1.357-3.407h5.582l1.357 3.407h2.258l-5.52-12.75H9.77Zm.887 2.624 2.056 5H8.6l2.056-5Z" fill="#fff"></path>
              </svg>
            </span>
            <span class = "translationBtn" tabindex = "0">Перевести видео</span>
        </span>
        <span class = "translationMenu" tabindex = "0" role = "button">
          <svg class = "translationMenuIcon" height="15" width="5" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#fff"></path>
          </svg>
        </span>
    </div>`);
  const $translationDownload = $(`
    <a class = "translationDownload">
      <svg width="24px" height="24px" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
    </span>`);
  const $translationBtn = $translationBlock.find('.translationArea > .translationBtn');
  const $translationImageAlice = $translationBlock.find('.translationIconAlice');
  const $translationImageTranslate = $translationBlock.find('.translateIcon');

  const $translationMenuContent = $('<div class = "translationMenuContent"><p class = "translationMainHeader">Перевод видео</p><div class = "translationAbsoluteContainer"></div></div>');
  $translationMenuContent.on('click', (event) => {
    event.stopPropagation();
  });

  const sleep = m => new Promise(r => setTimeout(r, m))

  function addTranslationBtn(elem, device = 'desktop') {
    if (!$(elem).has($translationBlock).length) {
      if (device === 'mobile') {
        $translationBlock.css('top', '1rem');
      }
      $(elem).append($translationBlock);
    }
  };

  function addTranslationMenu(elem, device = 'desktop') {
    if (!$(elem).has($translationMenuContent).length) {
      if (device === 'mobile') {
        $translationMenuContent.css('top', '5rem');
        $translationMenuContent.css('height', '200px');
      }
      $(elem).append($translationMenuContent);
    }
  };

  const audio = new Audio();

  const getVideoId = (service) => {
    const url = new URL(window.location.href);

    switch (service) {
      case "youtube":
        if (url.pathname.includes("watch")) {
          return url.searchParams.get("v");
        } else if (url.pathname.includes("embed/")) { // TODO: Добавить кнопку перевода на странице видео
          let urlArray = url.pathname.split('/');
          return urlArray[urlArray.length - 1];
        }
      case "vk":
        let videoId;
        if (/^video-[0-9]{9}_[0-9]{9}$/.test(url.pathname.split('/')[1])) {
          videoId = url.pathname.split('/')[1]; // Убираем слэш в начале
        } else {
          videoId = url.searchParams.has('z') ? url.searchParams.get("z").split('/')[0] : null; // Убираем мусор в конце параметра
        }
        return videoId;
      case "9gag" || "gag":
        if (url.pathname.includes("gag/")) {
          let urlArray = url.pathname.split('/');
          return urlArray[urlArray.length - 1];
        }
      case "twitch":
        if (/^m\.twitch\.tv$/.test(window.location.hostname)) { // Если используется мобильная версия сайта (m.twitch.tv)
          let linkUrl = document.head.querySelector('link[rel="canonical"]');
          if (linkUrl && linkUrl.href.includes("/videos/")) {
            let urlArray = linkUrl.href.split('/');
            return urlArray[urlArray.length - 1];
          } else {
            return false
          }
        } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
          return url.searchParams.get("video")
        } else if (url.pathname.includes("videos/")) {
          let urlArray = url.pathname.split('/');
          return urlArray[urlArray.length - 1];
        }
      case "tiktok":
        if (url.pathname.includes("video/")) {
          let urlArray = url.pathname.split('/');
          return urlArray[urlArray.length - 1];
        }
      case "vimeo":
        let urlArray = url.pathname.split('/');
        return urlArray[urlArray.length - 1];
      case "xvideos":
        let urlArrayXVideos = url.pathname.split('/');
        return `${urlArrayXVideos[urlArrayXVideos.length - 2]}/${urlArrayXVideos[urlArrayXVideos.length - 1]}`;
      case "pornhub":
        if (url.pathname.includes('view_video.php')) {
          return url.searchParams.get("viewkey");
        } else if (url.pathname.includes('embed/')) {
          let urlArray = url.pathname.split('/');
          return urlArray[urlArray.length - 1];
        }
      default:
        return false;
    }
  };

  const yandexRequests = (function() {
    var protoRequest = new protobuf.Type("VideoTranslationRequest")
                          .add(new protobuf.Field("url", 3, "string"))
                          .add(new protobuf.Field("deviceId", 4, "string"))
                          .add(new protobuf.Field("unknown0", 5, "int32"))
                          .add(new protobuf.Field("unknown1", 6, "fixed64"))
                          .add(new protobuf.Field("unknown2", 7, "int32"))
                          .add(new protobuf.Field("language", 8, "string"))
                          .add(new protobuf.Field("unknown3", 9, "int32"))
                          .add(new protobuf.Field("unknown4", 10, "int32"));
    var protoResponse = new protobuf.Type("VideoTranslationResponse")
                            .add(new protobuf.Field("url",		1,	"string"))
                            .add(new protobuf.Field("duration",	2,	"double"))
                            .add(new protobuf.Field("status",	4,	"int32"))
                            .add(new protobuf.Field("code",	7,	"string"))
                            .add(new protobuf.Field("message",	9,	"string"));
    new protobuf.Root().define("yandex").add(protoRequest).add(protoResponse);
    return {
        encodeRequest: function(url, deviceId, unknown1) {
            return protoRequest.encode({
              url: url, 
              deviceId: deviceId, 
              unknown0: 1, 
              unknown1: unknown1, 
              unknown2: 1, 
              language: "en", 
              unknown3: 0, 
              unknown4: 0
            }).finish();
        },
        decodeResponse: function(response) {
            return protoResponse.decode(new Uint8Array(response));
        }
    };
  })();

  function getUUID(isLower) {
      var uuid = ([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
      return isLower ? uuid : uuid.toUpperCase();
  }

  async function requestVideoTranslation(url, unknown1, callback) {
    var response;
    var responseBody;

    var deviceId = getUUID(true);
    var body = yandexRequests.encodeRequest(url, deviceId, unknown1);

    try {
      var utf8Encoder = new TextEncoder("utf-8");
      var key = await window.crypto.subtle.importKey('raw', utf8Encoder.encode(yandexHmacKey), { name: 'HMAC', hash: {name: 'SHA-256'}}, false, ['sign', 'verify']);
      var signature = await window.crypto.subtle.sign('HMAC', key, body);
      response = await fetch(`https://${workerHost}/video-translation/translate`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
              'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify({
              headers: {
                  "Accept": "application/x-protobuf",
                  "Accept-Language": "en",
                  "Content-Type": "application/x-protobuf",
                  "User-Agent": yandexUserAgent,
                  "Pragma": "no-cache",
                  "Cache-Control": "no-cache",
                  "Sec-Fetch-Mode": "no-cors",
                  "Vtrans-Signature": Array.prototype.map.call(new Uint8Array(signature), x => x.toString(16).padStart(2, '0')).join(''),
                  "Sec-Vtrans-Token": getUUID(false)
              },
              body: String.fromCharCode.apply(null, body)
          })
      });
      responseBody = await response.arrayBuffer();
    } catch(exception) {
        response = {status: -1};
        responseBody = exception;
    }

    callback(response.status == 200, responseBody);
  }

  var translationPanding = false;

  function translateVideo(url, unknown1, callback) {
    if (translationPanding) return;
    translationPanding = true;

    requestVideoTranslation(url, unknown1, function (success, response) {
        translationPanding = false;
        if (!success) {
            callback(false, "Не удалось запросить перевод видео");
            return;
        }

        const translateResponse = yandexRequests.decodeResponse(response);
        console.log('VOT Response: ', translateResponse);
        switch (translateResponse.status) {
            case 0:
                callback(false, translateResponse.message);
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

        objectStore.createIndex('autoTranslate', 'autoTranslate', { unique: false });
        objectStore.createIndex('defaultVolume', 'defaultVolume', { unique: false });
        objectStore.createIndex('showVideoSlider', 'showVideoSlider', { unique: false });
        objectStore.createIndex('newYoutubeDesign', 'newYoutubeDesign', { unique: false });
        console.log('VOT: База Данных создана')

        objectStore.transaction.oncomplete = event => {
          var objectStore = db.transaction('settings', 'readwrite').objectStore('settings');
          var settingsDefault = {
            key: 'settings',
            autoTranslate: 0,
            defaultVolume: 100,
            showVideoSlider: 0,
            newYoutubeDesign: 0,
          }
          var request = objectStore.add(settingsDefault);

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

  async function updateDB({autoTranslate, defaultVolume, showVideoSlider, newYoutubeDesign}) {
    return new Promise((resolve, reject) => {
      if (typeof(autoTranslate) === 'number' || typeof(defaultVolume) === 'number' || typeof(showVideoSlider) === 'number' || typeof(newYoutubeDesign) === 'number') {
        var openRequest = openDB("VOT");

        openRequest.onerror = () => {
          alert('VOT: Произошла ошибка');
          console.error("VOT: Ошибка Базы Данных: " + openRequest.errorCode);
          reject(false);
        };

        openRequest.onupgradeneeded = async () => {
          var db = openRequest.result;
          db.close();
          await initDB();
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
            // console.log('VOT: Получены данные из Базы Данных: ', request.result);
            var data = request.result;

            if (typeof(autoTranslate) === 'number') {
              data.autoTranslate = autoTranslate;
            };

            if (typeof(defaultVolume) === 'number') {
              data.defaultVolume = defaultVolume;
            };

            if (typeof(showVideoSlider) === 'number') {
              data.showVideoSlider = showVideoSlider;
            };

            if (typeof(newYoutubeDesign) === 'number') {
              data.newYoutubeDesign = newYoutubeDesign;
            };

            var requestUpdate = objectStore.put(data);

            requestUpdate.onerror = (event) =>{
              console.error("VOT: Не удалось обновить данные в Базе Данных: ", event.error);
              reject(false);
            };

            requestUpdate.onsuccess = () => {
              // console.log('VOT: Данные в Базе Данных обновлены, вы великолепны!');
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

      openRequest.onupgradeneeded = async () => {
        var db = openRequest.result;
        db.close();
        await initDB();
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
          // console.log('VOT: Получены данные из Базы Данных: ', request.result);
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


  function changeColor(n) {
    $translationBtn.css("color", n);
  }

  function changeBackground(type = 'none') {
    let aliceMaskFill;
    let aliceGradientStop1;
    let aliceGradientStop2;
    let imgBackgroundColor;
    switch (type) {
      case 'error':
        aliceMaskFill = '#7A7A7D';
        aliceGradientStop1 = '#7A7A7D';
        aliceGradientStop2 = '#7A7A7D';
        imgBackgroundColor = '#7A7A7D';
        break;
      case 'success':
        aliceMaskFill = '#7626FF';
        aliceGradientStop1 = '#C826FF';
        aliceGradientStop2 = '#5426FF';
        imgBackgroundColor = '#A36EFF';
        break;
      default:
        aliceMaskFill = '#7626FF';
        aliceGradientStop1 = '#C826FF';
        aliceGradientStop2 = '#5426FF';
        imgBackgroundColor = '#FFFFFF';
        break;
    }
    $translationImageAlice.find('g > path:nth-child(2)').attr('fill', aliceMaskFill);
    $translationImageAlice.find('defs > linearGradient > stop:nth-child(1)').attr('stop-color', aliceGradientStop1);
    $translationImageAlice.find('defs > linearGradient > stop:nth-child(2)').attr('stop-color', aliceGradientStop2);
    $translationImageTranslate.attr('fill', imgBackgroundColor)
  }

  function transformBtn(type = 'none', text) {
    switch (type) {
      case 'error':
        $translationBtn.text(text);
        changeBackground('error');
        changeColor('#7A7A7D');
        break;
      case 'success':
        $translationBtn.text(text);
        changeBackground('success');
        changeColor('#A36EFF');
        break;
      default:
        $translationBtn.text(text);
        changeBackground('none');
        changeColor('#FFFFFF');
        break;
    }
    $translationBtn.text(text);
  }

  async function translateProccessor($videoContainer, siteHostname, siteEvent) {
    var autoRetry;
    let opacityRatio = 0.9; 
    if (siteHostname === 'vimeo') {
      var video = $($videoContainer).find('.vp-video-wrapper > .vp-video > .vp-telecine > video')[0];
    } else {
      var video = $($videoContainer).find('video')[0];
    }

    if (siteHostname === '9gag') {
      $videoContainer.parent().removeAttr('href');
    }

    var firstPlay = true;
    var isDBInited = await initDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    if (siteHostname === 'youtube' && window.location.hostname.includes('m.youtube.com')) {
      await sleep(1000);
      opacityRatio = 1;
      addTranslationBtn($('.slim-video-information-title-and-badges'), 'mobile');
      addTranslationMenu($('.slim-video-information-title-and-badges'), 'mobile');
    } else if (siteHostname === 'pornhub') {
      if (window.location.pathname.includes('view_video.php')) {
        addTranslationBtn($('.original.mainPlayerDiv'));
        addTranslationMenu($('.original.mainPlayerDiv'));
      } else if (window.location.pathname.includes('embed/')) {
        addTranslationBtn($('body'));
        addTranslationMenu($('body'));
      }
    } else {
      addTranslationBtn($videoContainer);
      addTranslationMenu($videoContainer);
    }
    transformBtn('none', 'Перевести видео');
    $('.translationDownload').remove();
    if (isDBInited) {
      var dbData = await readDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
      var dbAutoTranslate = dbData !== undefined ? dbData.autoTranslate : undefined;
      var dbDefaultVolume = dbData !== undefined ? dbData.defaultVolume : undefined;
      var dbShowVideoSlider = dbData !== undefined ? dbData.showVideoSlider : undefined;
      var dbNewYoutubeDesign = dbData !== undefined ? dbData.newYoutubeDesign : undefined;
      console.log(`VOT: Значение autoTranslate: ${dbAutoTranslate}`)
      console.log(`VOT: Значение dbDefaultVolume: ${dbDefaultVolume}`)
      console.log(`VOT: Значение dbShowVideoSlider: ${dbShowVideoSlider}`)
      console.log(`VOT: Значение newYoutubeDesign: ${dbNewYoutubeDesign}`)
      if (!$translationMenuContent.has('.translationAT').length && dbAutoTranslate !== undefined) {
        let $translationATCont = $(
          `<div class = "translationMenuContainer">
            <input type="checkbox" name="auto_translate" value=${dbAutoTranslate} class = "translationAT" ${dbAutoTranslate === 1 ? "checked" : ''}>
            <label class = "translationMenuText" for = "auto_translate">Автоматический перевод видео${siteHostname === 'vk' || window.location.hostname.includes('m.twitch.tv') ? ' <strong>(рекомендуется)</strong>' : ''}</label>
          </div>
          `
        );
        let $translationAT = $($translationATCont).find('.translationAT');
        $translationAT.on('click', async (event) => {
          event.stopPropagation();
          let atValue = event.target.checked ? 1 : 0;
          await updateDB({autoTranslate: atValue});
          dbAutoTranslate = atValue;
        });
        $translationMenuContent.append($translationATCont);
      }
      if (!$translationMenuContent.has('.translationDropDB').length && dbData !== undefined) {
        let $translationDropDB = $(
          `<button class = "translationDropDB">Сбросить настройки</button>`
        );
        $translationDropDB.on('click', async (event) => {
          event.stopPropagation();
          deleteDB();
          location.reload();
        });
        $translationMenuContent.find('.translationAbsoluteContainer').append($translationDropDB);
      }
      if (!$translationMenuContent.has('.translationSVS').length && dbData !== undefined && (dbNewYoutubeDesign === 1 || !window.location.hostname.includes('m.youtube.com'))) {
        let $translationSVSCont = $(
          `<div class = "translationMenuContainer">
            <input type="checkbox" name="show_video_slider" value=${typeof(dbShowVideoSlider) === 'number' ? dbShowVideoSlider : '0'} class = "translationSVS" ${dbShowVideoSlider === 1 ? "checked" : ''}>
            <label class = "translationMenuText" for = "show_video_slider">Слайдер громкости оригинала</label>
          </div>
          `
        );
        let $translationSVS = $($translationSVSCont).find('.translationSVS');
        $translationSVS.on('click', async (event) => {
          event.stopPropagation();
          let svsValue = event.target.checked ? 1 : 0;
          await updateDB({showVideoSlider: svsValue});
          dbShowVideoSlider = svsValue;
        });
        $translationMenuContent.append($translationSVSCont);
      }
      if (!$translationMenuContent.has('.translationND').length && dbData !== undefined && window.location.hostname.includes('m.youtube.com')) {
        let $translationNDCont = $(
          `<div class = "translationMenuContainer">
            <input type="checkbox" name="new_youtube_design" value=${typeof(dbNewYoutubeDesign) === 'number' ? dbNewYoutubeDesign : '0'} class = "translationND" ${dbNewYoutubeDesign === 1 ? "checked" : ''}>
            <label class = "translationMenuText" for = "new_youtube_design">Новый дизайн YouTube</label>
          </div>
          `
        );
        let $translationND = $($translationNDCont).find('.translationND');
        $translationND.on('click', async (event) => {
          event.stopPropagation();
          let ndValue = event.target.checked ? 1 : 0;
          await updateDB({newYoutubeDesign: ndValue});
          dbNewYoutubeDesign = ndValue;
        });
        $translationMenuContent.append($translationNDCont);
      }
      if (window.location.hostname.includes('m.youtube.com')) {
        dbNewYoutubeDesign === 1 ? $translationMenuContent.css('height', '300px') : $translationMenuContent.css('height', '200px');
      } 
    }

    let btnHover = function () {
      let time;
      var isOpened = false;
      var $translationMenu = $(".translationMenu");

      $translationMenu.on('click', (event) => {
        event.stopPropagation();
        isOpened ? $translationMenuContent.hide() : ($translationMenuContent.show(), $translationMenuContent.css('opacity', opacityRatio));
        isOpened = !isOpened;
      })

      if (siteHostname === 'pornhub') {
        if (window.location.pathname.includes('view_video.php')) {
          $($('.original.mainPlayerDiv > video-element > div')).on("mousemove", () => resetTimer());
          $($('.original.mainPlayerDiv > video-element > div')).on("mouseout", () => logout(0));
        } else if (window.location.pathname.includes('embed/')) {
          $($('#player')).on("mousemove", () => resetTimer());
          $($('#player')).on("mouseout", () => logout(0));
        }
      } else {
        $($videoContainer).on("mousemove", () => resetTimer());
        $($videoContainer).on("mouseout", () => logout(0));
      }

      $(document).on("click", (event) => {
        let isBlock = event.target === $($translationBlock)[0] || $($translationBlock).length ? $($translationBlock)[0].contains(event.target) : false;
        let isContent = event.target === $($translationMenuContent)[0] || $($translationMenuContent).length ? $($translationMenuContent)[0].contains(event.target) : false;
        let isVideo = event.target === $($videoContainer)[0] || $($videoContainer).length ? $($videoContainer)[0].contains(event.target) : false;
        if (!isBlock && !isContent) {
          $translationMenuContent.hide();
          isOpened = false
          if (!isVideo)
          {
            logout(0);
          }
        }
      })

      $translationBlock.on("mousemove", (event) => (clearTimeout(time), logout(opacityRatio), event.stopPropagation()));
      $translationMenuContent.on("mousemove", (event) => (clearTimeout(time), logout(opacityRatio), event.stopPropagation()));

      $(document).on("touchstart", (event) => (clearTimeout(time), logout(opacityRatio), event.stopPropagation()));
      $(document).on("touchmove", (event) => (clearTimeout(time), logout(opacityRatio), event.stopPropagation()));
      $(document).on("touchend", (event) => (clearTimeout(time), logout(opacityRatio), event.stopPropagation()));

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

    const translateFunc = (VIDEO_ID) => translateVideo(`${siteTranslates[siteHostname]['url']}${VIDEO_ID}`, siteTranslates[siteHostname]['func_param'], function (success, urlOrError) {

      if (getVideoId(siteHostname) === VIDEO_ID) {
        if (!success) {
          transformBtn('error', urlOrError);
          if (urlOrError === 'Перевод займет несколько минут') {
            clearTimeout(autoRetry);
            autoRetry = setTimeout(() => {
              translateFunc(VIDEO_ID);
            }, 70000)
          }
          return;
        }

        audio.src = urlOrError;
        if (typeof(dbDefaultVolume) === 'number') {
          audio.volume = dbDefaultVolume / 100;
        }

        if (siteEvent !== null & siteEvent !== 'invidious') {
          $("body").on(siteEvent, function () {
            audio.pause();
            $("video").off(".translate");
            deleteAudioSrc();
          });
        }

        if (siteHostname === 'twitch' || siteHostname === 'vimeo') {
          var mutationObserver = new MutationObserver(async function(mutations) {
            mutations.forEach(async function(mutation) {
              if (mutation.type === 'attributes' && mutation.attributeName === 'src' && mutation.target === video) {
                if (mutation.target.src !== '') {
                  audio.pause();
                  $("video").off(".translate");
                  deleteAudioSrc();
                  $('.translationDownload').remove();
                  transformBtn('none', 'Перевести видео');
                  firstPlay = true;
                }
              }
            });
          });
        
          mutationObserver.observe($videoContainer[0], {
            attributes: true,
            childList: false,
            subtree: true,
            attributeOldValue: true,
          });
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

        transformBtn('success', 'Выключить');
        if (typeof(dbDefaultVolume) === 'number') {
          var defaultTranslateVolume = dbDefaultVolume; 
        } else {
          var defaultTranslateVolume = 100;
        }

        const volumeBox = $(`
          <div class = "translationMenuContainer">
            <span class = "translationHeader">Громкость перевода: <b class = "volumePercent">${defaultTranslateVolume}%</b></span>
            <div class = "translationVolumeBox" tabindex = "0">
              <input type="range" min="0" max="100" value=${defaultTranslateVolume} class="translationVolumeSlider">
            </div>
          </div>`
        );
        const volumeSlider = volumeBox.find('.translationVolumeSlider');

        if (!$translationMenuContent.has('.translationVolumeBox').length) {
          $translationMenuContent.append(volumeBox);
          let $volumePercent = volumeBox.find('.volumePercent');
          volumeSlider.on('input', async () => {
            let value = volumeSlider.val();
            audio.volume = (value / 100);
            $volumePercent.text(`${value}%`);
            await updateDB({defaultVolume: Number(value)});
          });
        }

        if (dbShowVideoSlider === 1 && (dbNewYoutubeDesign === 1 || !window.location.hostname.includes("m.youtube.com"))) {
          const videoVolumeBox = $(`
            <div class = "translationMenuContainer">
              <span class = "translationHeader">Громкость оригинала: <b class = "volumePercent">${Math.round(video.volume * 100)}%</b></span>
              <div class = "translationVideoVolumeBox" tabindex = "0">
                <input type="range" min="0" max="100" value=${Math.round(video.volume * 100)} class="translationVolumeSlider">
              </div>
            </div>`
          );
          const videoVolumeSlider = videoVolumeBox.find('.translationVolumeSlider');

          if (!$translationMenuContent.has('.translationVideoVolumeBox').length) {
            $translationMenuContent.append(videoVolumeBox);
            let $volumePercent = videoVolumeBox.find('.volumePercent');
            videoVolumeSlider.on('input', async () => {
              let value = videoVolumeSlider.val();
              video.volume = (value / 100);
              $volumePercent.text(`${value}%`);
            });
          }
        }

        if (!$translationMenuContent.find('.translationAbsoluteContainer').has('.translationDownload').length) {
          $translationMenuContent.find('.translationAbsoluteContainer').append($translationDownload);
          $translationDownload.attr('href', urlOrError);
        }
      }
    });

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
              transformBtn('error', 'Предоставьте разрешение на автовоспроизведение')
              throw "VOT: Предоставьте разрешение на автовоспроизведение"
            } else if (e.name === "NotSupportedError") {
              if (sitesChromiumBlocked.includes(window.location.hostname)) {
                transformBtn('error', 'Для поддержки этого сайта необходимо дополнительное расширение')
                throw "VOT: Для поддержки этого сайта необходимо дополнительное расширение"
              } else {
                transformBtn('error', 'Формат аудио не поддерживается')
                throw "VOT: Формат аудио не поддерживается"
              }
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

      const VIDEO_ID = getVideoId(siteHostname);

      if (!VIDEO_ID) {
        throw "VOT: Не найдено ID видео";
      }

      if (firstPlay && dbAutoTranslate === 1) {
        translateFunc(VIDEO_ID);
        firstPlay = false;
      }
    });

    $translationBtn.click(function (event) {
      event.stopPropagation();

      if (audio.src) {
        deleteAudioSrc();
        transformBtn('none', 'Перевести видео')
        event.stopImmediatePropagation();
      }
    });

    $translationBtn.click(async function (event) {
      try {
        event.stopPropagation();

        const VIDEO_ID = getVideoId(siteHostname);

        if (!VIDEO_ID) {
          throw "VOT: Не найдено ID видео"; // not found video id
        }
        translateFunc(VIDEO_ID)
        event.stopImmediatePropagation();
      } catch (err) {
        transformBtn('error', err.substring(13, err.length))
        console.error(err);
      }
    });
  }

  async function initWebsite() {
    if (/^(www.|m.)?youtube(-nocookie)?.com$/.test(window.location.hostname)) {
      if (window.location.pathname.includes('embed')) {
        await translateProccessor($('.html5-video-container'), 'youtube', null);
      } else if (window.location.hostname.includes("m.youtube.com") && window.location.pathname.includes('watch')){
        await translateProccessor($('.html5-video-container'), 'youtube', null);
      } else {
        $("body").on("yt-page-data-updated", async function () {
          await translateProccessor($('.html5-video-container'), 'youtube', 'yt-page-data-updated');
        });
      }
    } else if (window.location.hostname.includes('twitch')) {
      if (window.location.hostname.includes('m.twitch.tv') && window.location.pathname.includes('videos')) {
        await sleep(1000);
        const $videoContainer = $('.sc-2035e8b3-0.lfUPeS');
        await translateProccessor($videoContainer, 'twitch', null);
        // Тоже самое, что и вариант снизу, но по идеи должен быть более производительным (так же требует дабл клика)
        var mutationObserver = new MutationObserver(async function(mutations) {
          mutations.forEach(async function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'src' && mutation.target === $videoContainer.find('video')[0]) {
              await sleep(1000);
              // Есть проблема с кнопкой перевода. Её необходимо нажать 2 раза при переходе на другое видео idk why (если это вас напрягает, то можете попробовать пофиксить или использовать автоперевод. С ним наудивление, всё идеально работает)
              await translateProccessor($('.sc-2035e8b3-0.lfUPeS'), 'twitch', null);
            }
          });
        });
      
        mutationObserver.observe($videoContainer[0], {
          attributes: true,
          childList: true,
          subtree: true,
          attributeOldValue: true,
        });
      } else if (window.location.hostname.includes('player.twitch.tv') || window.location.pathname.includes('videos')) {
        await sleep(1000); // stupid fix for wait video load
        await translateProccessor($('.video-ref'), 'twitch', null);
      }
    } else if (window.location.hostname.includes('xvideos')) {
      await sleep(1000);
      await translateProccessor($('.video-bg-pic'), 'xvideos', null);
    } else if (window.location.hostname.includes('pornhub')) {
      await sleep(1000);
      await translateProccessor($('.mgp_videoWrapper'), 'pornhub', null);
    } else if (sitesInvidious.includes(window.location.hostname)) { // Нужно дополнительное расширение для работы в хромоподбных браузерах
      await translateProccessor($('#player'), 'youtube', null);
    } else if (/^(www.|m.)?vk.(com|ru)$/.test(window.location.hostname)) {
      $(window).on('load', async () => {
        await sleep(1500);
        let videoIDVK;
        let videoIDVKNew;
        let videoFirst = true;
        // Выглядит мега криво, зато работает :)
        setInterval(async () => {
          videoIDVKNew = getVideoId('vk');
          if (/^video-[0-9]+_[0-9]+$/.test(videoIDVKNew) && typeof(videoIDVK) === 'undefined' && videoFirst === true) {
            videoFirst = false;
            await translateProccessor($('.videoplayer_media'), 'vk', null);
          } else if (videoIDVK !== videoIDVKNew) {
            if (videoIDVKNew) {
              // Есть проблема с кнопкой перевода. Её необходимо нажать 2 раза при переходе на другое видео idk why (если это вас напрягает, то можете попробовать пофиксить или использовать автоперевод. С ним наудивление, всё идеально работает)
              await translateProccessor($('.videoplayer_media'), 'vk', null);
            }
            videoIDVK = videoIDVKNew;
          } 
        }, 3000);
      });
    } else if (window.location.hostname.includes('vimeo')) {
      await sleep(1000);
      await translateProccessor($('.player'), 'vimeo', null);
    }
  }

  await initWebsite();
})();
