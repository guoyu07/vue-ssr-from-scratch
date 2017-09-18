import Vue from 'vue';

import '../config';

import About from '../layouts/About';

import router from '../router/about';


new Vue({
    el: '#app',
    router,
    render: h => h(About)
})

