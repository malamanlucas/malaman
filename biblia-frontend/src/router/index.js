import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Livros from '@/components/Livros'
import Sentenca from '@/components/Sentenca'
import Capitulos from '@/components/Capitulos'
import Versiculos from '@/components/Versiculos'

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
          path: 'livros',
          components: {
            home: Livros
          },
          children: [
            {
              path: 'capitulos',
              components: {
                capitulos: Capitulos
              },
              children: [
                {
                  path: 'versiculos',
                  components: {
                    versiculos: Versiculos
                  }
                }
              ]
            }
          ]
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
