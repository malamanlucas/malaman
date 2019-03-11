<template lang="html">
  <div class="body">

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
      <router-link tag="a" to="/" class="navbar-brand" href="#">Fuja dos Falsos Profetas</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link tag="a" class="nav-link" to="/livros">Livros</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/sentenca">Sentença</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view name="home"></router-view>

  </div>
</template>

<script>
export default {
}
</script>
