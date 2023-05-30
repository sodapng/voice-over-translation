import protobuf from 'protobufjs';
import crypto from 'crypto';
import axios from 'axios';

const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";
const yandexUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 CriOS/104.0.5112.114 YaBrowser/22.9.4.633.10 SA/3 Mobile/15E148 Safari/604.1";

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
export const yandexRequests = {
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

function getUUID(isLower) {
    const uuid = ([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    return isLower ? uuid : uuid.toUpperCase();
}

function requestVideoTranslation (url, unknown1, callback) {
  const deviceId = getUUID(true);
  const body = yandexRequests.encodeRequest(url, deviceId, unknown1);

  const utf8Encoder = new TextEncoder("utf-8");
  crypto.subtle.importKey('raw', utf8Encoder.encode(yandexHmacKey), { name: 'HMAC', hash: {name: 'SHA-256'}}, false, ['sign', 'verify']).then(key => {
    crypto.subtle.sign('HMAC', key, body).then(async (signature) => {
        await axios({
            url: 'https://api.browser.yandex.ru/video-translation/translate',
            method: 'post',
            headers: {
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
            },
            withCredentials: true,
            responseType: 'arraybuffer',
            data: String.fromCharCode.apply(null, body)
        }).then((response) => {
            callback((response.status === 200), response.data);
        }).catch((error) => {
            callback(false);
        });
    });
  });
}

function translateVideo(url, callback) {
  requestVideoTranslation(url, 0x40_75_50_00_00_00_00_00, (success, response) => {
    if (!success) {
      callback(false, "Failed to request video translation");
      return;
    }

    const translateResponse = yandexRequests.decodeResponse(response);
    switch (translateResponse.status) {
      case 0:
        callback(false, translateResponse.message);
        return;
      case 1:
        const hasUrl = translateResponse.url !== null;
        callback(hasUrl, hasUrl ? translateResponse.url : "Audio link not received");
        return;
      case 2:
        callback(false, "The translation will take a few minutes");
        return;
    }
  });
}

export default translateVideo;
