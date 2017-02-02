<template>
  <div>
    <Cabecalho ref="cabecalho"></Cabecalho>
    <div class="container-fluid">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
</style>

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
