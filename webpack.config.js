import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import webpack from "webpack";

import { monkey } from "webpack-monkey";
import ESLintPlugin from "eslint-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

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

    return name + ".user.js";
  }

  function get_name_by_build_mode(name) {
    let finalName =
      build_mode === "cloudflare"
        ? name.replace("[VOT]", "[VOT Cloudflare]")
        : name;

    return finalName;
  }

  return monkey({
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
      ...(() => {
        if (!dev) {
          return { filename: get_filename() };
        }
      })(),
    },
    monkey: {
      debug: dev,
      meta: {
        resolve: "headers.json",
        transform({ meta }) {
          const extFileName = get_filename().slice(0, -8);
          const finalURL = `${repo}/${
            isBeta ? "dev" : "master"
          }/dist/${extFileName}.user.js`;

          meta.namespace = extFileName;
          meta.updateURL = meta.downloadURL = finalURL;

          if (build_mode === "cloudflare") {
            meta.name = meta.name.replace("[VOT]", "[VOT Cloudflare]");
            meta["inject-into"] = "page";
          }

          const files = fs.readdirSync(
            path.resolve(__dirname, "src", "locales"),
          );

          meta.name = {
            default: meta.name,
          };

          meta.description = {
            default: meta.description,
          };

          for (const file of files) {
            const localeHeaders = getHeaders(file);
            const lang = file.substring(0, 2);

            meta.name[lang] = get_name_by_build_mode(localeHeaders.name);
            meta.description[lang] = localeHeaders.description;
          }

          return meta;
        },
      },
    },
    plugins: [
      new ESLintPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
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
      minimizer: [new TerserPlugin()],
    },
  });
};
