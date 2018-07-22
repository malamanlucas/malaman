import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import Axios from 'axios'
import './core'

Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://localhost:9090'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
