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
      	      <button v-if="!isFirstChapter()" type="button" class="btn btn-danger">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </button>
      	      <button v-if="!isLastChapter()" type="button" class="btn btn-success" 
      	        @click="goNextChapter()">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </button>
	           </div>
	        </div>
	      </div>
  	  </div>
  	  <div class="panel-body" id="panel-versiculos-body">
  	    <ul class="list-group">
  	      <li class="list-group-item" v-for="versiculo in versiculos" 
  	       v-html="versiculo.versiculoMontado"></li>
  	    </ul>
  	  </div>
  	</div>
  	
  	<div id="myModal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Expressão: '<span id="currentExpression"></span>'</h4>
          </div>
          <div class="modal-body">
            
            <div class="panel panel-default" v-for="dic in dicionarios">
              <div class="panel-heading">
                <h3 class="panel-title"> {{dic.key.id}} - {{dic.key.idioma}} </h3>
              </div>
              <div class="panel-body">
                <div style="white-space:pre-wrap">{{dic.definicao}}</div>
              </div>
            </div>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  	
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
      versiculos: [],
      dicionarios: [],
      idioma: null
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
    loadExpressions (dics, idioma) {
      this.$http.post('http://localhost:9090/api/dicionarios/', dics, {
        params: {
          'idioma': idioma
        }
      }).then(function (response) {
        this.dicionarios = response.body
      })
    },
    goNextChapter () {
      let currentCapitulo = this.$route.params.capitulo
      let next = this.$route.params.capitulos[currentCapitulo.key.id]
      this.$router.replace({
        path: '/versiculos',
        params: {
          'livro': this.$route.params.livro,
          'capitulo': next,
          'capitulos': this.$route.params.capitulos
        }
      })
    },
    goBeforeChapter () {
    },
    isLastChapter () {
      return this.$route.params.capitulo.key.id === this.$route.params.capitulos.length
    },
    isFirstChapter () {
      return this.$route.params.capitulo.key.id === 1
    }
  },
  mounted: function () {
    this.loadVersiculos(this.$route.params.livro.id, this.$route.params.capitulo.key.id)
    this.idioma = this.$route.params.livro.testamento.idioma
  },
  updated: function () {
    let loadExpressions = this.loadExpressions
    let idioma = this.idioma
    window.jQuery('.texto').off('click').on('click', function () {
      let _$ = window.jQuery
      _$('#myModal').modal('show')
      _$('#currentExpression').text(_$(this).text())
      let dics = _$(this).attr('dic').split(',')
      loadExpressions(dics, idioma)
    })
  }
}
</script>