import Vue from 'vue';
import VueRouter from 'vue-router'

import '../config';
import App from '../layouts/App';

import routes from '../config/routes/about';


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/about',
            children: routes,
            component: ()=>import('@/components/About'),
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

