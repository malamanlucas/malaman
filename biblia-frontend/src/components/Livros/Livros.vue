<template lang="html">

  <div class="row">

    <div class="col-xs-6" v-for="testamento in testamentos">
      <div class="h4" v-text="testamento.nome"></div>
      <div class="" v-for="livro in testamento.livros">
        {{ livro.nome }}
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

<style lang="scss">
</style>
