// ==UserScript==
// @name [VOT Cloudflare] - Voice Over Translation
// @name:de [VOT Cloudflare] - Voice-Over-Video-Übersetzung
// @name:es [VOT Cloudflare] - Traducción de vídeo en off
// @name:fr [VOT Cloudflare] - Traduction vidéo voix-off
// @name:it [VOT Cloudflare] - Traduzione Video fuori campo
// @name:ru [VOT Cloudflare] - Закадровый перевод видео
// @name:zh [VOT Cloudflare] - 画外音视频翻译
// @description A small extension that adds a Yandex Browser video translation to other browsers
// @description:de Eine kleine Erweiterung, die eine Voice-over-Übersetzung von Videos aus dem Yandex-Browser zu anderen Browsern hinzufügt
// @description:es Una pequeña extensión que agrega una traducción de voz en off de un video de Yandex Browser a otros navegadores
// @description:fr Une petite extension qui ajoute la traduction vocale de la vidéo du Navigateur Yandex à d'autres navigateurs
// @description:it Una piccola estensione che aggiunge la traduzione vocale del video dal browser Yandex ad altri browser
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @description:zh 一个小扩展，它增加了视频从Yandex浏览器到其他浏览器的画外音翻译
// @version 1.4.1-beta7
// @author sodapng, mynovelhost, Toil, SashaXser, MrSoczekXD
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
// @match *://*.coursera.org/learn/*
// @match *://*.udemy.com/course/*
// @match *://*.tiktok.com/*
// @match *://proxitok.pabloferreiro.es/*
// @match *://proxitok.pussthecat.org/*
// @match *://tok.habedieeh.re/*
// @match *://proxitok.esmailelbob.xyz/*
// @match *://proxitok.privacydev.net/*
// @match *://tok.artemislena.eu/*
// @match *://tok.adminforge.de/*
// @match *://tik.hostux.net/*
// @match *://tt.vern.cc/*
// @match *://cringe.whatever.social/*
// @match *://proxitok.lunar.icu/*
// @match *://proxitok.privacy.com.de/*
// @connect api.browser.yandex.ru
// @downloadURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js
// @grant GM_xmlhttpRequest
// @grant GM_info
// @homepageURL https://github.com/ilyhalight/voice-over-translation/issues
// @icon https://translate.yandex.ru/icons/favicon.ico
// @inject-into page
// @namespace vot-cloudflare
// @require https://cdnjs.cloudflare.com/ajax/libs/protobufjs/7.2.3/light/protobuf.min.js
// @updateURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js
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

.translationDropDB,
.translationUdemyData {
  border: none !important;
  border-radius: 4px !important;
  background: #5426ff !important;
  color: #fff !important;
  padding: 6px 16px !important;
  margin-left: auto !important;
  cursor: pointer !important;
}

.translationUdemyData {
  margin: 16px !important;
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

/***/ "./src/styles/main.css":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


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

/***/ "./src/config/alternativeUrls.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Um: () => (/* binding */ sitesPiped),
/* harmony export */   aL: () => (/* binding */ sitesInvidious),
/* harmony export */   kr: () => (/* binding */ sitesProxyTok)
/* harmony export */ });
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
]




/***/ }),

/***/ "./src/config/config-cloudflare.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ yandexHmacKey),
/* harmony export */   i: () => (/* binding */ workerHost)
/* harmony export */ });
// CLOUDFLARE CONFIGURATION
const workerHost = "vot-new.toil-dump.workers.dev";
const yandexHmacKey = "xtGCyGdTY2Jy6OMEKdTuXev3Twhkamgm";




/***/ }),

/***/ "./src/config/config.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IM: () => (/* binding */ autoVolume),
/* harmony export */   Rr: () => (/* binding */ yandexUserAgent)
/* harmony export */ });
/* unused harmony exports workerHost, yandexHmacKey */
// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const yandexHmacKey = "xtGCyGdTY2Jy6OMEKdTuXev3Twhkamgm";
const yandexUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 YaBrowser/23.7.1.1140 Yowser/2.5 Safari/537.36";
const autoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation




/***/ }),

/***/ "./src/config/constants.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g$: () => (/* binding */ siteTranslates),
/* harmony export */   tW: () => (/* binding */ availableLangs),
/* harmony export */   zL: () => (/* binding */ additionalTTS)
/* harmony export */ });
/* unused harmony export cfOnlyExtensions */
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
  "kk",
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
  "et"
];


const siteTranslates = {
  youtube: "https://youtu.be/",
  twitch: "https://twitch.tv/",
  vimeo: "https://vimeo.com/",
  "9gag": "https://9gag.com/gag/",
  vk: "https://vk.com/video?z=",
  xvideos: "https://www.xvideos.com/",
  pornhub: "https://rt.pornhub.com/view_video.php?viewkey=",
  udemy: "https://www.udemy.com/",
  twitter: "https://twitter.com/i/status/",
  facebook: "https://www.facebook.com/",
  rutube: "https://rutube.ru/video/",
  "bilibili.com": "https://www.bilibili.com/video/",
  "mail.ru": "https://my.mail.ru/",
  coub: "https://coub.com/view/",
  bitchute: "https://www.bitchute.com/video/",
  coursera: "https://www.coursera.org/",
  tiktok: "https://www.tiktok.com/",
};

const cfOnlyExtensions = (/* unused pure expression or super */ null && ([
  "Violentmonkey",
  "FireMonkey",
  "Greasemonkey",
  "AdGuard",
  "OrangeMonkey",
]));




/***/ }),

/***/ "./src/config/regexes.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const regexes = () => {
  return {
    youtubeRegex: /^(www.|m.)?youtube(-nocookie)?.com$/,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regexes());


/***/ }),

/***/ "./src/config/selectors.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    courseraSelector: "#video_player",
    udemySelector: ".vjs-v7",
    tiktokSelector: "video",
    proxyTokSelector: ".column.has-text-centered",
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectors());


/***/ }),

/***/ "./src/getSignature.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ getSignature)
/* harmony export */ });
/* harmony import */ var _config_config_cloudflare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/config/config-cloudflare.js");



async function getSignature(body) {
  // Create a key from the HMAC secret
  const utf8Encoder = new TextEncoder("utf-8");
  const key = await window.crypto.subtle.importKey(
    "raw",
    utf8Encoder.encode(
       true ? _config_config_cloudflare_js__WEBPACK_IMPORTED_MODULE_0__/* .yandexHmacKey */ .I : 0
    ),
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




/***/ }),

/***/ "./src/getUUID.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ getUUID)
/* harmony export */ });
function getUUID(isLower) {
  const uuid = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
  return isLower ? uuid : uuid.toUpperCase();
}




/***/ }),

