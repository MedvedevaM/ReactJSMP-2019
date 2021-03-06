const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, { devtool: 'source-map',
  devServer: { hot: true,
    historyApiFallback: true,
    watchContentBase: true,
    compress: true,
    proxy: { '/api': { target: `http://localhost:${process.env.PORT || 3000}` } } } });
