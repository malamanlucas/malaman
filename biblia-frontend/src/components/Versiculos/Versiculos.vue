<template lang="html">
  <div class="">
    <h1>qweqweqwewq {{ getLivroId }}</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getLivroId'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import './versiculos';
</style>