/***/ "./src/index.js":
/***/ ((__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/styles/main.css");
/* harmony import */ var _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/VOTLocalizedError.js");
/* harmony import */ var _utils_youtubeUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/youtubeUtils.js");
/* harmony import */ var _yandexProtobuf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/yandexProtobuf.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/utils.js");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/config/config.js");
/* harmony import */ var _config_alternativeUrls_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/config/alternativeUrls.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/config/constants.js");
/* harmony import */ var _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/localization/localizationProvider.js");
/* harmony import */ var _indexedDB_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/indexedDB.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/menu.js");
/* harmony import */ var _utils_volume_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/utils/volume.js");
/* harmony import */ var _config_config_cloudflare_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/config/config-cloudflare.js");
/* harmony import */ var _config_regexes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/config/regexes.js");
/* harmony import */ var _config_selectors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/config/selectors.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/utils/debug.js");
/* harmony import */ var _rvt_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/rvt.js");
/* harmony import */ var _subtitles_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/subtitles.js");
/* harmony import */ var _utils_courseraUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/utils/courseraUtils.js");
/* harmony import */ var _utils_udemyUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/utils/udemyUtils.js");






















const sitesChromiumBlocked = [..._config_alternativeUrls_js__WEBPACK_IMPORTED_MODULE_16__/* .sitesInvidious */ .aL, ..._config_alternativeUrls_js__WEBPACK_IMPORTED_MODULE_16__/* .sitesPiped */ .Um];

// translate properties
let translateFromLang = "en"; // default language of video

let translateToLang = _menu_js__WEBPACK_IMPORTED_MODULE_8__/* .lang */ .KQ; // default language of audio response

let ytData = "";
let subtitlesList = [];
let subtitlesListVideoId = null;

async function main() {
  _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("Loading extension...");
  _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(`Selected menu language: ${_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .lang */ .KQ}`);

  if (
    false
  ) {}

  _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("Extension compatibility passed...");

  let timer;
  const audio = new Audio();
  let opacityRatio = 0.9;
  let openedMenu = false;

  if (true) {
    var translationPanding = false;
  }

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

    const container = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createTranslationMenu */ .NX)();
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
        (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .deleteDB */ .Lj)();
        location.reload();
      });

    _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("Added translation menu to ", element);
  }

  function translateVideo(
    url,
    duration,
    requestLang,
    responseLang,
    translationHelp,
    callback
  ) {
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(
      `Translate video (url: ${url}, duration: ${duration}, requestLang: ${requestLang}, responseLang: ${responseLang})`
    );

    _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("translationHelp:", translationHelp);

    if ( true && translationPanding) {
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("translationPanding return");
      return;
    }

    translationPanding = true;

    (0,_rvt_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(
      url,
      duration,
      requestLang,
      responseLang,
      translationHelp,
      (success, response) => {
        translationPanding = false;

        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[exec callback] Requesting video translation");
        if (!success) {
          callback(false, _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("requestTranslationFailed"));
          return;
        }

        const translateResponse =
          _yandexProtobuf_js__WEBPACK_IMPORTED_MODULE_3__/* .yandexProtobuf */ .X.decodeTranslationResponse(response);
        console.log("[VOT] Translation response: ", translateResponse);

        switch (translateResponse.status) {
          case 0:
            callback(false, translateResponse.message);
            break;
          case 1:
            callback(
              !!translateResponse.url,
              translateResponse.url ||
                _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("audioNotReceived")
            );
            break;
          case 2:
            callback(
              false,
              translateResponse.remainingTime
                ? (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .secsToStrTime */ .PG)(translateResponse.remainingTime)
                : _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("translationTakeFewMinutes")
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
            callback(false, _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("videoBeingTranslated"));
            break;
        }
      }
    );
  }

  async function translateProccessor(videoContainer, siteHostname, siteEvent) {
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[translateProccessor] execute on element: ", videoContainer);

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
    let dbUdemyData;
    let dbResponseLanguage;
    let dbAudioProxy; // cf version only
    let firstPlay = true;
    let isDBInited;
    let videoData = "";

    _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("videoContainer", videoContainer);

    video =
      siteHostname === "vimeo"
        ? videoContainer.querySelector(
            ".vp-video-wrapper > .vp-video > .vp-telecine > video"
          )
        : videoContainer.querySelector("video");

    _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("video", video);

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

    (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .addTranslationBlock */ .Ot)(container);
    addTranslationMenu(container);
    if (
      window.location.hostname.includes("youtube.com") &&
      !window.location.hostname.includes("m.youtube.com")
    ) {
      (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .addSubtitlesWidget */ .e7)(container.parentElement);
    } else {
      (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .addSubtitlesWidget */ .e7)(container);
    }
    await changeSubtitlesLang("disabled");

    try {
      isDBInited = await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .initDB */ .zK)();
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
          label: _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("videoLanguage"),
          value: "default",
          disabled: true,
        },
        ...(0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .genOptionsByOBJ */ .Ef)(_config_constants_js__WEBPACK_IMPORTED_MODULE_5__/* .availableLangs */ .tW, videoData.detectedLanguage),
      ];

      const selectToLangOptions = [
        {
          label: _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("translationLanguage"),
          value: "default",
          disabled: true,
        },
        ...(0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .genOptionsByOBJ */ .Ef)(_config_constants_js__WEBPACK_IMPORTED_MODULE_5__/* .availableLangs */ .tW, videoData.responseLanguage),
        {
          label: "─────────",
          value: "separator",
          disabled: true,
        },
        ...(0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .genOptionsByOBJ */ .Ef)(_config_constants_js__WEBPACK_IMPORTED_MODULE_5__/* .additionalTTS */ .zL, videoData.responseLanguage),
      ];

      const selectFromLang = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuSelect */ .Mr)(
        "VOTTranslateFromLang",
        selectFromLangOptions
      );

      const selectToLang = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuSelect */ .Mr)(
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
          _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[onchange] select from language", event.target.value);
          videoData = await getVideoData();
          await setSelectMenuValues(
            event.target.value,
            videoData.responseLanguage
          );
        });

      menuOptions
        .querySelector("#VOTTranslateToLang")
        .addEventListener("change", async (event) => {
          _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[onchange] select to language", event.target.value);
          if (isDBInited) {
            translateToLang = event.target.value;
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ responseLanguage: event.target.value });
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(
              "Response Language value changed. New value: ",
              event.target.value
            );
          }
          videoData = await getVideoData();
          await setSelectMenuValues(
            videoData.detectedLanguage,
            event.target.value
          );
        });
    }

    async function changeSubtitlesLang(subs) {
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[onchange] subtitles", subs);
      const select = document
        .querySelector(".translationMenuOptions")
        ?.querySelector("#VOTSubtitlesLang");
      select && (select.value = subs);
      if (!video) {
        console.error("[VOT] video not found");
        select && (select.value = "disabled");
        return;
      }
      if (subs === "disabled") {
        (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .setSubtitlesWidgetContent */ .Bv)(video, null);
      } else {
        (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .setSubtitlesWidgetContent */ .Bv)(
          video,
          await (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .fetchSubtitles */ .Hl)(subtitlesList.at(parseInt(subs)))
        );
      }
    }

    async function updateSubtitlesLangSelect() {
      const select = document
        .querySelector(".translationMenuOptions")
        ?.querySelector("#VOTSubtitlesLang");

      if (!select) {
        console.error("[VOT] #VOTSubtitlesLang not found");
        return;
      }

      const oldValue = select.value;
      select.innerHTML = "";

      const disabledOption = document.createElement("option");
      disabledOption.value = "disabled";
      disabledOption.innerHTML = _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get(
        "VOTSubtitlesDisabled"
      );
      select.append(disabledOption);

      for (let i = 0; i < subtitlesList.length; i++) {
        const s = subtitlesList[i];
        const option = document.createElement("option");
        option.value = i;
        option.innerHTML =
          (_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("langs")[s.language] ??
            s.language.toUpperCase()) +
          (s.translatedFromLanguage
            ? ` ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTTranslatedFrom")} ${
                _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("langs")[s.translatedFromLanguage] ??
                s.translatedFromLanguage.toUpperCase()
              }`
            : "") +
          (s.source !== "yandex" ? ` ${s.source}` : "") +
          (s.isAutoGenerated
            ? ` (${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTAutogenerated")})`
            : "");
        select.append(option);
      }

      await changeSubtitlesLang(oldValue);
    }

    if (menuOptions && !menuOptions.querySelector("#VOTSubtitlesLang")) {
      const options = [
        {
          label: _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTSubtitlesDisabled"),
          value: "disabled",
          disabled: false,
        },
      ];

      const select = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuSelect */ .Mr)("VOTSubtitlesLang", options);

      select.id = "VOTSubtitlesLangContainer";
      const span = document.createElement("span");
      span.textContent = _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTSubtitles");
      select.prepend(span);

      menuOptions.appendChild(select);

      menuOptions
        .querySelector("#VOTSubtitlesLang")
        .addEventListener("change", async (event) => {
          await changeSubtitlesLang(event.target.value);
        });
    }

    if (isDBInited) {
      const dbData = await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .readDB */ .CZ)();
      if (dbData) {
        dbSubtitlesMaxLength = dbData.subtitlesMaxLength;
        dbHighlightWords = dbData.highlightWords;
        dbAutoTranslate = dbData.autoTranslate;
        dbDefaultVolume = dbData.defaultVolume;
        dbShowVideoSlider = dbData.showVideoSlider;
        dbAutoSetVolumeYandexStyle = dbData.autoSetVolumeYandexStyle;
        dontTranslateYourLang = dbData.dontTranslateYourLang;
        dbResponseLanguage = dbData.responseLanguage;
        dbAudioProxy = dbData.audioProxy; // cf version only
        dbSyncVolume = dbData.syncVolume; // youtube only
        dbUdemyData = dbData.udemyData; // udemy only

        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[db] data from db: ", dbData);

        if (dbSubtitlesMaxLength !== undefined) {
          (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .setSubtitlesMaxLength */ .Lg)(dbSubtitlesMaxLength);
        }

        if (dbHighlightWords !== undefined) {
          (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .setSubtitlesHighlightWords */ .b6)(dbHighlightWords);
        }

        if (dbResponseLanguage !== undefined) {
          videoData = await getVideoData();
          setSelectMenuValues(videoData.detectedLanguage, dbResponseLanguage);
          translateToLang = dbResponseLanguage;
        }

        if (
          dbSubtitlesMaxLength !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTSubtitlesMaxLengthSlider")
        ) {
          const slider = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuSlider */ .iT)(
            "VOTSubtitlesMaxLengthSlider",
            dbSubtitlesMaxLength,
            `${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get(
              "VOTSubtitlesMaxLength"
            )}: <b id="VOTSubtitlesMaxLengthValue">${dbSubtitlesMaxLength}</b>`,
            50,
            300
          );

          slider.querySelector("#VOTSubtitlesMaxLengthSlider").oninput = async (
            event
          ) => {
            const value = Number(event.target.value);
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ subtitlesMaxLength: value });
            dbSubtitlesMaxLength = value;
            slider.querySelector(
              "#VOTSubtitlesMaxLengthValue"
            ).innerText = `${value}`;
            (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .setSubtitlesMaxLength */ .Lg)(value);
          };

          menuOptions.appendChild(slider);
        }

        if (
          dbHighlightWords !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTHighlightWords")
        ) {
          const checkbox = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuCheckbox */ .H0)(
            "VOTHighlightWords",
            dbHighlightWords,
            _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTHighlightWords")
          );

          checkbox.querySelector("#VOTHighlightWords").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ highlightWords: value });
            dbHighlightWords = value;
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(
              "highlightWords value changed. New value: ",
              dbHighlightWords
            );
            (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .setSubtitlesHighlightWords */ .b6)(value);
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbAutoTranslate !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAutoTranslate")
        ) {
          const checkbox = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuCheckbox */ .H0)(
            "VOTAutoTranslate",
            dbAutoTranslate,
            _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTAutoTranslate") +
              (siteHostname === "vk" ||
              window.location.hostname.includes("m.twitch.tv")
                ? ` <strong>(${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get(
                    "recommended"
                  )})</strong>`
                : "")
          );

          checkbox.querySelector("#VOTAutoTranslate").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ autoTranslate: value });
            dbAutoTranslate = value;
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(
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
          const checkbox = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuCheckbox */ .H0)(
            "VOTDontTranslateYourLang",
            dontTranslateYourLang,
            _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTDontTranslateYourLang")
          );

          checkbox.querySelector("#VOTDontTranslateYourLang").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ dontTranslateYourLang: value });
            dontTranslateYourLang = value;
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(
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
          const checkbox = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuCheckbox */ .H0)(
            "VOTAutoSetVolume",
            dbAutoSetVolumeYandexStyle,
            _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTAutoSetVolume") +
              `${_config_config_js__WEBPACK_IMPORTED_MODULE_17__/* .autoVolume */ .IM * 100}%`
          );

          checkbox.querySelector("#VOTAutoSetVolume").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ autoSetVolumeYandexStyle: value });
            dbAutoSetVolumeYandexStyle = value;
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(
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
          const checkbox = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuCheckbox */ .H0)(
            "VOTShowVideoSlider",
            dbShowVideoSlider,
            _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTShowVideoSlider")
          );

          checkbox.querySelector("#VOTShowVideoSlider").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ showVideoSlider: value });
            dbShowVideoSlider = value;
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(
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
          const checkbox = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuCheckbox */ .H0)(
            "VOTSyncVolume",
            dbSyncVolume,
            _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTSyncVolume")
          );

          checkbox.querySelector("#VOTSyncVolume").onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ syncVolume: value });
            dbSyncVolume = value;
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("syncVolume value changed. New value: ", dbSyncVolume);
          };

          menuOptions.appendChild(checkbox);
        }

        // cf version only
        if (
           true &&
          dbAudioProxy !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAudioProxy")
        ) {
          const checkbox = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuCheckbox */ .H0)(
            "VOTAudioProxy",
            dbAudioProxy,
            _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTAudioProxy")
          );

          checkbox.querySelector("#VOTAudioProxy").onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ audioProxy: value });
            dbAudioProxy = value;
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("audioProxy value changed. New value: ", dbAudioProxy);
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          window.location.hostname.includes("udemy.com") &&
          dbUdemyData !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTUdemyData")
        ) {
          // TODO: Along with the rework of the menu, change to the input field
          const btn = document.createElement("button");
          btn.classList.add("translationUdemyData");
          btn.innerText = _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("VOTUdemyData");
          btn.onclick = async (event) => {
            event.stopPropagation();
            const accessToken = prompt(
              _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("enterUdemyAccessToken")
            );
            const udemyData = {
              accessToken,
              expires: new Date().getTime(),
            };
            await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ udemyData });
            dbUdemyData = udemyData;
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("udemyData value changed. New value: ", dbUdemyData);
            window.location.reload();
          };
          menuOptions.appendChild(btn);
        }
      }
    }

    (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("none", _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("translateVideo"));

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

      const ytpVolumePanel = document.querySelector(".ytp-volume-panel");
      if (ytpVolumePanel) {
        syncVolumeObserver.observe(ytpVolumePanel, {
          attributes: true,
          childList: false,
          subtree: true,
          attributeOldValue: true,
        });
      }
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
      if (downloadBtn) {
        downloadBtn.href = "";
        downloadBtn.style.display = "none";
      }
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("none", _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("translateVideo"));
      if (volumeOnStart) {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(`Volume on start: ${volumeOnStart}`);
        if (window.location.hostname.includes("youtube.com")) {
          document
            .querySelector(".html5-video-player")
            .setVolume(volumeOnStart * 100);
        } else {
          video.volume = volumeOnStart;
        }
      }
    }

    async function syncVideoVolumeSlider() {
      // Sync volume slider with original video (youtube only)
      const newSlidersVolume = Math.round(getVideoVolume() * 100);

      const videoSlider = document.querySelector("#VOTVideoSlider");

      if (!videoSlider) {
        return;
      }
      videoSlider.value = newSlidersVolume;

      const videoVolumeLabel = document.querySelector("#VOTOriginalVolume");

      if (videoVolumeLabel) {
        videoVolumeLabel.innerText = `${newSlidersVolume}%`;
      }

      if (dbSyncVolume === 1) {
        tempOriginalVolume = Number(newSlidersVolume);
      }
    }

    function getVideoVolume() {
      /**
       * Get video volume in 0.00-1.00 format
       */
      let videoVolume = video?.volume;
      if (window.location.hostname.includes("youtube.com")) {
        videoVolume = _utils_youtubeUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .youtubeUtils */ .K.getVideoVolume() || videoVolume;
      }
      return videoVolume;
    }

    function setVideoVolume(volume) {
      /**
       * Set video volume in 0.00-1.00 format
       */
      if (window.location.hostname.includes("youtube.com")) {
        return _utils_youtubeUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .youtubeUtils */ .K.setVideoVolume(volume);
      }

      video.volume = volume;
    }

    async function getVideoData() {
      const videoData = {};

      videoData.translationHelp = null; // ! should be null for ALL websites except coursera and udemy !
      videoData.duration = video?.duration || 343; // ! if 0 - we get 400 error
      videoData.videoId = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)(siteHostname);
      videoData.detectedLanguage = translateFromLang;
      videoData.responseLanguage = translateToLang;

      if (window.location.hostname.includes("youtube.com")) {
        ytData = await _utils_youtubeUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .youtubeUtils */ .K.getVideoData();
        if (ytData.author !== "") {
          videoData.detectedLanguage = ytData.detectedLanguage;
          videoData.responseLanguage = translateToLang;
        }
      } else if (
        window.location.hostname.includes("rutube") ||
        window.location.hostname.includes("my.mail.ru")
      ) {
        videoData.detectedLanguage = "ru";
      } else if (window.location.hostname.includes("bilibili.com")) {
        videoData.detectedLanguage = "zh";
      } else if (window.location.hostname.includes("coursera.org")) {
        const courseraData = await _utils_courseraUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .courseraUtils */ .O.getVideoData(translateToLang);
        videoData.duration = courseraData.duration || videoData.duration; // courseraData.duration sometimes it can be equal to NaN
        videoData.detectedLanguage = courseraData.detectedLanguage;
        videoData.translationHelp = courseraData.translationHelp;
      } else if (window.location.hostname.includes("udemy.com")) {
        const udemyData = await _utils_udemyUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .udemyUtils */ .O.getVideoData(
          dbUdemyData,
          translateToLang
        );
        videoData.duration = udemyData.duration || videoData.duration;
        videoData.detectedLanguage = udemyData.detectedLanguage;
        videoData.translationHelp = udemyData.translationHelp;
      }

      return videoData;
    }

    const lipSync = async (mode = false) => {
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("lipsync video", video);
      if (!video) {
        return;
      }
      audio.currentTime = video.currentTime;
      audio.playbackRate = video.playbackRate;

      if (!mode) {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("lipsync mode is not set");
        return;
      }

      if (mode === "play") {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("lipsync mode is play");
        const audioPromise = audio.play();
        if (audioPromise !== undefined) {
          audioPromise.catch((e) => {
            console.error("[VOT]", e);
            if (e.name === "NotAllowedError") {
              (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)(
                "error",
                _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("grantPermissionToAutoPlay")
              );
              throw new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("grantPermissionToAutoPlay");
            } else if (e.name === "NotSupportedError") {
              (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)(
                "error",
                sitesChromiumBlocked.includes(window.location.hostname)
                  ? _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("neededAdditionalExtension")
                  : _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("audioFormatNotSupported")
              );
              throw sitesChromiumBlocked.includes(window.location.hostname)
                ? new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("neededAdditionalExtension")
                : new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("audioFormatNotSupported");
            }
          });
        }
        return;
      }
      if (mode === "pause") {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("lipsync mode is pause");
        audio.pause();
      }
      if (mode === "stop") {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("lipsync mode is stop");
        audio.pause();
      }
      if (mode === "waiting") {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("lipsync mode is waiting");
        audio.pause();
      }
      if (mode === "playing") {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("lipsync mode is playing");
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

      const newVolume = getVideoVolume() * 100;
      tempOriginalVolume = newVolume;

      const slider = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuSlider */ .iT)(
        "VOTVideoSlider",
        newVolume,
        `${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get(
          "VOTVolume"
        )}: <b class = "volumePercent" id="VOTOriginalVolume">${newVolume}%</b>`
      );

      slider.querySelector("#VOTVideoSlider").oninput = async (event) => {
        const { value } = event.target;
        setVideoVolume(value / 100);
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
        const finalValue = (0,_utils_volume_js__WEBPACK_IMPORTED_MODULE_18__/* .syncVolume */ .C)(
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
      const slider = (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .createMenuSlider */ .iT)(
        "VOTTranslationSlider",
        defaultTranslateVolume,
        `${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get(
          "VOTVolumeTranslation"
        )}: <b class = "volumePercent" id="VOTTranslationVolume">${defaultTranslateVolume}%</b>`
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
        await (0,_indexedDB_js__WEBPACK_IMPORTED_MODULE_7__/* .updateDB */ .l6)({ defaultVolume: Number(value) });
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
      const finalValue = (0,_utils_volume_js__WEBPACK_IMPORTED_MODULE_18__/* .syncVolume */ .C)(
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
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("VideoValidator videoData: ", videoData);
        if (
          dontTranslateYourLang === 1 &&
          videoData.detectedLanguage === _menu_js__WEBPACK_IMPORTED_MODULE_8__/* .lang */ .KQ &&
          videoData.responseLanguage === _menu_js__WEBPACK_IMPORTED_MODULE_8__/* .lang */ .KQ
        ) {
          throw new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("VOTDisableFromYourLang");
        }
        if (ytData.isPremiere) {
          throw new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("VOTPremiere");
        }
        if (ytData.isLive) {
          throw new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("VOTLiveNotSupported");
        }
        if (videoData.duration > 14_400) {
          throw new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("VOTVideoIsTooLong");
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
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("Run videoValidator");
      await videoValidator();
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("Run translateFunc");
      await translateFunc(
        VIDEO_ID,
        videoData.detectedLanguage,
        videoData.responseLanguage,
        videoData.translationHelp
      );
    };

    // Define a function to handle common events
    async function handleVideoEvent(event) {
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(`video ${event.type}`);
      await lipSync(event.type);
    }

    // Define a function to stop translation and clean up
    async function stopTranslation() {
      await stopTraslate();
      await syncVideoVolumeSlider();
    }

    // Define a function to translate a video and handle the callback
    async function translateFunc(
      VIDEO_ID,
      requestLang,
      responseLang,
      translationHelp
    ) {
      console.log("[VOT] Video Data: ", videoData);
      const videoURL = `${_config_constants_js__WEBPACK_IMPORTED_MODULE_5__/* .siteTranslates */ .g$[siteHostname]}${VIDEO_ID}`;
      if (["udemy", "coursera"].includes(siteHostname) && !translationHelp) {
        throw new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("VOTTranslationHelpNull");
      }
      translateVideo(
        videoURL,
        videoData.duration,
        requestLang,
        responseLang,
        translationHelp,
        async (success, urlOrError) => {
          _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[exec callback] translateVideo");
          if ((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)(siteHostname) !== VIDEO_ID) return;
          if (!success) {
            if (urlOrError?.name === "VOTLocalizedError") {
              (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("error", urlOrError.localizedMessage);
            } else {
              (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("error", urlOrError);
            }
            // if the error line contains information that the translation is being performed, then we wait
            if (
              urlOrError.includes(_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("translationTake"))
            ) {
              clearTimeout(autoRetry);
              autoRetry = setTimeout(
                () =>
                  translateFunc(
                    VIDEO_ID,
                    requestLang,
                    responseLang,
                    translationHelp
                  ),
                60_000
              );
            }
            throw urlOrError;
          }

          audio.src = urlOrError;

          // cf version only
          if (
             true &&
            dbAudioProxy === 1 &&
            urlOrError.startsWith("https://")
          ) {
            const audioPath = urlOrError.replace(
              "https://vtrans.s3-private.mds.yandex.net/tts/prod/",
              ""
            );
            const proxiedAudioUrl = `https://${_config_config_cloudflare_js__WEBPACK_IMPORTED_MODULE_19__/* .workerHost */ .i}/video-translation/audio-proxy/${audioPath}`;
            console.log(`[VOT] Audio proxied via ${proxiedAudioUrl}`);
            audio.src = proxiedAudioUrl;
          }

          volumeOnStart = getVideoVolume();
          if (typeof dbDefaultVolume === "number") {
            audio.volume = dbDefaultVolume / 100;
          }
          if (
            typeof dbAutoSetVolumeYandexStyle === "number" &&
            dbAutoSetVolumeYandexStyle
          ) {
            setVideoVolume(_config_config_js__WEBPACK_IMPORTED_MODULE_17__/* .autoVolume */ .IM);
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
          const events = ["playing", "ratechange", "play", "waiting", "pause"];
          videos.forEach((v) =>
            events.forEach((e) => v.addEventListener(e, handleVideoEvent))
          );
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("success", _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.get("disableTranslate"));
          addVideoSlider();
          await addTranslationSlider();

          const VOTVideoSlider = document.querySelector("#VOTVideoSlider");
          if (VOTVideoSlider) VOTVideoSlider.value = _config_config_js__WEBPACK_IMPORTED_MODULE_17__/* .autoVolume */ .IM * 100;

          const VOTOriginalVolume =
            document.querySelector("#VOTOriginalVolume");
          if (VOTOriginalVolume) {
            VOTOriginalVolume.innerText = `${_config_config_js__WEBPACK_IMPORTED_MODULE_17__/* .autoVolume */ .IM * 100}%`;
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

      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(`[document click] ${isBlock} ${isContent} ${isVideo}`);
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
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("lipsync mode is abort");
        await stopTranslation();
        videoData = "";
      });
    });

    document
      .querySelector(".translationBtn")
      .addEventListener("click", async (event) => {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[click translationBtn] before all functions & methods");
        event.stopPropagation();
        event.stopImmediatePropagation();

        // check if the audio source is not empty
        if (audio.src) {
          _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[click translationBtn] audio.src is not empty");
          await stopTraslate();
          return;
        }

        try {
          _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[click translationBtn] trying execute translation");
          const VIDEO_ID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)(siteHostname);

          if (!VIDEO_ID) {
            throw new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("VOTNoVideoIDFound");
          }

          await translateExecutor(VIDEO_ID);
        } catch (err) {
          console.error("[VOT]", err);
          if (err?.name === "VOTLocalizedError") {
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("error", err.localizedMessage);
          } else {
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("error", err);
          }
        }
      });

    video.addEventListener("progress", async (event) => {
      event.stopPropagation();

      if (!(firstPlay && dbAutoTranslate === 1)) {
        return;
      }
      const VIDEO_ID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)(siteHostname);

      if (!VIDEO_ID) {
        throw new _utils_VOTLocalizedError_js__WEBPACK_IMPORTED_MODULE_1__/* .VOTLocalizedError */ .C("VOTNoVideoIDFound");
      }

      try {
        await translateExecutor(VIDEO_ID);
        firstPlay = false;
      } catch (err) {
        console.error("[VOT]", err);
        if (err?.name === "VOTLocalizedError") {
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("error", err.localizedMessage);
        } else {
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_8__/* .transformBtn */ .uJ)("error", err);
        }
        firstPlay = false;
      }
    });

    document
      .querySelector(".translationMenu")
      .addEventListener("click", async (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();

        const select = document
          .querySelector(".translationMenuOptions")
          ?.querySelector("#VOTSubtitlesLang");

        if (!openedMenu || !select) {
          return;
        }

        const VIDEO_ID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)(siteHostname);

        if (!VIDEO_ID) {
          console.error(
            `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.getDefault("VOTNoVideoIDFound")}`
          );
          subtitlesList = [];
          subtitlesListVideoId = null;
          await updateSubtitlesLangSelect();
          return;
        }

        if (subtitlesListVideoId === VIDEO_ID) {
          return;
        }

        if (!videoData.detectedLanguage) {
          videoData = await getVideoData();
          await setSelectMenuValues(
            videoData.detectedLanguage,
            videoData.responseLanguage
          );
        }

        subtitlesList = await (0,_subtitles_js__WEBPACK_IMPORTED_MODULE_13__/* .getSubtitles */ .MF)(
          siteHostname,
          VIDEO_ID,
          videoData.detectedLanguage
        );
        if (!subtitlesList) {
          await changeSubtitlesLang("disabled");
        } else {
          subtitlesListVideoId = VIDEO_ID;
        }
        await updateSubtitlesLangSelect();
      });
  }

  async function initWebsite() {
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("Runned initWebsite function");
    if (_config_regexes_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.youtubeRegex.test(window.location.hostname)) {
      if (window.location.pathname.includes("embed")) {
        const videoContainer = document.querySelector(".html5-video-container");
        await translateProccessor(videoContainer, "youtube", null);
        return;
      }

      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[initWebsite] Found a match with youtube hostname");
      const ytPageEnter = () => {
        const videoContainer = document.querySelector(
          _config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.youtubeSelector
        );
        if (videoContainer) {
          _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[exec] translateProccessor youtube on page enter");
          translateProccessor(videoContainer, "youtube", "yt-translate-stop");
        } else {
          if (!ytplayer || !ytplayer.config) {
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[exec] ytplayer is null");
            return;
          }
          ytplayer.config.args.jsapicallback = () => {
            _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log(
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
        let ytmobile = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)("#player");
        if (ytmobile) {
          await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(2300);
          await translateProccessor(ytmobile, "youtube", "yt-translate-stop");

          const mutationObserver = new MutationObserver(async (mutations) => {
            for (const mutation of mutations) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src"
              ) {
                ytmobile = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)("#player");
                await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(2300);
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
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[initWebsite] Found a match with twitch.tv");
      if (
        window.location.hostname.includes("m.twitch.tv") &&
        (window.location.pathname.includes("/videos/") ||
          window.location.pathname.includes("/clip/"))
      ) {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[initWebsite] Matched Twitch Mobile");
        const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.twitchMobileSelector);
        if (el) {
          await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(200);
          const twitchMobileSelector = document.querySelector(
            _config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.twitchMobileSelector
          );
          await translateProccessor(twitchMobileSelector, "twitch", null);

          const mutationObserver = new MutationObserver(async (mutations) => {
            for (const mutation of mutations) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src" &&
                mutation.target === twitchMobileSelector?.querySelector("video")
              ) {
                await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(1000);
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
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[initWebsite] Matched Twitch Desktop");
        const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.twitchSelector);
        if (el) {
          await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(200);
          await translateProccessor(el, "twitch", null);
        }
      }
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[initWebsite] Exit function in the twitch section");
      return;
    }
    if (window.location.hostname.includes("xvideos.com")) {
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[entered] xvideos");
      await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(1000);
      await translateProccessor(
        document.querySelector(".video-bg-pic"),
        "xvideos",
        null
      );
      return;
    }
    if (window.location.hostname.includes("pornhub.com")) {
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[entered] pornhub");
      await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(1000);
      await translateProccessor(
        document.querySelector(".mgp_videoWrapper"),
        "pornhub",
        null
      );
      return;
    }
    if (_config_alternativeUrls_js__WEBPACK_IMPORTED_MODULE_16__/* .sitesInvidious */ .aL.includes(window.location.hostname)) {
      // Need an additional extension to work in chrome-like browsers
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[entered] invidious");
      await translateProccessor(
        document.querySelector("#player"),
        "youtube",
        null
      );
    } else if (_config_alternativeUrls_js__WEBPACK_IMPORTED_MODULE_16__/* .sitesPiped */ .Um.includes(window.location.hostname)) {
      // Need an additional extension to work in chrome-like browsers
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[entered] piped");
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.pipedSelector);
      if (el) {
        let videoIDNew;
        let videoID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("youtube");
        await translateProccessor(el, "youtube", "piped");
        setInterval(async () => {
          videoIDNew = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("youtube");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.pipedSelector),
                "youtube",
                "piped"
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (/^(www.|m.)?vk.(com|ru)$/.test(window.location.hostname)) {
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[entered] vk.com");
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.vkSelector);
      if (el) {
        await translateProccessor(
          document.querySelector(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.vkSelector),
          "vk",
          null
        );
        let videoIDVKNew;
        let videoIDVK = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("vk");
        setInterval(async () => {
          videoIDVKNew = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("vk");
          if (videoIDVK !== videoIDVKNew) {
            if (videoIDVKNew) {
              const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.vkSelector);
              if (el) {
                await translateProccessor(el, "vk", null);
              }
            }
            videoIDVK = videoIDVKNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("vimeo.com")) {
      _utils_debug_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.log("[entered] vimeo.com");
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.vimeoSelector);
      if (el) {
        await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(1000);
        await translateProccessor(
          document.querySelector(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.vimeoSelector),
          "vimeo",
          null
        );
      }
    } else if (window.location.hostname.includes("9gag.com")) {
      await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(1000);
      await translateProccessor(
        document.querySelector(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.gagSelector),
        "9gag",
        null
      );
    } else if (window.location.hostname.includes("coub.com")) {
      await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(1000);
      await translateProccessor(
        document.querySelector(".viewer__player"),
        "coub",
        null
      );
    } else if (window.location.hostname.includes("bitchute.com")) {
      await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .sleep */ ._v)(1000);
      await translateProccessor(
        document.querySelector(".plyr__video-wrapper"),
        "bitchute",
        null
      );
    } else if (window.location.hostname.includes("rutube.ru")) {
      const elementSelector = window.location.pathname.includes("/play/embed")
        ? "#app > div > div"
        : ".video-player > div > div > div:nth-child(2)";

      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(elementSelector);
      if (el) {
        await translateProccessor(el, "rutube", null);
      }
    } else if (window.location.hostname.includes("bilibili.com")) {
      if (window.location.pathname.includes("/video/") || window.location.hostname.includes("player.bilibili.com")) {
        const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.bilibilicomSelector);
        if (el) {
          await translateProccessor(el, "bilibili.com", null);
        }
      } else if (
        window.location.pathname.includes(
          "/blackboard/webplayer/embed-old.html"
        )
      ) {
        const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)("video");
        if (el) {
          await translateProccessor(el.parentElement, "bilibili.com", null);
        }
      }
    } else if (window.location.hostname.includes("twitter.com")) {
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.twitterSelector);
      if (el) {
        let videoIDNew;
        let videoID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("twitter");
        await translateProccessor(el, "twitter", null);
        setInterval(async () => {
          videoIDNew = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("twitter");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.twitterSelector),
                "twitter",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("my.mail.ru")) {
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.mailSelector);
      if (el) {
        let videoIDNew;
        let videoID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("mail.ru");
        await translateProccessor(el, "mail.ru", null);
        setInterval(async () => {
          videoIDNew = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("mail.ru");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.mailSelector),
                "mail.ru",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("coursera.org")) {
      // ONLY IF YOU LOGINED TO COURSERA /learn/NAME/lecture/XXXX
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.courseraSelector);
      if (el) {
        let videoIDNew;
        let videoID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("coursera");
        await translateProccessor(el, "coursera", null);
        setInterval(async () => {
          videoIDNew = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("coursera");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.courseraSelector),
                "coursera",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("udemy.com")) {
      // ONLY IF YOU LOGINED TO UDEMY /course/NAME/learn/lecture/XXXX
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.udemySelector);
      if (el) {
        let videoIDNew;
        let videoID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("udemy");
        await translateProccessor(el, "udemy", null);
        setInterval(async () => {
          videoIDNew = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("udemy");
          if (videoID !== videoIDNew) {
            const newEl = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.udemySelector);
            if (videoIDNew && newEl) {
              await translateProccessor(newEl, "udemy", null);
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("tiktok.com")) {
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.tiktokSelector);
      if (el) {
        let videoIDNew;
        let videoID = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("tiktok");
        await translateProccessor(el.parentElement, "tiktok", null);
        setInterval(async () => {
          videoIDNew = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVideoId */ .gJ)("tiktok");
          if (videoID !== videoIDNew) {
            const newEl = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.tiktokSelector);
            if (videoIDNew && newEl) {
              await translateProccessor(newEl.parentElement, "tiktok", null);
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (_config_alternativeUrls_js__WEBPACK_IMPORTED_MODULE_16__/* .sitesProxyTok */ .kr.includes(window.location.hostname)) {
      const el = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .waitForElm */ .Nc)(_config_selectors_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.proxyTokSelector);
      if (el) {
        await translateProccessor(el, "tiktok", null);
      }
    }
  }

  await initWebsite();
}

try {
  await Promise.allSettled([_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .localizationProvider */ .V.update(), main()]);
} catch (e) {
  console.error("[VOT]", e);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/indexedDB.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CZ: () => (/* binding */ readDB),
/* harmony export */   Lj: () => (/* binding */ deleteDB),
/* harmony export */   l6: () => (/* binding */ updateDB),
/* harmony export */   zK: () => (/* binding */ initDB)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/menu.js");
/* harmony import */ var _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/localization/localizationProvider.js");



// --- IndexedDB functions start:
const dbVersion = 4; // current db version
const dbData = [
  {
    key: "settings",
    autoTranslate: 0,
    defaultVolume: 100,
    showVideoSlider: 0,
    syncVolume: 0,
    autoSetVolumeYandexStyle: 1,
    dontTranslateYourLang: 1,
  },
  {
    audioProxy: 0,
  },
  {
    subtitlesMaxLength: 300,
    highlightWords: 0,
    responseLanguage: _menu_js__WEBPACK_IMPORTED_MODULE_0__/* .lang */ .KQ,
  },
  {
    udemyData: {
      accessToken: "",
      expires: 0,
    },
  },
];

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
      objectStore.transaction.oncomplete = () => {
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
            request.result || Object.assign(dbData[0], previousIndexes); // use data from db or reset all data
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
        `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.getDefault("VOTFailedInitDB")}: ${
          openRequest.error.message
        }`
      );
      reject(false);
    };

    openRequest.onupgradeneeded = (event) => {
      const db = openRequest.result;

      db.onerror = () => {
        console.error(
          `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.getDefault("VOTFailedInitDB")}`,
          openRequest.error
        );
        alert(`[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.get("VOTFailedInitDB")}`);
        reject(false);
      };

      if (event.oldVersion < 1) {
        const data = Object.assign(
          {},
          ...dbData.filter(
            (e, i) => i > event.oldVersion - 1 && i <= event.newVersion - 1
          )
        );

        // db not found
        const objectStore = db.createObjectStore("settings", {
          keyPath: "key",
        });

        // add indexes (without key index)
        for (const key of Object.keys(data).filter((k) => k !== "key")) {
          objectStore.createIndex(key, key, { unique: false });
        }

        console.log("[VOT] Database Created");

        objectStore.transaction.oncomplete = () => {
          const objectStore = db
            .transaction("settings", "readwrite")
            .objectStore("settings");
          const request = objectStore.add(data);

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
        return;
      }

      updateVersionProccessor(
        openRequest.transaction,
        db,
        Object.assign(
          {},
          ...dbData.filter(
            (e, i) => i > event.oldVersion - 1 && i <= event.newVersion - 1
          )
        )
      );
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        console.log(
          `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.getDefault("VOTDBNeedUpdate")}`
        );
        alert(`[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.get("VOTDBNeedUpdate")}`);
        window.location.reload();
        reject(false);
      };
      resolve(true);
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      console.error(
        `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V
          .getDefault("VOTDisabledForDBUpdating")
          .format(window.location.hostname)}`,
        db
      );
      alert(
        `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V
          .get("VOTDisabledForDBUpdating")
          .format(window.location.hostname)}`
      );
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
  responseLanguage,
  udemyData,
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
      typeof highlightWords === "number" ||
      typeof responseLanguage === "string" ||
      typeof udemyData === "object"
    ) {
      const openRequest = openDB("VOT");

      openRequest.onerror = () => {
        console.error(
          `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.getDefault("VOTFailedWriteToDB")}`,
          openRequest.error.message
        );
        alert(`[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.get("VOTFailedWriteToDB")}`);
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

          if (typeof responseLanguage === "string") {
            data.responseLanguage = responseLanguage;
          }

          if (typeof udemyData === "object") {
            data.udemyData = udemyData;
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error("[VOT] failed update db data: ", event.error);
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            resolve(true);
          };
        };
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        console.error(
          `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V
            .getDefault("VOTDisabledForDBUpdating")
            .format(window.location.hostname)}`,
          db
        );
        alert(
          `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V
            .get("VOTDisabledForDBUpdating")
            .format(window.location.hostname)}`
        );
        reject(false);
      };
    }
  });
}

async function readDB() {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(
        `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.getDefault("VOTFailedReadFromDB")}`,
        openRequest.error.message
      );
      alert(`[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.get("VOTFailedReadFromDB")}`);
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
        console.error(
          `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.getDefault("VOTDBNeedUpdate")}`
        );
        alert(`[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.get("VOTDBNeedUpdate")}`);
        reject(false);
      };

      const objectStore = db.transaction("settings").objectStore("settings");
      const request = objectStore.get("settings");

      request.onerror = (event) => {
        console.error(
          "[VOT]",
          _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V.getDefault("VOTFailedReadFromDB"),
          event.error
        );
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
      console.error(
        `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V
          .getDefault("VOTDisabledForDBUpdating")
          .format(window.location.hostname)}`,
        db
      );
      alert(
        `[VOT] ${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_1__/* .localizationProvider */ .V
          .get("VOTDisabledForDBUpdating")
          .format(window.location.hostname)}`
      );
      reject(false);
    };
  });
}

function deleteDB() {
  indexedDB.deleteDatabase("VOT");
}




/***/ }),

/***/ "./src/localization/localizationProvider.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ localizationProvider)
});

;// CONCATENATED MODULE: ./src/localization/locales/en.json
const en_namespaceObject = JSON.parse('{"recommended":"recommended","translateVideo":"Translate video","disableTranslate":"Turn off","translationSettings":"Translation settings","resetSettings":"Reset settings","videoBeingTranslated":"The video is being translated","videoLanguage":"Video language","translationLanguage":"Translation language","translationTake":"The translation will take","translationTakeMoreThanHour":"The translation will take more than an hour","translationTakeAboutMinute":"The translation will take about a minute","translationTakeFewMinutes":"The translation will take a few minutes","translationTakeApproximatelyMinutes":"The translation will take approximately {0} minutes","translationTakeApproximatelyMinute":"The translation will take approximately {0} minutes","unSupportedExtensionError":"Error! {0} is not supported by this version of the extension!\\n\\nPlease use the cloudflare version of the VOT extension.","requestTranslationFailed":"Failed to request video translation","audioNotReceived":"Audio link not received","grantPermissionToAutoPlay":"Grant permission to autoplay","neededAdditionalExtension":"An additional extension is needed to support this site","audioFormatNotSupported":"The audio format is not supported","VOTAutoTranslate":"Translate on open","VOTDontTranslateYourLang":"Do not translate from my language","VOTVolume":"Video volume","VOTVolumeTranslation":"Translation Volume","VOTAutoSetVolume":"Reduce video volume to ","VOTShowVideoSlider":"Video volume slider","VOTSyncVolume":"Link translation and video volume","VOTAudioProxy":"Proxy received audio","VOTDisableFromYourLang":"You have disabled the translation of the video in your language","VOTLiveNotSupported":"Translation of live streams is not supported","VOTPremiere":"Wait for the premiere to end before translating","VOTVideoIsTooLong":"Video is too long","VOTNoVideoIDFound":"No video ID found","VOTFailedInitDB":"Failed to initialize database","VOTDBNeedUpdate":"The database needs an update, please reload the page","VOTDisabledForDBUpdating":"VOT is disabled due to an error when updating the Database. Close all open tabs with {0} and try again","VOTFailedWriteToDB":"Data could not be written to the database","VOTFailedReadFromDB":"Data could not be retrieved from the database","VOTSubtitles":"Subtitles","VOTSubtitlesDisabled":"Disabled","VOTSubtitlesMaxLength":"Subtitles max length","VOTHighlightWords":"Highlight words","VOTTranslatedFrom":"translated from","VOTAutogenerated":"autogenerated","langs":{"af":"Afrikaans","ak":"Akan","sq":"Albanian","am":"Amharic","ar":"Arabic","hy":"Armenian","as":"Assamese","ay":"Aymara","az":"Azerbaijani","bn":"Bangla","eu":"Basque","be":"Belarusian","bho":"Bhojpuri","bs":"Bosnian","bg":"Bulgarian","my":"Burmese","ca":"Catalan","ceb":"Cebuano","zh":"Chinese","zh-Hans":"Chinese (Simplified)","zh-Hant":"Chinese (Traditional)","co":"Corsican","hr":"Croatian","cs":"Czech","da":"Danish","dv":"Divehi","nl":"Dutch","en":"English","eo":"Esperanto","et":"Estonian","ee":"Ewe","fil":"Filipino","fi":"Finnish","fr":"French","gl":"Galician","lg":"Ganda","ka":"Georgian","de":"German","el":"Greek","gn":"Guarani","gu":"Gujarati","ht":"Haitian Creole","ha":"Hausa","haw":"Hawaiian","iw":"Hebrew","hi":"Hindi","hmn":"Hmong","hu":"Hungarian","is":"Icelandic","ig":"Igbo","id":"Indonesian","ga":"Irish","it":"Italian","ja":"Japanese","jv":"Javanese","kn":"Kannada","kk":"Kazakh","km":"Khmer","rw":"Kinyarwanda","ko":"Korean","kri":"Krio","ku":"Kurdish","ky":"Kyrgyz","lo":"Lao","la":"Latin","lv":"Latvian","ln":"Lingala","lt":"Lithuanian","lb":"Luxembourgish","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Māori","mr":"Marathi","mn":"Mongolian","ne":"Nepali","nso":"Northern Sotho","no":"Norwegian","ny":"Nyanja","or":"Odia","om":"Oromo","ps":"Pashto","fa":"Persian","pl":"Polish","pt":"Portuguese","pa":"Punjabi","qu":"Quechua","ro":"Romanian","ru":"Russian","sm":"Samoan","sa":"Sanskrit","gd":"Scottish Gaelic","sr":"Serbian","sn":"Shona","sd":"Sindhi","si":"Sinhala","sk":"Slovak","sl":"Slovenian","so":"Somali","st":"Southern Sotho","es":"Spanish","su":"Sundanese","sw":"Swahili","sv":"Swedish","tg":"Tajik","ta":"Tamil","tt":"Tatar","te":"Telugu","th":"Thai","ti":"Tigrinya","ts":"Tsonga","tr":"Turkish","tk":"Turkmen","uk":"Ukrainian","ur":"Urdu","ug":"Uyghur","uz":"Uzbek","vi":"Vietnamese","cy":"Welsh","fy":"Western Frisian","xh":"Xhosa","yi":"Yiddish","yo":"Yoruba","zu":"Zulu"},"udemyAccessTokenExpired":"Your entered Udemy Access Token has expired","udemyModuleArgsNotFound":"Could not get udemy module data due to the fact that ModuleArgs was not found","VOTTranslationHelpNull":"Could not get the data required for the translate","enterUdemyAccessToken":"Enter Udemy Access Token","VOTUdemyData":"Udemy Data"}');
// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/localization/localizationProvider.js



const localesVersion = 1;
const localesUrl =
  "https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/src/localization/locales";

const localizationProvider = new (class {
  lang =
    (navigator.language || navigator.userLanguage)
      ?.substr(0, 2)
      ?.toLowerCase() ?? "en";
  locale = {};

  constructor() {
    this.setLocaleFromJsonString(window.localStorage.getItem("vot-locale"));
  }

  async update(force = false) {
    if (
      !force &&
      Number(window.localStorage.getItem("vot-locale-version")) ===
        localesVersion &&
      window.localStorage.getItem("vot-locale-lang") === this.lang
    ) {
      return;
    }

    debug/* default */.Z.log("Updating locale...");

    await fetch(`${localesUrl}/${this.lang}.json`)
      .then((response) => {
        if (response.status === 200) return response.text();
        throw response.status;
      })
      .then((text) => {
        window.localStorage.setItem("vot-locale", text);
        this.setLocaleFromJsonString(text);
        window.localStorage.setItem("vot-locale-version", localesVersion);
        window.localStorage.setItem("vot-locale-lang", this.lang);
      })
      .catch((error) => {
        console.error(
          "[VOT] [localizationProvider] failed get locale, cause:",
          error
        );
        this.setLocaleFromJsonString(window.localStorage.getItem("vot-locale"));
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
        key
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


/***/ }),

/***/ "./src/menu.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ef: () => (/* binding */ genOptionsByOBJ),
/* harmony export */   H0: () => (/* binding */ createMenuCheckbox),
/* harmony export */   KQ: () => (/* binding */ lang),
/* harmony export */   Mr: () => (/* binding */ createMenuSelect),
/* harmony export */   NX: () => (/* binding */ createTranslationMenu),
/* harmony export */   Ot: () => (/* binding */ addTranslationBlock),
/* harmony export */   iT: () => (/* binding */ createMenuSlider),
/* harmony export */   uJ: () => (/* binding */ transformBtn)
/* harmony export */ });
/* harmony import */ var _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/localization/localizationProvider.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/debug.js");



const userlang = navigator.language || navigator.userLanguage;
let lang = userlang?.substr(0, 2)?.toLowerCase() ?? "en";

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
      <span class = "translationBtn" tabindex = "0">${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V.get(
        "translateVideo"
      )}</span>
    </span>
    <span class = "translationMenu" tabindex = "0" role = "button">
      <svg class = "translationMenuIcon" height="15" width="5" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
      </svg>
    </span>
  `;

  element.appendChild(block);
  _utils_debug_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.log("Added translation button to ", element);
}

function createTranslationMenu() {
  const container = document.createElement("div");
  container.classList.add("translationMenuContent");
  container.innerHTML = `
    <p class = "translationMainHeader">${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V.get(
      "translationSettings"
    )}</p>
    <div class="translationMenuOptions"></div>
    <div class="translationMenuFunctional">
      <a class = "translationDownload">
        <svg width="24px" height="24px" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
      </a>
      <button class = "translationDropDB">${_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V.get(
        "resetSettings"
      )}</button>
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
  console.log(obj);
  const test = obj.map((code) => ({
    label: _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V.get(`langs`)[code] ?? code.toUpperCase(),
    value: code,
    selected: conditionString === code,
  }));
  console.log(test);
  return test;
}




/***/ }),

/***/ "./src/rvt.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getUUID_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/getUUID.js");
/* harmony import */ var _getSignature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/getSignature.js");
/* harmony import */ var _yandexProtobuf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/yandexProtobuf.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/debug.js");





// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  duration,
  requestLang,
  responseLang,
  translationHelp,
  callback
) {
  try {
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.log("requestVideoTranslation");
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest-cloudflare.js"));
    const yandexRequest = yar.default;
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.log("Inited yandexRequest...");
    // Initialize variables
    const body = _yandexProtobuf_js__WEBPACK_IMPORTED_MODULE_0__/* .yandexProtobuf */ .X.encodeTranslationRequest(
      url,
      duration,
      requestLang,
      responseLang,
      translationHelp
    );
    // Send the request
    await yandexRequest(
      // "/stream-translation/whitelist-stream",
      // "/stream-translation/translate-stream",
      "/video-translation/translate",
      body,
      {
        "Vtrans-Signature": await (0,_getSignature_js__WEBPACK_IMPORTED_MODULE_2__/* .getSignature */ .o)(body),
        "Sec-Vtrans-Token": (0,_getUUID_js__WEBPACK_IMPORTED_MODULE_3__/* .getUUID */ .F)(false),
      },
      callback
    );
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestVideoTranslation);


/***/ }),

