// ==UserScript==
// @name           [VOT] - Voice Over Translation
// @name:de        [VOT] - Voice-Over-Video-Übersetzung
// @name:es        [VOT] - Traducción de vídeo en off
// @name:fr        [VOT] - Traduction vidéo voix-off
// @name:it        [VOT] - Traduzione Video fuori campo
// @name:ru        [VOT] - Закадровый перевод видео
// @name:zh        [VOT] - 画外音视频翻译
// @description    A small extension that adds a Yandex Browser video translation to other browsers
// @description:de Eine kleine Erweiterung, die eine Voice-over-Übersetzung von Videos aus dem Yandex-Browser zu anderen Browsern hinzufügt
// @description:es Una pequeña extensión que agrega una traducción de voz en off de un video de Yandex Browser a otros navegadores
// @description:fr Une petite extension qui ajoute la traduction vocale de la vidéo du Navigateur Yandex à d'autres navigateurs
// @description:it Una piccola estensione che aggiunge la traduzione vocale del video dal browser Yandex ad altri browser
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @description:zh 一个小扩展，它增加了视频从Yandex浏览器到其他浏览器的画外音翻译
// @grant          GM_addStyle
// @grant          GM_deleteValue
// @grant          GM_listValues
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_xmlhttpRequest
// @grant          GM_info
// @require        https://cdn.jsdelivr.net/npm/protobufjs/dist/light/protobuf.min.js
// @require        https://cdn.jsdelivr.net/npm/hls.js/dist/hls.light.min.js
// @match          *://*.youtube.com/*
// @match          *://*.youtube-nocookie.com/*
// @match          *://*.youtubekids.com/*
// @match          *://*.twitch.tv/*
// @match          *://*.xvideos.com/*
// @match          *://*.pornhub.com/*
// @match          *://*.vk.com/*
// @match          *://*.vk.ru/*
// @match          *://invidious.snopyta.org/*
// @match          *://invidious.kavin.rocks/*
// @match          *://vid.puffyan.us/*
// @match          *://invidious.namazso.eu/*
// @match          *://inv.riverside.rocks/*
// @match          *://yt.artemislena.eu/*
// @match          *://invidious.flokinet.to/*
// @match          *://invidious.esmailelbob.xyz/*
// @match          *://invidious.nerdvpn.de/*
// @match          *://invidious.slipfox.xyz/*
// @match          *://invidio.xamh.de/*
// @match          *://invidious.dhusch.de/*
// @match          *://*.piped.video/*
// @match          *://piped.tokhmi.xyz/*
// @match          *://piped.moomoo.me/*
// @match          *://piped.syncpundit.io/*
// @match          *://piped.mha.fi/*
// @match          *://watch.whatever.social/*
// @match          *://piped.garudalinux.org/*
// @match          *://efy.piped.pages.dev/*
// @match          *://watch.leptons.xyz/*
// @match          *://piped.lunar.icu/*
// @match          *://yt.dc09.ru/*
// @match          *://piped.mint.lgbt/*
// @match          *://*.il.ax/*
// @match          *://piped.privacy.com.de/*
// @match          *://piped.esmailelbob.xyz/*
// @match          *://piped.projectsegfau.lt/*
// @match          *://piped.in.projectsegfau.lt/*
// @match          *://piped.us.projectsegfau.lt/*
// @match          *://piped.privacydev.net/*
// @match          *://piped.palveluntarjoaja.eu/*
// @match          *://piped.smnz.de/*
// @match          *://piped.adminforge.de/*
// @match          *://piped.qdi.fi/*
// @match          *://piped.hostux.net/*
// @match          *://piped.chauvet.pro/*
// @match          *://piped.jotoma.de/*
// @match          *://piped.pfcd.me/*
// @match          *://piped.frontendfriendly.xyz/*
// @match          *://*.yewtu.be/*
// @match          *://inv.vern.cc/*
// @match          *://*.vimeo.com/*
// @match          *://*.9gag.com/*
// @match          *://*.twitter.com/*
// @match          *://*.facebook.com/*
// @match          *://*.rutube.ru/*
// @match          *://*.bilibili.com/*
// @match          *://my.mail.ru/*
// @match          *://*.bitchute.com/*
// @match          *://*.coursera.org/learn/*
// @match          *://*.udemy.com/course/*
// @match          *://*.tiktok.com/*
// @match          *://proxitok.pabloferreiro.es/*
// @match          *://proxitok.pussthecat.org/*
// @match          *://tok.habedieeh.re/*
// @match          *://proxitok.esmailelbob.xyz/*
// @match          *://proxitok.privacydev.net/*
// @match          *://tok.artemislena.eu/*
// @match          *://tok.adminforge.de/*
// @match          *://tik.hostux.net/*
// @match          *://tt.vern.cc/*
// @match          *://cringe.whatever.social/*
// @match          *://proxitok.lunar.icu/*
// @match          *://proxitok.privacy.com.de/*
// @match          *://rumble.com/*
// @match          *://*.eporner.com/*
// @match          *://peertube.1312.media/*
// @match          *://tube.shanti.cafe/*
// @match          *://bee-tube.fr/*
// @match          *://video.sadmin.io/*
// @match          *://dalek.zone/*
// @match          *://review.peertube.biz/*
// @match          *://peervideo.club/*
// @match          *://tube.la-dina.net/*
// @match          *://peertube.tmp.rcp.tf/*
// @match          *://geo.dailymotion.com/*
// @match          *://*.ok.ru/*
// @match          *://trovo.live/*
// @match          *://disk.yandex.ru/i/*
// @match          *://coursehunter.net/*
// @match          *://youtube.googleapis.com/embed/*
// @match          *://*.banned.video/*
// @match          *://*.weverse.io/*
// @match          *://*.newgrounds.com/*
// @match          *://*.egghead.io/*
// @match          *://*.youku.com/*
// @connect        api.browser.yandex.ru
// @namespace      vot
// @version        1.5.1.1
// @icon           https://translate.yandex.ru/icons/favicon.ico
// @author         sodapng, mynovelhost, Toil, SashaXser, MrSoczekXD
// @homepageURL    https://github.com/ilyhalight/voice-over-translation/issues
// @updateURL      https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// @downloadURL    https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// @supportURL     https://github.com/ilyhalight/voice-over-translation/issues
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bowser/es5.js":
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.vot-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );--vot-helper-ontheme: var( --vot-ontheme-rgb, var(--vot-onprimary-rgb, 255, 255, 255) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-ontheme));background-color:rgb(var(--vot-helper-theme));box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer;transition:box-shadow .2s}.vot-button[hidden]{display:none !important}.vot-button::-moz-focus-inner{border:none}.vot-button::before,.vot-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-button::before{background-color:rgb(var(--vot-helper-ontheme));transition:opacity .2s}.vot-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-button:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.vot-button:hover::before{opacity:.08}.vot-button:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.vot-button:active::after{opacity:.32;background-size:100% 100%;transition:background-size 0s}.vot-button:disabled{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.12);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);box-shadow:none;cursor:initial}.vot-button:disabled::before,.vot-button:disabled::after{opacity:0}.vot-outlined-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:solid 1px;border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.24);border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-theme));background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:34px;outline:none;cursor:pointer}.vot-outlined-button[hidden]{display:none !important}.vot-outlined-button::-moz-focus-inner{border:none}.vot-outlined-button::before,.vot-outlined-button::after{content:"";position:absolute;border-radius:3px;top:0;right:0;bottom:0;left:0;opacity:0}.vot-outlined-button::before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-outlined-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-outlined-button:hover::before{opacity:.04}.vot-outlined-button:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-outlined-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-outlined-button:disabled::before,.vot-outlined-button:disabled::after{opacity:0}.vot-text-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;border-radius:4px;padding:0 8px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-theme));background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer}.vot-text-button[hidden]{display:none !important}.vot-text-button::-moz-focus-inner{border:none}.vot-text-button::before,.vot-text-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-text-button::before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-text-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-text-button:hover::before{opacity:.04}.vot-text-button:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-text-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-text-button:disabled::before,.vot-text-button:disabled::after{opacity:0}.vot-icon-button{--vot-helper-onsurface: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87);position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;border-radius:50%;padding:0;width:36px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;fill:var(--vot-helper-onsurface);color:var(--vot-helper-onsurface);background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer}.vot-icon-button[hidden]{display:none !important}.vot-icon-button::-moz-focus-inner{border:none}.vot-icon-button::before,.vot-icon-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-icon-button::before{background-color:var(--vot-helper-onsurface);transition:opacity .2s}.vot-icon-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity .3s,background-size .4s}.vot-icon-button:hover::before{opacity:.04}.vot-icon-button:active::after{opacity:.32;background-size:100% 100%;transition:background-size 0s,opacity 0s}.vot-icon-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);fill:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-icon-button:disabled::before,.vot-icon-button:disabled::after{opacity:0}.vot-textfield{--vot-helper-theme: rgb( var(--vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243)) ) !important;--vot-helper-safari1: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.38 ) !important;--vot-helper-safari2: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;--vot-helper-safari3: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.87 ) !important;position:relative !important;display:inline-block;padding-top:6px !important;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system) !important;font-size:16px !important;line-height:1.5 !important;text-align:start !important}.vot-textfield[hidden]{display:none !important}.vot-textfield>input,.vot-textfield>textarea{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin:0 !important;border-style:solid !important;border-width:1px !important;border-color:rgba(0,0,0,0) var(--vot-helper-safari2) var(--vot-helper-safari2) !important;border-radius:4px !important;padding:15px 13px 15px !important;width:100% !important;height:inherit !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important;-webkit-text-fill-color:currentColor !important;background-color:rgba(0,0,0,0) !important;box-shadow:inset 1px 0 rgba(0,0,0,0),inset -1px 0 rgba(0,0,0,0),inset 0 -1px rgba(0,0,0,0) !important;font-family:inherit !important;font-size:inherit !important;line-height:inherit !important;caret-color:var(--vot-helper-theme) !important;transition:border .2s,box-shadow .2s !important}.vot-textfield>input:not(:focus):placeholder-shown,.vot-textfield>textarea:not(:focus):placeholder-shown{border-top-color:var(--vot-helper-safari2) !important}.vot-textfield>input+span,.vot-textfield>textarea+span{position:absolute !important;top:0 !important;left:0 !important;display:flex !important;width:100% !important;max-height:100% !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;font-size:75% !important;line-height:15px !important;cursor:text !important;transition:color .2s,font-size .2s,line-height .2s !important;pointer-events:none !important}.vot-textfield>input:not(:focus):placeholder-shown+span,.vot-textfield>textarea:not(:focus):placeholder-shown+span{font-size:inherit !important;line-height:68px !important}.vot-textfield>input+span::before,.vot-textfield>input+span::after,.vot-textfield>textarea+span::before,.vot-textfield>textarea+span::after{content:"" !important;display:block !important;-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin-top:6px !important;border-top:solid 1px var(--vot-helper-safari2) !important;min-width:10px !important;height:8px !important;pointer-events:none !important;box-shadow:inset 0 1px rgba(0,0,0,0) !important;transition:border .2s,box-shadow .2s !important}.vot-textfield>input+span::before,.vot-textfield>textarea+span::before{margin-right:4px !important;border-left:solid 1px rgba(0,0,0,0) !important;border-radius:4px 0 !important}.vot-textfield>input+span::after,.vot-textfield>textarea+span::after{flex-grow:1 !important;margin-left:4px !important;border-right:solid 1px rgba(0,0,0,0) !important;border-radius:0 4px !important}.vot-textfield>input:not(:focus):placeholder-shown+span::before,.vot-textfield>input:not(:focus):placeholder-shown+span::after,.vot-textfield>textarea:not(:focus):placeholder-shown+span::before,.vot-textfield>textarea:not(:focus):placeholder-shown+span::after{border-top-color:rgba(0,0,0,0) !important}.vot-textfield:hover>input,.vot-textfield:hover>textarea{border-color:rgba(0,0,0,0) var(--vot-helper-safari3) var(--vot-helper-safari3) !important}.vot-textfield:hover>input+span::before,.vot-textfield:hover>input+span::after,.vot-textfield:hover>textarea+span::before,.vot-textfield:hover>textarea+span::after{border-top-color:var(--vot-helper-safari3) !important}.vot-textfield:hover>input:not(:focus):placeholder-shown,.vot-textfield:hover>textarea:not(:focus):placeholder-shown{border-color:var(--vot-helper-safari3) !important}.vot-textfield>input:focus,.vot-textfield>textarea:focus{border-color:rgba(0,0,0,0) var(--vot-helper-theme) var(--vot-helper-theme) !important;box-shadow:inset 1px 0 var(--vot-helper-theme),inset -1px 0 var(--vot-helper-theme),inset 0 -1px var(--vot-helper-theme) !important;outline:none !important}.vot-textfield>input:focus+span,.vot-textfield>textarea:focus+span{color:var(--vot-helper-theme) !important}.vot-textfield>input:focus+span::before,.vot-textfield>input:focus+span::after,.vot-textfield>textarea:focus+span::before,.vot-textfield>textarea:focus+span::after{border-top-color:var(--vot-helper-theme) !important;box-shadow:inset 0 1px var(--vot-helper-theme) !important}.vot-textfield>input:disabled,.vot-textfield>input:disabled+span,.vot-textfield>textarea:disabled,.vot-textfield>textarea:disabled+span{border-color:rgba(0,0,0,0) var(--vot-helper-safari1) var(--vot-helper-safari1) !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important;pointer-events:none !important}.vot-textfield>input:disabled+span::before,.vot-textfield>input:disabled+span::after,.vot-textfield>textarea:disabled+span::before,.vot-textfield>textarea:disabled+span::after{border-top-color:var(--vot-helper-safari1) !important}.vot-textfield>input:disabled:placeholder-shown,.vot-textfield>input:disabled:placeholder-shown+span,.vot-textfield>textarea:disabled:placeholder-shown,.vot-textfield>textarea:disabled:placeholder-shown+span{border-top-color:var(--vot-helper-safari1) !important}.vot-textfield>input:disabled:placeholder-shown+span::before,.vot-textfield>input:disabled:placeholder-shown+span::after,.vot-textfield>textarea:disabled:placeholder-shown+span::before,.vot-textfield>textarea:disabled:placeholder-shown+span::after{border-top-color:rgba(0,0,0,0) !important}@media not all and (min-resolution: 0.001dpcm){@supports(-webkit-appearance: none){.vot-textfield>input,.vot-textfield>input+span,.vot-textfield>textarea,.vot-textfield>textarea+span,.vot-textfield>input+span::before,.vot-textfield>input+span::after,.vot-textfield>textarea+span::before,.vot-textfield>textarea+span::after{transition-duration:.1s !important}}}.vot-checkbox{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );--vot-helper-ontheme: var( --vot-ontheme-rgb, var(--vot-onprimary-rgb, 255, 255, 255) );z-index:0;position:relative;display:inline-block;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;text-align:start}.vot-checkbox[hidden]{display:none !important}.vot-checkbox>input{appearance:none;-moz-appearance:none;-webkit-appearance:none;z-index:1;position:absolute;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:3px 1px;border:solid 2px;background:rgba(0,0,0,0);border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6);border-radius:2px;width:18px;height:18px;outline:none;cursor:pointer;transition:border-color .2s,background-color .2s}.vot-checkbox>input+span{display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding-left:30px;width:inherit;cursor:pointer}.vot-checkbox>input+span::before{content:"";position:absolute;left:-10px;top:-8px;display:block;border-radius:50%;width:40px;height:40px;background-color:rgb(var(--vot-onsurface-rgb, 0, 0, 0));opacity:0;transform:scale(1);pointer-events:none;transition:opacity .3s,transform .2s}.vot-checkbox>input+span::after{content:"";z-index:1;display:block;position:absolute;top:3px;left:1px;-webkit-box-sizing:content-box !important;-moz-box-sizing:content-box !important;box-sizing:content-box !important;width:10px;height:5px;border:solid 2px rgba(0,0,0,0);border-right-width:0;border-top-width:0;pointer-events:none;transform:translate(3px, 4px) rotate(-45deg);transition:border-color .2s}.vot-checkbox>input:checked,.vot-checkbox>input:indeterminate{border-color:rgb(var(--vot-helper-theme));background-color:rgb(var(--vot-helper-theme))}.vot-checkbox>input:checked+span::before,.vot-checkbox>input:indeterminate+span::before{background-color:rgb(var(--vot-helper-theme))}.vot-checkbox>input:checked+span::after,.vot-checkbox>input:indeterminate+span::after{border-color:rgb(var(--vot-helper-ontheme, 255, 255, 255))}.vot-checkbox>input:indeterminate+span::after{border-left-width:0;transform:translate(4px, 3px)}.vot-checkbox:hover>input+span::before{opacity:.04}.vot-checkbox:active>input,.vot-checkbox:active:hover>input{border-color:rgb(var(--vot-helper-theme))}.vot-checkbox:active>input:checked{border-color:rgba(0,0,0,0);background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6)}.vot-checkbox:active>input+span::before{opacity:1;transform:scale(0);transition:transform 0s,opacity 0s}.vot-checkbox>input:disabled{border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-checkbox>input:disabled:checked,.vot-checkbox>input:disabled:indeterminate{border-color:rgba(0,0,0,0);background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38)}.vot-checkbox>input:disabled+span{color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-checkbox>input:disabled+span::before{opacity:0;transform:scale(0)}.vot-slider{--vot-safari-helper1: rgba( var(--vot-primary-rgb, 33, 150, 243), 0.04 ) !important;--vot-safari-helper2: rgba( var(--vot-primary-rgb, 33, 150, 243), 0.12 ) !important;--vot-safari-helper3: rgba( var(--vot-primary-rgb, 33, 150, 243), 0.16 ) !important;--vot-safari-helper4: rgba( var(--vot-primary-rgb, 33, 150, 243), 0.24 ) !important;display:inline-block;width:100% !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important;font-family:var(--vot-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system) !important;font-size:16px !important;line-height:1.5 !important;text-align:start !important}.vot-slider[hidden]{display:none !important}.vot-slider>input{-webkit-appearance:none !important;appearance:none !important;position:relative !important;top:24px !important;display:block !important;margin:0 0 -36px !important;width:100% !important;height:36px !important;background-color:rgba(0,0,0,0) !important;cursor:pointer !important}.vot-slider>input:last-child{position:static !important;margin:0 !important}.vot-slider>span{display:inline-block !important;margin-bottom:36px !important}.vot-slider>input:disabled{cursor:default !important;opacity:.38 !important}.vot-slider>input:disabled+span{color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-slider>input::-webkit-slider-runnable-track{margin:17px 0 !important;border-radius:1px !important;width:100% !important;height:2px !important;background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input::-webkit-slider-thumb{margin:0 !important;appearance:none !important;-webkit-appearance:none !important;border:none !important;border-radius:50% !important;height:2px !important;width:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important;transform:scale(6, 6) !important;transition:box-shadow .2s !important}.vot-slider:hover>input::-webkit-slider-thumb{box-shadow:0 0 0 2px var(--vot-safari-helper1) !important}.vot-slider>input:active::-webkit-slider-thumb{box-shadow:0 0 0 2px var(--vot-safari-helper4) !important}.vot-slider>input:disabled::-webkit-slider-runnable-track{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-slider>input:disabled::-webkit-slider-thumb{background-color:rgb(var(--vot-onsurface-rgb, 0, 0, 0)) !important;color:rgb(var(--vot-surface-rgb, 255, 255, 255)) !important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb, 255, 255, 255)) !important;transform:scale(4, 4) !important}.vot-slider>input::-moz-range-track{margin:17px 0 !important;border-radius:1px !important;width:100% !important;height:2px !important;background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input::-moz-range-thumb{appearance:none !important;-moz-appearance:none !important;border:none !important;border-radius:50% !important;height:2px !important;width:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important;transform:scale(6, 6) !important;transition:box-shadow .2s !important}.vot-slider>input::-moz-range-progress{border-radius:1px !important;height:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important}.vot-slider:hover>input:hover::-moz-range-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb, 33, 150, 243), 0.04) !important}.vot-slider>input:active::-moz-range-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input:disabled::-moz-range-track{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-slider>input:disabled::-moz-range-progress{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important}.vot-slider>input:disabled::-moz-range-thumb{background-color:rgb(var(--vot-onsurface-rgb, 0, 0, 0)) !important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb, 255, 255, 255)) !important;transform:scale(4, 4) !important}.vot-slider>input::-moz-focus-outer{border:none !important}.vot-slider>input::-ms-track{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin:17px 0 !important;border:none !important;border-radius:1px !important;padding:0 17px !important;width:100% !important;height:2px !important;background-color:rgba(0,0,0,0) !important}.vot-slider>input::-ms-fill-lower{border-radius:1px !important;height:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important}.vot-slider>input::-ms-fill-upper{border-radius:1px !important;height:2px !important;background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input::-ms-thumb{appearance:none !important;margin:0 17px !important;border:none !important;border-radius:50% !important;height:2px !important;width:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important;transform:scale(6, 6) !important;transition:box-shadow .2s !important}.vot-slider:hover>input::-ms-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb, 33, 150, 243), 0.04) !important}.vot-slider>input:active::-ms-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input:disabled::-ms-fill-lower{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-slider>input:disabled::-ms-fill-upper{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important;opacity:.38 !important}.vot-slider>input:disabled::-ms-thumb{background-color:rgb(var(--vot-onsurface-rgb, 0, 0, 0)) !important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb, 255, 255, 255)) !important;transform:scale(4, 4) !important}.vot-slider>input::before{content:"" !important;display:block !important;position:absolute !important;width:calc(100%*var(--vot-progress, 0)) !important;height:2px !important;top:calc(50% - 1px) !important;background:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important}.vot-select{--vot-helper-theme-rgb: var(--vot-onsurface-rgb, 0, 0, 0) !important;--vot-helper-theme: rgba(var(--vot-helper-theme-rgb), 0.87) !important;--vot-helper-safari1: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;--vot-helper-safari2: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.87 ) !important;display:flex;align-items:center;justify-content:space-between;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;line-height:1.5;text-align:start;color:var(--vot-helper-theme);fill:var(--vot-helper-theme)}.vot-select[hidden]{display:none !important}.vot-select-label{font-size:16px}.vot-select-outer{display:flex;align-items:center;justify-content:space-between;max-width:120px;width:120px;padding:0 5px;border-style:solid !important;border-width:1px !important;border-color:var(--vot-helper-safari1) !important;border-radius:4px !important;cursor:pointer;transition:border .2s !important}.vot-select-outer:hover{border-color:var(--vot-helper-safari2) !important}.vot-select-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vot-select-arrow-icon{width:20px;height:32px;display:flex;justify-content:center;align-items:center}.vot-select-content-list{display:flex;flex-direction:column}.vot-select-content-list .vot-select-content-item{padding:5px 10px;border-radius:8px;cursor:pointer}.vot-select-content-list .vot-select-content-item:not([inert]):hover{background-color:#2a2c31}.vot-select-content-list .vot-select-content-item[data-vot-selected=true]{color:rgb(var(--vot-primary-rgb, 33, 150, 243));background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.2)}.vot-select-content-list .vot-select-content-item[data-vot-selected=true]:hover{background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.1) !important}.vot-select-content-list .vot-select-content-item[data-vot-disabled=true]{cursor:default}.vot-select-content-list .vot-select-content-item[hidden]{display:none !important}.vot-header{color:rgba(var(--vot-helper-onsurface-rgb), 0.87);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-weight:bold;line-height:1.5;text-align:start}.vot-header[hidden]{display:none !important}.vot-header:not(:first-child){padding-top:8px}.vot-header-level-1{font-size:2em}.vot-header-level-2{font-size:1.5em}.vot-header-level-3{font-size:1.17em}.vot-header-level-4{font-size:1em}.vot-header-level-5{font-size:.83em}.vot-header-level-6{font-size:.67em}.vot-info{display:flex;color:rgba(var(--vot-helper-onsurface-rgb), 0.87);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;text-align:start}.vot-info[hidden]{display:none !important}.vot-info>:not(:first-child){color:rgba(var(--vot-helper-onsurface-rgb), 0.5);flex:1;margin-left:8px}.vot-lang-select{--vot-helper-theme-rgb: var(--vot-onsurface-rgb, 0, 0, 0);--vot-helper-theme: rgba(var(--vot-helper-theme-rgb), 0.87);display:flex;align-items:center;justify-content:space-between;color:var(--vot-helper-theme);fill:var(--vot-helper-theme)}.vot-lang-select[hidden]{display:none !important}.vot-lang-select-icon{width:32px;height:32px;display:flex;justify-content:center;align-items:center}.vot-segmented-button{--vot-helper-theme-rgb: var(--vot-onsurface-rgb, 0, 0, 0);--vot-helper-theme: rgba(var(--vot-helper-theme-rgb), 0.87);overflow:hidden;position:absolute;left:50%;top:5rem;transform:translate(-50%);user-select:none;display:flex;align-items:center;height:32px;max-width:100vw;background:rgb(var(--vot-surface-rgb, 255, 255, 255));color:var(--vot-helper-theme);fill:var(--vot-helper-theme);border-radius:4px;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;cursor:default;transition:opacity .5s;z-index:100}.vot-segmented-button[hidden]{display:none !important}.vot-segmented-button *{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important}.vot-segmented-button .vot-separator{width:1px;height:50%;background:rgba(var(--vot-helper-theme-rgb), 0.1)}.vot-segmented-button .vot-separator[hidden]{display:none !important}.vot-segmented-button .vot-segment,.vot-segmented-button .vot-segment-only-icon{position:relative;overflow:hidden;display:flex;justify-content:center;align-items:center;height:100%;padding:0 8px;background-color:rgba(0,0,0,0);color:inherit;transition:background-color 100ms ease-in-out;border:none}.vot-segmented-button .vot-segment[hidden],.vot-segmented-button [hidden].vot-segment-only-icon{display:none !important}.vot-segmented-button .vot-segment::before,.vot-segmented-button .vot-segment-only-icon::before,.vot-segmented-button .vot-segment::after,.vot-segmented-button .vot-segment-only-icon::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-segmented-button .vot-segment::before,.vot-segmented-button .vot-segment-only-icon::before{background-color:rgb(var(--vot-helper-theme-rgb));transition:opacity .2s}.vot-segmented-button .vot-segment::after,.vot-segmented-button .vot-segment-only-icon::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-segmented-button .vot-segment:hover::before,.vot-segmented-button .vot-segment-only-icon:hover::before{opacity:.04}.vot-segmented-button .vot-segment:active::after,.vot-segmented-button .vot-segment-only-icon:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-segmented-button .vot-segment-only-icon{min-width:32px;padding:0}.vot-segmented-button .vot-segment-label{margin-left:8px;white-space:nowrap}.vot-segmented-button[data-status=success] .vot-translate-button{color:rgb(var(--vot-primary-rgb, 33, 150, 243));fill:rgb(var(--vot-primary-rgb, 33, 150, 243))}.vot-segmented-button[data-status=error] .vot-translate-button{color:#f28b82;fill:#f28b82}.vot-segmented-button svg{width:fit-content}.vot-menu{--vot-helper-surface-rgb: var(--vot-surface-rgb, 255, 255, 255);--vot-helper-surface: rgb(var(--vot-helper-surface-rgb));--vot-helper-onsurface-rgb: var(--vot-onsurface-rgb, 0, 0, 0);--vot-helper-onsurface: rgba(var(--vot-helper-onsurface-rgb), 0.87);overflow:hidden;position:absolute;left:50%;top:calc(5rem + 32px + 16px);user-select:none;background-color:var(--vot-helper-surface);color:var(--vot-helper-onsurface);border-radius:8px;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;min-width:300px;cursor:default;z-index:100;visibility:visible;opacity:1;transform-origin:top;transform:translate(-50%) scale(1);transition:opacity .3s,transform .1s}.vot-menu *{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important}.vot-menu[hidden]{pointer-events:none;display:block !important;visibility:hidden;opacity:0;transform:translate(-50%) scale(0)}.vot-menu-content-wrapper{display:flex;flex-direction:column;min-height:100px;max-height:calc(var(--vot-container-height, 75vh) - (5rem + 32px + 16px)*2);overflow:auto}.vot-menu-header-container{flex-shrink:0;align-items:flex-start;display:flex;min-height:31px}.vot-menu-header-container:empty{padding:0 0 16px 0}.vot-menu-header-container>.vot-icon-button{margin-inline-end:4px;margin-top:4px}.vot-menu-title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0;text-align:start}.vot-menu-title{flex:1;font-size:16px;line-height:1;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px;padding-top:16px}.vot-menu-body-container{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto;padding:0 16px;gap:8px;overscroll-behavior:contain;scrollbar-color:rgba(var(--vot-helper-onsurface-rgb), 0.1) var(--vot-helper-surface) !important}.vot-menu-body-container::-webkit-scrollbar,.vot-menu-body-container::-webkit-scrollbar-track{height:12px !important;width:12px !important;background:var(--vot-helper-surface) !important}.vot-menu-body-container::-webkit-scrollbar-thumb{background:rgba(var(--vot-helper-onsurface-rgb), 0.1) !important;-webkit-border-radius:1ex !important;border:5px solid var(--vot-helper-surface) !important}.vot-menu-body-container::-webkit-scrollbar-thumb:hover{border:3px solid var(--vot-helper-surface) !important}.vot-menu-body-container::-webkit-scrollbar-corner{background:var(--vot-helper-surface) !important}.vot-menu-footer-container{flex-shrink:0;display:flex;justify-content:flex-end;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px;padding-top:16px}.vot-menu-footer-container:empty{padding:16px 0 0 0}.vot-dialog-container{visibility:visible;position:absolute;z-index:10000}.vot-dialog-container[hidden]{display:block !important;pointer-events:none;visibility:hidden}.vot-dialog-container *{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important}.vot-dialog-backdrop{background-color:rgba(0,0,0,.6);position:fixed;top:0;right:0;bottom:0;left:0;opacity:1;transition:opacity .3s}[hidden]>.vot-dialog-backdrop{pointer-events:none;opacity:0}.vot-dialog{--vot-helper-surface-rgb: var(--vot-surface-rgb, 255, 255, 255);--vot-helper-surface: rgb(var(--vot-helper-surface-rgb));--vot-helper-onsurface-rgb: var(--vot-onsurface-rgb, 0, 0, 0);--vot-helper-onsurface: rgba(var(--vot-helper-onsurface-rgb), 0.87);display:block;position:fixed;top:50%;bottom:50%;max-width:initial;max-height:initial;width:min(var(--vot-dialog-width, 512px),100%);height:fit-content;inset-inline-start:0px;inset-inline-end:0px;inset-block-start:0px;inset-block-end:0px;border-radius:8px;margin:auto;padding:0;background-color:var(--vot-helper-surface);color:var(--vot-helper-onsurface);box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;user-select:none;visibility:visible;overflow:auto;overflow-y:hidden;opacity:1;transform-origin:center;transform:scale(1);transition:opacity .3s,transform .1s}[hidden]>.vot-dialog{pointer-events:none;opacity:0;transform:scale(0.5);transition:opacity .1s,transform .2s}.vot-dialog-content-wrapper{display:flex;flex-direction:column;max-height:75vh;overflow:auto}.vot-dialog-header-container{flex-shrink:0;align-items:flex-start;display:flex;min-height:31px}.vot-dialog-header-container:empty{padding:0 0 20px 0}.vot-dialog-header-container>.vot-icon-button{margin-inline-end:4px;margin-top:4px}.vot-dialog-title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}.vot-dialog-title{flex:1;font-size:115.3846153846%;font-weight:bold;line-height:1;padding-bottom:16px;padding-inline-end:20px;padding-inline-start:20px;padding-top:20px}.vot-dialog-body-container{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto;padding:0 20px;gap:16px;overscroll-behavior:contain;scrollbar-color:rgba(var(--vot-helper-onsurface-rgb), 0.1) var(--vot-helper-surface) !important}.vot-dialog-body-container::-webkit-scrollbar,.vot-dialog-body-container::-webkit-scrollbar-track{height:12px !important;width:12px !important;background:var(--vot-helper-surface) !important}.vot-dialog-body-container::-webkit-scrollbar-thumb{background:rgba(var(--vot-helper-onsurface-rgb), 0.1) !important;-webkit-border-radius:1ex !important;border:5px solid var(--vot-helper-surface) !important}.vot-dialog-body-container::-webkit-scrollbar-thumb:hover{border:3px solid var(--vot-helper-surface) !important}.vot-dialog-body-container::-webkit-scrollbar-corner{background:var(--vot-helper-surface) !important}.vot-dialog-footer-container{flex-shrink:0;display:flex;justify-content:flex-end;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px;padding-top:16px}.vot-dialog-footer-container:empty{padding:20px 0 0 0}.vot-subtitles-widget{display:flex;justify-content:center;align-items:center;position:absolute;width:50%;max-height:100%;min-height:20%;z-index:100;left:25%;top:75%;pointer-events:none}.vot-subtitles{position:relative;max-width:100%;max-height:100%;width:max-content;background:var(--vot-subtitles-background, rgba(46, 47, 52, 0.8));color:var(--vot-subtitles-color, rgb(227, 227, 227));border-radius:1rem;pointer-events:all;padding:1rem;font-size:2rem;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vot-subtitles .passed{color:var(--vot-subtitles-passed-color, rgb(33, 150, 243))}:root{--vot-font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;--vot-primary-rgb: 139, 180, 245;--vot-onprimary-rgb: 32, 33, 36;--vot-surface-rgb: 32, 33, 36;--vot-onsurface-rgb: 227, 227, 227;--vot-subtitles-background: rgba(var(--vot-surface-rgb, 46, 47, 52), 0.8);--vot-subtitles-color: rgb(var(--vot-onsurface-rgb, 227, 227, 227));--vot-subtitles-passed-color: rgb(var(--vot-primary-rgb, 33, 150, 243))}vot-block{display:block}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/requestidlecallback-polyfill/index.js":
/***/ (() => {

window.requestIdleCallback =
    window.requestIdleCallback ||
    function(cb) {
        var start = Date.now();
        return setTimeout(function() {
            cb({
                didTimeout: false,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - start));
                },
            });
        }, 1);
    };

