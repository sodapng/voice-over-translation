function getVideoId (service, url) {
    switch (service) {
      case "youtube":
        if (url.includes("watch")) {
            return url.split("v=")[1];
        } else if (url.includes("embed/")) {
            return url.split("embed/")[1];
        }
      case "vk":
        let videoId;
        if (/^(https:\/\/|http:\/\/)?(www.|m.)?vk.(com|ru)\/video-?[0-9]{8,9}_[0-9]{9}/.test(url)) {
          videoId = url.split('/')[-1].split('/')[0];
        } else {
            console.log(123)
          videoId = url.includes('z=') ? url.split('z=')[1].split('%2')[0] : false; // Убираем мусор в конце параметра
        }
        return videoId;
      case "9gag" || "gag":
        if (url.includes("/gag/")) {
          return url.split('/gag/')[1];
        }
        return false
      case "twitch":
        if (/^(https:\/\/|http:\/\/)?(www.|m.)twitch.tv\/videos\/.*/.test(url)) { // Если используется мобильная версия сайта (m.twitch.tv)
          return url.split('/videos/')[1];
        } else if (/^(https:\/\/|http:\/\/)?player.twitch.tv\/videos\/.*/.test(url)) {
          return url.split("video=")[1];
        }
        return false;
      case "tiktok":
        if (url.includes("/video/")) {
          return url.split('/video/')[1];
        }
        return false;
      case "vimeo":
        return url.split('vimeo.com/')[1];
      case "xvideos":
        return url.split('xvideos.com/')[1].split('/')[0];
      case "pornhub":
        if (url.includes('view_video.php')) {
          return url.split('viewkey=')[1];
        } else if (url.includes('embed/')) {
          return url.split('embed/')[1];
        }
        return false;
      default:
        return false;
    }
  };

  
export default getVideoId;
