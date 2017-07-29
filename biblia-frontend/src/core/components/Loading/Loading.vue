<template lang="html">
  <div class="row" :class="{'disappear': !active}">
    <div class="col-xs-26 wrapper" :class="{'wrapper--horizontal' : horizontal}">
      <div class="wrapper__text">
        <div class="text-info alert alert-info">
          <u>Carregando...</u>
        </div>
      </div>
      <div :style="{'border-width': border, 'width': width, 'height': width}"
        class="wrapper__loader"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: () => '20em'
      },
      border: {
        type: String,
        default: () => '1.5em'
      },
      horizontal: {
        type: Boolean,
        default: () => false
      }
    },
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
