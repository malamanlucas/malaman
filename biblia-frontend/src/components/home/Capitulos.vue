<template>
  <div>
     <button class="btn btn-sm btn-danger" @click="goBack">Voltar</button>
     <div class="panel panel-default">
  	  <div class="panel-heading">
  	    <div class="panel-title"> {{ $route.params.livro.nome }} </div>
  	  </div>
  	  <div class="panel-body">
  	  	
  	  	<div class="btn-group-lg">
  	     	<a class="btn btn-default" @click="goVersiculos(capitulo)" v-bind:title="capitulo.titulo"
  	     	   v-for="capitulo in capitulos">{{capitulo.key.id}}</a>
  	  	</div>
  	  	
  	  </div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'capitulos',
  data () {
    return {
      capitulos: [],
      livro: this.$route.params.livro
    }
  },
  methods: {
    loadCapitulos (livroId) {
      this.$http.get('http://localhost:9090/api/capitulos/', {
        params: {
          livroId: livroId
        }
      })
        .then(function (response) {
          this.capitulos = response.body
        })
    },
    goBack () {
      this.$router.push({
        name: 'home'
      })
    },
    goVersiculos (capitulo) {
      // ao invez de  redirecionar, devo fazer uma nova requisição aqui e atualizar a tela
      this.$router.push({
        name: 'versiculos',
        params: {
          'livro': this.livro,
          'capitulo': capitulo,
          'capitulos': this.capitulos
        }
      })
    }
  },
  mounted: function () {
    this.loadCapitulos(this.livro.id)
  }
}
</script>