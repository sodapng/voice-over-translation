import { workerHost } from "./config/config-cloudflare.js";
import { yandexUserAgent } from "./config/config.js";
import debug from "./utils/debug.js";

async function yandexRequest(
  path,
  body,
  headers,
  callback
) {
  let response;
  let responseBody;
  try {
    debug.log("yandexRequest:", path);
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
          ...{
            "Accept": "application/x-protobuf",
            "Accept-Language": "en",
            "Content-Type": "application/x-protobuf",
            "User-Agent": yandexUserAgent,
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "Sec-Fetch-Mode": "no-cors",
          },
          ...headers
        },
        body: Array.from(body)
      }),
    };
    // Fetch the translation from the worker host
    response = await fetch(
      `https://${workerHost}${path}`,
      options
    );
    debug.log("yandexRequest:", response.status, response);
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

export default yandexRequest;
