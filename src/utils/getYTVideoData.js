const checkCyrillic = require('./regex.js');

function getLanguage(title, description, author) {
  const response = document.querySelector("#movie_player").getPlayerResponse();
  if (response) {
    // Check if there is a caption track in the player response
    if (response?.captions?.playerCaptionsTracklistRenderer?.captionTracks?.length) {
      for (const caption of response.captions.playerCaptionsTracklistRenderer.captionTracks) {
        if (caption.hasOwnProperty('kind') && caption.kind === 'asr') {
          // ru, uk
          return caption.languageCode;
        }
      }
    }

    // alternative check if captions are not found or captions are created manually
    const titleStatus = title.length ? checkCyrillic(title) : false;
    const descStatus = description.length ? checkCyrillic(description) : false;
    const authorStatus = title.length ? checkCyrillic(author) : false;

    if (descStatus || authorStatus || titleStatus) return 'ru';
  }

  return 'en';
}

function getYTVideoData(videoData) {
  const data = document.querySelector("#movie_player").getVideoData();
  videoData.isLive = data.isLive;
  videoData.isPremiere = data.isPremiere;
  videoData.title = data.title;
  videoData.author = data.author;
  videoData.detectedLanguage = getLanguage(data.title, data.description, data.author);
  return videoData;
}

module.exports = getYTVideoData;