// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
window.jQuery = jQuery
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import routes from './routes.js'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(jQuery)

const router = new VueRouter({
  mode: 'history',
  routes
})

const store = new Vuex.Store({
  state: {
    actionVersiculos: 'VIEW'
  },
  mutations: {
    setActionVersiculos: function (state, payload) {
      state.actionVersiculos = payload
    }
  }
})

/* eslint-disable no-new */
new Vue({
  name: 'app',
  el: '#app',
  template: '<App/>',
  render: mount => mount(App),
  router,
  store
})
