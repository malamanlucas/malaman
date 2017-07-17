import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Livros from '@/components/Livros'
import Sentenca from '@/components/Sentenca'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/livros',
          name: 'livros',
          components: {
            home: Livros
          }
        },
        {
          path: '/sentenca',
          name: 'sentenca',
          components: {
            home: Sentenca
          }
        }
      ]
    }
  ]
})