/***/ "./src/subtitles.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e7: () => (/* binding */ addSubtitlesWidget),
  Hl: () => (/* binding */ fetchSubtitles),
  MF: () => (/* binding */ getSubtitles),
  b6: () => (/* binding */ setSubtitlesHighlightWords),
  Lg: () => (/* binding */ setSubtitlesMaxLength),
  Bv: () => (/* binding */ setSubtitlesWidgetContent)
});

// EXTERNAL MODULE: ./src/utils/youtubeUtils.js
var youtubeUtils = __webpack_require__("./src/utils/youtubeUtils.js");
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__("./src/utils/utils.js");
// EXTERNAL MODULE: ./src/yandexProtobuf.js
var yandexProtobuf = __webpack_require__("./src/yandexProtobuf.js");
// EXTERNAL MODULE: ./src/config/constants.js
var constants = __webpack_require__("./src/config/constants.js");
// EXTERNAL MODULE: ./src/menu.js
var menu = __webpack_require__("./src/menu.js");
// EXTERNAL MODULE: ./src/getUUID.js
var getUUID = __webpack_require__("./src/getUUID.js");
// EXTERNAL MODULE: ./src/getSignature.js
var getSignature = __webpack_require__("./src/getSignature.js");
// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/rvs.js





// Request video subtitles from Yandex API
async function requestVideoSubtitles(url, requestLang, callback) {
  try {
    debug/* default */.Z.log("requestVideoSubtitles");
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest-cloudflare.js"));
    const yandexRequest = yar.default;
    debug/* default */.Z.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf/* yandexProtobuf */.X.encodeSubtitlesRequest(url, requestLang);
    // Send the request
    await yandexRequest(
      "/video-subtitles/get-subtitles",
      body,
      {
        "Vsubs-Signature": await (0,getSignature/* getSignature */.o)(body),
        "Sec-Vsubs-Token": (0,getUUID/* getUUID */.F)(false),
      },
      callback
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
    result.push(
      Object.assign(Object.assign({}, token), {
        alignRange: {
          start: alignRangeEnd,
          end: newAlignRangeEnd,
        },
      })
    );
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
  const tokens = line.text
    .split(new RegExp("([\n \t])"))
    .reduce((result, tokenText) => {
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
    return Object.assign(Object.assign({}, token), {
      startMs,
      durationMs,
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
    result.push(
      Object.assign(Object.assign({}, line), {
        tokens,
      })
    );
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
    new Promise(async (resolve) => {
      await (0,utils/* sleep */._v)(5000);
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

async function getSubtitles(siteHostname, videoId, requestLang) {
  const ytSubtitles =
    siteHostname === "youtube" ? youtubeUtils/* youtubeUtils */.K.getSubtitles() : [];
  let resolved = false;
  const yaSubtitles = await Promise.race([
    new Promise(async (resolve) => {
      await (0,utils/* sleep */._v)(5000);
      if (!resolved) {
        console.error("[VOT] Failed get yandex subtitles. Reason: timeout");
      }
      resolved = true;
      resolve([]);
    }),
    new Promise((resolve) => {
      rvs(
        `${constants/* siteTranslates */.g$[siteHostname]}${videoId}`,
        requestLang,
        (success, response) => {
          debug/* default */.Z.log("[exec callback] Requesting video subtitles");

          if (!success) {
            console.error("[VOT] Failed get yandex subtitles");
            resolved = true;
            resolve([]);
          }

          const subtitlesResponse =
            yandexProtobuf/* yandexProtobuf */.X.decodeSubtitlesResponse(response);
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
    }),
  ]);
  const subtitles = [...yaSubtitles, ...ytSubtitles].sort((a, b) => {
    if (a.source !== b.source) {
      // sort by source
      return a.source === "yandex" ? -1 : 1;
    }
    if (
      a.language !== b.language &&
      (a.language === menu/* lang */.KQ || b.language === menu/* lang */.KQ)
    ) {
      // sort by user language
      return a.language === menu/* lang */.KQ ? -1 : 1;
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
          container.style.top = `${
            elementRect.height - containerRect.height
          }px`;
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

  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);
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
  let highlightWords = _highlightWords && _subtitles?.containsTokens;
  const time = video.currentTime * 1000;
  const line = _subtitles?.subtitles?.findLast((e) => {
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
        for (let i = 0; i < chunks.length; i++) {
          if (
            chunks[i].startMs < time &&
            time < chunks[i].startMs + chunks[i].durationMs
          ) {
            tokens = chunks[i].tokens;
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
    } else {
      if (line.text.length > _maxLength) {
        let chunks = line.text.match(_maxLengthRegexp);
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
  }
  if (content !== _lastContent) {
    _lastContent = content;
    _subtitlesWidget.innerHTML = content
      ? `<div>${content.replace("\\n", "<br>")}</div>`
      : "";
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


/***/ }),

/***/ "./src/utils/VOTLocalizedError.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ VOTLocalizedError)
/* harmony export */ });
/* harmony import */ var _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/localization/localizationProvider.js");


class VOTLocalizedError extends Error {
  constructor(message) {
    super(_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V.getDefault(message));
    this.name = "VOTLocalizedError";
    this.unlocalizedMessage = message;
    this.localizedMessage = _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V.get(message);
  }
}


/***/ }),

/***/ "./src/utils/courseraUtils.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ courseraUtils)
/* harmony export */ });
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/debug.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/config/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/utils.js");




async function getCourseData(courseId) {
  const response = await fetch(
    `https://www.coursera.org/api/onDemandCourses.v1/${courseId}`
  );
  const resJSON = await response.json();
  return resJSON?.elements?.[0];
}

function getSubtitlesFileURL(responseLang, tracks) {
  const subtitle = tracks.find(
    (caption) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .langTo6391 */ .eL)(caption.srclang) === responseLang
  );
  return subtitle?.src;
}

function getVideoFileURL(sources) {
  const source = sources.find((src) => src.type === "video/mp4");
  return source?.src;
}

function getPlayerData() {
  return getPlayer()?.player;
}

function getPlayer() {
  return document.querySelector("#video_player");
}

// Get the video data from the player
async function getVideoData(responseLang = "en") {
  let translationHelp = null;
  const data = getPlayerData();

  const { duration } = data?.cache_ || {};
  const { courseId, tracks, sources } = data?.options_ || {};

  const videoURL = getVideoFileURL(sources);
  const courseData = await getCourseData(courseId);

  let detectedLanguage = courseData?.primaryLanguageCodes?.[0];
  detectedLanguage = detectedLanguage ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .langTo6391 */ .eL)(detectedLanguage) : "en";

  if (!_config_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .availableLangs */ .tW.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }

  const subtitlesURL = getSubtitlesFileURL(responseLang, tracks);
  if (subtitlesURL) {
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
  }

  const videoData = {
    duration,
    detectedLanguage,
    translationHelp,
  };

  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("coursera video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

const courseraUtils = {
  getPlayer,
  getPlayerData,
  getVideoData,
};


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

/***/ "./src/utils/udemyUtils.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ udemyUtils)
/* harmony export */ });
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/debug.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/config/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/utils.js");
/* harmony import */ var _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/localization/localizationProvider.js");





const udemyAPIURL = "https://www.udemy.com/api-2.0";
const accessTokenLife = 2_592_000; // 30 days

async function getCourseLang(courseId) {
  const response = await fetch(
    `${udemyAPIURL}/courses/${courseId}/?` +
      new URLSearchParams({
        "fields[course]": "locale",
        use_remote_version: "true",
        caching_intent: "true",
      })
  );
  return await response.json();
}

function checkUdemyTokenExpire(expires) {
  return expires + accessTokenLife > new Date().getTime();
}

async function getLectureData(udemyData, courseId, lectureId) {
  // reference: https://greasyfork.org/ru/scripts/422576-udemy-subtitle-downloader-v3/code
  if (!checkUdemyTokenExpire(udemyData.expires) || !udemyData.accessToken) {
    console.error(_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_3__/* .localizationProvider */ .V.get("udemyAccessTokenExpired"));
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
    }
  );
  return await response.json();
}

function getSubtitlesFileURL(captions, responseLang) {
  const subtitle = captions?.find(
    (caption) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .langTo6391 */ .eL)(caption.locale_id) === responseLang
  );
  return subtitle?.url;
}

function getVideoFileURL(sources) {
  const source = sources?.find((src) => src.type === "video/mp4");
  return source?.src;
}

function getPlayerData() {
  return getPlayer()?.player;
}

function getModuleData() {
  const moduleArgs = document.querySelector(
    ".ud-app-loader[data-module-id='course-taking']"
  )?.dataset?.moduleArgs;
  if (!moduleArgs) {
    console.error(_localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_3__/* .localizationProvider */ .V.get("udemyModuleArgsNotFound"));
    return {};
  }
  return JSON.parse(moduleArgs);
}

function getLectureId() {
  return window.location.pathname.match(/learn\/lecture\/([^/]+)/)?.[1];
}

function getPlayer() {
  return document.querySelector(".vjs-v7");
}

// Get the video data from the player
async function getVideoData(udemyData, responseLang = "en") {
  let translationHelp = null;
  const data = getPlayerData();
  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("udemyData", udemyData);

  const moduleData = getModuleData();
  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("moduleData: ", moduleData);

  const courseId = moduleData.courseId;
  const lectureId = getLectureId();
  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log(`CourseId: ${courseId}, lectureId: ${lectureId}`);

  const courseLang = await getCourseLang(courseId);
  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("courseLang Data:", courseLang);
  const lectureData = await getLectureData(udemyData, courseId, lectureId);
  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("lecture Data:", lectureData);

  let detectedLanguage = courseLang?.locale?.locale;
  detectedLanguage = detectedLanguage ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .langTo6391 */ .eL)(detectedLanguage) : "en";

  if (!_config_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .availableLangs */ .tW.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }

  const duration = lectureData?.asset?.length || data?.cache_?.duration;
  const videoURL = getVideoFileURL(lectureData?.asset?.media_sources);
  const subtitlesURL = getSubtitlesFileURL(
    lectureData?.asset?.captions,
    responseLang
  );
  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log(`videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`);

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
  }

  const videoData = {
    duration,
    detectedLanguage,
    translationHelp,
  };

  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("udemy video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

const udemyUtils = {
  getPlayer,
  getPlayerData,
  getVideoData,
  getModuleData,
  getCourseLang,
  getLectureData,
};


/***/ }),

/***/ "./src/utils/utils.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nc: () => (/* binding */ waitForElm),
/* harmony export */   PG: () => (/* binding */ secsToStrTime),
/* harmony export */   WT: () => (/* binding */ detectLang),
/* harmony export */   _v: () => (/* binding */ sleep),
/* harmony export */   eL: () => (/* binding */ langTo6391),
/* harmony export */   gJ: () => (/* binding */ getVideoId)
/* harmony export */ });
/* harmony import */ var _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/localization/localizationProvider.js");


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
      // return url.pathname.match(/video\/([^/]+)/)?.[1];
      return url.pathname.match(/([^/]+)\/video\/([^/]+)/)?.[0];
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
      // ...watch?v=XXX
      // CHANNEL_ID/videos/VIDEO_ID/
      // returning "Видео недоступно для перевода"

      // fb.watch/YYY
      // returning "Возникла ошибка, попробуйте позже"
      if (url.searchParams.get("v")) {
        return url.searchParams.get("v");
      }

      return false;
    case "rutube":
      return url.pathname.match(/(?:video|embed)\/([^/]+)/)?.[1];
    case "coub":
      return url.pathname.match(/view\/([^/]+)/)?.[1];
    case "bilibili.com": {
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
      return false;
    case "bitchute":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    case "coursera":
      // ! LINK SHOULD BE LIKE THIS https://www.coursera.org/learn/learning-how-to-learn/lecture/75EsZ
      // return url.pathname.match(/lecture\/([^/]+)\/([^/]+)/)?.[1]; // <--- COURSE PREVIEW
      return url.pathname.match(/learn\/([^/]+)\/lecture\/([^/]+)/)?.[0]; // <--- COURSE PASSING (IF YOU LOGINED TO COURSERA)
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  if (minutes >= 60) {
    return _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V.get("translationTakeMoreThanHour");
  } else if (minutes >= 10 && minutes % 10) {
    return _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V
      .get("translationTakeApproximatelyMinutes")
      .format(minutes);
  } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
    return _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V.get("translationTakeAboutMinute");
  } else {
    return _localization_localizationProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .localizationProvider */ .V
      .get("translationTakeApproximatelyMinute")
      .format(minutes);
  }
}

function langTo6391(lang) {
  // convert lang to ISO 639-1
  return lang.toLowerCase().split(";")[0].trim().split("-")[0].split("_")[0];
}

async function detectLang(cleanText) {
  const response = await fetch("https://rust-server-531j.onrender.com/detect", {
    method: "POST",
    body: cleanText,
  });
  return await response.text();
}




/***/ }),

