import { lang } from "./menu.js";
import { localizationProvider } from "./localization/localizationProvider.js";

// --- IndexedDB functions start:
const dbVersion = 3; // current db version
const settingsDefault = {
  key: "settings",
  autoTranslate: 0,
  defaultVolume: 100,
  showVideoSlider: 0,
  syncVolume: 0,
  autoSetVolumeYandexStyle: 1,
  dontTranslateYourLang: 1,
}; // default settings for db v1

const valuesV2 = {
  audioProxy: 0,
};

const valuesV3 = {
  subtitlesMaxLength: 300,
  highlightWords: 0,
  responseLanguage: lang,
};

function openDB(name) {
  return indexedDB.open(name, dbVersion);
}

async function initDB() {
  return new Promise((resolve, reject) => {
    function updateVersionProccessor(
      transaction,
      db,
      indexes,
      previousIndexes = {}
    ) {
      // openRequest is transaction object
      // indexes is object of strings with default values (used for createIndex) ex. {"name": 0}
      // previousIndexes is indexes for previous version
      const objectStore = transaction.objectStore("settings");

      for (const key of Object.keys(indexes)) {
        objectStore.createIndex(key, key, { unique: false });
      }

      console.log("[VOT] The database has been updated");
      objectStore.transaction.oncomplete = () => {
        const objectStore = db
          .transaction("settings", "readwrite")
          .objectStore("settings");
        const request = objectStore.get("settings");

        request.onerror = (event) => {
          console.error(
            "[VOT] Data could not be retrieved from the Database: ",
            event.error
          );
          reject(false);
        };

        request.onsuccess = () => {
          const data =
            request.result || Object.assign(settingsDefault, previousIndexes); // use data from db or reset all data
          for (const key in indexes) {
            data[key] = indexes[key];
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error(
              "[VOT] Failed to update the Database to new version",
              event.error
            );
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            console.log(
              "[VOT] Standard settings of the new version have been added to the Database."
            );
            resolve(true);
          };
        };
      };
    }

    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(
        `[VOT] ${localizationProvider.getDefault("VOTFailedInitDB")}: ${openRequest.error.message}`
      );
      reject(false);
    };

    openRequest.onupgradeneeded = (event) => {
      const db = openRequest.result;

      db.onerror = () => {
        console.error(`[VOT] ${localizationProvider.getDefault("VOTFailedInitDB")}`, openRequest.error);
        alert(`[VOT] ${localizationProvider.get("VOTFailedInitDB")}`);
        reject(false);
      };

      if (event.oldVersion < 1) {
        // db not found
        const objectStore = db.createObjectStore("settings", {
          keyPath: "key",
        });

        // add indexes for 1 version (without key index)
        for (const key of Object.keys(settingsDefault).filter(
          (k) => k !== "key"
        )) {
          objectStore.createIndex(key, key, { unique: false });
        }

        console.log("[VOT] Database Created");

        objectStore.transaction.oncomplete = () => {
          const objectStore = db
            .transaction("settings", "readwrite")
            .objectStore("settings");
          const request = objectStore.add(settingsDefault);

          request.onsuccess = () => {
            console.log(
              "[VOT] Standard settings added to the Database: ",
              request.result
            );
            resolve(true);
          };

          request.onerror = () => {
            console.log(
              "[VOT] Error when adding standard settings to the Database: ",
              request.error
            );
            reject(false);
          };
        };
      }

      if (event.oldVersion < 2) {
        // db is outdated (db version is 1)
        updateVersionProccessor(openRequest.transaction, db, valuesV2);
      }

      if (event.oldVersion < 3) {
        // db is outdated (db version is 1)
        updateVersionProccessor(openRequest.transaction, db, valuesV3);
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        console.log(`[VOT] ${localizationProvider.getDefault("VOTDBNeedUpdate")}`);
        alert(`[VOT] ${localizationProvider.get("VOTDBNeedUpdate")}`);
        window.location.reload();
        reject(false);
      };
      resolve(true);
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      console.error(`[VOT] ${localizationProvider.getDefault("VOTDisabledForDBUpdating").format(window.location.hostname)}`, db);
      alert(`[VOT] ${localizationProvider.get("VOTDisabledForDBUpdating").format(window.location.hostname)}`);
      reject(false);
    };
  });
}

