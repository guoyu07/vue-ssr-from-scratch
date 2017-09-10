import Vue from 'vue';
import router from '../config/router/about';

import App from '../layouts/App';

import '../config';


import '../assets/styles/main.scss';


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
