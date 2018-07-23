import { shallowMount } from '@vue/test-utils'
import Actions, { MODE_VIEW, MODE_EDIT } from '@/core/components/Actions'
import CustomButton from '@/core/components/CustomButton'

describe('Actions', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Actions, {
      stubs: {
        'custom-button': CustomButton
      }
    })
  })

  describe('Renderização', () => {
    it('Deve exibir o bloco raiz', () => {
      expect(wrapper.isVisible()).toBe(true)
    })
    describe('Quando as props/data são alteradas', () => {
      describe('Quando :mode === MODE_VIEW', () => {
        beforeEach(() => wrapper.setProps({ mode: MODE_VIEW }))

        it('Deve exibir o botão de EDITAR', () => {
          const el = wrapper.find('.Actions__button.edit')
          expect(el.isVisible()).toBe(true)
          expect(el.text()).toBe('EDITAR')
        })

        it('Não deve exibir o botão de salvar', () => {
          expect(wrapper.find('.Actions__button.save').exists()).not.toBe(true)
        })

        it('Não deve exibir o botão de cancelar', () => {
          expect(wrapper.find('.Actions__button.cancel').exists()).not.toBe(true)
        })
      })

      describe('Quando :mode === MODE_EDIT', () => {
        beforeEach(() => wrapper.setProps({ mode: MODE_EDIT }))

        it('Deve exibir o botão DE SALVAR', () => {
          const el = wrapper.find('.Actions__button.save')
          expect(el.isVisible()).toBe(true)
          expect(el.text()).toBe('SALVAR')
        })

        it('Deve exibir o botão DE CANCELAR', () => {
          const el = wrapper.find('.Actions__button.save')
          expect(el.isVisible()).toBe(true)
          expect(el.text()).toBe('SALVAR')
        })
      })
    })
  })
})
