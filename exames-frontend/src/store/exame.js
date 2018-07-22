import exameService from '@/services/exame'

export const namespaced = true

export const state = {
  exames: []
}

export const getters = {
  getExames: state => state.exames
}

export const mutations = {}
export const actions = {
  async loadExames({ state }) {
    const response = await exameService.getExames()
    state.exames = response.data
  },
  async deleteExame({ }, { exameId }) {
    await exameService.delete(exameId)
  },
  async saveExame({}, exame) {
    await exameService.save(exame)
  },
  async getExame({}, { exameId }) {
    const response = await exameService.getExame(exameId)
    return response.data
  },
  async resetBD({ dispatch }) {
    await exameService.resetBD()
    await dispatch('loadExames')
  },
  async dropAllBD({ dispatch }) {
    await exameService.dropAllBD()
    await dispatch('loadExames')
  }
}

export default { namespaced, state, getters, mutations, actions }
