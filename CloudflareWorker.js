// Original script: https://github.com/mynovelhost/voice-over-translation/blob/master/CloudflareWorker.js

const yandexUserAgent =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 CriOS/104.0.5112.114 YaBrowser/22.9.4.633.10 SA/3 Mobile/15E148 Safari/604.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
};

const corsHeadersKeys = Object.keys(corsHeaders);

function errorResponse(message) {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders,
      'X-Yandex-Status': message,
    },
  });
}

async function makeRequest(request) {
  let response = await fetch(request);
  response = new Response(response.body, response);
  for (const corsHeaderKey of corsHeadersKeys)
    response.headers.set(corsHeaderKey, corsHeaders[corsHeaderKey]);
  response.headers.set('X-Yandex-Status', 'success');
  return response;
}

async function handleTranslateRequest(request, pathname) {
  const requestInfo = await request.json();
  if (requestInfo.headers === undefined ||
      requestInfo.headers === null ||
      requestInfo.body === undefined ||
      requestInfo.body === null)
    return errorResponse('error-request');

  const yandexRequest = new Request('https://api.browser.yandex.ru' + pathname, {
    body: requestInfo.body,
    method: 'POST',
    headers: requestInfo.headers
  });

  return await makeRequest(yandexRequest);
}

async function handleAudioProxyRequest(pathname, search) {
  if (
    search === undefined
  )
    return errorResponse('error-request');

  const pathnameArray = pathname.split('/');
  const audioName = pathnameArray[pathnameArray.length - 1];
  const audioRequest = new Request('https://vtrans.s3-private.mds.yandex.net/tts/prod/' + audioName + search, {
    headers: {
      "User-Agent": yandexUserAgent,
    }
  });

  return await makeRequest(audioRequest);
}

addEventListener('fetch', event => {
  const request = event.request;

  if (request.method == 'OPTIONS')
    return event.respondWith(new Response(null, {
      headers : {
        ...corsHeaders,
        'Allow': 'GET, POST, OPTIONS',
      }
    }));

  const url = new URL(request.url);

  if (url.pathname === '/video-translation/translate') {
    // translate endpoint
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json'))
      return event.respondWith(errorResponse('error-content'));

    if (request.method !== 'POST')
      return event.respondWith(errorResponse('error-method'));

    return event.respondWith(handleTranslateRequest(request, url.pathname));
  } else if (url.pathname.startsWith('/video-translation/audio-proxy') && url.pathname.endsWith('.mp3')) {
    // proxy endpoint
    if (request.method !== 'GET')
      return event.respondWith(errorResponse('error-method'));

    return event.respondWith(handleAudioProxyRequest(url.pathname, url.search));
  } else {
    return event.respondWith(errorResponse('error-path'));
  }
});
