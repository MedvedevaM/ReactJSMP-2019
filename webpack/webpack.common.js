const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, '../client/dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    !isDevMod && new CleanWebpackPlugin(),
    isDevMod && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),
};
