# Voice-over-translation

The voice-over translation of the video is now available not only in YandexBrowser. Very grateful, **[Yandex.Translate](https://translate.yandex.ru/)** & **[sodapng](https://github.com/sodapng)** & **[mynovelhost](https://github.com/mynovelhost)** & **[SashaXser](https://github.com/SashaXser)**. Thanks <3

## Installing the extension:
1. Install the extension **[Tampermonkey](https://www.tampermonkey.net/)** (An alternative for Safari: **[UserScripts](https://apps.apple.com/app/userscripts/id1463298887 )**)
2. **[«Install the Script»](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js)**

### Useful links:
1. Version for VioletMonkey, FireMonkey, GreaseMonkey, AdGuard, UserScripts and some browsers: **[Link](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js)**
2. Terminal version: **[Link](https://github.com/ilyhalight/voice-over-translation/tree/master/vot-cli)**
3. Learn more about creating a worker for VioletMonkey, FireMonkey, GreaseMonkey, AdGuard, UserScripts: **[Link](https://github.com/mynovelhost/voice-over-translation/)**
4. Wiki: **[Link](https://github.com/ilyhalight/voice-over-translation/wiki)**

## List of supported sites:
- **[YouTube](https://www.youtube.com)** (Full support **www.youtube.com/watch**, **www.youtube.com/embed**, **m.youtube.com**. Including **[YouTube NoCookie](https://www.youtube-nocookie.com/)**)
- **[Invidious (vern.cc)](https://inv.vern.cc)**, **[Invidious (yewtu.be)](https://yewtu.be)** and some others (An alternative frontend for YouTube, without linking to Google Services. To work in chrome-like browsers, additional **[extension](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden/related)**)
- **[Piped (piped.video)](https://piped.video)** and some others (An alternative frontend for YouTube, without linking to Google Services. To work in chrome-like browsers, additional **[extension](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden/related)**)
- **[Twitch](https://www.twitch.tv)** (Supported **www.twitch.tv/videos**, **m.twitch.tv/videos**, **player.twitch.tv**, **clips.twitch.tv**, **www.twitch.tv/NICKNAME/clip/**)
- **[XVideos](https://xvideos.com/)** (To work in chrome-like browsers, additional **[extension](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden/related)**)
- **[PornHub](https://rt.pornhub.com/)**
- **[VK](https://vk.com)** (Supported **vk.com|ru/video**, **vk.com|ru/video_ext.php**, **vk.com|ru/video-xxxxxxxxx_xxxxxxxxx** and **vk.com|ru/im?z=video-xxxxxxxxx_xxxxxxxxx** (+ other pages where the video opens via the z link parameter). I recommend using it only in conjunction with auto-translation, because without it, the translation button requires the 2nd press, and the translation sound disappears when switching to another video. I don't know how to fix it :c)
- **[Vimeo](https://vimeo.com/)**
- **[9GAG](https://9gag.com/gag/)** (Works only in open videos. It doesn't work in the feed.)
- **[Twitter](https://twitter.com/)** (Works only in open videos. It doesn't work in the feed.)
- **[Facebook*](https://facebook.com/)** (❌ Doesn't work)
- **[Rutube](https://rutube.ru/)** (Full support **rutube.ru/video/** и **rutube.ru/play/embed/**)
- **[Bilibili](https://bilibili.com/)** (Supported **bilibili.com/video/** и **bilibili.com/blackboard/webplayer/embed-old.html**)
- **[Видео Mail.ru](https://my.mail.ru/video)** (Works only in open videos. It doesn't work in the feed.)

## List of functionality:
1. Translation from one of the available languages into Russian. The language is detected automatically, if the language is not in the list or it was not possible to determine it, then a translation from English is used.
2. Translation from Russian into English
3. Automatic video translation when opening
4. Slider to change the video volume
5. Automatically set the video volume (as in Yandex browser)
6. [YouTube Only] Sync translation volume with video volume
7. [YouTube Only] Restrict translation of Russian-language videos

## How to build an extension?
1. Install NodeJS 18+
2. Install dependencies:
```bash
npm i
```
3. Building an extension:

   3.0. All versions at once:
   ```bash
   npm run build
   ```

   3.1. All minified versions at once:
   ```bash
   npm run build:min
   ```

   3.2. Only the regular version:
   ```bash
   npm run build:default
   ```

   3.3. Cloudflare version only:
   ```bash
   npm run build:cloudflare
   ```

   3.2. Only the usual min. versions:
   ```bash
   npm run build:default-min
   ```

   3.3. Only min. Cloudflare versions:
   ```bash
   npm run build:cloudflare-min
   ```

## Note:
1. I recommend allowing autoplay of "audio and video" to avoid errors when working with the extension
2. The extension cannot translate videos longer than 4 hours (translator API limitation)

## The extension has been tested in the following browsers:
| Status | Browser | Browser Version | Platform | Extension
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

## Tested in the following extensions for user scripts:
| Status | Browser | Extension
|---|---|---
| ⠀✅ | Any | Tampermonkey
| ⠀[Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Safari | Userscripts
| ⠀[Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Any | Violetmonkey
| ⠀[Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Any | [AdGuard Usercripts](https://kb.adguard.com/en/general/userscripts#supported-apps)
| ⠀[Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Firefox | Firemonkey
| ⠀[Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Any | Greasemonkey

![example btn](https://github.com/ilyhalight/voice-over-translation/blob/master/img/example_en.jpg "btn")

*: Banned on the territory of the Russian Federation
