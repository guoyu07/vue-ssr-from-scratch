import Vue from 'vue'
import VueRouter from 'vue-router';

import Content from '@src/components/home/Content'

Vue.use(VueRouter)


const routes = [
    { path: '/', name: 'index', component: Content },
    { path: '/g-about', redirect: '/about' }
]


const router = new VueRouter({
    mode: 'history',
    routes
});


export default router;