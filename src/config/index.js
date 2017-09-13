import Vue from 'vue';
import axios from 'axios';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';


import '../assets/styles/main.scss';

Vue.prototype.$http = axios;

Vue.use(VueHead);
Vue.use(VueRouter);

