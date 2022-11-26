# Закадровый перевод видео

Закадровый перевод видео не только в YandexBrowser.
Очень признателен, **[Yandex.Translate](https://translate.yandex.ru/)** & **[sodapng](https://github.com/sodapng)** & **[mynovelhost](https://github.com/mynovelhost)**. Спасиб <3

# Установка расширения:
1. Установите расширение **[Tampermonkey](https://www.tampermonkey.net/)** (Для Safari: **[UserScripts](https://apps.apple.com/app/userscripts/id1463298887 )**)
2. **[«Установите Скрипт»](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot.user.js)**

## Версия для VM, FM, GM, AdGuard: **[Ссылка](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js)**
## Версия для терминала: **[Ссылка](https://github.com/ilyhalight/voice-over-translation/vot-cli))**
## Подробнее о создание воркера для VM, FM, GM, AdGuard: **[Ссылка](https://github.com/mynovelhost/voice-over-translation/)**

# Список поддерживаемых сайтов:
- **[YouTube](https://www.youtube.com)** (Полная поддержка **www.youtube.com/watch**, **www.youtube.com/embed**, **m.youtube.com**. Включая **[YouTube NoCookie](https://www.youtube-nocookie.com/)**)
- **[Invidious (vern.cc)](https://inv.vern.cc)**, **[Invidious (yewtu.be)](https://yewtu.be)** и некоторые другие (Альтернативный фронтенд для YouTube, без привязки к Google Services. Для работы в хромоподобных браузерах необходимо дополнительное **[расширение](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden/related)**)
- **[Twitch](https://www.twitch.tv)** (Поддерживается **www.twitch.tv/videos**, **m.twitch.tv/videos**, **player.twitch.tv**)
- **[XVideos](https://xvideos.com/)**
- **[PornHub](https://rt.pornhub.com/)**
- **[VK](https://vk.com)** (Поддерживаются **vk.com|ru/video**, **vk.com|ru/video-xxxxxxxxx_xxxxxxxxx** и **vk.com|ru/im?z=video-xxxxxxxxx_xxxxxxxxx** (+ другие страницы, на которых видео открывается через z параметр ссылки). Рекомендую использовать только совместно с автопереводом, ибо без него кнопка перевода требует 2-ого нажатия, и звук перевода пропадает при переходе на другое видео. Не знаю как это исправить :с)
##### TODO: Vimeo, gag (возможно coursera, twitter, facebook, udemy)

## Примечание:
1. Рекомендую разрешить автовоспроизведение "аудио и видео", чтобы избежать ошибок при работе расширения
2. Расширение не может переводить видео длиной более 4 часов (ограничение API переводчика)

## Расширение протестировано в следующих браузерах:
| Статус | Браузер | Версия браузера | Платформа | Расширение
|---|---|---|---|---
| ⠀✅ | Firefox Developer Edition | v106.0b4, 64 bit | Windows | Tampermonkey
| ⠀✅ | Firefox | v105.0.1 | Linux | Tampermonkey
| ⠀✅ | LibreWolf | v100.0.2-1 | Windows | Tampermonkey
| ⠀✅ | Brave | v106.0.5249.91 | Windows | Tampermonkey
| ⠀✅ | MS Edge | v106.0.1370.34 | Windows, Linux | Tampermonkey
| ⠀✅ | Cent Browser | v4.3.9.248, 32 bit | Windows | Tampermonkey
| ⠀✅ | Cent Browser Beta | v5.0.1002.182, 64 bit | Windows | Tampermonkey
| ⠀✅ | Google Chrome | v106.0.5249.91 | Windows, MacOS, Linux | Tampermonkey, Violetmonkey
| ⠀✅ | Opera GX | LVL4 (core: 91.0.4516.36) | Windows | Tampermonkey
| ⠀✅ | Opera | v92.0.4561.43 | Windows | Tampermonkey
| ⠀❔ | Safari | v15.6.1 | MacOS | Userscripts

## Протестировано в следующих расширениях для юзерскриптов:
| Статус | Браузер | Расширение
|---|---|---
| ⠀✅ | Любой | Tampermonkey
| ⠀✅ | Safari | Userscripts
| ⠀[Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Любой | Violetmonkey 
| ⠀[Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Любой | [AdGuard Usercripts](https://kb.adguard.com/en/general/userscripts#supported-apps)
|  [Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Firefox | Firemonkey
|  [Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Любой | Greasemonkey

![example btn](https://github.com/ilyhalight/voice-over-translation/blob/master/img/example.png "btn")
