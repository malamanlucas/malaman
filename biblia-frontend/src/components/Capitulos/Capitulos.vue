<template lang="html">
  <div class="row capitulos">
    <div class="col-xs-26">
      <loading ref="loading" border="0.5em" width="5em" :horizontal="true"></loading>
    </div>
    <div class="capitulos__capitulo col-xs-1 text-left" v-for="c in capitulos"
      @click="goVersiculos(c)">
      {{ c.key.id }}
    </div>

    <router-view name="versiculos"></router-view>
    
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      livroId: {
        type: Number,
        default: () => null
      }
    },
    watch: {
      livroId (value) {
        if (value) {
          this.getCapitulos(value)
        }
      },
      getLivro (newLivro) {
        this.getCapitulos(newLivro.id)
      }
    },
    data: () => ({
      capitulos: []
    }),
    methods: {
      getCapitulos (livroId) {
        this.$refs.loading.show()
        this.$http.get('/api/capitulos/', {
          params: {
            livroId: livroId
          }
        }).then(response => {
          this.capitulos = response.data
          this.$refs.loading.hide()
        })
      },
      goVersiculos (capitulo) {
        this.$store.commit('setCapitulo', capitulo)
        this.$router.push('/livros/capitulos/versiculos')
      }
    },
    computed: {
      ...mapGetters([
        'getLivro'
      ])
    },
    mounted () {
      this.getCapitulos(this.getLivro.id)
    }
  }
</script>

<style lang="scss">
  @import './capitulos';
</style>
