const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../client/dist');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const webpackConfig = require('../webpack');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  const serverRenderer = require('../client/dist/serverRenderer').default;
  app.use(express.static('dist'));
  app.use(serverRenderer());
}

app.listen(port, (err) => {
  if (err) { console.log(err); }
    console.info(`Listening on port ${  port}`);
});

module.exports = app;
