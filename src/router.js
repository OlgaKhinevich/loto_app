import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './views/HomeView.vue'
import auth from '@/store/auth.module.js'

Vue.use(VueRouter)

const router = new VueRouter({
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
            meta: { layout: 'profile', auth: true },
            component: () => import('./views/ProfileView.vue')
        },
        {
            path: '/add_combination',
            name: 'add',
            meta: { layout: 'profile', auth: true },
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

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.auth);
    if(requireAuth && auth.state.role === "") {
        next('/authorization')
    } else {
        next()
    }
})

export default router;
