import Vue from 'vue'
import Vuex from 'vuex'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'

import App from './App'


Vue.use(Vuex)
Vue.use(VueHead)
Vue.use(VueRouter)



new Vue({
    el: '#app',
    render: h => h(App)
})
