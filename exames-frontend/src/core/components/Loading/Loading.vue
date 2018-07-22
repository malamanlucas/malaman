<template lang="html">
  <div class="Loading" v-if="loading">
    <div class="Loading__text">
      Loading...
      <img class="Loading__text__loading" src="loading.gif" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      loading: Boolean
    }
  }
</script>

<style lang="scss" scoped src="./loading.scss"></style>
