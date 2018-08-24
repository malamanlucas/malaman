import Vue from 'vue'
import Router from 'vue-router'
import Exame from './modules/Exame'
import Proibicao from '@/core/components/Proibicao'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'exame',
      component: Exame
    },
    {
      path: '/proibicao',
      component: Proibicao
    }
  ]
})
