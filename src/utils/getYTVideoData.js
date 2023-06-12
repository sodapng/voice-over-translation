import { checkCyrillic, getCyrillicCount } from './regex.js';

// Get the language code from the response or the text
function getLanguage(response, title, description, author) {
  if (!response) {
    return 'en';
  }

  // Check if there is an automatic caption track in the response
  const captionTracks = response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find(caption => caption.kind === 'asr');
    if (autoCaption) {
      return autoCaption.languageCode;
    }
  }

  // Check if the text contains cyrillic characters
  const hasCyrillic = text => checkCyrillic(text) && !getCyrillicCount(text);
  const isRussian = [title, description, author].some(hasCyrillic);
  if (isRussian) {
    return 'ru';
  }

  return 'en';
}

// Get the video data from the player
function getYTVideoData() {
  const player = document.querySelector("#movie_player");
  const data = player.getVideoData();
  const response = player.getPlayerResponse();
  const videoData = {
    isLive: data?.isLive,
    isPremiere: data?.isPremiere,
    title: data?.title,
    description: response?.videoDetails?.shortDescription,
    author: data?.author,
    detectedLanguage: getLanguage(response, data.title, response?.videoDetails?.shortDescription, data.author)
  };
  console.log("VOT Detected language: ", videoData.detectedLanguage);
  return videoData;
}

export { getYTVideoData };
