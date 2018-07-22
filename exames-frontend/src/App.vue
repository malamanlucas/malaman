<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    border: 3px solid black;
    position: absolute;
    display: flex;
    width: calc(90%);
    margin-left: 5%;
    min-height: 100%;
    font-size: 150%;
    input, textarea {
      font-size: 100%;
    }
  }
</style>
