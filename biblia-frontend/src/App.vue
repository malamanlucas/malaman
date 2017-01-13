<template>
  <div>
    <Cabecalho></Cabecalho>
    <Home></Home>
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Cabecalho,
    Home
  }
}
</script>
