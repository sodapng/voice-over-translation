const getUUID = require('./getUUID.js');
const yandexRequests = require('./yandexRequests.js');
const { workerHost, yandexHmacKey, yandexUserAgent } = require('./config/config-cloudflare.js');

async function requestVideoTranslationCloudflare(url, unknown1, requestLang, responseLang, callback) {
    var response;
    var responseBody;
  
    var deviceId = getUUID(true);
    var body = yandexRequests.encodeRequest(url, deviceId, unknown1, requestLang, responseLang);
  
    try {
      var utf8Encoder = new TextEncoder("utf-8");
      var key = await window.crypto.subtle.importKey('raw', utf8Encoder.encode(yandexHmacKey), { name: 'HMAC', hash: {name: 'SHA-256'}}, false, ['sign', 'verify']);
      var signature = await window.crypto.subtle.sign('HMAC', key, body);
      response = await fetch(`https://${workerHost}/video-translation/translate`, {
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
                  "Vtrans-Signature": Array.prototype.map.call(new Uint8Array(signature), x => x.toString(16).padStart(2, '0')).join(''),
                  "Sec-Vtrans-Token": getUUID(false)
              },
              body: String.fromCharCode.apply(null, body)
          })
      });
      responseBody = await response.arrayBuffer();
    } catch(exception) {
        response = {status: -1};
        responseBody = exception;
    }
  
    callback(response.status == 200, responseBody);
  }

export default requestVideoTranslationCloudflare;
