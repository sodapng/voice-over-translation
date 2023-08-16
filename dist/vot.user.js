// ==UserScript==
// @name [VOT] - Voice Over Translation
// @name:de [VOT] - Voice-Over-Video-Übersetzung
// @name:es [VOT] - Traducción de vídeo en off
// @name:fr [VOT] - Traduction vidéo voix-off
// @name:it [VOT] - Traduzione Video fuori campo
// @name:ru [VOT] - Закадровый перевод видео
// @name:zh [VOT] - 画外音视频翻译
// @description A small extension that adds a Yandex Browser video translation to other browsers
// @description:de Eine kleine Erweiterung, die eine Voice-over-Übersetzung von Videos aus dem Yandex-Browser zu anderen Browsern hinzufügt
// @description:es Una pequeña extensión que agrega una traducción de voz en off de un video de Yandex Browser a otros navegadores
// @description:fr Une petite extension qui ajoute la traduction vocale de la vidéo du Navigateur Yandex à d'autres navigateurs
// @description:it Una piccola estensione che aggiunge la traduzione vocale del video dal browser Yandex ad altri browser
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @description:zh 一个小扩展，它增加了视频从Yandex浏览器到其他浏览器的画外音翻译
// @version 1.3.6
// @author sodapng, mynovelhost, Toil, SashaXser
// @supportURL https://github.com/ilyhalight/voice-over-translation/issues
// @match *://*.youtube.com/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.twitch.tv/*
// @match *://*.xvideos.com/*
// @match *://*.pornhub.com/*
// @match *://*.vk.com/*
// @match *://*.vk.ru/*
// @match *://invidious.snopyta.org/*
// @match *://invidious.kavin.rocks/*
// @match *://vid.puffyan.us/*
// @match *://invidious.namazso.eu/*
// @match *://inv.riverside.rocks/*
// @match *://yt.artemislena.eu/*
// @match *://invidious.flokinet.to/*
// @match *://invidious.esmailelbob.xyz/*
// @match *://invidious.nerdvpn.de/*
// @match *://invidious.slipfox.xyz/*
// @match *://invidio.xamh.de/*
// @match *://invidious.dhusch.de/*
// @match *://*.piped.video/*
// @match *://piped.tokhmi.xyz/*
// @match *://piped.moomoo.me/*
// @match *://piped.syncpundit.io/*
// @match *://piped.mha.fi/*
// @match *://watch.whatever.social/*
// @match *://piped.garudalinux.org/*
// @match *://efy.piped.pages.dev/*
// @match *://watch.leptons.xyz/*
// @match *://piped.lunar.icu/*
// @match *://yt.dc09.ru/*
// @match *://piped.mint.lgbt/*
// @match *://*.il.ax/*
// @match *://piped.privacy.com.de/*
// @match *://piped.esmailelbob.xyz/*
// @match *://piped.projectsegfau.lt/*
// @match *://piped.in.projectsegfau.lt/*
// @match *://piped.us.projectsegfau.lt/*
// @match *://piped.privacydev.net/*
// @match *://piped.palveluntarjoaja.eu/*
// @match *://piped.smnz.de/*
// @match *://piped.adminforge.de/*
// @match *://piped.qdi.fi/*
// @match *://piped.hostux.net/*
// @match *://piped.chauvet.pro/*
// @match *://piped.jotoma.de/*
// @match *://piped.pfcd.me/*
// @match *://piped.frontendfriendly.xyz/*
// @match *://*.yewtu.be/*
// @match *://inv.vern.cc/*
// @match *://*.vimeo.com/*
// @match *://*.9gag.com/*
// @match *://*.twitter.com/*
// @match *://*.facebook.com/*
// @match *://*.rutube.ru/*
// @match *://*.bilibili.com/*
// @match *://my.mail.ru/*
// @match *://*.bitchute.com/*
// @connect api.browser.yandex.ru
// @downloadURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// @grant GM_xmlhttpRequest
// @grant GM_info
// @homepageURL https://github.com/ilyhalight/voice-over-translation/issues
// @icon https://translate.yandex.ru/icons/favicon.ico
// @namespace vot
// @require https://cdnjs.cloudflare.com/ajax/libs/protobufjs/7.2.3/light/protobuf.min.js
// @updateURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.translationBlock {
  padding: 0.45rem !important;
  width: max-content;
  position: absolute;
  background: #2e2f34;
  border-radius: 0.5rem !important;
  left: 50%;
  top: 5rem;
  transform: translate(-50%);
  text-align: center;
  opacity: 0;
  transition: opacity 1s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 100;
}

.translationBtn {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  padding-right: 0.25rem !important;
  cursor: pointer;
  font: 600 12px / 14px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif;
}

.translationBlock:hover {
  opacity: 1;
}

.translationMenu {
  display: inline-block;
  vertical-align: middle;
  border-left: 1px solid #424348;
  max-height: 16px;
  max-width: 24px;
  cursor: pointer;
}

.translationMenuIcon {
  padding: 0 10px !important;
  width: 24px;
}

.translationIAlice {
  display: inline-block;
  vertical-align: middle;
  max-height: 26px;
  max-width: 50px;
}

.translationIconAlice {
  height: 24px !important;
  width: 24px !important;
}

.translationITranslate {
  display: inline-block;
  vertical-align: middle;
  max-height: 20px;
  max-width: 20px;
}

.translationMenuContent {
  position: absolute;
  background: #2e2f34;
  color: #fff;
  display: none;
  border-radius: 1rem !important;
  left: 50%;
  top: 10rem;
  transform: translate(-50%);
  text-align: left;
  font: 600 14px / 16px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif !important;

  width: 300px;
  /* height: 375px; */
  opacity: 0;
  z-index: 100;
  transition: opacity 0.5s ease;
}

.VOTMenuSlider {
  -webkit-appearance: none !important;
  appearance: none !important;
  width: 268px !important;
  height: 8px !important;
  outline: none !important;
  margin-top: 0.5rem;
  opacity: 0.7;
  /* background: #3C3F4D !important; */
  background: rgb(253, 222, 85, 0.6) !important;
  border: none !important;
  border-radius: 2rem !important;
  -webkit-transition: 0.2s !important;
  transition: opacity 0.2s ease !important;
}

.VOTMenuSlider:hover {
  opacity: 1;
}

.VOTMenuSlider::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  appearance: none !important;
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-moz-range-thumb {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-ms-thumb {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-ms-fill-lower {
  height: 8px !important;
  border-radius: 2rem !important;
  background: linear-gradient(
    90.1deg,
    rgba(186, 153, 244, 0.85) -5.78%,
    rgba(236, 138, 202, 0.7) 56.46%,
    rgba(239, 168, 117, 0.6) 108.93%
  ) !important;
}

.VOTMenuSlider::-moz-range-progress {
  height: 8px !important;
  border-radius: 2rem !important;
  background: linear-gradient(
    90.1deg,
    rgba(186, 153, 244, 0.85) -5.78%,
    rgba(236, 138, 202, 0.7) 56.46%,
    rgba(239, 168, 117, 0.6) 108.93%
  ) !important;
}

.translationHeader {
  padding-bottom: 0.5rem !important;
}

.translationMainHeader {
  margin: 16px !important;
  color: #fff;
  font: 900 14px / 16px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif !important;
}

.translationMenuOptions {
  display: flex;
  flex-flow: column wrap;
}

.translationMenuContainer {
  /* width: 100%; */
  padding-left: 16px !important;
  padding-top: 5px !important;
  display: inline-block !important;
}

.translationMenuContainer > input {
  appearance: auto !important;
  vertical-align: text-bottom;
}

.translationMenuText {
  color: #fff;
  display: inline-flex;
  width: 80%;
}

.translationVolumeBox,
.translationVideoVolumeBox {
  padding-top: 0.5rem !important;
}

.translationDropDB {
  border: none !important;
  border-radius: 4px !important;
  background: #5426ff !important;
  color: #fff !important;
  padding: 6px 16px !important;
  margin-left: auto !important;
  cursor: pointer !important;
}

.translationDownload {
  background: #5426ff !important;
  color: #fff !important;
  padding: 2px 10px !important;
  border-radius: 4px !important;
  cursor: pointer;
  display: none;
}

.translationMenuFunctional {
  display: flex;
  margin: 16px !important;
}

.VOTMenuSelect {
  width: 110px;
  border-radius: 5px !important;
  border: 1px solid #dadce0 !important;
  box-shadow: 0 1px 3px -2px #9098a9;
  box-sizing: border-box !important;
  color: #2e2f34 !important;
  background: #fff !important;
  padding: 5px !important;
}

.VOTMenuSelect:focus {
  outline: none;
}

.VOTMenuSelect:focus {
  outline: none;
  border-color: #0077ff;
  box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
}

#VOTSelectLanguages {
  display: flex !important;
  margin-left: 5px;
}

#VOTSelectLanguages svg {
  margin: 0 5px;
}

#VOTSubtitlesLangContainer {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
}

#VOTSubtitlesLang {
  margin-right: 25px;
}

.VOTSubtitlesWidget {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50%;
  max-height: 100%;
  min-height: 20%;
  z-index: 100;
  left: 25%;
  top: 75%;
  pointer-events: none;
}

.VOTSubtitlesWidget > div {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: max-content;
  background: #2e2f34cc;
  border-radius: 1rem;
  pointer-events: all;
  padding: 1rem;
  font-size: 2rem;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.VOTSubtitlesWidget .passed {
  color: #9e84ff;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



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



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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

/***/ "./src/config/config.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I1: () => (/* binding */ yandexHmacKey),
/* harmony export */   IM: () => (/* binding */ autoVolume),
/* harmony export */   Rr: () => (/* binding */ yandexUserAgent),
/* harmony export */   iF: () => (/* binding */ workerHost)
/* harmony export */ });
// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const yandexHmacKey = "xtGCyGdTY2Jy6OMEKdTuXev3Twhkamgm";
const yandexUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 YaBrowser/23.7.1.1140 Yowser/2.5 Safari/537.36";
const autoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation




/***/ }),

/***/ "./src/utils/debug.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const debug = {};
debug.log = (...text) => {
  if (true) {
    return;
  }
  return console.log(
    "%c[VOT DEBUG]",
    "background: #F2452D; color: #fff; padding: 5px;",
    ...text
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debug);


/***/ }),

/***/ "./src/yandexRequest.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/config/config.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/debug.js");