/***/ "./src/utils/volume.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ syncVolume)
/* harmony export */ });
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




/***/ }),

/***/ "./src/utils/youtubeUtils.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ youtubeUtils)
/* harmony export */ });
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/debug.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/config/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/utils.js");




// Get the language code from the response or the text
async function getLanguage(player, response, title, description, author) {
  if (!window.location.hostname.includes("m.youtube.com")) {
    // ! Experimental ! get lang from selected audio track if availabled
    const audioTracks = player.getAudioTrack();
    const trackInfo = audioTracks?.getLanguageInfo(); // get selected track info (id === "und" if tracks are not available)
    if (trackInfo?.id !== "und") {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .langTo6391 */ .eL)(trackInfo.id.split(".")[0]);
    }
  }

  // TODO: If the audio tracks will work fine, transfer the receipt of captions to the audioTracks variable
  // Check if there is an automatic caption track in the response
  const captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find((caption) => caption.kind === "asr");
    if (autoCaption && autoCaption.languageCode) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .langTo6391 */ .eL)(autoCaption.languageCode);
    }
  }
  // If there is no caption track, use detect to get the language code from the text
  const text = [description, title, author].join(" ");
  // Remove anything that is not a letter or a space in any language
  const cleanText = text
  .split('\n')
  .filter(line => !line.match(/https?:\/\/\S+/))
  .join('\n')
  .replace(/#\S+/g, "")
  .replace(/[^\p{L}\s]/gu, "")
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 250);
  return await (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .detectLang */ .WT)(cleanText);
}

