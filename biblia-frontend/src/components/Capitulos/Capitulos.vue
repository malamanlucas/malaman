<template lang="html">
  <div class="row capitulos">
    <div class="col-xs-26">
      <loading ref="loading"></loading>
    </div>
    <div class="capitulos__capitulo col-xs-1 text-left" v-for="c in capitulos">
      {{ c.key.id }}
    </div>
  </div>
</template>

<script>
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
      }
    }
  }
</script>

<style lang="scss">
  @import './capitulos';
</style>
