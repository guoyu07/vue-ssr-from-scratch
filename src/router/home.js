import VueRouter from 'vue-router';

import Content from '../components/home/Content'




const routes = [
    { path: '/', name: 'index', component: Content }
]


// const router = new VueRouter({
//     mode: 'history',
//     routes
// });


// export default router;

export default new VueRouter({
    mode: 'history',
    routes
});