import defaultLocale from "./locales/en.json";
import debug from "../utils/debug.js";
import { votStorage } from "../utils/storage.js";

const localesVersion = 2;
const localesUrl = `https://raw.githubusercontent.com/ilyhalight/voice-over-translation/${
  DEBUG_MODE || IS_BETA_VERSION ? "dev" : "master"
}/src/localization/locales`;

export const availableLocales = [
  "auto",
  "en",
  "ru",

  "af",
  "am",
  "ar",
  "az",
  "bg",
  "bn",
  "bs",
  "ca",
  "cs",
  "cy",
  "da",
  "de",
  "el",
  "es",
  "et",
  "eu",
  "fa",
  "fi",
  "fr",
  "gl",
  "hi",
  "hr",
  "hu",
  "hy",
  "id",
  "it",
  "ja",
  "jv",
  "kk",
  "km",
  "kn",
  "ko",
  "lo",
  "mk",
  "ml",
  "mn",
  "ms",
  "mt",
  "my",
  "ne",
  "nl",
  "pa",
  "pl",
  "pt",
  "ro",
  "si",
  "sk",
  "sl",
  "sq",
  "sr",
  "su",
  "sv",
  "sw",
  "tr",
  "uk",
  "ur",
  "uz",
  "vi",
  "zh",
  "zu",
];

export const localizationProvider = new (class {
  lang = "en";
  locale = {};
  gmValues = [
    "locale-phrases",
    "locale-lang",
    "locale-version",
    "locale-lang-override",
  ];

  constructor() {
    const langOverride = votStorage.syncGet("locale-lang-override", "auto");
    if (langOverride && langOverride !== "auto") {
      this.lang = langOverride;
    } else {
      this.lang =
        (navigator.language || navigator.userLanguage)
          ?.substr(0, 2)
          ?.toLowerCase() ?? "en";
    }
    this.setLocaleFromJsonString(votStorage.syncGet("locale-phrases", ""));
  }

  reset() {
    this.gmValues.forEach((v) => votStorage.syncDelete(v));
  }

  async update(force = false) {
    if (
      !force &&
      (await votStorage.get("locale-version", 0, true)) === localesVersion &&
      (await votStorage.get("locale-lang")) === this.lang
    ) {
      return;
    }

    debug.log("Updating locale...");

    await fetch(`${localesUrl}/${this.lang}.json`)
      .then((response) => {
        if (response.status === 200) return response.text();
        throw response.status;
      })
      .then(async (text) => {
        await votStorage.set("locale-phrases", text);
        this.setLocaleFromJsonString(text);
        const version = this.getFromLocale(this.locale, "__version__");
        if (typeof version === "number")
          await votStorage.set("locale-version", version);
        await votStorage.set("locale-lang", this.lang);
      })
      .catch(async (error) => {
        console.error(
          "[VOT] [localizationProvider] failed get locale, cause:",
          error,
        );
        this.setLocaleFromJsonString(
          await votStorage.get("locale-phrases", ""),
        );
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
        key,
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
