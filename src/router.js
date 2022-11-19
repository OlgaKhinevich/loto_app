import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './views/HomeView.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, 
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { layout: 'profile' },
            component: HomeView
        },
        {
            path: '/authorization',
            name: 'auth',
            meta: {layout: 'auth'},
            component: () => import('./views/AuthView.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            meta: { layout: 'profile' },
            component: () => import('./views/ProfileView.vue')
        },
        {
            path: '/add_combination',
            name: 'add',
            meta: { layout: 'profile' },
            component: () => import('./views/AddCombView.vue')
        },
        {
            path: '/rules',
            name: 'rules',
            meta: { layout: 'profile' },
            component: () => import('./views/RulesView.vue')
        }
    ]
})
