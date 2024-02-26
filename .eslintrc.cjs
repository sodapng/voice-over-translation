module.exports = {
  env: {
    browser: true,
    es2021: true,
    greasemonkey: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-control-regex": 0,
    "no-async-promise-executor": 0,
  },
  globals: {
    // IMPORTED SCRIPTS
    protobuf: "readonly",
    Hls: "readonly",
    // WEBPACK ENVIRONMENT
    BUILD_MODE: "readonly",
    DEBUG_MODE: "readonly",
    IS_BETA_VERSION: "readonly",
    __MK_GLOBAL__: "readonly",
    // YOUTUBE PAGE API
    ytplayer: "readonly",
  },
};
