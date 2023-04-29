import './styles/main.css';
import { getYTVideoData }  from './utils/getYTVideoData.js';
import { yandexRequests } from './yandexRequests.js';

async function main() {
  const rvt = await import(
    `./rvt${BUILD_MODE === 'cloudflare' ? '-cloudflare' : ''}.js`
  );

  const requestVideoTranslation = rvt.default;

  if (BUILD_MODE !== 'cloudflare' && (GM_info?.scriptHandler && ['Violentmonkey', 'FireMonkey', 'Greasemonkey', 'AdGuard'].includes(GM_info.scriptHandler))) {
        let errorText = `VOT Ошибка!\n${GM_info.scriptHandler} не поддерживается этой версией расширения!\nПожалуйста, используйте спец. версию расширения.`;
        console.log(errorText);
        return alert(errorText);
  }

  const debug = {}
  debug.log = (...text) => {
    if (!DEBUG_MODE) {
      return;
    }
    return console.log("%c[VOT DEBUG]", "background: #F2452D; color: #fff; padding: 5px;", ...text);
  }

  const defaultVideoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation (uses with option "autoSetVolumeYandexStyle")
  const availableLangs = ['ru', 'en', 'zh', 'fr', 'it', 'es']; // available languages for translation

  const twitterSelector = 'article[data-testid="tweet"][tabindex="-1"]';
  const twitchMobileSelector = 'main > div > section > div > div > div';
  const twitchSelector = '.video-ref';
  const vkSelector = '.videoplayer_media';
  const facebookSelector = 'div[data-pagelet="WatchPermalinkVideo"]';

  const siteTranslates = {
    'youtube': {
      'url': 'https://youtu.be/',
      'func_param': 0x4075500000000000
    },
    'twitch': {
      'url': 'https://twitch.tv/',
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
      'url': 'https://vk.com/video?z=',
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
    'udemy': {
      'url': 'https://www.udemy.com',
      'func_param': 0x4075500000000000
    },
    'twitter': {
      'url': 'https://twitter.com/i/status/',
      'func_param': 0x4075500000000000
    },
    'facebook': {
      'url': 'https://www.facebook.com/',
      'func_param': 0x4075500000000000
    },
    'rutube': {
      'url': 'https://rutube.ru/video/',
      'func_param': 0x4075500000000000
    }
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

  function addTranslationBtn(elem, target = 'desktop') {
    if (!$(elem).has($translationBlock).length) {
      if (target === 'yt-mobile') {
        $translationBlock.css('top', '1rem');
      }

      debug.log(`VOT: Added translation button (target: ${target})`)
      $(elem).append($translationBlock);
    } else {
      debug.log(`VOT: Already added translation button (target: ${target})`, elem)
    }
  };

  function addTranslationMenu(elem, target = 'desktop') {
    if (!$(elem).has($translationMenuContent).length) {
      if (target === 'yt-mobile') {
        $translationMenuContent.css('top', '5rem');
      } else if (target === 'twitter') {
        $translationMenuContent.css('top', '55%');
      }

      debug.log(`VOT: Added translation menu (target: ${target})`)
      $(elem).append($translationMenuContent);
    } else {
      debug.log(`VOT: Already added translation menu (target: ${target})`, elem)
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
        if (/^video-?[0-9]{8,9}_[0-9]{9}$/.test(url.pathname.split('/')[1])) {
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
            return `videos/${urlArray[urlArray.length - 1]}`;
          } else if (linkUrl && linkUrl.href.includes) {
            return url.pathname.slice(1);
          } else {
            return false
          }
        } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
          return `videos/${url.searchParams.get("video")}`
        } else if (url.pathname.includes("/videos/")) {
          let urlArray = url.pathname.split('/');
          return `videos/${urlArray[urlArray.length - 1]}`;
        } else if (url.pathname.includes("/clip/")) {
          return url.pathname.slice(1);
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
      case "twitter":
        if (url.pathname.includes("/status/")) {
          const urlArray = url.pathname.split('/');
          return urlArray[urlArray.length - 1];
        }
      case "udemy":
        return url.pathname;
      case "facebook":
        return url.pathname;
      case "rutube":
        if (url.pathname.includes("/video/")) {
          const urlArray = url.pathname.split('/');
          return urlArray[urlArray.length - 2];
        }
      default:
        return false;
    }
  };

  if (BUILD_MODE === 'cloudflare') {
    var translationPanding = false;
  }

  function secsToStrTime(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    if (minutes >= 60) {
      return "Перевод займёт больше часа"
    } else if (minutes >= 10 && minutes % 10) {
      return `Перевод займёт ${minutes} минут`
    } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
      return "Перевод займёт около минуты"
    } else {
      return `Перевод займёт ${minutes} минуты`
    }
  }

  function translateVideo(url, unknown1, requestLang, responseLang, callback) {
    if (BUILD_MODE === 'cloudflare') {
      if (translationPanding) {
        return;
      }
      translationPanding = true;
    }

    requestVideoTranslation(url, unknown1, requestLang, responseLang, function (success, response) {
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
          let remainingTime = 'Перевод займет несколько минут'
          if (translateResponse.remainingTime) {
            remainingTime = secsToStrTime(translateResponse.remainingTime);
          }
          callback(false, remainingTime);
          return;
        case 3: /*
          Иногда, в ответе приходит статус код 3, но видео всё, так же, ожидает перевода. В конечном итоге, это занимает слишком много времени,
          как-будто сервер не понимает, что данное видео уже недавно было переведено и заместо возвращения готовой ссылки на перевод начинает переводить видео заново при чём у него это получается за очень длительное время
        */
          callback(false, "Видео переводится");
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
    return indexedDB.open(name, 1);
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
        objectStore.createIndex('syncVolume', 'syncVolume', { unique: false });
        objectStore.createIndex('autoSetVolumeYandexStyle', 'autoSetVolumeYandexStyle', { unique: false });
        objectStore.createIndex('dontTranslateRuVideos', 'dontTranslateRuVideos', { unique: false });
        console.log('VOT: База Данных создана')

        objectStore.transaction.oncomplete = event => {
          var objectStore = db.transaction('settings', 'readwrite').objectStore('settings');
          var settingsDefault = {
            key: 'settings',
            autoTranslate: 0,
            defaultVolume: 100,
            showVideoSlider: 0,
            syncVolume: 0,
            autoSetVolumeYandexStyle: 1,
            dontTranslateRuVideos: 0
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

  async function updateDB({
    autoTranslate,
    defaultVolume,
    showVideoSlider,
    syncVolume,
    autoSetVolumeYandexStyle,
    dontTranslateRuVideos
  }) {
    return new Promise((resolve, reject) => {
      if (
        typeof(autoTranslate) === 'number' ||
        typeof(defaultVolume) === 'number' ||
        typeof(showVideoSlider) === 'number' ||
        typeof(syncVolume) === 'number' ||
        typeof(autoSetVolumeYandexStyle) === 'number' ||
        typeof(dontTranslateRuVideos) === 'number') {
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

            if (typeof(syncVolume) === 'number') {
              data.syncVolume = syncVolume;
            };

            if (typeof(autoSetVolumeYandexStyle) === 'number') {
              data.autoSetVolumeYandexStyle = autoSetVolumeYandexStyle;
            };

            if (typeof(dontTranslateRuVideos) === 'number') {
              data.dontTranslateRuVideos = dontTranslateRuVideos;
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
        changeBackground('error');
        changeColor('#7A7A7D');
        break;
      case 'success':
        changeBackground('success');
        changeColor('#A36EFF');
        break;
      default:
        changeBackground('none');
        changeColor('#FFFFFF');
        break;
    }
    $translationBtn.text(text);
  }

  async function waitForElement(selector, timeout = 15000) {
    const start = Date.now();

    while (Date.now() - start < timeout) {
      const el = $(selector);
      if ((el && el.length) || Date.now() - start > timeout) {
        return el;
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return null;
  }

  async function translateProccessor($videoContainer, siteHostname, siteEvent) {
    // --- Variables ---
    var autoRetry;
    var dbSyncVolume;
    let volumeOnStart;
    let opacityRatio = 0.9;
    var tempOriginalVolume;
    var tempVolume;
    let video;

    // --- Get video element ---
    if (siteHostname === 'vimeo') {
      video = $($videoContainer).find('.vp-video-wrapper > .vp-video > .vp-telecine > video')[0];
    } else if (siteHostname === 'facebook') {
      video = $($videoContainer).find('div > div > div > div > div > div > div > div > div > div > video')[0];
    } else if (siteHostname === 'twitter') {
      $videoContainer = $(twitterSelector)
      video = $videoContainer.find('div[data-testid="videoComponent"] > div > div > video')[0];
      stopTraslate();
    } else {
      video = $($videoContainer).find('video')[0];
    }

    let videoData = getVideoData();
    console.log('VOT Video Data: ', videoData)

    if (siteHostname === '9gag') {
      $videoContainer.parent().removeAttr('href');
    }

    if (siteHostname == 'youtube' && window.location.hostname.includes('youtube.com') && !window.location.hostname.includes('m.youtube.com')) {
      const syncVolumeObserver = new MutationObserver(async function(mutations) {
        mutations.forEach(async function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'aria-valuenow' && $('.translationVideoVolumeBox').length) {
            syncOriginalVolumeSlider();
          }
        });
      });

      syncVolumeObserver.observe($('.ytp-volume-panel')[0], {
        attributes: true,
        childList: false,
        subtree: true,
        attributeOldValue: true,
      });
    }

    function stopTraslate() {
      // Default actions on stop translate
      audio.pause();
      $("video").off(".translate");
      deleteAudioSrc();
      $('.translationVolumeBox').parent().remove();
      $('.translationVideoVolumeBox').parent().remove();
      $('.translationDownload').remove();
      transformBtn('none', 'Перевести видео');
      if (volumeOnStart) {
        video.volume = volumeOnStart;
      }
    }

    function syncOriginalVolumeSlider() {
      // Sync volume slider with original video (youtube only)
      const newSlidersVolume = $('.ytp-volume-panel').attr('aria-valuenow');
      const videoVolumeBox = $('.translationVideoVolumeBox');
      if (videoVolumeBox.length) {
        const videoVolumeSlider = videoVolumeBox.find('.translationVolumeSlider');
        videoVolumeSlider.val(newSlidersVolume);
        const volumePercent = videoVolumeBox.parent().find('.volumePercent');
        volumePercent.text(`${newSlidersVolume}%`);
      }
      if (dbSyncVolume === 1) {
        tempOriginalVolume = Number(newSlidersVolume);
      }
    }

    var firstPlay = true;
    var isDBInited = await initDB().then(value => {return(value)}).catch(err => {console.error(err); return false});
    if (siteHostname === 'youtube' && window.location.hostname.includes('m.youtube.com')) {
      await sleep(1000);
      opacityRatio = 1;
      addTranslationBtn($('.slim-video-information-title-and-badges'), 'yt-mobile');
      addTranslationMenu($('.slim-video-information-title-and-badges'), 'yt-mobile');
    } else if (siteHostname === 'pornhub') {
      if (window.location.pathname.includes('view_video.php')) {
        addTranslationBtn($('.original.mainPlayerDiv'));
        addTranslationMenu($('.original.mainPlayerDiv'));
      } else if (window.location.pathname.includes('embed/')) {
        addTranslationBtn($('body'));
        addTranslationMenu($('body'));
      }
    } else if (siteHostname === 'twitter') {
      const elementMenuContainer = $(`${twitterSelector} > div > div > div:nth-child(3)`);
      const elementContainer = elementMenuContainer.find('div[data-testid="videoPlayer"]');
      addTranslationBtn(elementContainer);
      addTranslationMenu(elementMenuContainer, 'twitter');
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
      var dbAutoSetVolumeYandexStyle = dbData !== undefined ? dbData.autoSetVolumeYandexStyle : undefined;
      var dbDontTranslateRuVideos = dbData !== undefined ? dbData.dontTranslateRuVideos : undefined;

      // Только для ютуба
      dbSyncVolume = dbData !== undefined ? dbData.syncVolume : undefined;

      console.log(`VOT: Значение autoTranslate: ${dbAutoTranslate}`);
      console.log(`VOT: Значение dbDefaultVolume: ${dbDefaultVolume}`);
      console.log(`VOT: Значение dbShowVideoSlider: ${dbShowVideoSlider}`);
      console.log(`VOT: Значение syncVolume (только для YouTube): ${dbSyncVolume}`);
      console.log(`VOT: Значение autoSetVolumeYandexStyle: ${dbAutoSetVolumeYandexStyle}`);
      console.log(`VOT: Значение dontTranslateRuVideos: ${dbDontTranslateRuVideos}`);

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

      if (!$translationMenuContent.has('.translationSVS').length && dbData !== undefined) {
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
          if (svsValue === 1 && $translationBtn.text() === 'Выключить') {
            addVideoSlider();
          } else {
            $('.translationVideoVolumeBox').parent().remove();
          }
        });
        $translationMenuContent.append($translationSVSCont);
      }

      if (window.location.hostname.includes('m.youtube.com')) {
        $translationMenuContent.css('height', '350px');
      }

      if (!$translationMenuContent.has('.translationSyncVolume').length && dbSyncVolume !== undefined && window.location.hostname.includes('youtube.com')) {
        let $translationSyncVolumeContainter = $(
          `<div class = "translationMenuContainer">
            <input type="checkbox" name="sync_volume" value=${dbSyncVolume} class = "translationSyncVolume" ${dbSyncVolume === 1 ? "checked" : ''}>
            <label class = "translationMenuText" for = "sync_volume">[YT Only] Синхронизация громкости перевода с громкостью видео</label>
          </div>
          `
        );
        let $translationSyncVolume = $($translationSyncVolumeContainter).find('.translationSyncVolume');
        $translationSyncVolume.on('click', async (event) => {
          event.stopPropagation();
          let syncVolumeValue = event.target.checked ? 1 : 0;
          await updateDB({syncVolume: syncVolumeValue});
          dbSyncVolume = syncVolumeValue;
        });
        $translationMenuContent.append($translationSyncVolumeContainter);
      } else if (dbSyncVolume === undefined) {
        try {
          await updateDB({syncVolume: 0});
          console.log('VOT: Применено стандартное значение для "SyncVolume" (0). Пожалуйста, перезагрузите страницу.')
        } catch (err) {
          console.error('VOT: Не удалось применить стандартное значение для "SyncVolume". Причина: ', err)
        }
      }

      if (!$translationMenuContent.has('.translationAutoSetVolume').length && dbData !== undefined) {
        let $translationAutoSetVolumeContainer = $(
          `<div class = "translationMenuContainer">
            <input type="checkbox" name="auto_set_volume" value=${typeof(dbAutoSetVolumeYandexStyle) === 'number' ? dbAutoSetVolumeYandexStyle : '0'} class = "translationAutoSetVolume" ${dbAutoSetVolumeYandexStyle === 1 ? "checked" : ''}>
            <label class = "translationMenuText" for = "auto_set_volume">Автоматически выставлять громкость оригинала (Yandex-like)</label>
          </div>
          `
        );
        let $translationAutoSetVolume = $($translationAutoSetVolumeContainer).find('.translationAutoSetVolume');
        $translationAutoSetVolume.on('click', async (event) => {
          event.stopPropagation();
          let autoSetVolumeValue = event.target.checked ? 1 : 0;
          await updateDB({autoSetVolumeYandexStyle: autoSetVolumeValue});
          dbAutoSetVolumeYandexStyle = autoSetVolumeValue;
        });
        $translationMenuContent.append($translationAutoSetVolumeContainer);
      }

      if (!$translationMenuContent.has('.translationDTRuV').length && dbDontTranslateRuVideos !== undefined && window.location.hostname.includes('youtube.com')) {
        let $DTRuVContainter = $(
          `<div class = "translationMenuContainer">
            <input type="checkbox" name="dont_translate_ru_videos" value=${dbDontTranslateRuVideos} class = "translationDTRuV" ${dbDontTranslateRuVideos === 1 ? "checked" : ''}>
            <label class = "translationMenuText" for = "dont_translate_ru_videos">[YT Only] Ограничить перевод русскоязычных видео</label>
          </div>
          `
        );
        let $translationDTRuV = $($DTRuVContainter).find('.translationDTRuV');
        $translationDTRuV.on('click', async (event) => {
          event.stopPropagation();
          let DTRuVValue = event.target.checked ? 1 : 0;
          await updateDB({dontTranslateRuVideos: DTRuVValue});
          dbDontTranslateRuVideos = DTRuVValue;
        });
        $translationMenuContent.append($DTRuVContainter);
      }
    } else {
      $translationMenuContent.remove();
      console.error('VOT: Не удалось создать меню. Причина: База данных не загружена.');
    }

    function getVideoData() {
      let videoData = {};
      videoData.duration = video?.duration ? video.duration : 0;
      videoData.videoId = getVideoId(siteHostname);
      videoData.detectedLanguage = 'en'; // default language of video
      videoData.responseLanguage = 'ru'; // default language of audio response
      if (window.location.hostname.includes('youtube.com')) {
        const ytData = getYTVideoData();
        if (!availableLangs.includes(ytData.detectedLanguage)) {
          ytData.detectedLanguage = 'en';
        }

        if (ytData.detectedLanguage === 'ru') {
          ytData.responseLanguage = 'en';
        }

        videoData = {...videoData,...ytData};
      }

      return videoData;
    }

    function addVideoSlider() {
      if (dbShowVideoSlider === 1) {
        const newSlidersVolume = (window.location.hostname.includes('youtube.com') && !dbAutoSetVolumeYandexStyle) ? $('.ytp-volume-panel').attr('aria-valuenow') : Math.round(video.volume * 100);

        const videoVolumeBox = $(`
          <div class = "translationMenuContainer">
            <span class = "translationHeader">Громкость оригинала: <b class = "volumePercent">${newSlidersVolume}%</b></span>
            <div class = "translationVideoVolumeBox" tabindex = "0">
              <input type="range" min="0" max="100" value=${newSlidersVolume} class="translationVolumeSlider">
            </div>
          </div>`
        );
        const videoVolumeSlider = videoVolumeBox.find('.translationVolumeSlider');

        if (!$translationMenuContent.has('.translationVideoVolumeBox').length) {
          $translationMenuContent.append(videoVolumeBox);
          let $volumePercent = videoVolumeBox.find('.volumePercent');
          tempOriginalVolume = newSlidersVolume;
          videoVolumeSlider.on('input', (event) => {
            const {value} = event.target;
            video.volume = (value / 100);
            $volumePercent.text(`${value}%`);

            if (dbSyncVolume === 1) {
              // console.log(`VOT: Синхронизация громкости перевода с громкостью видео. Громкость оригинала: ${value}. Прошлая громкость оригинала: ${tempOriginalVolume}`);
              const volumeBox = $('.translationVolumeBox');
              const volumeSlider = volumeBox.find('.translationVolumeSlider');
              const volumePercent = volumeBox.parent().find('.volumePercent');
              const volume = Number(volumeSlider.val());
              let finalValue;

              if (value > tempOriginalVolume) {
                // value = 100
                // tempOriginalVolume = 69
                // volume = 15
                // 100 - 69 = 31
                // 15 + 31 = 46 - final translation volume
                finalValue = volume + (value - tempOriginalVolume);
                if (finalValue > 100) {
                  finalValue = 100;
                } else {
                  finalValue = Math.max(finalValue, 0)
                }

                audio.volume = finalValue / 100;
              } else if (value < tempOriginalVolume) {
                // value = 69
                // tempOriginalVolume = 100
                // volume = 15
                // 100 - 69 = 31
                // 15 - 31 = 0 - final translation volume
                finalValue = volume - (tempOriginalVolume - value);
                if (finalValue > 100) {
                  finalValue = 100;
                } else {
                  finalValue = Math.max(finalValue, 0)
                }

                audio.volume = finalValue / 100;
              }

              volumeSlider.val(finalValue);
              volumePercent.text(finalValue + '%');
              tempVolume = finalValue;
              tempOriginalVolume = value;
            }
          });
        }
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
          $('.original.mainPlayerDiv > video-element > div').on("mousemove", () => resetTimer());
          $('.original.mainPlayerDiv > video-element > div').on("mouseout", () => logout(0));
        } else if (window.location.pathname.includes('embed/')) {
          $('#player').on("mousemove", () => resetTimer());
          $('#player').on("mouseout", () => logout(0));
        }
      } else if (siteHostname === 'twitter') {
        const twitterPlayer = $('div[data-testid="videoPlayer"');
        twitterPlayer.on("mousemove", () => resetTimer());
        twitterPlayer.on("mouseout", () => logout(0));
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

      function changeOpacityByEvent(event, timer, opacityRatio) {
        clearTimeout(timer)
        logout(opacityRatio)
        event.stopPropagation()
      }

      $translationBlock.on("mousemove", (event) => changeOpacityByEvent(event, time, opacityRatio));
      $translationMenuContent.on("mousemove", (event) => changeOpacityByEvent(event, time, opacityRatio));

      $(document).on("touchstart", (event) => changeOpacityByEvent(event, time, opacityRatio));
      $(document).on("touchmove", (event) => changeOpacityByEvent(event, time, opacityRatio));
      $(document).on("touchend", (event) => changeOpacityByEvent(event, time, opacityRatio));

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

    const videoValidator = () => {
      if (window.location.hostname.includes('youtube.com')) {
        if (dbDontTranslateRuVideos === 1 && videoData.detectedLanguage === 'ru') {
          firstPlay = false;
          throw "VOT: Вы отключили перевод русскоязычных видео";
        }

        if (videoData.isLive) {
          throw "VOT: Не поддерживается перевод трансляций в прямом эфире";
        }

        if (videoData.isPremiere) {
          throw "VOT: Дождитесь окончания премьеры перед переводом";
        }
      }

      if (videoData.duration > 14400) {
        throw "VOT: Видео слишком длинное";
      }

      return true;
    }

    const translateExecutor = (VIDEO_ID) => {
      videoValidator();
      translateFunc(VIDEO_ID, videoData.detectedLanguage, videoData.responseLanguage);
    }

    const translateFunc = (VIDEO_ID, requestLang, responseLang) => translateVideo(`${siteTranslates[siteHostname]['url']}${VIDEO_ID}`, siteTranslates[siteHostname]['func_param'], requestLang, responseLang, function (success, urlOrError) {
      if (getVideoId(siteHostname) === VIDEO_ID) {
        if (!success) {
          transformBtn('error', urlOrError);
          if (urlOrError.includes('Перевод займёт')) {
            clearTimeout(autoRetry);
            autoRetry = setTimeout(() => {
              translateFunc(VIDEO_ID, requestLang, responseLang);
            }, 60000)
          }

          throw urlOrError;
        }

        volumeOnStart = video.volume;
        audio.src = urlOrError;

        if (typeof(dbDefaultVolume) === 'number') {
          audio.volume = dbDefaultVolume / 100;
        }

        if (siteHostname === 'twitter') {
          $('div[data-testid="app-bar-back"][role="button"]').on('click', function () {
            stopTraslate();
          })
        } else if (siteEvent !== null && siteEvent !== 'invidious') {
          $("body").on(siteEvent, function () {
            stopTraslate();
            syncOriginalVolumeSlider();
          });
        }

        if (siteHostname === 'twitch' || siteHostname === 'vimeo' || siteHostname === 'facebook' || siteHostname === 'rutube' || siteHostname === 'twitter') {
          const mutationObserver = new MutationObserver(async function(mutations) {
            mutations.forEach(async function(mutation) {
              if (mutation.type === 'attributes' && mutation.attributeName === 'src' && mutation.target === video && mutation.target.src !== '') {
                stopTraslate();
                firstPlay = true;
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

        // fix for video.paused stuck bug
        if (video.paused) {
          if (siteHostname === 'twitter') {
            video = $('div[data-testid="videoComponent"] > div > div > video')[0]
          } else if (siteHostname === 'vk') {
            video = $('.videoplayer_media > video')[0]
          }
        }

        if (video && !video.paused) {
          debug.log('video is playing lipsync 1')
          lipSync("play");
        }

        $("video").on("playing.translate ratechange.translate", function () {
          debug.log('video ratechange')
          lipSync();
        });

        $("video").on("play.translate canplaythrough.translate", function () {
          debug.log('video canplaythrough')
          lipSync();

          if (video && !video.paused) {
            debug.log('video is playing lipsync 2')
            lipSync("play");
          }
        });

        $("video").on("pause.translate waiting.translate", function () {
          debug.log('video is waiting')
          lipSync("pause");
        });

        transformBtn('success', 'Выключить');
        let defaultTranslateVolume = 100;
        if (typeof(dbDefaultVolume) === 'number') {
          defaultTranslateVolume = dbDefaultVolume;
        }

        addVideoSlider();

        if (typeof(dbAutoSetVolumeYandexStyle) === 'number' && dbAutoSetVolumeYandexStyle === 1) {
          video.volume = defaultVideoVolume;
          const $translationVideoVolumeBox = $('.translationVideoVolumeBox');
          $translationVideoVolumeBox.find('.translationVolumeSlider').val(defaultVideoVolume * 100);
          $translationVideoVolumeBox.parent().find('.volumePercent').text(defaultVideoVolume * 100 + '%');
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
          tempVolume = Number(defaultTranslateVolume);
          volumeSlider.on('input', async (event) => {
            let {value} = event.target;
            audio.volume = (value / 100);
            $volumePercent.text(`${value}%`);

            if (dbSyncVolume === 1) {
              // console.log(`VOT: Синхронизация громкости видео с громкостью перевода. Громкость перевода: ${value}. Прошлая громкость перевода: ${tempVolume}`);
              const volumeBox = $('.translationVideoVolumeBox');
              const volumeSlider = volumeBox.find('.translationVolumeSlider');
              const volumePercent = volumeBox.parent().find('.volumePercent');
              const volume = Number(volumeSlider.val());
              let finalValue;

              if (value > tempVolume) {
                // value = 100
                // tempVolume = 69
                // volume = 15
                // 100 - 69 = 31
                // 15 + 31 = 46 - final video volume
                finalValue = volume + (value - tempVolume);
                if (finalValue > 100) {
                  finalValue = 100;
                } else {
                  finalValue = Math.max(finalValue, 0)
                }

                video.volume = finalValue / 100;
              } else if (value < tempVolume) {
                // value = 69
                // tempVolume = 100
                // volume = 15
                // 100 - 69 = 31
                // 15 - 31 = 0 - final video volume
                finalValue = volume - (tempVolume - value);
                if (finalValue > 100) {
                  finalValue = 100;
                } else {
                  finalValue = Math.max(finalValue, 0)
                }

                video.volume = finalValue / 100;
              }

              volumeSlider.val(finalValue);
              volumePercent.text(finalValue + '%');
              tempOriginalVolume = finalValue;
              tempVolume = value;
            }

            await updateDB({defaultVolume: Number(value)});
            dbDefaultVolume = Number(value);
          });
        }

        if (!$translationMenuContent.find('.translationAbsoluteContainer').has('.translationDownload').length) {
          $translationMenuContent.find('.translationAbsoluteContainer').append($translationDownload);
          $translationDownload.attr('href', urlOrError);
        }
      }
    });

    btnHover();

    const lipSync = (mode = false) => {
      debug.log('lipsync video', video)
      if (!video) {
        return;
      }
      audio.currentTime = video.currentTime;
      audio.playbackRate = video.playbackRate;

      if (!mode) {
        debug.log('lipsync mode is not set')
        return;
      }

      if (mode === "play") {
        debug.log('lipsync mode is play')
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
        debug.log('lipsync mode is pause')
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
        try {
          translateExecutor(VIDEO_ID);
          firstPlay = false;
        } catch (err) {
          transformBtn('error', String(err).substring(4, err.length));
          firstPlay = false;
        }
      }
    });

    $translationBtn.click(function (event) {
      event.stopPropagation();

      if (audio.src) {
        stopTraslate();
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

        translateExecutor(VIDEO_ID);
        event.stopImmediatePropagation();
      } catch (err) {
        transformBtn('error', String(err).substring(4, err.length))
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
        const ytPageEnter = function (event) {
          var video = $('.html5-video-container');
          if (video !== void 0 && video !== null && video.length > 0) {
            translateProccessor(video, 'youtube', 'yt-translate-stop');
          } else {
            if (ytplayer === void 0 || ytplayer === null || ytplayer.config === void 0 || ytplayer.config === null) {
              return;
            }
            ytplayer.config.args.jsapicallback = function(jsApi) {
                translateProccessor($('.html5-video-container'), 'youtube', 'yt-translate-stop');
            }
          }
        };

        document.addEventListener('spfdone', ytPageEnter);
        document.addEventListener('yt-navigate-finish', ytPageEnter);

        const ytPageLeave = function () { document.body.dispatchEvent(new Event('yt-translate-stop')); };
        document.addEventListener('spfrequest', ytPageLeave);
        document.addEventListener('yt-navigate-start', ytPageLeave);

        ytPageEnter(null);
      }
    } else if (window.location.hostname.includes('twitch')) {
      if (window.location.hostname.includes('m.twitch.tv') && (window.location.pathname.includes('/videos/') || window.location.pathname.includes('/clip/'))) {
        const el = await waitForElement(twitchMobileSelector);
        if (el) {
          await sleep(200);
          await translateProccessor($(twitchMobileSelector).first(), 'twitch', null);
          // Тоже самое, что и вариант снизу, но по идеи должен быть более производительным (так же требует дабл клика)
          const mutationObserver = new MutationObserver(async function(mutations) {
            mutations.forEach(async function(mutation) {
              if (mutation.type === 'attributes' && mutation.attributeName === 'src' && mutation.target === $(twitchMobileSelector).first().find('video')[0]) {
                await sleep(1000);
                await translateProccessor($(twitchMobileSelector).first(), 'twitch', null);
              }
            });
          });

          mutationObserver.observe($(twitchMobileSelector).first()[0], {
            attributes: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
      } else if (window.location.hostname.includes('player.twitch.tv') || window.location.pathname.includes('/videos/') || window.location.pathname.includes('/clip/')) {
        const el = await waitForElement(twitchSelector);
        if (el) {
          await translateProccessor(el, 'twitch', null);
        }
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
      const el = await waitForElement(vkSelector);
      if (el) {
        await translateProccessor($(vkSelector).last(), 'vk', null);
        let videoIDVKNew;
        let videoIDVK = getVideoId('vk');
        setInterval(async () => {
          videoIDVKNew = getVideoId('vk');
          if (videoIDVK !== videoIDVKNew) {
            if (videoIDVKNew) {
              const el = await waitForElement(vkSelector);
              if (el) {
                await translateProccessor(el, 'vk', null);
              }
            }
            videoIDVK = videoIDVKNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes('vimeo')) {
      await sleep(1000);
      await translateProccessor($('.player'), 'vimeo', null);
    } else if (window.location.hostname.includes('9gag')) {
      await sleep(1000);
      await translateProccessor($('.video-post'), '9gag', null);
    } else if (window.location.hostname.includes('twitter')) {
      const el = await waitForElement(twitterSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId('twitter');
        await translateProccessor(undefined, 'twitter', 'twitter');
        setInterval(async () => {
          videoIDNew = getVideoId('twitter');
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(undefined, 'twitter', 'twitter');
            }
            videoID = videoIDNew;
          }
        }, 3000);

      }
    // } else if (window.location.hostname.includes('udemy')) {
    //   const elementSelector = '.vjs-v7';
    //   const el = await waitForElement(elementSelector);
    //   if (el) {
    //     await translateProccessor($(elementSelector), 'udemy', null);
    //   }
    // } else if (window.location.hostname.includes('facebook')) {
    //   const el = await waitForElement(facebookSelector);
    //   if (el) {
    //     let videoIDNew;
    //     let videoID = getVideoId('facebook');
    //     await translateProccessor($(facebookSelector).last(), 'facebook', null);
    //     setInterval(async () => {
    //       videoIDNew = getVideoId('facebook');
    //       if (videoID !== videoIDNew) {
    //         if (videoIDNew) {
    //           await translateProccessor($(facebookSelector).last(), 'facebook', null);
    //         }
    //         videoID = videoIDNew;
    //       }
    //     }, 3000);
    //   }
    } else if (window.location.hostname.includes('rutube')) {
      let elementSelector;
      if (window.location.pathname.includes('/play/embed')) {
        elementSelector = '#app > div > div';
      } else {
        elementSelector = '.video-player > div > div > div:nth-child(2)';
      }

      const el = await waitForElement(elementSelector);
      if (el) {
        await translateProccessor($(el), 'rutube', null);
      }
    }
  }

  await initWebsite();
}

main().catch((e) => {
  console.log(e);
});
