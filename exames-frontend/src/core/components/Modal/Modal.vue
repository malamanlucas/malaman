<template lang="html">
  <div v-show="show" class="Modal">

    <div class="Modal__background"></div>
    <div class="Modal__main">
      <div class="Modal__main__close" @click="$emit('close')">X</div>
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss" scoped src="./modal.scss"></style>
