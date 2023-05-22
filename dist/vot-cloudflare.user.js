// ==UserScript==
// @name [VOT Cloudflare] - Voice Over Translation
// @name:ru [VOT Cloudflare] - Закадровый перевод видео
// @description A small extension that adds a Yandex Browser video translation to other browsers
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @version 1.2.0
// @author sodapng, mynovelhost, Toil
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
// @connect api.browser.yandex.ru
// @downloadURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js
// @grant GM_xmlhttpRequest
// @grant GM_info
// @homepageURL https://github.com/ilyhalight/voice-over-translation/issues
// @icon https://translate.yandex.ru/icons/favicon.ico
// @inject-into page
// @namespace vot-cloudflare
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/protobufjs/7.2.3/protobuf.min.js
// @updateURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".translationBlock {\r\n  padding: 0.45rem !important;\r\n  width: max-content;\r\n  position: absolute;\r\n  background: #2e2f34;\r\n  border-radius: 0.5rem !important;\r\n  left: 50%;\r\n  top: 5rem;\r\n  transform: translate(-50%);\r\n  text-align: center;\r\n  opacity: 0;\r\n  transition: opacity 1s;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  z-index: 100;\r\n}\r\n\r\n.translationBtn {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  color: #fff;\r\n  padding-right: 0.25rem !important;\r\n  cursor: pointer;\r\n  font: 600 12px / 14px \"Segoe UI\", BlinkMacSystemFont, Arial, sans-serif;\r\n}\r\n\r\n.translationBlock:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.translationMenu {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  border-left: 1px solid #424348;\r\n  max-height: 16px;\r\n  max-width: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.translationMenuIcon {\r\n  padding: 0 10px !important;\r\n  width: 24px;\r\n}\r\n\r\n.translationIAlice {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  max-height: 26px;\r\n  max-width: 50px;\r\n}\r\n\r\n.translationIconAlice {\r\n  height: 24px !important;\r\n  width: 24px !important;\r\n}\r\n\r\n.translationITranslate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  max-height: 20px;\r\n  max-width: 20px;\r\n}\r\n\r\n.translationMenuContent {\r\n  position: absolute;\r\n  background: #2e2f34;\r\n  color: #fff;\r\n  display: none;\r\n  border-radius: 1rem !important;\r\n  left: 50%;\r\n  top: 9rem;\r\n  transform: translate(-50%);\r\n  text-align:left;\r\n  font: 600 14px / 16px \"Segoe UI\", BlinkMacSystemFont, Arial, sans-serif !important;\r\n\r\n  width: 300px;\r\n  /* height: 375px; */\r\n  opacity: 0;\r\n  z-index: 100;\r\n  transition: opacity 0.5s ease;\r\n}\r\n\r\n.VOTMenuSlider {\r\n  -webkit-appearance: none !important;\r\n  appearance: none !important;\r\n  width: 268px !important;\r\n  height: 8px !important;\r\n  outline: none !important;\r\n  margin-top: 0.5rem;\r\n  opacity: 0.7;\r\n  /* background: #3C3F4D !important; */\r\n  background: rgb(253, 222, 85, 0.6) !important;\r\n  border: none !important;\r\n  border-radius: 2rem !important;\r\n  -webkit-transition: 0.2s !important;\r\n  transition: opacity 0.2s ease !important;\r\n}\r\n\r\n.VOTMenuSlider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.VOTMenuSlider::-webkit-slider-thumb {\r\n  -webkit-appearance: none !important;\r\n  appearance: none !important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n  border-radius: 50% !important;\r\n  border: none !important;\r\n  background: #fff !important;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.VOTMenuSlider::-moz-range-thumb {\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n  border-radius: 50% !important;\r\n  border: none !important;\r\n  background: #fff !important;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.VOTMenuSlider::-ms-thumb {\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n  border-radius: 50% !important;\r\n  border: none !important;\r\n  background: #fff !important;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.VOTMenuSlider::-ms-fill-lower {\r\n  height: 8px !important;\r\n  border-radius: 2rem !important;\r\n  background: linear-gradient(90.1deg, rgba(186, 153, 244, 0.85) -5.78%, rgba(236, 138, 202, 0.7) 56.46%, rgba(239, 168, 117, 0.6) 108.93%) !important;\r\n}\r\n\r\n.VOTMenuSlider::-moz-range-progress {\r\n  height: 8px !important;\r\n  border-radius: 2rem !important;\r\n  background: linear-gradient(90.1deg, rgba(186, 153, 244, 0.85) -5.78%, rgba(236, 138, 202, 0.7) 56.46%, rgba(239, 168, 117, 0.6) 108.93%) !important;\r\n}\r\n\r\n.translationHeader {\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.translationMainHeader {\r\n  margin: 16px !important;\r\n  color: #FFF;\r\n  font: 900 14px / 16px \"Segoe UI\", BlinkMacSystemFont, Arial, sans-serif !important;\r\n}\r\n\r\n.translationMenuContainer {\r\n  /* width: 100%; */\r\n  padding-left: 16px !important;\r\n  padding-top: 5px !important;\r\n  display: inline-block !important;\r\n}\r\n\r\n.translationMenuContainer > input {\r\n  appearance: auto !important;\r\n}\r\n\r\n.translationMenuText {\r\n  color: #FFF;\r\n  display: inline-flex;\r\n  width: 80%;\r\n}\r\n\r\n.translationVolumeBox, .translationVideoVolumeBox {\r\n  padding-top: 0.5rem !important;\r\n}\r\n\r\n.translationDropDB {\r\n  border: none !important;\r\n  border-radius: 4px !important;\r\n  background: #5426FF !important;\r\n  color: #fff !important;\r\n  padding: 6px 16px !important;\r\n  margin-left: auto !important;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.translationDownload {\r\n  background: #5426FF !important;\r\n  color: #fff !important;\r\n  padding: 2px 10px !important;\r\n  border-radius: 4px !important;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.translationMenuFunctional {\r\n  display: flex;\r\n  margin: 16px !important;\r\n}\r\n\r\n.VOTMenuSelect {\r\n  width: 110px;\r\n  border-radius: 5px !important;\r\n  border: 1px solid #DADCE0 !important;\r\n  box-shadow: 0 1px 3px -2px #9098A9;\r\n  padding: 5px !important;\r\n}\r\n\r\n.VOTMenuSelect:focus {\r\n  outline: none;\r\n}\r\n\r\n.VOTMenuSelect:focus {\r\n  outline: none;\r\n  border-color: #0077FF;\r\n  box-shadow: 0 0 0 2px rgba(#0077FF,.2)\r\n}\r\n\r\n#VOTSelectLanguages {\r\n  display: flex !important;\r\n  margin-left: 5px;\r\n}\r\n\r\n#VOTSelectLanguages svg {\r\n  margin: 0 5px;\r\n}", ""]);
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
/* harmony export */   "IM": () => (/* binding */ autoVolume),
/* harmony export */   "Rr": () => (/* binding */ yandexUserAgent)
/* harmony export */ });
/* unused harmony exports workerHost, yandexHmacKey */
// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";
const yandexUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 CriOS/104.0.5112.114 YaBrowser/22.9.4.633.10 SA/3 Mobile/15E148 Safari/604.1";
const autoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation



/***/ }),

/***/ "./src/rvt-cloudflare.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rvt_cloudflare)
});

