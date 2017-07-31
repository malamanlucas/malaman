<template lang="html">
  <div>

    <router-view name="capitulos"></router-view>

    <div class="row">

      <div class="col-xs-13 testamento bg-info text-center" v-for="testamento in testamentos">
        <div class="h4 testamento__title text-danger" v-text="testamento.nome"></div>
        <div class="testamento__livro " v-for="livro in testamento.livros">
          <div class="testamento__livro__nome h5 text-uppercase text-danger" @click="getCapitulos(livro)">
            {{ livro.nome }}
          </div>
        </div>
      </div>

      <loading ref="loading"></loading>

    </div>

  </div>
</template>

<script>
  import Capitulos from '../Capitulos'
  import params from '@/params'

  export default {
    data: () => ({
      testamentos: [],
      capitulos: [1, 2, 3]
    }),
    components: {
      Capitulos
    },
    methods: {
      buildColumnText (c) {
        let totalExtraSpaces = 3 - c.toString().length

        let extraSpaces = ''

        for (let i = 0; i < totalExtraSpaces; i++) {
          extraSpaces += '&nbsp;'
        }

        return `${extraSpaces}${c}`
      },
      populateTestamento (testamento) {
        return this.$http.get('/api/livros/', {
          params: {
            'testamento': testamento.value
          }
        }).then(response => {
          this.testamentos.push({
            nome: testamento.label,
            livros: response.data
          })

          return Promise.resolve(response)
        })
      },
      getCapitulos (livro) {
        this.$store.commit('setLivro', livro)
        this.$router.push('/livros/capitulos')
      }
    },
    mounted () {
      this.$refs.loading.show()
      Promise.all(Object.values(params.TESTAMENTO).map(this.populateTestamento))
        .then(() => {
          this.$refs.loading.hide()
        })
    }
  }
</script>

<style lang="scss" scoped>
  @import './livros';
</style>
