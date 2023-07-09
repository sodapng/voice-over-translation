import { lang } from "./menu.js";
import { translations } from "./config/constants.js";

// --- IndexedDB functions start:
const dbVersion = 2; // current db version
const settingsDefault = {
  key: "settings",
  autoTranslate: 0,
  defaultVolume: 100,
  showVideoSlider: 0,
  syncVolume: 0,
  autoSetVolumeYandexStyle: 1,
  dontTranslateYourLang: 0,
}; // default settings for db v1

function openDB(name) {
  return indexedDB.open(name, dbVersion);
}

async function initDB() {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(
        `${translations[lang].VOTFailedInitDB}: ${openRequest.error.message}`
      );
      reject(false);
    };

    openRequest.onupgradeneeded = (event) => {
      const db = openRequest.result;

      db.onerror = () => {
        const errorMessage = translations[lang].VOTFailedInitDB;
        alert(errorMessage);
        console.error(errorMessage, openRequest.error);
        reject(false);
      };

      if (event.oldVersion < 1) {
        // db not found
        const objectStore = db.createObjectStore("settings", {
          keyPath: "key",
        });

        objectStore.createIndex("autoTranslate", "autoTranslate", {
          unique: false,
        });
        objectStore.createIndex("defaultVolume", "defaultVolume", {
          unique: false,
        });
        objectStore.createIndex("showVideoSlider", "showVideoSlider", {
          unique: false,
        });
        objectStore.createIndex("syncVolume", "syncVolume", { unique: false });
        objectStore.createIndex(
          "autoSetVolumeYandexStyle",
          "autoSetVolumeYandexStyle",
          { unique: false }
        );
        objectStore.createIndex(
          "dontTranslateYourLang",
          "dontTranslateYourLang",
          { unique: false }
        );

        console.log("VOT: Database Created");

        objectStore.transaction.oncomplete = (event) => {
          const objectStore = db
            .transaction("settings", "readwrite")
            .objectStore("settings");
          const request = objectStore.add(settingsDefault);

          request.onsuccess = () => {
            console.log(
              "VOT: Standard settings added to the Database: ",
              request.result
            );
            resolve(true);
          };

          request.onerror = () => {
            console.log(
              "VOT: Error when adding standard settings to the Database: ",
              request.error
            );
            reject(false);
          };
        };
      }

      if (event.oldVersion < 2) {
        // db is outdated (db version is 1)
        const transaction = openRequest.transaction;
        const objectStore = transaction.objectStore("settings");
        objectStore.createIndex("audioProxy", "audioProxy", { unique: false });
        console.log("VOT: The database has been updated to the 2nd version");

        objectStore.transaction.oncomplete = (event) => {
          const objectStore = db
            .transaction("settings", "readwrite")
            .objectStore("settings");
          const request = objectStore.get("settings");

          request.onerror = (event) => {
            console.error(
              "VOT: Data could not be retrieved from the Database: ",
              event.error
            );
            reject(false);
          };

          request.onsuccess = () => {
            const data = request.result || settingsDefault; // use data from db or reset all data
            data.audioProxy = 0; // add default value for new index

            const requestUpdate = objectStore.put(data);

            requestUpdate.onerror = (event) => {
              console.error(
                "VOT: Failed to update the Database to version 2: ",
                event.error
              );
              reject(false);
            };

            requestUpdate.onsuccess = () => {
              console.log(
                "VOT: Standard settings of the 2nd version have been added to the Database."
              );
              resolve(true);
            };
          };
        };
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        const errorMessage = translations[lang].VOTDBNeedUpdate;
        alert(errorMessage);
        console.log(errorMessage);
        window.location.reload();
        reject(false);
      };
      resolve(true);
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      const errorMessage = translations[lang].VOTDisabledForDBUpdating;
      console.error(errorMessage, db);
      alert(errorMessage);
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
}) {
  return new Promise((resolve, reject) => {
    if (
      typeof autoTranslate === "number" ||
      typeof defaultVolume === "number" ||
      typeof showVideoSlider === "number" ||
      typeof syncVolume === "number" ||
      typeof autoSetVolumeYandexStyle === "number" ||
      typeof dontTranslateYourLang === "number" ||
      typeof audioProxy === "number"
    ) {
      const openRequest = openDB("VOT");

      openRequest.onerror = () => {
        const errorMessage = translations[lang].VOTFailedWriteToDB;
        alert(errorMessage);
        console.error(errorMessage, openRequest.error.message);
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
            "VOT: The database needs an update, please reload the page if it didn't happen automatically"
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
            "VOT: Data could not be retrieved from the Database: ",
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

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error(
              "VOT: Не удалось обновить данные в Базе Данных: ",
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
        const errorMessage = translations[lang].VOTDisabledForDBUpdating;
        console.error(errorMessage, db);
        alert(errorMessage);
        reject(false);
      };
    }
  });
}

async function readDB() {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      const errorMessage = translations[lang].VOTFailedReadFromDB;
      alert(errorMessage);
      console.error(errorMessage, openRequest.error.message);
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
        const errorMessage = translations[lang].VOTDBNeedUpdate;
        alert(errorMessage);
        console.error(errorMessage);
        reject(false);
      };

      const objectStore = db.transaction("settings").objectStore("settings");
      const request = objectStore.get("settings");

      request.onerror = (event) => {
        console.error(translations[lang].VOTFailedReadFromDB, event.error);
        console.error(event);
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
      const errorMessage = translations[lang].VOTDisabledForDBUpdating;
      console.error(errorMessage, db);
      alert(errorMessage);
      reject(false);
    };
  });
}

function deleteDB() {
  indexedDB.deleteDatabase("VOT");
}

export { initDB, readDB, updateDB, deleteDB };