function isMobile() {
  return /^m\.youtube\.com$/.test(window.location.hostname);
}

function getPlayer() {
  return isMobile()
    ? document.querySelector("#app")
    : document.querySelector("#movie_player");
}

function getPlayerResponse() {
  const player = getPlayer();
  if (isMobile()) return player?.data?.playerResponse ?? null;
  return player?.getPlayerResponse?.call() ?? null;
}

function getPlayerData() {
  const player = getPlayer();
  if (isMobile()) return player?.data?.playerResponse?.videoDetails ?? null;
  return player?.getVideoData?.call() ?? null;
}

function getVideoVolume() {
  return document.querySelector(".html5-video-player")?.getVolume() / 100;
}

function setVideoVolume(volume) {
  return document
    .querySelector(".html5-video-player")
    ?.setVolume(Math.round(volume * 100));
}

function getSubtitles() {
  const response = getPlayerResponse();
  let captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks ?? [];
  captionTracks = captionTracks.reduce((result, captionTrack) => {
    if ("languageCode" in captionTrack) {
      const language = captionTrack?.languageCode
        ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .langTo6391 */ .eL)(captionTrack?.languageCode)
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
  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("youtube subtitles:", captionTracks);
  return captionTracks;
}

// Get the video data from the player
async function getVideoData() {
  const player = getPlayer();
  const response = getPlayerResponse(); // null in /embed
  const data = getPlayerData();
  const { author, title } = data ?? {};
  const {
    shortDescription: description,
    isLive,
    isLiveContent,
    isUpcoming,
  } = response?.videoDetails ?? {};
  const isPremiere = (!!isLive || !!isUpcoming) && !isLiveContent;
  let detectedLanguage = await getLanguage(
    player,
    response,
    title,
    description,
    author
  );
  if (!_config_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .availableLangs */ .tW.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }
  const videoData = {
    isLive: !!isLive,
    isPremiere,
    title,
    description,
    author,
    detectedLanguage,
  };
  _debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("youtube video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

const youtubeUtils = {
  isMobile,
  getPlayer,
  getPlayerResponse,
  getPlayerData,
  getVideoVolume,
  getSubtitles,
  getVideoData,
  setVideoVolume,
};


/***/ }),

/***/ "./src/yandexProtobuf.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ yandexProtobuf)
/* harmony export */ });
// coursera & udemy translation help object
const VideoTranslationHelpObject = new protobuf.Type(
  "VideoTranslationHelpObject"
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
  .add(new protobuf.Field("unknown3", 9, "int32")) // 0 0
  .add(new protobuf.Field("unknown4", 10, "int32")) // 0 0
  .add(
    new protobuf.Field(
      "translationHelp",
      11,
      "VideoTranslationHelpObject",
      "repeated"
    )
  ) // array for translation assistance ([0] -> {2: link to video, 1: "video_file_url"}, [1] -> {2: link to subtitles, 1: "subtitles_file_url"})
  .add(new protobuf.Field("responseLanguage", 14, "string")); // target language code

const VideoSubtitlesRequest = new protobuf.Type("VideoSubtitlesRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string")); // source language code

