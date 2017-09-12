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

if(NODE_ENV === 'development') {  
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));



    app.get("/", (req, res, next) => {
        compiler.outputFileSystem.readFile(path.join(DIST_DIR, 'templates/home.html'), (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });

    app.get("/about", (req, res, next) => {
        compiler.outputFileSystem.readFile(path.join(DIST_DIR, 'templates/about.html'), (err, result) => {
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

    app.use('/static', express.static(path.join(DIST_DIR, 'static')));

    app.get('/', (req, res)=>{
        res.sendFile(path.join(DIST_DIR, 'templates/home.html'));
    });

    app.get('/about', (req, res)=>{
        res.sendFile(path.join(DIST_DIR, 'templates/about.html'));
    });


    // app.get("*", (req, res) => res.sendFile(HTML_FILE));
}










// app.use('/static', express.static(path.join(__dirname, '../dist/static')));


// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

// app.get('/about', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../dist/about/index.html'));
// });



app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT} (${NODE_ENV})`);
});