import { getUUID } from "./getUUID.js";
import { getSignature } from "./getSignature.js";
import { yandexProtobuf } from "./yandexProtobuf.js";
import debug from "./utils/debug.js";

// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  duration,
  requestLang,
  responseLang,
  callback,
) {
  try {
    debug.log("requestVideoTranslation");
    const yar = await import(
      `./yandexRequest${BUILD_MODE === "cloudflare" ? "-cloudflare" : ""}.js`
    );
    const yandexRequest = yar.default;
    debug.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeTranslationRequest(
      url,
      duration,
      requestLang,
      responseLang,
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

export default requestVideoTranslation;
