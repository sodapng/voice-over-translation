import { lang } from "../menu.js";
import defaultLocale from "./locales/en.json";
import debug from "../utils/debug.js";

const localesVersion = 1;
const localesUrl = "https://raw.githubusercontent.com/MrSoczekXD/voice-over-translation/master/src/localization/locales";

export const localizationProvider = new class {
  locale = {};

  constructor() {
    this.setLocaleFromJsonString(window.localStorage.getItem("vot-locale"));
  }

  async update(force = false) {
    if (!force && Number(window.localStorage.getItem("vot-locale-version")) === localesVersion) {
      return;
    }

    debug.log("Updating locale...");

    await fetch(`${localesUrl}/${lang}.json`)
      .then((response) => response.text())
      .then((text) => {
        window.localStorage.setItem("vot-locale", text);
        this.setLocaleFromJsonString(text);
        window.localStorage.setItem("vot-locale-version", localesVersion);
      })
      .catch((error) => {
        console.error("[VOT] failed get locale, cause:", error);
        this.setLocaleFromJsonString(window.localStorage.getItem("vot-locale"));
      });
  }

  setLocaleFromJsonString(json) {
    try {
      this.locale = JSON.parse(json) ?? {};
    } catch (exception) {
      console.error("[VOT]", exception);
      this.locale = {};
    }
  }

  getFromLocale(locale, key) {
    const result = key.split(".").reduce((locale, key) => {
      locale = locale[key];
      return locale;
    }, locale);
    if (!result) {
      console.warn("[VOT] [localizationProvider] locale", locale, "doesn't contain key", key);
    }
    return result;
  }

  getDefault(key) {
    return this.getFromLocale(defaultLocale, key) ?? key;
  }

  get(key) {
    return this.getFromLocale(this.locale, key) ?? this.getFromLocale(defaultLocale, key) ?? key;
  }
}
