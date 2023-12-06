import {
  translateUrls,
  detectUrls,
  defaultDetectService,
  defaultTranslationService,
} from "../config/config.js";
import { votStorage } from "./storage.js";

const YandexTranslateAPI = {
  async translate(text, lang) {
    // Limit: 10k symbols
    //
    // Lang examples:
    // en-ru, uk-ru, ru-en...
    // ru, en (instead of auto-ru, auto-en)
    try {
      const response = await fetch(translateUrls.yandex, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text,
          lang,
        }),
      });

      const content = await response.json();

      if (content.code !== 200) {
        throw response.message;
      }

      return content.text[0];
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  },

  async detect(text, lang) {
    // Limit: 10k symbols
    try {
      const response = await fetch(detectUrls.yandex, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text,
          lang,
        }),
      });

      const content = await response.json();
      if (content.code !== 200) {
        throw response.message;
      }

      return content.lang ?? "en";
    } catch (error) {
      console.error("Error translating text:", error);
      return "en";
    }
  },
};

const RustServerAPI = {
  async detect(text) {
    try {
      const response = await fetch(detectUrls.rustServer, {
        method: "POST",
        body: text,
      });
      return await response.text();
    } catch (error) {
      console.error("Error getting lang from text:", error);
      return "en";
    }
  },
};

async function translate(text, fromLang = "", toLang = "ru") {
  const service = await votStorage.get(
    "translationService",
    defaultTranslationService,
  );
  switch (service) {
    case "yandex": {
      const langPair = fromLang && toLang ? `${fromLang}-${toLang}` : toLang;
      return await YandexTranslateAPI.translate(text, langPair);
    }
    default:
      return text;
  }
}

async function detect(text) {
  const service = await votStorage.get("detectService", defaultDetectService);
  switch (service) {
    case "yandex":
      return await YandexTranslateAPI.detect(text);
    case "rust-server":
      return await RustServerAPI.detect(text);
    default:
      return "en";
  }
}

const translateServices = ["yandex"];
const detectServices = ["yandex", "rust-server"];

export { translate, detect, translateServices, detectServices };
