import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: c('Home')
    },
    {
        path: '/about',
        name: 'about',
        component: c('About')
    },
    {
        path: '/ratings',
        name: 'ratings',
        component: c('Ratings')
    },
    {
        path: '/articles',
        name: 'articles',
        component: c('Articles')
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

function c (path) {
    return () => import('../views/' + path)
}

export default router
