<template lang="html">
  <div class="TruncatedText">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'truncated-text'
  }
</script>

<style lang="scss" scoped>
  .TruncatedText {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
  }
</style>
