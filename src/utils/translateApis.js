import {
  translateUrls,
  detectUrls,
  defaultDetectService,
  defaultTranslationService,
} from "../config/config.js";
import { votStorage } from "./storage.js";

const HTTP_TIMEOUT = 3000;

async function fetchWithTimeout(url, options) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), HTTP_TIMEOUT);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } catch (error) {
    console.error("Fetch timed-out. Error:", error);
    return error;
  } finally {
    clearTimeout(timeoutId);
  }
}

const YandexTranslateAPI = {
  async translate(text, lang) {
    // Limit: 10k symbols
    //
    // Lang examples:
    // en-ru, uk-ru, ru-en...
    // ru, en (instead of auto-ru, auto-en)

    try {
      const response = await fetchWithTimeout(translateUrls.yandex, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text,
          lang,
        }),
      });

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();

      if (content.code !== 200) {
        throw content.message;
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
      const response = await fetchWithTimeout(detectUrls.yandex, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text,
          lang,
        }),
      });

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();
      if (content.code !== 200) {
        throw content.message;
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

      if (response instanceof Error) {
        throw response;
      }

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
