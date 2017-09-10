const path = require('path');
const webpack = require('webpack');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const NODE_ENV = process.env.NODE_ENV || 'development';



module.exports = {
    entry: {
        'index': './src/pages/index.js',
        'about': './src/pages/about.js',
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
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                        },
                    },
                ],  
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        inline: true,
        // stats: 'errors-only',
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        new ExtractTextPlugin("css/styles.css"),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            chunks: ["index", "vendors"],
            template: 'src/index.template.ejs',
            filename: '../index.html',
            title: 'Home Page',
        }),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            chunks: ["about", "vendors"],
            template: 'src/index.template.ejs',
            filename: '../about/index.html',
            title: 'About Page'
        })
    ],
    // watch: NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ? 'source-map' : false,
}


