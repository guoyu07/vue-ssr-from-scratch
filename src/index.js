import Vue from 'vue'
import Vuex from 'vuex'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'

import App from './App'

import './assets/main.scss'

Vue.use(Vuex)
Vue.use(VueHead)
Vue.use(VueRouter)



new Vue({
    el: '#app',
    render: h => h(App)
})
