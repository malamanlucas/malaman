<template>
  <div>
   	<Livros v-bind:testamento="'VELHO'"></Livros>
   	<Livros v-bind:testamento="'NOVO'"></Livros>
  </div>
</template>
<script>
import Livros from './Livros'

export default {
  name: 'home',
  components: {
    Livros
  }
}
</script>
