<template lang="html">
  <div class="body">

    <footer>
      <nav class="navbar navbar-inverse navbar-fixed-bottom">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#footer-body">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to="/" class="navbar-brand">Fuja dos falsos profetas!</router-link>
          </div>
          <div class="collapse navbar-collapse" id="footer-body">
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
    </footer>

    <router-view name="home"></router-view>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.body {
}

footer .navbar-collapse.in {
  bottom: 50px;
  position: absolute;
  background-color:#333;
  width: 100%;
}

@media screen and (max-width: 768px) {
  footer .navbar-collapse {
    position: absolute;
    bottom: 50px;
    width: 100%;
    background-color: #303030;
  }
}
</style>
