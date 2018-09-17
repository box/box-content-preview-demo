const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const safeParser = require('postcss-safe-parser');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve('src/index.js')
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            moment: path.resolve('node_modules/box-ui-elements/lib/util/MomentShim') // Hack to leverage Intl instead
        }
    },
    devServer: {
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};