;// CONCATENATED MODULE: ./src/getUUID.js
function getUUID(isLower) {
  const uuid = ([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
  return isLower ? uuid : uuid.toUpperCase();
}


// EXTERNAL MODULE: ./src/yandexRequests.js
var yandexRequests = __webpack_require__("./src/yandexRequests.js");
;// CONCATENATED MODULE: ./src/config/config-cloudflare.js
// CLOUDFLARE CONFIGURATION
const workerHost = "cors.yandexproxy.workers.dev";
const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";


// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__("./src/config/config.js");
// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/rvt-cloudflare.js






// Request video translation from Yandex API
async function requestVideoTranslation(url, unknown1, requestLang, responseLang, callback) {
  // Initialize variables
  let response;
  let responseBody;
  const deviceId = getUUID(true);
  const body = yandexRequests/* yandexRequests.encodeRequest */.G.encodeRequest(url, deviceId, unknown1, requestLang, responseLang);

  try {
    debug/* default.log */.Z.log('requestVideoTranslation');
    // Create a key from the HMAC secret
    const utf8Encoder = new TextEncoder("utf-8");
    const key = await window.crypto.subtle.importKey('raw', utf8Encoder.encode(yandexHmacKey), { name: 'HMAC', hash: {name: 'SHA-256'}}, false, ['sign', 'verify']);
    // Sign the body with the key
    const signature = await window.crypto.subtle.sign('HMAC', key, body);
    // Convert the signature to a hex string
    const hexSignature = Array.from(new Uint8Array(signature), x => x.toString(16).padStart(2, '0')).join('');
    // Create a fetch options object with headers and body
    const options = {
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
          "User-Agent": config/* yandexUserAgent */.Rr,
          "Pragma": "no-cache",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Mode": "no-cors",
          "Vtrans-Signature": hexSignature,
          "Sec-Vtrans-Token": getUUID(false)
        },
        body: String.fromCharCode(...body)
      })
    };
    // Fetch the translation from the worker host
    response = await fetch(`https://${workerHost}/video-translation/translate`, options);
    // Get the response body as an array buffer
    responseBody = await response.arrayBuffer();
  } catch(exception) {
    debug/* default.log */.Z.log(exception)
    // Handle errors
    response = {status: -1};
    responseBody = exception;
  }

  // Call the callback function with the result
  callback(response.status == 200, responseBody);
}

/* harmony default export */ const rvt_cloudflare = (requestVideoTranslation);

/***/ }),

/***/ "./src/utils/debug.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const debug = {}
debug.log = (...text) => {
  if (true) {
    return;
  }
  return console.log("%c[VOT DEBUG]", "background: #F2452D; color: #fff; padding: 5px;", ...text);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debug);

/***/ }),

/***/ "./src/yandexRequests.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ yandexRequests)
/* harmony export */ });
const VideoTranslationRequest = new protobuf.Type("VideoTranslationRequest")
  .add(new protobuf.Field("url", 3, "string"))
  .add(new protobuf.Field("deviceId", 4, "string"))
  .add(new protobuf.Field("firstRequest", 5, "bool")) // true for the first request, false for subsequent ones
  .add(new protobuf.Field("unknown1", 6, "fixed64"))
  .add(new protobuf.Field("unknown2", 7, "int32"))
  .add(new protobuf.Field("language", 8, "string")) // source language code
  .add(new protobuf.Field("unknown3", 9, "int32"))
  .add(new protobuf.Field("unknown4", 10, "int32"))
  .add(new protobuf.Field("responseLanguage", 14, "string")); // target language code

const VideoTranslationResponse = new protobuf.Type("VideoTranslationResponse")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("duration", 2, "double"))
  .add(new protobuf.Field("status", 4, "int32"))
  .add(new protobuf.Field("remainingTime", 5, "int32"))
  .add(new protobuf.Field("message", 9, "string"));

// Create a root namespace and add the types
const root = new protobuf.Root().define("yandex").add(VideoTranslationRequest).add(VideoTranslationResponse);

// Export the encoding and decoding functions
const yandexRequests = {
  encodeRequest(url, deviceId, unknown1, requestLang, responseLang) {
    return root.VideoTranslationRequest.encode({
      url,
      deviceId,
      firstRequest: true,
      unknown1,
      unknown2: 1,
      language: requestLang,
      unknown3: 0,
      unknown4: 0,
      responseLanguage: responseLang
    }).finish();
  },
  decodeResponse(response) {
    return root.VideoTranslationResponse.decode(new Uint8Array(response));
  }
};

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




       /* harmony default export */ const styles_main = (main/* default */.Z && main/* default.locals */.Z.locals ? main/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/utils/regex.js
const cyrillicRegex = /[а-яА-ЯёЁ]/;

function checkCyrillic(string) {
  return cyrillicRegex.test(string);
}

function getCyrillicCount(string) {
  return string.match(cyrillicRegex).length;
}


;// CONCATENATED MODULE: ./src/utils/getYTVideoData.js


// Get the language code from the response or the text
function getLanguage(response, title, description, author) {
  if (!response) {
    return 'en';
  }

  // Check if there is an automatic caption track in the response
  const captionTracks = response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find(caption => caption.kind === 'asr');
    if (autoCaption) {
      return autoCaption.languageCode;
    }
  }

  // Check if the text contains cyrillic characters
  const hasCyrillic = text => checkCyrillic(text) && !getCyrillicCount(text);
  const isRussian = [title, description, author].some(hasCyrillic);
  if (isRussian) {
    return 'ru';
  }

  return 'en';
}

// Get the video data from the player
function getYTVideoData() {
  const player = document.querySelector("#movie_player");
  const data = player.getVideoData();
  const response = player.getPlayerResponse();
  const videoData = {
    isLive: data?.isLive,
    isPremiere: data?.isPremiere,
    title: data?.title,
    description: response?.videoDetails?.shortDescription,
    author: data?.author,
    detectedLanguage: getLanguage(response, data.title, response?.videoDetails?.shortDescription, data.author)
  };
  console.log("VOT Detected language: ", videoData.detectedLanguage);
  return videoData;
}



