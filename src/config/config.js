import { lang } from "../utils/utils.js";

// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const m3u8ProxyHost = "m3u8proxy.toil-dump.workers.dev";
const proxyWorkerHost =
  lang === "uk" ? "vot-new.toil-dump.workers.dev" : "vot.deno.dev"; // used for cloudflare version (vot-new.toil-dump.workers.dev || vot.deno.dev)
const yandexHmacKey = "xtGCyGdTY2Jy6OMEKdTuXev3Twhkamgm";
const yandexUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 YaBrowser/23.7.1.1140 Yowser/2.5 Safari/537.36";
const defaultAutoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation
const defaultTranslationService = "yandex";
const defaultDetectService = "yandex";

const detectUrls = {
  yandex: "https://translate.toil.cc/detect",
  rustServer: "https://rust-server-531j.onrender.com/detect",
};

const translateUrls = {
  yandex: "https://translate.toil.cc/translate",
};

export {
  workerHost,
  m3u8ProxyHost,
  proxyWorkerHost,
  detectUrls,
  translateUrls,
  defaultTranslationService,
  defaultDetectService,
  yandexHmacKey,
  yandexUserAgent,
  defaultAutoVolume,
};