window.cancelIdleCallback =
    window.cancelIdleCallback ||
    function(id) {
        clearTimeout(id);
    };


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/webpack-monkey/lib/node/deps/style-loader-insertStyleElement.js":
/***/ ((module) => {

module.exports = function () {
  return (function styleLoaderInsertStyleElement(options) {
    options.styleTagTransform = function monkeyStyleTagTransform(css, styleElement) {
        styleElement?.remove();
        GM_addStyle(css);
    };
    return document.createElement("style");
}).apply(null, arguments)
}


/***/ }),

/***/ "./src/config/config.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cc: () => (/* binding */ yandexUserAgent),
/* harmony export */   JD: () => (/* binding */ defaultAutoVolume),
/* harmony export */   K2: () => (/* binding */ defaultDetectService),
/* harmony export */   Pm: () => (/* binding */ proxyWorkerHost),
/* harmony export */   QL: () => (/* binding */ detectUrls),
/* harmony export */   S7: () => (/* binding */ yandexHmacKey),
/* harmony export */   mE: () => (/* binding */ defaultTranslationService),
/* harmony export */   rl: () => (/* binding */ workerHost),
/* harmony export */   rw: () => (/* binding */ translateUrls),
/* harmony export */   se: () => (/* binding */ m3u8ProxyHost)
/* harmony export */ });
// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const m3u8ProxyHost = "m3u8-proxy.toil.cc"; // used for striming
const proxyWorkerHost = "vot.toil.cc"; // used for cloudflare version (vot-new.toil-dump.workers.dev || vot-worker.onrender.com)
const yandexHmacKey = "xtGCyGdTY2Jy6OMEKdTuXev3Twhkamgm";
const yandexUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 YaBrowser/23.7.1.1140 Yowser/2.5 Safari/537.36";
const defaultAutoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation
const defaultTranslationService = "yandex";
const defaultDetectService = "yandex";

const detectUrls = {
  yandex: "https://translate.toil.cc/detect",
  rustServer: "https://rust-server-531j.onrender.com/detect",
};

const translateUrls = {
  yandex: "https://translate.toil.cc/translate",
};




/***/ }),

/***/ "./src/utils/debug.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const debug = {};
debug.log = (...text) => {
  if (true) {
    return;
  }
  return console.log(
    "%c[VOT DEBUG]",
    "background: #F2452D; color: #fff; padding: 5px;",
    ...text,
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debug);


/***/ }),

/***/ "./src/yandexRequest.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/config/config.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/debug.js");



async function yandexRequest(path, body, headers, callback) {
  try {
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.log("yandexRequest:", path);
    // Create a fetch options object with headers and body
    const options = {
      url: `https://${_config_config_js__WEBPACK_IMPORTED_MODULE_0__/* .workerHost */ .rl}${path}`,
      method: "POST",
      headers: {
        ...{
          Accept: "application/x-protobuf",
          "Accept-Language": "en",
          "Content-Type": "application/x-protobuf",
          "User-Agent": _config_config_js__WEBPACK_IMPORTED_MODULE_0__/* .yandexUserAgent */ .Cc,
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Mode": "no-cors",
          "sec-ch-ua": null,
          "sec-ch-ua-mobile": null,
          "sec-ch-ua-platform": null,
        },
        ...headers,
      },
      binary: true,
      data: new Blob([body]),
      responseType: "arraybuffer",
    };
    // Send the request using GM_xmlhttpRequest
    GM_xmlhttpRequest({
      ...options,
      onload: (http) => {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.log("yandexRequest:", http.status, http);
        callback(http.status === 200, http.response);
      },
      onerror: (error) => {
        console.error("[VOT]", error);
        callback(false);
      },
    });
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (yandexRequest);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/config/alternativeUrls.js
// Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
const sitesInvidious = [
  "invidious.snopyta.org",
  "yewtu.be",
  "invidious.kavin.rocks",
  "vid.puffyan.us",
  "invidious.namazso.eu",
  "inv.riverside.rocks",
  "yt.artemislena.eu",
  "invidious.flokinet.to",
  "invidious.esmailelbob.xyz",
  "y.com.sb",
  "invidious.nerdvpn.de",
  "inv.vern.cc",
  "invidious.slipfox.xyz",
  "invidio.xamh.de",
  "invidious.dhusch.de",
];

// Sites host Piped. I tested the performance only on piped.video
const sitesPiped = [
  "piped.video",
  "piped.tokhmi.xyz",
  "piped.moomoo.me",
  "piped.syncpundit.io",
  "piped.mha.fi",
  "watch.whatever.social",
  "piped.garudalinux.org",
  "efy.piped.pages.dev",
  "watch.leptons.xyz",
  "piped.lunar.icu",
  "yt.dc09.ru",
  "piped.mint.lgbt",
  "il.ax",
  "piped.privacy.com.de",
  "piped.esmailelbob.xyz",
  "piped.projectsegfau.lt",
  "piped.in.projectsegfau.lt",
  "piped.us.projectsegfau.lt",
  "piped.privacydev.net",
  "piped.palveluntarjoaja.eu",
  "piped.smnz.de",
  "piped.adminforge.de",
  "piped.qdi.fi",
  "piped.hostux.net",
  "piped.chauvet.pro",
  "piped.jotoma.de",
  "piped.pfcd.me",
  "piped.frontendfriendly.xyz",
];

const sitesProxyTok = [
  "proxitok.pabloferreiro.es",
  "proxitok.pussthecat.org",
  "tok.habedieeh.re",
  "proxitok.esmailelbob.xyz",
  "proxitok.privacydev.net",
  "tok.artemislena.eu",
  "tok.adminforge.de",
  "tik.hostux.net", // maybe instance doesn't working
  "tt.vern.cc",
  "cringe.whatever.social",
  "proxitok.lunar.icu",
  "proxitok.privacy.com.de", // maybe instance doesn't working
];

// Sites host Peertube. I tested the performance only on dalek.zone and tube.shanti.cafe
const sitesPeertube = [
  "peertube.1312.media",
  "tube.shanti.cafe",
  "bee-tube.fr",
  "video.sadmin.io",
  "dalek.zone",
  "review.peertube.biz",
  "peervideo.club",
  "tube.la-dina.net",
  "peertube.tmp.rcp.tf",
];



// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__("./src/config/config.js");
;// CONCATENATED MODULE: ./src/config/constants.js
// available languages for translation
const availableLangs = [
  "ru",
  "en",
  "zh",
  "ko",
  "lt",
  "lv",
  "ar",
  "fr",
  "it",
  "es",
  "de",
  "ja",
];

// Additional languages working with TTS
const additionalTTS = [
  "kk",
  "bn",
  "pt",
  "cs",
  "hi",
  "mr", // TODO: Add menu translation (MAYBE)
  "te", // TODO: Add menu translation (MAYBE)
  "tr",
  "ms",
  "vi",
  "ta", // TODO: Add menu translation (MAYBE)
  "jv",
  "ur",
  "fa",
  "gu", // TODO: Add menu translation (MAYBE)
  "id",
  "uk",
  "da",
  "fi",
  "uz",
  "pl",
  "sv",
  "az",
  "sq",
  "am",
  "hy",
  "af",
  "eu",
  "my",
  "bg",
  "bs",
  "cy",
  "hu",
  "gl",
  "el",
  "zu",
  "kn",
  "ca",
  "km",
  "lo",
  "mk",
  "ml",
  "mt",
  "mn",
  "ne",
  "nl",
  "pa",
  "ro",
  "sr",
  "si",
  "sk",
  "sl",
  "sw",
  "su",
  "hr",
  "et",
];

// up-to-date list of TTS working languages
const actualTTS = ["ru", "en", "kk"];

const cfOnlyExtensions = [
  "Violentmonkey",
  "FireMonkey",
  "Greasemonkey",
  "AdGuard",
  "OrangeMonkey",
];



;// CONCATENATED MODULE: ./src/localization/locales/en.json
const en_namespaceObject = /*#__PURE__*/JSON.parse('{"__version__":3,"recommended":"recommended","translateVideo":"Translate video","disableTranslate":"Turn off","translationSettings":"Translation settings","subtitlesSettings":"Subtitles settings","about":"About extension","resetSettings":"Reset settings","videoBeingTranslated":"The video is being translated","videoLanguage":"Video language","translationLanguage":"Translation language","translationTake":"The translation will take","translationTakeMoreThanHour":"The translation will take more than an hour","translationTakeAboutMinute":"The translation will take about a minute","translationTakeFewMinutes":"The translation will take a few minutes","translationTakeApproximatelyMinutes":"The translation will take approximately {0} minutes","translationTakeApproximatelyMinute":"The translation will take approximately {0} minutes","unSupportedExtensionError":"Error! {0} is not supported by this version of the extension!\\n\\nPlease use the cloudflare version of the VOT extension.","requestTranslationFailed":"Failed to request video translation","audioNotReceived":"Audio link not received","grantPermissionToAutoPlay":"Grant permission to autoplay","neededAdditionalExtension":"An additional extension is needed to support this site","audioFormatNotSupported":"The audio format is not supported","VOTAutoTranslate":"Translate on open","VOTDontTranslateYourLang":"Do not translate from my language","VOTVolume":"Video volume","VOTVolumeTranslation":"Translation Volume","VOTAutoSetVolume":"Reduce video volume to ","VOTShowVideoSlider":"Video volume slider","VOTSyncVolume":"Link translation and video volume","VOTAudioProxy":"Proxy received audio","VOTDisableFromYourLang":"You have disabled the translation of the video in your language","VOTLiveNotSupported":"Translation of live streams is not supported","VOTPremiere":"Wait for the premiere to end before translating","VOTVideoIsTooLong":"Video is too long","VOTNoVideoIDFound":"No video ID found","VOTSubtitles":"Subtitles","VOTSubtitlesDisabled":"Disabled","VOTSubtitlesMaxLength":"Subtitles max length","VOTHighlightWords":"Highlight words","VOTTranslatedFrom":"translated from","VOTAutogenerated":"autogenerated","VOTSettings":"VOT Settings","VOTMenuLanguage":"Menu language","VOTAuthors":"Authors","VOTVersion":"Version","VOTLoader":"Loader","VOTBrowser":"Browser","VOTShowPiPButton":"Show PiP button","langs":{"auto":"Auto","af":"Afrikaans","ak":"Akan","sq":"Albanian","am":"Amharic","ar":"Arabic","hy":"Armenian","as":"Assamese","ay":"Aymara","az":"Azerbaijani","bn":"Bangla","eu":"Basque","be":"Belarusian","bho":"Bhojpuri","bs":"Bosnian","bg":"Bulgarian","my":"Burmese","ca":"Catalan","ceb":"Cebuano","zh":"Chinese","zh-Hans":"Chinese (Simplified)","zh-Hant":"Chinese (Traditional)","co":"Corsican","hr":"Croatian","cs":"Czech","da":"Danish","dv":"Divehi","nl":"Dutch","en":"English","eo":"Esperanto","et":"Estonian","ee":"Ewe","fil":"Filipino","fi":"Finnish","fr":"French","gl":"Galician","lg":"Ganda","ka":"Georgian","de":"German","el":"Greek","gn":"Guarani","gu":"Gujarati","ht":"Haitian Creole","ha":"Hausa","haw":"Hawaiian","iw":"Hebrew","hi":"Hindi","hmn":"Hmong","hu":"Hungarian","is":"Icelandic","ig":"Igbo","id":"Indonesian","ga":"Irish","it":"Italian","ja":"Japanese","jv":"Javanese","kn":"Kannada","kk":"Kazakh","km":"Khmer","rw":"Kinyarwanda","ko":"Korean","kri":"Krio","ku":"Kurdish","ky":"Kyrgyz","lo":"Lao","la":"Latin","lv":"Latvian","ln":"Lingala","lt":"Lithuanian","lb":"Luxembourgish","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Māori","mr":"Marathi","mn":"Mongolian","ne":"Nepali","nso":"Northern Sotho","no":"Norwegian","ny":"Nyanja","or":"Odia","om":"Oromo","ps":"Pashto","fa":"Persian","pl":"Polish","pt":"Portuguese","pa":"Punjabi","qu":"Quechua","ro":"Romanian","ru":"Russian","sm":"Samoan","sa":"Sanskrit","gd":"Scottish Gaelic","sr":"Serbian","sn":"Shona","sd":"Sindhi","si":"Sinhala","sk":"Slovak","sl":"Slovenian","so":"Somali","st":"Southern Sotho","es":"Spanish","su":"Sundanese","sw":"Swahili","sv":"Swedish","tg":"Tajik","ta":"Tamil","tt":"Tatar","te":"Telugu","th":"Thai","ti":"Tigrinya","ts":"Tsonga","tr":"Turkish","tk":"Turkmen","uk":"Ukrainian","ur":"Urdu","ug":"Uyghur","uz":"Uzbek","vi":"Vietnamese","cy":"Welsh","fy":"Western Frisian","xh":"Xhosa","yi":"Yiddish","yo":"Yoruba","zu":"Zulu"},"udemyAccessTokenExpired":"Your entered Udemy Access Token has expired","udemyModuleArgsNotFound":"Could not get udemy module data due to the fact that ModuleArgs was not found","VOTTranslationHelpNull":"Could not get the data required for the translate","enterUdemyAccessToken":"Enter Udemy Access Token","VOTUdemyData":"Udemy Data","streamNoConnectionToServer":"There is no connection to the server","searchField":"Search...","VOTTranslateAPIErrors":"Translate errors from the API","VOTTranslationService":"Translation Service","VOTDetectService":"Detect Service","VOTTranslatingError":"Translating the error","VOTProxyWorkerHost":"Enter the proxy worker address","VOTM3u8ProxyHost":"Enter the address of the m3u8 proxy worker","proxySettings":"Proxy Settings"}');
// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/utils/storage.js


const votStorage = new (class {
  constructor() {
    this.gmSupport = typeof GM_getValue === "function";
    debug/* default */.A.log(`GM Storage Status: ${this.gmSupport}`);
  }

  syncGet(name, def = undefined, toNumber = false) {
    if (this.gmSupport) {
      return GM_getValue(name, def);
    }

    let val = window.localStorage.getItem(name);
    if (name === "udemyData" && typeof val === "string") {
      try {
        val = JSON.parse(val);
      } catch {
        val = def;
      }
    }

    return toNumber ? Number(val) ?? Number(def) : val ?? def;
  }

  async get(name, def = undefined, toNumber = false) {
    if (this.gmSupport) {
      return await GM_getValue(name, def);
    }

    return Promise.resolve(this.syncGet(name, def, toNumber));
  }

  syncSet(name, value) {
    if (this.gmSupport) {
      return GM_setValue(name, value);
    }

    if (name === "udemyData") {
      value = JSON.stringify(value);
    }

    return window.localStorage.setItem(name, value);
  }

  async set(name, value) {
    if (this.gmSupport) {
      return await GM_setValue(name, value);
    }

    return Promise.resolve(this.syncSet(name, value));
  }

  syncDelete(name) {
    if (this.gmSupport) {
      return GM_deleteValue(name);
    }

    return window.localStorage.removeItem(name);
  }

  async delete(name) {
    if (this.gmSupport) {
      return await GM_deleteValue(name);
    }

    return Promise.resolve(this.syncDelete(name));
  }

  syncList() {
    if (this.gmSupport) {
      return GM_listValues();
    }

    return [
      "autoTranslate",
      "dontTranslateLanguage",
      "dontTranslateYourLang",
      "autoSetVolumeYandexStyle",
      "showVideoSlider",
      "syncVolume",
      "subtitlesMaxLength",
      "highlightWords",
      "responseLanguage",
      "defaultVolume",
      "udemyData",
      "audioProxy",
      "showPiPButton",
      "locale-version",
      "locale-lang",
      "locale-phrases",
    ];
  }

  async list() {
    if (this.gmSupport) {
      return await GM_listValues();
    }

    return Promise.resolve(this.syncList());
  }
})();

;// CONCATENATED MODULE: ./src/localization/localizationProvider.js




const localesVersion = 2;
const localesUrl = `https://raw.githubusercontent.com/ilyhalight/voice-over-translation/${
   false ? 0 : "master"
}/src/localization/locales`;

const availableLocales = [
  "auto",
  "en",
  "ru",

  "af",
  "am",
  "ar",
  "az",
  "bg",
  "bn",
  "bs",
  "ca",
  "cs",
  "cy",
  "da",
  "de",
  "el",
  "es",
  "et",
  "eu",
  "fa",
  "fi",
  "fr",
  "gl",
  "hi",
  "hr",
  "hu",
  "hy",
  "id",
  "it",
  "ja",
  "jv",
  "kk",
  "km",
  "kn",
  "ko",
  "lo",
  "mk",
  "ml",
  "mn",
  "ms",
  "mt",
  "my",
  "ne",
  "nl",
  "pa",
  "pl",
  "pt",
  "ro",
  "si",
  "sk",
  "sl",
  "sq",
  "sr",
  "su",
  "sv",
  "sw",
  "tr",
  "uk",
  "ur",
  "uz",
  "vi",
  "zh",
  "zu",
];

const localizationProvider = new (class {
  lang = "en";
  locale = {};
  gmValues = [
    "locale-phrases",
    "locale-lang",
    "locale-version",
    "locale-lang-override",
  ];

  constructor() {
    const langOverride = votStorage.syncGet("locale-lang-override", "auto");
    if (langOverride && langOverride !== "auto") {
      this.lang = langOverride;
    } else {
      this.lang =
        (navigator.language || navigator.userLanguage)
          ?.substr(0, 2)
          ?.toLowerCase() ?? "en";
    }
    this.setLocaleFromJsonString(votStorage.syncGet("locale-phrases", ""));
  }

  reset() {
    this.gmValues.forEach((v) => votStorage.syncDelete(v));
  }

  async update(force = false) {
    if (
      !force &&
      (await votStorage.get("locale-version", 0, true)) === localesVersion &&
      (await votStorage.get("locale-lang")) === this.lang
    ) {
      return;
    }

    debug/* default */.A.log("Updating locale...");

    await fetch(`${localesUrl}/${this.lang}.json`)
      .then((response) => {
        if (response.status === 200) return response.text();
        throw response.status;
      })
      .then(async (text) => {
        await votStorage.set("locale-phrases", text);
        this.setLocaleFromJsonString(text);
        const version = this.getFromLocale(this.locale, "__version__");
        if (typeof version === "number")
          await votStorage.set("locale-version", version);
        await votStorage.set("locale-lang", this.lang);
      })
      .catch(async (error) => {
        console.error(
          "[VOT] [localizationProvider] failed get locale, cause:",
          error,
        );
        this.setLocaleFromJsonString(
          await votStorage.get("locale-phrases", ""),
        );
      });
  }

  setLocaleFromJsonString(json) {
    try {
      this.locale = JSON.parse(json) ?? {};
    } catch (exception) {
      console.error("[VOT] [localizationProvider]", exception);
      this.locale = {};
    }
  }

  getFromLocale(locale, key) {
    const result = key.split(".").reduce((locale, key) => {
      if (typeof locale === "object" && locale) return locale[key];
      return undefined;
    }, locale);
    if (result === undefined) {
      console.warn(
        "[VOT] [localizationProvider] locale",
        locale,
        "doesn't contain key",
        key,
      );
    }
    return result;
  }

  getDefault(key) {
    return this.getFromLocale(en_namespaceObject, key) ?? key;
  }

  get(key) {
    return (
      this.getFromLocale(this.locale, key) ??
      this.getFromLocale(en_namespaceObject, key) ??
      key
    );
  }
})();

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/webpack-monkey/lib/node/deps/style-loader-insertStyleElement.js
var style_loader_insertStyleElement = __webpack_require__("./node_modules/webpack-monkey/lib/node/deps/style-loader-insertStyleElement.js");
var style_loader_insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(style_loader_insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss
var main = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");
;// CONCATENATED MODULE: ./src/styles/main.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (style_loader_insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.A, options);




       /* harmony default export */ const styles_main = (main/* default */.A && main/* default */.A.locals ? main/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/ui.js


function createHeader(html, level = 4) {
  const header = document.createElement("vot-block");
  header.classList.add("vot-header");
  header.classList.add(`vot-header-level-${level}`);
  header.innerHTML = html;

  return header;
}

function createInformation(html, valueHtml) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-info");

  const header = document.createElement("vot-block");
  header.innerHTML = html;

  const value = document.createElement("vot-block");
  value.innerHTML = valueHtml;

  container.appendChild(header);
  container.appendChild(value);

  return {
    container,
    header,
    value,
  };
}

function createButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-button");
  button.innerHTML = html;

  return button;
}

function createTextButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-text-button");
  button.innerHTML = html;

  return button;
}

function createOutlinedButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-outlined-button");
  button.innerHTML = html;

  return button;
}

function createIconButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-icon-button");
  button.innerHTML = html;

  return button;
}

function createCheckbox(html, value = false) {
  const container = document.createElement("label");
  container.classList.add("vot-checkbox");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = Boolean(value);

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  return { container, input, label };
}

function updateSlider(input) {
  const value = parseFloat(input.value);
  const min = input.min === "" ? 0 : parseFloat(input.min);
  const max = input.max === "" ? 100 : parseFloat(input.max);
  const progress = (value - min) / (max - min);
  input.parentElement.setAttribute("style", `--vot-progress: ${progress}`);
}

function createSlider(html, value = 50, min = 0, max = 100) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-slider");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  input.addEventListener("input", (e) => updateSlider(e.target));
  updateSlider(input);

  return {
    container,
    input,
    label,
  };
}

function createTextfield(
  html,
  value = "",
  placeholder = " ",
  multiline = false,
) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-textfield");

  const input = document.createElement(multiline ? "textarea" : "input");
  input.placeholder = placeholder;
  input.value = value;

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  return {
    container,
    input,
    label,
  };
}

function createDialog(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-dialog-container");
  container.hidden = true;

  const backdrop = document.createElement("vot-block");
  backdrop.classList.add("vot-dialog-backdrop");

  const dialog = document.createElement("vot-block");
  dialog.classList.add("vot-dialog");

  const contentWrapper = document.createElement("vot-block");
  contentWrapper.classList.add("vot-dialog-content-wrapper");

  const headerContainer = document.createElement("vot-block");
  headerContainer.classList.add("vot-dialog-header-container");

  const bodyContainer = document.createElement("vot-block");
  bodyContainer.classList.add("vot-dialog-body-container");

  const footerContainer = document.createElement("vot-block");
  footerContainer.classList.add("vot-dialog-footer-container");

  const titleContainer = document.createElement("vot-block");
  titleContainer.classList.add("vot-dialog-title-container");

  const closeButton = createIconButton(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>`,
  );
  closeButton.classList.add("vot-dialog-close-button");

  backdrop.onclick = closeButton.onclick = () => {
    container.hidden = true;
  };

  const title = document.createElement("vot-block");
  title.classList.add("vot-dialog-title");
  title.innerHTML = html;

  container.appendChild(backdrop);
  container.appendChild(dialog);
  dialog.appendChild(contentWrapper);
  contentWrapper.appendChild(headerContainer);
  contentWrapper.appendChild(bodyContainer);
  contentWrapper.appendChild(footerContainer);
  headerContainer.appendChild(titleContainer);
  headerContainer.appendChild(closeButton);
  titleContainer.appendChild(title);

  return {
    container,
    backdrop,
    dialog,
    contentWrapper,
    headerContainer,
    bodyContainer,
    footerContainer,
    titleContainer,
    closeButton,
    title,
  };
}

function createVOTButton(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-segmented-button");

  const translateButton = document.createElement("vot-block");
  translateButton.classList.add("vot-segment");
  translateButton.classList.add("vot-translate-button");
  translateButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m604-202-35 97q-4 11-14 18t-22 7q-20 0-32.5-16.5T496-133l152-402q5-11 15-18t22-7h30q12 0 22 7t15 18l152 403q8 19-4 35.5T868-80q-13 0-22.5-7.5T831-107l-33-95H604Zm24-70h144l-70-198h-4l-70 198ZM360-400 188-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l174-174q-38-42-66.5-87T190-640h84q18 36 38.5 65t49.5 61q44-48 73-98.5T484-720H80q-17 0-28.5-11.5T40-760q0-17 11.5-28.5T80-800h240v-40q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v40h240q17 0 28.5 11.5T680-760q0 17-11.5 28.5T640-720h-76q-21 71-57 138t-89 126l96 98-30 82-124-124Z"/></svg>`;

  const separator = document.createElement("vot-block");
  separator.classList.add("vot-separator");

  const pipButton = document.createElement("vot-block");
  pipButton.classList.add("vot-segment-only-icon");
  pipButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-520q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h104L80-743q-12-12-12-28.5T80-800q12-12 28.5-12t28.5 12l143 144v-104q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Zm40 360q-33 0-56.5-23.5T80-240v-160q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400v160h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm680-280q-17 0-28.5-11.5T800-480v-240H480q-17 0-28.5-11.5T440-760q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440ZM600-160q-17 0-28.5-11.5T560-200v-120q0-17 11.5-28.5T600-360h240q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H600Z"/></svg>`;

  const separator2 = document.createElement("vot-block");
  separator2.classList.add("vot-separator");

  const menuButton = document.createElement("vot-block");
  menuButton.classList.add("vot-segment-only-icon");
  menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>`;

  const label = document.createElement("span");
  label.classList.add("vot-segment-label");
  label.innerHTML = html;

  container.appendChild(translateButton);
  container.appendChild(separator);
  container.appendChild(pipButton);
  container.appendChild(separator2);
  container.appendChild(menuButton);
  translateButton.appendChild(label);

  return {
    container,
    translateButton,
    separator,
    pipButton,
    separator2,
    menuButton,
    label,
  };
}

function createVOTMenu(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-menu");
  container.hidden = true;

  const contentWrapper = document.createElement("vot-block");
  contentWrapper.classList.add("vot-menu-content-wrapper");

  const headerContainer = document.createElement("vot-block");
  headerContainer.classList.add("vot-menu-header-container");

  const bodyContainer = document.createElement("vot-block");
  bodyContainer.classList.add("vot-menu-body-container");

  const footerContainer = document.createElement("vot-block");
  footerContainer.classList.add("vot-menu-footer-container");

  const titleContainer = document.createElement("vot-block");
  titleContainer.classList.add("vot-menu-title-container");

  const title = document.createElement("vot-block");
  title.classList.add("vot-menu-title");
  title.innerHTML = html;

  container.appendChild(contentWrapper);
  contentWrapper.appendChild(headerContainer);
  contentWrapper.appendChild(bodyContainer);
  contentWrapper.appendChild(footerContainer);
  headerContainer.appendChild(titleContainer);
  titleContainer.appendChild(title);

  return {
    container,
    contentWrapper,
    headerContainer,
    bodyContainer,
    footerContainer,
    titleContainer,
    title,
  };
}

function createVOTSelectLabel(text) {
  const label = document.createElement("span");
  label.classList.add("vot-select-label");
  label.innerText = text;
  return label;
}

function createVOTSelect(selectTitle, dialogTitle, items, options = {}) {
  const onSelectCb = options.onSelectCb || function () {};
  const labelElement = options.labelElement || "";
  let selectedItems = [];

  const container = document.createElement("vot-block");
  container.classList.add("vot-select");

  if (labelElement) {
    container.appendChild(labelElement);
  }

  const outer = document.createElement("vot-block");
  outer.classList.add("vot-select-outer");

  const title = document.createElement("span");
  title.classList.add("vot-select-title");
  title.innerText = selectTitle;

  if (selectTitle === undefined) {
    title.innerText = items.find((i) => i.selected === true)?.label;
  }

  const arrowIcon = document.createElement("vot-block");
  arrowIcon.classList.add("vot-select-arrow-icon");
  arrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"/></svg>`;

  outer.append(title, arrowIcon);
  outer.onclick = () => {
    const votSelectDialog = createDialog(dialogTitle);
    votSelectDialog.container.classList.add("vot-dialog-temp");
    votSelectDialog.container.hidden = false;
    document.documentElement.appendChild(votSelectDialog.container);

    const contentList = document.createElement("vot-block");
    contentList.classList.add("vot-select-content-list");

    for (const item of items) {
      const contentItem = document.createElement("vot-block");
      contentItem.classList.add("vot-select-content-item");
      contentItem.innerText = item.label;
      contentItem.dataset.votSelected = item.selected;
      contentItem.dataset.votValue = item.value;
      if (item.disabled) {
        contentItem.inert = true;
      }

      contentItem.onclick = async (e) => {
        if (e.target.inert) return;

        // removing the selected value for updating
        const contentItems = contentList.childNodes;
        contentItems.forEach((ci) => (ci.dataset.votSelected = false));
        // fixed selection after closing the modal and opening again
        items.forEach((i) => (i.selected = i.value === item.value));

        contentItem.dataset.votSelected = true;
        title.innerText = item.label;

        // !!! use e.target.dataset.votValue instead of e.target.value !!!
        await onSelectCb(e);
      };
      contentList.appendChild(contentItem);
    }

    // search logic
    const votSearchLangTextfield = createTextfield(
      localizationProvider.get("searchField"),
    );

    votSearchLangTextfield.input.oninput = (e) => {
      const searchText = e.target.value.toLowerCase();
      // check if there are lovercase characters in the string. used for smarter search
      Array.from(selectedItems).forEach(
        (ci) => (ci.hidden = !ci.innerText.toLowerCase().includes(searchText)),
      );
    };

    votSelectDialog.bodyContainer.append(
      votSearchLangTextfield.container,
      contentList,
    );
    selectedItems = contentList.childNodes;

    // remove the modal so that they do not accumulate
    votSelectDialog.backdrop.onclick = votSelectDialog.closeButton.onclick =
      () => {
        votSelectDialog.container.remove();
        selectedItems = [];
      };
  };

  container.append(outer);

  const setTitle = (newTitle) => {
    title.innerText = newTitle;
  };

  const setSelected = (val) => {
    Array.from(selectedItems)
      .filter((ci) => !ci.inert)
      .forEach((ci) => (ci.dataset.votSelected = ci.dataset.votValue === val));
    items.forEach((i) => (i.selected = String(i.value) === val));
  };

  const updateItems = (newItems) => {
    items = newItems;
  };

  return {
    container,
    title,
    arrowIcon,
    labelElement,
    setTitle,
    setSelected,
    updateItems,
  };
}

function createVOTLanguageSelect(options) {
  const fromTitle = options.fromTitle || "#UNDEFINED";
  const fromDialogTitle = options.fromDialogTitle || "#UNDEFINED";
  const fromItems = options.fromItems || [];
  const fromOnSelectCB = options.fromOnSelectCB || function () {};
  const toTitle = options.toTitle || "#UNDEFINED";
  const toDialogTitle = options.toDialogTitle || "#UNDEFINED";
  const toItems = options.toItems || [];
  const toOnSelectCB = options.toOnSelectCB || function () {};

  const container = document.createElement("vot-block");
  container.classList.add("vot-lang-select");

  const fromSelect = createVOTSelect(fromTitle, fromDialogTitle, fromItems, {
    onSelectCb: fromOnSelectCB,
  });

  const icon = document.createElement("vot-block");
  icon.classList.add("vot-lang-select-icon");
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>`;

  const toSelect = createVOTSelect(toTitle, toDialogTitle, toItems, {
    onSelectCb: toOnSelectCB,
  });

  container.append(fromSelect.container, icon, toSelect.container);

  return {
    container,
    fromSelect,
    icon,
    toSelect,
  };
}

/* harmony default export */ const ui = ({
  createHeader,
  createInformation,
  createButton,
  createTextButton,
  createOutlinedButton,
  createIconButton,
  createCheckbox,
  createSlider,
  createTextfield,
  createDialog,
  createVOTButton,
  createVOTMenu,
  createVOTSelectLabel,
  createVOTSelect,
  createVOTLanguageSelect,
  updateSlider,
});

;// CONCATENATED MODULE: ./src/utils/VOTLocalizedError.js


class VOTLocalizedError extends Error {
  constructor(message) {
    super(localizationProvider.getDefault(message));
    this.name = "VOTLocalizedError";
    this.unlocalizedMessage = message;
    this.localizedMessage = localizationProvider.get(message);
  }
}

;// CONCATENATED MODULE: ./src/utils/translateApis.js



const HTTP_TIMEOUT = 3000;

async function fetchWithTimeout(url, options) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), HTTP_TIMEOUT);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } catch (error) {
    console.error("Fetch timed-out. Error:", error);
    return error;
  } finally {
    clearTimeout(timeoutId);
  }
}

const YandexTranslateAPI = {
  async translate(text, lang) {
    // Limit: 10k symbols
    //
    // Lang examples:
    // en-ru, uk-ru, ru-en...
    // ru, en (instead of auto-ru, auto-en)

    try {
      const response = await fetchWithTimeout(config/* translateUrls */.rw.yandex, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text,
          lang,
        }),
      });

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();

      if (content.code !== 200) {
        throw content.message;
      }

      return content.text[0];
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  },

  async detect(text, lang) {
    // Limit: 10k symbols
    try {
      const response = await fetchWithTimeout(config/* detectUrls */.QL.yandex, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text,
          lang,
        }),
      });

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();
      if (content.code !== 200) {
        throw content.message;
      }

      return content.lang ?? "en";
    } catch (error) {
      console.error("Error translating text:", error);
      return "en";
    }
  },
};

const RustServerAPI = {
  async detect(text) {
    try {
      const response = await fetch(config/* detectUrls */.QL.rustServer, {
        method: "POST",
        body: text,
      });

      if (response instanceof Error) {
        throw response;
      }

      return await response.text();
    } catch (error) {
      console.error("Error getting lang from text:", error);
      return "en";
    }
  },
};

async function translate(text, fromLang = "", toLang = "ru") {
  const service = await votStorage.get(
    "translationService",
    config/* defaultTranslationService */.mE,
  );
  switch (service) {
    case "yandex": {
      const langPair = fromLang && toLang ? `${fromLang}-${toLang}` : toLang;
      return await YandexTranslateAPI.translate(text, langPair);
    }
    default:
      return text;
  }
}

async function detect(text) {
  const service = await votStorage.get("detectService", config/* defaultDetectService */.K2);
  switch (service) {
    case "yandex":
      return await YandexTranslateAPI.detect(text);
    case "rust-server":
      return await RustServerAPI.detect(text);
    default:
      return "en";
  }
}

const translateServices = ["yandex"];
const detectServices = ["yandex", "rust-server"];



;// CONCATENATED MODULE: ./src/utils/youtubeUtils.js





// Get the language code from the response or the text
async function getLanguage(player, response, title, description) {
  if (
    !window.location.hostname.includes("m.youtube.com") &&
    player?.getAudioTrack
  ) {
    // ! Experimental ! get lang from selected audio track if availabled
    const audioTracks = player.getAudioTrack();
    const trackInfo = audioTracks?.getLanguageInfo(); // get selected track info (id === "und" if tracks are not available)
    if (trackInfo?.id !== "und") {
      return langTo6391(trackInfo.id.split(".")[0]);
    }
  }

  // TODO: If the audio tracks will work fine, transfer the receipt of captions to the audioTracks variable
  // Check if there is an automatic caption track in the response
  const captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find((caption) => caption.kind === "asr");
    if (autoCaption && autoCaption.languageCode) {
      return langTo6391(autoCaption.languageCode);
    }
  }

  // If there is no caption track, use detect to get the language code from the description

  const deletefilter = [
    /(?:https?|ftp):\/\/[\S]+/g, //temp fix
    /https?:\/\/\S+|www\.\S+/gm,
    /\b\S+\.\S+/gm,
    /#[^\s#]+/g, // hash tags
    /Auto-generated by YouTube/g,
    /Provided to YouTube by/g,
    /Released on/g,
    /Bitcoin/g,
    /USDT/g,
    /Paypal/g,
  ];

  const cleanedDescription = description
    .split("\n\n")
    .filter((line) => !deletefilter.some((regex) => regex.test(line)))
    .join("\n\n");

  const cleanText = [title, cleanedDescription]
    .join(" ")
    .replace(/[^\p{L}\s]/gu, " ")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 1000);

  return await detect(cleanText);
}

function isMobile() {
  return /^m\.youtube\.com$/.test(window.location.hostname);
}

function getPlayer() {
  if (window.location.pathname.startsWith("/shorts/")) {
    return isMobile()
      ? document.querySelector("#movie_player")
      : document.querySelector("#shorts-player");
  }

  return document.querySelector("#movie_player");
}

function getPlayerResponse() {
  const player = getPlayer();
  if (player?.getPlayerResponse)
    return player?.getPlayerResponse?.call() ?? null;
  return player?.data?.playerResponse ?? null;
}

function getPlayerData() {
  const player = getPlayer();
  if (player?.getVideoData) return player?.getVideoData?.call() ?? null;
  return player?.data?.playerResponse?.videoDetails ?? null;
}

function getVideoVolume() {
  const player = getPlayer();
  if (player?.getVolume) {
    return player.getVolume.call() / 100;
  }

  return 1;
}

function setVideoVolume(volume) {
  const player = getPlayer();
  if (player?.setVolume) {
    player.setVolume(Math.round(volume * 100));
    return true;
  }
}

function videoSeek(video, time) {
  // * TIME IN MS
  debug/* default */.A.log("videoSeek", time);
  const preTime =
    getPlayer()?.getProgressState()?.seekableEnd || video.currentTime;
  const finalTime = preTime - time; // we always throw it to the end of the stream - time
  video.currentTime = finalTime;
}

function getSubtitles() {
  const response = getPlayerResponse();
  let captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks ?? [];
  captionTracks = captionTracks.reduce((result, captionTrack) => {
    if ("languageCode" in captionTrack) {
      const language = captionTrack?.languageCode
        ? langTo6391(captionTrack?.languageCode)
        : undefined;
      const url = captionTrack?.url || captionTrack?.baseUrl;
      language &&
        url &&
        result.push({
          source: "youtube",
          language,
          isAutoGenerated: captionTrack?.kind === "asr",
          url: `${
            url.startsWith("http") ? url : `${window.location.origin}/${url}`
          }&fmt=json3`,
        });
    }
    return result;
  }, []);
  debug/* default */.A.log("youtube subtitles:", captionTracks);
  return captionTracks;
}

// Get the video data from the player
async function getVideoData() {
  const player = getPlayer();
  const response = getPlayerResponse(); // null in /embed
  const data = getPlayerData();
  const { title } = data ?? {};
  const { shortDescription: description, isLive } =
    response?.videoDetails ?? {};
  let detectedLanguage = title
    ? await getLanguage(player, response, title, description)
    : "en";
  detectedLanguage = availableLangs.includes(detectedLanguage)
    ? detectedLanguage
    : "en";
  const videoData = {
    isLive: !!isLive,
    title,
    description,
    detectedLanguage,
  };
  debug/* default */.A.log("youtube video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

/* harmony default export */ const youtubeUtils = ({
  isMobile,
  getPlayer,
  getPlayerResponse,
  getPlayerData,
  getVideoVolume,
  getSubtitles,
  getVideoData,
  setVideoVolume,
  videoSeek,
});

;// CONCATENATED MODULE: ./src/utils/utils.js



const userlang = navigator.language || navigator.userLanguage;
const lang = userlang?.substr(0, 2)?.toLowerCase() ?? "en";

// not used
// function waitForElm(selector) {
//   // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
//   return new Promise((resolve) => {
//     const element = document.querySelector(selector);
//     if (element) {
//       return resolve(element);
//     }

//     const observer = new MutationObserver(() => {
//       const element = document.querySelector(selector);
//       if (element) {
//         resolve(element);
//         observer.disconnect();
//       }
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//       once: true,
//     });
//   });
// }

// not used
// const sleep = (m) => new Promise((r) => setTimeout(r, m));

const getVideoId = (service, video) => {
  let url = new URL(window.location.href);

  switch (service) {
    case "piped":
    case "invidious":
    case "youtube": {
      if (url.searchParams.has("enablejsapi")) {
        const videoUrl = youtubeUtils.getPlayer().getVideoUrl();
        url = new URL(videoUrl);
      }

      return (
        url.pathname.match(/(?:watch|embed|shorts)\/([^/]+)/)?.[1] ||
        url.searchParams.get("v")
      );
    }
    case "vk":
      if (url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)) {
        return url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)[0].slice(1);
      } else if (url.searchParams.get("z")) {
        return url.searchParams.get("z").split("/")[0];
      } else if (url.searchParams.get("oid") && url.searchParams.get("id")) {
        return `video-${Math.abs(
          url.searchParams.get("oid"),
        )}_${url.searchParams.get("id")}`;
      } else {
        return false;
      }
    case "nine_gag":
    case "9gag":
    case "gag":
      return url.pathname.match(/gag\/([^/]+)/)?.[1];
    case "twitch":
      if (/^m\.twitch\.tv$/.test(window.location.hostname)) {
        const linkUrl = document.head.querySelector('link[rel="canonical"]');
        return (
          linkUrl?.href.match(/videos\/([^/]+)/)?.[0] || url.pathname.slice(1)
        );
      } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
        return `videos/${url.searchParams.get("video")}`;
      } else if (/^clips\.twitch\.tv$/.test(window.location.hostname)) {
        // get link to twitch channel (ex.: https://www.twitch.tv/xqc)
        const channelLink = document.querySelector(
          ".tw-link[data-test-selector='stream-info-card-component__stream-avatar-link']",
        );
        if (!channelLink) {
          return false;
        }

        const channelName = channelLink.href.replace(
          "https://www.twitch.tv/",
          "",
        );
        return `${channelName}/clip/${url.searchParams.get("clip")}`;
      } else if (url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)) {
        return url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)[0];
      } else {
        return url.pathname.match(/(?:videos)\/([^/]+)/)?.[0];
      }
    case "proxytok":
      return url.pathname.match(/([^/]+)\/video\/([^/]+)/)?.[0];
    case "tiktok": {
      let id = url.pathname.match(/([^/]+)\/video\/([^/]+)/)?.[0];
      if (!id) {
        const playerEl = video.closest(".xgplayer-playing, .tiktok-web-player");
        const itemEl = playerEl?.closest(
          'div[data-e2e="recommend-list-item-container"]',
        );
        const authorEl = itemEl?.querySelector(
          'a[data-e2e="video-author-avatar"]',
        );
        if (playerEl && authorEl) {
          const videoId = playerEl.id?.match(/^xgwrapper-[0-9]+-(.*)$/)?.at(1);
          const author = authorEl.href?.match(/.*(@.*)$/)?.at(1);
          if (videoId && author) {
            id = `${author}/video/${videoId}`;
          }
        }
      }
      return id;
    }
    case "vimeo": {
      const appId = url.searchParams.get("app_id");
      const videoId =
        url.pathname.match(/[^/]+\/[^/]+$/)?.[0] ||
        url.pathname.match(/[^/]+$/)?.[0];

      return appId ? `${videoId}?app_id=${appId}` : videoId;
    }
    case "xvideos":
      return url.pathname.match(/[^/]+\/[^/]+$/)?.[0];
    case "pornhub":
      return (
        url.searchParams.get("viewkey") ||
        url.pathname.match(/embed\/([^/]+)/)?.[1]
      );
    case "twitter":
      return url.pathname.match(/status\/([^/]+)/)?.[1];
    case "udemy":
      return url.pathname;
    case "rumble":
      return url.pathname;
    case "facebook":
      return url.pathname;
    case "rutube":
      return url.pathname.match(/(?:video|embed)\/([^/]+)/)?.[1];
    case "coub":
      if (url.pathname.includes("/view")) {
        return url.pathname.match(/view\/([^/]+)/)?.[1];
      } else if (url.pathname.includes("/embed")) {
        return url.pathname.match(/embed\/([^/]+)/)?.[1];
      } else {
        return document.querySelector(".coub.active")?.dataset?.permalink;
      }
    case "bilibili": {
      const bvid = url.searchParams.get("bvid");
      if (bvid) {
        return bvid;
      } else {
        let vid = url.pathname.match(/video\/([^/]+)/)?.[1];
        if (vid && url.search && url.searchParams.get("p") !== null) {
          vid += `/?p=${url.searchParams.get("p")}`;
        }
        return vid;
      }
    }
    case "mail_ru":
      if (url.pathname.startsWith("/v/") || url.pathname.startsWith("/mail/")) {
        return url.pathname;
      } else if (url.pathname.match(/video\/embed\/([^/]+)/)) {
        const referer = document.querySelector(
          ".b-video-controls__mymail-link",
        );
        if (!referer) {
          return false;
        }

        return referer?.href.split("my.mail.ru")?.[1];
      }
      return false;
    case "bitchute":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    case "coursera":
      // ! LINK SHOULD BE LIKE THIS https://www.coursera.org/learn/learning-how-to-learn/lecture/75EsZ
      // return url.pathname.match(/lecture\/([^/]+)\/([^/]+)/)?.[1]; // <--- COURSE PREVIEW
      return url.pathname.match(/learn\/([^/]+)\/lecture\/([^/]+)/)?.[0]; // <--- COURSE PASSING (IF YOU LOGINED TO COURSERA)
    case "eporner":
      // ! LINK SHOULD BE LIKE THIS eporner.com/video-XXXXXXXXX/isdfsd-dfjsdfjsdf-dsfsdf-dsfsda-dsad-ddsd
      return url.pathname.match(/video-([^/]+)\/([^/]+)/)?.[0];
    case "peertube":
      return url.pathname.match(/\/w\/([^/]+)/)?.[0];
    case "dailymotion": {
      // we work in the context of the player
      // geo.dailymotion.com
      const plainPlayerConfig = Array.from(
        document.querySelectorAll("*"),
      ).filter((s) => s.innerHTML.trim().includes(".m3u8"));
      try {
        let videoUrl = plainPlayerConfig[1].lastChild.src;
        return videoUrl.match(/\/video\/(\w+)\.m3u8/)?.[1];
      } catch (e) {
        console.error("[VOT]", e);
        return false;
      }
    }
    case "trovo": {
      if (!url.pathname.startsWith("/s/")) {
        return false;
      }

      const vid = url.searchParams.get("vid");
      if (!vid) {
        return false;
      }

      const path = url.pathname.match(/([^/]+)\/([\d]+)/)?.[0];
      if (!path) {
        return false;
      }

      return `${path}?vid=${vid}`;
    }
    case "yandexdisk":
      return url.pathname.match(/\/i\/([^/]+)/)?.[1];
    case "coursehunter": {
      const courseId = url.pathname.match(/\/course\/([^/]+)/)?.[1];
      return courseId ? courseId + url.search : false;
    }
    case "ok.ru": {
      return url.pathname.match(/\/video\/(\d+)/)?.[0];
    }
    case "googledrive":
      return url.searchParams.get("docid");
    case "bannedvideo":
      return url.searchParams.get("id");
    case "weverse":
      return url.pathname.match(/([^/]+)\/(live|media)\/([^/]+)/)?.[0];
    case "newgrounds":
      return url.pathname.match(/([^/]+)\/(view)\/([^/]+)/)?.[0];
    case "egghead":
      return url.pathname;
    case "youku":
      return url.pathname.match(/v_show\/id_[\w=]+/)?.[0];
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  if (minutes >= 60) {
    return localizationProvider.get("translationTakeMoreThanHour");
  } else if (minutes >= 10 && minutes % 10) {
    return localizationProvider
      .get("translationTakeApproximatelyMinutes")
      .replace("{0}", minutes);
  } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
    return localizationProvider.get("translationTakeAboutMinute");
  } else {
    return localizationProvider
      .get("translationTakeApproximatelyMinute")
      .replace("{0}", minutes);
  }
}
function langTo6391(lang) {
  // convert lang to ISO 639-1
  return lang.toLowerCase().split(";")[0].trim().split("-")[0].split("_")[0];
}

function isPiPAvailable() {
  return (
    "pictureInPictureEnabled" in document && document.pictureInPictureEnabled
  );
}

function initHls() {
  return typeof Hls != "undefined" && Hls?.isSupported()
    ? new Hls({
        debug: false, // turn it on manually if necessary
        lowLatencyMode: true,
        backBufferLength: 90,
      })
    : undefined;
}



;// CONCATENATED MODULE: ./src/utils/volume.js
// element - audio / video element
function syncVolume(element, sliderVolume, otherSliderVolume, tempVolume) {
  let finalValue = sliderVolume;
  if (sliderVolume > tempVolume) {
    // sliderVolume = 100
    // tempVolume = 69
    // volume = 15
    // 100 - 69 = 31
    // 15 + 31 = 46 - final video volume
    finalValue = otherSliderVolume + (sliderVolume - tempVolume);
    finalValue = finalValue > 100 ? 100 : Math.max(finalValue, 0);

    element.volume = finalValue / 100;
  } else if (sliderVolume < tempVolume) {
    // sliderVolume = 69
    // tempVolume = 100
    // volume = 15
    // 100 - 69 = 31
    // 15 - 31 = 0 - final video volume
    finalValue = otherSliderVolume - (tempVolume - sliderVolume);
    finalValue = finalValue > 100 ? 100 : Math.max(finalValue, 0);

    element.volume = finalValue / 100;
  }

  return finalValue;
}



;// CONCATENATED MODULE: ./src/yandexProtobuf.js
// coursera & udemy translation help object
const VideoTranslationHelpObject = new protobuf.Type(
  "VideoTranslationHelpObject",
)
  .add(new protobuf.Field("target", 1, "string")) // video_file_url or subtitles_file_url
  .add(new protobuf.Field("targetUrl", 2, "string")); // url to video_file or url to subtitles

const VideoTranslationRequest = new protobuf.Type("VideoTranslationRequest")
  .add(new protobuf.Field("url", 3, "string"))
  .add(new protobuf.Field("deviceId", 4, "string")) // removed?
  .add(new protobuf.Field("firstRequest", 5, "bool")) // true for the first request, false for subsequent ones
  .add(new protobuf.Field("duration", 6, "double"))
  .add(new protobuf.Field("unknown2", 7, "int32")) // 1 1
  .add(new protobuf.Field("language", 8, "string")) // source language code
  .add(new protobuf.Field("unknown3", 9, "int32")) // 0 - without translationHelp | 1 - with translationHelp (??? But it works without it)
  .add(new protobuf.Field("unknown4", 10, "int32")) // 0 0
  .add(
    new protobuf.Field(
      "translationHelp",
      11,
      "VideoTranslationHelpObject",
      "repeated",
    ),
  ) // array for translation assistance ([0] -> {2: link to video, 1: "video_file_url"}, [1] -> {2: link to subtitles, 1: "subtitles_file_url"})
  .add(new protobuf.Field("responseLanguage", 14, "string"))
  .add(new protobuf.Field("unknown5", 15, "int32")) // 0
  .add(new protobuf.Field("unknown6", 16, "int32")) // 1
  .add(new protobuf.Field("unknown7", 17, "int32")); // 0

const VideoSubtitlesRequest = new protobuf.Type("VideoSubtitlesRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string")); // source language code

const VideoStreamRequest = new protobuf.Type("VideoStreamRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string"))
  .add(new protobuf.Field("responseLanguage", 3, "string"));

const VideoStreamPingRequest = new protobuf.Type("VideoStreamPingRequest").add(
  new protobuf.Field("pingId", 1, "int32"),
);

const VideoTranslationResponse = new protobuf.Type("VideoTranslationResponse")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("duration", 2, "double"))
  .add(new protobuf.Field("status", 4, "int32"))
  .add(new protobuf.Field("remainingTime", 5, "int32")) // secs before translation (used as interval before next request in yaBrowser)
  .add(new protobuf.Field("unknown0", 6, "int32")) // unknown 0 (1st request) -> 10 (2nd, 3th and etc requests)
  .add(new protobuf.Field("unknown1", 7, "string"))
  .add(new protobuf.Field("language", 8, "string")) // detected language (if the wrong one is set)
  .add(new protobuf.Field("message", 9, "string"));

const VideoSubtitlesObject = new protobuf.Type("VideoSubtitlesObject")
  .add(new protobuf.Field("language", 1, "string"))
  .add(new protobuf.Field("url", 2, "string"))
  .add(new protobuf.Field("unknown2", 3, "int32"))
  .add(new protobuf.Field("translatedLanguage", 4, "string"))
  .add(new protobuf.Field("translatedUrl", 5, "string"))
  .add(new protobuf.Field("unknown5", 6, "int32"))
  .add(new protobuf.Field("unknown6", 7, "int32"));

const VideoSubtitlesResponse = new protobuf.Type("VideoSubtitlesResponse")
  .add(new protobuf.Field("unknown0", 1, "int32"))
  .add(new protobuf.Field("subtitles", 2, "VideoSubtitlesObject", "repeated"));

const VideoStreamObject = new protobuf.Type("VideoStreamObject")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("timestamp", 2, "int64")); // timestamp in ms (probably means the time of 1 request to translate the stream)

const VideoStreamResponse = new protobuf.Type("VideoStreamResponse")
  .add(new protobuf.Field("interval", 1, "int32")) // 20s - streaming, 10s - translating, 0s - there is no connection with the server (the broadcast is finished or deleted)
  .add(new protobuf.Field("translatedInfo", 2, "VideoStreamObject"))
  .add(new protobuf.Field("pingId", 3, "int32"));

// * Yandex has been skipping any translation streams for a long time (whitelist always return true)
// * Most likely, it is already outdated and will not be used
// const VideoWhitelistStreamRequest = new protobuf.Type("VideoWhitelistStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("deviceId", 4, "string"))

// const VideoWhitelistStreamResponse = new protobuf.Type("VideoWhitelistStreamResponse")
//   .add(new protobuf.Field("inWhitelist", 1, "bool"))

// Create a root namespace and add the types
const root = new protobuf.Root()
  .define("yandex")
  .add(VideoTranslationHelpObject)
  .add(VideoTranslationRequest)
  .add(VideoTranslationResponse)
  .add(VideoSubtitlesRequest)
  .add(VideoSubtitlesObject)
  .add(VideoSubtitlesResponse)
  .add(VideoStreamPingRequest)
  .add(VideoStreamRequest)
  .add(VideoStreamObject)
  .add(VideoStreamResponse);

// Export the encoding and decoding functions
const yandexProtobuf = {
  encodeTranslationRequest(
    url,
    duration,
    requestLang,
    responseLang,
    translationHelp,
  ) {
    return root.VideoTranslationRequest.encode({
      url,
      firstRequest: true,
      duration,
      unknown2: 1,
      language: requestLang,
      unknown3: 0,
      unknown4: 0,
      translationHelp,
      responseLanguage: responseLang,
      unknown5: 0,
      unknown6: 1,
      unknown7: 0,
    }).finish();
  },
  decodeTranslationResponse(response) {
    return root.VideoTranslationResponse.decode(new Uint8Array(response));
  },
  encodeSubtitlesRequest(url, requestLang) {
    return root.VideoSubtitlesRequest.encode({
      url,
      language: requestLang,
    }).finish();
  },
  decodeSubtitlesResponse(response) {
    return root.VideoSubtitlesResponse.decode(new Uint8Array(response));
  },
  encodeStreamPingRequest(pingId) {
    return root.VideoStreamPingRequest.encode({
      pingId,
    }).finish();
  },
  encodeStreamRequest(url, requestLang, responseLang) {
    return root.VideoStreamRequest.encode({
      url,
      language: requestLang,
      responseLanguage: responseLang,
    }).finish();
  },
  decodeStreamResponse(response) {
    return root.VideoStreamResponse.decode(new Uint8Array(response));
  },
};

// EXTERNAL MODULE: ./node_modules/bowser/es5.js
var es5 = __webpack_require__("./node_modules/bowser/es5.js");
;// CONCATENATED MODULE: ./src/getUUID.js
function getUUID(isLower) {
  const uuid = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
  return isLower ? uuid : uuid.toUpperCase();
}



;// CONCATENATED MODULE: ./src/getSignature.js


async function getSignature(body) {
  // Create a key from the HMAC secret
  const utf8Encoder = new TextEncoder("utf-8");
  const key = await window.crypto.subtle.importKey(
    "raw",
    utf8Encoder.encode(config/* yandexHmacKey */.S7),
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign", "verify"],
  );
  // Sign the body with the key
  const signature = await window.crypto.subtle.sign("HMAC", key, body);
  // Convert the signature to a hex string
  return Array.from(new Uint8Array(signature), (x) =>
    x.toString(16).padStart(2, "0"),
  ).join("");
}



;// CONCATENATED MODULE: ./src/rsp.js





// Request stream ping from Yandex API
async function requestStreamPing(pingId, callback) {
  try {
    debug/* default */.A.log("requestStreamPing");
    // ! CURRENT CLOUDFLARE WORKER DOESN'T SUPPORT STREAM TRANSLATIONS
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest.js"));
    const yandexRequest = yar.default;
    debug/* default */.A.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeStreamPingRequest(pingId);
    // Send the request
    await yandexRequest(
      "/stream-translation/ping-stream",
      body,
      {
        "Vtrans-Signature": await getSignature(body),
        "Sec-Vtrans-Token": getUUID(false),
      },
      callback,
    );
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const rsp = (requestStreamPing);

;// CONCATENATED MODULE: ./src/rst.js





// Request stream translation from Yandex API
async function requestStreamTranslation(
  url,
  requestLang,
  responseLang,
  callback,
) {
  try {
    debug/* default */.A.log("requestStreamTranslation");
    // ! CURRENT CLOUDFLARE WORKER DOESN'T SUPPORT STREAM TRANSLATIONS
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest.js"));
    const yandexRequest = yar.default;
    debug/* default */.A.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeStreamRequest(
      url,
      requestLang,
      responseLang,
    );
    // Send the request
    await yandexRequest(
      "/stream-translation/translate-stream",
      body,
      {
        "Vtrans-Signature": await getSignature(body),
        "Sec-Vtrans-Token": getUUID(false),
      },
      callback,
    );
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const rst = (requestStreamTranslation);

;// CONCATENATED MODULE: ./src/rvt.js





// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  duration,
  requestLang,
  responseLang,
  translationHelp,
  callback,
) {
  try {
    debug/* default */.A.log("requestVideoTranslation");
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest.js"));
    const yandexRequest = yar.default;
    debug/* default */.A.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeTranslationRequest(
      url,
      duration,
      requestLang,
      responseLang,
      translationHelp,
    );
    // Send the request
    await yandexRequest(
      // "/stream-translation/whitelist-stream",
      // "/stream-translation/translate-stream",
      "/video-translation/translate",
      body,
      {
        "Vtrans-Signature": await getSignature(body),
        "Sec-Vtrans-Token": getUUID(false),
      },
      callback,
    );
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const rvt = (requestVideoTranslation);

;// CONCATENATED MODULE: ./src/rvs.js





// Request video subtitles from Yandex API
async function requestVideoSubtitles(url, requestLang, callback) {
  try {
    debug/* default */.A.log("requestVideoSubtitles");
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest.js"));
    const yandexRequest = yar.default;
    debug/* default */.A.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeSubtitlesRequest(url, requestLang);
    // Send the request
    await yandexRequest(
      "/video-subtitles/get-subtitles",
      body,
      {
        "Vsubs-Signature": await getSignature(body),
        "Sec-Vsubs-Token": getUUID(false),
      },
      callback,
    );
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const rvs = (requestVideoSubtitles);

;// CONCATENATED MODULE: ./src/subtitles.js






function formatYandexSubtitlesTokens(line) {
  const lineEndMs = line.startMs + line.durationMs;
  return line.tokens.reduce((result, token, index) => {
    const nextToken = line.tokens[index + 1];
    let lastToken;
    if (result.length > 0) {
      lastToken = result[result.length - 1];
    }
    const alignRangeEnd = lastToken?.alignRange?.end ?? 0;
    const newAlignRangeEnd = alignRangeEnd + token.text.length;
    token.alignRange = {
      start: alignRangeEnd,
      end: newAlignRangeEnd,
    };
    result.push(token);
    if (nextToken) {
      const endMs = token.startMs + token.durationMs;
      const durationMs = nextToken.startMs
        ? nextToken.startMs - endMs
        : lineEndMs - endMs;
      result.push({
        text: " ",
        startMs: endMs,
        durationMs,
        alignRange: {
          start: newAlignRangeEnd,
          end: newAlignRangeEnd + 1,
        },
      });
    }
    return result;
  }, []);
}

function createSubtitlesTokens(line, previousLineLastToken) {
  const tokens = line.text.split(/([\n \t])/).reduce((result, tokenText) => {
    if (tokenText.length) {
      const lastToken = result[result.length - 1] ?? previousLineLastToken;
      const alignRangeStart = lastToken?.alignRange?.end ?? 0;
      const alignRangeEnd = alignRangeStart + tokenText.length;
      result.push({
        text: tokenText,
        alignRange: {
          start: alignRangeStart,
          end: alignRangeEnd,
        },
      });
    }
    return result;
  }, []);
  const tokenDurationMs = Math.floor(line.durationMs / tokens.length);
  const lineEndMs = line.startMs + line.durationMs;
  return tokens.map((token, index) => {
    const isLastToken = index === tokens.length - 1;
    const startMs = line.startMs + tokenDurationMs * index;
    const durationMs = isLastToken ? lineEndMs - startMs : tokenDurationMs;
    return {
      ...token,
      startMs,
      durationMs,
    };
  });
}

function getSubtitlesTokens(subtitles, source) {
  const result = [];
  let lastToken;
  for (const line of subtitles.subtitles) {
    let tokens;
    if (line?.tokens?.length) {
      if (source === "yandex") {
        tokens = formatYandexSubtitlesTokens(line);
      } else {
        console.warn("[VOT] Unsupported subtitles tokens type: ", source);
        subtitles.containsTokens = false;
        return null;
      }
    } else {
      tokens = createSubtitlesTokens(line, lastToken);
    }
    lastToken = tokens[tokens.length - 1];
    result.push({
      ...line,
      tokens,
    });
  }
  subtitles.containsTokens = true;
  return result;
}

function formatYoutubeSubtitles(subtitles) {
  const result = {
    containsTokens: false,
    subtitles: [],
  };
  if (
    typeof subtitles !== "object" ||
    !("events" in subtitles) ||
    !Array.isArray(subtitles.events)
  ) {
    console.error("[VOT] Failed to format youtube subtitles", subtitles);
    return result;
  }
  for (let i = 0; i < subtitles.events.length; i++) {
    if (!subtitles.events[i].segs) continue;
    const text = subtitles.events[i].segs
      .map((e) => e.utf8.replace(/^ +| +$/g, ""))
      .join(" ");
    let durationMs = subtitles.events[i].dDurationMs;
    if (
      subtitles.events[i + 1] &&
      subtitles.events[i].tStartMs + subtitles.events[i].dDurationMs >
        subtitles.events[i + 1].tStartMs
    ) {
      durationMs =
        subtitles.events[i + 1].tStartMs - subtitles.events[i].tStartMs;
    }
    if (text !== "\n") {
      result.subtitles.push({
        text,
        startMs: subtitles.events[i].tStartMs,
        durationMs,
      });
    }
  }
  return result;
}

async function fetchSubtitles(subtitlesObject) {
  let resolved = false;
  let subtitles = await Promise.race([
    new Promise((resolve) => {
      setTimeout(() => {
        if (!resolved) {
          console.error("[VOT] Failed to fetch subtitles. Reason: timeout");
          resolve([]);
        }
      }, 5000);
    }),
    new Promise((resolve) => {
      debug/* default */.A.log("Fetching subtitles:", subtitlesObject);
      fetch(subtitlesObject.url)
        .then((response) => response.json())
        .then((json) => {
          resolved = true;
          resolve(json);
        })
        .catch((error) => {
          console.error("[VOT] Failed to fetch subtitles. Reason:", error);
          resolved = true;
          resolve({
            containsTokens: false,
            subtitles: [],
          });
        });
    }),
  ]);
  if (subtitlesObject.source === "youtube") {
    subtitles = formatYoutubeSubtitles(subtitles);
  }
  subtitles.subtitles = getSubtitlesTokens(subtitles, subtitlesObject.source);
  console.log("[VOT] subtitles:", subtitles);
  return subtitles;
}

async function subtitles_getSubtitles(site, videoId, requestLang) {
  const ytSubtitles =
    site.host === "youtube" ? youtubeUtils.getSubtitles() : [];
  let resolved = false;
  const yaSubtitles = await Promise.race([
    new Promise((resolve) => {
      setTimeout(() => {
        if (!resolved) {
          console.error("[VOT] Failed get yandex subtitles. Reason: timeout");
          resolve([]);
        }
      }, 5000);
    }),
    new Promise((resolve) => {
      rvs(
        `${site.url}${videoId}`,
        requestLang,
        (success, response) => {
          debug/* default */.A.log("[exec callback] Requesting video subtitles");

          if (!success) {
            console.error("[VOT] Failed get yandex subtitles");
            resolved = true;
            resolve([]);
          }

          const subtitlesResponse =
            yandexProtobuf.decodeSubtitlesResponse(response);
          console.log("[VOT] Subtitles response: ", subtitlesResponse);

          let subtitles = subtitlesResponse.subtitles ?? [];
          subtitles = subtitles.reduce((result, yaSubtitlesObject) => {
            if (
              yaSubtitlesObject.language &&
              !result.find((e) => {
                if (
                  e.source === "yandex" &&
                  e.language === yaSubtitlesObject.language &&
                  !e.translatedFromLanguage
                ) {
                  return e;
                }
              })
            ) {
              result.push({
                source: "yandex",
                language: yaSubtitlesObject.language,
                url: yaSubtitlesObject.url,
              });
            }
            if (yaSubtitlesObject.translatedLanguage) {
              result.push({
                source: "yandex",
                language: yaSubtitlesObject.translatedLanguage,
                translatedFromLanguage: yaSubtitlesObject.language,
                url: yaSubtitlesObject.translatedUrl,
              });
            }
            return result;
          }, []);
          resolved = true;
          resolve(subtitles);
        },
      );
    }),
  ]);
  const subtitles = [...yaSubtitles, ...ytSubtitles].sort((a, b) => {
    if (a.source !== b.source) {
      // sort by source
      return a.source === "yandex" ? -1 : 1;
    }
    if (
      a.language !== b.language &&
      (a.language === lang || b.language === lang)
    ) {
      // sort by user language
      return a.language === lang ? -1 : 1;
    }
    if (a.source === "yandex") {
      // sort by translation
      if (a.translatedFromLanguage !== b.translatedFromLanguage) {
        // sort by translatedFromLanguage
        if (!a.translatedFromLanguage || !b.translatedFromLanguage) {
          // sort by isTranslated
          if (a.language === b.language) {
            return a.translatedFromLanguage ? 1 : -1;
          }
          return !a.translatedFromLanguage ? 1 : -1;
        }
        return a.translatedFromLanguage === requestLang ? -1 : 1;
      }
      if (!a.translatedFromLanguage) {
        // sort non translated by language
        return a.language === requestLang ? -1 : 1;
      }
    }
    if (a.source === "youtube" && a.isAutoGenerated !== b.isAutoGenerated) {
      // sort by isAutoGenerated
      return a.isAutoGenerated ? 1 : -1;
    }
    return 0;
  });
  console.log("[VOT] subtitles list", subtitles);
  return subtitles;
}

class SubtitlesWidget {
  dragging = false;
  subtitlesContainerRect = null;
  containerRect = null;
  offsetX = null;
  offsetY = null;

  lastContent = null;
  highlightWords = false;
  subtitles = null;
  maxLength = 300;
  maxLengthRegexp = /.{1,300}(?:\s|$)/g;

  constructor(video, container, site) {
    this.site = site;
    this.video = video;
    if (this.site.host === "youtube" && this.site.additionalData !== "mobile") {
      this.container = container.parentElement;
    } else {
      this.container = container;
    }

    this.votSubtitlesContainer = document.createElement("vot-block");
    this.votSubtitlesContainer.classList.add("vot-subtitles-widget");
    this.container.appendChild(this.votSubtitlesContainer);

    this.onMouseDownBound = this.onMouseDown.bind(this);
    this.onMouseUpBound = this.onMouseUp.bind(this);
    this.onMouseMoveBound = this.onMouseMove.bind(this);
    this.onTimeUpdateBound = this.onTimeUpdate.bind(this);

    document.addEventListener("mousedown", this.onMouseDownBound);
    document.addEventListener("mouseup", this.onMouseUpBound);
    document.addEventListener("mousemove", this.onMouseMoveBound);

    this.video?.addEventListener("timeupdate", this.onTimeUpdateBound);
  }

  release() {
    this.video?.removeEventListener("timeupdate", this.onTimeUpdateBound);

    document.removeEventListener("mousedown", this.onMouseDownBound);
    document.removeEventListener("mouseup", this.onMouseUpBound);
    document.removeEventListener("mousemove", this.onMouseMoveBound);

    this.votSubtitlesContainer.remove();
  }

  onMouseDown(e) {
    if (this.votSubtitlesContainer.contains(e.target)) {
      this.subtitlesContainerRect =
        this.votSubtitlesContainer.getBoundingClientRect();
      this.containerRect = this.container.getBoundingClientRect();
      this.offsetX = e.clientX - this.subtitlesContainerRect.x;
      this.offsetY = e.clientY - this.subtitlesContainerRect.y;
      this.dragging = true;
    }
  }

  onMouseUp() {
    this.dragging = false;
  }

  onMouseMove(e) {
    if (this.dragging) {
      e.preventDefault();
      const x = e.clientX - this.offsetX;
      const y = e.clientY - this.offsetY;
      const top = y >= this.containerRect.top;
      const bottom =
        y + this.subtitlesContainerRect.height <= this.containerRect.bottom;
      const left = x >= this.containerRect.left;
      const right =
        x + this.subtitlesContainerRect.width <= this.containerRect.right;

      if (top && bottom) {
        this.votSubtitlesContainer.style.top = `${y - this.containerRect.y}px`;
      } else if (!top) {
        this.votSubtitlesContainer.style.top = `${0}px`;
      } else {
        this.votSubtitlesContainer.style.top = `${
          this.containerRect.height - this.subtitlesContainerRect.height
        }px`;
      }

      if (left && right) {
        this.votSubtitlesContainer.style.left = `${x - this.containerRect.x}px`;
      } else if (!left) {
        this.votSubtitlesContainer.style.left = `${0}px`;
      } else {
        this.votSubtitlesContainer.style.left = `${
          this.containerRect.width - this.subtitlesContainerRect.width
        }px`;
      }
    }
  }

  onTimeUpdate() {
    this.update();
  }

  setContent(subtitles) {
    if (subtitles && this.video) {
      this.subtitles = subtitles;
      this.update();
    } else {
      this.subtitles = null;
      this.votSubtitlesContainer.innerHTML = "";
    }
  }

  setMaxLength(len) {
    if (typeof len === "number" && len) {
      this.maxLength = len;
      this.maxLengthRegexp = new RegExp(`.{1,${len}}(?:\\s|$)`, "g");
      this.update();
    }
  }

  setHighlightWords(value) {
    if (this.highlightWords !== !!value) {
      this.highlightWords = !!value;
      this.update();
    }
  }

  update() {
    if (!this.video) return;

    let content = "";
    let highlightWords = this.highlightWords && this.subtitles?.containsTokens;
    const time = this.video.currentTime * 1000;
    const line = this.subtitles?.subtitles?.findLast((e) => {
      return e.startMs < time && time < e.startMs + e.durationMs;
    });
    if (line) {
      if (highlightWords) {
        let { tokens } = line;
        if (tokens.at(-1).alignRange.end > this.maxLength) {
          let chunks = [];
          let chunkStartIndex = 0;
          let chunkEndIndex = 0;
          let length = 0;
          for (let i = 0; i < tokens.length + 1; i++) {
            length += tokens[i]?.text?.length ?? 0;
            if (!tokens[i] || length > this.maxLength) {
              let t = tokens.slice(chunkStartIndex, chunkEndIndex + 1);
              if (t.at(0) && t.at(0).text === " ") t = t.slice(1);
              if (t.at(-1) && t.at(-1).text === " ")
                t = t.slice(0, t.length - 1);
              chunks.push({
                startMs: tokens[chunkStartIndex].startMs,
                durationMs:
                  tokens[chunkEndIndex].startMs +
                  tokens[chunkEndIndex].durationMs -
                  tokens[chunkStartIndex].startMs,
                tokens: t,
              });
              chunkStartIndex = i;
              length = 0;
            }
            chunkEndIndex = i;
          }
          for (const chunk of chunks) {
            if (
              chunk.startMs < time &&
              time < chunk.startMs + chunk.durationMs
            ) {
              tokens = chunk.tokens;
              break;
            }
          }
        }
        for (let token of tokens) {
          const passedMs = token.startMs + token.durationMs / 2;
          content += `<span ${
            time > passedMs ||
            (time > token.startMs - 100 && passedMs - time < 275)
              ? 'class="passed"'
              : ""
          }>${token.text}</span>`;
        }
      } else if (line.text.length > this.maxLength) {
        let chunks = line.text.match(this.maxLengthRegexp);
        let chunkDurationMs = line.durationMs / chunks.length;
        for (let i = 0; i < chunks.length; i++) {
          if (
            line.startMs + chunkDurationMs * i < time &&
            time < line.startMs + chunkDurationMs * (i + 1)
          ) {
            content = chunks[i].trim();
            break;
          }
        }
      } else {
        content = line.text;
      }
    }
    if (content !== this.lastContent) {
      this.lastContent = content;
      this.votSubtitlesContainer.innerHTML = content
        ? `<vot-block class="vot-subtitles">${content.replace(
            "\\n",
            "<br>",
          )}</vot-block>`
        : "";
    }
  }
}

;// CONCATENATED MODULE: ./src/utils/coursehunterUtils.js


async function getCourseData(courseId) {
  const response = await fetch(
    `https://coursehunter.net/api/v1/course/${courseId}/lessons`,
  );
  return await response.json();
}

