import {createRouter, createWebHistory} from 'vue-router'
import DataForm from '../views/DataForm.vue'

const routes = [
    {
        path: '/preview',
        name: 'data_form',
        component: DataForm
    },
    {
        path: '/preview/page1',
        name: 'page1',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "preview" */ '../views/Preview1.vue')
    },
    {
        path: '/preview/page2',
        name: 'page2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "preview" */ '../views/Preview2.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
