const selectors = () => {
  return {
    youtubeSelector: ".html5-video-container",
    twitchSelector: ".video-ref",
    twitchMobileSelector: "main > div > section > div > div > div",
    pipedSelector: ".shaka-video-container",
    vkSelector: ".videoplayer_media",
    twitterSelector:
      'div[data-testid="videoComponent"] > div:nth-child(1) > div',
    vimeoSelector: ".player",
    gagSelector: ".video-post",
    bilibilicomSelector: ".bpx-player-video-wrap",
    mailSelector: "#b-video-wrapper",
  };
};

export default selectors();