async function coursehunterUtils_getVideoData() {
  const courseId =
    window.course_id ??
    document.querySelector('input[name="course_id"]')?.value;

  const courseData = window.lessons ?? (await getCourseData(courseId));

  const lessonId = parseInt(
    document.querySelector(".lessons-item_active")?.dataset?.index ?? 1,
  );

  const lessonData = courseData?.[lessonId - 1];

  const { file: videoUrl, duration } = lessonData;

  debug/* default */.A.log("coursehunter course data:", courseData);
  return {
    url: videoUrl,
    duration,
  };
}

/* harmony default export */ const coursehunterUtils = ({
  getVideoData: coursehunterUtils_getVideoData,
});

;// CONCATENATED MODULE: ./src/utils/courseraUtils.js




async function courseraUtils_getCourseData(courseId) {
  const response = await fetch(
    `https://www.coursera.org/api/onDemandCourses.v1/${courseId}`,
  );
  const resJSON = await response.json();
  return resJSON?.elements?.[0];
}

function getSubtitlesFileURL(captions, detectedLanguage, responseLang) {
  let subtitle = captions?.find(
    (caption) => langTo6391(caption.srclang) === detectedLanguage,
  );

  if (!subtitle) {
    subtitle =
      captions?.find(
        (caption) => langTo6391(caption.srclang) === responseLang,
      ) || captions?.[0];
  }

  return subtitle?.src;
}

