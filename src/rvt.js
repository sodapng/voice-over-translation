import { getUUID } from './getUUID.js';
import { yandexRequests } from './yandexRequests.js';
import { workerHost, yandexHmacKey, yandexUserAgent } from './config/config.js';

// Request video translation from Yandex API
async function requestVideoTranslation(url, unknown1, requestLang, responseLang, callback) {
  // Initialize variables
  const deviceId = getUUID(true);
  const body = yandexRequests.encodeRequest(url, deviceId, unknown1, requestLang, responseLang);

  try {
    // Create a key from the HMAC secret
    const utf8Encoder = new TextEncoder("utf-8");
    const key = await window.crypto.subtle.importKey('raw', utf8Encoder.encode(yandexHmacKey), { name: 'HMAC', hash: {name: 'SHA-256'}}, false, ['sign', 'verify']);
    // Sign the body with the key
    const signature = await window.crypto.subtle.sign('HMAC', key, body);
    // Convert the signature to a hex string
    const hexSignature = Array.from(new Uint8Array(signature), x => x.toString(16).padStart(2, '0')).join('');
    // Create a fetch options object with headers and body
    const options = {
      url: `https://${workerHost}/video-translation/translate`,
      method: "POST",
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
      data: String.fromCharCode(...body),
      responseType: "arraybuffer"
    };
    // Send the request using GM_xmlhttpRequest
    GM_xmlhttpRequest({
      ...options,
      onload: (http) => {
        callback((http.status === 200), http.response);
      },
      onerror: (error) => {
        callback(false);
      }
    });
  } catch(exception) {
    // Handle errors
    callback(false);
  }
}

export default requestVideoTranslation;