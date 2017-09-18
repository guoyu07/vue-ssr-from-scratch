import Vue from 'vue';
import axios from 'axios';
import VueHead from 'vue-head';


import '@assets/styles/main.scss';
import '@assets/styles/modern-business.css';



Vue.prototype.$http = axios;

Vue.use(VueHead);