function getVideoFileURL(sources) {
  // const source = sources?.find((src) => src.type === "video/webm" || src.type === "video/mp4",
  const source = sources?.find((src) => src.type === "video/mp4");

  return source?.src;
}

function courseraUtils_getPlayerData() {
  return courseraUtils_getPlayer()?.player;
}

function courseraUtils_getPlayer() {
  return document.querySelector(".vjs-v6");
}

// Get the video data from the player
async function courseraUtils_getVideoData(responseLang = "en") {
  let translationHelp = null;
  const data = courseraUtils_getPlayerData();

  const { duration } = data?.cache_ || {};
  const { courseId, tracks, sources } = data?.options_ || {};

  const videoURL = getVideoFileURL(sources);
  const courseData = await courseraUtils_getCourseData(courseId);

  let detectedLanguage = courseData?.primaryLanguageCodes?.[0];
  detectedLanguage = detectedLanguage ? langTo6391(detectedLanguage) : "en";

  if (!availableLangs.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }

  const subtitlesURL = getSubtitlesFileURL(
    tracks,
    detectedLanguage,
    responseLang,
  );
  console.log(`videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`);

  if (subtitlesURL && videoURL) {
    translationHelp = [
      {
        target: "video_file_url",
        targetUrl: videoURL,
      },
      {
        target: "subtitles_file_url",
        targetUrl: `https://www.coursera.org${subtitlesURL}`,
      },
    ];
  } else {
    console.error(
      `Failed to find subtitlesURL or videoURL. videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`,
    );
  }

  const videoData = {
    duration,
    detectedLanguage,
    translationHelp,
  };

  debug/* default */.A.log("coursera video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

/* harmony default export */ const courseraUtils = ({
  getPlayer: courseraUtils_getPlayer,
  getPlayerData: courseraUtils_getPlayerData,
  getVideoData: courseraUtils_getVideoData,
});

;// CONCATENATED MODULE: ./src/utils/udemyUtils.js





const udemyAPIURL = "https://www.udemy.com/api-2.0";
const accessTokenLife = 2_592_000_000; // 30 days

async function getCourseLang(courseId) {
  const response = await fetch(
    `${udemyAPIURL}/courses/${courseId}/?` +
      new URLSearchParams({
        "fields[course]": "locale",
        use_remote_version: "true",
        caching_intent: "true",
      }),
  );
  return await response.json();
}

function checkUdemyTokenExpire(expires) {
  return expires + accessTokenLife > new Date().getTime();
}

async function getLectureData(udemyData, courseId, lectureId) {
  // reference: https://greasyfork.org/ru/scripts/422576-udemy-subtitle-downloader-v3/code
  if (!checkUdemyTokenExpire(udemyData.expires) || !udemyData.accessToken) {
    console.error(localizationProvider.get("udemyAccessTokenExpired"));
    return undefined;
  }

  const bearerToken = `Bearer ${udemyData.accessToken}`;
  const response = await fetch(
    `${udemyAPIURL}/users/me/subscribed-courses/${courseId}/lectures/${lectureId}/?` +
      new URLSearchParams({
        "fields[lecture]": "asset",
        "fields[asset]": "length,media_sources,captions",
      }),
    {
      headers: {
        "x-udemy-authorization": bearerToken,
        authorization: bearerToken,
      },
    },
  );
  return await response.json();
}

function udemyUtils_getSubtitlesFileURL(captions, detectedLanguage, responseLang) {
  let subtitle = captions?.find(
    (caption) => langTo6391(caption.locale_id) === detectedLanguage,
  );

  if (!subtitle) {
    subtitle =
      captions?.find(
        (caption) => langTo6391(caption.locale_id) === responseLang,
      ) || captions?.[0];
  }

  return subtitle?.url;
}

function getVideoFileURLFromAPI(sources) {
  const source = sources?.find(
    (src) => src.type === "video/webm" || src.type === "video/mp4",
  );

  return source?.src;
}

function udemyUtils_getPlayerData() {
  return udemyUtils_getPlayer()?.player;
}

function getModuleData() {
  const moduleArgs = document.querySelector(
    ".ud-app-loader[data-module-id='course-taking']",
  )?.dataset?.moduleArgs;
  if (!moduleArgs) {
    console.error(localizationProvider.get("udemyModuleArgsNotFound"));
    return {};
  }
  return JSON.parse(moduleArgs);
}

function getLectureId() {
  return window.location.pathname.match(/learn\/lecture\/([^/]+)/)?.[1];
}

function udemyUtils_getPlayer() {
  return document.querySelector(".vjs-v7");
}

function getVideoURLFromPlayer() {
  const src = udemyUtils_getPlayer()?.querySelector("video")?.src;
  return src?.startsWith("blob:") ? false : src;
}

// Get the video data from the player
async function udemyUtils_getVideoData(udemyData, responseLang = "en") {
  let translationHelp = null;
  const data = udemyUtils_getPlayerData();
  debug/* default */.A.log("udemyData", udemyData);

  const moduleData = getModuleData();
  debug/* default */.A.log("moduleData: ", moduleData);

  const courseId = moduleData.courseId;
  const lectureId = getLectureId();
  debug/* default */.A.log(`CourseId: ${courseId}, lectureId: ${lectureId}`);

  const courseLang = await getCourseLang(courseId);
  debug/* default */.A.log("courseLang Data:", courseLang);
  const lectureData = await getLectureData(udemyData, courseId, lectureId);
  console.log("lecture Data:", lectureData);

  let detectedLanguage = courseLang?.locale?.locale;
  detectedLanguage = detectedLanguage ? langTo6391(detectedLanguage) : "en";

  if (!availableLangs.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }

  const duration = lectureData?.asset?.length || data?.cache_?.duration;
  const videoURL =
    getVideoFileURLFromAPI(lectureData?.asset?.media_sources) ||
    getVideoURLFromPlayer();
  const subtitlesURL = udemyUtils_getSubtitlesFileURL(
    lectureData?.asset?.captions,
    detectedLanguage,
    responseLang,
  );

  console.log(`videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`);

  if (subtitlesURL && videoURL) {
    translationHelp = [
      {
        target: "video_file_url",
        targetUrl: videoURL,
      },
      {
        target: "subtitles_file_url",
        targetUrl: subtitlesURL,
      },
    ];
  } else {
    console.error(
      `Failed to find subtitlesURL or videoURL. videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`,
    );
  }

  const videoData = {
    duration,
    detectedLanguage,
    translationHelp,
  };

  debug/* default */.A.log("udemy video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

/* harmony default export */ const udemyUtils = ({
  getPlayer: udemyUtils_getPlayer,
  getPlayerData: udemyUtils_getPlayerData,
  getVideoData: udemyUtils_getVideoData,
  getModuleData,
  getCourseLang,
  getLectureData,
});

;// CONCATENATED MODULE: ./src/utils/bannedvideoUtils.js


async function getVideoInfo(videoId) {
  return await fetch(`https://api.banned.video/graphql`, {
    method: "POST",
    body: JSON.stringify({
      operationName: "GetVideo",
      query: `query GetVideo($id: String!) {
          getVideo(id: $id) {
            ...DisplayVideoFields
            videoUrl: directUrl
            live
          }
        }

        fragment DisplayVideoFields on Video {
          title
          description: summary
          duration: videoDuration
        }`,
      variables: {
        id: videoId,
      },
    }),
    headers: {
      "User-Agent": "bannedVideoFrontEnd",
      "apollographql-client-name": "banned-web",
      "apollographql-client-version": "1.3",
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        data: {
          getVideo: {},
        },
      };
    });
}

async function bannedvideoUtils_getVideoData(videoId) {
  const videoData = await getVideoInfo(videoId);

  debug/* default */.A.log("banned.video video data:", videoData);

  const { videoUrl, duration, live, description, title } =
    videoData.data.getVideo;

  // TODO: Add detect language from title + description

  return {
    url: videoUrl,
    duration,
    live,
    title,
    description,
  };
}

/* harmony default export */ const bannedvideoUtils = ({
  getVideoData: bannedvideoUtils_getVideoData,
});

;// CONCATENATED MODULE: ./src/utils/crypto.js
async function getHmacSha1(hmacKey, salt) {
  const utf8Encoder = new TextEncoder("utf-8");
  salt = utf8Encoder.encode(salt);

  return window.crypto.subtle
    .importKey(
      "raw",
      utf8Encoder.encode(hmacKey),
      { name: "HMAC", hash: { name: "SHA-1" } },
      false,
      ["sign", "verify"],
    )
    .then((key) => window.crypto.subtle.sign("HMAC", key, salt))
    .then((arrayBuffer) =>
      btoa(String.fromCharCode(...new Uint8Array(arrayBuffer))),
    )
    .catch((err) => {
      console.error(err);
      return false;
    });
}

;// CONCATENATED MODULE: ./src/utils/weverseUtils.js



const API_ORIGIN = "https://global.apis.naver.com/weverse/wevweb"; // find as REACT_APP_API_GW_ORIGIN in main.<hash>.js
const API_APP_ID = "be4d79eb8fc7bd008ee82c8ec4ff6fd4"; // find as REACT_APP_API_APP_ID in main.<hash>.js
const API_HMAC_KEY = "1b9cb6378d959b45714bec49971ade22e6e24e42"; // find as c.active near `createHmac("sha1"...`  in main.<hash>.js

async function createHash(pathname) {
  // pathname example: /post/v1.0/post-3-142049908/preview?fieldSet=postForPreview...
  const timestamp = Date.now();

  let salt = pathname.substring(0, Math.min(255, pathname.length)) + timestamp;
  // example salt is /video/v1.1/vod/67134/inKey?gcc=RU&appId=be4d79eb8fc7bd008ee82c8ec4ff6fd4&language=en&os=WEB&platform=WEB&wpf=pc1707527163588

  const sign = await getHmacSha1(API_HMAC_KEY, salt);

  return {
    wmsgpad: timestamp,
    wmd: sign,
  };
}

function getURLData() {
  return {
    appId: API_APP_ID,
    language: "en",
    os: "WEB",
    platform: "WEB",
    wpf: "pc",
  };
}

async function getVideoPreview(postId) {
  const pathname =
    `/post/v1.0/post-${postId}/preview?` +
    new URLSearchParams({
      fieldSet: "postForPreview",
      ...getURLData(),
    }); // ! DON'T EDIT ME

  const hash = await createHash(pathname);

  return await fetch(API_ORIGIN + pathname + "&" + new URLSearchParams(hash))
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        extension: {
          video: {},
        },
      };
    });
}

async function getVideoInKey(videoId) {
  const pathname =
    `/video/v1.1/vod/${videoId}/inKey?` +
    new URLSearchParams({
      gcc: "RU",
      ...getURLData(),
    }); // ! DON'T EDIT ME
  const hash = await createHash(pathname);

  return await fetch(API_ORIGIN + pathname + "&" + new URLSearchParams(hash), {
    method: "POST",
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {};
    });
}

async function weverseUtils_getVideoInfo(infraVideoId, inkey, serviceId) {
  const timestamp = Date.now();
  return await fetch(
    `https://global.apis.naver.com/rmcnmv/rmcnmv/vod/play/v2.0/${infraVideoId}?` +
      new URLSearchParams({
        key: inkey,
        sid: serviceId,
        // pid: "863c411f-fbf0-4b67-868a-ef54427e5316", // возможно не нужен
        nonce: timestamp,
        devt: "html5_pc",
        prv: "N",
        aup: "N",
        stpb: "N",
        cpl: "en",
        env: "prod",
        lc: "en",
        adi: [
          {
            adSystem: null,
          },
        ],
        adu: "/",
      }),
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        videos: {
          list: [],
        },
      };
    });
}

function extractVideoInfo(videoList) {
  return videoList.find(
    (video) => video.useP2P === false && video.source.includes(".mp4"),
  );
}

async function weverseUtils_getVideoData() {
  // ! When translating using a regular link (like this https://weverse.io/aespa/live/3-142049908),
  // ! we will get an error, so we have to do this

  const postId = new URL(window.location).pathname.match(
    /([^/]+)\/(live|media)\/([^/]+)/,
  )?.[3];

  const videoPreview = await getVideoPreview(postId);
  debug/* default */.A.log("weverse video preview data:", videoPreview);

  const { videoId, serviceId, infraVideoId } = videoPreview.extension.video;

  if (!(videoId && serviceId && infraVideoId)) {
    return false;
  }

  const { inKey } = await getVideoInKey(videoId);
  debug/* default */.A.log("weverse video inKey data:", videoPreview);
  if (!inKey) {
    return false;
  }

  const videoData = await weverseUtils_getVideoInfo(infraVideoId, inKey, serviceId);
  debug/* default */.A.log("weverse video data:", videoData);

  const videoSource = extractVideoInfo(videoData.videos.list);
  if (!videoSource) {
    return false;
  }

  const { source: url, duration } = videoSource;
  return {
    url,
    duration,
  };
}

