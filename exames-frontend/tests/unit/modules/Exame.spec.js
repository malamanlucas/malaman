import { shallowMount, createLocalVue } from '@vue/test-utils'
import Exame from '@/modules/Exame'
import ExameHeader from '@/modules/Exame/ExameHeader'
import Vuex from 'vuex'
import CustomButton from '@/core/components/CustomButton'

describe('[Modules] Exame', () => {
  let localVue
  let wrapper
  let store
  let exameStore
  let dropAllBDSpy = jest.fn()

  beforeAll(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
  })

  const buildWrapper = () => {
    exameStore = {
      namespaced: true,
      getters: {
        getExames: () => ([])
      },
      actions: {
        loadExames: jest.fn(),
        dropAllBD: dropAllBDSpy
      }
    }
    store = new Vuex.Store({
      modules: {
        exame: exameStore
      }
    })
    wrapper = shallowMount(Exame, {
      localVue,
      store,
      stubs: {
        'custom-button': CustomButton,
        'exame-header': ExameHeader,
        loading: true
      }
    })
  }

  beforeEach(() => {
    buildWrapper()
  })

  afterEach(() => wrapper.destroy())

  describe('[ExameHeader] integração', () => {
    it('Deve chamar o método callDropAllBD quando disparar o evento @on-drop-all', async () => {
      const spy = jest.spyOn(Exame.methods, 'callDropAllBD')
      wrapper.destroy()
      buildWrapper()
      wrapper.find(ExameHeader).vm.$emit('on-drop-all')
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('methods', () => {
    describe('->callDropAllBD', () => {
      beforeEach(() => dropAllBDSpy.mockRestore())

      it('Deve chamar o dropAllBD quando executar', async () => {
        await wrapper.vm.callDropAllBD()
        expect(dropAllBDSpy).toHaveBeenCalled()
      })

      it('Deve chamar o loading ao executar', async () => {
        wrapper.setData({ loading: false })
        dropAllBDSpy.mockImplementation(() => expect(wrapper.vm.loading).toBe(true))
        await wrapper.vm.callDropAllBD()
      })

      it('Deve encerrar o loading ao terminar a execução', async () => {
        wrapper.setData({ loading: true })
        await wrapper.vm.callDropAllBD()
        expect(wrapper.vm.loading).toBe(false)
      })

      it('Deve chamar o openModal com o texto de sucesso quando dropAllBD der sucesso', async () => {
        dropAllBDSpy.mockImplementation(() => Promise.resolve(true))

        const spy = jest.spyOn(Exame.mixins[0].methods, 'openModal')
        wrapper.destroy()
        buildWrapper()
        await wrapper.vm.callDropAllBD()
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith('Parabéns você deletou o banco de produção :)')
      })

      it('Não deve chamar o openModal quando dorpAllBD der erro', async () => {
        jest.restoreAllMocks()
        dropAllBDSpy.mockImplementation(() => Promise.reject('qweq'))

        const spy = jest.spyOn(Exame.mixins[0].methods, 'openModal')
        wrapper.destroy()
        buildWrapper()
        try {
          await wrapper.vm.callDropAllBD()
        } catch (e) {
          //
        } finally {
          expect(spy).not.toHaveBeenCalled()
        }
      })
    })
  })

})
