import Vue from 'vue';
import router from './config/router';

import App from './layouts/App';

import './config';


import './assets/main.scss';
import './assets/index.css';




new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