/* harmony default export */ const weverseUtils = ({
  getVideoData: weverseUtils_getVideoData,
});

;// CONCATENATED MODULE: ./src/config/sites.js


const sites = () => {
  return [
    {
      additionalData: "mobile",
      host: "youtube",
      url: "https://youtu.be/",
      match: /^m.youtube(-nocookie)?.com$/,
      selector: "shorts-video #player",
    },
    {
      additionalData: "mobile",
      host: "youtube",
      url: "https://youtu.be/",
      match: /^m.youtube(-nocookie)?.com$/,
      selector: ".player-container",
    },
    {
      host: "youtube",
      url: "https://youtu.be/",
      match: /^(www.)?youtube(-nocookie|kids)?.com$/,
      selector: ".html5-video-container:not(#inline-player *)",
    },
    {
      host: "tiktok",
      url: "https://www.tiktok.com/",
      match: /^(www.)?tiktok.com$/,
      selector: null,
    },
    {
      host: "proxytok",
      url: "https://www.tiktok.com/",
      match: sitesProxyTok,
      selector: ".column.has-text-centered",
    },
    {
      additionalData: "mobile",
      host: "twitch",
      url: "https://twitch.tv/",
      match: /^m.twitch.tv$/,
      selector: "main > div > section > div > div > div",
    },
    {
      host: "twitch",
      url: "https://twitch.tv/",
      match: (url) =>
        url.host.includes("clips.twitch.tv") ||
        (url.host.includes("player.twitch.tv") &&
          url.searchParams.get("channel") === null) ||
        (url.host.includes("twitch.tv") &&
          (url.pathname.startsWith("/videos") ||
            url.pathname.startsWith("/embed") ||
            url.pathname.includes("/clip"))),
      selector: ".video-ref",
    },
    {
      host: "xvideos",
      url: "https://www.xvideos.com/",
      match: /^www.xvideos.com$/,
      selector: ".video-bg-pic",
    },
    {
      host: "pornhub",
      url: "https://rt.pornhub.com/view_video.php?viewkey=",
      match: /^[a-z]+.pornhub.com$/,
      selector: ".mainPlayerDiv > .video-element-wrapper-js > div",
    },
    {
      additionalData: "embed",
      host: "pornhub",
      url: "https://rt.pornhub.com/view_video.php?viewkey=",
      match: (url) =>
        url.host.includes("pornhub.com") && url.pathname.startsWith("/embed/"),
      selector: "#player",
    },
    {
      additionalData: "mobile",
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^m.vk.(com|ru)$/,
      selector: "vk-video-player",
      shadowRoot: true,
    },
    {
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^(www.|m.)?vk.(com|ru)$/,
      selector: ".videoplayer_media",
    },
    {
      host: "vimeo",
      url: "https://vimeo.com/",
      match: /^vimeo.com$/,
      selector: ".player",
    },
    {
      additionalData: "embed",
      host: "vimeo",
      url: "https://player.vimeo.com/",
      match: /^player.vimeo.com$/,
      selector: ".player",
    },
    {
      host: "ok.ru",
      url: "https://ok.ru/",
      match: /^ok.ru$/,
      selector: ".html5-vpl_vid",
    },
    {
      host: "nine_gag",
      url: "https://9gag.com/gag/",
      match: /^9gag.com$/,
      selector: ".video-post",
    },
    {
      host: "coub",
      url: "https://coub.com/view/",
      match: /^coub.com$/,
      selector: ".viewer__player",
    },
    {
      host: "bitchute",
      url: "https://www.bitchute.com/video/",
      match: /^(www.)?bitchute.com$/,
      selector: "#player",
    },
    {
      host: "rutube",
      url: "https://rutube.ru/video/",
      match: /^rutube.ru$/,
      selector: ".video-player > div > div > div:nth-child(2)",
    },
    {
      additionalData: "embed",
      host: "rutube",
      url: "https://rutube.ru/video/",
      match: /^rutube.ru$/,
      selector: "#app > div > div",
    },
    {
      host: "bilibili",
      url: "https://www.bilibili.com/video/",
      match: /^(www|m|player).bilibili.com$/,
      selector: ".bpx-player-video-wrap",
    },
    {
      additionalData: "old", // /blackboard/webplayer/embed-old.html
      host: "bilibili",
      url: "https://www.bilibili.com/video/",
      match: /^(www|m).bilibili.com$/,
      selector: null,
    },
    {
      host: "twitter",
      url: "https://twitter.com/i/status/",
      match: /^twitter.com$/,
      selector: 'div[data-testid="videoComponent"] > div:nth-child(1) > div',
    },
    {
      host: "mail_ru",
      url: "https://my.mail.ru/",
      match: /^my.mail.ru$/,
      selector: "#b-video-wrapper",
    },
    {
      // ONLY IF YOU LOGINED TO COURSERA /learn/NAME/lecture/XXXX
      host: "coursera",
      url: "https://www.coursera.org/",
      match: /coursera.org$/,
      selector: ".vjs-v6",
    },
    {
      // ONLY IF YOU LOGINED TO UDEMY /course/NAME/learn/lecture/XXXX
      host: "udemy",
      url: "https://www.udemy.com",
      match: /udemy.com$/,
      selector:
        'div[data-purpose="curriculum-item-viewer-content"] > section > div > div > div > div:nth-of-type(2)',
    },
    {
      // Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
      host: "invidious",
      url: "https://youtu.be/",
      match: sitesInvidious,
      selector: "#player",
    },
    {
      // Sites host Piped. I tested the performance only on piped.video
      host: "piped",
      url: "https://youtu.be/",
      match: sitesPiped,
      selector: ".shaka-video-container",
    },
    {
      host: "rumble",
      url: "https://rumble.com", // <-- there should be no slash because we take the whole pathname
      match: /^rumble.com$/,
      selector: "#videoPlayer > .videoPlayer-Rumble-cls > div",
    },
    {
      host: "eporner",
      url: "https://www.eporner.com/",
      match: /^(www.)?eporner.com$/,
      selector: ".vjs-v7",
    },
    {
      host: "peertube",
      url: "tube.shanti.cafe", // This is a stub. The present value is set using window.location.origin. Check "src/index.js:videoObserver.onVideoAdded.addListener" to get more info
      match: sitesPeertube,
      selector: ".vjs-v7",
    },
    {
      host: "dailymotion",
      url: "https://www.dailymotion.com/video/", // This is a stub. The present value is set using window.location.origin. Check "src/index.js:videoObserver.onVideoAdded.addListener" to get more info
      match: /^geo.dailymotion.com$/,
      selector: ".player",
    },
    {
      host: "trovo",
      url: "https://trovo.live/s/",
      match: /^trovo.live$/,
      selector: ".player-video",
    },
    {
      host: "yandexdisk",
      url: "https://disk.yandex.ru/i/",
      match: /^disk.yandex.ru$/,
      selector: "yaplayertag > div:nth-of-type(1)",
    },
    {
      host: "coursehunter",
      url: "https://coursehunter.net/course/",
      match: /^coursehunter.net$/,
      selector: "#oframeplayer > pjsdiv:nth-of-type(1)",
    },
    {
      host: "googledrive",
      url: "https://drive.google.com/file/d/",
      match: /^youtube.googleapis.com$/,
      selector: ".html5-video-container",
    },
    {
      host: "bannedvideo",
      url: "https://banned.video/watch?id=",
      match: /^(www.)?banned.video$/,
      selector: ".vjs-v7",
    },
    {
      host: "facebook",
      url: "https://facebook.com", // <-- there should be no slash because we take the whole pathname
      match: (url) =>
        url.host.includes("facebook.com") && url.pathname.includes("/videos/"),
      selector: 'div[data-pagelet="WatchPermalinkVideo"]',
    },
    {
      additionalData: "reels",
      host: "facebook",
      url: "https://facebook.com", // <-- there should be no slash because we take the whole pathname
      match: (url) =>
        url.host.includes("facebook.com") && url.pathname.includes("/reel/"),
      selector: 'div[role="main"]',
    },
    {
      host: "weverse",
      url: "https://weverse.io/",
      match: /^weverse.io$/,
      selector: ".webplayer-internal-source-wrapper",
    },
    {
      host: "newgrounds",
      url: "https://www.newgrounds.com/",
      match: /^www.newgrounds.com$/,
      selector: ".ng-video-player",
    },
    {
      // TODO: Добавить поддержку tips и платных курсов
      host: "egghead",
      url: "https://egghead.io",
      match: /^egghead.io$/,
      selector: ".cueplayer-react-video-holder",
    },
    {
      host: "youku",
      // Что-то перекрывает кнопку и не дает её нажать
      url: "https://v.youku.com/",
      match: /^v.youku.com$/,
      selector: "#ykPlayer",
    },
    // Нужно куда-то заливать данные о плейлисте
    // {
    //   host: "epicgames",
    //   url: "https://dev.epicgames.com/community/learning/tutorials/",
    //   match: /^dev.epicgames.com$/,
    //   selector: "#vjs_video_3",
    // },
  ];
};

/* harmony default export */ const config_sites = (sites());

// EXTERNAL MODULE: ./node_modules/requestidlecallback-polyfill/index.js
var requestidlecallback_polyfill = __webpack_require__("./node_modules/requestidlecallback-polyfill/index.js");
;// CONCATENATED MODULE: ./src/utils/EventImpl.js
class EventImpl {
  constructor() {
    this.listeners = new Set();
  }
  hasListener(e) {
    return this.listeners.has(e);
  }
  dispatchToListener(handler, ...args) {
    try {
      handler(...args);
    } catch (exception) {
      console.error("[VOT]", exception);
    }
  }
  addListener(handler) {
    if (this.hasListener(handler)) {
      throw new Error("[VOT] The listener has already been added.");
    }
    this.listeners.add(handler);
  }
  removeListener(handler) {
    if (!this.hasListener(handler)) {
      throw new Error("[VOT] The listener has not been added yet.");
    }
    this.listeners.delete(handler);
  }
  dispatch(...args) {
    for (const handler of Array.from(this.listeners)) {
      this.dispatchToListener(handler, ...args);
    }
  }
}

;// CONCATENATED MODULE: ./src/utils/VideoObserver.js



function filterVideoNodes(nodes) {
  return Array.from(nodes).flatMap((node) => {
    if (node instanceof HTMLVideoElement) {
      return [node];
    }
    if (node instanceof HTMLElement) {
      return Array.from(node.querySelectorAll("video"));
    }
    return node.shadowRoot
      ? Array.from(node.shadowRoot.querySelectorAll("video"))
      : [];
  });
}

class VideoObserver {
  constructor() {
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.handleVideoAddedBound = this.handleVideoAdded.bind(this);
    this.handleVideoRemovedBound = this.handleVideoRemoved.bind(this);
    this.observer = new MutationObserver((mutationsList) => {
      window.requestIdleCallback(
        () => {
          mutationsList.forEach((mutation) => {
            if (mutation.type !== "childList") return;

            filterVideoNodes(mutation.addedNodes).forEach(
              this.handleVideoAddedBound,
            );
            filterVideoNodes(mutation.removedNodes).forEach(
              this.handleVideoRemovedBound,
            );
          });
        },
        { timeout: 1000 },
      );
    });
  }
  enable() {
    this.observer.observe(document, {
      childList: true,
      subtree: true,
    });
    document.querySelectorAll("video").forEach(this.handleVideoAddedBound);
  }
  disable() {
    this.observer.disconnect();
  }
  handleVideoAdded(video) {
    this.onVideoAdded.dispatch(video);
  }
  handleVideoRemoved(video) {
    if (!document.contains(video)) {
      this.onVideoRemoved.dispatch(video);
    }
  }
}

;// CONCATENATED MODULE: ./src/index.js































const browserInfo = es5.getParser(window.navigator.userAgent).getResult();

const sitesChromiumBlocked = [...sitesInvidious, ...sitesPiped];

const videoLipSyncEvents = [
  "playing",
  "ratechange",
  "play",
  "waiting",
  "pause",
];

function genOptionsByOBJ(obj, conditionString, validateLangs = false) {
  return obj.map((code) => ({
    label: `${validateLangs && !actualTTS.includes(code) ? "❌ " : ""}${
      localizationProvider.get("langs")[code] ?? code.toUpperCase()
    }`,
    value: code,
    selected: conditionString === code,
  }));
}

if (false) { var translationPanding; }

function translateVideo(
  url,
  duration,
  requestLang,
  responseLang,
  translationHelp,
  callback,
) {
  debug/* default */.A.log(
    `Translate video (url: ${url}, duration: ${duration}, requestLang: ${requestLang}, responseLang: ${responseLang})`,
  );

  debug/* default */.A.log("translationHelp:", translationHelp);

  if (false) {}

  translationPanding = true;

  rvt(
    url,
    duration,
    requestLang,
    responseLang,
    translationHelp,
    (success, response) => {
      translationPanding = false;

      debug/* default */.A.log("[exec callback] Requesting video translation");
      if (!success) {
        callback(false, localizationProvider.get("requestTranslationFailed"));
        return;
      }

      const translateResponse =
        yandexProtobuf.decodeTranslationResponse(response);
      console.log("[VOT] Translation response: ", translateResponse);

      switch (translateResponse.status) {
        case 0:
          callback(false, translateResponse.message);
          break;
        case 1:
          callback(
            !!translateResponse.url,
            translateResponse.url ||
              localizationProvider.get("audioNotReceived"),
          );
          break;
        case 2:
          callback(
            false,
            translateResponse.remainingTime
              ? secsToStrTime(translateResponse.remainingTime)
              : localizationProvider.get("translationTakeFewMinutes"),
          );
          break;
        case 3:
        case 6:
          /*
            status: 3
            Иногда, в ответе приходит статус код 3, но видео всё, так же, ожидает перевода.
            В конечном итоге, это занимает слишком много времени,
            как-будто сервер не понимает, что данное видео уже недавно было переведено
            и заместо возвращения готовой ссылки на перевод начинает переводить видео заново
            при чём у него это получается за очень длительное время.

            status: 6
            Случайно встретил 6 статус код при котором видео так же продолжается перевод,
            но после него ничего сверхъестественного не происходит.
            Он появляется при первом запросе с 17=1, но не исключено,
            что может появится и просто так
          */
          callback(false, localizationProvider.get("videoBeingTranslated"));
          break;
      }
    },
  );
}

function translateStream(url, requestLang, responseLang, callback) {
  debug/* default */.A.log(
    `Translate stream (url: ${url}, requestLang: ${requestLang}, responseLang: ${responseLang})`,
  );

  rst(
    url,
    requestLang,
    responseLang,
    (success, response) => {
      debug/* default */.A.log("[exec callback] Requesting stream translation");
      if (!success) {
        callback(false, localizationProvider.get("requestTranslationFailed"));
        return;
      }

      const streamResponse = yandexProtobuf.decodeStreamResponse(response);
      console.log("[VOT] Stream Translation response: ", streamResponse);

      switch (streamResponse.interval) {
        case 10:
          callback(
            false,
            streamResponse.interval,
            localizationProvider.get("translationTakeFewMinutes"),
          );
          break;
        case 20:
          callback(
            true,
            streamResponse.interval,
            streamResponse || localizationProvider.get("audioNotReceived"),
          );
          break;
        case 0:
          // stream removed or ended
          callback(
            false,
            streamResponse.interval,
            localizationProvider.get("streamNoConnectionToServer"),
          );
          break;
      }
    },
  );
}

class VideoHandler {
  // translate properties
  translateFromLang = "en"; // default language of video
  translateToLang = lang; // default language of audio response

  timer;

  ytData = "";
  videoData = "";
  firstPlay = true;
  audio = new Audio();
  hls = initHls(); // debug enabled only in dev mode

  videoTranslations = [];
  videoTranslationTTL = 7200;

  downloadTranslationUrl = null;
  downloadSubtitlesUrl = null;

  autoRetry;
  streamPing;
  volumeOnStart;
  tempOriginalVolume;
  tempVolume;

  subtitlesList = [];
  subtitlesListVideoId = null;

  videoLastSrcObject = null;

  constructor(video, container, site) {
    debug/* default */.A.log(
      "[VideoHandler] add video:",
      video,
      "container:",
      container,
      this,
    );
    this.video = video;
    this.container = container;
    this.site = site;
    this.handleSrcChangedBound = this.handleSrcChanged.bind(this);
    this.video.addEventListener("loadedmetadata", this.handleSrcChangedBound);
    this.stopTranslationBound = this.stopTranslation.bind(this);
    this.handleVideoEventBound = this.handleVideoEvent.bind(this);
    this.changeOpacityOnEventBound = this.changeOpacityOnEvent.bind(this);
    this.resetTimerBound = this.resetTimer.bind(this);
    this.init();
  }

  async init() {
    if (this.initialized) return;

    const audioProxyDefault =
      lang === "uk" && undefined === "cloudflare" ? 0 : 0;

    const dataPromises = {
      autoTranslate: votStorage.get("autoTranslate", 0, true),
      dontTranslateLanguage: votStorage.get("dontTranslateLanguage", lang),
      dontTranslateYourLang: votStorage.get("dontTranslateYourLang", 1, true),
      autoSetVolumeYandexStyle: votStorage.get(
        "autoSetVolumeYandexStyle",
        1,
        true,
      ),
      autoVolume: votStorage.get("autoVolume", config/* defaultAutoVolume */.JD, true),
      showVideoSlider: votStorage.get("showVideoSlider", 1, true),
      syncVolume: votStorage.get("syncVolume", 0, true),
      subtitlesMaxLength: votStorage.get("subtitlesMaxLength", 300, true),
      highlightWords: votStorage.get("highlightWords", 0, true),
      responseLanguage: votStorage.get("responseLanguage", lang),
      defaultVolume: votStorage.get("defaultVolume", 100, true),
      udemyData: votStorage.get("udemyData", { accessToken: "", expires: 0 }),
      audioProxy: votStorage.get("audioProxy", audioProxyDefault, true),
      showPiPButton: votStorage.get("showPiPButton", 0, true),
      translateAPIErrors: votStorage.get("translateAPIErrors", 1, true),
      translationService: votStorage.get(
        "translationService",
        config/* defaultTranslationService */.mE,
      ),
      detectService: votStorage.get("detectService", config/* defaultDetectService */.K2),
      m3u8ProxyHost: votStorage.get("m3u8ProxyHost", config/* m3u8ProxyHost */.se),
      proxyWorkerHost: votStorage.get("proxyWorkerHost", config/* proxyWorkerHost */.Pm),
    };

    const dataEntries = await Promise.all(
      Object.entries(dataPromises).map(async ([key, promise]) => [
        key,
        await promise,
      ]),
    );
    this.data = Object.fromEntries(dataEntries);

    this.videoData = await this.getVideoData();

    console.log("[db] data from db: ", this.data);

    this.subtitlesWidget = new SubtitlesWidget(
      this.video,
      this.container,
      this.site,
    );
    this.subtitlesWidget.setMaxLength(this.data.subtitlesMaxLength);
    this.subtitlesWidget.setHighlightWords(this.data.highlightWords);

    this.initUI();
    this.initUIEvents();

    const videoHasNoSource =
      !this.video.src && !this.video.currentSrc && !this.video.srcObject;
    this.votButton.container.hidden = videoHasNoSource;
    if (videoHasNoSource) {
      this.votMenu.container.hidden = true;
    }

    await this.updateSubtitles();
    await this.changeSubtitlesLang("disabled");
    this.setSelectMenuValues(
      this.videoData.detectedLanguage,
      this.data.responseLanguage ?? "ru",
    );
    this.translateToLang = this.data.responseLanguage ?? "ru";

    this.initExtraEvents();

    this.initialized = true;
  }

  transformBtn(status = "none", text) {
    this.votButton.container.dataset.status = status;
    this.votButton.label.innerHTML = text;
  }

