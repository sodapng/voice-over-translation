function getLanguage(response, title, description, author) {
  // Use optional chaining and nullish coalescing to simplify the logic
  const captionTracks = response?.captions?.playerCaptionsTracklistRenderer?.captionTracks ?? [];
  const autoCaption = captionTracks.find(caption => caption.kind === 'asr');
  const languageCode = autoCaption?.languageCode ?? 'en';
  
  // Use a single regex to test for cyrillic characters
  const hasCyrillic = text => /[а-яА-ЯёЁ]/.test(text);
  const isRussian = [title, description, author].some(hasCyrillic);
  
  // Return early if the language is Russian
  if (isRussian) {
  return 'ru';
  }
  
  // Use a switch statement to handle other languages
  switch (languageCode) {
  case 'en':
  return 'en';
  case 'fr':
  return 'fr';
  case 'es':
  return 'es';
  case 'zh':
  return 'zh';
  case 'it':
  return 'it';
  // Add more cases as needed
  default:
  return 'en'; // Fallback to English if no match
  }
}
  
// Get the video data from the player
function getYTVideoData() {
  const player = document.querySelector("#movie_player");
  const data = player.getVideoData();
  const response = player.getPlayerResponse();
  const videoDetails = response?.videoDetails ?? {};
  const videoData = {
  isLive: data?.isLive,
  isPremiere: data?.isPremiere,
  title: data?.title,
  description: videoDetails.shortDescription,
  author: data?.author,
  detectedLanguage: getLanguage(response, data.title, videoDetails.shortDescription, data.author)
  };
  console.log("VOT Detected language: ", videoData.detectedLanguage);
  return videoData;
}
  
export { getYTVideoData };