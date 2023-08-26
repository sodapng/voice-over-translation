import debug from "./debug.js";
import { availableLangs } from "../config/constants.js";
import { langTo6391 } from "./utils.js";
import { localizationProvider } from "../localization/localizationProvider.js";

const udemyAPIURL = "https://www.udemy.com/api-2.0";
const accessTokenLife = 2_592_000; // 30 days

async function getCourseLang(courseId) {
  const response = await fetch(
    `${udemyAPIURL}/courses/${courseId}/?` +
      new URLSearchParams({
        "fields[course]": "locale",
        use_remote_version: "true",
        caching_intent: "true",
      })
  );
  return await response.json();
}

function checkUdemyTokenExpire(expires) {
  return expires + accessTokenLife > new Date().getTime();
}

async function getLectureData(udemyData, courseId, lectureId) {
  // reference: https://greasyfork.org/ru/scripts/422576-udemy-subtitle-downloader-v3/code
  if (!checkUdemyTokenExpire(udemyData.expires) || !udemyData.accessToken) {
    console.error(localizationProvider.get("udemyAccessTokenExpired"));
    return undefined;
  }

  const bearerToken = `Bearer ${udemyData.accessToken}`;
  const response = await fetch(
    `${udemyAPIURL}/users/me/subscribed-courses/${courseId}/lectures/${lectureId}/?` +
      new URLSearchParams({
        "fields[lecture]": "asset",
        "fields[asset]": "length,media_sources,captions",
      }),
    {
      headers: {
        "x-udemy-authorization": bearerToken,
        authorization: bearerToken,
      },
    }
  );
  return await response.json();
}

function getSubtitlesFileURL(captions, responseLang) {
  const subtitle = captions?.find(
    (caption) => langTo6391(caption.locale_id) === responseLang
  );
  return subtitle?.url;
}

function getVideoFileURL(sources) {
  const source = sources?.find((src) => src.type === "video/mp4");
  return source?.src;
}

function getPlayerData() {
  return getPlayer()?.player;
}

function getModuleData() {
  const moduleArgs = document.querySelector(
    ".ud-app-loader[data-module-id='course-taking']"
  )?.dataset?.moduleArgs;
  if (!moduleArgs) {
    console.error(localizationProvider.get("udemyModuleArgsNotFound"));
    return {};
  }
  return JSON.parse(moduleArgs);
}

function getLectureId() {
  return window.location.pathname.match(/learn\/lecture\/([^/]+)/)?.[1];
}

function getPlayer() {
  return document.querySelector(".vjs-v7");
}

// Get the video data from the player
async function getVideoData(udemyData, responseLang = "en") {
  let translationHelp = null;
  const data = getPlayerData();
  debug.log("udemyData", udemyData);

  const moduleData = getModuleData();
  debug.log("moduleData: ", moduleData);

  const courseId = moduleData.courseId;
  const lectureId = getLectureId();
  debug.log(`CourseId: ${courseId}, lectureId: ${lectureId}`);

  const courseLang = await getCourseLang(courseId);
  debug.log("courseLang Data:", courseLang);
  const lectureData = await getLectureData(udemyData, courseId, lectureId);
  debug.log("lecture Data:", lectureData);

  let detectedLanguage = courseLang?.locale?.locale;
  detectedLanguage = detectedLanguage ? langTo6391(detectedLanguage) : "en";

  if (!availableLangs.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }

  const duration = lectureData?.asset?.length || data?.cache_?.duration;
  const videoURL = getVideoFileURL(lectureData?.asset?.media_sources);
  const subtitlesURL = getSubtitlesFileURL(
    lectureData?.asset?.captions,
    responseLang
  );
  debug.log(`videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`);

  if (subtitlesURL && videoURL) {
    translationHelp = [
      {
        target: "video_file_url",
        targetUrl: videoURL,
      },
      {
        target: "subtitles_file_url",
        targetUrl: subtitlesURL,
      },
    ];
  }

  const videoData = {
    duration,
    detectedLanguage,
    translationHelp,
  };

  debug.log("udemy video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

export const udemyUtils = {
  getPlayer,
  getPlayerData,
  getVideoData,
  getModuleData,
  getCourseLang,
  getLectureData,
};
