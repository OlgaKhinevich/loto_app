<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Auth from './components/Auth.vue';
import Profile from './components/Profile.vue';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Auth },
    { path: '/profile', component: Profile },
]

const router = new VueRouter({routes})

export default {
  name: 'App',
  components: {
   
  },
  router: router
}
</script>

<style></style>

