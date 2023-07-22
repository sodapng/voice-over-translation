import { translations } from "../config/constants.js";
import { lang } from "../menu.js";

if (!String.prototype.format) {
  // https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
  // syntax example: "is {0} function".format("format")
  String.prototype.format = function () {
    // store arguments in an array
    var args = arguments;
    // use replace to iterate over the string
    // select the match and check if the related argument is present
    // if yes, replace the match with the argument
    return this.replace(/{(\d+)}/g, function (match, index) {
      // check if the argument is present
      return typeof args[index] != "undefined" ? args[index] : match;
    });
  };
}

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
      once: true,
    });
  });
}

const sleep = (m) => new Promise((r) => setTimeout(r, m));

const getVideoId = (service) => {
  const url = new URL(window.location.href);

  switch (service) {
    case "youtube":
      return (
        url.pathname.match(/(?:watch|embed)\/([^/]+)/)?.[1] ||
        url.searchParams.get("v")
      );
    case "vk":
      if (url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)) {
        return url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)[0].slice(1);
      } else if (url.searchParams.get("z")) {
        return url.searchParams.get("z").split("/")[0];
      } else if (url.searchParams.get("oid") && url.searchParams.get("id")) {
        return `video-${Math.abs(
          url.searchParams.get("oid")
        )}_${url.searchParams.get("id")}`;
      } else {
        return false;
      }
    case "9gag":
    case "gag":
      return url.pathname.match(/gag\/([^/]+)/)?.[1];
    case "twitch":
      if (/^m\.twitch\.tv$/.test(window.location.hostname)) {
        const linkUrl = document.head.querySelector('link[rel="canonical"]');
        return (
          linkUrl?.href.match(/videos\/([^/]+)/)?.[0] || url.pathname.slice(1)
        );
      } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
        return `videos/${url.searchParams.get("video")}`;
      } else if (/^clips\.twitch\.tv$/.test(window.location.hostname)) {
        // get link to twitch channel (ex.: https://www.twitch.tv/xqc)
        const channelLink = document.querySelector(
          ".tw-link[data-test-selector='stream-info-card-component__stream-avatar-link']"
        );
        if (!channelLink) {
          return false;
        }

        const channelName = channelLink.href.replace(
          "https://www.twitch.tv/",
          ""
        );
        return `${channelName}/clip/${url.searchParams.get("clip")}`;
      } else if (url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)) {
        return url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)[0];
      } else {
        return url.pathname.match(/(?:videos)\/([^/]+)/)?.[0];
      }
    case "tiktok":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    case "vimeo":
      return (
        url.pathname.match(/[^/]+\/[^/]+$/)?.[0] ||
        url.pathname.match(/[^/]+$/)?.[0]
      );
    case "xvideos":
      return url.pathname.match(/[^/]+\/[^/]+$/)?.[0];
    case "pornhub":
      return (
        url.searchParams.get("viewkey") ||
        url.pathname.match(/embed\/([^/]+)/)?.[1]
      );
    case "twitter":
      return url.pathname.match(/status\/([^/]+)/)?.[1];
    case "udemy":
      return url.pathname;
    case "facebook":
      return url.pathname;
    case "rutube":
      return url.pathname.match(/(?:video|embed)\/([^/]+)/)?.[1];
    case "coub":
      return url.pathname.match(/view\/([^/]+)/)?.[1];
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
      } else if (url.pathname.match(/video\/embed\/([^/]+)/)) {
        const referer = document.querySelector(
          ".b-video-controls__mymail-link"
        );
        if (!referer) {
          return false;
        }

        return referer?.href.split("my.mail.ru")?.[1];
      }
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  if (minutes >= 60) {
    return translations[lang].translationTakeMoreThanHour;
  } else if (minutes >= 10 && minutes % 10) {
    return translations[lang].translationTakeApproximatelyMinutes.format(
      minutes
    );
  } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
    return translations[lang].translationTakeAboutMinute;
  } else {
    return translations[lang].translationTakeApproximatelyMinute.format(
      minutes
    );
  }
}

export { waitForElm, sleep, getVideoId, secsToStrTime };
