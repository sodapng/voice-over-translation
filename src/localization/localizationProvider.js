import defaultLocale from "./locales/en.json";
import debug from "../utils/debug.js";

const localesVersion = 2;
const localesUrl = `https://raw.githubusercontent.com/ilyhalight/voice-over-translation/${
  DEBUG_MODE || IS_BETA_VERSION ? "dev" : "master"
}/src/localization/locales`;

export const availableLocales = [
  "auto",
  "en",
  "ru",

  "ar",
  "bn",
  "cs",
  "de",
  "es",
  "fa",
  "fr",
  "hi",
  "id",
  "it",
  "ja",
  "jv",
  "kk",
  "ko",
  "ms",
  "pt",
  "tr",
  "uk",
  "ur",
  "vi",
  "zh",
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
    const langOverride = GM_getValue("locale-lang-override", "auto");
    if (langOverride && langOverride !== "auto") {
      this.lang = langOverride;
    } else {
      this.lang =
        (navigator.language || navigator.userLanguage)
          ?.substr(0, 2)
          ?.toLowerCase() ?? "en";
    }
    this.setLocaleFromJsonString(GM_getValue("locale-phrases", ""));
  }

  reset() {
    this.gmValues.forEach((v) => GM_deleteValue(v));
  }

  async update(force = false) {
    if (
      !force &&
      Number(await GM_getValue("locale-version", 0)) === localesVersion &&
      (await GM_getValue("locale-lang")) === this.lang
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
        await GM_setValue("locale-phrases", text);
        this.setLocaleFromJsonString(text);
        const version = this.getFromLocale(this.locale, "__version__");
        if (typeof version === "number")
          await GM_setValue("locale-version", version);
        await GM_setValue("locale-lang", this.lang);
      })
      .catch(async (error) => {
        console.error(
          "[VOT] [localizationProvider] failed get locale, cause:",
          error,
        );
        this.setLocaleFromJsonString(await GM_getValue("locale-phrases", ""));
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