  initUI() {
    // VOT Button
    {
      this.votButton = ui.createVOTButton(
        localizationProvider.get("translateVideo"),
      );
      this.container.appendChild(this.votButton.container);

      this.votButton.pipButton.hidden =
        !isPiPAvailable() || !this.data?.showPiPButton;
      this.votButton.separator2.hidden =
        !isPiPAvailable() || !this.data?.showPiPButton;

      this.votButton.container.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      });
    }

    // VOT Menu
    {
      this.votMenu = ui.createVOTMenu(localizationProvider.get("VOTSettings"));
      this.container.appendChild(this.votMenu.container);

      this.votDownloadButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"/></svg>`,
      );
      this.votDownloadButton.hidden = true;
      this.votMenu.headerContainer.appendChild(this.votDownloadButton);

      this.votDownloadSubtitlesButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 0 24 24"><path d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm2-4h8v-2H6v2Zm10 0h2v-2h-2v2ZM6 12h2v-2H6v2Zm4 0h8v-2h-8v2Z"/></svg>`,
      );
      this.votDownloadSubtitlesButton.hidden = true;
      this.votMenu.headerContainer.appendChild(this.votDownloadSubtitlesButton);

      this.votSettingsButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M555-80H405q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 5-28 1t-22-17L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q7-14 21.5-17.5T220-761l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-5 28-1t22 17l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v27q0 6.5-2 13.5l75 57q12 9 15 24t-5 28l-74 128q-8 13-22.5 17.5T738-199l-85-36q-11 8-23 15t-24 12l-12 93q-2 15-13 25t-26 10Zm-73-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Z"/></svg>`,
      );
      this.votMenu.headerContainer.appendChild(this.votSettingsButton);

      this.votTranslationLanguageSelect = ui.createVOTLanguageSelect({
        fromTitle:
          localizationProvider.get("langs")[this.video.detectedLanguage],
        fromDialogTitle: localizationProvider.get("videoLanguage"),
        fromItems: [
          {
            label: localizationProvider.get("langs")["auto"],
            value: "auto",
            selected: "",
          },
          ...genOptionsByOBJ(availableLangs, this.videoData.detectedLanguage),
        ],
        fromOnSelectCB: async (e) => {
          debug/* default */.A.log(
            "[fromOnSelectCB] select from language",
            e.target.dataset.votValue,
          );
          this.videoData = await this.getVideoData();
          this.setSelectMenuValues(
            e.target.dataset.votValue,
            this.videoData.responseLanguage,
          );
        },
        toTitle: localizationProvider.get("langs")[this.video.responseLanguage],
        toDialogTitle: localizationProvider.get("translationLanguage"),
        toItems: [
          ...genOptionsByOBJ(
            availableLangs,
            this.videoData.responseLanguage,
            true,
          ),
          {
            label: "─────────",
            value: "separator",
            disabled: true,
          },
          ...genOptionsByOBJ(
            additionalTTS,
            this.videoData.responseLanguage,
            true,
          ),
        ],
        toOnSelectCB: async (e) => {
          const newLang = e.target.dataset.votValue;
          debug/* default */.A.log("[toOnSelectCB] select to language", newLang);
          this.data.responseLanguage = this.translateToLang = newLang;
          await votStorage.set("responseLanguage", this.data.responseLanguage);
          debug/* default */.A.log(
            "Response Language value changed. New value: ",
            this.data.responseLanguage,
          );
          this.videoData = await this.getVideoData();
          this.setSelectMenuValues(
            this.videoData.detectedLanguage,
            this.data.responseLanguage,
          );
        },
      });

      this.votMenu.bodyContainer.appendChild(
        this.votTranslationLanguageSelect.container,
      );

      this.votSubtitlesSelect = ui.createVOTSelect(
        localizationProvider.get("VOTSubtitlesDisabled"),
        localizationProvider.get("VOTSubtitles"),
        [
          {
            label: localizationProvider.get("VOTSubtitlesDisabled"),
            value: "disabled",
            selected: true,
            disabled: false,
          },
        ],
        {
          onSelectCb: async (e) => {
            await this.changeSubtitlesLang(e.target.dataset.votValue);
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTSubtitles"),
          ),
        },
      );

      this.votMenu.bodyContainer.appendChild(this.votSubtitlesSelect.container);

      this.votVideoVolumeSlider = ui.createSlider(
        `${localizationProvider.get("VOTVolume")}: <strong>${
          this.getVideoVolume() * 100
        }%</strong>`,
        this.getVideoVolume() * 100,
      );
      this.votVideoVolumeSlider.container.hidden =
        this.data.showVideoSlider !== 1 ||
        this.votButton.container.dataset.status !== "success";
      this.votMenu.bodyContainer.appendChild(
        this.votVideoVolumeSlider.container,
      );

      this.votVideoTranslationVolumeSlider = ui.createSlider(
        `${localizationProvider.get("VOTVolumeTranslation")}: <strong>${
          this.data?.defaultVolume ?? 100
        }%</strong>`,
        this.data?.defaultVolume ?? 100,
      );
      this.votVideoTranslationVolumeSlider.container.hidden =
        this.votButton.container.dataset.status !== "success";
      this.votMenu.bodyContainer.appendChild(
        this.votVideoTranslationVolumeSlider.container,
      );

      this.votMenu.container.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      });
    }

    // VOT Settings
    {
      this.votSettingsDialog = ui.createDialog(
        localizationProvider.get("VOTSettings"),
      );
      document.documentElement.appendChild(this.votSettingsDialog.container);

      this.votTranslationHeader = ui.createHeader(
        localizationProvider.get("translationSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votTranslationHeader,
      );

      this.votAutoTranslateCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTAutoTranslate"),
        this.data?.autoTranslate ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoTranslateCheckbox.container,
      );

      this.votDontTranslateYourLangSelect = ui.createVOTSelect(
        localizationProvider.get("langs")[
          votStorage.syncGet("dontTranslateLanguage", lang)
        ],
        localizationProvider.get("VOTDontTranslateYourLang"),
        genOptionsByOBJ(
          availableLangs,
          votStorage.syncGet("dontTranslateLanguage", lang),
        ),
        {
          onSelectCb: async (e) => {
            this.data.dontTranslateLanguage = e.target.dataset.votValue;
            await votStorage.set(
              "dontTranslateLanguage",
              this.data.dontTranslateLanguage,
            );
          },
          labelElement: ui.createCheckbox(
            localizationProvider.get("VOTDontTranslateYourLang"),
            this.data?.dontTranslateYourLang ?? true,
          ).container,
        },
      );

      this.votSettingsDialog.bodyContainer.appendChild(
        this.votDontTranslateYourLangSelect.container,
      );

      this.votAutoSetVolumeCheckbox = ui.createCheckbox(
        `${localizationProvider.get("VOTAutoSetVolume")}`,
        this.data?.autoSetVolumeYandexStyle ?? true,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoSetVolumeCheckbox.container,
      );
      this.votAutoSetVolumeSlider = ui.createSlider(
        `<strong>${(this.data?.autoVolume ?? config/* defaultAutoVolume */.JD) * 100}%</strong>`,
        (this.data?.autoVolume ?? config/* defaultAutoVolume */.JD) * 100,
        0,
        100,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoSetVolumeSlider.container,
      );

      this.votShowVideoSliderCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTShowVideoSlider"),
        this.data?.showVideoSlider ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votShowVideoSliderCheckbox.container,
      );

      // udemy only
      this.votUdemyDataTextfield = ui.createTextfield(
        localizationProvider.get("VOTUdemyData"),
        this.data?.udemyData?.accessToken ?? "",
      );
      this.votUdemyDataTextfield.container.hidden = this.site.host !== "udemy";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votUdemyDataTextfield.container,
      );

      // youtube only
      this.votSyncVolumeCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTSyncVolume"),
        this.data?.syncVolume ?? false,
      );
      this.votSyncVolumeCheckbox.container.hidden =
        !["youtube", "googledrive"].includes(this.site.host) ||
        this.site.additionalData === "mobile";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSyncVolumeCheckbox.container,
      );

      this.votTranslationServiceSelect = ui.createVOTSelect(
        votStorage.syncGet("translationService", config/* defaultTranslationService */.mE),
        localizationProvider.get("VOTTranslationService"),
        genOptionsByOBJ(
          translateServices,
          votStorage.syncGet("translationService", config/* defaultTranslationService */.mE),
        ),
        {
          onSelectCb: async (e) => {
            this.data.translationService = e.target.dataset.votValue;
            await votStorage.set(
              "translationService",
              this.data.translationService,
            );
          },
          labelElement: ui.createCheckbox(
            localizationProvider.get("VOTTranslateAPIErrors"),
            this.data.translateAPIErrors ?? true,
          ).container,
        },
      );
      this.votTranslationServiceSelect.container.hidden =
        localizationProvider.lang === "ru";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votTranslationServiceSelect.container,
      );

      this.votDetectServiceSelect = ui.createVOTSelect(
        votStorage.syncGet("detectService", config/* defaultDetectService */.K2),
        localizationProvider.get("VOTDetectService"),
        genOptionsByOBJ(
          detectServices,
          votStorage.syncGet("detectService", config/* defaultDetectService */.K2),
        ),
        {
          onSelectCb: async (e) => {
            this.data.detectService = e.target.dataset.votValue;
            await votStorage.set("detectService", this.data.detectService);
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTDetectService"),
          ),
        },
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votDetectServiceSelect.container,
      );

      // SUBTITLES

      this.votSubtitlesHeader = ui.createHeader(
        localizationProvider.get("subtitlesSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(this.votSubtitlesHeader);

      this.votSubtitlesMaxLengthSlider = ui.createSlider(
        `${localizationProvider.get("VOTSubtitlesMaxLength")}: <strong>${
          this.data?.subtitlesMaxLength ?? 300
        }</strong>`,
        this.data?.subtitlesMaxLength ?? 300,
        50,
        300,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSubtitlesMaxLengthSlider.container,
      );

      this.votSubtitlesHighlightWordsCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTHighlightWords"),
        this.data?.highlightWords ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSubtitlesHighlightWordsCheckbox.container,
      );

      // PROXY

      this.votProxyHeader = ui.createHeader(
        localizationProvider.get("proxySettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(this.votProxyHeader);

      this.votM3u8ProxyHostTextfield = ui.createTextfield(
        localizationProvider.get("VOTM3u8ProxyHost"),
        this.data?.m3u8ProxyHost,
        config/* m3u8ProxyHost */.se,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votM3u8ProxyHostTextfield.container,
      );

      // cf version only
      this.votProxyWorkerHostTextfield = ui.createTextfield(
        localizationProvider.get("VOTProxyWorkerHost"),
        this.data?.proxyWorkerHost,
        config/* proxyWorkerHost */.Pm,
      );
      this.votProxyWorkerHostTextfield.container.hidden =
        undefined !== "cloudflare";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votProxyWorkerHostTextfield.container,
      );

      // cf version only
      this.votAudioProxyCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTAudioProxy"),
        this.data?.audioProxy ?? false,
      );
      this.votAudioProxyCheckbox.container.hidden = undefined !== "cloudflare";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAudioProxyCheckbox.container,
      );

      // ABOUT

      this.votAboutHeader = ui.createHeader(localizationProvider.get("about"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votAboutHeader);

      this.votLanguageSelect = ui.createVOTSelect(
        localizationProvider.get("langs")[
          votStorage.syncGet("locale-lang-override", "auto")
        ],
        localizationProvider.get("VOTMenuLanguage"),
        genOptionsByOBJ(
          availableLocales,
          votStorage.syncGet("locale-lang-override", "auto"),
        ),
        {
          onSelectCb: async (e) => {
            await votStorage.set(
              "locale-lang-override",
              e.target.dataset.votValue,
            );
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTMenuLanguage"),
          ),
        },
      );

      this.votSettingsDialog.bodyContainer.appendChild(
        this.votLanguageSelect.container,
      );

      this.votShowPiPButtonCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTShowPiPButton"),
        this.data?.showPiPButton ?? false,
      );
      this.votShowPiPButtonCheckbox.container.hidden = !isPiPAvailable();
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votShowPiPButtonCheckbox.container,
      );

      this.votVersionInfo = ui.createInformation(
        `${localizationProvider.get("VOTVersion")}:`,
         false
          ? 0
          : GM_info.script.version,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votVersionInfo.container,
      );

      this.votAuthorsInfo = ui.createInformation(
        `${localizationProvider.get("VOTAuthors")}:`,
        GM_info.script.author,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAuthorsInfo.container,
      );

      this.votLoaderInfo = ui.createInformation(
        `${localizationProvider.get("VOTLoader")}:`,
        `${GM_info.scriptHandler} v${GM_info.version}`,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votLoaderInfo.container,
      );

      this.votBrowserInfo = ui.createInformation(
        `${localizationProvider.get("VOTBrowser")}:`,
        `${browserInfo.browser.name} ${browserInfo.browser.version} (${browserInfo.os.name} ${browserInfo.os.version})`,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votBrowserInfo.container,
      );

      this.votResetSettingsButton = ui.createButton(
        localizationProvider.get("resetSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votResetSettingsButton,
      );
    }
  }

  initUIEvents() {
    // VOT Button
    {
      this.votButton.translateButton.addEventListener("click", () => {
        (async () => {
          if (this.audio.src) {
            debug/* default */.A.log("[click translationBtn] audio.src is not empty");
            this.stopTranslate();
            return;
          }

          if (this.hls.url) {
            debug/* default */.A.log("[click translationBtn] hls is not empty");
            this.stopTranslate();
            return;
          }

          try {
            debug/* default */.A.log("[click translationBtn] trying execute translation");

            if (!this.videoData.videoId) {
              throw new VOTLocalizedError("VOTNoVideoIDFound");
            }

            await this.translateExecutor(this.videoData.videoId);
          } catch (err) {
            console.error("[VOT]", err);
            if (err?.name === "VOTLocalizedError") {
              this.transformBtn("error", err.localizedMessage);
            } else {
              this.transformBtn("error", err);
            }
          }
        })();
      });

      this.votButton.pipButton.addEventListener("click", () => {
        (async () => {
          if (this.video !== document.pictureInPictureElement) {
            await this.video.requestPictureInPicture();
          } else {
            await document.exitPictureInPicture();
          }
        })();
      });

      this.votButton.menuButton.addEventListener("click", () => {
        this.votMenu.container.hidden = !this.votMenu.container.hidden;
      });
    }

    // VOT Menu
    {
      this.votDownloadButton.addEventListener("click", () => {
        if (this.downloadTranslationUrl) {
          window.open(this.downloadTranslationUrl, "_blank").focus();
        }
      });

      this.votDownloadSubtitlesButton.addEventListener("click", () => {
        console.log(this.downloadSubtitlesUrl);
        if (this.downloadSubtitlesUrl) {
          window.open(this.downloadSubtitlesUrl, "_blank").focus();
        }
      });

      this.votSettingsButton.addEventListener("click", () => {
        this.votSettingsDialog.container.hidden =
          !this.votSettingsDialog.container.hidden;
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          document.webkitExitFullscreen && document.webkitExitFullscreen();
          document.exitFullscreen && document.exitFullscreen();
        }
      });

      this.votVideoVolumeSlider.input.addEventListener("input", (e) => {
        const value = Number(e.target.value);
        this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
          `${value}%`;
        this.setVideoVolume(value / 100);
        if (this.data.syncVolume === 1) {
          const translateVolume = Number(
            this.votVideoTranslationVolumeSlider.input.value,
          );
          const finalValue = syncVolume(
            this.audio,
            value,
            translateVolume,
            this.tempOriginalVolume,
          );

          this.votVideoTranslationVolumeSlider.input.value = finalValue;
          this.votVideoTranslationVolumeSlider.label.querySelector(
            "strong",
          ).innerHTML = `${finalValue}%`;
          ui.updateSlider(this.votVideoTranslationVolumeSlider.input);

          this.tempVolume = finalValue;
          this.tempOriginalVolume = value;
        }
      });

      this.votVideoTranslationVolumeSlider.input.addEventListener(
        "input",
        (e) => {
          (async () => {
            this.data.defaultVolume = Number(e.target.value);
            await votStorage.set("defaultVolume", this.data.defaultVolume);
            this.votVideoTranslationVolumeSlider.label.querySelector(
              "strong",
            ).innerHTML = `${this.data.defaultVolume}%`;
            this.audio.volume = this.data.defaultVolume / 100;
            if (this.data.syncVolume === 1) {
              this.syncTranslationWithVideo(this.data.defaultVolume);
            }
          })();
        },
      );
    }

    // VOT Settings
    {
      this.votAutoTranslateCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.autoTranslate = Number(e.target.checked);
          await votStorage.set("autoTranslate", this.data.autoTranslate);
          debug/* default */.A.log(
            "autoTranslate value changed. New value: ",
            this.data.autoTranslate,
          );
        })();
      });

      this.votDontTranslateYourLangSelect.labelElement.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.dontTranslateYourLang = Number(e.target.checked);
            await votStorage.set(
              "dontTranslateYourLang",
              this.data.dontTranslateYourLang,
            );
            debug/* default */.A.log(
              "dontTranslateYourLang value changed. New value: ",
              this.data.dontTranslateYourLang,
            );
          })();
        },
      );

      this.votAutoSetVolumeCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.autoSetVolumeYandexStyle = Number(e.target.checked);
          await votStorage.set(
            "autoSetVolumeYandexStyle",
            this.data.autoSetVolumeYandexStyle,
          );
          debug/* default */.A.log(
            "autoSetVolumeYandexStyle value changed. New value: ",
            this.data.autoSetVolumeYandexStyle,
          );
        })();
      });

      this.votAutoSetVolumeSlider.input.addEventListener("input", (e) => {
        (async () => {
          const presetAutoVolume = Number(e.target.value);
          this.data.autoVolume = (presetAutoVolume / 100).toFixed(2);
          await votStorage.set("autoVolume", this.data.autoVolume);
          this.votAutoSetVolumeSlider.label.querySelector("strong").innerHTML =
            `${presetAutoVolume}%`;
        })();
      });

      this.votShowVideoSliderCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.showVideoSlider = Number(e.target.checked);
          await votStorage.set("showVideoSlider", this.data.showVideoSlider);
          debug/* default */.A.log(
            "showVideoSlider value changed. New value: ",
            this.data.showVideoSlider,
          );
          this.votVideoVolumeSlider.container.hidden =
            this.data.showVideoSlider !== 1 ||
            this.votButton.container.dataset.status !== "success";
        })();
      });

      this.votUdemyDataTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.udemyData = {
            accessToken: e.target.value,
            expires: new Date().getTime(),
          };
          await votStorage.set("udemyData", this.data.udemyData);
          debug/* default */.A.log(
            "udemyData value changed. New value: ",
            this.data.udemyData,
          );
          window.location.reload();
        })();
      });

      this.votSyncVolumeCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.syncVolume = Number(e.target.checked);
          await votStorage.set("syncVolume", this.data.syncVolume);
          debug/* default */.A.log(
            "syncVolume value changed. New value: ",
            this.data.syncVolume,
          );
        })();
      });

      this.votTranslationServiceSelect.labelElement.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.translateAPIErrors = Number(e.target.checked);
            await votStorage.set(
              "translateAPIErrors",
              this.data.translateAPIErrors,
            );
            debug/* default */.A.log(
              "translateAPIErrors value changed. New value: ",
              this.data.translateAPIErrors,
            );
          })();
        },
      );

      // SUBTITLES

      this.votSubtitlesMaxLengthSlider.input.addEventListener("input", (e) => {
        (async () => {
          this.data.subtitlesMaxLength = Number(e.target.value);
          await votStorage.set(
            "subtitlesMaxLength",
            this.data.subtitlesMaxLength,
          );
          this.votSubtitlesMaxLengthSlider.label.querySelector(
            "strong",
          ).innerHTML = `${this.data.subtitlesMaxLength}`;
          this.subtitlesWidget.setMaxLength(this.data.subtitlesMaxLength);
        })();
      });

      this.votSubtitlesHighlightWordsCheckbox.input.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.highlightWords = Number(e.target.checked);
            await votStorage.set("highlightWords", this.data.highlightWords);
            debug/* default */.A.log(
              "highlightWords value changed. New value: ",
              this.data.highlightWords,
            );
            this.subtitlesWidget.setHighlightWords(this.data.highlightWords);
          })();
        },
      );

      this.votShowPiPButtonCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.showPiPButton = Number(e.target.checked);
          await votStorage.set("showPiPButton", this.data.showPiPButton);
          debug/* default */.A.log(
            "showPiPButton value changed. New value: ",
            this.data.showPiPButton,
          );
          this.votButton.pipButton.hidden =
            !isPiPAvailable() || !this.data.showPiPButton;
          this.votButton.separator2.hidden =
            !isPiPAvailable() || !this.data.showPiPButton;
        })();
      });

      // PROXY

      this.votM3u8ProxyHostTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.m3u8ProxyHost = e.target.value || config/* m3u8ProxyHost */.se;
          await votStorage.set("m3u8ProxyHost", this.data.m3u8ProxyHost);
          debug/* default */.A.log(
            "m3u8ProxyHost value changed. New value: ",
            this.data.m3u8ProxyHost,
          );
        })();
      });

      this.votProxyWorkerHostTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.proxyWorkerHost = e.target.value || config/* proxyWorkerHost */.Pm;
          await votStorage.set("proxyWorkerHost", this.data.proxyWorkerHost);
          debug/* default */.A.log(
            "proxyWorkerHost value changed. New value: ",
            this.data.proxyWorkerHost,
          );
          window.location.reload();
        })();
      });

      this.votAudioProxyCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.audioProxy = Number(e.target.checked);
          await votStorage.set("audioProxy", this.data.audioProxy);
          debug/* default */.A.log(
            "audioProxy value changed. New value: ",
            this.data.audioProxy,
          );
        })();
      });

      this.votResetSettingsButton.addEventListener("click", () => {
        (async () => {
          localizationProvider.reset();
          const valuesForClear = await votStorage.list();
          valuesForClear
            .filter((v) => !localizationProvider.gmValues.includes(v))
            .forEach((v) => votStorage.syncDelete(v));
          window.location.reload();
        })();
      });
    }
  }

  releaseExtraEvents() {
    clearInterval(this.resizeInterval);
    this.resizeObserver?.disconnect();
    if (
      ["youtube", "googledrive"].includes(this.site.host) &&
      this.site.additionalData !== "mobile"
    ) {
      this.syncVolumeObserver?.disconnect();
    }

    this.extraEvents?.forEach((e) => {
      e.element.removeEventListener(e.event, e.handler);
    });
  }

  initExtraEvents() {
    this.extraEvents = [];

    const addExtraEventListener = (element, event, handler) => {
      this.extraEvents.push({
        element,
        event,
        handler,
      });
      element.addEventListener(event, handler);
    };

    const addExtraEventListeners = (element, events, handler) => {
      events.forEach((event) => {
        addExtraEventListener(element, event, handler);
      });
    };

    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((e) => {
        this.votMenu.container.setAttribute(
          "style",
          `--vot-container-height: ${e.contentRect.height}px`,
        );
      });
    });
    this.resizeObserver.observe(this.video);
    this.votMenu.container.setAttribute(
      "style",
      `--vot-container-height: ${this.video.getBoundingClientRect().height}px`,
    );
    this.resizeInterval = setInterval(() => {
      this.votMenu.container.setAttribute(
        "style",
        `--vot-container-height: ${
          this.video.getBoundingClientRect().height
        }px`,
      );
    }, 500);
    // Sync volume slider with original video (youtube only)
    if (
      ["youtube", "googledrive"].includes(this.site.host) &&
      this.site.additionalData !== "mobile"
    ) {
      this.syncVolumeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "aria-valuenow"
          ) {
            this.syncVideoVolumeSlider();
          }
        });
      });

      const ytpVolumePanel = document.querySelector(".ytp-volume-panel");
      if (ytpVolumePanel) {
        this.syncVolumeObserver.observe(ytpVolumePanel, {
          attributes: true,
          childList: false,
          subtree: true,
          attributeOldValue: true,
        });
      }
    }

    document.addEventListener("click", (event) => {
      const e = event.target;

      const button = this.votButton.container;
      const menu = this.votMenu.container;
      const container = this.container;
      const settings = this.votSettingsDialog.container;
      const tempDialog = document.querySelector(".vot-dialog-temp");

      const isButton = button.contains(e);
      const isMenu = menu.contains(e);
      const isVideo = container.contains(e);
      const isSettings = settings.contains(e);
      const isTempDialog = tempDialog?.contains(e) ?? false;

      debug/* default */.A.log(
        `[document click] ${isButton} ${isMenu} ${isVideo} ${isSettings} ${isTempDialog}`,
      );
      if (!(!isButton && !isMenu && !isSettings && !isTempDialog)) return;
      if (!isVideo) this.logout(0);

      this.votMenu.container.hidden = true;
    });

    let eContainer;
    if (this.site.host === "pornhub") {
      if (this.site.additionalData === "embed") {
        eContainer = document.querySelector("#player");
      } else {
        // const e = document.querySelector(".original.mainPlayerDiv > video-element > div");
        eContainer = this.container.querySelector(
          ".video-element-wrapper-js > div",
        );
      }
    } else if (this.site.host === "twitter") {
      eContainer = document.querySelector('div[data-testid="videoPlayer"]');
    } else if (this.site.host === "yandexdisk") {
      eContainer = document.querySelector(".video-player__player");
    } else {
      eContainer = this.container;
    }
    if (eContainer)
      addExtraEventListeners(
        eContainer,
        ["mousemove", "mouseout"],
        this.resetTimerBound,
      );

    addExtraEventListener(
      this.votButton.container,
      "mousemove",
      this.changeOpacityOnEventBound,
    );
    addExtraEventListener(
      this.votMenu.container,
      "mousemove",
      this.changeOpacityOnEventBound,
    );
    addExtraEventListeners(
      document,
      ["touchstart", "touchmove", "touchend"],
      this.changeOpacityOnEventBound,
    );

    // fix youtube hold to fast
    addExtraEventListener(this.votButton.container, "mousedown", (e) => {
      e.stopImmediatePropagation();
    });
    addExtraEventListener(this.votMenu.container, "mousedown", (e) => {
      e.stopImmediatePropagation();
    });

    // fix draggable menu in youtube (#394, #417)
    if (this.site.host === "youtube") {
      this.container.draggable = false;
    }

    addExtraEventListener(this.video, "emptied", () => {
      debug/* default */.A.log("lipsync mode is emptied");
      this.stopTranslation();
    });

    addExtraEventListener(this.video, "progress", async () => {
      if (
        !(this.firstPlay && this.data.autoTranslate === 1) ||
        getVideoId(this.site.host, this.video) !== this.videoData.videoId
      ) {
        return;
      }

      if (!this.videoData.videoId) {
        throw new VOTLocalizedError("VOTNoVideoIDFound");
      }

      try {
        this.firstPlay = false;
        await this.translateExecutor(this.videoData.videoId);
      } catch (err) {
        console.error("[VOT]", err);
        if (err?.name === "VOTLocalizedError") {
          this.transformBtn("error", err.localizedMessage);
        } else {
          this.transformBtn("error", err);
        }
        this.firstPlay = false;
      }
    });
  }

  logout(n) {
    if (!this.votMenu.container.hidden) return;
    this.votButton.container.style.opacity = n;
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.logout(1);
    this.timer = setTimeout(() => {
      this.logout(0);
    }, 1000);
  }

  changeOpacityOnEvent(event) {
    clearTimeout(this.timer);
    this.logout(1);
    event.stopPropagation();
  }

  async changeSubtitlesLang(subs) {
    debug/* default */.A.log("[onchange] subtitles", subs);
    this.votSubtitlesSelect.setSelected(subs);
    if (subs === "disabled") {
      this.votSubtitlesSelect.setTitle(
        localizationProvider.get("VOTSubtitlesDisabled"),
      );
      this.subtitlesWidget.setContent(null);
      this.votDownloadSubtitlesButton.hidden = true;
      this.downloadSubtitlesUrl = null;
    } else {
      const fetchedSubs = await fetchSubtitles(
        this.subtitlesList.at(parseInt(subs)),
      );
      this.subtitlesWidget.setContent(fetchedSubs);
      this.votDownloadSubtitlesButton.hidden = false;
      this.downloadSubtitlesUrl = this.subtitlesList.at(parseInt(subs))?.url;
    }
  }

  async updateSubtitlesLangSelect() {
    const updatedOptions = [
      {
        label: localizationProvider.get("VOTSubtitlesDisabled"),
        value: "disabled",
        selected: true,
        disabled: false,
      },
      ...this.subtitlesList.map((s, idx) => ({
        label:
          (localizationProvider.get("langs")[s.language] ??
            s.language.toUpperCase()) +
          (s.translatedFromLanguage
            ? ` ${localizationProvider.get("VOTTranslatedFrom")} ${
                localizationProvider.get("langs")[s.translatedFromLanguage] ??
                s.translatedFromLanguage.toUpperCase()
              }`
            : "") +
          (s.source !== "yandex" ? ` ${s.source}` : "") +
          (s.isAutoGenerated
            ? ` (${localizationProvider.get("VOTAutogenerated")})`
            : ""),
        value: idx,
        selected: false,
        disabled: false,
      })),
    ];

    this.votSubtitlesSelect.updateItems(updatedOptions);

    await this.changeSubtitlesLang(updatedOptions[0].value);
  }

  async updateSubtitles() {
    await this.changeSubtitlesLang("disabled");

    if (!this.videoData.videoId) {
      console.error(
        `[VOT] ${localizationProvider.getDefault("VOTNoVideoIDFound")}`,
      );
      this.subtitlesList = [];
      this.subtitlesListVideoId = null;
      await this.updateSubtitlesLangSelect();
      return;
    }

    if (this.subtitlesListVideoId === this.videoData.videoId) {
      return;
    }

    this.subtitlesList = await subtitles_getSubtitles(
      this.site,
      this.videoData.videoId,
      this.videoData.detectedLanguage,
    );
    if (!this.subtitlesList) {
      await this.changeSubtitlesLang("disabled");
    } else {
      this.subtitlesListVideoId = this.videoData.videoId;
    }
    await this.updateSubtitlesLangSelect();
  }

  // Get video volume in 0.00-1.00 format
  getVideoVolume() {
    let videoVolume = this.video?.volume;
    if (["youtube", "googledrive"].includes(this.site.host)) {
      videoVolume = youtubeUtils.getVideoVolume() || videoVolume;
    }
    return videoVolume;
  }

  // Set video volume in 0.00-1.00 format
  setVideoVolume(volume) {
    if (["youtube", "googledrive"].includes(this.site.host)) {
      const videoVolume = youtubeUtils.setVideoVolume(volume);
      if (videoVolume) {
        return;
      }
    }
    this.video.volume = volume;
  }

  // Sync volume slider with original video (youtube only)
  syncVideoVolumeSlider() {
    const newSlidersVolume = Math.round(this.getVideoVolume() * 100);

    this.votVideoVolumeSlider.input.value = newSlidersVolume;
    this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
      `${newSlidersVolume}%`;
    ui.updateSlider(this.votVideoVolumeSlider.input);

    if (this.data.syncVolume === 1) {
      this.tempOriginalVolume = Number(newSlidersVolume);
    }
  }

  setSelectMenuValues(from, to) {
    this.votTranslationLanguageSelect.fromSelect.setTitle(
      localizationProvider.get("langs")[from],
    );
    this.votTranslationLanguageSelect.toSelect.setTitle(
      localizationProvider.get("langs")[to],
    );
    this.votTranslationLanguageSelect.fromSelect.setSelected(from);
    this.votTranslationLanguageSelect.toSelect.setSelected(to);
    console.log(`[VOT] Set translation from ${from} to ${to}`);
    this.videoData.detectedLanguage = from;
    this.videoData.responseLanguage = to;
  }

  // A helper function to sync translation volume with video volume
  syncTranslationWithVideo(translationValue) {
    // Get the video volume value
    const videoVolume = Number(this.votVideoVolumeSlider.input.value);

    // Calculate the synced video volume based on the translation volume
    const finalValue = syncVolume(
      this.video,
      translationValue,
      videoVolume,
      this.tempVolume,
    );

    // Set the video volume slider value to the synced value
    this.votVideoVolumeSlider.input.value = finalValue;
    this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
      `${finalValue}%`;
    ui.updateSlider(this.votVideoVolumeSlider.input);

    // Update the temp variables for future syncing
    this.tempOriginalVolume = finalValue;
    this.tempVolume = translationValue;
  }

  async getVideoData() {
    const videoData = {
      // ! should be null for ALL websites except coursera and udemy !
      // else use direct link: `{url: xxx.mp4}`
      translationHelp: null,
      isStream: false, // by default, we request the translation of the video
      duration: this.video?.duration || 343, // ! if 0 - we get 400 error
      videoId: getVideoId(this.site.host, this.video),
      detectedLanguage: this.translateFromLang,
      responseLanguage: this.translateToLang,
    };

    if (!videoData.videoId) {
      this.ytData = {};
      return videoData;
    }

    if (window.location.hostname.includes("youtube.com")) {
      this.ytData = await youtubeUtils.getVideoData();
      videoData.isStream = this.ytData.isLive;
      if (this.ytData.author !== "") {
        videoData.detectedLanguage = this.ytData.detectedLanguage;
        videoData.responseLanguage = this.translateToLang;
      }
    } else if (
      window.location.hostname.includes("rutube") ||
      window.location.hostname.includes("ok.ru") ||
      window.location.hostname.includes("my.mail.ru")
    ) {
      videoData.detectedLanguage = "ru";
    } else if (["bilibili", "youku"].includes(this.site.host)) {
      videoData.detectedLanguage = "zh";
    } else if (["vk"].includes(this.site.host)) {
      const trackLang = document.getElementsByTagName("track")?.[0]?.srclang;
      videoData.detectedLanguage = trackLang || "auto";
    } else if (window.location.hostname.includes("coursera.org")) {
      const courseraData = await courseraUtils.getVideoData(
        this.translateToLang,
      );
      videoData.duration = courseraData.duration || videoData.duration; // courseraData.duration sometimes it can be equal to NaN
      videoData.detectedLanguage = courseraData.detectedLanguage;
      videoData.translationHelp = courseraData.translationHelp;
    } else if (window.location.hostname.includes("coursehunter.net")) {
      const coursehunterData = await coursehunterUtils.getVideoData();
      videoData.translationHelp = {
        // use direct link
        url: coursehunterData.url,
      };
      videoData.duration = coursehunterData.duration || videoData.duration;
    } else if (window.location.hostname.includes("banned.video")) {
      const bannedvideoData = await bannedvideoUtils.getVideoData(
        videoData.videoId,
      );
      videoData.translationHelp = {
        url: bannedvideoData.url,
      };

      videoData.duration = bannedvideoData.duration || videoData.duration;
      videoData.isStream = bannedvideoData.live;
    } else if (window.location.hostname.includes("weverse.io")) {
      const weverseData = await weverseUtils.getVideoData();
      videoData.detectedLanguage = "ko";
      if (weverseData) {
        videoData.translationHelp = {
          url: weverseData.url,
        };
        videoData.duration = weverseData.duration || videoData.duration;
      }
    } else if (window.location.hostname.includes("udemy.com")) {
      const udemyData = await udemyUtils.getVideoData(
        this.data.udemyData,
        this.translateToLang,
      );
      videoData.duration = udemyData.duration || videoData.duration;
      videoData.detectedLanguage = udemyData.detectedLanguage;
      videoData.translationHelp = udemyData.translationHelp;
    } else if (
      [
        "piped",
        "invidious",
        "bitchute",
        "rumble",
        "peertube",
        "dailymotion",
        "trovo",
        "yandexdisk",
        "coursehunter",
      ].includes(this.site.host)
    ) {
      videoData.detectedLanguage = "auto";
    }
    return videoData;
  }
  videoValidator() {
    if (["youtube", "ok.ru", "vk"].includes(this.site.host)) {
      debug/* default */.A.log("VideoValidator videoData: ", this.videoData);
      if (
        this.data.dontTranslateYourLang === 1 &&
        this.videoData.detectedLanguage === this.data.dontTranslateLanguage &&
        this.videoData.responseLanguage === this.data.dontTranslateLanguage
      ) {
        throw new VOTLocalizedError("VOTDisableFromYourLang");
      }
      // if (this.ytData.isPremiere) {
      //   throw new VOTLocalizedError("VOTPremiere");
      // }
      // if (this.ytData.isLive) {
      //   throw new VOTLocalizedError("VOTLiveNotSupported");
      // }
      if (!this.videoData.isStream && this.videoData.duration > 14_400) {
        throw new VOTLocalizedError("VOTVideoIsTooLong");
      }
    }
    return true;
  }

  lipSync(mode = false) {
    debug/* default */.A.log("lipsync video", this.video);
    if (!this.video) {
      return;
    }
    this.audio.currentTime = this.video.currentTime;
    this.audio.playbackRate = this.video.playbackRate;

    if (!mode) {
      debug/* default */.A.log("lipsync mode is not set");
      return;
    }

    if (mode == "play") {
      debug/* default */.A.log("lipsync mode is play");
      const audioPromise = this.audio.play();
      if (audioPromise !== undefined) {
        audioPromise.catch((e) => {
          console.error("[VOT]", e);
          if (e.name === "NotAllowedError") {
            this.transformBtn(
              "error",
              localizationProvider.get("grantPermissionToAutoPlay"),
            );
            throw new VOTLocalizedError("grantPermissionToAutoPlay");
          } else if (e.name === "NotSupportedError") {
            this.transformBtn(
              "error",
              sitesChromiumBlocked.includes(window.location.hostname)
                ? localizationProvider.get("neededAdditionalExtension")
                : localizationProvider.get("audioFormatNotSupported"),
            );
            throw sitesChromiumBlocked.includes(window.location.hostname)
              ? new VOTLocalizedError("neededAdditionalExtension")
              : new VOTLocalizedError("audioFormatNotSupported");
          }
        });
      }
      return;
    }
    // video is inactive
    if (["pause", "stop", "waiting"].includes(mode)) {
      debug/* default */.A.log(`lipsync mode is ${mode}`);
      this.audio.pause();
    }

    if (mode == "playing") {
      debug/* default */.A.log("lipsync mode is playing");
      this.audio.play();
    }
  }

  // Define a function to handle common events
  handleVideoEvent(event) {
    debug/* default */.A.log(`video ${event.type}`);
    this.lipSync(event.type);
  }

  // Default actions on stop translate
  stopTranslate() {
    videoLipSyncEvents.forEach((e) =>
      this.video.removeEventListener(e, this.handleVideoEventBound),
    );
    this.audio.pause();
    this.audio.src = "";
    this.audio.removeAttribute("src");
    this.votVideoVolumeSlider.container.hidden = true;
    this.votVideoTranslationVolumeSlider.container.hidden = true;
    this.votDownloadButton.hidden = true;
    this.downloadTranslationUrl = null;
    this.transformBtn("none", localizationProvider.get("translateVideo"));
    debug/* default */.A.log(`Volume on start: ${this.volumeOnStart}`);
    if (this.volumeOnStart) {
      this.setVideoVolume(this.volumeOnStart);
    }
    this.volumeOnStart = "";
    clearInterval(this.streamPing);
    this.hls?.destroy();
    this.hls = initHls();
  }

  async translateExecutor(VIDEO_ID) {
    debug/* default */.A.log("Run translateFunc");
    this.translateFunc(
      VIDEO_ID,
      this.videoData.isStream,
      this.videoData.detectedLanguage,
      this.videoData.responseLanguage,
      this.videoData.translationHelp,
    );
  }

  async updateTranslationErrorMsg(errorMessage) {
    const translationTake = localizationProvider.get("translationTake");
    const VOTTranslatingError = localizationProvider.get("VOTTranslatingError");
    const lang = localizationProvider.lang;

    if (errorMessage?.name === "VOTLocalizedError") {
      this.transformBtn("error", errorMessage.localizedMessage);
    } else if (
      this.data.translateAPIErrors === 1 &&
      !errorMessage.includes(translationTake) &&
      lang !== "ru"
    ) {
      const translatedMessage = await translate(errorMessage, "ru", lang);
      this.transformBtn("error", VOTTranslatingError);
      this.transformBtn("error", translatedMessage);
    } else {
      this.transformBtn("error", errorMessage);
    }
  }

  afterUpdateTranslation(audioUrl) {
    this.votVideoVolumeSlider.container.hidden =
      this.data.showVideoSlider !== 1 ||
      this.votButton.container.dataset.status !== "success";
    this.votVideoTranslationVolumeSlider.container.hidden =
      this.votButton.container.dataset.status !== "success";

    if (this.data.autoSetVolumeYandexStyle === 1) {
      this.votVideoVolumeSlider.input.value = this.data.autoVolume * 100;
      this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
        `${this.data.autoVolume * 100}%`;
      ui.updateSlider(this.votVideoVolumeSlider.input);
    }

    this.votDownloadButton.hidden = false;
    this.downloadTranslationUrl = audioUrl;
  }

  // update translation audio src
  updateTranslation(audioUrl) {
    // ! Don't use this function for streams
    this.audio.src = audioUrl;

    // cf version only
    if (
      false
    ) {}

    this.volumeOnStart = this.getVideoVolume();
    if (typeof this.data.defaultVolume === "number") {
      this.audio.volume = this.data.defaultVolume / 100;
    }
    if (
      typeof this.data.autoSetVolumeYandexStyle === "number" &&
      this.data.autoSetVolumeYandexStyle
    ) {
      this.setVideoVolume(this.data.autoVolume);
    }

    switch (this.site.host) {
      case "twitter":
        document
          .querySelector('div[data-testid="app-bar-back"][role="button"]')
          .addEventListener("click", this.stopTranslationBound);
        break;
      case "invidious":
      case "piped":
        break;
    }

    if (this.video && !this.video.paused) this.lipSync("play");
    videoLipSyncEvents.forEach((e) =>
      this.video.addEventListener(e, this.handleVideoEventBound),
    );
    this.transformBtn("success", localizationProvider.get("disableTranslate"));
    this.afterUpdateTranslation(audioUrl);
  }

  // Define a function to translate a video and handle the callback
  translateFunc(
    VIDEO_ID,
    isStream,
    requestLang,
    responseLang,
    translationHelp,
  ) {
    console.log("[VOT] Video Data: ", this.videoData);
    const videoURL = translationHelp?.url
      ? translationHelp.url
      : `${this.site.url}${VIDEO_ID}`;

    // fix enabling the old requested voiceover when changing the language to the native language (#)
    debug/* default */.A.log("Run videoValidator");
    this.videoValidator();

    if (isStream) {
      debug/* default */.A.log("Executed stream translation");
      translateStream(
        videoURL,
        requestLang,
        responseLang,
        async (success, reqInterval, resOrError) => {
          debug/* default */.A.log("[exec callback] translateStream callback");
          if (getVideoId(this.site.host, this.video) !== VIDEO_ID) return;
          if (!success || !resOrError.translatedInfo) {
            await this.updateTranslationErrorMsg(resOrError);

            if (reqInterval === 10) {
              // if wait translating
              clearTimeout(this.autoRetry);
              this.autoRetry = setTimeout(
                () =>
                  this.translateFunc(
                    VIDEO_ID,
                    isStream,
                    requestLang,
                    responseLang,
                    translationHelp,
                  ),
                reqInterval * 1000,
              );
            }

            return;
          }

          this.transformBtn(
            "success",
            localizationProvider.get("disableTranslate"),
          );

          console.log(resOrError);
          const pingId = resOrError.pingId;
          debug/* default */.A.log(`Stream pingId: ${pingId}`);
          // if you don't make ping requests, then the translation of the stream dies
          this.streamPing = setInterval(
            async () =>
              await rsp(pingId, (result) =>
                debug/* default */.A.log("Stream ping result: ", result),
              ),
            reqInterval * 1000,
          );

          debug/* default */.A.log(resOrError.translatedInfo.url);
          const streamURL = `https://${
            this.data.m3u8ProxyHost
          }/?all=yes&origin=${encodeURIComponent(
            "https://strm.yandex.ru",
          )}&referer=${encodeURIComponent(
            "https://strm.yandex.ru",
          )}&url=${encodeURIComponent(resOrError.translatedInfo.url)}`;
          debug/* default */.A.log(streamURL);

          if (this.hls) {
            this.hls.on(Hls.Events.MEDIA_ATTACHED, function () {
              debug/* default */.A.log("audio and hls.js are now bound together !");
            });
            this.hls.on(Hls.Events.MANIFEST_PARSED, function (data) {
              debug/* default */.A.log(
                "manifest loaded, found " +
                  data?.levels?.length +
                  " quality level",
              );
            });
            this.hls.loadSource(streamURL);
            this.hls.attachMedia(this.audio);
            this.hls.on(Hls.Events.ERROR, function (data) {
              if (data.fatal) {
                switch (data.type) {
                  case Hls.ErrorTypes.MEDIA_ERROR:
                    console.log(
                      "fatal media error encountered, try to recover",
                    );
                    this.hls.recoverMediaError();
                    break;
                  case Hls.ErrorTypes.NETWORK_ERROR:
                    console.error("fatal network error encountered", data);
                    // All retries and media options have been exhausted.
                    // Immediately trying to restart loading could cause loop loading.
                    // Consider modifying loading policies to best fit your asset and network
                    // conditions (manifestLoadPolicy, playlistLoadPolicy, fragLoadPolicy).
                    break;
                  default:
                    // cannot recover
                    this.hls.destroy();
                    break;
                }
              }
            });
            debug/* default */.A.log(this.hls);
          } else if (this.audio.canPlayType("application/vnd.apple.mpegurl")) {
            // safari
            this.audio.src = streamURL;
          } else {
            // browser doesn't support m3u8 (hls unsupported and it's not a safari)
            throw new VOTLocalizedError("audioFormatNotSupported");
          }

          if (this.site.host === "youtube") {
            youtubeUtils.videoSeek(this.video, 10); // 10 is the most successful number for streaming. With it, the audio is not so far behind the original
          }

          this.volumeOnStart = this.getVideoVolume();
          if (typeof this.data.defaultVolume === "number") {
            this.audio.volume = this.data.defaultVolume / 100;
          }

          if (
            typeof this.data.autoSetVolumeYandexStyle === "number" &&
            this.data.autoSetVolumeYandexStyle
          ) {
            this.setVideoVolume(this.data.autoVolume);
          }

          if (
            !this.video.src &&
            !this.video.currentSrc &&
            !this.video.srcObject
          ) {
            this.stopTranslation();
            return;
          }

          if (this.video && !this.video.paused) this.lipSync("play");
          videoLipSyncEvents.forEach((e) =>
            this.video.addEventListener(e, this.handleVideoEventBound),
          );

          this.afterUpdateTranslation(streamURL);
        },
      );

      return;
    }

    if (["udemy", "coursera"].includes(this.site.host) && !translationHelp) {
      throw new VOTLocalizedError("VOTTranslationHelpNull");
    }

    const cachedTranslation = this.videoTranslations.find(
      (t) =>
        t.videoId === VIDEO_ID &&
        t.expires > Date.now() / 1000 &&
        t.from === requestLang &&
        t.to === responseLang,
    );

    if (cachedTranslation) {
      this.updateTranslation(cachedTranslation.url);
      debug/* default */.A.log("[translateFunc] A cached translate was received");
      return;
    }

    translateVideo(
      videoURL,
      this.videoData.duration,
      requestLang,
      responseLang,
      translationHelp,
      async (success, urlOrError) => {
        debug/* default */.A.log("[exec callback] translateVideo callback");
        if (getVideoId(this.site.host, this.video) !== VIDEO_ID) return;
        if (!success) {
          await this.updateTranslationErrorMsg(urlOrError);

          // if the error line contains information that the translation is being performed, then we wait
          if (
            urlOrError.includes(localizationProvider.get("translationTake"))
          ) {
            clearTimeout(this.autoRetry);
            this.autoRetry = setTimeout(
              () =>
                this.translateFunc(
                  VIDEO_ID,
                  isStream,
                  requestLang,
                  responseLang,
                  translationHelp,
                ),
              60_000,
            );
          }
          console.error("[VOT]", urlOrError);
          return;
        }

        this.updateTranslation(urlOrError);

        this.videoTranslations.push({
          videoId: VIDEO_ID,
          from: requestLang,
          to: responseLang,
          url: urlOrError,
          expires: Date.now() / 1000 + this.videoTranslationTTL,
        });
      },
    );
  }

  // Define a function to stop translation and clean up
  stopTranslation() {
    this.stopTranslate();
    this.syncVideoVolumeSlider();
  }

  async handleSrcChanged() {
    debug/* default */.A.log("[VideoHandler] src changed", this);

    this.stopTranslation();

    this.firstPlay = true;

    this.videoData = await this.getVideoData();
    if (this.videoData.detectedLanguage) {
      this.setSelectMenuValues(
        this.videoData.detectedLanguage,
        this.videoData.responseLanguage,
      );
    }

    const hide =
      !this.video.src && !this.video.currentSrc && !this.video.srcObject;
    this.votButton.container.hidden = hide;
    hide && (this.votMenu.container.hidden = hide);

    if (!this.site.selector) {
      this.container = this.video.parentElement;
    }

    if (!this.container.contains(this.votButton.container)) {
      this.container.appendChild(this.votButton.container);
      this.container.appendChild(this.votMenu.container);
    }

    await this.updateSubtitles();
    await this.changeSubtitlesLang("disabled");
    this.translateToLang = this.data.responseLanguage ?? "ru";
  }

  async release() {
    debug/* default */.A.log("[VideoHandler] release");

    this.initialized = false;
    this.stopTranslation();
    this.releaseExtraEvents();
    this.subtitlesWidget.release();
    this.votButton.container.remove();
    this.votMenu.container.remove();
  }
}

