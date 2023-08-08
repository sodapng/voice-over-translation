import { getUUID } from "./getUUID.js";
import { yandexRequests } from "./yandexRequests.js";
import { workerHost, yandexHmacKey } from "./config/config-cloudflare.js";
import { yandexUserAgent } from "./config/config.js";
import debug from "./utils/debug.js";

// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  unknown1,
  requestLang,
  responseLang,
  callback
) {
  // Initialize variables
  let response;
  let responseBody;
  const deviceId = getUUID(true);
  const body = yandexRequests.encodeRequest(
    url,
    deviceId,
    unknown1,
    requestLang,
    responseLang
  );

  try {
    debug.log("requestVideoTranslation");
    // Create a key from the HMAC secret
    const utf8Encoder = new TextEncoder("utf-8");
    const key = await window.crypto.subtle.importKey(
      "raw",
      utf8Encoder.encode(yandexHmacKey),
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign", "verify"]
    );
    // Sign the body with the key
    const signature = await window.crypto.subtle.sign("HMAC", key, body);
    // Convert the signature to a hex string
    const hexSignature = Array.from(new Uint8Array(signature), (x) =>
      x.toString(16).padStart(2, "0")
    ).join("");
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
          "Vtrans-Signature": hexSignature,
          "Sec-Vtrans-Token": getUUID(false),
        },
        body: String.fromCharCode(...body),
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
