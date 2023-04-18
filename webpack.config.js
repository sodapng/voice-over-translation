const path = require('path');
const fs = require('fs');

var webpack = require('webpack');
const { UserscriptPlugin } = require('webpack-userscript');
const dev = process.env.NODE_ENV === 'development';

console.log('development mode: ', dev);

function getHeaders(file) {
  const headersPath = path.resolve(__dirname, 'src', file);
  return JSON.parse(fs.readFileSync(headersPath).toString());
}

const ru_headers = getHeaders('locales/ru/headers.json');

module.exports = (env) => {
  const build_mode = env.build_mode;
  console.log('build mode: ', build_mode);
  return {
    mode: dev ? 'development' : 'production',
    resolve: {
      extensions: [".js"],
    },
    performance: {
      hints: "error",
      maxEntrypointSize: 2000 * 10 ** 3,
      maxAssetSize: 2000 * 10 ** 3,
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: build_mode === 'cloudflare' ? 'vot-cloudflare.js' : 'vot.js',
      publicPath: "/",
    },
    devServer: {
      server: "http",
      port: 11944,
      allowedHosts: "all",
      hot: true,
      liveReload: true,
      magicHtml: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      client: {
        webSocketURL: "ws://localhost:11944/ws",
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        BUILD_MODE: JSON.stringify(build_mode)
      }),
      new UserscriptPlugin({
        headers: async () => {
          const headers = getHeaders('headers.json');
  
          let version = headers.version;
          if (dev) {
            headers["version"] = `${version}-build.[buildNo]`;
          }
  
          if (build_mode === 'cloudflare') {
            headers['name'] = '[VOT Cloudflare] - Закадровый перевод видео';
            headers['inject-into'] = 'page';
            headers['updateURL'] = 'https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js';
            headers['downloadURL'] = 'https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js';
          }
  
          return headers;
        },
        proxyScript: {
          filename: "[basename].proxy.user.js",
          baseURL: "http://localhost:11944/",
        },
        i18n: {
          'ru': (headers) => ({
            ...headers,
            // name: build_mode === 'cloudflare' ? '[VOT Cloudflare] - Закадровый перевод видео' : ru_headers['name'],
            description: ru_headers['description']
          }),
        },
        strict: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    optimization: {
      emitOnErrors: true,
      moduleIds: "named",
      minimize: false
    },
  }
}