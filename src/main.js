import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BIcon } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import router from './router'

import './assets/scss/global_styles.scss'
import store from './store/store'

Vue.use(BootstrapVue, IconsPlugin, Vuelidate)
Vue.component('BIcon', BIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
