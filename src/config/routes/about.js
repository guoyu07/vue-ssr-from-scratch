import Vue from 'vue'



const routes = [
    { path: '/', name:'index', component: ()=>import('@/components/About') },
]




export default routes;