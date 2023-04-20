import { checkCyrillic, getCyrillicCount } from './regex.js';

function getLanguage(response, title, description, author) {
  if (response) {
    // Check if there is a caption track in the player response
    if (response?.captions?.playerCaptionsTracklistRenderer?.captionTracks?.length) {
      for (const caption of response.captions.playerCaptionsTracklistRenderer.captionTracks) {
        if (caption.hasOwnProperty('kind') && caption.kind === 'asr') {
          // ru, uk
          console.log(caption.languageCode);
          return caption.languageCode;
        }
      }
    }

    // alternative check if captions are not found or captions are created manually
    let titleStatus = title?.length ? checkCyrillic(title) : false;
    let descStatus = description?.length ? checkCyrillic(description) : false;
    let authorStatus = author?.length ? checkCyrillic(author) : false;

    // check if cyrillic length is less than 1/3 of the title
    if (titleStatus && getCyrillicCount(title) < title?.length / 3) {
      titleStatus = false;
    }

    // check if cyrillic length is less than 1/3 of the description
    if (descStatus && getCyrillicCount(description) < description?.length / 3) {
      descStatus = false;
    }

    // check if cyrillic length is less than 1/3 of the author name
    if (authorStatus && getCyrillicCount(author) < author?.length / 3) {
      authorStatus = false;
    }

    if (descStatus || authorStatus || titleStatus) return 'ru';
  }

  return 'en';
}

function getYTVideoData() {
  let videoData = {};
  const data = document.querySelector("#movie_player").getVideoData();
  const response = document.querySelector("#movie_player").getPlayerResponse();
  videoData.isLive = data.isLive;
  videoData.isPremiere = data.isPremiere;
  videoData.title = data.title;
  videoData.description = response.videoDetails.shortDescription;
  videoData.author = data.author;
  videoData.detectedLanguage = getLanguage(response, videoData.title, videoData.description, videoData.author);
  console.log("VOT Detected language: ", videoData.detectedLanguage);
  return videoData;
}

export { getYTVideoData };