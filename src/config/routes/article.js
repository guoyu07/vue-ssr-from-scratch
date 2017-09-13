import Vue from 'vue'



const routes = [
    { path: ':id', name:'index', component: ()=>import('@/components/Article') },
]




export default routes;