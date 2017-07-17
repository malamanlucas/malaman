<template lang="html">

  <div class="row">

    <div class="col-xs-6 testamento bg-info text-center" v-for="testamento in testamentos">
      <div class="h4 testamento__title text-danger" v-text="testamento.nome"></div>
      <div class="testamento__livro " v-for="livro in testamento.livros">
        <div class="testamento__livro__nome h5 text-uppercase text-danger">
          {{ livro.nome }}
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import params from '@/params'

  export default {
    data: () => ({
      testamentos: []
    }),
    methods: {
      populateTestamento (testamento) {
        this.$http.get('/api/livros/', {
          params: {
            'testamento': testamento.value
          }
        }).then(response => {
          this.testamentos.push({
            nome: testamento.label,
            livros: response.data
          })
        })
      }
    },
    mounted () {
      Object.values(params.TESTAMENTO).forEach(this.populateTestamento)
    }
  }
</script>

<style lang="scss" scoped>
  @import './livro';
</style>
