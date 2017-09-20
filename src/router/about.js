import VueRouter from 'vue-router';
import Content from '../components/about/Content'




const routes = [
    { path: '/about', name: 'index', component: Content },
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