async function yandexRequest(
  path,
  body,
  headers,
  callback
) {
  try {
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("yandexRequest:", path);
    // Create a fetch options object with headers and body
    const options = {
      url: `https://${_config_config_js__WEBPACK_IMPORTED_MODULE_1__/* .workerHost */ .iF}${path}`,
      method: "POST",
      headers: {
        ...{
          "Accept": "application/x-protobuf",
          "Accept-Language": "en",
          "Content-Type": "application/x-protobuf",
          "User-Agent": _config_config_js__WEBPACK_IMPORTED_MODULE_1__/* .yandexUserAgent */ .Rr,
          "Pragma": "no-cache",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Mode": "no-cors",
          "sec-ch-ua": null,
          "sec-ch-ua-mobile": null,
          "sec-ch-ua-platform": null,
        },
        ...headers
      },
      binary: true,
      data: new Blob([body]),
      responseType: "arraybuffer"
    };
    // Send the request using GM_xmlhttpRequest
    GM_xmlhttpRequest({
      ...options,
      onload: (http) => {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("yandexRequest:", http.status, http);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

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
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css
var main = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");
;// CONCATENATED MODULE: ./src/styles/main.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.Z, options);




       /* harmony default export */ const styles_main = (main/* default */.Z && main/* default */.Z.locals ? main/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/utils/youtubeUtils.js


async function detect(cleanText) {
  const response = await fetch("https://rust-server-531j.onrender.com/detect", {
    method: "POST",
    body: cleanText,
  });
  return await response.text();
}

// Get the language code from the response or the text
async function getLanguage(player, response, title, description, author) {
  if (!window.location.hostname.includes("m.youtube.com")) {
    // ! Experimental ! get lang from selected audio track if availabled
    const audioTracks = player.getAudioTrack();
    const trackInfo = audioTracks?.getLanguageInfo(); // get selected track info (id === "und" if tracks are not available)
    if (trackInfo?.id !== "und") {
      return trackInfo.id.split(".")[0];
    }
  }

  // TODO: If the audio tracks will work fine, transfer the receipt of captions to the audioTracks variable
  // Check if there is an automatic caption track in the response
  const captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find((caption) => caption.kind === "asr");
    if (autoCaption) {
      return autoCaption.languageCode;
    }
  }
  // If there is no caption track, use detect to get the language code from the text
  const text = [title, description, author].join(" ");
  // Remove anything that is not a letter or a space in any language
  const cleanText = text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[^\p{L}\s]/gu, "")
    .slice(0, 250);
  return await detect(cleanText);
}

function isMobile() {
  return /^m\.youtube\.com$/.test(window.location.hostname);
}

function getPlayer() {
  return isMobile() ? document.querySelector("#app") : document.querySelector("#movie_player");
}

function getPlayerResponse() {
  const player = getPlayer();
  if (isMobile())
    return player?.data?.playerResponse ?? null;
  return player?.getPlayerResponse?.call() ?? null;
}

function getSubtitles() {
  const response = getPlayerResponse();
  let captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks ?? [];
  captionTracks = captionTracks.reduce((result, captionTrack) => {
    if ("languageCode" in captionTrack) {
      const language =
        captionTrack?.languageCode?.toLowerCase().split(";")[0].trim().split("-")[0];
      const url = captionTrack?.url || captionTrack?.baseUrl;
      language && url && result.push({
        source: "youtube",
        language,
        isAutoGenerated: captionTrack?.kind === "asr",
        url: `${url.startsWith("http") ? url : `${window.location.origin}/${url}`}&fmt=json3`,
      });
    }
    return result;
  }, []);
  debug/* default */.Z.log("youtube subtitles:", captionTracks);
  return captionTracks;
}

// Get the video data from the player
async function getVideoData() {
  const player = getPlayer();
  const response = getPlayerResponse();
  const { author, title, shortDescription: description, isLive, isLiveContent, isUpcoming } = response?.videoDetails ?? {};
  const isPremiere = (!!isLive || !!isUpcoming) && !isLiveContent;
  const videoData = {
    isLive: !!isLive,
    isPremiere,
    title,
    description,
    author,
    detectedLanguage: await getLanguage(
      player,
      response,
      title,
      description,
      author
    ),
  };
  debug/* default */.Z.log("youtube video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

const youtubeUtils = {
  isMobile,
  getPlayer,
  getPlayerResponse,
  getSubtitles,
  getVideoData
}

;// CONCATENATED MODULE: ./src/yandexProtobuf.js
const VideoTranslationRequest = new protobuf.Type("VideoTranslationRequest")
  .add(new protobuf.Field("url", 3, "string"))
  .add(new protobuf.Field("deviceId", 4, "string")) // removed?
  .add(new protobuf.Field("firstRequest", 5, "bool")) // true for the first request, false for subsequent ones
  .add(new protobuf.Field("duration", 6, "double"))
  .add(new protobuf.Field("unknown2", 7, "int32")) // 1 1
  .add(new protobuf.Field("language", 8, "string")) // source language code
  .add(new protobuf.Field("unknown3", 9, "int32")) // 0 0
  .add(new protobuf.Field("unknown4", 10, "int32")) // 0 0
  .add(new protobuf.Field("translationHelp", 11, "int32")) // array for translation assistance ([0] -> {2: link to video, 1: "video_file_url"}, [1] -> {2: link to subtitles, 1: "subtitles_file_url"})
  .add(new protobuf.Field("responseLanguage", 14, "string")); // target language code

const VideoSubtitlesRequest = new protobuf.Type("VideoSubtitlesRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string")); // source language code

// const VideoWhitelistStreamRequest = new protobuf.Type("VideoWhitelistStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("deviceId", 4, "string"))

// const VideoTranslationStreamRequest = new protobuf.Type("VideoTranslationStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("language", 2, "string"))
//   .add(new protobuf.Field("responseLanguage", 3, "string"))

const VideoTranslationResponse = new protobuf.Type("VideoTranslationResponse")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("duration", 2, "double"))
  .add(new protobuf.Field("status", 4, "int32")) // status
  .add(new protobuf.Field("remainingTime", 5, "int32")) // secs before translation
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

// const VideoWhitelistStreamResponse = new protobuf.Type("VideoWhitelistStreamResponse")
//   .add(new protobuf.Field("inWhitelist", 1, "bool"))

// const VideoTranslationStreamResponse = new protobuf.Type("VideoTranslationStreamResponse")
//   .add(new protobuf.Field("unknown1", 1, "int32"))
//   .add(new protobuf.Field("array", 2, "string"))
//   .add(new protobuf.Field("ping", 3, "int32"))

// Create a root namespace and add the types
// const root = new protobuf.Root().define("yandex").add(VideoWhitelistStreamRequest).add(VideoWhitelistStreamResponse);

// // Export the encoding and decoding functions
// export const yandexProtobuf = {
//   encodeTranslationRequest(url, deviceId, unknown1, requestLang, responseLang) {
//     return root.VideoWhitelistStreamRequest.encode({
//       url,
//       deviceId: 'UCLA_DiR1FfKNvjuUpBHmylQ'
//     }).finish();
//   },
//   decodeTranslationResponse(response) {
//     return root.VideoWhitelistStreamResponse.decode(new Uint8Array(response));
//   }
// };

// // Create a root namespace and add the types
// const root = new protobuf.Root().define("yandex").add(VideoTranslationStreamRequest).add(VideoTranslationStreamResponse);

// // Export the encoding and decoding functions
// export const yandexProtobuf = {
//   encodeTranslationRequest(url, deviceId, unknown1, requestLang, responseLang) {
//     return root.VideoTranslationStreamRequest.encode({
//       url,
//       language: requestLang,
//       responseLanguage: responseLang
//     }).finish();
//   },
//   decodeTranslationResponse(response) {
//     return root.VideoTranslationStreamResponse.decode(new Uint8Array(response));
//   }
// };

// Create a root namespace and add the types
const root = new protobuf.Root()
  .define("yandex")
  .add(VideoTranslationRequest)
  .add(VideoTranslationResponse)
  .add(VideoSubtitlesRequest)
  .add(VideoSubtitlesObject)
  .add(VideoSubtitlesResponse);

// Export the encoding and decoding functions
const yandexProtobuf = {
  encodeTranslationRequest(url, duration, requestLang, responseLang) {
    return root.VideoTranslationRequest.encode({
      url,
      firstRequest: true,
      duration,
      unknown2: 1,
      language: requestLang,
      unknown3: 0,
      unknown4: 0,
      responseLanguage: responseLang,
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
};

;// CONCATENATED MODULE: ./src/config/constants.js
// available languages for translation
const availableLangs = [
  "ru",
  "en",
  "zh",
  "ko",
  "ar",
  "fr",
  "it",
  "es",
  "de",
  "ja",
];

// Additional languages working with TTS
const additionalTTS = {
  bn: "Bengali", // TODO: Add menu translation
  pt: "Portuguese",
  cs: "Czech",
  hi: "Hindi",
  mr: "Marathi", // TODO: Add menu translation
  te: "Telugu", // TODO: Add menu translation
  tr: "Turkish",
  ms: "Malay", // TODO: Add menu translation
  vi: "Vietnamese",
  ta: "Tamil", // TODO: Add menu translation
  jv: "Javanese", // TODO: Add menu translation
  ur: "Urdu", // TODO: Add menu translation
  fa: "Persian", // TODO: Add menu translation
  gu: "Gujarati", // TODO: Add menu translation
  id: "Indonesian", // TODO: Add menu translation
  uk: "Ukrainian",
  kk: "Kazakh",
};

const siteTranslates = {
  youtube: "https://youtu.be/",
  twitch: "https://twitch.tv/",
  vimeo: "https://vimeo.com/",
  "9gag": "https://9gag.com/gag/",
  vk: "https://vk.com/video?z=",
  xvideos: "https://www.xvideos.com/",
  pornhub: "https://rt.pornhub.com/view_video.php?viewkey=",
  udemy: "https://www.udemy.com",
  twitter: "https://twitter.com/i/status/",
  facebook: "https://www.facebook.com/",
  rutube: "https://rutube.ru/video/",
  "bilibili.com": "https://www.bilibili.com/video/",
  "mail.ru": "https://my.mail.ru/",
  coub: "https://coub.com/view/",
  bitchute: "https://www.bitchute.com/video/",
};

// TODO:
/*
  Add a language upload from github.

  it may be worth redesigning the translation system
  (if there is no necessary phrase, then the phrase in English / "raw" phrase will be displayed)
*/
const translations = {
  ru: {
    recommended: "рекомендуется",
    translateVideo: "Перевести видео",
    disableTranslate: "Выключить",
    translationSettings: "Настройки перевода",
    resetSettings: "Сбросить настройки",
    videoBeingTranslated: "Видео переводится",
    videoLanguage: "Язык видео",
    translationLanguage: "Язык перевода",
    translationTake: "Перевод займёт",
    translationTakeMoreThanHour: "Перевод займёт больше часа",
    translationTakeAboutMinute: "Перевод займёт около минуты",
    translationTakeFewMinutes: "Перевод займёт несколько минут",
    translationTakeApproximatelyMinutes: "Перевод займёт примерно {0} минут",
    translationTakeApproximatelyMinute: "Перевод займёт примерно {0} минуты",
    unSupportedExtensionError:
      `Ошибка! ${GM_info.scriptHandler} не поддерживается этой версией расширения!\n\nПожалуйста, используйте cloudflare-версию расширения VOT.`,
    requestTranslationFailed: "Не удалось запросить перевод видео",
    audioNotReceived: "Не получена ссылка на аудио",
    grantPermissionToAutoPlay: "Предоставьте разрешение на автовоспроизведение",
    neededAdditionalExtension:
      "Для поддержки этого сайта необходимо дополнительное расширение",
    audioFormatNotSupported: "Формат аудио не поддерживается",
    VOTAutoTranslate: "Переводить при открытии",
    VOTDontTranslateYourLang: "Не переводить с родного языка",
    VOTVolume: "Громкость видео",
    VOTVolumeTranslation: "Громкость перевода",
    VOTAutoSetVolume: "Уменьшать громкость видео до ",
    VOTShowVideoSlider: "Слайдер громкости видео",
    VOTSyncVolume: "Связать громкость перевода и видео",
    VOTAudioProxy: "Проксировать полученное аудио",
    VOTDisableFromYourLang: "Вы отключили перевод видео на вашем языке",
    VOTLiveNotSupported: "Не поддерживается перевод трансляций в прямом эфире",
    VOTPremiere: "Дождитесь окончания премьеры перед переводом",
    VOTVideoIsTooLong: "Видео слишком длинное",
    VOTNoVideoIDFound: "Не найдено ID видео",
    VOTFailedInitDB: "Не удалось инициализовать базу данных",
    VOTDBNeedUpdate:
      "Базе данных нужно обновление, пожалуйста, перезагрузите страницу",
    VOTDisabledForDBUpdating:
      `VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с ${window.location.hostname} и попробуйте снова`,
    VOTFailedWriteToDB: "Не удалось записать данные в базу данных",
    VOTFailedReadFromDB: "Не удалось получить данные из базы данных",
    VOTSubtitles: "Субтитры",
    VOTSubtitlesDisabled: "Отключены",
    VOTSubtitlesMaxLength: "Максимальная длина субтитров",
    VOTHighlightWords: "Подсвечивать слова",
    VOTTranslatedFrom: "переведено с",
    VOTAutogenerated: "создано автоматически",
    langs: {
      "az": "Азербайджанский",
      "ay": "Аймара",
      "ak": "Акан",
      "sq": "Албанский",
      "am": "Амхарский",
      "en": "Английский",
      "ar": "Арабский",
      "hy": "Армянский",
      "as": "Ассамский",
      "af": "Африкаанс",
      "eu": "Баскский",
      "be": "Белорусский",
      "bn": "Бенгальский",
      "my": "Бирманский",
      "bg": "Болгарский",
      "bs": "Боснийский",
      "bho": "Бходжпури",
      "cy": "Валлийский",
      "hu": "Венгерский",
      "vi": "Вьетнамский",
      "haw": "Гавайский",
      "ht": "Гаитянский",
      "gl": "Галисийский",
      "lg": "Ганда",
      "el": "Греческий",
      "ka": "Грузинский",
      "gn": "Гуарани",
      "gu": "Гуджарати",
      "gd": "Гэльский",
      "da": "Датский",
      "fy": "Западнофризский",
      "zu": "Зулу",
      "iw": "Иврит",
      "ig": "Игбо",
      "yi": "Идиш",
      "id": "Индонезийский",
      "ga": "Ирландский",
      "is": "Исландский",
      "es": "Испанский",
      "it": "Итальянский",
      "yo": "Йоруба",
      "kk": "Казахский",
      "kn": "Каннада",
      "ca": "Каталанский",
      "qu": "Кечуа",
      "rw": "Киньяруанда",
      "ky": "Киргизский",
      "zh": "Китайский",
      "zh-Hant": "Китайский (Традиционная)",
      "zh-Hans": "Китайский (Упрощенная)",
      "ko": "Корейский",
      "co": "Корсиканский",
      "xh": "Коса",
      "ku": "Курдский",
      "km": "Кхмерский",
      "lo": "Лаосский",
      "la": "Латинский",
      "lv": "Латышский",
      "ln": "Лингала",
      "lt": "Литовский",
      "lb": "Люксембургский",
      "mk": "Македонский",
      "mg": "Малагасийский",
      "ms": "Малайский",
      "ml": "Малаялам",
      "dv": "Мальдивский",
      "mt": "Мальтийский",
      "mi": "Маори",
      "mr": "Маратхи",
      "mn": "Монгольский",
      "de": "Немецкий",
      "ne": "Непальский",
      "nl": "Нидерландский",
      "no": "Норвежский",
      "ny": "Ньянджа",
      "or": "Ория",
      "om": "Оромо",
      "pa": "Панджаби",
      "fa": "Персидский",
      "pl": "Польский",
      "pt": "Португальский",
      "ps": "Пушту",
      "ro": "Румынский",
      "ru": "Русский",
      "sm": "Самоанский",
      "sa": "Санскрит",
      "ceb": "Себуано",
      "nso": "Северный Сото",
      "sr": "Сербский",
      "si": "Сингальский",
      "sd": "Синдхи",
      "sk": "Словацкий",
      "sl": "Словенский",
      "so": "Сомали",
      "sw": "Суахили",
      "su": "Сунданский",
      "tg": "Таджикский",
      "th": "Тайский",
      "ta": "Тамильский",
      "tt": "Татарский",
      "te": "Телугу",
      "ti": "Тигринья",
      "ts": "Тсонга",
      "tr": "Турецкий",
      "tk": "Туркменский",
      "uz": "Узбекский",
      "ug": "Уйгурский",
      "uk": "Украинский",
      "ur": "Урду",
      "fil": "Филиппинский",
      "fi": "Финский",
      "fr": "Французский",
      "ha": "Хауса",
      "hi": "Хинди",
      "hmn": "Хмонг",
      "hr": "Хорватский",
      "cs": "Чешский",
      "sv": "Шведский",
      "sn": "Шона",
      "ee": "Эве",
      "eo": "Эсперанто",
      "et": "Эстонский",
      "st": "Южный Сото",
      "jv": "Яванский",
      "ja": "Японский",
      "kri": "Kri",
    },
  },
  en: {
    recommended: "recommended",
    translateVideo: "Translate video",
    disableTranslate: "Turn off",
    translationSettings: "Translation settings",
    resetSettings: "Reset settings",
    videoBeingTranslated: "The video is being translated",
    videoLanguage: "Video language",
    translationLanguage: "Translation language",
    translationTake: "The translation will take",
    translationTakeMoreThanHour: "The translation will take more than an hour",
    translationTakeAboutMinute: "The translation will take about a minute",
    translationTakeFewMinutes: "The translation will take a few minutes",
    translationTakeApproximatelyMinutes:
      "The translation will take approximately {0} minutes",
    translationTakeApproximatelyMinute:
      "The translation will take approximately {0} minutes",
    unSupportedExtensionError:
      `Error! ${GM_info.scriptHandler} is not supported by this version of the extension!\n\nPlease use the cloudflare version of the VOT extension.`,
    requestTranslationFailed: "Failed to request video translation",
    audioNotReceived: "Audio link not received",
    grantPermissionToAutoPlay: "Grant permission to autoplay",
    neededAdditionalExtension:
      "An additional extension is needed to support this site",
    audioFormatNotSupported: "The audio format is not supported",
    VOTAutoTranslate: "Translate on open",
    VOTDontTranslateYourLang: "Do not translate from my language",
    VOTVolume: "Video volume",
    VOTVolumeTranslation: "Translation Volume",
    VOTAutoSetVolume: "Reduce video volume to ",
    VOTShowVideoSlider: "Video volume slider",
    VOTSyncVolume: "Link translation and video volume",
    VOTAudioProxy: "Proxy received audio",
    VOTDisableFromYourLang:
      "You have disabled the translation of the video in your language",
    VOTLiveNotSupported: "Translation of live streams is not supported",
    VOTPremiere: "Wait for the premiere to end before translating",
    VOTVideoIsTooLong: "Video is too long",
    VOTNoVideoIDFound: "No video ID found",
    VOTFailedInitDB: "Failed to initialize database",
    VOTDBNeedUpdate: "The database needs an update, please reload the page",
    VOTDisabledForDBUpdating:
      `VOT is disabled due to an error when updating the Database. Close all open tabs with ${window.location.hostname} and try again`,
    VOTFailedWriteToDB: "Data could not be written to the database",
    VOTFailedReadFromDB: "Data could not be retrieved from the database",
    VOTSubtitles: "Subtitles",
    VOTSubtitlesDisabled: "Disabled",
    VOTSubtitlesMaxLength: "Subtitles max length",
    VOTHighlightWords: "Highlight words",
    VOTTranslatedFrom: "translated from",
    VOTAutogenerated: "autogenerated",
    langs: {
      "af": "Afrikaans",
      "ak": "Akan",
      "sq": "Albanian",
      "am": "Amharic",
      "ar": "Arabic",
      "hy": "Armenian",
      "as": "Assamese",
      "ay": "Aymara",
      "az": "Azerbaijani",
      "bn": "Bangla",
      "eu": "Basque",
      "be": "Belarusian",
      "bho": "Bhojpuri",
      "bs": "Bosnian",
      "bg": "Bulgarian",
      "my": "Burmese",
      "ca": "Catalan",
      "ceb": "Cebuano",
      "zh": "Chinese",
      "zh-Hans": "Chinese (Simplified)",
      "zh-Hant": "Chinese (Traditional)",
      "co": "Corsican",
      "hr": "Croatian",
      "cs": "Czech",
      "da": "Danish",
      "dv": "Divehi",
      "nl": "Dutch",
      "en": "English",
      "eo": "Esperanto",
      "et": "Estonian",
      "ee": "Ewe",
      "fil": "Filipino",
      "fi": "Finnish",
      "fr": "French",
      "gl": "Galician",
      "lg": "Ganda",
      "ka": "Georgian",
      "de": "German",
      "el": "Greek",
      "gn": "Guarani",
      "gu": "Gujarati",
      "ht": "Haitian Creole",
      "ha": "Hausa",
      "haw": "Hawaiian",
      "iw": "Hebrew",
      "hi": "Hindi",
      "hmn": "Hmong",
      "hu": "Hungarian",
      "is": "Icelandic",
      "ig": "Igbo",
      "id": "Indonesian",
      "ga": "Irish",
      "it": "Italian",
      "ja": "Japanese",
      "jv": "Javanese",
      "kn": "Kannada",
      "kk": "Kazakh",
      "km": "Khmer",
      "rw": "Kinyarwanda",
      "ko": "Korean",
      "kri": "Krio",
      "ku": "Kurdish",
      "ky": "Kyrgyz",
      "lo": "Lao",
      "la": "Latin",
      "lv": "Latvian",
      "ln": "Lingala",
      "lt": "Lithuanian",
      "lb": "Luxembourgish",
      "mk": "Macedonian",
      "mg": "Malagasy",
      "ms": "Malay",
      "ml": "Malayalam",
      "mt": "Maltese",
      "mi": "Māori",
      "mr": "Marathi",
      "mn": "Mongolian",
      "ne": "Nepali",
      "nso": "Northern Sotho",
      "no": "Norwegian",
      "ny": "Nyanja",
      "or": "Odia",
      "om": "Oromo",
      "ps": "Pashto",
      "fa": "Persian",
      "pl": "Polish",
      "pt": "Portuguese",
      "pa": "Punjabi",
      "qu": "Quechua",
      "ro": "Romanian",
      "ru": "Russian",
      "sm": "Samoan",
      "sa": "Sanskrit",
      "gd": "Scottish Gaelic",
      "sr": "Serbian",
      "sn": "Shona",
      "sd": "Sindhi",
      "si": "Sinhala",
      "sk": "Slovak",
      "sl": "Slovenian",
      "so": "Somali",
      "st": "Southern Sotho",
      "es": "Spanish",
      "su": "Sundanese",
      "sw": "Swahili",
      "sv": "Swedish",
      "tg": "Tajik",
      "ta": "Tamil",
      "tt": "Tatar",
      "te": "Telugu",
      "th": "Thai",
      "ti": "Tigrinya",
      "ts": "Tsonga",
      "tr": "Turkish",
      "tk": "Turkmen",
      "uk": "Ukrainian",
      "ur": "Urdu",
      "ug": "Uyghur",
      "uz": "Uzbek",
      "vi": "Vietnamese",
      "cy": "Welsh",
      "fy": "Western Frisian",
      "xh": "Xhosa",
      "yi": "Yiddish",
      "yo": "Yoruba",
      "zu": "Zulu",
    },
  },
  zh: {
    recommended: "推荐使用",
    translateVideo: "翻译视频",
    disableTranslate: "关掉",
    translationSettings: "翻译需要一个多小时",
    resetSettings: "重置设置",
    videoBeingTranslated: "视频正在翻译中",
    videoLanguage: "视频语言",
    translationLanguage: "翻译语言",
    translationTake: "翻译将采取",
    translationTakeMoreThanHour: "翻译将采取一个多小时",
    translationTakeAboutMinute: "翻译将采取一分钟",
    translationTakeFewMinutes: "翻译将采取几分钟",
    translationTakeApproximatelyMinutes: "翻译将采取大约需要{0}分钟",
    translationTakeApproximatelyMinute: "翻译将采取大约需要{0}分钟",
    unSupportedExtensionError:
      `错误! 此版本的扩展不支持 ${GM_info.scriptHandler}!\n\n请使用cloudflare版本的VOT扩展.`,
    requestTranslationFailed: "请求视频翻译失败",
    audioNotReceived: "未收到音频链接",
    grantPermissionToAutoPlay: "授予自动播放权限",
    neededAdditionalExtension: "需要一个额外的扩展来支持这个网站",
    audioFormatNotSupported: "不支持音频格式",
    VOTAutoTranslate: "打开时翻译",
    VOTDontTranslateYourLang: "不要从你的语言翻译过来",
    VOTVolume: "视频量",
    VOTVolumeTranslation: "翻译量",
    VOTAutoSetVolume: "将视频音量降低到",
    VOTShowVideoSlider: "视频音量滑块",
    VOTSyncVolume: "链接翻译和视频音量",
    VOTAudioProxy: "代理接收的音频",
    VOTDisableFromYourLang: "你已经禁用了你的语言的视频翻译",
    VOTLiveNotSupported: "不支持直播流的翻译",
    VOTPremiere: "等待首映结束后再翻译",
    VOTVideoIsTooLong: "视频太长",
    VOTNoVideoIDFound: "没有找到视频ID",
    VOTFailedInitDB: "初始化数据库失败",
    VOTDBNeedUpdate: "数据库需要更新,请重新加载页面",
    VOTDisabledForDBUpdating:
      `VOT由于更新数据库时出错而被禁用。 关闭所有打开的选项卡${window.location.hostname} 再试一次`,
    VOTFailedWriteToDB: "无法将数据写入数据库",
    VOTFailedReadFromDB: "无法从数据库中检索数据",
    VOTSubtitles: "字幕",
    VOTSubtitlesDisabled: "已禁用",
    VOTSubtitlesMaxLength: "字幕最大长度",
    VOTHighlightWords: "突出顯示單詞",
    VOTTranslatedFrom: "翻译自",
    VOTAutogenerated: "自动生成",
    langs: {
      "sq": "阿尔巴尼亚语",
      "ak": "阿肯语",
      "ar": "阿拉伯语",
      "am": "阿姆哈拉语",
      "as": "阿萨姆语",
      "az": "阿塞拜疆语",
      "ee": "埃维语",
      "ay": "艾马拉语",
      "ga": "爱尔兰语",
      "et": "爱沙尼亚语",
      "or": "奥里亚语",
      "om": "奥罗莫语",
      "eu": "巴斯克语",
      "be": "白俄罗斯语",
      "bg": "保加利亚语",
      "nso": "北索托语",
      "is": "冰岛语",
      "pl": "波兰语",
      "bs": "波斯尼亚语",
      "fa": "波斯语",
      "bho": "博杰普尔语",
      "ts": "聪加语",
      "tt": "鞑靼语",
      "da": "丹麦语",
      "de": "德语",
      "dv": "迪维希语",
      "ru": "俄语",
      "fr": "法语",
      "sa": "梵语",
      "fil": "菲律宾语",
      "fi": "芬兰语",
      "km": "高棉语",
      "ka": "格鲁吉亚语",
      "gu": "古吉拉特语",
      "gn": "瓜拉尼语",
      "kk": "哈萨克语",
      "ht": "海地克里奥尔语",
      "ko": "韩语",
      "ha": "豪萨语",
      "nl": "荷兰语",
      "gl": "加利西亚语",
      "ca": "加泰罗尼亚语",
      "cs": "捷克语",
      "kn": "卡纳达语",
      "ky": "柯尔克孜语",
      "xh": "科萨语",
      "co": "科西嘉语",
      "hr": "克罗地亚语",
      "qu": "克丘亚语",
      "ku": "库尔德语",
      "la": "拉丁语",
      "lv": "拉脱维亚语",
      "lo": "老挝语",
      "lt": "立陶宛语",
      "ln": "林加拉语",
      "lg": "卢干达语",
      "lb": "卢森堡语",
      "rw": "卢旺达语",
      "ro": "罗马尼亚语",
      "mt": "马耳他语",
      "mr": "马拉地语",
      "mg": "马拉加斯语",
      "ml": "马拉雅拉姆语",
      "ms": "马来语",
      "mk": "马其顿语",
      "mi": "毛利语",
      "mn": "蒙古语",
      "bn": "孟加拉语",
      "my": "缅甸语",
      "hmn": "苗语",
      "af": "南非荷兰语",
      "st": "南索托语",
      "ne": "尼泊尔语",
      "no": "挪威语",
      "pa": "旁遮普语",
      "pt": "葡萄牙语",
      "ps": "普什图语",
      "ny": "齐切瓦语",
      "ja": "日语",
      "sv": "瑞典语",
      "sm": "萨摩亚语",
      "sr": "塞尔维亚语",
      "si": "僧伽罗语",
      "sn": "绍纳语",
      "eo": "世界语",
      "sk": "斯洛伐克语",
      "sl": "斯洛文尼亚语",
      "sw": "斯瓦希里语",
      "gd": "苏格兰盖尔语",
      "ceb": "宿务语",
      "so": "索马里语",
      "tg": "塔吉克语",
      "te": "泰卢固语",
      "ta": "泰米尔语",
      "th": "泰语",
      "ti": "提格利尼亚语",
      "tr": "土耳其语",
      "tk": "土库曼语",
      "cy": "威尔士语",
      "ug": "维吾尔语",
      "ur": "乌尔都语",
      "uk": "乌克兰语",
      "uz": "乌兹别克语",
      "es": "西班牙语",
      "fy": "西弗里西亚语",
      "iw": "希伯来语",
      "el": "希腊语",
      "haw": "夏威夷语",
      "sd": "信德语",
      "hu": "匈牙利语",
      "su": "巽他语",
      "hy": "亚美尼亚语",
      "ig": "伊博语",
      "it": "意大利语",
      "yi": "意第绪语",
      "hi": "印地语",
      "id": "印度尼西亚语",
      "en": "英语",
      "yo": "约鲁巴语",
      "vi": "越南语",
      "jv": "爪哇语",
      "zh": "中文",
      "zh-Hant": "中文（繁体）",
      "zh-Hans": "中文（简体）",
      "zu": "祖鲁语",
      "kri": "Kri",
    },
  },
  ar: {
    recommended: "موصى به",
    translateVideo: "ترجمة الفيديو",
    disableTranslate: "إيقاف التشغيل",
    translationSettings: "إعدادات الترجمة",
    resetSettings: "إعادة تعيين الإعدادات",
    videoBeingTranslated: "يتم ترجمة الفيديو",
    videoLanguage: "لغة الفيديو",
    translationLanguage: "لغة الترجمة",
    translationTake: "ستستغرق الترجمة",
    translationTakeMoreThanHour: "ستستغرق الترجمة أكثر من ساعة",
    translationTakeAboutMinute: "ستستغرق الترجمة حوالي دقيقة",
    translationTakeFewMinutes: "ستستغرق الترجمة بضع دقائق",
    translationTakeApproximatelyMinutes:
      "ستستغرق الترجمة تقريبا {0} دقائق",
    translationTakeApproximatelyMinute:
      "ستستغرق الترجمة تقريبا {0} دقيقة",
    unSupportedExtensionError:
      `خطأ! ${GM_info.scriptHandler} غير مدعوم من قبل هذه النسخة من الامتداد!\n\nيرجى استخدام نسخة cloudflare من امتداد VOT.`,
    requestTranslationFailed: "فشل طلب ترجمة الفيديو",
    audioNotReceived: "لم يتم استلام رابط الصوت",
    grantPermissionToAutoPlay: "السماح بالتشغيل التلقائي",
    neededAdditionalExtension: "هناك حاجة إلى امتداد إضافي لدعم هذا الموقع",
    audioFormatNotSupported: "تنسيق الصوت غير مدعوم",
    VOTAutoTranslate: "الترجمة عند الفتح",
    VOTDontTranslateYourLang: "لا تترجم من لغتي",
    VOTVolume: "حجم الفيديو",
    VOTVolumeTranslation: "حجم الترجمة",
    VOTAutoSetVolume: "خفض حجم الفيديو إلى ",
    VOTShowVideoSlider: "شريط تحكم حجم الفيديو",
    VOTSyncVolume: "اربط حجم الترجمة والفيديو",
    VOTAudioProxy: "الصوت المستلم عبر وكيل",
    VOTDisableFromYourLang: "لقد قمت بتعطيل ترجمة الفيديو بلغتك",
    VOTLiveNotSupported: "لا يتم دعم ترجمة البث المباشر",
    VOTPremiere: "انتظر حتى ينتهي العرض الأول قبل الترجمة",
    VOTVideoIsTooLong: "الفيديو طويل جداً",
    VOTNoVideoIDFound: "لم يتم العثور على معرف الفيديو",
    VOTFailedInitDB: "فشل في تهيئة قاعدة البيانات",
    VOTDBNeedUpdate:
      "تحتاج قاعدة البيانات إلى تحديث، يرجى إعادة تحميل الصفحة",
    VOTDisabledForDBUpdating:
      `VOT معطل بسبب خطأ عند تحديث قاعدة البيانات. أغلق جميع علامات التبويب المفتوحة مع ${window.location.hostname} وحاول مرة أخرى`,
    VOTFailedWriteToDB: "لم يتمكن من كتابة البيانات إلى قاعدة البيانات",
    VOTFailedReadFromDB: "لم يتمكن من استرداد البيانات من قاعدة البيانات",
    VOTSubtitles: "ترجمات",
    VOTSubtitlesDisabled: "عاجز",
    VOTSubtitlesMaxLength: "أقصى طول للترجمات",
    VOTHighlightWords: "تمييز الكلمات",
    VOTTranslatedFrom: "مترجم من",
    VOTAutogenerated: "يستخرج تلقائيا",
    langs: {
      "az": "الأذربيجانية",
      "hy": "الأرمنية",
      "as": "الأسامية",
      "es": "الإسبانية",
      "eo": "الإسبرانتو",
      "et": "الإستونية",
      "af": "الأفريقانية",
      "ak": "الأكانية",
      "sq": "الألبانية",
      "de": "الألمانية",
      "am": "الأمهرية",
      "en": "الإنجليزية",
      "id": "الإندونيسية",
      "ur": "الأوردية",
      "om": "الأورومية",
      "or": "الأورية",
      "uz": "الأوزبكية",
      "uk": "الأوكرانية",
      "ug": "الأويغورية",
      "ig": "الإيجبو",
      "ga": "الأيرلندية",
      "is": "الأيسلندية",
      "it": "الإيطالية",
      "ay": "الأيمارا",
      "ee": "الإيوي",
      "eu": "الباسكية",
      "pt": "البرتغالية",
      "ps": "البشتو",
      "bg": "البلغارية",
      "pa": "البنجابية",
      "bn": "البنغالية",
      "bho": "البهوجبورية",
      "my": "البورمية",
      "bs": "البوسنية",
      "pl": "البولندية",
      "be": "البيلاروسية",
      "ta": "التاميلية",
      "th": "التايلاندية",
      "tt": "التترية",
      "tk": "التركمانية",
      "tr": "التركية",
      "cs": "التشيكية",
      "ti": "التغرينية",
      "te": "التيلوغوية",
      "gl": "الجاليكية",
      "jv": "الجاوية",
      "ka": "الجورجية",
      "km": "الخميرية",
      "xh": "الخوسا",
      "da": "الدانمركية",
      "ru": "الروسية",
      "ro": "الرومانية",
      "zu": "الزولو",
      "sm": "الساموائية",
      "sk": "السلوفاكية",
      "sl": "السلوفانية",
      "sd": "السندية",
      "sa": "السنسكريتية",
      "si": "السنهالية",
      "sw": "السواحلية",
      "st": "السوتو الجنوبية",
      "nso": "السوتو الشمالية",
      "ts": "السونجا",
      "su": "السوندانية",
      "sv": "السويدية",
      "ceb": "السيبيوانية",
      "sn": "الشونا",
      "sr": "الصربية",
      "so": "الصومالية",
      "zh": "الصينية",
      "zh-Hant": "الصينية (التقليدية)",
      "zh-Hans": "الصينية (المبسطة)",
      "tg": "الطاجيكية",
      "iw": "العبرية",
      "ar": "العربية",
      "lg": "الغاندا",
      "gn": "الغوارانية",
      "gu": "الغوجاراتية",
      "gd": "الغيلية الأسكتلندية",
      "fa": "الفارسية",
      "fr": "الفرنسية",
      "fy": "الفريزيان",
      "fil": "الفلبينية",
      "fi": "الفنلندية",
      "vi": "الفيتنامية",
      "ky": "القيرغيزية",
      "kk": "الكازاخستانية",
      "kn": "الكانادا",
      "ca": "الكتالانية",
      "ku": "الكردية",
      "hr": "الكرواتية",
      "ht": "الكريولية الهايتية",
      "co": "الكورسيكية",
      "ko": "الكورية",
      "qu": "الكويتشوا",
      "rw": "الكينيارواندا",
      "lv": "اللاتفية",
      "la": "اللاتينية",
      "lo": "اللاوية",
      "lb": "اللكسمبورغية",
      "lt": "الليتوانية",
      "ln": "اللينجالا",
      "mr": "الماراثية",
      "ml": "المالايالامية",
      "dv": "المالديفية",
      "mt": "المالطية",
      "ms": "الماليزية",
      "mi": "الماورية",
      "mk": "المقدونية",
      "mg": "الملغاشي",
      "mn": "المنغولية",
      "no": "النرويجية",
      "ny": "النيانجا",
      "ne": "النيبالية",
      "hmn": "الهمونجية",
      "hi": "الهندية",
      "hu": "الهنغارية",
      "ha": "الهوسا",
      "nl": "الهولندية",
      "cy": "الويلزية",
      "ja": "اليابانية",
      "yi": "اليديشية",
      "yo": "اليوروبا",
      "el": "اليونانية",
      "haw": "لغة هاواي",
      "kri": "Kri",
    },
  },
  ko: {
    recommended: "추천",
    translateVideo: "비디오 번역",
    disableTranslate: "끄기",
    translationSettings: "번역 설정",
    resetSettings: "설정 초기화",
    videoBeingTranslated: "비디오가 번역되고 있습니다",
    videoLanguage: "비디오 언어",
    translationLanguage: "번역 언어",
    translationTake: "번역에 걸리는 시간",
    translationTakeMoreThanHour: "번역에 1시간 이상 걸립니다",
    translationTakeAboutMinute: "번역에 약 1분 걸립니다",
    translationTakeFewMinutes: "번역에 몇 분 걸립니다",
    translationTakeApproximatelyMinutes:
      "번역에 약 {0}분 걸립니다",
    translationTakeApproximatelyMinute:
      "번역에 약 {0}분 걸립니다",
    unSupportedExtensionError:
      `오류! ${GM_info.scriptHandler}는 이 버전의 확장 프로그램에서 지원되지 않습니다!\n\nVOT 확장 프로그램의 클라우드플레어 버전을 사용하십시오.`,
    requestTranslationFailed: "비디오 번역 요청 실패",
    audioNotReceived: "오디오 링크를 받지 못했습니다",
    grantPermissionToAutoPlay: "자동 재생 권한 부여",
    neededAdditionalExtension:
      "이 사이트를 지원하기 위해 추가 확장 프로그램이 필요합니다",
    audioFormatNotSupported: "오디오 형식이 지원되지 않습니다",
    VOTAutoTranslate: "열 때 번역하기",
    VOTDontTranslateYourLang: "내 언어에서 번역하지 않기",
    VOTVolume: "비디오 볼륨",
    VOTVolumeTranslation: "번역 볼륨",
    VOTAutoSetVolume: "비디오 볼륨을 줄입니다 ",
    VOTShowVideoSlider: "비디오 볼륨 슬라이더",
    VOTSyncVolume: "번역과 비디오 볼륨 연동하기",
    VOTAudioProxy: "프록시로 오디오 받기",
    VOTDisableFromYourLang: "내 언어로 된 비디오의 번역을 비활성화했습니다",
    VOTLiveNotSupported: "라이브 스트림의 번역은 지원되지 않습니다",
    VOTPremiere: "번역하기 전에 프리미어가 끝날 때까지 기다리십시오",
    VOTVideoIsTooLong: "비디오가 너무 깁니다",
    VOTNoVideoIDFound: "비디오 ID를 찾을 수 없습니다",
    VOTFailedInitDB: "데이터베이스 초기화 실패",
    VOTDBNeedUpdate:
      "데이터베이스가 업데이트가 필요합니다. 페이지를 새로고침하십시오",
    VOTDisabledForDBUpdating:
      `데이터베이스 업데이트 오류로 인해 VOT가 비활성화되었습니다. ${window.location.hostname}와 열려 있는 모든 탭을 닫고 다시 시도하십시오`,
    VOTFailedWriteToDB: "데이터베이스에 데이터를 쓸 수 없습니다",
    VOTFailedReadFromDB: "데이터베이스에서 데이터를 읽을 수 없습니다",
    VOTSubtitles: "자막",
    VOTSubtitlesDisabled: "장애가 있는",
    VOTSubtitlesMaxLength: "자막 최대 길이",
    VOTHighlightWords: "강조 단어",
    VOTTranslatedFrom: "에서 번역",
    VOTAutogenerated: "자동 생성",
    langs: {
      "lg": "간다어",
      "gl": "갈리시아어",
      "gn": "과라니어",
      "gu": "구자라트어",
      "el": "그리스어",
      "st": "남부 소토어",
      "ny": "냔자어",
      "nl": "네덜란드어",
      "ne": "네팔어",
      "no": "노르웨이어",
      "da": "덴마크어",
      "de": "독일어",
      "dv": "디베히어",
      "lo": "라오어",
      "lv": "라트비아어",
      "la": "라틴어",
      "ru": "러시아어",
      "ro": "루마니아어",
      "lb": "룩셈부르크어",
      "rw": "르완다어",
      "lt": "리투아니아어",
      "ln": "링갈라어",
      "mr": "마라티어",
      "mi": "마오리어",
      "mk": "마케도니아어",
      "mg": "말라가시어",
      "ml": "말라얄람어",
      "ms": "말레이어",
      "mt": "몰타어",
      "mn": "몽골어",
      "eu": "바스크어",
      "my": "버마어",
      "vi": "베트남어",
      "be": "벨라루스어",
      "bn": "벵골어",
      "bs": "보스니아어",
      "nso": "북부 소토어",
      "bg": "불가리아어",
      "sm": "사모아어",
      "sa": "산스크리트어",
      "fy": "서부 프리지아어",
      "sr": "세르비아어",
      "ceb": "세부아노어",
      "so": "소말리아어",
      "sn": "쇼나어",
      "su": "순다어",
      "sw": "스와힐리어",
      "sv": "스웨덴어",
      "gd": "스코틀랜드 게일어",
      "es": "스페인어",
      "sk": "슬로바키아어",
      "sl": "슬로베니아어",
      "sd": "신디어",
      "si": "싱할라어",
      "ar": "아랍어",
      "hy": "아르메니아어",
      "as": "아삼어",
      "ay": "아이마라어",
      "is": "아이슬란드어",
      "ht": "아이티어",
      "ga": "아일랜드어",
      "az": "아제르바이잔어",
      "ak": "아칸어",
      "af": "아프리칸스어",
      "sq": "알바니아어",
      "am": "암하라어",
      "et": "에스토니아어",
      "eo": "에스페란토어",
      "ee": "에웨어",
      "en": "영어",
      "om": "오로모어",
      "or": "오리야어",
      "yo": "요루바어",
      "ur": "우르두어",
      "uz": "우즈베크어",
      "uk": "우크라이나어",
      "cy": "웨일스어",
      "ug": "위구르어",
      "ig": "이그보어",
      "yi": "이디시어",
      "it": "이탈리아어",
      "id": "인도네시아어",
      "ja": "일본어",
      "jv": "자바어",
      "ka": "조지아어",
      "zu": "줄루어",
      "zh": "중국어",
      "zh-Hans": "중국어(간체)",
      "zh-Hant": "중국어(번체)",
      "cs": "체코어",
      "ts": "총가어",
      "kk": "카자흐어",
      "ca": "카탈로니아어",
      "kn": "칸나다어",
      "qu": "케추아어",
      "co": "코르시카어",
      "xh": "코사어",
      "ku": "쿠르드어",
      "hr": "크로아티아어",
      "km": "크메르어",
      "ky": "키르기스어",
      "ta": "타밀어",
      "tg": "타지크어",
      "tt": "타타르어",
      "th": "태국어",
      "tr": "터키어",
      "te": "텔루구어",
      "tk": "투르크멘어",
      "ti": "티그리냐어",
      "ps": "파슈토어",
      "pa": "펀잡어",
      "fa": "페르시아어",
      "pt": "포르투갈어",
      "pl": "폴란드어",
      "fr": "프랑스어",
      "fi": "핀란드어",
      "fil": "필리핀어",
      "haw": "하와이어",
      "ha": "하우사어",
      "ko": "한국어",
      "hu": "헝가리어",
      "bho": "호즈푸리어",
      "hmn": "히몸어",
      "iw": "히브리어",
      "hi": "힌디어",
      "kri": "Kri",
    },
  },
  de: {
    recommended: "es wird empfohlen",
    translateVideo: "Video übersetzen",
    disableTranslate: "Ausschalten",
    translationSettings: "Übersetzungseinstellungen",
    resetSettings: "Einstellungen zurücksetzen",
    videoBeingTranslated: "Das Video wird übersetzt",
    videoLanguage: "Sprache Video",
    translationLanguage: "Zielsprache",
    translationTake: "Die Übersetzung dauert",
    translationTakeMoreThanHour: "Die Übersetzung dauert mehr als eine Stunde",
    translationTakeAboutMinute: "Die Übersetzung dauert ungefähr eine Minute",
    translationTakeFewMinutes: "Die Übersetzung dauert einige Minuten",
    translationTakeApproximatelyMinutes:
      "Die Übersetzung dauert ungefähr {0} Minuten",
    translationTakeApproximatelyMinute:
      "Die Übersetzung dauert ungefähr {0} Minuten",
    unSupportedExtensionError:
      `Fehler! ${GM_info.scriptHandler} wird von dieser Version der Erweiterung nicht unterstützt!\n\nBitte verwenden Sie die Cloudflare-Version der VOT-Erweiterung.`,
    requestTranslationFailed:
      "Videoübersetzung konnte nicht angefordert werden",
    audioNotReceived: "Audiolink nicht empfangen",
    grantPermissionToAutoPlay:
      "Erteilen Sie die Berechtigung zur automatischen Wiedergabe",
    neededAdditionalExtension:
      "Eine zusätzliche Erweiterung ist erforderlich, um diese Website zu unterstützen",
    audioFormatNotSupported: "Das Audioformat wird nicht unterstützt",
    VOTAutoTranslate: "Beim Öffnen übersetzen",
    VOTDontTranslateYourLang: "Nicht aus Ihrer Sprache übersetzen",
    VOTVolume: "Video Lautstärke",
    VOTVolumeTranslation: "Übersetzungsvolumen",
    VOTAutoSetVolume: "Video-Lautstärke auf reduzieren ",
    VOTShowVideoSlider: "Video-Lautstärkeregler",
    VOTSyncVolume: "Übersetzungs- und Videolautstärke verknüpfen",
    VOTAudioProxy: "Empfangenes Audio proxyen",
    VOTDisableFromYourLang:
      "Sie haben die Übersetzung des Videos in Ihrer Sprache deaktiviert",
    VOTLiveNotSupported: "Übersetzung von Live-Streams wird nicht unterstützt",
    VOTPremiere:
      "Warten Sie, bis die Premiere beendet ist, bevor Sie übersetzen",
    VOTVideoIsTooLong: "Video ist zu lang",
    VOTNoVideoIDFound: "Keine Video-ID gefunden",
    VOTFailedInitDB: "Datenbank konnte nicht initialisiert werden",
    VOTDBNeedUpdate:
      "Die Datenbank muss aktualisiert werden, bitte laden Sie die Seite neu",
    VOTDisabledForDBUpdating:
      `VOT wurde aufgrund eines Fehlers beim Aktualisieren der Datenbank deaktiviert. Schließen Sie alle geöffneten Tabs mit ${window.location.hostname} und versuchen Sie es erneut`,
    VOTFailedWriteToDB:
      "Daten konnten nicht in die Datenbank geschrieben werden",
    VOTFailedReadFromDB: "Konnte keine Daten aus der Datenbank abrufen",
    VOTSubtitles: "Untertitel",
    VOTSubtitlesDisabled: "Deaktiviert",
    VOTSubtitlesMaxLength: "Untertitel maximale Länge",
    VOTHighlightWords: "Markieren Sie Wörter",
    VOTTranslatedFrom: "übersetzt aus",
    VOTAutogenerated: "automatisch generiert",
    langs: {
      "af": "Afrikaans",
      "ak": "Akan",
      "sq": "Albanisch",
      "am": "Amharisch",
      "ar": "Arabisch",
      "hy": "Armenisch",
      "az": "Aserbaidschanisch",
      "as": "Assamesisch",
      "ay": "Aymara",
      "eu": "Baskisch",
      "be": "Belarussisch",
      "bn": "Bengalisch",
      "bho": "Bhodschpuri",
      "my": "Birmanisch",
      "bs": "Bosnisch",
      "bg": "Bulgarisch",
      "ceb": "Cebuano",
      "zh": "Chinesisch",
      "zh-Hant": "Chinesisch (Traditionell)",
      "zh-Hans": "Chinesisch (Vereinfacht)",
      "da": "Dänisch",
      "de": "Deutsch",
      "dv": "Dhivehi",
      "en": "Englisch",
      "eo": "Esperanto",
      "et": "Estnisch",
      "ee": "Ewe",
      "fil": "Filipino",
      "fi": "Finnisch",
      "fr": "Französisch",
      "gl": "Galicisch",
      "gd": "Gälisch (Schottland)",
      "lg": "Ganda",
      "ka": "Georgisch",
      "el": "Griechisch",
      "gn": "Guaraní",
      "gu": "Gujarati",
      "ht": "Haiti-Kreolisch",
      "ha": "Haussa",
      "haw": "Hawaiisch",
      "iw": "Hebräisch",
      "hi": "Hindi",
      "ig": "Igbo",
      "id": "Indonesisch",
      "ga": "Irisch",
      "is": "Isländisch",
      "it": "Italienisch",
      "ja": "Japanisch",
      "jv": "Javanisch",
      "yi": "Jiddisch",
      "kn": "Kannada",
      "kk": "Kasachisch",
      "ca": "Katalanisch",
      "km": "Khmer",
      "rw": "Kinyarwanda",
      "ky": "Kirgisisch",
      "ko": "Koreanisch",
      "co": "Korsisch",
      "kri": "Krio",
      "hr": "Kroatisch",
      "ku": "Kurdisch",
      "lo": "Laotisch",
      "la": "Latein",
      "lv": "Lettisch",
      "ln": "Lingala",
      "lt": "Litauisch",
      "lb": "Luxemburgisch",
      "mg": "Malagasy",
      "ms": "Malaiisch",
      "ml": "Malayalam",
      "mt": "Maltesisch",
      "mi": "Māori",
      "mr": "Marathi",
      "mk": "Mazedonisch",
      "hmn": "Miao",
      "mn": "Mongolisch",
      "ne": "Nepalesisch",
      "nl": "Niederländisch",
      "nso": "Nord-Sotho",
      "no": "Norwegisch",
      "ny": "Nyanja",
      "or": "Oriya",
      "om": "Oromo",
      "ps": "Paschtu",
      "fa": "Persisch",
      "pl": "Polnisch",
      "pt": "Portugiesisch",
      "pa": "Punjabi",
      "qu": "Quechua",
      "ro": "Rumänisch",
      "ru": "Russisch",
      "sm": "Samoanisch",
      "sa": "Sanskrit",
      "sv": "Schwedisch",
      "sr": "Serbisch",
      "sn": "Shona",
      "sd": "Sindhi",
      "si": "Singhalesisch",
      "sk": "Slowakisch",
      "sl": "Slowenisch",
      "so": "Somali",
      "es": "Spanisch",
      "sw": "Suaheli",
      "st": "Süd-Sotho",
      "su": "Sundanesisch",
      "tg": "Tadschikisch",
      "ta": "Tamil",
      "tt": "Tatarisch",
      "te": "Telugu",
      "th": "Thailändisch",
      "ti": "Tigrinya",
      "cs": "Tschechisch",
      "ts": "Tsonga",
      "tr": "Türkisch",
      "tk": "Turkmenisch",
      "ug": "Uigurisch",
      "uk": "Ukrainisch",
      "hu": "Ungarisch",
      "ur": "Urdu",
      "uz": "Usbekisch",
      "vi": "Vietnamesisch",
      "cy": "Walisisch",
      "fy": "Westfriesisch",
      "xh": "Xhosa",
      "yo": "Yoruba",
      "zu": "Zulu",
    },
  },
  es: {
    recommended: "es recomendable",
    translateVideo: "Traducir video",
    disableTranslate: "Apagar",
    translationSettings: "Ajustes de traducción",
    resetSettings: "Restablecer ajustes",
    videoBeingTranslated: "El video está siendo traducido",
    videoLanguage: "Idioma del video",
    translationLanguage: "Idioma de la traducción",
    translationTake: "La traducción tardará",
    translationTakeMoreThanHour: "La traducción tardará más de una hora",
    translationTakeAboutMinute:
      "La traducción tardará aproximadamente un minuto",
    translationTakeFewMinutes: "La traducción tardará unos minutos",
    translationTakeApproximatelyMinutes:
      "La traducción tardará aproximadamente {0} minutos",
    translationTakeApproximatelyMinute:
      "La traducción tardará aproximadamente {0} minutos",
    unSupportedExtensionError:
      `Error! ${GM_info.scriptHandler} no es compatible con esta versión de la extensión!\n\nUtilice la versión cloudflare de la extensión VOT.`,
    requestTranslationFailed: "Error al solicitar la traducción de vídeo",
    audioNotReceived: "Audiolink nicht empfangen",
    grantPermissionToAutoPlay: "Conceder permiso de reproducción automática",
    neededAdditionalExtension:
      "Se necesita una extensión adicional para admitir este sitio",
    audioFormatNotSupported: "El formato de audio no es compatible",
    VOTAutoTranslate: "Traducir al abrir",
    VOTDontTranslateYourLang: "No traduzca de su lengua",
    VOTVolume: "Volumen de vídeo",
    VOTVolumeTranslation: "Volumen de traducción",
    VOTAutoSetVolume: "Reducir el volumen del video al ",
    VOTShowVideoSlider: "Deslizador de volumen de video",
    VOTSyncVolume: "Vincular el volumen de traducción y video",
    VOTAudioProxy: "Proxificar el audio recibido",
    VOTDisableFromYourLang:
      "Ha desactivado la traducción del vídeo en su idioma",
    VOTLiveNotSupported: "No se admite la traducción de transmisiones en vivo",
    VOTPremiere: "Espere a que termine el estreno antes de traducir",
    VOTVideoIsTooLong: "El video es demasiado largo",
    VOTNoVideoIDFound: "No se encontró id de video",
    VOTFailedInitDB: "No se pudo inicializar la base de datos",
    VOTDBNeedUpdate:
      "la Base de datos necesita una actualización, por favor vuelva a cargar la página",
    VOTDisabledForDBUpdating:
      `VOT está deshabilitado debido a un error al actualizar la Base de Datos. Cierre todas las pestañas abiertas con ${window.location.hostname} y vuelve a intentarlo`,
    VOTFailedWriteToDB: "No se pudo escribir datos en la base de datos",
    VOTFailedReadFromDB: "No se pudo recuperar datos de la base de datos",
    VOTSubtitles: "Subtítulos",
    VOTSubtitlesDisabled: "Desactivado",
    VOTSubtitlesMaxLength: "Longitud máxima de los subtítulos",
    VOTHighlightWords: "Resaltar palabras",
    VOTTranslatedFrom: "traducido de",
    VOTAutogenerated: "auto generado",
    langs: {
      "af": "Afrikáans",
      "ay": "Aimara",
      "ak": "Akan",
      "sq": "Albanés",
      "de": "Alemán",
      "am": "Amárico",
      "ar": "Árabe",
      "hy": "Armenio",
      "as": "Asamés",
      "az": "Azerbaiyano",
      "bn": "Bengalí",
      "bho": "Bhoyapurí",
      "be": "Bielorruso",
      "my": "Birmano",
      "bs": "Bosnio",
      "bg": "Búlgaro",
      "kn": "Canarés",
      "ca": "Catalán",
      "ceb": "Cebuano",
      "cs": "Checo",
      "zh": "Chino",
      "zh-Hans": "Chino (Simplificado)",
      "zh-Hant": "Chino (Tradicional)",
      "si": "Cingalés",
      "ko": "Coreano",
      "co": "Corso",
      "ht": "Criollo Haitiano",
      "hr": "Croata",
      "da": "Danés",
      "dv": "Divehi",
      "sk": "Eslovaco",
      "sl": "Esloveno",
      "es": "Español",
      "eo": "Esperanto",
      "et": "Estonio",
      "eu": "Euskera",
      "ee": "Ewé",
      "fil": "Filipino",
      "fi": "Finés",
      "fr": "Francés",
      "fy": "Frisón Occidental",
      "gd": "Gaélico Escocés",
      "cy": "Galés",
      "gl": "Gallego",
      "lg": "Ganda",
      "ka": "Georgiano",
      "el": "Griego",
      "gn": "Guaraní",
      "gu": "Guyaratí",
      "ha": "Hausa",
      "haw": "Hawaiano",
      "iw": "Hebreo",
      "hi": "Hindi",
      "hmn": "Hmong",
      "hu": "Húngaro",
      "ig": "Igbo",
      "id": "Indonesio",
      "en": "Inglés",
      "ga": "Irlandés",
      "is": "Islandés",
      "it": "Italiano",
      "ja": "Japonés",
      "jv": "Javanés",
      "km": "Jemer",
      "kk": "Kazajo",
      "rw": "Kinyarwanda",
      "ky": "Kirguís",
      "kri": "Kri",
      "ku": "Kurdo",
      "lo": "Lao",
      "la": "Latín",
      "lv": "Letón",
      "ln": "Lingala",
      "lt": "Lituano",
      "lb": "Luxemburgués",
      "mk": "Macedonio",
      "ml": "Malayálam",
      "ms": "Malayo",
      "mg": "Malgache",
      "mt": "Maltés",
      "mi": "Maorí",
      "mr": "Maratí",
      "mn": "Mongol",
      "nl": "Neerlandés",
      "ne": "Nepalí",
      "no": "Noruego",
      "ny": "Nyanja",
      "or": "Oriya",
      "om": "Oromo",
      "ps": "Pastún",
      "fa": "Persa",
      "pl": "Polaco",
      "pt": "Portugués",
      "pa": "Punyabí",
      "qu": "Quechua",
      "ro": "Rumano",
      "ru": "Ruso",
      "sm": "Samoano",
      "sa": "Sánscrito",
      "sr": "Serbio",
      "sn": "Shona",
      "sd": "Sindi",
      "so": "Somalí",
      "st": "Sotho Meridional",
      "nso": "Sotho Septentrional",
      "sw": "Suajili",
      "sv": "Sueco",
      "su": "Sundanés",
      "th": "Tailandés",
      "ta": "Tamil",
      "tt": "Tártaro",
      "tg": "Tayiko",
      "te": "Telugu",
      "ti": "Tigriña",
      "ts": "Tsonga",
      "tr": "Turco",
      "tk": "Turcomano",
      "uk": "Ucraniano",
      "ug": "Uigur",
      "ur": "Urdu",
      "uz": "Uzbeko",
      "vi": "Vietnamita",
      "xh": "Xhosa",
      "yi": "Yidis",
      "yo": "Yoruba",
      "zu": "Zulú",
    },
  },
  fr: {
    recommended: "recommande",
    translateVideo: "Traduire la vidéo",
    disableTranslate: "Désactiver",
    translationSettings: "Paramètres de traduction",
    resetSettings: "Réinitialiser les paramètres",
    videoBeingTranslated: "La vidéo est en cours de traduction",
    videoLanguage: "Langue vidéo",
    translationLanguage: "Langue cible",
    translationTake: "La traduction prendra",
    translationTakeMoreThanHour: "La traduction prendra plus d'une heure",
    translationTakeAboutMinute: "La traduction prendra environ une minute",
    translationTakeFewMinutes: "La traduction prendra quelques minutes",
    translationTakeApproximatelyMinutes:
      "La traduction prendra environ {0} minutes",
    translationTakeApproximatelyMinute:
      "La traduction prendra environ {0} minutes",
    unSupportedExtensionError:
      `Erreur! ${GM_info.scriptHandler} n'est pas supporté par cette version de l'extension!!\n\nVeuillez utiliser la version cloudflare de l'extension VOT.`,
    requestTranslationFailed:
      "Impossible de demander la traduction de la vidéo",
    audioNotReceived: "Lien audio non reçu",
    grantPermissionToAutoPlay: "Accorder l'autorisation de lecture automatique",
    neededAdditionalExtension:
      "Une extension supplémentaire est nécessaire pour prendre en charge ce site",
    audioFormatNotSupported: "Format audio non pris en charge",
    VOTAutoTranslate: "Traduire à l'ouverture",
    VOTDontTranslateYourLang: "Ne pas traduire à partir de votre langue",
    VOTVolume: "Volume de la vidéo",
    VOTVolumeTranslation: "Volume de traduction",
    VOTAutoSetVolume: "Réduire le volume de la vidéo à ",
    VOTShowVideoSlider: "Curseur de volume vidéo",
    VOTSyncVolume: "Lier le volume de la traduction et de la vidéo",
    VOTAudioProxy: "Proxy audio reçu",
    VOTDisableFromYourLang:
      "Vous avez désactivé la traduction de la vidéo dans votre langue",
    VOTLiveNotSupported:
      "La traduction des flux en direct n'est pas prise en charge",
    VOTPremiere: "Attendez la fin de la première avant de traduire",
    VOTVideoIsTooLong: "La vidéo est trop longue",
    VOTNoVideoIDFound: "ID vidéo introuvable",
    VOTFailedInitDB: "Impossible d'initialiser la base de données",
    VOTDBNeedUpdate:
      "la Base de données a besoin d'une mise à jour, veuillez recharger la page",
    VOTDisabledForDBUpdating:
      `VOT est désactivé en raison d'une erreur lors de la mise à jour de la Base de Données. Fermez tous les onglets ouverts avec ${window.location.hostname} et essayez à nouveau`,
    VOTFailedWriteToDB:
      "Impossible d'écrire les données dans la base de données",
    VOTFailedReadFromDB:
      "Impossible de récupérer les données de la base de données",
    VOTSubtitles: "Les sous-titres",
    VOTSubtitlesDisabled: "Désactivé",
    VOTSubtitlesMaxLength: "Longueur max des sous-titres",
    VOTHighlightWords: "Mettre en surbrillance les mots",
    VOTTranslatedFrom: "traduit de",
    VOTAutogenerated: "genere automatiquement",
    langs: {
      "af": "Afrikaans",
      "ak": "Akan",
      "sq": "Albanais",
      "de": "Allemand",
      "am": "Amharique",
      "en": "Anglais",
      "ar": "Arabe",
      "hy": "Arménien",
      "as": "Assamais",
      "ay": "Aymara",
      "az": "Azerbaïdjanais",
      "eu": "Basque",
      "bn": "Bengali",
      "bho": "Bhodjpouri",
      "be": "Biélorusse",
      "my": "Birman",
      "bs": "Bosniaque",
      "bg": "Bulgare",
      "ca": "Catalan",
      "ceb": "Cebuano",
      "ny": "Chewa",
      "zh": "Chinois",
      "zh-Hans": "Chinois (Simplifié)",
      "zh-Hant": "Chinois (Traditionnel)",
      "si": "Cingalais",
      "ko": "Coréen",
      "co": "Corse",
      "ht": "Créole Haïtien",
      "hr": "Croate",
      "da": "Danois",
      "es": "Espagnol",
      "eo": "Espéranto",
      "et": "Estonien",
      "ee": "Éwé",
      "fil": "Filipino",
      "fi": "Finnois",
      "fr": "Français",
      "fy": "Frison Occidental",
      "gd": "Gaélique Écossais",
      "gl": "Galicien",
      "cy": "Gallois",
      "lg": "Ganda",
      "ka": "Géorgien",
      "gu": "Goudjarati",
      "el": "Grec",
      "gn": "Guarani",
      "ha": "Haoussa",
      "haw": "Hawaïen",
      "iw": "Hébreu",
      "hi": "Hindi",
      "hmn": "Hmong",
      "hu": "Hongrois",
      "ig": "Igbo",
      "id": "Indonésien",
      "ga": "Irlandais",
      "is": "Islandais",
      "it": "Italien",
      "ja": "Japonais",
      "jv": "Javanais",
      "kn": "Kannada",
      "kk": "Kazakh",
      "km": "Khmer",
      "rw": "Kinyarwanda",
      "ky": "Kirghize",
      "kri": "Krio",
      "ku": "Kurde",
      "lo": "Lao",
      "la": "Latin",
      "lv": "Letton",
      "ln": "Lingala",
      "lt": "Lituanien",
      "lb": "Luxembourgeois",
      "mk": "Macédonien",
      "ms": "Malais",
      "ml": "Malayalam",
      "dv": "Maldivien",
      "mg": "Malgache",
      "mt": "Maltais",
      "mi": "Maori",
      "mr": "Marathi",
      "mn": "Mongol",
      "nl": "Néerlandais",
      "ne": "Népalais",
      "no": "Norvégien",
      "or": "Odia",
      "om": "Oromo",
      "ug": "Ouïghour",
      "ur": "Ourdou",
      "uz": "Ouzbek",
      "ps": "Pachto",
      "pa": "Pendjabi",
      "fa": "Persan",
      "pl": "Polonais",
      "pt": "Portugais",
      "qu": "Quechua",
      "ro": "Roumain",
      "ru": "Russe",
      "sm": "Samoan",
      "sa": "Sanskrit",
      "sr": "Serbe",
      "sn": "Shona",
      "sd": "Sindhi",
      "sk": "Slovaque",
      "sl": "Slovène",
      "so": "Somali",
      "nso": "Sotho Du Nord",
      "st": "Sotho Du Sud",
      "su": "Soundanais",
      "sv": "Suédois",
      "sw": "Swahili",
      "tg": "Tadjik",
      "ta": "Tamoul",
      "tt": "Tatar",
      "cs": "Tchèque",
      "te": "Télougou",
      "th": "Thaï",
      "ti": "Tigrigna",
      "ts": "Tsonga",
      "tr": "Turc",
      "tk": "Turkmène",
      "uk": "Ukrainien",
      "vi": "Vietnamien",
      "xh": "Xhosa",
      "yi": "Yiddish",
      "yo": "Yoruba",
      "zu": "Zoulou",
    },
  },
  it: {
    recommended: "è consigliabile",
    translateVideo: "Traduci il video",
    disableTranslate: "Spegnere",
    translationSettings: "Impostazioni di traduzione",
    resetSettings: "Ripristina impostazioni",
    videoBeingTranslated: "Il video è in fase di traduzione",
    videoLanguage: "Lingua Video",
    translationLanguage: "Lingua di traduzione",
    translationTake: "La traduzione richiederà",
    translationTakeMoreThanHour: "La traduzione richiederà più di un'ora",
    translationTakeAboutMinute: "La traduzione richiederà circa un minuto",
    translationTakeFewMinutes: "La traduzione richiederà alcuni minuti",
    translationTakeApproximatelyMinutes:
      "La traduzione richiederà circa {0} minuti",
    translationTakeApproximatelyMinute:
      "La traduzione richiederà circa {0} minuti",
    unSupportedExtensionError:
      `Errore! ${GM_info.scriptHandler} non è supportato da questa versione dell'estensione!\n\nUtilizzare la versione cloudflare dell'estensione VOT.`,
    requestTranslationFailed: "Richiesta di traduzione video non riuscita",
    audioNotReceived: "Collegamento audio non ricevuto",
    grantPermissionToAutoPlay:
      "Concedere l'Autorizzazione per la riproduzione automatica",
    neededAdditionalExtension:
      "Per supportare questo sito è necessaria un'estensione aggiuntiva",
    audioFormatNotSupported: "Il formato audio non è supportato",
    VOTAutoTranslate: "Traduci all'apertura",
    VOTDontTranslateYourLang: "Non traducete dalla vostra lingua",
    VOTVolume: "Volume video",
    VOTVolumeTranslation: "Volume di traduzione",
    VOTAutoSetVolume: "Riduci il volume del video al ",
    VOTShowVideoSlider: "Cursore del volume del video",
    VOTSyncVolume: "Collega il volume della traduzione e del video",
    VOTAudioProxy: "Proxy audio ricevuto",
    VOTDisableFromYourLang:
      "Avete disabilitato la traduzione del video nella vostra lingua",
    VOTLiveNotSupported: "La traduzione dei flussi dal vivo non è supportata",
    VOTPremiere: "Aspetta che la prima finisca prima di tradurre",
    VOTVideoIsTooLong: "Il video è troppo lungo",
    VOTNoVideoIDFound: "ID video non trovato",
    VOTFailedInitDB: "Impossibile inizializzare il database",
    VOTDBNeedUpdate:
      "Il database ha bisogno di aggiornamento, si prega di ricaricare la pagina",
    VOTDisabledForDBUpdating:
      `VOT è disabilitato a causa di un errore durante l'aggiornamento del database. CHIUDI tutte le schede aperte con ${window.location.hostname} e riprova`,
    VOTFailedWriteToDB: "Impossibile scrivere dati nel database",
    VOTFailedReadFromDB: "Impossibile recuperare i dati dal database",
    VOTSubtitles: "Sottotitoli",
    VOTSubtitlesDisabled: "Disabilitato",
    VOTSubtitlesMaxLength: "Lunghezza massima dei sottotitoli",
    VOTHighlightWords: "Evidenziare le parole",
    VOTTranslatedFrom: "tradotto da",
    VOTAutogenerated: "autogenerato",
    langs: {
      "af": "Afrikaans",
      "ak": "Akan",
      "sq": "Albanese",
      "am": "Amarico",
      "ar": "Arabo",
      "hy": "Armeno",
      "as": "Assamese",
      "ay": "Aymara",
      "az": "Azerbaigiano",
      "eu": "Basco",
      "bn": "Bengalese",
      "bho": "Bhojpuri",
      "be": "Bielorusso",
      "my": "Birmano",
      "bs": "Bosniaco",
      "bg": "Bulgaro",
      "ca": "Catalano",
      "ceb": "Cebuano",
      "cs": "Ceco",
      "zh": "Cinese",
      "zh-Hans": "Cinese (Semplificato)",
      "zh-Hant": "Cinese (Tradizionale)",
      "ko": "Coreano",
      "co": "Corso",
      "ht": "Creolo Haitiano",
      "hr": "Croato",
      "ku": "Curdo",
      "da": "Danese",
      "dv": "Divehi",
      "iw": "Ebraico",
      "eo": "Esperanto",
      "et": "Estone",
      "ee": "Ewe",
      "fil": "Filippino",
      "fi": "Finlandese",
      "fr": "Francese",
      "fy": "Frisone Occidentale",
      "gd": "Gaelico Scozzese",
      "gl": "Galiziano",
      "cy": "Gallese",
      "lg": "Ganda",
      "ka": "Georgiano",
      "ja": "Giapponese",
      "jv": "Giavanese",
      "el": "Greco",
      "gn": "Guaraní",
      "gu": "Gujarati",
      "ha": "Hausa",
      "haw": "Hawaiano",
      "hi": "Hindi",
      "hmn": "Hmong",
      "ig": "Igbo",
      "id": "Indonesiano",
      "en": "Inglese",
      "ga": "Irlandese",
      "is": "Islandese",
      "it": "Italiano",
      "kn": "Kannada",
      "kk": "Kazako",
      "km": "Khmer",
      "rw": "Kinyarwanda",
      "ky": "Kirghiso",
      "kri": "Kri",
      "lo": "Lao",
      "la": "Latino",
      "lv": "Lettone",
      "ln": "Lingala",
      "lt": "Lituano",
      "lb": "Lussemburghese",
      "mk": "Macedone",
      "ml": "Malayalam",
      "ms": "Malese",
      "mg": "Malgascio",
      "mt": "Maltese",
      "mi": "Maori",
      "mr": "Marathi",
      "mn": "Mongolo",
      "ne": "Nepalese",
      "no": "Norvegese",
      "ny": "Nyanja",
      "or": "Odia",
      "nl": "Olandese",
      "om": "Oromo",
      "ps": "Pashto",
      "fa": "Persiano",
      "pl": "Polacco",
      "pt": "Portoghese",
      "pa": "Punjabi",
      "qu": "Quechua",
      "ro": "Rumeno",
      "ru": "Russo",
      "sm": "Samoano",
      "sa": "Sanscrito",
      "sr": "Serbo",
      "sn": "Shona",
      "sd": "Sindhi",
      "si": "Singalese",
      "sk": "Slovacco",
      "sl": "Sloveno",
      "so": "Somalo",
      "nso": "Sotho Del Nord",
      "st": "Sotho Del Sud",
      "es": "Spagnolo",
      "su": "Sundanese",
      "sv": "Svedese",
      "sw": "Swahili",
      "tg": "Tagico",
      "ta": "Tamil",
      "tt": "Tataro",
      "de": "Tedesco",
      "te": "Telugu",
      "th": "Thailandese",
      "ti": "Tigrino",
      "ts": "Tsonga",
      "tr": "Turco",
      "tk": "Turcomanno",
      "uk": "Ucraino",
      "ug": "Uiguro",
      "hu": "Ungherese",
      "ur": "Urdu",
      "uz": "Uzbeco",
      "vi": "Vietnamita",
      "xh": "Xhosa",
      "yi": "Yiddish",
      "yo": "Yoruba",
      "zu": "Zulu",
    },
  },
  ja: {
    recommended: "おすすめ",
    translateVideo: "動画を翻訳する",
    disableTranslate: "オフにする",
    translationSettings: "翻訳設定",
    resetSettings: "設定をリセットする",
    videoBeingTranslated: "動画が翻訳されています",
    videoLanguage: "動画の言語",
    translationLanguage: "翻訳言語",
    translationTake: "翻訳にかかる時間は",
    translationTakeMoreThanHour: "翻訳には1時間以上かかります",
    translationTakeAboutMinute: "翻訳には約1分かかります",
    translationTakeFewMinutes: "翻訳には数分かかります",
    translationTakeApproximatelyMinutes:
      "翻訳には約{0}分かかります",
    translationTakeApproximatelyMinute:
      "翻訳には約{0}分かかります",
    unSupportedExtensionError:
      `エラー！ ${GM_info.scriptHandler} はこのバージョンの拡張機能ではサポートされていません！\n\nVOT拡張機能のcloudflareバージョンを使用してください。`,
    requestTranslationFailed: "動画の翻訳リクエストに失敗しました",
    audioNotReceived: "音声リンクが受信されませんでした",
    grantPermissionToAutoPlay: "自動再生の権限を付与する",
    neededAdditionalExtension:
      "このサイトをサポートするために追加の拡張機能が必要です",
    audioFormatNotSupported: "音声形式がサポートされていません",
    VOTAutoTranslate: "開いたときに翻訳する",
    VOTDontTranslateYourLang: "自分の言語からは翻訳しない",
    VOTVolume: "動画の音量",
    VOTVolumeTranslation: "翻訳の音量",
    VOTAutoSetVolume: "動画の音量を ",
    VOTShowVideoSlider: "動画の音量スライダー",
    VOTSyncVolume: "バインド翻訳とビデオボリューム",
    VOTAudioProxy: "プロキシで受信した音声",
    VOTDisableFromYourLang: "あなたの言語での動画の翻訳を無効にしました",
    VOTLiveNotSupported: "ライブストリームの翻訳はサポートされていません",
    VOTPremiere: "プレミアが終わるまで待ってから翻訳してください",
    VOTVideoIsTooLong: "動画が長すぎます",
    VOTNoVideoIDFound: "動画IDが見つかりませんでした",
    VOTFailedInitDB: "データベースの初期化に失敗しました",
    VOTDBNeedUpdate:
      "データベースを更新する必要があります。ページを再読み込みしてください。",
    VOTDisabledForDBUpdating:
      `データベース更新時のエラーのため、VOTは無効になっています。${window.location.hostname} を開いているすべてのタブを閉じて、もう一度お試しください。`,
    VOTFailedWriteToDB: "データベースにデータを書き込めませんでした。",
    VOTFailedReadFromDB: "データベースからデータを取得できませんでした。",
    VOTSubtitles: "字幕",
    VOTSubtitlesDisabled: "無効",
    VOTSubtitlesMaxLength: "字幕の最大長",
    VOTHighlightWords: "単語を強調表示する",
    VOTTranslatedFrom: "から翻訳",
    VOTAutogenerated: "自動生成された",
    langs: {
      "is": "アイスランド語",
      "ay": "アイマラ語",
      "ga": "アイルランド語",
      "ak": "アカン語",
      "az": "アゼルバイジャン語",
      "as": "アッサム語",
      "af": "アフリカーンス語",
      "am": "アムハラ語",
      "ar": "アラビア語",
      "sq": "アルバニア語",
      "hy": "アルメニア語",
      "it": "イタリア語",
      "yi": "イディッシュ語",
      "ig": "イボ語",
      "id": "インドネシア語",
      "ug": "ウイグル語",
      "cy": "ウェールズ語",
      "uk": "ウクライナ語",
      "uz": "ウズベク語",
      "ur": "ウルドゥー語",
      "ee": "エウェ語",
      "et": "エストニア語",
      "eo": "エスペラント語",
      "or": "オディア語",
      "nl": "オランダ語",
      "om": "オロモ語",
      "kk": "カザフ語",
      "ca": "カタロニア語",
      "gl": "ガリシア語",
      "lg": "ガンダ語",
      "kn": "カンナダ語",
      "rw": "キニアルワンダ語",
      "el": "ギリシャ語",
      "ky": "キルギス語",
      "gn": "グアラニー語",
      "gu": "グジャラート語",
      "km": "クメール語",
      "kri": "クリオ語",
      "ku": "クルド語",
      "hr": "クロアチア語",
      "qu": "ケチュア語",
      "xh": "コサ語",
      "co": "コルシカ語",
      "sm": "サモア語",
      "sa": "サンスクリット語",
      "jv": "ジャワ語",
      "ka": "ジョージア語",
      "sn": "ショナ語",
      "sd": "シンド語",
      "si": "シンハラ語",
      "sv": "スウェーデン語",
      "zu": "ズールー語",
      "gd": "スコットランド・ゲール語",
      "es": "スペイン語",
      "sk": "スロバキア語",
      "sl": "スロベニア語",
      "sw": "スワヒリ語",
      "su": "スンダ語",
      "ceb": "セブアノ語",
      "sr": "セルビア語",
      "so": "ソマリ語",
      "th": "タイ語",
      "tg": "タジク語",
      "tt": "タタール語",
      "ta": "タミル語",
      "cs": "チェコ語",
      "ts": "ツォンガ語",
      "ti": "ティグリニア語",
      "dv": "ディベヒ語",
      "te": "テルグ語",
      "da": "デンマーク語",
      "de": "ドイツ語",
      "tk": "トルクメン語",
      "tr": "トルコ語",
      "ny": "ニャンジャ語",
      "ne": "ネパール語",
      "no": "ノルウェー語",
      "ht": "ハイチ・クレオール語",
      "ha": "ハウサ語",
      "ps": "パシュトゥー語",
      "eu": "バスク語",
      "haw": "ハワイ語",
      "hu": "ハンガリー語",
      "pa": "パンジャブ語",
      "hi": "ヒンディー語",
      "fil": "フィリピノ語",
      "fi": "フィンランド語",
      "hmn": "フモン語",
      "fr": "フランス語",
      "bg": "ブルガリア語",
      "vi": "ベトナム語",
      "iw": "ヘブライ語",
      "be": "ベラルーシ語",
      "fa": "ペルシア語",
      "bn": "ベンガル語",
      "bho": "ボージュプリー語",
      "pl": "ポーランド語",
      "bs": "ボスニア語",
      "pt": "ポルトガル語",
      "mi": "マオリ語",
      "mk": "マケドニア語",
      "mg": "マダガスカル語",
      "mr": "マラーティー語",
      "ml": "マラヤーラム語",
      "mt": "マルタ語",
      "ms": "マレー語",
      "my": "ミャンマー語",
      "mn": "モンゴル語",
      "yo": "ヨルバ語",
      "lo": "ラオ語",
      "la": "ラテン語",
      "lv": "ラトビア語",
      "lt": "リトアニア語",
      "ln": "リンガラ語",
      "ro": "ルーマニア語",
      "lb": "ルクセンブルク語",
      "ru": "ロシア語",
      "en": "英語",
      "ko": "韓国語",
      "fy": "西フリジア語",
      "zh": "中国語",
      "zh-Hans": "中国語 (簡体字)",
      "zh-Hant": "中国語 (繁体字)",
      "st": "南部ソト語",
      "ja": "日本語",
      "nso": "北部ソト語",
    },
  },
};



;// CONCATENATED MODULE: ./src/menu.js



const userlang = navigator.language || navigator.userLanguage;
let lang = userlang.substr(0, 2).toLowerCase();
if (!(lang in translations)) {
  lang = "en";
}

function changeBtnColor(n) {
  document.querySelector(".translationBtn").style.color = n;
}

function changeBtnState(newState = "none") {
  document.querySelector(".translationBtn").dataset.state = newState;
}

function changeIconBackground(type = "none") {
  let iconBackgroundColor;
  switch (type) {
    case "error":
      iconBackgroundColor = "#7A7A7D";
      break;
    case "success":
      iconBackgroundColor = "#A36EFF";
      break;
    default:
      iconBackgroundColor = "#FFFFFF";
      break;
  }

  document.querySelector(".translateIcon").style.fill = iconBackgroundColor;
}

function transformBtn(type = "none", text) {
  switch (type) {
    case "error":
      changeIconBackground(type);
      changeBtnColor("#7A7A7D");
      changeBtnState(type);
      break;
    case "success":
      changeIconBackground(type);
      changeBtnColor("#A36EFF");
      changeBtnState(type);
      break;
    default:
      changeIconBackground("none");
      changeBtnColor("#FFFFFF");
      changeBtnState("none");
      break;
  }

  document.querySelector(".translationBtn").innerText = text;
}

// Add translation buttton block
function addTranslationBlock(element) {
  if (!element || element.querySelector(".translationBlock")) return;

  const block = document.createElement("div");
  block.classList.add("translationBlock");
  block.innerHTML = `
    <span class = "translationArea" role = "button">
      <span class = "translationITranslate" tabindex = "-1">
        <svg class="translateIcon" width="24" height="24" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.605 19.703c.794-.13 1.647-.476 2.47-.983.695 1.013 1.255 1.546 1.306 1.593l1.166-1.207c-.011-.01-.504-.48-1.124-1.401.277-.25.547-.512.797-.798a12.1 12.1 0 0 0 2.268-3.826c.383.216.761.541.96 1.027.68 1.649-.301 3.557-1.215 4.385l1.152 1.22c1.52-1.378 2.571-3.959 1.638-6.227-.368-.892-1.077-1.59-2.064-2.037.162-.763.216-1.38.233-1.785h-1.698c-.017.307-.06.762-.173 1.323-1.325-.187-2.818-.006-4.248.508a25.994 25.994 0 0 1-.313-2.547c5.092-.287 8.098-1.488 8.237-1.546l-.654-1.533c-.03.013-2.875 1.14-7.65 1.418-.001-.405-.008-.666-.012-.85-.008-.339-.01-.423.03-.67L17.01 5.75c-.026.283-.024.573-.018 1.278l.002.318c-.026 0-.051 0-.077.002l-.08.001a39.286 39.286 0 0 1-3.27-.14L13.25 8.89c.5.043 2.023.122 3.397.122h.1a19.457 19.457 0 0 1 .208-.003l.106-.002c.067.948.196 2.034.421 3.22a8.05 8.05 0 0 0-2.267 1.963l.811 1.871c.327-.732.995-1.51 1.856-2.111a16.762 16.762 0 0 0 1.33 3.346c-.811.514-1.64.818-2.301.804l.694 1.603Zm2.953-3.488a8.18 8.18 0 0 0 .374-.389 10.465 10.465 0 0 0 1.927-3.224c-.198-.021-.4-.031-.606-.031-.907 0-1.885.199-2.834.574.31 1.209.718 2.23 1.14 3.07ZM9.769 11.688 4.25 24.438h2.259l1.357-3.407h5.582l1.357 3.407h2.258l-5.52-12.75H9.77Zm.887 2.624 2.056 5H8.6l2.056-5Z"></path>
        </svg>
      </span>
      <span class = "translationBtn" tabindex = "0">${translations[lang].translateVideo}</span>
    </span>
    <span class = "translationMenu" tabindex = "0" role = "button">
      <svg class = "translationMenuIcon" height="15" width="5" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
      </svg>
    </span>
  `;

  element.appendChild(block);
  debug/* default */.Z.log("Added translation button to ", element);
}

function createTranslationMenu() {
  const container = document.createElement("div");
  container.classList.add("translationMenuContent");
  container.innerHTML = `
    <p class = "translationMainHeader">${translations[lang].translationSettings}</p>
    <div class="translationMenuOptions"></div>
    <div class="translationMenuFunctional">
      <a class = "translationDownload">
        <svg width="24px" height="24px" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
      </a>
      <button class = "translationDropDB">${translations[lang].resetSettings}</button>
    </div>
  `;

  container.onclick = (event) => event.stopPropagation();
  return container;
}

// Create checkbox for menu
function createMenuCheckbox(id, valueToCheck, content) {
  const checkboxContainer = document.createElement("div");
  const checkbox = document.createElement("input");
  const checkboxLabel = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = Boolean(valueToCheck);

  checkboxLabel.htmlFor = id;
  checkboxLabel.innerHTML = content;

  checkboxContainer.classList.add("translationMenuContainer");
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(checkboxLabel);

  return checkboxContainer;
}

// Create slider for menu
function createMenuSlider(id, sliderValue, content, min = 0, max = 100) {
  const sliderContainer = document.createElement("div");
  const slider = document.createElement("input");
  const sliderLabel = document.createElement("label");

  slider.type = "range";
  slider.id = id;
  slider.classList.add("VOTMenuSlider");
  slider.min = min;
  slider.max = max;
  slider.value = sliderValue;

  sliderLabel.htmlFor = id;
  sliderLabel.classList.add("translationHeader");
  sliderLabel.innerHTML = content;

  sliderContainer.classList.add("translationMenuContainer");
  sliderContainer.appendChild(sliderLabel);
  sliderContainer.appendChild(slider);

  return sliderContainer;
}

// Create select for menu
function createMenuSelect(id, selectOptions) {
  // selectOptions structure:
  // [
  //     {
  //         label: string,
  //         value: string,
  //         selected: boolean,
  //         disabled: boolean
  //     }
  // ]
  const selectContainer = document.createElement("div");
  const select = document.createElement("select");

  select.id = id;
  select.classList.add("VOTMenuSelect");

  for (const option of selectOptions) {
    const optionElement = document.createElement("option");
    optionElement.innerText = option.label;
    optionElement.value = option.value;
    if (
      Object.prototype.hasOwnProperty.call(option, "selected") &&
      option.selected
    ) {
      optionElement.setAttribute("selected", "selected");
    }

    if (Object.prototype.hasOwnProperty.call(option, "disabled")) {
      optionElement.disabled = option.disabled;
    }

    select.appendChild(optionElement);
  }

  selectContainer.classList.add("translationMenuContainer");
  selectContainer.appendChild(select);

  return selectContainer;
}

function genOptionsByOBJ(obj, conditionString) {
  return Object.entries(obj).map(([key, value]) => ({
    label: translations[lang][value],
    value: key,
    selected: conditionString === key,
  }));
}



;// CONCATENATED MODULE: ./src/utils/utils.js



if (!String.prototype.format) {
  // https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
  // syntax example: "is {0} function".format("format")
  String.prototype.format = function () {
    // store arguments in an array
    var args = arguments;
    // use replace to iterate over the string
    // select the match and check if the related argument is present
    // if yes, replace the match with the argument
    return this.replace(/{(\d+)}/g, function (match, index) {
      // check if the argument is present
      return typeof args[index] != "undefined" ? args[index] : match;
    });
  };
}

function waitForElm(selector) {
  // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
  return new Promise((resolve) => {
    const element = document.querySelector(selector);
    if (element) {
      return resolve(element);
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      once: true,
    });
  });
}

const sleep = (m) => new Promise((r) => setTimeout(r, m));

const getVideoId = (service) => {
  const url = new URL(window.location.href);

  switch (service) {
    case "youtube":
      return (
        url.pathname.match(/(?:watch|embed)\/([^/]+)/)?.[1] ||
        url.searchParams.get("v")
      );
    case "vk":
      if (url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)) {
        return url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)[0].slice(1);
      } else if (url.searchParams.get("z")) {
        return url.searchParams.get("z").split("/")[0];
      } else if (url.searchParams.get("oid") && url.searchParams.get("id")) {
        return `video-${Math.abs(
          url.searchParams.get("oid")
        )}_${url.searchParams.get("id")}`;
      } else {
        return false;
      }
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
          ".tw-link[data-test-selector='stream-info-card-component__stream-avatar-link']"
        );
        if (!channelLink) {
          return false;
        }

        const channelName = channelLink.href.replace(
          "https://www.twitch.tv/",
          ""
        );
        return `${channelName}/clip/${url.searchParams.get("clip")}`;
      } else if (url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)) {
        return url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)[0];
      } else {
        return url.pathname.match(/(?:videos)\/([^/]+)/)?.[0];
      }
    case "tiktok":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    case "vimeo":
      return (
        url.pathname.match(/[^/]+\/[^/]+$/)?.[0] ||
        url.pathname.match(/[^/]+$/)?.[0]
      );
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
    case "facebook":
      return url.pathname;
    case "rutube":
      return url.pathname.match(/(?:video|embed)\/([^/]+)/)?.[1];
    case "coub":
      return url.pathname.match(/view\/([^/]+)/)?.[1];
    case "bilibili.com":
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
    case "mail.ru":
      if (url.pathname.startsWith("/v/") || url.pathname.startsWith("/mail/")) {
        return url.pathname;
      } else if (url.pathname.match(/video\/embed\/([^/]+)/)) {
        const referer = document.querySelector(
          ".b-video-controls__mymail-link"
        );
        if (!referer) {
          return false;
        }

        return referer?.href.split("my.mail.ru")?.[1];
      }
    case "bitchute":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  if (minutes >= 60) {
    return translations[lang].translationTakeMoreThanHour;
  } else if (minutes >= 10 && minutes % 10) {
    return translations[lang].translationTakeApproximatelyMinutes.format(
      minutes
    );
  } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
    return translations[lang].translationTakeAboutMinute;
  } else {
    return translations[lang].translationTakeApproximatelyMinute.format(
      minutes
    );
  }
}



// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__("./src/config/config.js");
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



;// CONCATENATED MODULE: ./src/indexedDB.js



// --- IndexedDB functions start:
const dbVersion = 3; // current db version
const settingsDefault = {
  key: "settings",
  autoTranslate: 0,
  defaultVolume: 100,
  showVideoSlider: 0,
  syncVolume: 0,
  autoSetVolumeYandexStyle: 1,
  dontTranslateYourLang: 1,
}; // default settings for db v1

const valuesV2 = {
  audioProxy: 0,
};

const valuesV3 = {
  subtitlesMaxLength: 300,
  highlightWords: 0,
};

function openDB(name) {
  return indexedDB.open(name, dbVersion);
}

async function initDB() {
  return new Promise((resolve, reject) => {
    function updateVersionProccessor(
      transaction,
      db,
      indexes,
      previousIndexes = {}
    ) {
      // openRequest is transaction object
      // indexes is object of strings with default values (used for createIndex) ex. {"name": 0}
      // previousIndexes is indexes for previous version
      const objectStore = transaction.objectStore("settings");

      for (const key of Object.keys(indexes)) {
        objectStore.createIndex(key, key, { unique: false });
      }

      console.log("[VOT] The database has been updated");
      objectStore.transaction.oncomplete = (event) => {
        const objectStore = db
          .transaction("settings", "readwrite")
          .objectStore("settings");
        const request = objectStore.get("settings");

        request.onerror = (event) => {
          console.error(
            "[VOT] Data could not be retrieved from the Database: ",
            event.error
          );
          reject(false);
        };

        request.onsuccess = () => {
          const data =
            request.result || Object.assign(settingsDefault, previousIndexes); // use data from db or reset all data
          for (const key in indexes) {
            data[key] = indexes[key];
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error(
              "[VOT] Failed to update the Database to new version",
              event.error
            );
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            console.log(
              "[VOT] Standard settings of the new version have been added to the Database."
            );
            resolve(true);
          };
        };
      };
    }

    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(
        `[VOT] ${translations[lang].VOTFailedInitDB}: ${openRequest.error.message}`
      );
      reject(false);
    };

    openRequest.onupgradeneeded = (event) => {
      const db = openRequest.result;

      db.onerror = () => {
        const errorMessage = `[VOT] ${translations[lang].VOTFailedInitDB}`;
        console.error(errorMessage, openRequest.error);
        alert(errorMessage);
        reject(false);
      };

      if (event.oldVersion < 1) {
        // db not found
        const objectStore = db.createObjectStore("settings", {
          keyPath: "key",
        });

        // add indexes for 1 version (without key index)
        for (const key of Object.keys(settingsDefault).filter(
          (k) => k !== "key"
        )) {
          objectStore.createIndex(key, key, { unique: false });
        }

        console.log("[VOT] Database Created");

        objectStore.transaction.oncomplete = (event) => {
          const objectStore = db
            .transaction("settings", "readwrite")
            .objectStore("settings");
          const request = objectStore.add(settingsDefault);

          request.onsuccess = () => {
            console.log(
              "[VOT] Standard settings added to the Database: ",
              request.result
            );
            resolve(true);
          };

          request.onerror = () => {
            console.log(
              "[VOT] Error when adding standard settings to the Database: ",
              request.error
            );
            reject(false);
          };
        };
      }

      if (event.oldVersion < 2) {
        // db is outdated (db version is 1)
        updateVersionProccessor(openRequest.transaction, db, valuesV2);
      }

      if (event.oldVersion < 3) {
        // db is outdated (db version is 1)
        updateVersionProccessor(openRequest.transaction, db, valuesV3);
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        const errorMessage = `[VOT] ${translations[lang].VOTDBNeedUpdate}`;
        console.log(errorMessage);
        alert(errorMessage);
        window.location.reload();
        reject(false);
      };
      resolve(true);
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      const errorMessage = `[VOT] ${translations[lang].VOTDisabledForDBUpdating}`;
      console.error(errorMessage, db);
      alert(errorMessage);
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
  dontTranslateYourLang,
  audioProxy,
  subtitlesMaxLength,
  highlightWords,
}) {
  return new Promise((resolve, reject) => {
    if (
      typeof autoTranslate === "number" ||
      typeof defaultVolume === "number" ||
      typeof showVideoSlider === "number" ||
      typeof syncVolume === "number" ||
      typeof autoSetVolumeYandexStyle === "number" ||
      typeof dontTranslateYourLang === "number" ||
      typeof audioProxy === "number" ||
      typeof subtitlesMaxLength === "number" ||
      typeof highlightWords === "number"
    ) {
      const openRequest = openDB("VOT");

      openRequest.onerror = () => {
        const errorMessage = `[VOT] ${translations[lang].VOTFailedWriteToDB}`;
        console.error(errorMessage, openRequest.error.message);
        alert(errorMessage);
        reject(false);
      };

      openRequest.onupgradeneeded = async () => {
        const db = openRequest.result;
        db.close();
        await initDB();
        resolve(true);
      };

      openRequest.onsuccess = () => {
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          console.log(
            "[VOT] The database needs an update, please reload the page if it didn't happen automatically"
          );
          window.location.reload();
          reject(false);
        };

        const objectStore = db
          .transaction("settings", "readwrite")
          .objectStore("settings");
        const request = objectStore.get("settings");

        request.onerror = (event) => {
          console.error(
            "[VOT] Data could not be retrieved from the Database: ",
            event.error
          );
          reject(false);
        };

        request.onsuccess = () => {
          const data = request.result;

          if (typeof autoTranslate === "number") {
            data.autoTranslate = autoTranslate;
          }

          if (typeof defaultVolume === "number") {
            data.defaultVolume = defaultVolume;
          }

          if (typeof showVideoSlider === "number") {
            data.showVideoSlider = showVideoSlider;
          }

          if (typeof syncVolume === "number") {
            data.syncVolume = syncVolume;
          }

          if (typeof autoSetVolumeYandexStyle === "number") {
            data.autoSetVolumeYandexStyle = autoSetVolumeYandexStyle;
          }

          if (typeof dontTranslateYourLang === "number") {
            data.dontTranslateYourLang = dontTranslateYourLang;
          }

          if (typeof audioProxy === "number") {
            data.audioProxy = audioProxy;
          }

          if (typeof subtitlesMaxLength === "number") {
            data.subtitlesMaxLength = subtitlesMaxLength;
          }

          if (typeof highlightWords === "number") {
            data.highlightWords = highlightWords;
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error(
              "[VOT] Не удалось обновить данные в Базе Данных: ",
              event.error
            );
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            resolve(true);
          };
        };
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        const errorMessage = `[VOT] ${translations[lang].VOTDisabledForDBUpdating}`;
        console.error(errorMessage, db);
        alert(errorMessage);
        reject(false);
      };
    }
  });
}

