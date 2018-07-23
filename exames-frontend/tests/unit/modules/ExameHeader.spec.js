import ExameHeader from '@/modules/Exame/ExameHeader'
import CustomButton from '@/core/components/CustomButton'
import { shallowMount } from '@vue/test-utils'

describe('[Modules] ExameHeader', () => {
  it('Deve ter o name "exame-header"', () => {
    let wrapper = shallowMount(ExameHeader, { stubs: { 'custom-button': true } })
    expect(wrapper.name()).toBe('exame-header')
  })

  describe('Renderização', () => {
    it('Deve aparecer o título do header', () => {
      let wrapper = shallowMount(ExameHeader, {
        stubs: { 'custom-button': true }
      })
      expect(wrapper.find('.ExameHeader__text').text()).toBe('Tela de Listagem de exames')
    })

    it('Deve exibir o botão de reset com o texto "RESET"', () => {
      let wrapper = shallowMount(ExameHeader, {
        stubs: { 'custom-button': CustomButton }
      })
      expect(wrapper.find('.ExameHeader__btn-reset').isVisible()).toBe(true)
      expect(wrapper.find('.ExameHeader__btn-reset').text()).toBe('RESET')
    })

    it('Deve exibir o botão de dropAll com o texto "DELETAR BANCO DE PRODUÇÃO"', () => {
      let wrapper = shallowMount(ExameHeader, {
        stubs: { 'custom-button': CustomButton }
      })
      expect(wrapper.find('.ExameHeader__btn-prod').isVisible()).toBe(true)
      expect(wrapper.find('.ExameHeader__btn-prod').text()).toBe('DELETAR BANCO DE PRODUÇÃO')
    })
  })

  describe('Events', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallowMount(ExameHeader, {
        stubs: { 'custom-button': CustomButton }
      })
    })

    afterEach(() => wrapper.destroy())

    describe('@click', () => {
      it('Deve emitir o evento @on-reset quando clickar no botão RESET', () => {
        wrapper.find('.ExameHeader__btn-reset').trigger('click')
        expect(wrapper.emitted('on-reset')).toBeTruthy()
      })
      it('Deve emitir o evento @on-drop-all quando clickar no botão DELETAR BANCO DE PRODUÇÃO', () => {
        wrapper.find('.ExameHeader__btn-prod').trigger('click')
        expect(wrapper.emitted('on-drop-all')).not.toBeUndefined()
      })
    })
  })
})
