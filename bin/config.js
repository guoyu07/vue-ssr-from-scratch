require('babel-register')

const pages = [
    {page: 'home', title:'Home Page'},
    {page: 'about', title:'About Page'},
]


// const address = '../src/config/router/home.js';

const {routes} = require('../src/config/router/home.js');

console.log(routes)