// EXTERNAL MODULE: ./src/yandexRequests.js
var yandexRequests = __webpack_require__("./src/yandexRequests.js");
;// CONCATENATED MODULE: ./src/utils/utils.js
function waitForElm(selector) {
  // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

const sleep = m => new Promise(r => setTimeout(r, m))

const getVideoId = (service) => {
  const url = new URL(window.location.href);

  switch (service) {
    case "youtube":
      if (url.pathname.includes("watch")) {
        return url.searchParams.get("v");
      } else if (url.pathname.includes("embed/")) { // TODO: Добавить кнопку перевода на странице видео
        const urlArray = url.pathname.split('/');
        return urlArray[urlArray.length - 1];
      }
    case "vk":
      if (/^video-?[0-9]{8,9}_[0-9]{9}$/.test(url.pathname.split('/')[1])) {
        return url.pathname.split('/')[1]; // Убираем слэш в начале
      } else {
        return url.searchParams.has('z') ? url.searchParams.get("z").split('/')[0] : null; // Убираем мусор в конце параметра
      }
    case "9gag" || 0:
      if (url.pathname.includes("gag/")) {
        const urlArray = url.pathname.split('/');
        return urlArray[urlArray.length - 1];
      }
    case "twitch":
      if (/^m\.twitch\.tv$/.test(window.location.hostname)) { // Если используется мобильная версия сайта (m.twitch.tv)
        const linkUrl = document.head.querySelector('link[rel="canonical"]');
        if (linkUrl?.href.includes("/videos/")) {
          const urlArray = linkUrl.href.split('/');
          return `videos/${urlArray[urlArray.length - 1]}`;
        } else if (linkUrl?.href.includes('/clip/')) {
          return url.pathname.slice(1);
        } else {
          return false
        }
      } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
        return `videos/${url.searchParams.get("video")}`
      } else if (url.pathname.includes("/videos/")) {
        const urlArray = url.pathname.split('/');
        return `videos/${urlArray[urlArray.length - 1]}`;
      } else if (url.pathname.includes("/clip/")) {
        return url.pathname.slice(1);
      }
    case "tiktok":
      if (url.pathname.includes("video/")) {
        const urlArray = url.pathname.split('/');
        return urlArray[urlArray.length - 1];
      }
    case "vimeo":
      const urlArray = url.pathname.split('/');
      return urlArray[urlArray.length - 1];
    case "xvideos":
      const urlArrayXVideos = url.pathname.split('/');
      return `${urlArrayXVideos[urlArrayXVideos.length - 2]}/${urlArrayXVideos[urlArrayXVideos.length - 1]}`;
    case "pornhub":
      if (url.pathname.includes('view_video.php')) {
        return url.searchParams.get("viewkey");
      } else if (url.pathname.includes('embed/')) {
        const urlArray = url.pathname.split('/');
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
      if (url.pathname.includes('/video/') || url.pathname.includes('/play/embed/')) {
        const urlArray = url.pathname.split('/');
        return urlArray[urlArray.length - 2];
      }
    case "bilibili.com":
      if (url.pathname.includes('/video/')) {
        const urlArray = url.pathname.split('/');
        return urlArray[urlArray.length - 2];
      } else if (url.pathname.includes('/blackboard/webplayer/embed-old.html')) {
        return url.searchParams.get("bvid");
      }
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  if (minutes >= 60) {
    return 'Перевод займёт больше часа';
  } else if (minutes >= 10 && minutes % 10) {
    return `Перевод займёт примерно ${minutes} минут`;
  } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
    return 'Перевод займёт около минуты';
  } else {
    return `Перевод займёт примерно ${minutes} минуты`;
  }
}


// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__("./src/config/config.js");
;// CONCATENATED MODULE: ./src/config/alternativeUrls.js
// Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
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

// Sites host Piped. I tested the performance only on piped.video
const sitesPiped = [
  'piped.video',
  'piped.tokhmi.xyz',
  'piped.moomoo.me',
  'piped.syncpundit.io',
  'piped.mha.fi',
  'watch.whatever.social',
  'piped.garudalinux.org',
  'efy.piped.pages.dev',
  'watch.leptons.xyz',
  'piped.lunar.icu',
  'yt.dc09.ru',
  'piped.mint.lgbt',
  'il.ax',
  'piped.privacy.com.de',
  'piped.esmailelbob.xyz',
  'piped.projectsegfau.lt',
  'piped.in.projectsegfau.lt',
  'piped.us.projectsegfau.lt',
  'piped.privacydev.net',
  'piped.palveluntarjoaja.eu',
  'piped.smnz.de',
  'piped.adminforge.de',
  'piped.qdi.fi',
  'piped.hostux.net',
  'piped.chauvet.pro',
  'piped.jotoma.de',
  'piped.pfcd.me',
  'piped.frontendfriendly.xyz'
];


;// CONCATENATED MODULE: ./src/config/constants.js
const translateFuncParam = 0x40_75_50_00_00_00_00_00;
const availableFromLangs = {'ru': 'Русский', 'en': 'Английский', 'zh': 'Китайский', 'fr': 'Французский', 'it': 'Итальянский', 'es': 'Испанский'}; // available languages for translation (from)
const availableToLangs = {'ru': 'Русский', 'en': 'Английский'}; // available languages for translation (to)
const siteTranslates = {
  'youtube': 'https://youtu.be/',
  'twitch': 'https://twitch.tv/',
  'vimeo': 'https://vimeo.com/',
  '9gag': 'https://9gag.com/gag/',
  'vk': 'https://vk.com/video?z=',
  'xvideos': 'https://www.xvideos.com/',
  'pornhub': 'https://rt.pornhub.com/view_video.php?viewkey=',
  'udemy': 'https://www.udemy.com',
  'twitter': 'https://twitter.com/i/status/',
  'facebook': 'https://www.facebook.com/',
  'rutube': 'https://rutube.ru/video/',
  'bilibili.com': 'https://www.bilibili.com/video/'
};



;// CONCATENATED MODULE: ./src/indexedDB.js
// --- IndexedDB functions start:
function openDB (name) {
  return indexedDB.open(name, 1);
}

async function initDB () {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(`VOT: Ошибка инициализации Базы Данных: ${openRequest.errorCode}`);
      reject(false);
    }

    openRequest.onupgradeneeded = event => {
      const db = openRequest.result;

      db.onerror = () => {
        alert('VOT: Не удалось загрузить базу данных')
        console.error(`VOT: Не удалось загрузить базу данных: ${openRequest.error}`);
        reject(false);
      }

      const objectStore = db.createObjectStore('settings', {keyPath: 'key'});

      objectStore.createIndex('autoTranslate', 'autoTranslate', { unique: false });
      objectStore.createIndex('defaultVolume', 'defaultVolume', { unique: false });
      objectStore.createIndex('showVideoSlider', 'showVideoSlider', { unique: false });
      objectStore.createIndex('syncVolume', 'syncVolume', { unique: false });
      objectStore.createIndex('autoSetVolumeYandexStyle', 'autoSetVolumeYandexStyle', { unique: false });
      objectStore.createIndex('dontTranslateRuVideos', 'dontTranslateRuVideos', { unique: false });
      console.log('VOT: База Данных создана')

      objectStore.transaction.oncomplete = event => {
        const objectStore = db.transaction('settings', 'readwrite').objectStore('settings');
        const settingsDefault = {
          key: 'settings',
          autoTranslate: 0,
          defaultVolume: 100,
          showVideoSlider: 0,
          syncVolume: 0,
          autoSetVolumeYandexStyle: 1,
          dontTranslateRuVideos: 0
        };
        const request = objectStore.add(settingsDefault);

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
      const db = openRequest.result;
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
      const db = openRequest.result;
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
      const openRequest = openDB("VOT");

      openRequest.onerror = () => {
        alert('VOT: Произошла ошибка');
        console.error(`VOT: Ошибка Базы Данных: ${openRequest.errorCode}`);
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
          console.log("VOT: Базе данных нужно обновление, пожалуЙста, перезагрузите страницу");
          window.location.reload();
          reject(false);
        };

        const objectStore = db.transaction('settings', 'readwrite').objectStore('settings');
        const request = objectStore.get('settings');

        request.onerror = (event) => {
          console.error("VOT: Не удалось получить данные из Базы Данных: ", event.error);
          reject(false);
        };

        request.onsuccess = () => {
          // console.log('VOT: Получены данные из Базы Данных: ', request.result);
          const data = request.result;

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

          const requestUpdate = objectStore.put(data);

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
        const db = openRequest.result;
        console.error('VOT: База Данных временно заблокирована из-за ошибки: ', db);
        alert("VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с youtube.com и попробуйте снова.");
        reject(false);
      };
    };
  });
}

async function readDB() {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      alert('VOT: Произошла ошибка');
      console.error(`VOT: Ошибка Базы Данных: ${openRequest.errorCode}`);
      reject(false);
    }

    openRequest.onupgradeneeded = async () => {
      const db = openRequest.result;
      db.close();
      await initDB();
      resolve(true);
    }

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        alert("VOT: База данных устарела, пожалуЙста, перезагрузите страницу.");
        reject(false);
      }

      const objectStore = db.transaction('settings').objectStore('settings');
      const request = objectStore.get('settings');

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
        const data = request.result;
        resolve(data);
      }
    }

    openRequest.onblocked = () => {
      const db = openRequest.result;
      console.error('VOT: База Данных временно заблокирована из-за ошибки: ', db);
      alert("VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с youtube.com и попробуйте снова.");
      reject(false);
    }
  });
}

function deleteDB() {
  indexedDB.deleteDatabase('VOT');
}


// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/menu.js


function changeBtnColor(n) {
  document.querySelector('.translationBtn').style.color = n;
}

function changeBtnState(newState = 'none') {
  document.querySelector('.translationBtn').dataset.state = newState;
}

