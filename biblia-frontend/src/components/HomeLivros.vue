<template>
   <div class="container">
     <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Velho Testamento</h3>
      </div>
      <div class="panel-body">
         <a class="btn btn-default" href="#" v-for="livro in livros">{{livro.nome}}</a>
      </div>
    </div>
   </div>
</template>
<script>
export default {
  name: 'homeLivros'
}
</script>