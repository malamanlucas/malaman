import Vue from 'vue'
import Router from 'vue-router'
import Exame from './modules/Exame'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'exame',
      component: Exame
    }
  ]
})
