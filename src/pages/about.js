import Vue from 'vue';
import axios from 'axios';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';

import '../assets'

Vue.use(VueHead);
Vue.use(VueRouter);
Vue.prototype.$http = axios;



import About from '../layouts/About';
import router from '../router/about';


new Vue({
    el: '#app',
    router,
    render: h => h(About)
})

