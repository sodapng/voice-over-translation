import { getUUID } from "./getUUID.js";
import { getSignature } from "./getSignature.js";
import { yandexProtobuf } from "./yandexProtobuf.js";
import { workerHost, yandexUserAgent } from "./config/config.js";
import debug from "./utils/debug.js";

// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  duration,
  requestLang,
  responseLang,
  callback
) {
  // Initialize variables
  const deviceId = getUUID(true);
  const body = yandexProtobuf.encodeTranslationRequest(
    url,
    deviceId,
    duration,
    requestLang,
    responseLang
  );

  try {
    debug.log("requestVideoTranslation");
    // Create a fetch options object with headers and body
    const options = {
      // url: `https://${workerHost}/stream-translation/whitelist-stream`,
      // url: `https://${workerHost}/stream-translation/translate-stream`,
      url: `https://${workerHost}/video-translation/translate`,
      method: "POST",
      headers: {
        Accept: "application/x-protobuf",
        "Accept-Language": "en",
        "Content-Type": "application/x-protobuf",
        "User-Agent": yandexUserAgent,
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Mode": "no-cors",
        "sec-ch-ua": null,
        "sec-ch-ua-mobile": null,
        "sec-ch-ua-platform": null,
        "Vtrans-Signature": await getSignature(body),
        "Sec-Vtrans-Token": getUUID(false),
      },
      binary: true,
      data: new Blob([body]),
      responseType: "arraybuffer",
    };
    // Send the request using GM_xmlhttpRequest
    GM_xmlhttpRequest({
      ...options,
      onload: (http) => {
        debug.log(http.status, http);
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

export default requestVideoTranslation;
