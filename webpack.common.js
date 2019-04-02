const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './client/src/main/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'client/src/main/index.html'
        })
    ],
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'client/dist')
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
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|jpg|png|cur|svg)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        }]
    },
};