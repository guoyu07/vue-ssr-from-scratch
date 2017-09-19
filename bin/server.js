const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const NODE_ENV = process.env.NODE_ENV || 'development';
const ROOT_DIR = path.join(__dirname, '..');
const PORT = process.env.PORT || 8080;

const { pages } = require('./config');

const app = express();
const compiler = webpack(webpackConfig);

app.use('/static', express.static(path.join(ROOT_DIR, 'static')));

if(NODE_ENV === 'development') {  

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

    for(let page of pages) {

        app.get(page.url, (req, res) => {
            compiler.outputFileSystem.readFile(path.join(ROOT_DIR, 'dist', 'templates', `${page.name}.ejs`), "utf8", (err, result) => {
                if (err) {
                    return next(err);
                }
                res.set('content-type', 'text/html');
                res.send(result.replace(/(<%)(.*?)(%>)/g,''));
                res.end();
            });
        });
    }

}
else {
    app.use('/static', express.static(path.join(ROOT_DIR, 'dist', 'static')));

    app.set('view engine', 'ejs')
    app.set('views', path.join(ROOT_DIR, 'dist', 'templates'));

    app.get("/", (req, res) => {
        res.render('home.ejs', {head: '', content: ''});
    });

    app.get("/about", (req, res) => {
        res.render('about.ejs', {head: '', content: ''});
    });
}






app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT} (${NODE_ENV})`);
});