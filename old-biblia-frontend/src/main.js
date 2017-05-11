// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
import $ from 'jquery'
window.jQuery = jQuery
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import 'datatables.net'
import 'datatables.net-bs/css/dataTables.bootstrap.css'
import 'datatables.net-bs/js/dataTables.bootstrap.js'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import routes from './routes.js'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(vueResource)
Vue.use(VueRouter)

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
  },
  getters: {
    isViewPermission: function (state) {
      return state.actionVersiculos === 'VIEW'
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
