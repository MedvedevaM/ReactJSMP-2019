const path = require("path");

module.exports = {
    devtool: 'source-map',
    entry: "./client/src/index.js",
    output: {
        path: path.resolve(__dirname, 'client/dist'),
        publicPath: '/dist/',
        filename: 'app.bundle.js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }]
    },
    devServer: {
        port: 8080,
        hotOnly: true,
        contentBase: [path.join(__dirname, "client/public")],
        watchContentBase: true,
        compress: true
    }
};