const VideoStreamRequest = new protobuf.Type("VideoStreamRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string"))
  .add(new protobuf.Field("responseLanguage", 3, "string"));

const VideoStreamPingRequest = new protobuf.Type("VideoStreamPingRequest").add(
  new protobuf.Field("pingId", 1, "int32")
);

const VideoTranslationResponse = new protobuf.Type("VideoTranslationResponse")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("duration", 2, "double"))
  .add(new protobuf.Field("status", 4, "int32"))
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

const VideoStreamObject = new protobuf.Type("VideoStreamObject")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("timestamp", 2, "int32")); // timestamp in ms (probably means the time of 1 request to translate the stream)

const VideoStreamResponse = new protobuf.Type("VideoStreamResponse")
  .add(new protobuf.Field("interval", 1, "int32")) // 20s - streaming, 10s - translating
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
    translationHelp
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


/***/ }),

/***/ "./src/yandexRequest-cloudflare.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config_cloudflare_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/config/config-cloudflare.js");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/config/config.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/debug.js");




async function yandexRequest(path, body, headers, callback) {
  let response;
  let responseBody;
  try {
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("yandexRequest:", path);
    // Create a fetch options object with headers and body
    const options = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        headers: {
          ...{
            Accept: "application/x-protobuf",
            "Accept-Language": "en",
            "Content-Type": "application/x-protobuf",
            "User-Agent": _config_config_js__WEBPACK_IMPORTED_MODULE_1__/* .yandexUserAgent */ .Rr,
            Pragma: "no-cache",
            "Cache-Control": "no-cache",
            "Sec-Fetch-Mode": "no-cors",
          },
          ...headers,
        },
        body: Array.from(body),
      }),
    };
    // Fetch the translation from the worker host
    response = await fetch(`https://${_config_config_cloudflare_js__WEBPACK_IMPORTED_MODULE_2__/* .workerHost */ .i}${path}`, options);
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("yandexRequest:", response.status, response);
    // Get the response body as an array buffer
    responseBody = await response.arrayBuffer();
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    response = { status: -1 };
    responseBody = exception;
  }

  // Call the callback function with the result
  callback(response.status == 200, responseBody);
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;