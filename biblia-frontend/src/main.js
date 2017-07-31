// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VeeValidate from 'vee-validate'
import Vuex from 'vuex'

import 'jquery'
import 'bootstrap-sass/assets/javascripts/bootstrap'

Vue.config.productionTip = false

Vue.prototype.$http = Axios
// Axios.defaults.baseURL = 'http://162.243.173.63:9090'
Axios.defaults.baseURL = 'http://localhost:9090'

Vue.use(Vuex)
Vue.use(VeeValidate, {
  errorBagName: 'validation'
})

const store = new Vuex.Store({
  state: {
    livro: null,
    capitulo: null
  },
  mutations: {
    setLivro: (state, payload) => { state.livro = payload },
    setCapitulo: (state, payload) => { state.capitulo = payload }
  },
  getters: {
    getLivro: state => state.livro,
    getCapitulo: state => state.capitulo
  }
})

import './core'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
