import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import webpack from "webpack";

import { UserscriptPlugin } from "webpack-userscript";
import ESLintPlugin from "eslint-webpack-plugin";
// const ESLintPlugin = require('eslint-webpack-plugin');

const repo =
  "https://raw.githubusercontent.com/ilyhalight/voice-over-translation";
const dev = process.env.NODE_ENV === "development";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let isBeta = getHeaders().version.includes("beta");

console.log("development mode: ", dev);

function getHeaders(lang) {
  const headersPath = path.resolve(
    __dirname,
    "src",
    lang ? `locales/${lang}` : "",
    "headers.json",
  );
  return JSON.parse(fs.readFileSync(headersPath).toString());
}

export default (env) => {
  const build_mode = env.build_mode;
  const build_type = env.build_type;
  console.log("build mode: ", build_mode);
  console.log("build type: ", build_type);

  function get_filename() {
    let name = "vot";
    if (build_mode === "cloudflare") {
      name += "-cloudflare";
    }

    if (build_type === "minify") {
      name += "-min";
    }

    return name + ".js";
  }

  function get_name_by_build_mode(name) {
    let finalName =
      build_mode === "cloudflare"
        ? name.replace("[VOT]", "[VOT Cloudflare]")
        : name;

    if (dev) {
      finalName = "[DEBUG] " + finalName;
    }
    return finalName;
  }

  return {
    mode: dev ? "development" : "production",
    resolve: {
      extensions: [".js"],
    },
    performance: {
      hints: "error",
      maxEntrypointSize: 2000 * 10 ** 3,
      maxAssetSize: 2000 * 10 ** 3,
    },
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: get_filename(),
      publicPath: "/",
    },
    devServer: {
      server: "http",
      port: 11945,
      allowedHosts: "all",
      hot: true,
      liveReload: false,
      magicHtml: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      // client: {
      //   webSocketURL: "ws://localhost:11944/ws",
      //   progress: true,
      //   reconnect: false
      // },
      client: false,
    },
    plugins: [
      new ESLintPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new UserscriptPlugin({
        headers: async () => {
          const headers = getHeaders();

          let version = headers.version;

          const extFileName = get_filename().slice(0, -3);
          const finalURL = `${repo}/${
            isBeta ? "dev" : "master"
          }/dist/${extFileName}.user.js`;
          headers["namespace"] = extFileName;
          headers["updateURL"] = finalURL;
          headers["downloadURL"] = finalURL;

          if (build_mode === "cloudflare") {
            headers["name"] = "[VOT Cloudflare] - Voice Over Translation";
            headers["inject-into"] = "page";
          }

          if (dev) {
            headers["version"] = `${version}-build.[buildNo]`;
            headers["name"] = "[DEBUG] " + headers["name"];
          }

          return headers;
        },
        proxyScript: {
          filename: "[basename].proxy.user.js",
          baseURL: "http://localhost:11945/",
        },
        i18n: {
          ...(() => {
            const files = fs.readdirSync(
              path.resolve(__dirname, "src", "locales"),
            );
            const localedHeaders = {};
            for (const file of files) {
              const localeHeaders = getHeaders(file);
              localedHeaders[file.substring(0, 2)] = {
                name: get_name_by_build_mode(localeHeaders.name),
                description: localeHeaders.description,
              };
            }

            return localedHeaders;
          })(),
        },
        strict: true,
      }),
      new webpack.DefinePlugin({
        BUILD_MODE: JSON.stringify(build_mode),
        DEBUG_MODE: dev,
        IS_BETA_VERSION: isBeta,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    optimization: {
      emitOnErrors: true,
      moduleIds: "named",
      minimize: build_type === "minify" ? true : false,
    },
  };
};
