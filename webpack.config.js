const path = require('path');
const webpack = require('webpack');

// const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        'index': './src/index.js',
        'about': './src/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/static'),
        publicPath: '/static/',
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })  
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap','sass-loader?sourceMap']
                })  
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            // publicPath: 'img/'
                        },
                    },
                ],
                
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/templates'),
        port: 8080,
        inline: true,
        stats: 'errors-only',
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.template.html',
        })
    ],
    devtool: 'source-map',
}


