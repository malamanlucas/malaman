<template lang="html">
  <div class="livros-container">

    <loading ref="loading"></loading>

    <div class="livros-container__sidebar">
      <div class="livros-container__sidebar__testamentos">
        <div class="testamento bg-info text-center" v-for="testamento in testamentos">
          <div class="h4 testamento__title text-danger" v-text="testamento.nome"></div>
          <div class="testamento__livro " v-for="livro in testamento.livros">
            <div class="testamento__livro__nome text-danger" @click="getCapitulos(livro)">
              {{ livro.nome }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="livros-container__main">
      <router-view name="capitulos"></router-view>
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
