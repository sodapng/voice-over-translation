import { getUUID } from "./getUUID.js";
import { getSignature } from "./getSignature.js";
import { yandexProtobuf } from "./yandexProtobuf.js";
import { workerHost } from "./config/config-cloudflare.js";
import { yandexUserAgent } from "./config/config.js";
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
  let response;
  let responseBody;
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
          Accept: "application/x-protobuf",
          "Accept-Language": "en",
          "Content-Type": "application/x-protobuf",
          "User-Agent": yandexUserAgent,
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Mode": "no-cors",
          "Vtrans-Signature": await getSignature(body),
          "Sec-Vtrans-Token": getUUID(false),
        },
        body: Array.from(body)
      }),
    };
    // Fetch the translation from the worker host
    response = await fetch(
      `https://${workerHost}/video-translation/translate`,
      options
    );
    debug.log(response.status, response);
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

export default requestVideoTranslation;
