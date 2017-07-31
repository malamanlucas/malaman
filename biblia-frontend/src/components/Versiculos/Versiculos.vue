<template lang="html">
  <div class="">
    <div class="row">
      <div class="col-xs-26" v-for="v in versiculos">
        {{ v.texto }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getCapitulo'
      ])
    },
    watch: {
      getCapitulo (newValue) {
        this.getVersiculos(newValue)
      }
    },
    data: () => ({
      versiculos: null
    }),
    methods: {
      getVersiculos (capitulo) {
        this.$http.get('/api/versiculos/', {
          params: {
            livroId: capitulo.key.livroId,
            capituloId: capitulo.key.id
          }
        }).then(response => {
          this.versiculos = response.data
        }).catch(e => {
          window.console.log(e)
        })
      }
    },
    mounted () {
      this.getVersiculos(this.getCapitulo)
    }
  }
</script>

<style lang="scss" scoped>
  @import './versiculos';
</style>
