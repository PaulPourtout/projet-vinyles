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
<<<<<<< HEAD
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
        'file-loader',
        'image-webpack-loader'
    ]
      }
=======
     },
     {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
           name: 'image/[hash].[ext]'
        }
     }
>>>>>>> 2bd4116420fea170448b6a9164cf906e2bf4f2c8
    ]
  }
};

module.exports = config;
