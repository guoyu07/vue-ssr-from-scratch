import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'


import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(VueHead);
Vue.use(VueRouter);


const routes = [
    { path: '/about', component: About }
]


const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;