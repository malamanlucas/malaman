<template lang="html">
  <div class="container-fluid body">

    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="#" class="navbar-brand">Fuja dos falsos profetas!</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li>
              <a href="#">Livros</a>
            </li>
            <li>
              <a href="#">Sentença</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">

      <router-view name="home"></router-view>

    </div>


  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .body {
    padding-top: 70px;
  }
</style>