function getSites() {
  return config_sites.filter((e) => {
    const isMathes = (match) => {
      return (
        (match instanceof RegExp && match.test(window.location.hostname)) ||
        (typeof match === "string" &&
          window.location.hostname.includes(match)) ||
        (typeof match === "function" && match(new URL(window.location)))
      );
    };
    if (
      isMathes(e.match) ||
      (e.match instanceof Array && e.match.some((e) => isMathes(e)))
    ) {
      return e.host && e.url;
    }
    return false;
  });
}

const videoObserver = new VideoObserver();
const videosWrappers = new WeakMap();

async function src_main() {
  debug/* default */.A.log("Loading extension...");

  await localizationProvider.update();

  debug/* default */.A.log(`Selected menu language: ${localizationProvider.lang}`);

  if (
     true &&
    GM_info?.scriptHandler &&
    cfOnlyExtensions.includes(GM_info.scriptHandler)
  ) {
    console.error(
      `[VOT] ${localizationProvider.getDefault("unSupportedExtensionError").replace("{0}", GM_info.scriptHandler)}`,
    );
    return alert(
      `[VOT] ${localizationProvider.get("unSupportedExtensionError").replace("{0}", GM_info.scriptHandler)}`,
    );
  }

  debug/* default */.A.log("Extension compatibility passed...");

  videoObserver.onVideoAdded.addListener((video) => {
    for (const site of getSites()) {
      if (!site) continue;

      let container;
      if (site.shadowRoot) {
        container = site.selector
          ? Object.values(document.querySelectorAll(site.selector)).find((e) =>
              e.shadowRoot.contains(video),
            )
          : video.parentElement;
        container =
          container && container.shadowRoot
            ? container.parentElement
            : container;
      } else {
        const browserVersion = browserInfo.browser.version.split(".")?.[0];

        if (
          site.selector?.includes(":not") &&
          site.selector?.includes("*") &&
          browserVersion &&
          ((browserInfo.browser.name === "Chrome" &&
            Number(browserVersion) < 88) ||
            (browserInfo.browser.name === "Firefox" &&
              Number(browserVersion) < 84))
        ) {
          const selector = site.selector?.split(" *")?.[0];
          container = selector
            ? Object.values(document.querySelectorAll(selector)).find((e) =>
                e.contains(video),
              )
            : video.parentElement;
        } else {
          container = site.selector
            ? Object.values(document.querySelectorAll(site.selector)).find(
                (e) => e.contains(video),
              )
            : video.parentElement;
        }
      }
      if (!container) continue;
      if (site.host === "rumble" && container.querySelector("vot-block")) {
        // fix multiply translation buttons in rumble.com
        continue;
      }

      if (site.host === "peertube") {
        // we set the url of the current site, since peertube doesn't have a main server
        site.url = window.location.origin;
      }

      if (!videosWrappers.has(video)) {
        videosWrappers.set(video, new VideoHandler(video, container, site));
        break;
      }
    }
  });
  videoObserver.onVideoRemoved.addListener(async (video) => {
    if (videosWrappers.has(video)) {
      await videosWrappers.get(video).release();
      videosWrappers.delete(video);
    }
  });
  videoObserver.enable();
}

src_main().catch((e) => {
  console.error("[VOT]", e);
});

// if (import.meta.webpackHot) {
//   import.meta.webpackHot.monkeyReload();
//   import.meta.webpackHot.dispose(() => {
//     for (const selector of [
//       ".vot-menu",
//       ".vot-segmented-button",
//       ".vot-subtitles-widget",
//     ]) {
//       document.querySelector(selector)?.remove();
//     }
//   });
// }

})();

/******/ })()
;