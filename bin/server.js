import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';


const app = express();


app.use(webpackDevMiddleware(webpack(webpackConfig)));

// app.use('/static', express.static(path.join(__dirname, '../dist/static')));
app.use('/static', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, '../dist/about/index.html'));
});


const port = 8080;

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});