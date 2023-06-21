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
      once: true
    });    
  });
}

const sleep = (m) => new Promise((r) => setTimeout(r, m));

const getVideoId = (service) => {
  const url = new URL(window.location.href);

  switch (service) {
    case "youtube":
      return url.pathname.match(/(?:watch|embed)\/([^/]+)/)?.[1] || url.searchParams.get("v");
    case "vk":
      return url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)?.[0].slice(1) || url.searchParams.get("z")?.split("/")[0];
    case "9gag":
    case "gag":
      return url.pathname.match(/gag\/([^/]+)/)?.[1];
    case "twitch":
      if (/^m\.twitch\.tv$/.test(window.location.hostname)) {
        const linkUrl = document.head.querySelector('link[rel="canonical"]');
        return linkUrl?.href.match(/videos\/([^/]+)/)?.[0] || url.pathname.slice(1);
      } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
        return `videos/${url.searchParams.get("video")}`;
      } else {
        return url.pathname.match(/(?:videos|clip)\/([^/]+)/)?.[0];
      }
    case "tiktok":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    case "vimeo":
      return url.pathname.match(/[^/]+$/)?.[0];
    case "xvideos":
      return url.pathname.match(/[^/]+\/[^/]+$/)?.[0];
    case "pornhub":
      return url.searchParams.get("viewkey") || url.pathname.match(/embed\/([^/]+)/)?.[1];
    case "twitter":
      return url.pathname.match(/status\/([^/]+)/)?.[1];
    case "udemy":
      return url.pathname;
    case "facebook":
      return url.pathname;
    case "rutube":
      return url.pathname.match(/(?:video|embed)\/([^/]+)/)?.[1];
    case "bilibili.com":
      const bvid = url.searchParams.get("bvid");
      if (bvid) {
        return bvid;
      } else {
        let vid = url.pathname.match(/video\/([^/]+)/)?.[1];
        if (vid && url.search && url.searchParams.get("p") !== null) {
          vid += `/?p=${url.searchParams.get("p")}`;
        }
        return vid;
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
