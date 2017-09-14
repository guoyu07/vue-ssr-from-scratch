const path = require('path');
const webpack = require('webpack');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const NODE_ENV = process.env.NODE_ENV || 'development';


const pages = require('./bin/config');


var config = {
    entry: (()=>{
        let e = {};
        for(let obj of pages) {
            e[obj.page] = `./src/pages/${obj.page}.js`
        }
        return e;
    })(),
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
                    use: ['css-loader', 'postcss-loader']
                })  
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader','sass-loader']
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
        contentBase: path.resolve(__dirname, 'dist/templates'),
        port: 8080,
        inline: true,
        // stats: 'errors-only',
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            'PRODUCTION': JSON.stringify(NODE_ENV!=='development'),
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        new ExtractTextPlugin("css/styles.css"),
        
    ].concat(pages.map(obj=>{
        return new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            chunks: [obj.page, "vendors"],
            template: 'src/index.template.ejs',
            filename: `../templates/${obj.page}.ejs`,
            title: obj.title,
            head: '<%- head %>',
            content: '<%- content %>',
            hash:true,
            inject: 'body',
        })
    })),
    // watch: NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ? 'eval-source-map' : false,
}


module.exports = config;