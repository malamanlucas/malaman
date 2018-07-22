import Modal from './Modal'

export default {
  data: () => ({
    showModal: true,
    textModal: 'definir o texto'
  }),
  components: {
    Modal
  },
  methods: {
    openModal(msg = 'valor default') {
      this.showModal = true
      this.textModal = msg
    },
    closeModal() {
      this.showModal = false
    }
  }
}
