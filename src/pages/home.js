import Vue from 'vue';
import axios from 'axios';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';

import '../assets'

Vue.use(VueHead);
Vue.use(VueRouter);
Vue.prototype.$http = axios;


import Home from '../layouts/Home';
import router from '../router/home';


new Vue({
    el: '#app',
    router,
    render: h => h(Home)
})

