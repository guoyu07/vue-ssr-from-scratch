import Vue from 'vue';

import '../config';

import Home from '../layouts/Home';

import router from '../router/home';


new Vue({
    el: '#app',
    router,
    render: h => h(Home)
})

