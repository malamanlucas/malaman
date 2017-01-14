<template>
  <div>
    <Cabecalho></Cabecalho>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho'
import Home from './components/home/Home'

export default {
  name: 'app',
  components: {
    Cabecalho,
    Home
  }
}
</script>
