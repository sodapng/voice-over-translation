import { getUUID } from "./getUUID.js";
import { getSignature } from "./getSignature.js";
import { yandexProtobuf } from "./yandexProtobuf.js";
import debug from "./utils/debug.js";

// Request stream ping from Yandex API
async function requestStreamPing(pingId, callback) {
  try {
    debug.log("requestStreamPing");
    // ! CURRENT CLOUDFLARE WORKER DOESN'T SUPPORT STREAM TRANSLATIONS
    const yar = await import(
      `./yandexRequest${BUILD_MODE === "cloudflare" ? "-cloudflare" : ""}.js`
    );
    const yandexRequest = yar.default;
    debug.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeStreamPingRequest(pingId);
    // Send the request
    await yandexRequest(
      "/stream-translation/ping-stream",
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

export default requestStreamPing;
