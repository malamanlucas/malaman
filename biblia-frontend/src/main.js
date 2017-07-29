// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VeeValidate from 'vee-validate'

import 'jquery'
import 'bootstrap-sass/assets/javascripts/bootstrap'

Vue.config.productionTip = false

Vue.prototype.$http = Axios
Axios.defaults.baseURL = 'http://162.243.173.63:9090'
// Axios.defaults.baseURL = 'http://localhost:9090'

Vue.use(VeeValidate, {
  errorBagName: 'validation'
})

import './core'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
