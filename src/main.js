import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import router from './router'

import './assets/scss/global_styles.scss'
import build_api from './assets/lib/build_api.js'
import store from './store'

Vue.use(BootstrapVue, Vuelidate)

Vue.prototype.$api = build_api([
  // auth
  "signin",
  "signup"
]);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
