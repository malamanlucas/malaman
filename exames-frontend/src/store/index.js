import Vue from 'vue'
import Vuex from 'vuex'
import exame from './exame'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exame
  }
})
