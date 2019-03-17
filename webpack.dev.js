const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: [path.join(__dirname, "client/public")],
        watchContentBase: true,
        compress: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            },
        }
    }
});