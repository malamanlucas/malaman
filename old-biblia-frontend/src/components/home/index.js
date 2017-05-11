// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Capitulos from './Capitulos'
import Home from './Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/capitulos',
    name: 'capitulos',
    component: Capitulos
  }
]

export { routes }
