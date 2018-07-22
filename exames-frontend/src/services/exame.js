import Axios from 'axios'

export default {
  getExames: () => Axios.get('/api/exames/'),
  delete: exameId => Axios.delete(`/api/exames/${exameId}`),
  getExame: exameId => Axios.get(`/api/exames/${exameId}`),
  save: exame => Axios.post('/api/exames/salvar', exame),
  resetBD: () => Axios.put('/api/exames/reset'),
  dropAllBD: exame => Axios.delete('/api/exames/deleteAll')
}