function changeIconBackground(type = 'none') {
  let iconBackgroundColor;
  switch (type) {
    case 'error':
      iconBackgroundColor = '#7A7A7D';
      break;
    case 'success':
      iconBackgroundColor = '#A36EFF';
      break;
    default:
      iconBackgroundColor = '#FFFFFF';
      break;
  }

  document.querySelector('.translateIcon').style.fill = iconBackgroundColor;
}

function transformBtn(type = 'none', text) {
  switch (type) {
    case 'error':
      changeIconBackground(type);
      changeBtnColor('#7A7A7D');
      changeBtnState(type);
      break;
    case 'success':
      changeIconBackground(type);
      changeBtnColor('#A36EFF');
      changeBtnState(type);
      break;
    default:
      changeIconBackground('none');
      changeBtnColor('#FFFFFF');
      changeBtnState('none');
      break;
  }

  document.querySelector('.translationBtn').innerText = text;
}

// Add translation buttton block
function addTranslationBlock(element) {
  if (!element || element.querySelector('.translationBlock')) return;

  const block = document.createElement('div');
  block.classList.add('translationBlock');
  block.innerHTML = `
    <span class = "translationArea" role = "button">
      <span class = "translationITranslate" tabindex = "-1">
        <svg class="translateIcon" width="24" height="24" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.605 19.703c.794-.13 1.647-.476 2.47-.983.695 1.013 1.255 1.546 1.306 1.593l1.166-1.207c-.011-.01-.504-.48-1.124-1.401.277-.25.547-.512.797-.798a12.1 12.1 0 0 0 2.268-3.826c.383.216.761.541.96 1.027.68 1.649-.301 3.557-1.215 4.385l1.152 1.22c1.52-1.378 2.571-3.959 1.638-6.227-.368-.892-1.077-1.59-2.064-2.037.162-.763.216-1.38.233-1.785h-1.698c-.017.307-.06.762-.173 1.323-1.325-.187-2.818-.006-4.248.508a25.994 25.994 0 0 1-.313-2.547c5.092-.287 8.098-1.488 8.237-1.546l-.654-1.533c-.03.013-2.875 1.14-7.65 1.418-.001-.405-.008-.666-.012-.85-.008-.339-.01-.423.03-.67L17.01 5.75c-.026.283-.024.573-.018 1.278l.002.318c-.026 0-.051 0-.077.002l-.08.001a39.286 39.286 0 0 1-3.27-.14L13.25 8.89c.5.043 2.023.122 3.397.122h.1a19.457 19.457 0 0 1 .208-.003l.106-.002c.067.948.196 2.034.421 3.22a8.05 8.05 0 0 0-2.267 1.963l.811 1.871c.327-.732.995-1.51 1.856-2.111a16.762 16.762 0 0 0 1.33 3.346c-.811.514-1.64.818-2.301.804l.694 1.603Zm2.953-3.488a8.18 8.18 0 0 0 .374-.389 10.465 10.465 0 0 0 1.927-3.224c-.198-.021-.4-.031-.606-.031-.907 0-1.885.199-2.834.574.31 1.209.718 2.23 1.14 3.07ZM9.769 11.688 4.25 24.438h2.259l1.357-3.407h5.582l1.357 3.407h2.258l-5.52-12.75H9.77Zm.887 2.624 2.056 5H8.6l2.056-5Z"></path>
        </svg>
      </span>
      <span class = "translationBtn" tabindex = "0">Перевести видео</span>
    </span>
    <span class = "translationMenu" tabindex = "0" role = "button">
      <svg class = "translationMenuIcon" height="15" width="5" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
      </svg>
    </span>
  `;

  element.appendChild(block);
  debug/* default.log */.Z.log(`VOT: Added translation button to `, element);
}

function createTranslationMenu() {
  const container = document.createElement('div');
  container.classList.add('translationMenuContent');
  container.innerHTML = `
    <p class = "translationMainHeader">Настройки перевода</p>
    <div class="translationMenuOptions"></div>
    <div class="translationMenuFunctional">
      <a class = "translationDownload">
        <svg width="24px" height="24px" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
      </a>
      <button class = "translationDropDB">Сбросить настройки</button>
    </div>
  `;

  container.onclick = (event) => event.stopPropagation();
  return container;
}

// Create checkbox for menu
function createMenuCheckbox(id, valueToCheck, content) {
  const checkboxContainer = document.createElement('div');
  const checkbox = document.createElement('input');
  const checkboxLabel = document.createElement('label');

  checkbox.type = 'checkbox';
  checkbox.id = id;
  checkbox.checked = Boolean(valueToCheck);

  checkboxLabel.htmlFor = id;
  checkboxLabel.innerHTML = content;

  checkboxContainer.classList.add('translationMenuContainer');
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(checkboxLabel);

  return checkboxContainer;
}

// Create slider for menu
function createMenuSlider(id, sliderValue, content) {
  const sliderContainer = document.createElement('div');
  const slider = document.createElement('input');
  const sliderLabel = document.createElement('label');

  slider.type = 'range';
  slider.id = id;
  slider.classList.add('VOTMenuSlider');
  slider.min = 0;
  slider.max = 100;
  slider.value = sliderValue;

  sliderLabel.htmlFor = id;
  sliderLabel.classList.add('translationHeader');
  sliderLabel.innerHTML = content;

  sliderContainer.classList.add('translationMenuContainer');
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
  const selectContainer = document.createElement('div');
  const select = document.createElement('select');

  select.id = id;
  select.classList.add('VOTMenuSelect');

  for (const option of selectOptions) {
    const optionElement = document.createElement('option');
    optionElement.innerText = option.label;
    optionElement.value = option.value;
    if (option.hasOwnProperty('selected') && option.selected) {
      optionElement.setAttribute('selected', 'selected');
    }

    if (option.hasOwnProperty('disabled')) {
      optionElement.disabled = option.disabled;
    }

    select.appendChild(optionElement);
  }

  selectContainer.classList.add('translationMenuContainer');
  selectContainer.appendChild(select);

  return selectContainer;
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

  return finalValue
}


;// CONCATENATED MODULE: ./src/config/regexes.js
const regexes = () => {
  return {
    'youtubeRegex':  /^(www.|m.)?youtube(-nocookie)?.com$/,
  }
}

/* harmony default export */ const config_regexes = (regexes());


;// CONCATENATED MODULE: ./src/config/selectors.js
const selectors = () => {
  return {
    'youtubeSelector':  '.html5-video-container',
    'twitchSelector': '.video-ref',
    'twitchMobileSelector': 'main > div > section > div > div > div',
    'pipedSelector': '.player-container',
    'vkSelector': '.videoplayer_media',
    'twitterSelector': 'article[data-testid="tweet"][tabindex="-1"]',
    'vimeoSelector': '.player',
    'gagSelector': '.video-post',
    'bilibilicomSelector': '.bpx-player-video-wrap'
  }
}

/* harmony default export */ const config_selectors = (selectors());


;// CONCATENATED MODULE: ./src/index.js














const sitesChromiumBlocked = Object.assign([], sitesInvidious, sitesPiped);

