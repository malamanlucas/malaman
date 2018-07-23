import exame from '@/store/exame'
import Vuex from 'vuex'
import Vue from 'vue'
import exameService from '@/services/exame'

describe('[Store] exame', () => {
  let store

  beforeAll(() => {
    Vue.use(Vuex)
  })

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        exame
      }
    })
  })

  describe('Actions', () => {
    describe('->loadExames', () => {
      const dataExpected = [ { nome: 'exame' } ]

      beforeEach(() => {
        exameService.getExames = jest.fn().mockResolvedValue({ data: dataExpected })
      })

      it('Deve chamar o método exameService.getExames', async () => {
        const spy = jest.spyOn(exameService, 'getExames')
        await store.dispatch('exame/loadExames')
        expect(spy).toHaveBeenCalled()
        spy.mockRestore()
      })
    })
  })
})
