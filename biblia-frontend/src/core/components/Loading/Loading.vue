<template lang="html">
  <div class="row" :class="{'disappear': !active}">
    <div class="col-xs-26 wrapper">
      <div class="wrapper__text">
        <h3 class="text-info alert alert-info">
          <u>Carregando...</u>
        </h3>
      </div>
      <div class="wrapper__loader"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      active: false
    }),
    methods: {
      show () {
        this.active = true
      },
      hide () {
        this.active = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './loading';
</style>
