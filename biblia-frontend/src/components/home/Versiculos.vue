<template>
  <div>
     <button class="btn btn-sm btn-danger" @click="goBack">Voltar</button>
     <div class="panel panel-default">
  	  <div class="panel-heading">
  	    <div class="panel-title">
	        <div class="row">
	           <div class="col-xs-9 col-sm-10 col-md-10 col-lg-11">
      	      {{ $route.params.livro.nome }} - Capitulo {{ $route.params.capitulo.key.id}} -
    	        <em>{{ $route.params.capitulo.titulo }}</em>
	           </div>
	           <div class="col-xs-3 col-sm-2 col-md-2 col-lg-1 pull-right">
      	      <button type="button" class="btn btn-danger">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </button>
      	      <button type="button" class="btn btn-success">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </button>
	           </div>
	        </div>
	      </div>
  	  </div>
  	  <div class="panel-body" id="panel-versiculos-body">
  	    <ul class="list-group">
  	      <li class="list-group-item" v-for="versiculo in versiculos" v-html="versiculo.formatado"></li>
  	    </ul>
  	  </div>
  	</div>
  </div>
</template>
<style>
  #panel-versiculos-body {
    height: 700px;
    overflow: auto;
  }
  
  .texto {
    color: red;
    cursor: pointer
  }
  
  .texto:hover {
    font-weight: bolder;
  }
  
  .list-group {
    list-style: decimal inside;
  }
  
  .list-group-item {
    display: list-item;
  }
  
</style>
<script>
export default {
  name: 'versiculos',
  data () {
    return {
      versiculos: []
    }
  },
  methods: {
    loadVersiculos (livroId, capituloId) {
      this.$http.get('http://localhost:9090/api/versiculos/', {
        params: {
          livroId: livroId,
          capituloId: capituloId
        }
      })
        .then(function (response) {
          this.versiculos = response.body
        })
    },
    goBack () {
      this.$router.push({
        name: 'capitulos',
        params: {
          livro: this.$route.params.livro
        }
      })
    },
    goNextChapter () {
    },
    goBeforeChapter () {
    }
  },
  mounted: function () {
    this.loadVersiculos(this.$route.params.livro.id, this.$route.params.capitulo.key.id)
  }
}
</script>