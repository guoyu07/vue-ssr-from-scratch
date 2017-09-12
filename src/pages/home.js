import Vue from 'vue';
import router from '../config/router/home';

import App from '../layouts/App';

import '../config';



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

