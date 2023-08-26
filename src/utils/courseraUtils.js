import debug from "./debug.js";
import { availableLangs } from "../config/constants.js";
import { langTo6391 } from "./utils.js";

async function getAvailabledLanguage(courseId) {
  const response = await fetch(
    "https://www.coursera.org/graphql-gateway?opname=LanguagesForCourse",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          operationName: "LanguagesForCourse",
          query:
            "query LanguagesForCourse($input: LanguagesForProduct_QueryByCourseInput!) {\n  LanguagesForProduct {\n    queryByCourse(input: $input) {\n      __typename\n      ... on LanguagesForProduct_QueryByCourseSuccess {\n        availableLanguages {\n          primaryLanguageCodes\n          isSubtitleTranslationEnabled\n          subtitleLanguageCodes\n          machineTranslationEnabledLanguageCodes\n          __typename\n        }\n        __typename\n      }\n      ... on LanguagesForProduct_QueryByCourseError {\n        message\n        __typename\n      }\n    }\n    __typename\n  }\n}\n",
          variables: {
            input: {
              courseId: courseId,
            },
          },
        },
      ]),
    }
  );

  const resJSON = await response.json();

  return resJSON?.[0]?.data?.LanguagesForProduct?.queryByCourse
    ?.availableLanguages;
}

function getSubtitlesFileURL(responseLang, tracks) {
  const subtitle = tracks.find(
    (caption) => langTo6391(caption.srclang) === responseLang
  );
  return subtitle?.src;
}

function getVideoFileURL(sources) {
  const source = sources.find((src) => src.type === "video/mp4");
  return source?.src;
}

function getPlayerData() {
  return getPlayer()?.player;
}

function getPlayer() {
  return document.querySelector("#video_player");
}

// textTracks_.tracks_ - subtitles
// options.playerOptions.tracks - subtitles with urls

// Get the video data from the player
async function getVideoData(responseLang = "en") {
  let translationHelp = null;
  const data = getPlayerData();

  const { duration } = data?.cache_ || {};
  const { courseId, tracks, sources } = data?.options_ || {};

  const videoURL = getVideoFileURL(sources);
  const availableLanguages = await getAvailabledLanguage(courseId); // its available languages from Coursera !!!

  let detectedLanguage = availableLanguages?.primaryLanguageCodes?.[0];
  detectedLanguage = detectedLanguage ? langTo6391(detectedLanguage) : "en";

  if (!availableLangs.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }

  const subtitlesURL = getSubtitlesFileURL(responseLang, tracks);
  if (subtitlesURL) {
    translationHelp = [
      {
        target: "video_file_url",
        targetUrl: videoURL,
      },
      {
        target: "subtitles_file_url",
        targetUrl: `https://www.coursera.org${subtitlesURL}`,
      },
    ];
  }

  const videoData = {
    duration,
    detectedLanguage,
    translationHelp,
  };

  debug.log("coursera video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

export const courseraUtils = {
  getPlayer,
  getPlayerData,
  // getSubtitles,
  getVideoData,
};
