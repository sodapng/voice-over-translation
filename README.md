# Закадровый перевод видео

Закадровый перевод видео не только в YandexBrowser.
Очень признателен, **[Yandex.Translate](https://translate.yandex.ru/)** & **[sodapng](https://github.com/sodapng)** & **[mynovelhost](https://github.com/mynovelhost)**. Спасиб <3

# Установка расширения:
1. Установите расширение **[Tampermonkey](https://www.tampermonkey.net/)** (Для Safari: **[UserScripts](https://apps.apple.com/app/userscripts/id1463298887 )**)
2. **[«Установите Скрипт»](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot.user.js)**

## Версия для VM, FM, GM, AdGuard, UserScripts: **[Ссылка](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js)**
## Версия для терминала: **[Ссылка](https://github.com/ilyhalight/voice-over-translation/tree/master/vot-cli)**
## Подробнее о создание воркера для VM, FM, GM, AdGuard, UserScripts: **[Ссылка](https://github.com/mynovelhost/voice-over-translation/)**

# Список поддерживаемых сайтов:
- **[YouTube](https://www.youtube.com)** (Полная поддержка **www.youtube.com/watch**, **www.youtube.com/embed**, **m.youtube.com**. Включая **[YouTube NoCookie](https://www.youtube-nocookie.com/)**)
- **[Invidious (vern.cc)](https://inv.vern.cc)**, **[Invidious (yewtu.be)](https://yewtu.be)** и некоторые другие (Альтернативный фронтенд для YouTube, без привязки к Google Services. Для работы в хромоподобных браузерах необходимо дополнительное **[расширение](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden/related)**)
- **[Twitch](https://www.twitch.tv)** (Поддерживается **www.twitch.tv/videos**, **m.twitch.tv/videos**, **player.twitch.tv**)
- **[XVideos](https://xvideos.com/)**
- **[PornHub](https://rt.pornhub.com/)**
- **[VK](https://vk.com)** (Поддерживаются **vk.com|ru/video**, **vk.com|ru/video-xxxxxxxxx_xxxxxxxxx** и **vk.com|ru/im?z=video-xxxxxxxxx_xxxxxxxxx** (+ другие страницы, на которых видео открывается через z параметр ссылки). Рекомендую использовать только совместно с автопереводом, ибо без него кнопка перевода требует 2-ого нажатия, и звук перевода пропадает при переходе на другое видео. Не знаю как это исправить :с)
- **[Vimeo](https://vimeo.com/)**
- **[9GAG](9gag.com/gag/)** (Работает только в открытых видео. В ленте не работает.)
- **[Twitter](twitter.com/)** (Работает только в открытых видео. В ленте не работает.)
##### TODO: coursera, facebook, udemy

## Как собрать расширение?
1. Установите NodeJS 16+
2. Установите зависимости:
```bash
npm i
```
1. Сборка расширения:

   3.1. Обычная версии:
   ```bash
   npm run build
   ```

   3.2. Cloudflare версии:

   Данное действие необходимо выполнять, если версия "webpack-userscript" меньше или равна 3.1.0 (актуально на 09.04.2023):
      1. Перейти по пути `node_modules/webpack-userscript/dist/`
      2. В файле `plugins.js` закоментировать строку содержащую "new features_1.ValidateHeaders(this.options),"
      3. Вернуться в корень репозитория
      4. Запустить сборку с помощью команды:
      ```bash
      npm run build:cloudflare
      ```


## Примечание:
1. Рекомендую разрешить автовоспроизведение "аудио и видео", чтобы избежать ошибок при работе расширения
2. Расширение не может переводить видео длиной более 4 часов (ограничение API переводчика)
3. Если не работает кнопка перевода, то попробуйте следующее:
   1. Зайти в инструменты разработчика (F12 или Ctrl+Shift+I)
   2. Перейти в Application (Приложение) P.S. В некоторых браузерах этого пункта нету. В них необходимо сразу перейти в Storage (Хранилище).
   3. Выбрать Storage (Хранилище)
   4. Выбрать IndexedDB
   5. Нажать ЛКМ по строке с надписью VOT (в Firefox нужно нажать ПКМ)
   6. Нажать на Delete Database (Удалить базу данных)
   7. Перезагрузить страницу

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
| ⠀✅ | Vivaldi | 5.7.2921.63 | Windows, Linux | Tampermonkey
| ⠀❔ | Safari | v15.6.1 | MacOS | Userscripts

## Протестировано в следующих расширениях для юзерскриптов:
| Статус | Браузер | Расширение
|---|---|---
| ⠀✅ | Любой | Tampermonkey
| ⠀[Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Safari | Userscripts
| ⠀[Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Любой | Violetmonkey 
| ⠀[Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Любой | [AdGuard Usercripts](https://kb.adguard.com/en/general/userscripts#supported-apps)
| ⠀[Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Firefox | Firemonkey
| ⠀[Загрузить](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/vot-cloudflare.user.js) | Любой | Greasemonkey

![example btn](https://github.com/ilyhalight/voice-over-translation/blob/master/img/example.png "btn")
