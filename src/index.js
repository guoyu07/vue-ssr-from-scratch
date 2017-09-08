import Vue from 'vue'
import Vuex from 'vuex'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'

import App from './App'


import axios from 'axios'

import './assets/main.scss'
import './assets/index.css'

Vue.use(Vuex)
Vue.use(VueHead)
Vue.use(VueRouter)

Vue.prototype.$http = axios

new Vue({
    el: '#app',
    render: h => h(App)
})
