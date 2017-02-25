require('babel-polyfill');
require('babel-register')({
  extensions: ['.js', '.jsx']
});

let WebpackDevServer = require('webpack-dev-server');
let webpack          = require('webpack');
let config           = require('./webpack.config.babel.js');
let compiler         = webpack(config);
let open             = require('open');

new WebpackDevServer(compiler, config.devServer)
  .listen(8080, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:8080');
    console.log('Opening your system browser...');
    open('http://localhost:8080/')
  });
