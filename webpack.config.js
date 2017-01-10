var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');
var UTIL_DIR = path.resolve(__dirname, 'src/utils')


module.exports = {
  entry: [UTIL_DIR + '/helper.js', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test:  /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
             allChunks: true
         }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
