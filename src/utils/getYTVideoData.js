async function detect(cleanText) {
  const response = await fetch("https://rust-server-531j.onrender.com/detect", {
    method: "POST",
    body: cleanText,
  });
  return await response.text();
}

async function getLanguage(player, response, title, description, author) {
  if (!window.location.hostname.includes("m.youtube.com")) {
    const audioTracks = player.getAudioTrack();
    const trackInfo = audioTracks?.getLanguageInfo();
    if (trackInfo?.id !== "und") {
      return trackInfo.id.split(".")[0];
    }
  }

  const captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find((caption) => caption.kind === "asr");
    if (autoCaption) {
      return autoCaption.languageCode;
    }
  }
  const text = [title, description, author].join(" ");
  const cleanText = text
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[^\p{L}\s]/gu, "")
    .trim()
    .slice(0, 250);
  return await detect(cleanText);
}

async function getYTVideoData() {
  const player = document.querySelector("#movie_player");
  const data = player.getVideoData();
  const response = player.getPlayerResponse();
  const { isLive, isPremiere, title, author } = data;
  const { shortDescription: description } = response?.videoDetails ?? {};
  const videoData = {
    isLive,
    isPremiere,
    title,
    description,
    author,
    detectedLanguage: await getLanguage(
      player,
      response,
      title,
      description,
      author
    ),
  };
  console.log("VOT Detected language: ", videoData.detectedLanguage);
  return videoData;
}

export { getYTVideoData };