async function readDB() {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      const errorMessage = `[VOT] ${translations[lang].VOTFailedReadFromDB}`;
      console.error(errorMessage, openRequest.error.message);
      alert(errorMessage);
      reject(false);
    };

    openRequest.onupgradeneeded = async () => {
      const db = openRequest.result;
      db.close();
      await initDB();
      resolve(true);
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        const errorMessage = `[VOT] ${translations[lang].VOTDBNeedUpdate}`;
        console.error(errorMessage);
        alert(errorMessage);
        reject(false);
      };

      const objectStore = db.transaction("settings").objectStore("settings");
      const request = objectStore.get("settings");

      request.onerror = (event) => {
        console.error("[VOT]", translations[lang].VOTFailedReadFromDB, event.error);
        console.error("[VOT]", event);
        reject(false);
      };

      request.onsuccess = () => {
        if (request.result === undefined) {
          db.close();
          deleteDB();
          reject(false);
        }
        const data = request.result;
        resolve(data);
      };
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      const errorMessage = `[VOT] ${translations[lang].VOTDisabledForDBUpdating}`;
      console.error(errorMessage, db);
      alert(errorMessage);
      reject(false);
    };
  });
}

function deleteDB() {
  indexedDB.deleteDatabase("VOT");
}



;// CONCATENATED MODULE: ./src/utils/volume.js
// element - audio / video element
function syncVolume(element, sliderVolume, otherSliderVolume, tempVolume) {
  let finalValue;
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



;// CONCATENATED MODULE: ./src/config/regexes.js
const regexes = () => {
  return {
    youtubeRegex: /^(www.|m.)?youtube(-nocookie)?.com$/,
  };
};

/* harmony default export */ const config_regexes = (regexes());

;// CONCATENATED MODULE: ./src/config/selectors.js
const selectors = () => {
  return {
    youtubeSelector: ".html5-video-container",
    twitchSelector: ".video-ref",
    twitchMobileSelector: "main > div > section > div > div > div",
    pipedSelector: ".shaka-video-container",
    vkSelector: ".videoplayer_media",
    twitterSelector:
      'div[data-testid="videoComponent"] > div:nth-child(1) > div',
    vimeoSelector: ".player",
    gagSelector: ".video-post",
    bilibilicomSelector: ".bpx-player-video-wrap",
    mailSelector: "#b-video-wrapper",
  };
};

/* harmony default export */ const config_selectors = (selectors());

;// CONCATENATED MODULE: ./src/getUUID.js
function getUUID(isLower) {
  const uuid = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
  return isLower ? uuid : uuid.toUpperCase();
}



;// CONCATENATED MODULE: ./src/getSignature.js



async function getSignature(body) {
  // Create a key from the HMAC secret
  const utf8Encoder = new TextEncoder("utf-8");
  const key = await window.crypto.subtle.importKey(
    "raw",
    utf8Encoder.encode( false ? 0 : config/* yandexHmacKey */.I1),
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign", "verify"]
  );
  // Sign the body with the key
  const signature = await window.crypto.subtle.sign("HMAC", key, body);
  // Convert the signature to a hex string
  return Array.from(new Uint8Array(signature), (x) =>
    x.toString(16).padStart(2, "0")
  ).join("");
}



;// CONCATENATED MODULE: ./src/rvt.js





// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  duration,
  requestLang,
  responseLang,
  callback
) {
  try {
    debug/* default */.Z.log("requestVideoTranslation");
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest.js"));
    const yandexRequest = yar.default;
    debug/* default */.Z.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeTranslationRequest(
      url,
      duration,
      requestLang,
      responseLang
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
async function requestVideoSubtitles(
  url,
  requestLang,
  callback
) {
  try {
    debug/* default */.Z.log("requestVideoSubtitles");
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest.js"));
    const yandexRequest = yar.default;
    debug/* default */.Z.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeSubtitlesRequest(
      url,
      requestLang
    );
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
    const lastToken = result[result.length - 1];
    const alignRangeEnd = lastToken?.alignRange?.end ?? 0;
    const newAlignRangeEnd = alignRangeEnd + token.text.length;
    result.push(Object.assign(Object.assign({}, token), {
      alignRange: {
        start: alignRangeEnd,
        end: newAlignRangeEnd
      }
    }));
    if (nextToken) {
      const endMs = token.startMs + token.durationMs;
      const durationMs = nextToken.startMs ? nextToken.startMs - endMs : lineEndMs - endMs;
      result.push({
        text: " ",
        startMs: endMs,
        durationMs,
        alignRange: {
          start: newAlignRangeEnd,
          end: newAlignRangeEnd + 1
        }
      });
    }
    return result;
  }, []);
}

function createSubtitlesTokens(line, previousLineLastToken) {
  const tokens = line.text.split(new RegExp("([\n \t])")).reduce((result, tokenText) => {
    if (tokenText.length) {
      const lastToken = result[result.length - 1] ?? previousLineLastToken;
      const alignRangeStart = lastToken?.alignRange?.end ?? 0;
      const alignRangeEnd = alignRangeStart + tokenText.length;
      result.push({
        text: tokenText,
        alignRange: {
          start: alignRangeStart,
          end: alignRangeEnd
        }
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
    return Object.assign(Object.assign({}, token), {
      startMs,
      durationMs
    });
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
    result.push(Object.assign(Object.assign({}, line), {
      tokens
    }));
  }
  subtitles.containsTokens = true;
  return result;
}

function formatYoutubeSubtitles(subtitles) {
  const result = {
    containsTokens: false,
    subtitles: []
  };
  if (typeof subtitles !== "object" || !("events" in subtitles) || !Array.isArray(subtitles.events)) {
    console.error("[VOT] Failed to format youtube subtitles", subtitles);
    return result;
  }
  for (let i = 0; i < subtitles.events.length; i++) {
    if (!subtitles.events[i].segs) continue;
    const text = subtitles.events[i].segs.map((e => e.utf8.replace(/^ +| +$/g, ""))).join(" ");
    let durationMs = subtitles.events[i].dDurationMs;
    if (subtitles.events[i + 1] && subtitles.events[i].tStartMs + subtitles.events[i].dDurationMs > subtitles.events[i + 1].tStartMs) {
      durationMs = subtitles.events[i + 1].tStartMs - subtitles.events[i].tStartMs;
    }
    if (text !== "\n") {
      result.subtitles.push({
        text,
        startMs: subtitles.events[i].tStartMs,
        durationMs
      });
    }
  }
  return result;
}

async function fetchSubtitles(subtitlesObject) {
  let resolved = false;
  let subtitles = await Promise.race([
    new Promise(async (resolve) => {
      await sleep(5000);
      if (!resolved) {
        console.error("[VOT] Failed to fetch subtitles. Reason: timeout");
      }
      resolved = true;
      resolve([]);
    }),
    new Promise(async (resolve) => {
      debug/* default */.Z.log("Fetching subtitles:", subtitlesObject);
      await fetch(subtitlesObject.url)
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
            subtitles: []
          });
        });
    })
  ]);
  if (subtitlesObject.source === "youtube") {
    subtitles = formatYoutubeSubtitles(subtitles);
  }
  subtitles.subtitles = getSubtitlesTokens(subtitles, subtitlesObject.source);
  console.log("[VOT] subtitles:", subtitles);
  return subtitles;
}

async function subtitles_getSubtitles(siteHostname, videoId, requestLang) {
  const ytSubtitles = siteHostname === "youtube" ? youtubeUtils.getSubtitles() : [];
  let resolved = false;
  const yaSubtitles = await Promise.race([
    new Promise(async (resolve) => {
      await sleep(5000);
      if (!resolved) {
        console.error("[VOT] Failed get yandex subtitles. Reason: timeout");
      }
      resolved = true;
      resolve([]);
    }),
    new Promise((resolve) => {
      rvs(
        `${siteTranslates[siteHostname]}${videoId}`,
        requestLang,
        (success, response) => {
          debug/* default */.Z.log("[exec callback] Requesting video subtitles");

          if (!success) {
            console.error("[VOT] Failed get yandex subtitles");
            resolved = true;
            resolve([]);
          }

          const subtitlesResponse = yandexProtobuf.decodeSubtitlesResponse(response);
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
        }
      );
    })
  ]);
  const subtitles = [...yaSubtitles, ...ytSubtitles].sort((a, b) => {
    if (a.source !== b.source) { // sort by source
      return a.source === "yandex" ? -1 : 1;
    }
    if (a.language !== b.language && (a.language === lang || b.language === lang)) { // sort by user language
      return a.language === lang ? -1 : 1;
    }
    if (a.source === "yandex") { // sort by translation
      if (a.translatedFromLanguage !== b.translatedFromLanguage) { // sort by translatedFromLanguage
        if (!a.translatedFromLanguage || !b.translatedFromLanguage) { // sort by isTranslated
          if (a.language === b.language) {
            return a.translatedFromLanguage ? 1 : -1;
          }
          return !a.translatedFromLanguage ? 1 : -1;
        }
        return a.translatedFromLanguage === requestLang ? -1 : 1;
      }
      if (!a.translatedFromLanguage) { // sort non translated by language
        return a.language === requestLang ? -1 : 1;
      }
    }
    if (a.source === "youtube" && a.isAutoGenerated !== b.isAutoGenerated) { // sort by isAutoGenerated
      return a.isAutoGenerated ? 1 : -1;
    }
    return 0;
  });
  console.log("[VOT] subtitles list", subtitles);
  return subtitles;
}

var _subtitlesWidget = null;

function addSubtitlesWidget(element) {
  if (element.querySelector(".VOTSubtitlesWidget")) return;

  const container = document.createElement("div");
  container.classList.add("VOTSubtitlesWidget");
  element.appendChild(container);
  _subtitlesWidget = container;

  let dragging = false;
  let containerRect, elementRect;
  let offsetX, offsetY;

  function onMouseDown(e) {
    if (container.contains(e.target)) {
      containerRect = container.getBoundingClientRect();
      elementRect = element.getBoundingClientRect();
      offsetX = e.clientX - containerRect.x;
      offsetY = e.clientY - containerRect.y;
      dragging = true;
    }
  }

  function onMouseUp() {
    dragging = false;
  }

  function onMouseMove(e) {
    if (dragging) {
      e.preventDefault();
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      const top = y >= elementRect.top;
      const bottom = y + containerRect.height <= elementRect.bottom;
      const left = x >= elementRect.left;
      const right = x + containerRect.width <= elementRect.right;

      if (top && bottom) {
        container.style.top = `${y - elementRect.y}px`;
      } else {
        if (!top) {
          container.style.top = `${0}px`;
        } else {
          container.style.top = `${elementRect.height - containerRect.height}px`;
        }
      }
      if (left && right) {
        container.style.left = `${x - elementRect.x}px`;
      } else {
        if (!left) {
          container.style.left = `${0}px`;
        } else {
          container.style.left = `${elementRect.width - containerRect.width}px`;
        }
      }
    }
  }

  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousemove', onMouseMove);
}

var _subtitles = null;
var _video = null;
var _lastContent = null;
var _maxLength = 300;
var _maxLengthRegexp = /.{1,300}(?:\s|$)/g;
var _highlightWords = false;

function updateSubtitles(video) {
  if (!video) return;

  let content = "";
  let highlightWords = _highlightWords && _subtitles.containsTokens;
  const time = video.currentTime * 1000;
  const line = _subtitles.subtitles.findLast((e) => {
    return e.startMs < time && time < e.startMs + e.durationMs;
  });
  if (line) {
    if (highlightWords) {
      let tokens = line.tokens;
      if (tokens.at(-1).alignRange.end > _maxLength) {
        let chunks = [];
        let chunkStartIndex = 0;
        let chunkEndIndex = 0;
        let length = 0;
        for (let i = 0; i < tokens.length + 1; i++) {
          length += tokens[i]?.text?.length ?? 0;
          if (!tokens[i] || length > _maxLength) {
            let t = tokens.slice(chunkStartIndex, chunkEndIndex + 1);
            if (t.at(0) && t.at(0).text === " ") t = t.slice(1);
            if (t.at(-1) && t.at(-1).text === " ") t = t.slice(0, t.length - 1);
            chunks.push({
              startMs: tokens[chunkStartIndex].startMs,
              durationMs: tokens[chunkEndIndex].startMs + tokens[chunkEndIndex].durationMs - tokens[chunkStartIndex].startMs,
              tokens: t,
            });
            chunkStartIndex = i;
            length = 0;
          }
          chunkEndIndex = i;
        }
        for (let i = 0; i < chunks.length; i++) {
          if (chunks[i].startMs < time && time < chunks[i].startMs + chunks[i].durationMs) {
            tokens = chunks[i].tokens;
            break;
          }
        }
      }
      for (let token of tokens) {
        const passedMs = token.startMs + token.durationMs / 2;
        content += `<span ${
          (time > passedMs) || (time > token.startMs - 100 && passedMs - time < 275) ? "class=\"passed\"" : ""
        }>${token.text}</span>`;
      }
    } else {
      if (line.text.length > _maxLength) {
        let chunks = line.text.match(_maxLengthRegexp);
        let chunkDurationMs = line.durationMs / chunks.length;
        for (let i = 0; i < chunks.length; i++) {
          if (line.startMs + chunkDurationMs * i < time && time < line.startMs + chunkDurationMs * (i + 1)) {
            content = chunks[i].trim();
            break;
          }
        }
      } else {
        content = line.text;
      }
    }
  }
  if (content !== _lastContent) {
    _lastContent = content;
    _subtitlesWidget.innerHTML = content ? `<div>${content.replace("\\n", "<br>")}</div>` : "";
  }
}

function onTimeUpdate(event) {
  updateSubtitles(event.target);
}

function setSubtitlesWidgetContent(video, subtitles) {
  if (subtitles && video) {
    _subtitles = subtitles;
    _video = video;
    video?.addEventListener("timeupdate", onTimeUpdate);
    updateSubtitles(video);
  } else {
    _subtitles = null;
    video?.removeEventListener("timeupdate", onTimeUpdate);
    _subtitlesWidget.innerHTML = "";
  }
}

function setSubtitlesMaxLength(len) {
  if (typeof len === "number" && len) {
    _maxLength = len;
    _maxLengthRegexp = new RegExp(`.{1,${len}}(?:\\s|$)`, "g");
    updateSubtitles(_video);
  }
}

function setSubtitlesHighlightWords(value) {
  if (_highlightWords !== !!value) {
    _highlightWords = !!value;
    updateSubtitles(_video);
  }
}

;// CONCATENATED MODULE: ./src/index.js


















const sitesChromiumBlocked = [...sitesInvidious, ...sitesPiped];

// translate properties
let translateFromLang = "en"; // default language of video

let translateToLang = lang; // default language of audio response

let ytData = "";
let subtitlesList = [];
let subtitlesListVideoId = null;

async function src_main() {
  debug/* default */.Z.log("Loading extension...");
  debug/* default */.Z.log(`Selected menu language: ${lang}`);

  if (
     true &&
    GM_info?.scriptHandler &&
    ["Violentmonkey", "FireMonkey", "Greasemonkey", "AdGuard"].includes(
      GM_info.scriptHandler
    )
  ) {
    const errorText = `[VOT] ${translations[lang].unSupportedExtensionError}`;
    console.error(errorText);
    return alert(errorText);
  }

  debug/* default */.Z.log("Extension compatibility passed...");

  let timer;
  const audio = new Audio();
  let opacityRatio = 0.9;
  let openedMenu = false;

  if (false) { var translationPanding; }

  function logout(n) {
    if (openedMenu) return;

    document.querySelector(".translationBlock").style.opacity = n;
  }

  function resetTimer() {
    clearTimeout(timer);
    logout(1);
    timer = setTimeout(() => {
      logout(0);
    }, 2000);
  }

  function changeOpacityOnEvent(event, timer, opacityRatio) {
    clearTimeout(timer);
    logout(opacityRatio);
    event.stopPropagation();
  }

  const deleteAudioSrc = async () => {
    audio.src = "";
    audio.removeAttribute("src");
  };

  // Add menu container
  function addTranslationMenu(element) {
    if (element.querySelector(".translationMenuContent")) return;

    const container = createTranslationMenu();
    element.appendChild(container);

    // click to translation menu icon
    document
      .querySelector(".translationMenu")
      ?.addEventListener("click", (event) => {
        event.stopPropagation();
        const content = document.querySelector(".translationMenuContent");
        content.style.display = openedMenu ? "none" : "block";
        content.style.opacity = opacityRatio;
        openedMenu = !openedMenu;
      });

    document
      .querySelector(".translationDropDB")
      .addEventListener("click", (event) => {
        event.stopPropagation();
        deleteDB();
        location.reload();
      });

    debug/* default */.Z.log("Added translation menu to ", element);
  }

  function translateVideo(url, duration, requestLang, responseLang, callback) {
    debug/* default */.Z.log(
      `Translate video (url: ${url}, duration: ${duration}, requestLang: ${requestLang}, responseLang: ${responseLang})`
    );

    if (false) {}

    translationPanding = true;

    rvt(
      url,
      duration,
      requestLang,
      responseLang,
      (success, response) => {
        translationPanding = false;

        debug/* default */.Z.log("[exec callback] Requesting video translation");
        if (!success) {
          callback(false, translations[lang].requestTranslationFailed);
          return;
        }

        const translateResponse = yandexProtobuf.decodeTranslationResponse(response);
        console.log("[VOT] Translation response: ", translateResponse);

        switch (translateResponse.status) {
          case 0:
            callback(false, translateResponse.message);
            break;
          case 1:
            callback(
              !!translateResponse.url,
              translateResponse.url || translations[lang].audioNotReceived
            );
            break;
          case 2:
            callback(
              false,
              translateResponse.remainingTime
                ? secsToStrTime(translateResponse.remainingTime)
                : translations[lang].translationTakeFewMinutes
            );
            break;
          case 3:
            /*
              Иногда, в ответе приходит статус код 3, но видео всё, так же, ожидает перевода.
              В конечном итоге, это занимает слишком много времени,
              как-будто сервер не понимает, что данное видео уже недавно было переведено
              и заместо возвращения готовой ссылки на перевод начинает переводить видео заново
              при чём у него это получается за очень длительное время.
            */
            callback(false, translations[lang].videoBeingTranslated);
            break;
        }
      }
    );
  }

  async function translateProccessor(videoContainer, siteHostname, siteEvent) {
    debug/* default */.Z.log("[translateProccessor] execute on element: ", videoContainer);

    let video;
    let autoRetry;
    let volumeOnStart;
    let tempOriginalVolume;
    let tempVolume;
    let dbSubtitlesMaxLength;
    let dbHighlightWords;
    let dbAutoTranslate;
    let dbDefaultVolume;
    let dbShowVideoSlider;
    let dbAutoSetVolumeYandexStyle;
    let dontTranslateYourLang;
    let dbSyncVolume;
    let dbAudioProxy; // cf version only
    let firstPlay = true;
    let isDBInited;
    let videoData = "";

    debug/* default */.Z.log("videoContainer", videoContainer);

    video =
      siteHostname === "vimeo"
        ? videoContainer.querySelector(
            ".vp-video-wrapper > .vp-video > .vp-telecine > video"
          )
        : videoContainer.querySelector("video");

    debug/* default */.Z.log("video", video);

    const container =
      siteHostname === "pornhub" &&
      window.location.pathname.includes("view_video.php")
        ? document.querySelector(".original.mainPlayerDiv")
        : siteHostname === "pornhub" &&
          window.location.pathname.includes("embed/")
        ? document.querySelector("body")
        : window.location.hostname.includes("m.youtube.com")
        ? document.querySelector("#player-control-container")
        : videoContainer;

    addTranslationBlock(container);
    addTranslationMenu(container);
    if (
      window.location.hostname.includes("youtube.com") &&
      !window.location.hostname.includes("m.youtube.com")
    ) {
      addSubtitlesWidget(container.parentElement);
    } else {
      addSubtitlesWidget(container);
    }
    await changeSubtitlesLang("disabled");

    try {
      isDBInited = await initDB();
    } catch (err) {
      console.error(
        "[VOT] Failed to initialize database settings. All changes made will not be saved",
        err
      );
    }

    const menuOptions = document.querySelector(".translationMenuOptions");
    if (menuOptions && !menuOptions.querySelector("#VOTTranslateFromLang")) {
      const selectFromLangOptions = [
        {
          label: translations[lang].videoLanguage,
          value: "default",
          disabled: true,
        },
        ...genOptionsByOBJ(availableLangs, videoData.detectedLanguage),
      ];

      const selectToLangOptions = [
        {
          label: translations[lang].translationLanguage,
          value: "default",
          disabled: true,
        },
        ...genOptionsByOBJ(availableLangs, videoData.responseLanguage),
        {
          label: "─────────",
          value: "separator",
          disabled: true,
        },
        ...genOptionsByOBJ(additionalTTS, videoData.responseLanguage),
      ];

      const selectFromLang = createMenuSelect(
        "VOTTranslateFromLang",
        selectFromLangOptions
      );

      const selectToLang = createMenuSelect(
        "VOTTranslateToLang",
        selectToLangOptions
      ).firstElementChild;

      selectFromLang.id = "VOTSelectLanguages";
      selectFromLang.innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"/>
        </svg>
      `;

      selectFromLang.appendChild(selectToLang);
      menuOptions.appendChild(selectFromLang);

      menuOptions
        .querySelector("#VOTTranslateFromLang")
        .addEventListener("change", async (event) => {
          debug/* default */.Z.log("[onchange] select from language", event.target.value);
          videoData = await getVideoData();
          await setSelectMenuValues(
            event.target.value,
            videoData.responseLanguage
          );
        });

      menuOptions
        .querySelector("#VOTTranslateToLang")
        .addEventListener("change", async (event) => {
          debug/* default */.Z.log("[onchange] select to language", event.target.value);
          videoData = await getVideoData();
          await setSelectMenuValues(
            videoData.detectedLanguage,
            event.target.value
          );
        });
    }

    async function changeSubtitlesLang(subs) {
      debug/* default */.Z.log("[onchange] subtitles", subs);
      const select = document.querySelector(".translationMenuOptions")?.querySelector("#VOTSubtitlesLang");
      select && (select.value = subs);
      if (!video) {
        console.error("[VOT] video not found");
        select && (select.value = "disabled");
        return;
      }
      if (subs === "disabled") {
        setSubtitlesWidgetContent(video, null);
      } else {
        setSubtitlesWidgetContent(
          video,
          await fetchSubtitles(subtitlesList.at(parseInt(subs))));
      }
    }

    async function updateSubtitlesLangSelect() {
      const select = document.querySelector(".translationMenuOptions")?.querySelector("#VOTSubtitlesLang");

      if (!select) {
        console.error("[VOT] #VOTSubtitlesLang not found");
        return;
      }

      const oldValue = select.value;
      select.innerHTML = "";

      const disabledOption = document.createElement("option");
      disabledOption.value = "disabled";
      disabledOption.innerHTML = translations[lang].VOTSubtitlesDisabled;
      select.append(disabledOption);

      for (let i = 0; i < subtitlesList.length; i++) {
        const s = subtitlesList[i];
        const option = document.createElement("option");
        option.value = i;
        option.innerHTML = 
          (translations[lang].langs[s.language] ?? s.language.toUpperCase()) +
          (s.translatedFromLanguage ? 
            ` ${translations[lang].VOTTranslatedFrom} ${translations[lang].langs[s.translatedFromLanguage] ?? s.translatedFromLanguage.toUpperCase()}` : "") +
          (s.source !== "yandex" ? ` ${s.source}` : "") +
          (s.isAutoGenerated ? ` (${translations[lang].VOTAutogenerated})` : "");
        select.append(option);
      }

      await changeSubtitlesLang(oldValue);
    }

    if (menuOptions && !menuOptions.querySelector("#VOTSubtitlesLang")) {
      const options = [
        {
          label: translations[lang].VOTSubtitlesDisabled,
          value: "disabled",
          disabled: false,
        },
      ];

      const select = createMenuSelect(
        "VOTSubtitlesLang",
        options
      );

      select.id = "VOTSubtitlesLangContainer";
      const span = document.createElement("span");
      span.textContent = translations[lang].VOTSubtitles;
      select.prepend(span);

      menuOptions.appendChild(select);

      menuOptions
        .querySelector("#VOTSubtitlesLang")
        .addEventListener("change", async (event) => {
          await changeSubtitlesLang(event.target.value);
        });
    }

    if (isDBInited) {
      const dbData = await readDB();
      if (dbData) {
        dbSubtitlesMaxLength = dbData.subtitlesMaxLength;
        dbHighlightWords = dbData.highlightWords;
        dbAutoTranslate = dbData.autoTranslate;
        dbDefaultVolume = dbData.defaultVolume;
        dbShowVideoSlider = dbData.showVideoSlider;
        dbAutoSetVolumeYandexStyle = dbData.autoSetVolumeYandexStyle;
        dontTranslateYourLang = dbData.dontTranslateYourLang;
        dbAudioProxy = dbData.audioProxy; // cf version only
        dbSyncVolume = dbData.syncVolume; // youtube only

        debug/* default */.Z.log("[db] data from db: ", dbData);

        if (dbSubtitlesMaxLength !== undefined) {
          setSubtitlesMaxLength(dbSubtitlesMaxLength);
        }

        if (dbHighlightWords !== undefined) {
          setSubtitlesHighlightWords(dbHighlightWords);
        }

        if (
          dbSubtitlesMaxLength !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTSubtitlesMaxLengthSlider")
        ) {
          const slider = createMenuSlider(
            "VOTSubtitlesMaxLengthSlider",
            dbSubtitlesMaxLength,
            `${translations[lang].VOTSubtitlesMaxLength}: <b id="VOTSubtitlesMaxLengthValue">${dbSubtitlesMaxLength}</b>`,
            50,
            300
          );

          slider.querySelector("#VOTSubtitlesMaxLengthSlider").oninput = async (event) => {
            const value = Number(event.target.value);
            await updateDB({ subtitlesMaxLength: value });
            dbSubtitlesMaxLength = value;
            slider.querySelector("#VOTSubtitlesMaxLengthValue").innerText = `${value}`;
            setSubtitlesMaxLength(value);
          };

          menuOptions.appendChild(slider);
        }

        if (
          dbHighlightWords !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTHighlightWords")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTHighlightWords",
            dbHighlightWords,
            translations[lang].VOTHighlightWords
          );

          checkbox.querySelector("#VOTHighlightWords").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ highlightWords: value });
            dbHighlightWords = value;
            debug/* default */.Z.log(
              "highlightWords value changed. New value: ",
              dbHighlightWords
            );
            setSubtitlesHighlightWords(value);
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbAutoTranslate !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAutoTranslate")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTAutoTranslate",
            dbAutoTranslate,
            translations[lang].VOTAutoTranslate +
              (siteHostname === "vk" ||
              window.location.hostname.includes("m.twitch.tv")
                ? ` <strong>(${translations[lang].recommended})</strong>`
                : "")
          );

          checkbox.querySelector("#VOTAutoTranslate").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ autoTranslate: value });
            dbAutoTranslate = value;
            debug/* default */.Z.log(
              "autoTranslate value changed. New value: ",
              dbAutoTranslate
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          window.location.hostname.includes("youtube.com") &&
          dontTranslateYourLang !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTDontTranslateYourLang")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTDontTranslateYourLang",
            dontTranslateYourLang,
            translations[lang].VOTDontTranslateYourLang
          );

          checkbox.querySelector("#VOTDontTranslateYourLang").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ dontTranslateYourLang: value });
            dontTranslateYourLang = value;
            debug/* default */.Z.log(
              "dontTranslateYourLang value changed. New value: ",
              dontTranslateYourLang
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbAutoSetVolumeYandexStyle !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAutoSetVolume")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTAutoSetVolume",
            dbAutoSetVolumeYandexStyle,
            translations[lang].VOTAutoSetVolume + `${config/* autoVolume */.IM * 100}%`
          );

          checkbox.querySelector("#VOTAutoSetVolume").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ autoSetVolumeYandexStyle: value });
            dbAutoSetVolumeYandexStyle = value;
            debug/* default */.Z.log(
              "autoSetVolumeYandexStyle value changed. New value: ",
              dbAutoSetVolumeYandexStyle
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbShowVideoSlider !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTShowVideoSlider")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTShowVideoSlider",
            dbShowVideoSlider,
            translations[lang].VOTShowVideoSlider
          );

          checkbox.querySelector("#VOTShowVideoSlider").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ showVideoSlider: value });
            dbShowVideoSlider = value;
            debug/* default */.Z.log(
              "showVideoSlider value changed. New value: ",
              dbShowVideoSlider
            );
            if (
              dbShowVideoSlider === 1 &&
              document.querySelector(".translationBtn").dataset.state ===
                "success"
            ) {
              addVideoSlider();
            } else {
              document.querySelector("#VOTVideoSlider")?.parentElement.remove();
            }
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          window.location.hostname.includes("youtube.com") &&
          !window.location.hostname.includes("m.youtube.com") &&
          dbSyncVolume !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTSyncVolume")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTSyncVolume",
            dbSyncVolume,
            translations[lang].VOTSyncVolume
          );

          checkbox.querySelector("#VOTSyncVolume").onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ syncVolume: value });
            dbSyncVolume = value;
            debug/* default */.Z.log("syncVolume value changed. New value: ", dbSyncVolume);
          };

          menuOptions.appendChild(checkbox);
        }

        // cf version only
        if (
          false
        ) {}
      }
    }

    transformBtn("none", translations[lang].translateVideo);

    if (
      window.location.hostname.includes("youtube.com") &&
      !window.location.hostname.includes("m.youtube.com")
    ) {
      const syncVolumeObserver = new MutationObserver(async function (
        mutations
      ) {
        mutations.forEach(async function (mutation) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "aria-valuenow" &&
            document.querySelector("#VOTVideoSlider")
          ) {
            syncVideoVolumeSlider();
          }
        });
      });

      syncVolumeObserver.observe(document.querySelector(".ytp-volume-panel"), {
        attributes: true,
        childList: false,
        subtree: true,
        attributeOldValue: true,
      });
    }

    async function setSelectMenuValues(from, to) {
      if (!document.querySelector("#VOTSelectLanguages")) {
        return;
      }
      document.querySelector("#VOTTranslateFromLang").value = from;
      document.querySelector("#VOTTranslateToLang").value = to;
      console.log(`[VOT] Set translation from ${from} to ${to}`);
      videoData.detectedLanguage = from;
      videoData.responseLanguage = to;
    }

    async function stopTraslate() {
      // Default actions on stop translate
      audio.pause();
      video.removeEventListener(".translate", stopTraslate, false);
      await deleteAudioSrc();
      document.querySelector("#VOTVideoSlider")?.parentElement.remove();
      document.querySelector("#VOTTranslationSlider")?.parentElement.remove();
      const downloadBtn = document.querySelector(".translationDownload");
      downloadBtn.href = "";
      downloadBtn.style.display = "none";
      transformBtn("none", translations[lang].translateVideo);
      // temp fix
      if (window.location.hostname.includes("youtube.com")) {
        document.querySelector(".html5-video-player").setVolume(100);
      }
      if (volumeOnStart) {
        video.volume = volumeOnStart;
      }
    }

    async function syncVideoVolumeSlider() {
      // Sync volume slider with original video (youtube only)
      const newSlidersVolume = document
        .querySelector(".ytp-volume-panel")
        .getAttribute("aria-valuenow");

      const videoSlider = document.querySelector("#VOTVideoSlider");

      if (!videoSlider) {
        return;
      }
      videoSlider.value = newSlidersVolume;

      const videoVolumeLabel = document.querySelector("#VOTVideoVolume");

      if (videoVolumeLabel) {
        videoVolumeLabel.innerText = `${newSlidersVolume}%`;
      }

      if (dbSyncVolume === 1) {
        tempOriginalVolume = Number(newSlidersVolume);
      }
    }

    async function getVideoData() {
      const videoData = {};

      videoData.duration = video?.duration || 0;

      videoData.videoId = getVideoId(siteHostname);

      videoData.detectedLanguage = translateFromLang;

      videoData.responseLanguage = translateToLang;

      if (window.location.hostname.includes("youtube.com")) {
        ytData = await youtubeUtils.getVideoData();
        if (ytData.author !== "") {
          videoData.detectedLanguage = ytData.detectedLanguage;
          videoData.responseLanguage = lang;
        }
      } else if (
        window.location.hostname.includes("rutube") ||
        window.location.hostname.includes("my.mail.ru")
      ) {
        videoData.detectedLanguage = "ru";
        videoData.responseLanguage = "en";
      } else if (window.location.hostname.includes("bilibili.com")) {
        videoData.detectedLanguage = "zh";
      }

      return videoData;
    }

    const lipSync = async (mode = false) => {
      debug/* default */.Z.log("lipsync video", video);
      if (!video) {
        return;
      }
      audio.currentTime = video.currentTime;
      audio.playbackRate = video.playbackRate;

      if (!mode) {
        debug/* default */.Z.log("lipsync mode is not set");
        return;
      }

      if (mode === "play") {
        debug/* default */.Z.log("lipsync mode is play");
        const audioPromise = audio.play();
        if (audioPromise !== undefined) {
          audioPromise.catch((e) => {
            console.error("[VOT]", e);
            if (e.name === "NotAllowedError") {
              const errorMessage = translations[lang].grantPermissionToAutoPlay;
              transformBtn("error", errorMessage);
              throw `[VOT] ${errorMessage}`;
            } else if (e.name === "NotSupportedError") {
              const errorMessage = sitesChromiumBlocked.includes(
                window.location.hostname
              )
                ? translations[lang].neededAdditionalExtension
                : translations[lang].audioFormatNotSupported;
              transformBtn("error", errorMessage);
              throw `[VOT] ${errorMessage}`;
            }
          });
        }
        return;
      }
      if (mode === "pause") {
        debug/* default */.Z.log("lipsync mode is pause");
        audio.pause();
      }
      if (mode === "stop") {
        debug/* default */.Z.log("lipsync mode is stop");
        audio.pause();
      }
      if (mode === "waiting") {
        debug/* default */.Z.log("lipsync mode is waiting");
        audio.pause();
      }
      if (mode === "playing") {
        debug/* default */.Z.log("lipsync mode is playing");
        audio.play();
      }
    };

    function addVideoSlider() {
      if (
        dbShowVideoSlider !== 1 ||
        document.querySelector("#VOTVideoSlider") ||
        document.querySelector(".translationBtn").dataset.state !== "success"
      ) {
        return;
      }

      const newVolume =
        window.location.hostname.includes("youtube.com") &&
        !dbAutoSetVolumeYandexStyle
          ? document
              .querySelector(".ytp-volume-panel")
              ?.getAttribute("aria-valuenow")
          : Math.round(video.volume * 100);
      tempOriginalVolume = newVolume;

      const slider = createMenuSlider(
        "VOTVideoSlider",
        newVolume,
        `${translations[lang].VOTVolume}: <b class = "volumePercent" id="VOTOriginalVolume">${newVolume}%</b>`
      );

      slider.querySelector("#VOTVideoSlider").oninput = async (event) => {
        const { value } = event.target;
        video.volume = value / 100;
        slider.querySelector("#VOTOriginalVolume").innerText = `${value}%`;

        if (dbSyncVolume !== 1) {
          return;
        }

        // Sync translation volume slider with video volume slider
        const translateVolumeSlider = document.querySelector(
          "#VOTTranslationSlider"
        );

        if (!translateVolumeSlider) {
          return;
        }
        const translateVolume = Number(translateVolumeSlider.value);
        const finalValue = syncVolume(
          audio,
          value,
          translateVolume,
          tempOriginalVolume
        );

        translateVolumeSlider.value = finalValue;

        const translateVolumeLabel = document.querySelector(
          "#VOTTranslationVolume"
        );

        if (translateVolumeLabel) {
          translateVolumeLabel.innerText = `${finalValue}%`;
        }

        tempVolume = finalValue;
        tempOriginalVolume = value;
      };

      const menuOptions = document.querySelector(".translationMenuOptions");
      menuOptions.appendChild(slider);
    }

    async function addTranslationSlider() {
      // Return early if slider already exists or translation is not successful
      if (
        document.querySelector("#VOTTranslationSlider") ||
        document.querySelector(".translationBtn").dataset.state !== "success"
      ) {
        return;
      }

      // Use dbDefaultVolume or 100 as the default translation volume
      const defaultTranslateVolume =
        typeof dbDefaultVolume === "number" ? dbDefaultVolume : 100;
      tempOriginalVolume = defaultTranslateVolume;

      // Create a slider element with the default volume and label
      const slider = createMenuSlider(
        "VOTTranslationSlider",
        defaultTranslateVolume,
        `${translations[lang].VOTVolumeTranslation}: <b class = "volumePercent" id="VOTTranslationVolume">${defaultTranslateVolume}%</b>`
      );

      // Add an input event listener to the slider
      slider.querySelector("#VOTTranslationSlider").oninput = async ({
        target: { value },
      }) => {
        // Set the audio volume to the slider value
        audio.volume = value / 100;

        // Update the volume label
        document.querySelector("#VOTTranslationVolume").innerText = `${value}%`;

        // Update the database with the new volume value
        await updateDB({ defaultVolume: Number(value) });
        dbDefaultVolume = Number(value);

        // Sync translation volume with video volume if dbSyncVolume is 1
        if (dbSyncVolume === 1) {
          syncTranslationWithVideo(value);
        }
      };

      // Append the slider to the menu options
      const menuOptions = document.querySelector(".translationMenuOptions");
      menuOptions.appendChild(slider);
    }

    // A helper function to sync translation volume with video volume
    function syncTranslationWithVideo(translationValue) {
      // Get the video volume slider element
      const videoVolumeSlider = document.querySelector("#VOTVideoSlider");

      if (!videoVolumeSlider) {
        return;
      }
      // Get the video volume value
      const videoVolume = Number(videoVolumeSlider.value);

      // Calculate the synced video volume based on the translation volume
      const finalValue = syncVolume(
        video,
        translationValue,
        videoVolume,
        tempVolume
      );

      // Set the video volume slider value to the synced value
      videoVolumeSlider.value = finalValue;

      // Update the video volume label
      const videoVolumeLabel = document.querySelector("#VOTOriginalVolume");
      if (videoVolumeLabel) videoVolumeLabel.innerText = `${finalValue}%`;

      // Update the temp variables for future syncing
      tempOriginalVolume = finalValue;
      tempVolume = translationValue;
    }

    async function videoValidator() {
      if (window.location.hostname.includes("youtube.com")) {
        debug/* default */.Z.log("VideoValidator videoData: ", videoData);
        if (
          dontTranslateYourLang === 1 &&
          videoData.detectedLanguage === lang &&
          videoData.responseLanguage === lang
        ) {
          throw `[VOT] ${translations[lang].VOTDisableFromYourLang}`;
        }
        if (ytData.isPremiere) {
          throw `[VOT] ${translations[lang].VOTPremiere}`;
        }
        if (ytData.isLive) {
          throw `[VOT] ${translations[lang].VOTLiveNotSupported}`;
        }
        if (videoData.duration > 14_400) {
          throw `[VOT] ${translations[lang].VOTVideoIsTooLong}`;
        }
      }
      return true;
    }

    const translateExecutor = async (VIDEO_ID) => {
      if (!videoData.detectedLanguage) {
        videoData = await getVideoData();
        await setSelectMenuValues(
          videoData.detectedLanguage,
          videoData.responseLanguage
        );
      }
      debug/* default */.Z.log("Run videoValidator");
      await videoValidator();
      debug/* default */.Z.log("Run translateFunc");
      await translateFunc(
        VIDEO_ID,
        videoData.detectedLanguage,
        videoData.responseLanguage
      );
    };

    // Define a function to handle common events
    async function handleVideoEvent(event) {
      debug/* default */.Z.log(`video ${event.type}`);
      await lipSync(event.type);
    }

    // Define a function to stop translation and clean up
    async function stopTranslation() {
      await stopTraslate();
      await syncVideoVolumeSlider();
    }

    // Define a function to translate a video and handle the callback
    async function translateFunc(VIDEO_ID, requestLang, responseLang) {
      console.log("[VOT] Video Data: ", videoData);
      const videoURL = `${siteTranslates[siteHostname]}${VIDEO_ID}`;
      translateVideo(
        videoURL,
        videoData.duration,
        requestLang,
        responseLang,
        async (success, urlOrError) => {
          debug/* default */.Z.log("[exec callback] translateVideo");
          if (getVideoId(siteHostname) !== VIDEO_ID) return;
          if (!success) {
            transformBtn("error", urlOrError);
            // if the error line contains information that the translation is being performed, then we wait
            if (urlOrError.includes(translations[lang].translationTake)) {
              clearTimeout(autoRetry);
              autoRetry = setTimeout(
                () => translateFunc(VIDEO_ID, requestLang, responseLang),
                60_000
              );
            }
            throw `[VOT] ${urlOrError}`;
          }

          audio.src = urlOrError;

          // cf version only
          if (
            false
          ) {}

          volumeOnStart = video?.volume;
          if (typeof dbDefaultVolume === "number") {
            audio.volume = dbDefaultVolume / 100;
          }
          if (
            typeof dbAutoSetVolumeYandexStyle === "number" &&
            dbAutoSetVolumeYandexStyle
          ) {
            video.volume = config/* autoVolume */.IM;
            // temp fix
            if (window.location.hostname.includes("youtube.com")) {
              document.querySelector(".html5-video-player").setVolume(config/* autoVolume */.IM * 100);
            }
          }

          switch (siteHostname) {
            case "twitter":
              document
                .querySelector('div[data-testid="app-bar-back"][role="button"]')
                .addEventListener("click", stopTranslation);
              break;
            case "invidious":
            case "piped":
              break;
            default:
              if (siteEvent !== null) {
                document.body.addEventListener(siteEvent, stopTranslation);
              }
              break;
          }

          const siteHostnames = [
            "twitch",
            "vimeo",
            "facebook",
            "rutube",
            "twitter",
            "bilibili.com",
            "mail.ru",
          ];
          for (let i = 0; i < siteHostnames.length; i++) {
            if (siteHostname === siteHostnames[i]) {
              const mutationObserver = new MutationObserver(
                async (mutations) => {
                  mutations.forEach(async (mutation) => {
                    if (
                      mutation.type === "attributes" &&
                      mutation.attributeName === "src" &&
                      mutation.target === video &&
                      mutation.target.src !== ""
                    ) {
                      stopTranslation();
                      firstPlay = true;
                    }
                  });
                }
              );
              mutationObserver.observe(videoContainer, {
                attributes: true,
                childList: false,
                subtree: true,
                attributeOldValue: true,
              });
              break;
            }
          }

          if (video && !video.paused) lipSync("play");
          const videos = document.querySelectorAll("video");
          const events = [
            "playing",
            "ratechange",
            "play",
            "waiting",
            "pause",
          ];
          videos.forEach((v) =>
            events.forEach((e) => v.addEventListener(e, handleVideoEvent))
          );
          transformBtn("success", translations[lang].disableTranslate);
          addVideoSlider();
          await addTranslationSlider();

          const VOTVideoSlider = document.querySelector("#VOTVideoSlider");
          if (VOTVideoSlider) VOTVideoSlider.value = config/* autoVolume */.IM * 100;

          const VOTOriginalVolume =
            document.querySelector("#VOTOriginalVolume");
          if (VOTOriginalVolume) {
            VOTOriginalVolume.innerText = `${config/* autoVolume */.IM * 100}%`;
          }

          const downloadBtn = document.querySelector(".translationDownload");
          downloadBtn.href = urlOrError;
          downloadBtn.style.display = "initial";
        }
      );
    }

    document.addEventListener("click", async (event) => {
      const block = document.querySelector(".translationBlock");
      const menuContainer = document.querySelector(".translationMenuContent");
      const isBlock =
        block || event.target === block ? block.contains(event.target) : false;
      const isContent =
        menuContainer || event.target === menuContainer
          ? menuContainer.contains(event.target)
          : false;
      const isVideo =
        videoContainer || event.target === videoContainer
          ? videoContainer.contains(event.target)
          : false;

      debug/* default */.Z.log(`[document click] ${isBlock} ${isContent} ${isVideo}`);
      if (!(!isBlock && !isContent)) return;
      if (!isVideo) logout(0);

      menuContainer.style.display = "none";
      openedMenu = false;
    });

    const addEventListeners = (element, events, handler) => {
      events.forEach((event) =>
        element.addEventListener(event, async (event) => {
          await handler(event);
        })
      );
    };

    if (siteHostname === "pornhub") {
      if (window.location.pathname.includes("view_video.php")) {
        const videoElement = document.querySelector(
          ".original.mainPlayerDiv > video-element > div"
        );
        addEventListeners(videoElement, ["mousemove", "mouseout"], resetTimer);
      } else if (window.location.pathname.includes("embed/")) {
        const playerElement = document.querySelector("#player");
        addEventListeners(playerElement, ["mousemove", "mouseout"], resetTimer);
      }
    } else if (siteHostname === "twitter") {
      const videoPlayerElement = document.querySelector(
        'div[data-testid="videoPlayer"'
      );
      addEventListeners(
        videoPlayerElement,
        ["mousemove", "mouseout"],
        resetTimer
      );
    } else {
      addEventListeners(videoContainer, ["mousemove", "mouseout"], resetTimer);
    }

    document
      .querySelector(".translationBlock")
      .addEventListener("mousemove", (event) =>
        changeOpacityOnEvent(event, timer, opacityRatio)
      );
    document
      .querySelector(".translationMenuContent")
      .addEventListener("mousemove", (event) =>
        changeOpacityOnEvent(event, timer, opacityRatio)
      );

    document.addEventListener("touchstart", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
    document.addEventListener("touchmove", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
    document.addEventListener("touchend", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
    document.querySelectorAll("video").forEach((video) => {
      video.addEventListener("abort", async () => {
        debug/* default */.Z.log("lipsync mode is abort");
        await stopTranslation();
        videoData = "";
      });
    });

    document
      .querySelector(".translationBtn")
      .addEventListener("click", async (event) => {
        debug/* default */.Z.log("[click translationBtn] before all functions & methods");
        event.stopPropagation();
        event.stopImmediatePropagation();

        // check if the audio source is not empty
        if (audio.src) {
          debug/* default */.Z.log("[click translationBtn] audio.src is not empty");
          await stopTraslate();
          return;
        }

        try {
          debug/* default */.Z.log("[click translationBtn] trying execute translation");
          const VIDEO_ID = getVideoId(siteHostname);

          if (!VIDEO_ID) {
            throw `[VOT] ${translations[lang].VOTNoVideoIDFound}`;
          }

          await translateExecutor(VIDEO_ID);
        } catch (err) {
          console.error("[VOT]", err);
          transformBtn("error", String(err).substring(4, err.length));
        }
      });

    video.addEventListener("progress", async (event) => {
      event.stopPropagation();

      if (!(firstPlay && dbAutoTranslate === 1)) {
        return;
      }
      const VIDEO_ID = getVideoId(siteHostname);

      if (!VIDEO_ID) {
        throw `[VOT] ${translations[lang].VOTNoVideoIDFound}`;
      }

      try {
        await translateExecutor(VIDEO_ID);
        firstPlay = false;
      } catch (err) {
        console.error("[VOT]", err);
        transformBtn("error", String(err).substring(4, err.length));
        firstPlay = false;
      }
    });

    document
      .querySelector(".translationMenu")
      .addEventListener("click", async (event) => {
        event.stopPropagation();

        const select = document.querySelector(".translationMenuOptions")?.querySelector("#VOTSubtitlesLang");

        if (!openedMenu || !select) {
          return;
        }

        const VIDEO_ID = getVideoId(siteHostname);

        if (!VIDEO_ID) {
          console.error(`[VOT] ${translations[lang].VOTNoVideoIDFound}`);
          subtitlesList = [];
          subtitlesListVideoId = null;
          await updateSubtitlesLangSelect();
          return;
        }

        if (subtitlesListVideoId === VIDEO_ID) {
          return;
        }

        if (!videoData.detectedLanguage) {
          videoData = await getVideoData()
          await setSelectMenuValues(videoData.detectedLanguage, videoData.responseLanguage);
        }

        subtitlesList = await subtitles_getSubtitles(siteHostname, VIDEO_ID, videoData.detectedLanguage);
        if (!subtitlesList) {
          await changeSubtitlesLang("disabled");
        } else {
          subtitlesListVideoId = VIDEO_ID;
        }
        await updateSubtitlesLangSelect();
      });
  }

  async function initWebsite() {
    debug/* default */.Z.log("Runned initWebsite function");
    if (config_regexes.youtubeRegex.test(window.location.hostname)) {
      if (window.location.pathname.includes("embed")) {
        const videoContainer = document.querySelector(".html5-video-container");
        await translateProccessor(videoContainer, "youtube", null);
        return;
      }

      debug/* default */.Z.log("[initWebsite] Found a match with youtube hostname");
      const ytPageEnter = () => {
        const videoContainer = document.querySelector(
          config_selectors.youtubeSelector
        );
        if (videoContainer) {
          debug/* default */.Z.log("[exec] translateProccessor youtube on page enter");
          translateProccessor(videoContainer, "youtube", "yt-translate-stop");
        } else {
          if (!ytplayer || !ytplayer.config) {
            debug/* default */.Z.log("[exec] ytplayer is null");
            return;
          }
          ytplayer.config.args.jsapicallback = () => {
            debug/* default */.Z.log(
              "[exec] translateProccessor youtube on page enter (ytplayer.config.args.jsapicallback)"
            );
            translateProccessor(videoContainer, "youtube", "yt-translate-stop");
          };
        }
      };

      document.addEventListener("spfdone", ytPageEnter);
      document.addEventListener("yt-navigate-finish", ytPageEnter);

      const ytPageLeave = () => {
        document.body.dispatchEvent(new Event("yt-translate-stop"));
      };

      document.addEventListener("spfrequest", ytPageLeave);
      document.addEventListener("yt-navigate-start", ytPageLeave);

      if (window.location.hostname.includes("m.youtube.com")) {
        let ytmobile = await waitForElm("#player");
        if (ytmobile) {
          await sleep(2300);
          await translateProccessor(ytmobile, "youtube", "yt-translate-stop");

          const mutationObserver = new MutationObserver(async (mutations) => {
            for (const mutation of mutations) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src"
              ) {
                ytmobile = await waitForElm("#player");
                await sleep(2300);
                await translateProccessor(
                  ytmobile,
                  "youtube",
                  "yt-translate-stop"
                );
              }
            }
          });

          mutationObserver.observe(ytmobile, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
        const ytPageLeave = () => {
          document.body.dispatchEvent(new Event("yt-translate-stop"));
        };
        document.addEventListener("spfdone", ytPageLeave);
        document.addEventListener("yt-navigate-finish", ytPageLeave);
        document.addEventListener("spfrequest", ytPageLeave);
        document.addEventListener("yt-navigate-start", ytPageLeave);
      }
      return;
    }
    if (window.location.hostname.includes("twitch.tv")) {
      debug/* default */.Z.log("[initWebsite] Found a match with twitch.tv");
      if (
        window.location.hostname.includes("m.twitch.tv") &&
        (window.location.pathname.includes("/videos/") ||
          window.location.pathname.includes("/clip/"))
      ) {
        debug/* default */.Z.log("[initWebsite] Matched Twitch Mobile");
        const el = await waitForElm(config_selectors.twitchMobileSelector);
        if (el) {
          await sleep(200);
          const twitchMobileSelector = document.querySelector(
            config_selectors.twitchMobileSelector
          );
          await translateProccessor(twitchMobileSelector, "twitch", null);

          const mutationObserver = new MutationObserver(async (mutations) => {
            for (const mutation of mutations) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src" &&
                mutation.target === twitchMobileSelector?.querySelector("video")
              ) {
                await sleep(1000);
                await translateProccessor(twitchMobileSelector, "twitch", null);
              }
            }
          });

          mutationObserver.observe(twitchMobileSelector, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
      } else if (
        window.location.hostname.includes("player.twitch.tv") ||
        window.location.hostname.includes("clips.twitch.tv") ||
        window.location.pathname.includes("/videos/") ||
        window.location.pathname.includes("/clip/")
      ) {
        debug/* default */.Z.log("[initWebsite] Matched Twitch Desktop");
        const el = await waitForElm(config_selectors.twitchSelector);
        if (el) {
          await sleep(200);
          await translateProccessor(el, "twitch", null);
        }
      }
      debug/* default */.Z.log("[initWebsite] Exit function in the twitch section");
      return;
    }
    if (window.location.hostname.includes("xvideos.com")) {
      debug/* default */.Z.log("[entered] xvideos");
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".video-bg-pic"),
        "xvideos",
        null
      );
      return;
    }
    if (window.location.hostname.includes("pornhub.com")) {
      debug/* default */.Z.log("[entered] pornhub");
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".mgp_videoWrapper"),
        "pornhub",
        null
      );
      return;
    }
    if (sitesInvidious.includes(window.location.hostname)) {
      // Need an additional extension to work in chrome-like browsers
      debug/* default */.Z.log("[entered] invidious");
      await translateProccessor(
        document.querySelector("#player"),
        "youtube",
        null
      );
    } else if (sitesPiped.includes(window.location.hostname)) {
      // Need an additional extension to work in chrome-like browsers
      debug/* default */.Z.log("[entered] piped");
      const el = await waitForElm(config_selectors.pipedSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("youtube");
        await translateProccessor(el, "youtube", "piped");
        setInterval(async () => {
          videoIDNew = getVideoId("youtube");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.pipedSelector),
                "youtube",
                "piped"
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (/^(www.|m.)?vk.(com|ru)$/.test(window.location.hostname)) {
      debug/* default */.Z.log("[entered] vk.com");
      const el = await waitForElm(config_selectors.vkSelector);
      if (el) {
        await translateProccessor(
          document.querySelector(config_selectors.vkSelector),
          "vk",
          null
        );
        let videoIDVKNew;
        let videoIDVK = getVideoId("vk");
        setInterval(async () => {
          videoIDVKNew = getVideoId("vk");
          if (videoIDVK !== videoIDVKNew) {
            if (videoIDVKNew) {
              const el = await waitForElm(config_selectors.vkSelector);
              if (el) {
                await translateProccessor(el, "vk", null);
              }
            }
            videoIDVK = videoIDVKNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("vimeo.com")) {
      debug/* default */.Z.log("[entered] vimeo.com");
      const el = await waitForElm(config_selectors.vimeoSelector);
      if (el) {
        await sleep(1000);
        await translateProccessor(
          document.querySelector(config_selectors.vimeoSelector),
          "vimeo",
          null
        );
      }
    } else if (window.location.hostname.includes("9gag.com")) {
      await sleep(1000);
      await translateProccessor(
        document.querySelector(config_selectors.gagSelector),
        "9gag",
        null
      );
    } else if (window.location.hostname.includes("coub.com")) {
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".viewer__player"),
        "coub",
        null
      );
    } else if (window.location.hostname.includes("bitchute.com")) {
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".plyr__video-wrapper"),
        "bitchute",
        null
      );
    } else if (window.location.hostname.includes("rutube.ru")) {
      const elementSelector = window.location.pathname.includes("/play/embed")
        ? "#app > div > div"
        : ".video-player > div > div > div:nth-child(2)";

      const el = await waitForElm(elementSelector);
      if (el) {
        await translateProccessor(el, "rutube", null);
      }
    } else if (window.location.hostname.includes("bilibili.com")) {
      if (window.location.pathname.includes("/video/")) {
        const el = await waitForElm(config_selectors.bilibilicomSelector);
        if (el) {
          await translateProccessor(el, "bilibili.com", null);
        }
      } else if (
        window.location.pathname.includes(
          "/blackboard/webplayer/embed-old.html"
        )
      ) {
        const el = await waitForElm("video");
        if (el) {
          await translateProccessor(el.parentElement, "bilibili.com", null);
        }
      }
    } else if (window.location.hostname.includes("twitter.com")) {
      const el = await waitForElm(config_selectors.twitterSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("twitter");
        await translateProccessor(el, "twitter", null);
        setInterval(async () => {
          videoIDNew = getVideoId("twitter");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.twitterSelector),
                "twitter",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("my.mail.ru")) {
      const el = await waitForElm(config_selectors.mailSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("mail.ru");
        await translateProccessor(el, "mail.ru", null);
        setInterval(async () => {
          videoIDNew = getVideoId("mail.ru");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.mailSelector),
                "mail.ru",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    }
  }

  await initWebsite();
}

src_main().catch((e) => {
  console.error("[VOT]", e);
});

})();

/******/ })()
;