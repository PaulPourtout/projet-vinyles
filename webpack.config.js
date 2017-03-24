const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }, {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = config;
