import Vue from 'vue';
import axios from 'axios';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';

import '../assets'

Vue.use(VueHead);
Vue.use(VueRouter);


Vue.prototype.$http = axios;
