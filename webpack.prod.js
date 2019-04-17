const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, { optimization: { minimizer: [
  new UglifyJsPlugin({ cache: true,
    parallel: true,
    sourceMap: false }),
  new OptimizeCSSAssetsPlugin({}),
] },
plugins: [
  new MiniCssExtractPlugin({ filename: '[name].css',
    chunkFilename: '[id].css' }),
],
module: { rules: [{ test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
  ] }] } });
