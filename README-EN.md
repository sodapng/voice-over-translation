# Voice-over-translation

[![ru](https://img.shields.io/badge/%D1%8F%D0%B7%D1%8B%D0%BA-%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9%20%F0%9F%87%B7%F0%9F%87%BA-white)](README.md)
[![en](https://img.shields.io/badge/lang-English%20%F0%9F%87%AC%F0%9F%87%A7-white)](README-EN.md)

The voice-over translation of the video is now available not only in YandexBrowser. Very grateful, **[Yandex.Translate](https://translate.yandex.ru/)** & **[sodapng](https://github.com/sodapng)** & **[mynovelhost](https://github.com/mynovelhost)** & **[SashaXser](https://github.com/SashaXser)**. Thanks <3

> [!NOTE]
> On 04.11.2023, most of the languages available for selection as voice acting were disabled on the Yandex side. I don't know if they will be returned later or not. Of those that can be translated for sure, there are: `Russian`, `English`, `Kazakh`.

## Installing the extension:
1. Install the extension **[Tampermonkey](https://www.tampermonkey.net/)** (An alternative for Safari: **[UserScripts](https://apps.apple.com/app/userscripts/id1463298887 )**)
2. **[«Install the Script»](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js)** (**[Cloudflare version](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js)**)

### Useful links:
1. Version for VioletMonkey, FireMonkey, GreaseMonkey, AdGuard, OrangeMonkey, UserScripts and some browsers (cloudflare-version): **[Link](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js)**
2. Terminal version (vot-cli): **[Link](https://github.com/FOSWLY/vot-cli)**
3. Wiki: **[Link](https://github.com/ilyhalight/voice-over-translation/wiki)**

### Our domains:
These domains can be set in the extension settings (only those domains that can be changed without rebuilding are listed here):

#### Proxy-server
- [vot.toil.cc](https://vot.toil.cc/health) (Load balancer between proxy servers)
- [vot.deno.dev](https://github.com/FOSWLY/vot-worker)
- [vot-worker.onrender.com](https://github.com/FOSWLY/vot-worker)
- [vot-new.toil-dump.workers.dev](https://github.com/FOSWLY/vot-worker) (⚠️ doesn't work in Russia)

#### M3U8 Proxy-server
- [m3u8-proxy.toil.cc](https://github.com/FOSWLY/m3u8-proxy-worker)
- [m3u8-proxy.toiloff.workers.dev](https://github.com/FOSWLY/m3u8-proxy-worker) (⚠️ doesn't work in Russia. It's not recommended for use due to low limits.)

## List of supported sites:
You can see all the restrictions related to site support in [wiki](https://github.com/ilyhalight/voice-over-translation/wiki/%5BEN%5D-Supported-sites).
- **[YouTube](https://www.youtube.com)**
- **[Twitch](https://www.twitch.tv)**
- **[VK](https://vk.com)**
- **[OK](https://ok.ru/)**
- **[[⚠️] Twitter](https://twitter.com/)**
- **[9GAG](https://9gag.com/gag/)**
- **[Rutube](https://rutube.ru/)**
- **[Bilibili](https://bilibili.com/)**
- **[Video Mail.ru](https://my.mail.ru/video)**
- **[Vimeo](https://vimeo.com/)**
- **[[⚠️] XVideos](https://xvideos.com/)**
- **[PornHub](https://rt.pornhub.com/)**
- **[Bitchute](https://www.bitchute.com/)**
- **[Coursera](https://www.coursera.org/)**
- **[[⚠️] Udemy](https://www.udemy.com/)**
- **[[⚠️] Facebook*](https://facebook.com/)**
- **[TikTok](https://tiktok.com/)**
- **[Rumble](https://rumble.com/)**
- **[EPorner](https://www.eporner.com/)**
- **[Peertube](https://tube.shanti.cafe/)**
- **[Dailymotion](https://www.dailymotion.com/)**
- **[Trovo](https://trovo.live/)**
- **[[⚠️] Yandex Disk](https://disk.yandex.ru/)**
- **[Google Drive](https://drive.google.com/)**
- **[Banned Video](https://banned.video/)**
- **[Weverse](https://weverse.io/)**
- **[Egghead](https://egghead.io)**
- **[Youku](https://youku.com)**
- **[Newgrounds](https://newgrounds.com)**
- **[ProxiTok](https://proxitok.pabloferreiro.es/)**
- **[[⚠️] Invidious](https://yewtu.be)**
- **[[⚠️] Piped](https://piped.video)**

⚠️ - Requires additional actions, more in **[Wiki](https://github.com/ilyhalight/voice-over-translation/wiki/%5BEN%5D-Supported-sites)**

❌ - Doesn't work

❔ - Yandex support may be disabled

## List of functionality:
1. Translation from one of the available languages into Russian. The language is detected automatically, if the language is not in the list or it was not possible to determine it, then a translation from English is used.
2. Translation from Russian into English
3. Automatic video translation when opening
4. Slider to change the video volume
5. Automatically set the video volume (as in Yandex browser)
6. [YouTube Only] Sync translation volume with video volume
7. [YouTube Only] Restrict the translation of videos from your native language

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
4. Installing the pre-commit hook:
   ```bash
   npm run prepare
   ```

## How to deploy your own VOT Worker?
[Click to go](https://github.com/FOSWLY/vot-worker)

## Note:
1. I recommend allowing autoplay of "audio and video" to avoid errors when working with the extension
2. The extension cannot translate videos longer than 4 hours (translator API limitation)

## Customization of appearance:

The extension supports customization of the appearance using Stylus, Stylish and other similar extensions

Example of changing styles:
```css

/* ==UserStyle==
@name         VOT-styles
@version      16.09.2023
@namespace    vot-styles
@description  LLL
@author       Toil
@license      No License
==/UserStyle== */

:root {
 --vot-font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;

 --vot-primary-rgb: 139, 180, 245;
 --vot-onprimary-rgb: 32, 33, 36;
 --vot-surface-rgb: 32, 33, 36;
 --vot-onsurface-rgb: 227, 227, 227;

 --vot-subtitles-background: rgba(var(--vot-surface-rgb, 46, 47, 52), 0.8);
 --vot-subtitles-color: rgb(var(--vot-onsurface-rgb, 227, 227, 227));
 --vot-subtitles-passed-color: rgb(var(--vot-primary-rgb, 33, 150, 243));
}
```

## The extension has been tested in the following browsers:
| Status | Browser | Browser Version | Platform | Extension
|---|---|---|---|---
| ⠀✅ | Firefox Developer Edition | v106 — v117, 64 bit | Windows | Tampermonkey
| ⠀✅ | Firefox | v116.0.2 | Windows, Linux, Android | Tampermonkey
| ⠀✅ | Firefox Nightly | v118.0a1 | Windows, Android | Tampermonkey
| ⠀✅ | LibreWolf | v100.0.2-1 | Windows | Tampermonkey
| ⠀✅ | Brave | v106.0.5249.91 | Windows | Tampermonkey
| ⠀✅ | MS Edge | v106.0.1370.34 | Windows, Linux | Tampermonkey
| ⠀✅ | Cent Browser | v4.3.9.248, 32 bit | Windows | Tampermonkey
| ⠀✅ | Cent Browser Beta | v5.0.1002.182, 64 bit | Windows | Tampermonkey
| ⠀✅ | Google Chrome | v106 — 116 | Windows, MacOS, Linux | Tampermonkey, Violetmonkey, OrangeMonkey
| ⠀✅ | Opera GX | LVL4 (core: 91.0.4516.36) | Windows | Tampermonkey
| ⠀✅ | Opera | v92.0.4561.43 | Windows | Tampermonkey
| ⠀✅ | Vivaldi | 5.7.2921.63 | Windows, Linux | Tampermonkey
| ⠀❔ | Safari | v15.6.1 | MacOS, iOS | Userscripts
| ⠀✅ | Kiwi Browser | v116.0.5845.61 | Android | Tampermonkey

## Tested in the following extensions for user scripts:
| Status | Browser | Extension
|---|---|---
| ⠀✅ | Any | Tampermonkey
| ⠀[⚠️ Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Safari | Userscripts
| ⠀[⚠️ Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Any | Violetmonkey
| ⠀[⚠️ Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Any | [AdGuard Usercripts](https://kb.adguard.com/en/general/userscripts#supported-apps)
| ⠀[⚠️ Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Firefox | Firemonkey
| ⠀[⚠️ Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Any | Greasemonkey
| ⠀[⚠️ Download](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js) | Any | OrangeMonkey

⚠️ - They are not priority extensions. These extensions, due to the "cloudflare" version of the user script, do not have cross-site synchronization of settings, and are also (practically) not tested before the release of a new version of the user script.

![example btn](https://github.com/ilyhalight/voice-over-translation/blob/master/img/example_en.png "btn")

*: Banned on the territory of the Russian Federation
