import debug from "./debug.js";
import { getHmacSha1 } from "./crypto.js";

const API_ORIGIN = "https://global.apis.naver.com/weverse/wevweb"; // find as REACT_APP_API_GW_ORIGIN in main.<hash>.js
const API_APP_ID = "be4d79eb8fc7bd008ee82c8ec4ff6fd4"; // find as REACT_APP_API_APP_ID in main.<hash>.js
const API_HMAC_KEY = "1b9cb6378d959b45714bec49971ade22e6e24e42"; // find as c.active near `createHmac("sha1"...`  in main.<hash>.js

async function createHash(pathname) {
  // pathname example: /post/v1.0/post-3-142049908/preview?fieldSet=postForPreview...
  const timestamp = Date.now();

  let salt = pathname.substring(0, Math.min(255, pathname.length)) + timestamp;
  // example salt is /video/v1.1/vod/67134/inKey?gcc=RU&appId=be4d79eb8fc7bd008ee82c8ec4ff6fd4&language=en&os=WEB&platform=WEB&wpf=pc1707527163588

  const sign = await getHmacSha1(API_HMAC_KEY, salt);

  return {
    wmsgpad: timestamp,
    wmd: sign,
  };
}

function getURLData() {
  return {
    appId: API_APP_ID,
    language: "en",
    os: "WEB",
    platform: "WEB",
    wpf: "pc",
  };
}

async function getVideoPreview(postId) {
  const pathname =
    `/post/v1.0/post-${postId}/preview?` +
    new URLSearchParams({
      fieldSet: "postForPreview",
      ...getURLData(),
    }); // ! DON'T EDIT ME

  const hash = await createHash(pathname);

  return await fetch(API_ORIGIN + pathname + "&" + new URLSearchParams(hash))
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        extension: {
          video: {},
        },
      };
    });
}

async function getVideoInKey(videoId) {
  const pathname =
    `/video/v1.1/vod/${videoId}/inKey?` +
    new URLSearchParams({
      gcc: "RU",
      ...getURLData(),
    }); // ! DON'T EDIT ME
  const hash = await createHash(pathname);

  return await fetch(API_ORIGIN + pathname + "&" + new URLSearchParams(hash), {
    method: "POST",
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {};
    });
}

async function getVideoInfo(infraVideoId, inkey, serviceId) {
  const timestamp = Date.now();
  return await fetch(
    `https://global.apis.naver.com/rmcnmv/rmcnmv/vod/play/v2.0/${infraVideoId}?` +
      new URLSearchParams({
        key: inkey,
        sid: serviceId,
        // pid: "863c411f-fbf0-4b67-868a-ef54427e5316", // возможно не нужен
        nonce: timestamp,
        devt: "html5_pc",
        prv: "N",
        aup: "N",
        stpb: "N",
        cpl: "en",
        env: "prod",
        lc: "en",
        adi: [
          {
            adSystem: null,
          },
        ],
        adu: "/",
      }),
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        videos: {
          list: [],
        },
      };
    });
}

function extractVideoInfo(videoList) {
  return videoList.find(
    (video) => video.useP2P === false && video.source.includes(".mp4"),
  );
}

async function getVideoData() {
  // ! When translating using a regular link (like this https://weverse.io/aespa/live/3-142049908),
  // ! we will get an error, so we have to do this

  const postId = new URL(window.location).pathname.match(
    /([^/]+)\/(live|media)\/([^/]+)/,
  )?.[3];

  const videoPreview = await getVideoPreview(postId);
  debug.log("weverse video preview data:", videoPreview);

  const { videoId, serviceId, infraVideoId } = videoPreview.extension.video;

  if (!(videoId && serviceId && infraVideoId)) {
    return false;
  }

  const { inKey } = await getVideoInKey(videoId);
  debug.log("weverse video inKey data:", videoPreview);
  if (!inKey) {
    return false;
  }

  const videoData = await getVideoInfo(infraVideoId, inKey, serviceId);
  debug.log("weverse video data:", videoData);

  const videoSource = extractVideoInfo(videoData.videos.list);
  if (!videoSource) {
    return false;
  }

  const { source: url, duration } = videoSource;
  return {
    url,
    duration,
  };
}

export default {
  getVideoData,
};
