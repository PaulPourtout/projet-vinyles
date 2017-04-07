const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: "bundle.js",
    filename: 'bundle.js'
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
        loaders: ["react-hot-loader", "babel-loader"]
      },
	  {
        test: /\.(js|jsx)?$/,
        include: APP_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }, {
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
