import path from 'path';
let webpack = require('webpack');

module.exports = {
  entry    : [
		'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './client/index'
  ],
  output   : {
    path      : path.join(__dirname, '/build'),
    filename  : 'bundle.js',
    publicPath: 'http://localhost:8080/build/'
  },
  devtool  : 'eval-source-map',
  module   : {
    rules: [
      { 
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/,
				use: [
				  {
					  loader: 'babel-loader',
						options: {
					  	plugins: ['react-hot-loader/babel']
				  	}
					} 
				]
			}
    ]
  },
  devServer: {
    historyApiFallback: true,
    stats             : {
      colors: true
    },
    contentBase       : path.join(__dirname, 'client'),
    publicPath        : 'http://localhost:8080/build/',
    port              : 8080,
		inline: true,
    hot               : true,
    proxy             : {
      '/api': {
        target: 'http://localhost:3002',
        secure: false
      }
    },
		noInfo: false
  },
  plugins  : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve  : {
    extensions: ['.js', '.jsx']
  }
};
