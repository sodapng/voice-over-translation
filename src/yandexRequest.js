import { workerHost, yandexUserAgent } from "./config/config.js";
import debug from "./utils/debug.js";

async function yandexRequest(path, body, headers, callback) {
  try {
    debug.log("yandexRequest:", path);
    // Create a fetch options object with headers and body
    const options = {
      url: `https://${workerHost}${path}`,
      method: "POST",
      headers: {
        ...{
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
        },
        ...headers,
      },
      binary: true,
      data: new Blob([body]),
      responseType: "arraybuffer",
    };
    // Send the request using GM_xmlhttpRequest
    GM_xmlhttpRequest({
      ...options,
      onload: (http) => {
        debug.log("yandexRequest:", http.status, http);
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

export default yandexRequest;
