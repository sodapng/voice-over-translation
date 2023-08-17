module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "greasemonkey": true,
        "node": true
    },
    extends: "eslint:recommended",
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
        "no-control-regex": 0,
        "no-async-promise-executor": 0
    },
    ignorePatterns: [
        "vot-cli/*",
        "web-server/*",
        "dist/*",
    ],
    globals: {
        // IMPORTED SCRIPTS
        "protobuf": "readonly",
        // WEBPACK ENVIRONMENT
        "BUILD_MODE": "readonly",
        "DEBUG_MODE": "readonly",
        // YOUTUBE PAGE API
        "ytplayer": "readonly",
    }
}
