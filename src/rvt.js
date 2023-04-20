import { getUUID } from './getUUID.js';
import { yandexRequests } from './yandexRequests.js';
import { workerHost, yandexHmacKey, yandexUserAgent } from './config/config.js';

function requestVideoTranslation(url, unknown1, requestLang, responseLang, callback) {
    var deviceId = getUUID(true);
      var body = yandexRequests.encodeRequest(url, deviceId, unknown1, requestLang, responseLang);
  
    var utf8Encoder = new TextEncoder("utf-8");
    window.crypto.subtle.importKey('raw', utf8Encoder.encode(yandexHmacKey), { name: 'HMAC', hash: {name: 'SHA-256'}}, false, ['sign', 'verify']).then(key => {
      window.crypto.subtle.sign('HMAC', key, body).then(signature => {
        GM_xmlhttpRequest({url: `https://${workerHost}/video-translation/translate`, method: "POST", headers: {
          "Accept": "application/x-protobuf",
          "Accept-Language": "en",
          "Content-Type": "application/x-protobuf",
          "User-Agent": yandexUserAgent,
          "Pragma": "no-cache",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Mode": "no-cors",
          "sec-ch-ua": null,
          "sec-ch-ua-mobile": null,
          "sec-ch-ua-platform": null,
          "Vtrans-Signature": Array.prototype.map.call(new Uint8Array(signature), x => x.toString(16).padStart(2, '0')).join(''),
          "Sec-Vtrans-Token": getUUID(false)
        }, data: String.fromCharCode.apply(null, body), responseType: "arraybuffer", onload: (http) => {
          callback((http.status === 200), http.response);
        }, onerror: (error) => {
          callback(false);
        }});
      });
    });
  }

export default requestVideoTranslation;
