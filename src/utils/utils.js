function waitForElm(selector) {
  // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
  return new Promise((resolve) => {
    const element = document.querySelector(selector);
    if (element) {
      return resolve(element);
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

const sleep = (m) => new Promise((r) => setTimeout(r, m));

const getVideoId = (service) => {
  const url = new URL(window.location.href);

  switch (service) {
    case "youtube":
      if (url.pathname.includes("watch")) {
        return url.searchParams.get("v");
      } else if (url.pathname.includes("embed/")) {
        // TODO: Добавить кнопку перевода на странице видео
        const urlArray = url.pathname.split("/");
        return urlArray[urlArray.length - 1];
      }
    case "vk":
      if (/^video-?[0-9]{8,9}_[0-9]{9}$/.test(url.pathname.split("/")[1])) {
        return url.pathname.split("/")[1]; // Убираем слэш в начале
      } else {
        return url.searchParams.has("z")
          ? url.searchParams.get("z").split("/")[0]
          : null; // Убираем мусор в конце параметра
      }
    case "9gag" || "gag":
      if (url.pathname.includes("gag/")) {
        const urlArray = url.pathname.split("/");
        return urlArray[urlArray.length - 1];
      }
    case "twitch":
      if (/^m\.twitch\.tv$/.test(window.location.hostname)) {
        // Если используется мобильная версия сайта (m.twitch.tv)
        const linkUrl = document.head.querySelector('link[rel="canonical"]');
        if (linkUrl?.href.includes("/videos/")) {
          const urlArray = linkUrl.href.split("/");
          return `videos/${urlArray[urlArray.length - 1]}`;
        } else if (linkUrl?.href.includes("/clip/")) {
          return url.pathname.slice(1);
        } else {
          return false;
        }
      } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
        return `videos/${url.searchParams.get("video")}`;
      } else if (url.pathname.includes("/videos/")) {
        const urlArray = url.pathname.split("/");
        return `videos/${urlArray[urlArray.length - 1]}`;
      } else if (url.pathname.includes("/clip/")) {
        return url.pathname.slice(1);
      }
    case "tiktok":
      if (url.pathname.includes("video/")) {
        const urlArray = url.pathname.split("/");
        return urlArray[urlArray.length - 1];
      }
    case "vimeo":
      const urlArray = url.pathname.split("/");
      return urlArray[urlArray.length - 1];
    case "xvideos":
      const urlArrayXVideos = url.pathname.split("/");
      return `${urlArrayXVideos[urlArrayXVideos.length - 2]}/${
        urlArrayXVideos[urlArrayXVideos.length - 1]
      }`;
    case "pornhub":
      if (url.pathname.includes("view_video.php")) {
        return url.searchParams.get("viewkey");
      } else if (url.pathname.includes("embed/")) {
        const urlArray = url.pathname.split("/");
        return urlArray[urlArray.length - 1];
      }
    case "twitter":
      if (url.pathname.includes("/status/")) {
        const urlArray = url.pathname.split("/");
        return urlArray[urlArray.length - 1];
      }
    case "udemy":
      return url.pathname;
    case "facebook":
      return url.pathname;
    case "rutube":
      if (
        url.pathname.includes("/video/") ||
        url.pathname.includes("/play/embed/")
      ) {
        const urlArray = url.pathname.split("/");
        return urlArray[urlArray.length - 2];
      }
    case "bilibili.com":
      if (url.pathname.includes("/video/")) {
        const urlArray = url.pathname.split("/");
        let vid = urlArray[urlArray.length - 2];
        if (url.search && url.searchParams.get("p") !== null) {
          vid += `/?p=${url.searchParams.get("p")}`;
        }
        return vid;
      } else if (
        url.pathname.includes("/blackboard/webplayer/embed-old.html")
      ) {
        return url.searchParams.get("bvid");
      }
    case "mail.ru":
      if (url.pathname.startsWith("/v/") || url.pathname.startsWith("/mail/")) {
        return url.pathname;
      }
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  if (minutes >= 60) {
    return "Перевод займёт больше часа";
  } else if (minutes >= 10 && minutes % 10) {
    return `Перевод займёт примерно ${minutes} минут`;
  } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
    return "Перевод займёт около минуты";
  } else {
    return `Перевод займёт примерно ${minutes} минуты`;
  }
}

export { waitForElm, sleep, getVideoId, secsToStrTime };
