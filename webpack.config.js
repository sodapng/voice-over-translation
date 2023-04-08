const path = require('path');
const fs = require('fs');

var webpack = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { UserscriptPlugin } = require('webpack-userscript');
const dev = process.env.NODE_ENV === 'development';

console.log('development mode: ', dev);

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
      original: true,
      client: {
        webSocketURL: "ws://webpack.localhost:11944/ws",
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        BUILD_MODE: JSON.stringify(build_mode)
      }),
      // new CleanWebpackPlugin(),
      new UserscriptPlugin({
        headers: async () => {
          const headerPath = path.resolve(__dirname, 'src', 'headers.json');
          const header = JSON.parse(fs.readFileSync(headerPath).toString());
  
          let version = header.version;
          if (dev) {
            header["version"] = `${version}-build.[buildNo]`;
          }
  
          if (build_mode === 'cloudflare') {
            header['name'] = '[VOT Cloudflare] - Закадровый перевод видео';
            header['inject-into'] = 'page';
            header['updateURL'] = 'https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js';
            header['downloadURL'] = 'https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js';
            header['inject-into'] = 'page';
          }
  
          return header;
        },
        proxyScript: {
          filename: "[basename].proxy.user.js",
          baseURL: "http://webpack.localhost:11944/",
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