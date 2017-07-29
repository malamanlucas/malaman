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
          <router-link to="/" class="navbar-brand">Fuja dos falsos profetas!</router-link>
          <!-- <a href="#" class="navbar-brand">Fuja dos falsos profetas!</a> -->
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/livros">Livros</router-link>
            </li>
            <li>
              <router-link to="/sentenca">Sentença</router-link>
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
    padding-bottom: 70px;
  }

</style>
