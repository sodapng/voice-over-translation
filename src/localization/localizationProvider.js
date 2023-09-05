import defaultLocale from "./locales/en.json";
import debug from "../utils/debug.js";

const localesVersion = 2;
const localesUrl =
  "https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/src/localization/locales";

export const localizationProvider = new (class {
  lang =
    (navigator.language || navigator.userLanguage)
      ?.substr(0, 2)
      ?.toLowerCase() ?? "en";
  locale = {};

  constructor() {
    this.setLocaleFromJsonString(window.localStorage.getItem("vot-locale"));
  }

  reset() {
    window.localStorage.removeItem("vot-locale");
    window.localStorage.removeItem("vot-locale-lang");
    window.localStorage.removeItem("vot-locale-version");
  }

  async update(force = false) {
    if (
      !force &&
      Number(window.localStorage.getItem("vot-locale-version")) ===
        localesVersion &&
      window.localStorage.getItem("vot-locale-lang") === this.lang
    ) {
      return;
    }

    debug.log("Updating locale...");

    await fetch(`${localesUrl}/${this.lang}.json`)
      .then((response) => {
        if (response.status === 200) return response.text();
        throw response.status;
      })
      .then((text) => {
        window.localStorage.setItem("vot-locale", text);
        this.setLocaleFromJsonString(text);
        const version = this.getFromLocale(this.locale, "__version__");
        if (typeof version === "number") window.localStorage.setItem("vot-locale-version", version);
        window.localStorage.setItem("vot-locale-lang", this.lang);
      })
      .catch((error) => {
        console.error(
          "[VOT] [localizationProvider] failed get locale, cause:",
          error
        );
        this.setLocaleFromJsonString(window.localStorage.getItem("vot-locale"));
      });
  }

  setLocaleFromJsonString(json) {
    try {
      this.locale = JSON.parse(json) ?? {};
    } catch (exception) {
      console.error("[VOT] [localizationProvider]", exception);
      this.locale = {};
    }
  }

  getFromLocale(locale, key) {
    const result = key.split(".").reduce((locale, key) => {
      if (typeof locale === "object" && locale) return locale[key];
      return undefined;
    }, locale);
    if (result === undefined) {
      console.warn(
        "[VOT] [localizationProvider] locale",
        locale,
        "doesn't contain key",
        key
      );
    }
    return result;
  }

  getDefault(key) {
    return this.getFromLocale(defaultLocale, key) ?? key;
  }

  get(key) {
    return (
      this.getFromLocale(this.locale, key) ??
      this.getFromLocale(defaultLocale, key) ??
      key
    );
  }
})();
