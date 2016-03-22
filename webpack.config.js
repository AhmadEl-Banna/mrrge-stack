var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            config: path.join(__dirname, 'config', process.env.NODE_ENV)
        }
    },
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './webApp/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src/webApp')
        }]
    }
};