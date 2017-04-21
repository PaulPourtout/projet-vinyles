const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: [
	'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
	APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
	filename: 'bundle.js',
    publicPath: "/",
	hotUpdateChunkFilename: 'hot-update.js',
	hotUpdateMainFilename: 'hot-update.json'
  },
  plugins:
  [
  	new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        include: APP_DIR,
        loaders: ["react-hot-loader/webpack", "babel-loader"]
      },
	   {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: 'image/[hash].[ext]'
        }
      }
    ]
  }
};

module.exports = config;
