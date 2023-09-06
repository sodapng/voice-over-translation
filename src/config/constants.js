// available languages for translation
const availableLangs = [
  "ru",
  "en",
  "zh",
  "ko",
  "lt",
  "lv",
  "ar",
  "fr",
  "it",
  "es",
  "de",
  "ja",
];

// Additional languages working with TTS
const additionalTTS = [
  "bn",
  "pt",
  "cs",
  "hi",
  "mr", // TODO: Add menu translation (MAYBE)
  "te", // TODO: Add menu translation (MAYBE)
  "tr",
  "ms",
  "vi",
  "ta", // TODO: Add menu translation (MAYBE)
  "jv",
  "ur",
  "fa",
  "gu", // TODO: Add menu translation (MAYBE)
  "id",
  "uk",
  "kk",
  "da",
  "fi",
  "uz",
  "pl",
  "sv",
  "az", 
  "sq", 
  "am", 
  "hy", 
  "af", 
  "eu", 
  "my", 
  "bg", 
  "bs", 
  "cy", 
  "hu", 
  "gl", 
  "el", 
  "zu", 
  "kn", 
  "ca", 
  "km", 
  "lo", 
  "mk", 
  "ml", 
  "mt", 
  "mn", 
  "ne", 
  "nl", 
  "pa", 
  "ro", 
  "sr", 
  "si", 
  "sk", 
  "sl", 
  "sw", 
  "su", 
  "hr", 
  "et"
];


const siteTranslates = {
  youtube: "https://youtu.be/",
  twitch: "https://twitch.tv/",
  vimeo: "https://vimeo.com/",
  "9gag": "https://9gag.com/gag/",
  vk: "https://vk.com/video?z=",
  xvideos: "https://www.xvideos.com/",
  pornhub: "https://rt.pornhub.com/view_video.php?viewkey=",
  udemy: "https://www.udemy.com/",
  twitter: "https://twitter.com/i/status/",
  facebook: "https://www.facebook.com/",
  rutube: "https://rutube.ru/video/",
  "bilibili.com": "https://www.bilibili.com/video/",
  "mail.ru": "https://my.mail.ru/",
  coub: "https://coub.com/view/",
  bitchute: "https://www.bitchute.com/video/",
  coursera: "https://www.coursera.org/",
};

const cfOnlyExtensions = [
  "Violentmonkey",
  "FireMonkey",
  "Greasemonkey",
  "AdGuard",
  "OrangeMonkey",
];

export { availableLangs, additionalTTS, siteTranslates, cfOnlyExtensions };
