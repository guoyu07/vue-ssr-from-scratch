import Vue from 'vue';
import VueRouter from 'vue-router'

import '../config';
import App from '../layouts/App';

import routes from '../config/routes/article';

import store from '../config/store'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/article',
            children: routes,
            component: ()=>import('@/components/Article'),
        }
    ]
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})

