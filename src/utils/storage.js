import debug from "./debug.js";

export const votStorage = new (class {
  constructor() {
    this.gmSupport = typeof GM_getValue === "function";
    debug.log(`GM Storage Status: ${this.gmSupport}`);
  }

  syncGet(name, def = undefined, toNumber = false) {
    if (this.gmSupport) {
      return GM_getValue(name, def);
    }

    let val = window.localStorage.getItem(name);
    if (name === "udemyData" && typeof val === "string") {
      try {
        val = JSON.parse(val);
      } catch {
        val = def;
      }
    }

    return toNumber ? Number(val) ?? Number(def) : val ?? def;
  }

  async get(name, def = undefined, toNumber = false) {
    if (this.gmSupport) {
      return await GM_getValue(name, def);
    }

    return new Promise((resolve) => {
      resolve(this.syncGet(name, def, toNumber));
    });
  }

  syncSet(name, value) {
    if (this.gmSupport) {
      return GM_setValue(name, value);
    }

    if (name === "udemyData") {
      value = JSON.stringify(value);
    }

    return window.localStorage.setItem(name, value);
  }

  async set(name, value) {
    if (this.gmSupport) {
      return await GM_setValue(name, value);
    }

    return new Promise((resolve) => {
      resolve(this.syncSet(name, value));
    });
  }

  syncDelete(name) {
    if (this.gmSupport) {
      return GM_deleteValue(name);
    }

    return window.localStorage.removeItem(name);
  }

  async delete(name) {
    if (this.gmSupport) {
      return await GM_deleteValue(name);
    }

    return new Promise((resolve) => {
      resolve(this.syncDelete(name));
    });
  }

  syncList() {
    if (this.gmSupport) {
      return GM_listValues();
    }

    return [
      "autoTranslate",
      "dontTranslateLanguage",
      "dontTranslateYourLang",
      "autoSetVolumeYandexStyle",
      "showVideoSlider",
      "syncVolume",
      "subtitlesMaxLength",
      "highlightWords",
      "responseLanguage",
      "defaultVolume",
      "udemyData",
      "audioProxy",
      "showPiPButton",
      "locale-version",
      "locale-lang",
      "locale-phrases",
    ];
  }

  async list() {
    if (this.gmSupport) {
      return await GM_listValues();
    }

    return new Promise((resolve) => {
      resolve(this.syncList());
    });
  }
})();
