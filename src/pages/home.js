import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from '../config/router/home';

import App from '../layouts/App';

import '../config';


const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

