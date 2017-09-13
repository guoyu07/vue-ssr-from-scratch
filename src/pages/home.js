import Vue from 'vue';
import VueRouter from 'vue-router'

import App from '../layouts/App';

import '../config';
import routes from '../config/routes/home';


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            children: routes,
            component: ()=>import('@/components/Home'),
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

