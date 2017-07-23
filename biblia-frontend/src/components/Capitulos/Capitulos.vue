<template lang="html">
  <div class="row capitulos">
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
    data: () => ({
      capitulos: []
    }),
    updated () {
      if (this.livroId) {
        this.$http.get('/api/capitulos/', {
          params: {
            livroId: this.livroId
          }
        }).then(response => {
          this.capitulos = response.data
        })
      }
    }
  }
</script>

<style lang="scss">
  @import './capitulos';
</style>
