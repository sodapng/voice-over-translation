// Original script: https://github.com/mynovelhost/voice-over-translation/blob/master/CloudflareWorker.js

// TODO: maybe rework worker structure
const yandexUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 YaBrowser/23.7.1.1140 Yowser/2.5 Safari/537.36";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

const corsHeadersKeys = Object.keys(corsHeaders);

function errorResponse(message) {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders,
      "X-Yandex-Status": message,
    },
  });
}

async function makeRequest(request) {
  let response = await fetch(request);
  response = new Response(response.body, response);
  for (const corsHeaderKey of corsHeadersKeys)
    response.headers.set(corsHeaderKey, corsHeaders[corsHeaderKey]);
  response.headers.set("X-Yandex-Status", "success");
  return response;
}

async function makeStreamRequest(request) {
  // TODO: remove
  // doesn't work
  let response = await fetch(request);
  const content = (await response.text()).replaceAll(
    /https:\/\/([^.]+).strm.yandex.net/gi,
    "",
  ); // replacing yandex balancer with emptiness. It may be fixed soon, but it's still working
  response = new Response(content, response);
  for (const corsHeaderKey of corsHeadersKeys)
    response.headers.set(corsHeaderKey, corsHeaders[corsHeaderKey]);
  response.headers.set("X-Yandex-Status", "success");
  return response;
}

async function handleYandexRequest(request, pathname) {
  const requestInfo = await request.json();
  if (
    requestInfo.headers === undefined ||
    requestInfo.headers === null ||
    requestInfo.body === undefined ||
    requestInfo.body === null
  )
    return errorResponse("error-request");

  const yandexRequest = new Request(
    "https://api.browser.yandex.ru" + pathname,
    {
      body: new Uint8Array(requestInfo.body),
      method: "POST",
      headers: requestInfo.headers,
    },
  );

  return await makeRequest(yandexRequest);
}

async function handleAudioProxyRequest(pathname, search) {
  if (search === undefined) return errorResponse("error-request");

  const pathnameArray = pathname.split("/");
  const audioName = pathnameArray[pathnameArray.length - 1];
  const audioRequest = new Request(
    "https://vtrans.s3-private.mds.yandex.net/tts/prod/" + audioName + search,
    {
      headers: {
        "User-Agent": yandexUserAgent,
      },
    },
  );

  return await makeRequest(audioRequest);
}

async function handleStreamProxyRequest(audioName, search) {
  // TODO: remove
  const audioRequest = new Request(
    "https://strm.yandex.ru/" + audioName + search,
    {
      headers: {
        "User-Agent": yandexUserAgent,
        Accept: "application/x-mpegURL",
        "Accept-Language": "en",
        "Content-Type": "application/x-mpegURL",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Mode": "no-cors",
        "sec-ch-ua": null,
        "sec-ch-ua-mobile": null,
        "sec-ch-ua-platform": null,
      },
    },
  );

  return await makeStreamRequest(audioRequest);
}

addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method == "OPTIONS")
    return event.respondWith(
      new Response(null, {
        headers: {
          ...corsHeaders,
          Allow: "GET, POST, OPTIONS",
        },
      }),
    );

  const url = new URL(request.url);

  if (
    url.pathname === "/video-translation/translate" ||
    url.pathname === "/video-subtitles/get-subtitles" ||
    url.pathname === "/stream-translation/translate-stream" ||
    url.pathname === "/stream-translation/ping-stream"
  ) {
    // translate endpoint
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json"))
      return event.respondWith(errorResponse("error-content"));

    if (request.method !== "POST")
      return event.respondWith(errorResponse("error-method"));

    return event.respondWith(handleYandexRequest(request, url.pathname));
  } else if (
    url.pathname.startsWith("/video-translation/audio-proxy") &&
    url.pathname.endsWith(".mp3")
  ) {
    // proxy endpoint
    if (request.method !== "GET")
      return event.respondWith(errorResponse("error-method"));

    return event.respondWith(handleAudioProxyRequest(url.pathname, url.search));
  } else if (
    url.pathname.startsWith("/transcoderless/") &&
    (url.pathname.endsWith(".m3u8") || url.pathname.endsWith(".ts"))
  ) {
    // proxy m3u8 endpoint
    if (request.method !== "GET")
      return event.respondWith(errorResponse("error-method"));

    return event.respondWith(
      handleStreamProxyRequest(url.pathname, url.search),
    );
  } else {
    return event.respondWith(errorResponse("error-path"));
  }
});