async function updateDB({
  autoTranslate,
  defaultVolume,
  showVideoSlider,
  syncVolume,
  autoSetVolumeYandexStyle,
  dontTranslateYourLang,
  audioProxy,
  subtitlesMaxLength,
  highlightWords,
  responseLanguage,
}) {
  return new Promise((resolve, reject) => {
    if (
      typeof autoTranslate === "number" ||
      typeof defaultVolume === "number" ||
      typeof showVideoSlider === "number" ||
      typeof syncVolume === "number" ||
      typeof autoSetVolumeYandexStyle === "number" ||
      typeof dontTranslateYourLang === "number" ||
      typeof audioProxy === "number" ||
      typeof subtitlesMaxLength === "number" ||
      typeof highlightWords === "number" ||
      typeof responseLanguage === "string"
    ) {
      const openRequest = openDB("VOT");

      openRequest.onerror = () => {
        console.error(`[VOT] ${localizationProvider.getDefault("VOTFailedWriteToDB")}`, openRequest.error.message);
        alert(`[VOT] ${localizationProvider.get("VOTFailedWriteToDB")}`);
        reject(false);
      };

      openRequest.onupgradeneeded = async () => {
        const db = openRequest.result;
        db.close();
        await initDB();
        resolve(true);
      };

      openRequest.onsuccess = () => {
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          console.log(
            "[VOT] The database needs an update, please reload the page if it didn't happen automatically"
          );
          window.location.reload();
          reject(false);
        };

        const objectStore = db
          .transaction("settings", "readwrite")
          .objectStore("settings");
        const request = objectStore.get("settings");

        request.onerror = (event) => {
          console.error(
            "[VOT] Data could not be retrieved from the Database: ",
            event.error
          );
          reject(false);
        };

        request.onsuccess = () => {
          const data = request.result;

          if (typeof autoTranslate === "number") {
            data.autoTranslate = autoTranslate;
          }

          if (typeof defaultVolume === "number") {
            data.defaultVolume = defaultVolume;
          }

          if (typeof showVideoSlider === "number") {
            data.showVideoSlider = showVideoSlider;
          }

          if (typeof syncVolume === "number") {
            data.syncVolume = syncVolume;
          }

          if (typeof autoSetVolumeYandexStyle === "number") {
            data.autoSetVolumeYandexStyle = autoSetVolumeYandexStyle;
          }

          if (typeof dontTranslateYourLang === "number") {
            data.dontTranslateYourLang = dontTranslateYourLang;
          }

          if (typeof audioProxy === "number") {
            data.audioProxy = audioProxy;
          }

          if (typeof subtitlesMaxLength === "number") {
            data.subtitlesMaxLength = subtitlesMaxLength;
          }

          if (typeof highlightWords === "number") {
            data.highlightWords = highlightWords;
          }

          if (typeof responseLanguage === "string") {
            data.responseLanguage = responseLanguage;
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error(
              "[VOT] failed update db data: ",
              event.error
            );
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            resolve(true);
          };
        };
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        console.error(`[VOT] ${localizationProvider.getDefault("VOTDisabledForDBUpdating").format(window.location.hostname)}`, db);
        alert(`[VOT] ${localizationProvider.get("VOTDisabledForDBUpdating").format(window.location.hostname)}`);
        reject(false);
      };
    }
  });
}

async function readDB() {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(`[VOT] ${localizationProvider.getDefault("VOTFailedReadFromDB")}`, openRequest.error.message);
      alert(`[VOT] ${localizationProvider.get("VOTFailedReadFromDB")}`);
      reject(false);
    };

    openRequest.onupgradeneeded = async () => {
      const db = openRequest.result;
      db.close();
      await initDB();
      resolve(true);
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        console.error(`[VOT] ${localizationProvider.getDefault("VOTDBNeedUpdate")}`);
        alert(`[VOT] ${localizationProvider.get("VOTDBNeedUpdate")}`);
        reject(false);
      };

      const objectStore = db.transaction("settings").objectStore("settings");
      const request = objectStore.get("settings");

      request.onerror = (event) => {
        console.error(
          "[VOT]",
          localizationProvider.getDefault("VOTFailedReadFromDB"),
          event.error
        );
        console.error("[VOT]", event);
        reject(false);
      };

      request.onsuccess = () => {
        if (request.result === undefined) {
          db.close();
          deleteDB();
          reject(false);
        }
        const data = request.result;
        resolve(data);
      };
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      console.error(`[VOT] ${localizationProvider.getDefault("VOTDisabledForDBUpdating").format(window.location.hostname)}`, db);
      alert(`[VOT] ${localizationProvider.get("VOTDisabledForDBUpdating").format(window.location.hostname)}`);
      reject(false);
    };
  });
}

function deleteDB() {
  indexedDB.deleteDatabase("VOT");
}

export { initDB, readDB, updateDB, deleteDB };