async function src_main() {
  const rvt = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/rvt-cloudflare.js"));

  const requestVideoTranslation = rvt.default;

  if (false) {}

  let timer;
  const audio = new Audio();
  let opacityRatio = 0.9;
  let openedMenu = false;

  if (true) {
    var translationPanding = false;
  }

  function logout(n) {
    if (openedMenu) return;

    document.querySelector('.translationBlock').style.opacity = n;
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

  const deleteAudioSrc = () => {
    audio.src = '';
    audio.removeAttribute('src');
  };

  // Add menu container
  function addTranslationMenu(element) {
    if (element.querySelector('.translationMenuContent')) return;

    const container = createTranslationMenu();
    element.appendChild(container);

    // click to translation menu icon
    document.querySelector('.translationMenu')?.addEventListener('click', (event) => {
      event.stopPropagation();
      const content = document.querySelector('.translationMenuContent');
      if (openedMenu) {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
        content.style.opacity = opacityRatio;
      }

      openedMenu = !openedMenu;
    });

    document.querySelector('.translationDropDB').addEventListener('click', (event) => {
      event.stopPropagation();
      deleteDB();
      location.reload();
    });

    debug/* default.log */.Z.log(`VOT: Added translation menu to `, element);
  }

  function translateVideo(url, unknown1, requestLang, responseLang, callback) {
    debug/* default.log */.Z.log(`Translate video (url: ${url}, unknown1: ${unknown1}, requestLang: ${requestLang}, responseLang: ${responseLang})`);
    if (true) {
      if (translationPanding) {
        debug/* default.log */.Z.log('translationPanding return')
        return;
      }
      translationPanding = true;
    }

    requestVideoTranslation(url, unknown1, requestLang, responseLang, (success, response) => {
      if (true) {
        translationPanding = false;
      }

      debug/* default.log */.Z.log('[exec callback] Requesting video translation');
      if (!success) {
        callback(false, "Не удалось запросить перевод видео");
        return;
      }

      const translateResponse = yandexRequests/* yandexRequests.decodeResponse */.G.decodeResponse(response);
      console.log('VOT Response: ', translateResponse);
      switch (translateResponse.status) {
        case 0:
          callback(false, translateResponse.message);
          return;
        case 1:
          const hasUrl = translateResponse.url != null;
          callback(hasUrl, hasUrl ? translateResponse.url : "Не получена ссылка на аудио");
          return;
        case 2:
          const remainingTime = translateResponse.remainingTime ? secsToStrTime(translateResponse.remainingTime) : 'Перевод займет несколько минут'
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

  async function translateProccessor(videoContainer, siteHostname, siteEvent ) {
    debug/* default.log */.Z.log(`[translateProccessor] execute `, videoContainer);

    let video;
    let autoRetry;
    let volumeOnStart;
    let tempOriginalVolume;
    let tempVolume;
    let dbAutoTranslate;
    let dbDefaultVolume;
    let dbShowVideoSlider;
    let dbAutoSetVolumeYandexStyle;
    let dbDontTranslateRuVideos;
    let dbSyncVolume;
    let firstPlay = true;
    // translate properties
    let translateFromLang = 'en'; // default language of video
    let translateToLang = 'ru'; // default language of audio response

    debug/* default.log */.Z.log('videoContainer', videoContainer)

    if (siteHostname === 'vimeo') {
      video = videoContainer.querySelector('.vp-video-wrapper > .vp-video > .vp-telecine > video');
    } else {
      video = videoContainer.querySelector('video');
    }

    debug/* default.log */.Z.log('video', video)

    let videoData = getVideoData();
    console.log('VOT Video Data: ', videoData);

    if (window.location.hostname.includes('m.youtube.com')) {
      await sleep(1000);
      opacityRatio = 1;
      const container = document.querySelector('.slim-video-information-title-and-badges')
      addTranslationBlock(container, 'yt-mobile');
      addTranslationMenu(container, 'yt-mobile');
    } else if (siteHostname === 'pornhub') {
      if (window.location.pathname.includes('view_video.php')) {
        const container = document.querySelector('.original.mainPlayerDiv')
        addTranslationBlock(container);
        addTranslationMenu(container);
      } else if (window.location.pathname.includes('embed/')) {
        const container = document.querySelector('body')
        addTranslationBlock(container);
        addTranslationMenu(container);
      }
    } else {
      addTranslationBlock(videoContainer);
      addTranslationMenu(videoContainer);
    }

    const isDBInited = await initDB();

    if (isDBInited) {
      const dbData = await readDB();
      if (dbData) {
        dbAutoTranslate = dbData.autoTranslate;
        dbDefaultVolume = dbData.defaultVolume;
        dbShowVideoSlider = dbData.showVideoSlider;
        dbAutoSetVolumeYandexStyle = dbData.autoSetVolumeYandexStyle;
        dbDontTranslateRuVideos = dbData.dontTranslateRuVideos;
        // only youtube:
        dbSyncVolume = dbData.syncVolume;

        debug/* default.log */.Z.log('[db] data from db: ', dbData);
        const menuOptions = document.querySelector('.translationMenuOptions');
        if (!menuOptions.querySelector('#VOTTranslateFromLang')) {
          const selectFromLangOptions = [
            {
              label: 'Язык видео',
              value: 'default',
              disabled: true
            },
          ]

          for (const [key, value] of Object.entries(availableFromLangs)) {
            selectFromLangOptions.push({
              label: value,
              value: key,
              selected: videoData.detectedLanguage === key
            });
          }

          const selectToLangOptions = [
            {
              label: 'Язык перевода',
              value: 'default',
              disabled: true
            },
          ]

          for (const [key, value] of Object.entries(availableToLangs)) {
            selectToLangOptions.push({
              label: value,
              value: key,
              selected: videoData.responseLanguage === key
            });
          }

          const selectFromLang = createMenuSelect(
            'VOTTranslateFromLang',
            selectFromLangOptions
          );

          const selectToLang = createMenuSelect(
            'VOTTranslateToLang',
            selectToLangOptions
          ).firstElementChild;

          selectFromLang.id = 'VOTSelectLanguages';
          selectFromLang.innerHTML += `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"/>
            </svg>
          `;

          selectFromLang.appendChild(selectToLang);
          menuOptions.appendChild(selectFromLang);

          menuOptions.querySelector('#VOTTranslateFromLang').addEventListener('change', (event) => {
            debug/* default.log */.Z.log('[onchange] select from language', event.target.value)
            videoData = setDetectedLangauge(videoData, event.target.value);
          });

          menuOptions.querySelector('#VOTTranslateToLang').addEventListener('change', (event) => {
            debug/* default.log */.Z.log('[onchange] select to language', event.target.value);
            videoData = setResponseLangauge(videoData, event.target.value);
          })
        }

        if (dbAutoTranslate !== undefined && !menuOptions.querySelector('#VOTAutoTranslate')) {
          const checkbox = createMenuCheckbox(
            'VOTAutoTranslate',
            dbAutoTranslate,
            `Переводить при открытие${siteHostname === 'vk' || window.location.hostname.includes('m.twitch.tv') ? ' <strong>(рекомендуется)</strong>' : ''}`
          );

          checkbox.querySelector('#VOTAutoTranslate').onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({autoTranslate: value});
            dbAutoTranslate = value;
            debug/* default.log */.Z.log('autoTranslate value changed. New value: ', dbAutoTranslate)
          }

          menuOptions.appendChild(checkbox);
        }

        if (dbShowVideoSlider !== undefined && !menuOptions.querySelector('#VOTShowVideoSlider')) {
          const checkbox = createMenuCheckbox(
            'VOTShowVideoSlider',
            dbShowVideoSlider,
            'Слайдер громкости видео'
          );

          checkbox.querySelector('#VOTShowVideoSlider').onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({showVideoSlider: value});
            dbShowVideoSlider = value;
            debug/* default.log */.Z.log('showVideoSlider value changed. New value: ', dbShowVideoSlider);
            if (dbShowVideoSlider === 1 && document.querySelector('.translationBtn').dataset.state === 'success') {
              addVideoSlider();
            } else {
              document.querySelector('#VOTVideoSlider')?.parentElement.remove();
            }
          }

          menuOptions.appendChild(checkbox);
        }

        if (dbAutoSetVolumeYandexStyle !== undefined && !menuOptions.querySelector('#VOTAutoSetVolume')) {
          const checkbox = createMenuCheckbox(
            'VOTAutoSetVolume',
            dbAutoSetVolumeYandexStyle,
            `Уменьшать громкость видео до ${config/* autoVolume */.IM * 100}%`
          );

          checkbox.querySelector('#VOTAutoSetVolume').onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({autoSetVolumeYandexStyle: value});
            dbAutoSetVolumeYandexStyle = value;
            debug/* default.log */.Z.log('autoSetVolumeYandexStyle value changed. New value: ', dbAutoSetVolumeYandexStyle);
          }

          menuOptions.appendChild(checkbox);
        }

        if ((window.location.hostname.includes('youtube.com') && !window.location.hostname.includes('m.youtube.com')) && dbSyncVolume !== undefined && !menuOptions.querySelector('#VOTSyncVolume')) {
          const checkbox = createMenuCheckbox(
            'VOTSyncVolume',
            dbSyncVolume,
            'Связать громкость перевода и видео (youtube)'
          );

          checkbox.querySelector('#VOTSyncVolume').onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({syncVolume: value});
            dbSyncVolume = value;
            debug/* default.log */.Z.log('syncVolume value changed. New value: ', dbSyncVolume);
          }

          menuOptions.appendChild(checkbox);
        }

        if (window.location.hostname.includes('youtube.com') && dbDontTranslateRuVideos !== undefined && !menuOptions.querySelector('#VOTDontTranslateRu')) {
          const checkbox = createMenuCheckbox(
            'VOTDontTranslateRu',
            dbDontTranslateRuVideos,
            `Не переводить с русского (youtube)`
          );

          checkbox.querySelector('#VOTDontTranslateRu').onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({dontTranslateRuVideos: value});
            dbDontTranslateRuVideos = value;
            debug/* default.log */.Z.log('dontTranslateRuVideos value changed. New value: ', dbDontTranslateRuVideos);
          }

          menuOptions.appendChild(checkbox);
        }
      }
    }

    transformBtn('none', 'Перевести видео');

    if (window.location.hostname.includes('youtube.com') && !window.location.hostname.includes('m.youtube.com')) {
      const syncVolumeObserver = new MutationObserver(async function(mutations) {
        mutations.forEach(async function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'aria-valuenow' && document.querySelector('#VOTVideoSlider')) {
            syncVideoVolumeSlider();
          }
        });
      });

      syncVolumeObserver.observe(document.querySelector('.ytp-volume-panel'), {
        attributes: true,
        childList: false,
        subtree: true,
        attributeOldValue: true,
      });
    }

    function setSelectMenuValues(from, to) {
      if (document.querySelector('#VOTSelectLanguages')) {
        console.log(`Set translation from ${from} to ${to}`);
        document.querySelector('#VOTTranslateFromLang').value = from;
        document.querySelector('#VOTTranslateToLang').value = to;
      }
    }

    // data - ytData or VideoData
    function setDetectedLangauge(data, lang) {
      switch (lang) {
        case 'en':
          data.detectedLanguage = lang;
          data.responseLanguage = 'ru';
          break;
        case 'ru':
          data.detectedLanguage = lang;
          data.responseLanguage = 'en';
          break;
        default:
          if (!Object.keys(availableFromLangs).includes(lang)) {
            return setDetectedLangauge('en');
          }

          data.detectedLanguage = lang;
      }

      setSelectMenuValues(data.detectedLanguage, data.responseLanguage);

      return data;
    }

    // data - ytData or VideoData
    function setResponseLangauge(data, lang) {
      switch (lang) {
        case 'en':
          data.responseLanguage = lang;
          data.detectedLanguage = 'ru';
          break;
        default:
          if (!Object.keys(availableToLangs).includes(lang)) {
            return setResponseLangauge('ru');
          }

          if (data.detectedLanguage === 'ru' && lang === 'ru') {
            data.detectedLanguage = 'en';
          }

          data.responseLanguage = lang;
      }

      setSelectMenuValues(data.detectedLanguage, data.responseLanguage);

      return data;
    }

    function stopTraslate() {
      // Default actions on stop translate
      audio.pause();
      $('video').off('.translate');
      deleteAudioSrc();
      document.querySelector('#VOTVideoSlider')?.parentElement.remove();
      document.querySelector('#VOTTranslationSlider')?.parentElement.remove();
      const downloadBtn = document.querySelector('.translationDownload');
      downloadBtn.href = '';
      downloadBtn.style.display = 'none';
      transformBtn('none', 'Перевести видео');
      if (volumeOnStart) {
        video.volume = volumeOnStart;
      }
    }

    function syncVideoVolumeSlider() {
      // Sync volume slider with original video (youtube only)
      const newSlidersVolume = document.querySelector('.ytp-volume-panel').getAttribute('aria-valuenow');
      if (document.querySelector('#VOTVideoSlider')) {
        document.querySelector('#VOTVideoSlider').value = newSlidersVolume;
      }

      if (document.querySelector('#VOTVideoVolume')) {
        document.querySelector('#VOTVideoVolume').innerText = `${newSlidersVolume}%`;
      }

      if (dbSyncVolume === 1) {
        tempOriginalVolume = Number(newSlidersVolume);
      }
    }

    function getVideoData() {
      const videoData = {};
      videoData.duration = video?.duration ? video.duration : 0;
      videoData.videoId = getVideoId(siteHostname);
      videoData.detectedLanguage = translateFromLang;
      videoData.responseLanguage = translateToLang;
      if (window.location.hostname.includes('youtube.com')) {
        let ytData = getYTVideoData();
        ytData = setDetectedLangauge(ytData, ytData.detectedLanguage);

        return {...videoData,...ytData};
      } else if (window.location.hostname.includes('rutube')) {
        videoData.detectedLanguage = 'ru';
        videoData.responseLanguage = 'en';
      } else if (window.location.hostname.includes('bilibili.com')) {
        videoData.detectedLanguage = 'zh';
      }

      return videoData;
    }

    const lipSync = (mode = false) => {
      debug/* default.log */.Z.log('lipsync video', video)
      if (!video) {
        return;
      }
      audio.currentTime = video.currentTime;
      audio.playbackRate = video.playbackRate;

      if (!mode) {
        debug/* default.log */.Z.log('lipsync mode is not set')
        return;
      }

      if (mode === "play") {
        debug/* default.log */.Z.log('lipsync mode is play')
        const audioPromise = audio.play();
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
        return;
      }
      if (mode === "pause") {
        debug/* default.log */.Z.log('lipsync mode is pause')
        audio.pause();
      }
    };

    function addVideoSlider() {
      if (dbShowVideoSlider !== 1 || document.querySelector(`#VOTVideoSlider`) || document.querySelector('.translationBtn').dataset.state !== 'success') {
        return;
      }

      const newVolume = (window.location.hostname.includes('youtube.com') && !dbAutoSetVolumeYandexStyle) ? document.querySelector('.ytp-volume-panel')?.getAttribute('aria-valuenow') : Math.round(video.volume * 100);
      tempOriginalVolume = newVolume;

      const slider = createMenuSlider(
        'VOTVideoSlider',
        newVolume,
        `Громкость видео: <b class = "volumePercent" id="VOTOriginalVolume">${newVolume}%</b>`
      );

      slider.querySelector('#VOTVideoSlider').oninput = (event) => {
        const {value} = event.target;
        video.volume = (value / 100);
        slider.querySelector('#VOTOriginalVolume').innerText = `${value}%`;

        if (dbSyncVolume !== 1) {
          return;
        }

        // Sync translation volume slider with video volume slider
        const translateVolumeSlider = document.querySelector('#VOTTranslationSlider');
        const translateVolume = Number(translateVolumeSlider.value);
        let finalValue = syncVolume(audio, value, translateVolume, tempOriginalVolume);

        translateVolumeSlider.value = finalValue;
        document.querySelector('#VOTTranslationVolume').innerText = `${finalValue}%`;
        tempVolume = finalValue;
        tempOriginalVolume = value;
      }

      const menuOptions = document.querySelector('.translationMenuOptions');
      menuOptions.appendChild(slider);
    }

    function addTranslationSlider() {
      if (document.querySelector(`#VOTTranslationSlider`) || document.querySelector('.translationBtn').dataset.state !== 'success') {
        return;
      }

      const defaultTranslateVolume = typeof(dbDefaultVolume) === 'number' ? dbDefaultVolume : 100;
      tempOriginalVolume = defaultTranslateVolume;
      const slider = createMenuSlider(
        'VOTTranslationSlider',
        defaultTranslateVolume,
        `Громкость перевода: <b class = "volumePercent" id="VOTTranslationVolume">${defaultTranslateVolume}%</b>`
      );

      slider.querySelector('#VOTTranslationSlider').oninput = async (event) => {
        let {value} = event.target;
        audio.volume = (value / 100);
        document.querySelector('#VOTTranslationVolume').innerText = `${value}%`;
        await updateDB({defaultVolume: Number(value)});
        dbDefaultVolume = Number(value);

        if (dbSyncVolume !== 1) {
          return;
        }

        // Sync translation volume slider with video volume slider
        const videoVolumeSlider = document.querySelector('#VOTVideoSlider');
        const videoVolume = Number(videoVolumeSlider.value);
        let finalValue = syncVolume(video, value, videoVolume, tempVolume);

        videoVolumeSlider.value = finalValue;
        document.querySelector('#VOTOriginalVolume').innerText = `${finalValue}%`;
        tempOriginalVolume = finalValue;
        tempVolume = value;
      }

      const menuOptions = document.querySelector('.translationMenuOptions');
      menuOptions.appendChild(slider);
    }


    const videoValidator = () => {
      if (window.location.hostname.includes('youtube.com')) {
        debug/* default.log */.Z.log("VideoValidator videoData: ", videoData)
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

      if (videoData.duration > 14_400) {
        throw "VOT: Видео слишком длинное";
      }

      return true;
    }

    const translateExecutor = (VIDEO_ID) => {
      debug/* default.log */.Z.log('Run videoValidator');
      videoValidator();
      debug/* default.log */.Z.log('Run translateFunc');
      translateFunc(VIDEO_ID, videoData.detectedLanguage, videoData.responseLanguage);
    }

    const translateFunc = (VIDEO_ID, requestLang, responseLang) => translateVideo(`${siteTranslates[siteHostname]}${VIDEO_ID}`, translateFuncParam, requestLang, responseLang, (success, urlOrError) => {
      debug/* default.log */.Z.log('[exec callback] translateVideo')
      if (getVideoId(siteHostname) !== VIDEO_ID) {
        return;
      }

      if (!success) {
        transformBtn('error', urlOrError);
        if (urlOrError.includes('Перевод займёт')) {
          clearTimeout(autoRetry);
          autoRetry = setTimeout(() => {
            translateFunc(VIDEO_ID, requestLang, responseLang);
          }, 60_000)
        }

        throw urlOrError;
      }

      volumeOnStart = video?.volume;
      audio.src = urlOrError;

      if (typeof(dbDefaultVolume) === 'number') {
        audio.volume = dbDefaultVolume / 100;
      }

      if (siteEvent !== null && siteEvent !== 'invidious' && siteEvent !== 'piped') {
        document.body.addEventListener(siteEvent, () => {
          stopTraslate();
          syncVideoVolumeSlider();
        });
      }

      if (['twitch', 'vimeo', 'facebook', 'rutube', 'twitter', 'bilibili.com'].includes(siteHostname)) {
        const mutationObserver = new MutationObserver(async function(mutations) {
          mutations.forEach(async function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'src' && mutation.target === video && mutation.target.src !== '') {
              stopTraslate();
              firstPlay = true;
            }
          });
        });

        mutationObserver.observe(videoContainer, {
          attributes: true,
          childList: false,
          subtree: true,
          attributeOldValue: true,
        });
      }

      // // fix for video.paused stuck bug
      // if (video.paused) {
      //   if (siteHostname === 'twitter') {
      //     video = $('div[data-testid="videoComponent"] > div > div > video')[0];
      //   } else if (siteHostname === 'vk') {
      //     video = $(vkSelector).find('video')[0];
      //   } else if (siteHostname === 'youtube' && siteEvent === 'piped') {
      //     video = $(pipedSelector).find('video')[0];
      //   }
      // }

      if (video && !video.paused) {
        debug/* default.log */.Z.log('video is playing lipsync 1')
        lipSync("play");
      }

      $("video").on("playing.translate ratechange.translate", () => {
        debug/* default.log */.Z.log('video ratechange')
        lipSync();
      });

      $("video").on("play.translate canplaythrough.translate", () => {
        debug/* default.log */.Z.log('video canplaythrough')
        lipSync();

        if (video && !video.paused) {
          debug/* default.log */.Z.log('video is playing lipsync 2')
          lipSync("play");
        }
      });

      $("video").on("pause.translate waiting.translate", () => {
        debug/* default.log */.Z.log('video is waiting')
        lipSync("pause");
      });

      transformBtn('success', 'Выключить');
      addVideoSlider();
      addTranslationSlider();

      if (typeof(dbAutoSetVolumeYandexStyle) === 'number' && dbAutoSetVolumeYandexStyle) {
        video.volume = config/* autoVolume */.IM;
        if (document.querySelector('#VOTVideoSlider')) {
          document.querySelector('#VOTVideoSlider').value = config/* autoVolume */.IM * 100;
        }

        if (document.querySelector('#VOTOriginalVolume')) {
          document.querySelector('#VOTOriginalVolume').innerText = `${config/* autoVolume */.IM * 100}%`;
        }
      }

      const downloadBtn = document.querySelector('.translationDownload');
      downloadBtn.href = urlOrError;
      downloadBtn.style.display = 'initial';
    });


    document.addEventListener("click", (event) => {
      const block = document.querySelector('.translationBlock');
      const menuContainer = document.querySelector('.translationMenuContent');
      const isBlock = block || event.target === block ? block.contains(event.target) : false;
      const isContent = menuContainer || event.target === menuContainer ? menuContainer.contains(event.target) : false;
      const isVideo = videoContainer || event.target === videoContainer ? videoContainer.contains(event.target) : false;

      debug/* default.log */.Z.log(`[document click] ${isBlock} ${isContent} ${isVideo}`)
      if (!(!isBlock && !isContent)) return;
      if (!isVideo) logout(0);

      menuContainer.style.display = 'none';
      openedMenu = false;
    })

    if (siteHostname === 'pornhub') {
      if (window.location.pathname.includes('view_video.php')) {
        document.querySelector('.original.mainPlayerDiv > video-element > div').addEventListener("mousemove", resetTimer);
        document.querySelector('.original.mainPlayerDiv > video-element > div').addEventListener("mouseout", () => logout(0));
      } else if (window.location.pathname.includes('embed/')) {
        document.querySelector('#player').addEventListener("mousemove", resetTimer);
        document.querySelector('#player').addEventListener("mouseout", () => logout(0));
      }
    } else {
      videoContainer.addEventListener("mousemove", resetTimer);
      videoContainer.addEventListener("mouseout", () => logout(0));
    }

    document.querySelector('.translationBlock').addEventListener("mousemove", (event) => changeOpacityOnEvent(event, timer, opacityRatio));
    document.querySelector('.translationMenuContent').addEventListener("mousemove", (event) => changeOpacityOnEvent(event, timer, opacityRatio));

    document.addEventListener("touchstart", (event) => changeOpacityOnEvent(event, timer, opacityRatio));
    document.addEventListener("touchmove", (event) => changeOpacityOnEvent(event, timer, opacityRatio));
    document.addEventListener("touchend", (event) => changeOpacityOnEvent(event, timer, opacityRatio));

    document.querySelector('.translationBtn').addEventListener('click', async (event) => {
      debug/* default.log */.Z.log('[click translationBtn] before all functions & methods');
      event.stopPropagation();
      event.stopImmediatePropagation();

      // check if the audio source is not empty
      if (audio.src) {
        debug/* default.log */.Z.log('[click translationBtn] audio.src is not empty')
        stopTraslate();
        return;
      }

      try {
        debug/* default.log */.Z.log('[click translationBtn] trying execute translation')
        const VIDEO_ID = getVideoId(siteHostname);

        if (!VIDEO_ID) {
          throw "VOT: Не найдено ID видео"; // not found video id
        }

        translateExecutor(VIDEO_ID);
      } catch (err) {
        transformBtn('error', String(err).substring(4, err.length))
        console.error(err);
      }
    });

    video.addEventListener('progress', event => {
      event.stopPropagation();

      if (firstPlay && dbAutoTranslate === 1) {
        const VIDEO_ID = getVideoId(siteHostname);

        if (!VIDEO_ID) {
          throw "VOT: Не найдено ID видео";
        }

        try {
          translateExecutor(VIDEO_ID);
          firstPlay = false;
        } catch (err) {
          transformBtn('error', String(err).substring(4, err.length));
          firstPlay = false;
        }
      }
    });
  }


  async function initWebsite() {
    if (config_regexes.youtubeRegex.test(window.location.hostname)) {
      debug/* default.log */.Z.log('[entered] YT Regex Passed', config_regexes.youtubeRegex);
      const ytPageEnter = (event) => {
        const videoContainer = document.querySelectorAll(config_selectors.youtubeSelector)[0];
        if (videoContainer != null) {
          debug/* default.log */.Z.log('[exec] translateProccessor youtube on page enter')
          translateProccessor(videoContainer, 'youtube', 'yt-translate-stop');
        } else {
          if (ytplayer == null || ytplayer.config === undefined || ytplayer.config === null) {
            debug/* default.log */.Z.log('[exec] ytplayer is null')
            return;
          }
          ytplayer.config.args.jsapicallback = (jsApi) => {
            debug/* default.log */.Z.log('[exec] translateProccessor youtube on page enter (ytplayer.config.args.jsapicallback)')
            translateProccessor(videoContainer, 'youtube', 'yt-translate-stop');
          }
        }
      };

      document.addEventListener('spfdone', ytPageEnter);
      document.addEventListener('yt-navigate-finish', ytPageEnter);

      const ytPageLeave = () => {
        document.body.dispatchEvent(new Event('yt-translate-stop'));
      };

      document.addEventListener('spfrequest', ytPageLeave);
      document.addEventListener('yt-navigate-start', ytPageLeave);

      // ytPageEnter(null);
    } else if (window.location.hostname.includes('twitch.tv')) {
      debug/* default.log */.Z.log('[entered] Twitch');
      if (window.location.hostname.includes('m.twitch.tv') && (window.location.pathname.includes('/videos/') || window.location.pathname.includes('/clip/'))) {
        debug/* default.log */.Z.log('[entered] twitch mobile');
        const el = await waitForElm(config_selectors.twitchMobileSelector);
        if (el) {
          await sleep(200);
          await translateProccessor(document.querySelector(config_selectors.twitchMobileSelector), 'twitch', null);
          // Тоже самое, что и вариант снизу, но по идеи должен быть более производительным (так же требует дабл клика)
          const mutationObserver = new MutationObserver(async function(mutations) {
            mutations.forEach(async function(mutation) {
              if (mutation.type === 'attributes' && mutation.attributeName === 'src' && mutation.target === document.querySelector(config_selectors.twitchMobileSelector)?.querySelector('video')) {
                await sleep(1000);
                await translateProccessor(document.querySelector(config_selectors.twitchMobileSelector), 'twitch', null);
              }
            });
          });

          mutationObserver.observe(document.querySelector(config_selectors.twitchMobileSelector), {
            attributes: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
      } else if (window.location.hostname.includes('player.twitch.tv') || window.location.pathname.includes('/videos/') || window.location.pathname.includes('/clip/')) {
        debug/* default.log */.Z.log('[entered] twitch')
        const el = await waitForElm(config_selectors.twitchSelector);
        if (el) {
          await sleep(200);
          await translateProccessor(el, 'twitch', null);
        }
      }
    } else if (window.location.hostname.includes('xvideos.com')) {
      debug/* default.log */.Z.log('[entered] xvideos')
      await sleep(1000);
      await translateProccessor(document.querySelector('.video-bg-pic'), 'xvideos', null);
    } else if (window.location.hostname.includes('pornhub.com')) {
      debug/* default.log */.Z.log('[entered] pornhub')
      await sleep(1000);
      await translateProccessor(document.querySelector('.mgp_videoWrapper'), 'pornhub', null);
    } else if (sitesInvidious.includes(window.location.hostname)) { // Need an additional extension to work in chrome-like browsers
      debug/* default.log */.Z.log('[entered] invidious')
      await translateProccessor(document.querySelector('#player'), 'youtube', null);
    } else if (sitesPiped.includes(window.location.hostname)) { // Need an additional extension to work in chrome-like browsers
      debug/* default.log */.Z.log('[entered] piped')
      const el = await waitForElm(config_selectors.pipedSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId('youtube');
        await translateProccessor(el, 'youtube', 'piped');
        setInterval(async () => {
          videoIDNew = getVideoId('youtube');
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(document.querySelector(config_selectors.pipedSelector), 'youtube', 'piped');
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (/^(www.|m.)?vk.(com|ru)$/.test(window.location.hostname)) {
      debug/* default.log */.Z.log('[entered] vk.com')
      const el = await waitForElm(config_selectors.vkSelector);
      if (el) {
        await translateProccessor(document.querySelector(config_selectors.vkSelector), 'vk', null);
        let videoIDVKNew;
        let videoIDVK = getVideoId('vk');
        setInterval(async () => {
          videoIDVKNew = getVideoId('vk');
          if (videoIDVK !== videoIDVKNew) {
            if (videoIDVKNew) {
              const el = await waitForElm(config_selectors.vkSelector);
              if (el) {
                await translateProccessor(el, 'vk', null);
              }
            }
            videoIDVK = videoIDVKNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes('vimeo.com')) {
      debug/* default.log */.Z.log('[entered] vimeo.com')
      const el = await waitForElm(config_selectors.vimeoSelector);
      if (el) {
        await sleep(1000);
        await translateProccessor(document.querySelector(config_selectors.vimeoSelector), 'vimeo', null);
      }
    } else if (window.location.hostname.includes('9gag.com')) {
      await sleep(1000);
      await translateProccessor(document.querySelector(config_selectors.gagSelector), '9gag', null);
    } else if (window.location.hostname.includes('rutube.ru')) {
      const elementSelector = window.location.pathname.includes('/play/embed') ? '#app > div > div' : '.video-player > div > div > div:nth-child(2)';

      const el = await waitForElm(elementSelector);
      if (el) {
        await translateProccessor(el, 'rutube', null);
      }
    } else if (window.location.hostname.includes('bilibili.com')) {
      if (window.location.pathname.includes('/video/')) {

        const el = await waitForElm(config_selectors.bilibilicomSelector);
        if (el) {
          await translateProccessor(el, 'bilibili.com', null);
        }
      } else if (window.location.pathname.includes('/blackboard/webplayer/embed-old.html')) {
        const el = await waitForElm('video');
        if (el) {
          await translateProccessor(el.parentElement, 'bilibili.com', null);
        }
      }

    }
  }

  initWebsite();
}

src_main().catch((e) => {
  console.error(e);
});
})();

/******/ })()
;