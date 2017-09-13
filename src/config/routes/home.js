import Vue from 'vue'



const routes = [
    { path: '/', name:'index', component: ()=>import('@/components/Home') },
]




export default routes;