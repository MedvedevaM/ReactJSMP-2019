const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    '@babel/polyfill',
    './client/src/main/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff|png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
        },
      },
      {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
});
