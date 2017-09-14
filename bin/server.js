const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


const NODE_ENV = process.env.NODE_ENV || 'development';

const DIST_DIR = path.join(__dirname, '../dist');

const PORT = process.env.PORT || 8080;


const app = express();
const compiler = webpack(webpackConfig);





const data = require('./data');

if(NODE_ENV === 'development') {  
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));



    app.get("/", (req, res, next) => {
        compiler.outputFileSystem.readFile(path.join(DIST_DIR, 'templates/home.ejs'), (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });

    app.get("/article/:id", (req, res, next) => {
        compiler.outputFileSystem.readFile(path.join(DIST_DIR, 'templates/article.ejs'), (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
}
else {  

    app.set('view engine', 'ejs')
    app.set('views', path.join(DIST_DIR, 'templates'));

    app.use('/static', express.static(path.join(DIST_DIR, 'static')));

    app.get('/', (req, res)=>{
        res.render('home.ejs', {head: ''});
    });

    app.get('/article/:id', (req, res)=>{

        let article = data.find(item=>{
            return item.id == req.params.id
        })

        res.render('article.ejs', {
            head: `<meta name="title" content="${article.title}"><meta name="description" content="${article.intro}">`
        });
    });


    // app.get("*", (req, res) => res.sendFile(HTML_FILE));
}

app.get('/data', (req, res)=>{
    res.json(data);
});



app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT} (${NODE_ENV})`);
});