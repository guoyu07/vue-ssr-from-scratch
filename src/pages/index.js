import Vue from 'vue';
import router from '../config/router';

import App from '../layouts/App';

import '../config';



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

