const path = require('path');
const webpack = require('webpack');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const NODE_ENV = process.env.NODE_ENV || 'development';


const { pages } = require('./bin/config');


var config = {
    entry: (()=>{
        let e = {};
        for(let page of pages) {
            e[page.name] = `./src/pages/${page.name}.js`
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
            'vue$': 'vue/dist/vue.esm.js',
            '@src': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'assets'),
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
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            'PRODUCTION': JSON.stringify(NODE_ENV!=='development'),
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        new ExtractTextPlugin("css/styles.css"),
        
    ].concat(pages.map(page=>{
        return new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false
            },
            // chunks: [page.name],
            excludeChunks: pages.reduce((memo, value)=>{
                if(value.name != page.name)
                    memo.push(value.name)
                return memo
            },[]),
            template: 'index.template.ejs',
            filename: `../templates/${page.name}.ejs`,
            title: page.title,
            head: '<%- head %>',
            content: '<%- content %>',
            hash:true,
            inject: 'body',
        })
    })),
    devtool: NODE_ENV == 'development' ? 'eval-source-map' : false,
}


module.exports = config;