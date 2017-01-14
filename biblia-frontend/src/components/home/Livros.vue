<template>
   <div class="panel panel-default">
	  <div class="panel-heading">
	    <div class="panel-title">{{title}}</div>
	  </div>
	  <div class="panel-body">
	  	
	  	<div class="btn-group-lg">
	     	<a @click="goCapitulo(livro)" class="btn btn-default" href="#" v-for="livro in livros">{{livro.nome}}</a>
	  	</div>
	  	
	  </div>
	</div>
</template>
<script>
export default {
  name: 'livros',
  data () {
    return {
      livros: [],
      title: ''
    }
  },
  props: ['testamento'],
  methods: {
    loadLivros (testamento) {
      this.$http.get('http://localhost:9090/api/livros/', {
        params: {
          testamento: testamento
        }
      })
        .then(function (response) {
          this.livros = response.body
        })
    },
    goCapitulo (livro) {
      this.$router.push({
        name: 'capitulos',
        params: {
          livro: livro
        }
      })
    }
  },
  mounted: function () {
    this.loadLivros(this.testamento)
    if (this.testamento === 'NOVO') {
      this.title = 'Novo Testamento'
    } else if (this.testamento === 'VELHO') {
      this.title = 'Velho Testamento'
    }
  }
}
</script>