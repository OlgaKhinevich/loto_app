<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AuthLayout from '@/layouts/AuthLayout.vue'
import ProfileLayout from '@/layouts/ProfileLayout.vue'

export default {
  name: 'App',
  components: {
    AuthLayout,
    ProfileLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Roboto:wght@400;700&display=swap');

</style>

