var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './client/index/entry.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader!sass-loader')
      }
    ]
  },
  postcss: function(){
    return [autoprefixer({
      browsers: ['last 5 versions', '> 1%']
    })]
  },
  plugins: [new ExtractTextPlugin('index.css', { allChunks: true })]
}
