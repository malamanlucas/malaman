import { shallowMount } from '@vue/test-utils'
import CustomButton from '@/core/components/CustomButton'

describe('[Core] CustomButton', () => {
  describe('DOM - Renderização', () => {
    it('Deve exibir o texto "Botão" no slot default', () => {
      let wrapper = shallowMount(CustomButton)
      expect(wrapper.text()).toContain('Botão')
    })
    it('Deve exibir o texto "Bla" no slot default', () => {
      let wrapper = shallowMount(CustomButton, {
        slots: {
          default: 'Bla'
        }
      })
      expect(wrapper.text()).toContain('Bla')
    })
  })
})
