import Vue from 'vue'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'

import '../assets/styles/main.scss';

Vue.prototype.$http = axios;


Vue.use(VueProgressBar, {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '5s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
})


