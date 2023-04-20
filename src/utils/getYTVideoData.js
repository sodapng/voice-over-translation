const checkCyrillic = require('./regex.js');

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
    const titleStatus = title?.length ? checkCyrillic(title) : false;
    const descStatus = description?.length ? checkCyrillic(description) : false;
    const authorStatus = author?.length ? checkCyrillic(author) : false;

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
  console.log("Detected language: ", videoData.detectedLanguage);
  return videoData;
}

module.exports = getYTVideoData;