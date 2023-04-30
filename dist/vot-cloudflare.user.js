// ==UserScript==
// @name [VOT Cloudflare] - Voice Over Translation
// @name:ru [VOT Cloudflare] - Закадровый перевод видео
// @description A small extension that adds a Yandex Browser video translation to other browsers
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @version 1.1.2.2
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
// @connect api.browser.yandex.ru
// @downloadURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js
// @grant GM_xmlhttpRequest
// @grant GM_info
// @homepageURL https://github.com/ilyhalight/voice-over-translation/issues
// @icon https://translate.yandex.ru/icons/favicon.ico
// @inject-into page
// @namespace vot-cloudflare
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @require https://cdn.jsdelivr.net/gh/dcodeIO/protobuf.js@6.X.X/dist/protobuf.min.js
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
___CSS_LOADER_EXPORT___.push([module.id, ".translationBlock {\r\n  padding: 0.25rem 0.45rem !important;\r\n  width: max-content;\r\n  position: absolute;\r\n  background: #2e2f34;\r\n  border-radius: 0.5rem !important;\r\n  left: 50%;\r\n  top: 5rem;\r\n  transform: translate(-50%);\r\n  text-align: center;\r\n  opacity: 0;\r\n  transition: opacity 1s;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  z-index: 10;\r\n}\r\n\r\n.translationBtn {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  color: #fff;\r\n  padding-right: 0.25rem !important;\r\n  cursor: pointer;\r\n  font: 600 12px / 14px \"Segoe UI\", BlinkMacSystemFont, Arial, sans-serif;\r\n}\r\n\r\n.translationBlock:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.translationMenu {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  border-left: 1px solid #424348;\r\n  max-height: 16px;\r\n  max-width: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.translationMenuIcon {\r\n  padding: 0 10px !important;\r\n  width: 24px;\r\n}\r\n\r\n.translationIAlice {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  max-height: 26px;\r\n  max-width: 50px;\r\n}\r\n\r\n.translationIconAlice {\r\n  height: 24px !important;\r\n  width: 24px !important;\r\n}\r\n\r\n.translationITranslate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  max-height: 20px;\r\n  max-width: 20px;\r\n}\r\n\r\n.translationMenuContent {\r\n  position: absolute;\r\n  background: #2e2f34;\r\n  color: #fff;\r\n  display: none;\r\n  border-radius: 1rem !important;\r\n  left: 50%;\r\n  top: 9rem;\r\n  transform: translate(-50%);\r\n  text-align:left;\r\n  font: 600 14px / 16px \"Segoe UI\", BlinkMacSystemFont, Arial, sans-serif !important;\r\n\r\n  width: 300px;\r\n  height: 375px;\r\n  opacity: 0;\r\n  z-index: 10;\r\n  transition: opacity 0.5s ease;\r\n}\r\n\r\n.translationVolumeSlider {\r\n  -webkit-appearance: none !important;\r\n  appearance: none !important;\r\n  width: 80% !important;\r\n  height: 8px !important;\r\n  outline: none !important;\r\n  opacity: 0.7;\r\n  /* background: #3C3F4D !important; */\r\n  background: rgb(253, 222, 85, 0.6) !important;\r\n  border: none !important;\r\n  border-radius: 2rem !important;\r\n  -webkit-transition: 0.2s !important;\r\n  transition: opacity 0.2s ease !important;\r\n}\r\n\r\n.translationVolumeSlider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.translationVolumeSlider::-webkit-slider-thumb {\r\n  -webkit-appearance: none !important;\r\n  appearance: none !important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n  border-radius: 50% !important;\r\n  border: none !important;\r\n  background: #fff !important;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.translationVolumeSlider::-moz-range-thumb {\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n  border-radius: 50% !important;\r\n  border: none !important;\r\n  background: #fff !important;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.translationVolumeSlider::-ms-thumb {\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n  border-radius: 50% !important;\r\n  border: none !important;\r\n  background: #fff !important;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.translationVolumeSlider::-ms-fill-lower {\r\n  height: 8px !important;\r\n  border-radius: 2rem !important;\r\n  background: linear-gradient(90.1deg, rgba(186, 153, 244, 0.85) -5.78%, rgba(236, 138, 202, 0.7) 56.46%, rgba(239, 168, 117, 0.6) 108.93%) !important;\r\n}\r\n\r\n.translationVolumeSlider::-moz-range-progress {\r\n  height: 8px !important;\r\n  border-radius: 2rem !important;\r\n  background: linear-gradient(90.1deg, rgba(186, 153, 244, 0.85) -5.78%, rgba(236, 138, 202, 0.7) 56.46%, rgba(239, 168, 117, 0.6) 108.93%) !important;\r\n}\r\n\r\n.translationHeader {\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.translationMainHeader {\r\n  margin: 16px !important;\r\n  color: #FFF;\r\n  font: 900 14px / 16px \"Segoe UI\", BlinkMacSystemFont, Arial, sans-serif !important;\r\n}\r\n\r\n.translationMenuContainer {\r\n  width: 100%;\r\n  padding-left: 15px !important;\r\n  padding-top: 5px !important;\r\n  display: inline-block !important;\r\n}\r\n\r\n.translationMenuContainer > input {\r\n  appearance: auto !important;\r\n}\r\n\r\n.translationMenuText {\r\n  color: #FFF;\r\n  display: inline-flex;\r\n  width: 80%;\r\n}\r\n\r\n.translationVolumeBox, .translationVideoVolumeBox {\r\n  padding-top: 0.5rem !important;\r\n}\r\n\r\n.translationDropDB {\r\n  border: none;\r\n  border-radius: 4px !important;\r\n  background: #5426FF !important;\r\n  color: #fff !important;\r\n  padding: 6px 16px !important;\r\n  cursor: pointer;\r\n}\r\n\r\n.translationAbsoluteContainer {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin-bottom: 2rem !important;\r\n  margin-left: 15px !important;\r\n  margin-top: 5px !important;\r\n}\r\n\r\n.translationDownload {\r\n  background: #5426FF !important;\r\n  color: #fff !important;\r\n  padding: 2px 10px !important;\r\n  border-radius: 4px !important;\r\n  margin-left: 58px !important;\r\n  cursor: pointer;\r\n}", ""]);
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
const workerHost = "cors.yandexproxy.workers.dev";
const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";
const yandexUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 CriOS/104.0.5112.114 YaBrowser/22.9.4.633.10 SA/3 Mobile/15E148 Safari/604.1";


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
          "User-Agent": yandexUserAgent,
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
  encodeRequest: function(url, deviceId, unknown1, requestLang, responseLang) {
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
  decodeResponse: function(response) {
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
// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/index.js





async function src_main() {
  const rvt = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/rvt-cloudflare.js"));

  const requestVideoTranslation = rvt.default;

  if (false) {}

  const defaultVideoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation (uses with option "autoSetVolumeYandexStyle")
  const availableLangs = ['ru', 'en', 'zh', 'fr', 'it', 'es']; // available languages for translation

  const twitterSelector = 'article[data-testid="tweet"][tabindex="-1"]';
  const twitchMobileSelector = 'main > div > section > div > div > div';
  const twitchSelector = '.video-ref';
  const vkSelector = '.videoplayer_media';
  const facebookSelector = 'div[data-pagelet="WatchPermalinkVideo"]';
  const pipedSelector = '.player-container';

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

  const sitesChromiumBlocked = Object.assign([], sitesInvidious, sitesPiped);

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

      debug/* default.log */.Z.log(`VOT: Added translation button (target: ${target})`)
      $(elem).append($translationBlock);
    } else {
      debug/* default.log */.Z.log(`VOT: Already added translation button (target: ${target})`, elem)
    }
  };

  function addTranslationMenu(elem, target = 'desktop') {
    if (!$(elem).has($translationMenuContent).length) {
      if (target === 'yt-mobile') {
        $translationMenuContent.css('top', '5rem');
      } else if (target === 'twitter') {
        $translationMenuContent.css('top', '55%');
      }

      debug/* default.log */.Z.log(`VOT: Added translation menu (target: ${target})`)
      $(elem).append($translationMenuContent);
    } else {
      debug/* default.log */.Z.log(`VOT: Already added translation menu (target: ${target})`, elem)
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
      case "9gag" || 0:
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

  if (true) {
    var translationPanding = false;
  }

  function secsToStrTime(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    if (minutes >= 60) {
      return 'Перевод займёт больше часа';
    } else if (minutes >= 10 && minutes % 10) {
      return `Перевод займёт ${minutes} минут`;
    } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
      return 'Перевод займёт около минуты';
    } else {
      return `Перевод займёт ${minutes} минуты`;
    }
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

    requestVideoTranslation(url, unknown1, requestLang, responseLang, function (success, response) {
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
      debug/* default.log */.Z.log('Run videoValidator');
      videoValidator();
      debug/* default.log */.Z.log('Run translateFunc');
      translateFunc(VIDEO_ID, videoData.detectedLanguage, videoData.responseLanguage);
    }

    const translateFunc = (VIDEO_ID, requestLang, responseLang) => translateVideo(`${siteTranslates[siteHostname]['url']}${VIDEO_ID}`, siteTranslates[siteHostname]['func_param'], requestLang, responseLang, function (success, urlOrError) {
      debug/* default.log */.Z.log('[exec callback] translateVideo')
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
        } else if (siteEvent !== null && siteEvent !== 'invidious' && siteEvent !== 'piped') {
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
            video = $(vkSelector).find('video')[0]
          } else if (siteHostname === 'youtube' && siteEvent === 'piped') {
            video = $(pipedSelector).find('video')[0]
          }
        }

        if (video && !video.paused) {
          debug/* default.log */.Z.log('video is playing lipsync 1')
          lipSync("play");
        }

        $("video").on("playing.translate ratechange.translate", function () {
          debug/* default.log */.Z.log('video ratechange')
          lipSync();
        });

        $("video").on("play.translate canplaythrough.translate", function () {
          debug/* default.log */.Z.log('video canplaythrough')
          lipSync();

          if (video && !video.paused) {
            debug/* default.log */.Z.log('video is playing lipsync 2')
            lipSync("play");
          }
        });

        $("video").on("pause.translate waiting.translate", function () {
          debug/* default.log */.Z.log('video is waiting')
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
        debug/* default.log */.Z.log('lipsync mode is pause')
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

    $translationBtn.click(async function (event) {
      event.stopPropagation();
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
    } else if (sitesInvidious.includes(window.location.hostname)) { // Need an additional extension to work in chrome-like browsers
      await translateProccessor($('#player'), 'youtube', null);
    } else if (sitesPiped.includes(window.location.hostname)) { // Need an additional extension to work in chrome-like browsers
      const el = await waitForElement(pipedSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId('youtube');
        await translateProccessor(el, 'youtube', 'piped');
        setInterval(async () => {
          videoIDNew = getVideoId('youtube');
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor($(pipedSelector), 'youtube', 'piped');
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
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

src_main().catch((e) => {
  console.log(e);
});

})();

/******/ })()
;