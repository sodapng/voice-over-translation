import { translations } from "../config/constants.js";

const debug = {};
debug.log = (...text) => {
  if (!DEBUG_MODE) {
    return;
  }
  return console.log(
    "%c[VOT DEBUG]",
    "background: #F2452D; color: #fff; padding: 5px;",
    ...text
  );
};

debug.translations = (testLang) => {
  if (!DEBUG_MODE) {
    return;
  }
  // for add indexes
  const testedTranslations = Object.entries(translations[testLang]).map(
    ([key, value]) => ({
      phrase: key,
      translated: value,
    })
  );
  testedTranslations.unshift({
    phrase: "language_code (debug only)",
    translated: testLang,
  });
  return console.table(testedTranslations);
};

export default debug;
