const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: ['@babel/polyfill', './client/src/main/serverRenderer.js'],
  externals: [nodeExternals()],
  output: {
    filename: 'serverRenderer.js',
    path: path.resolve(__dirname, '../client/dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.(ttf|eot|svg|woff|woff2|png|jpg)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]?[hash]',
      },
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    ],
  },
});
