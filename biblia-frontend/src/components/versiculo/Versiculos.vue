<template>
  <div>
     <button class="btn btn-sm btn-danger" @click="goBack">Voltar</button>
     <div class="panel panel-default">
  	  <div class="panel-heading">
  	    <div class="panel-title">
	        <div class="row">
	           <div class="col-xs-9 col-sm-10 col-md-10 col-lg-11">
      	      {{ livro.nome }} - Capitulo {{ capitulo.key.id}} -
    	        <em>{{ capitulo.titulo }}</em>
	           </div>
	           <div class="col-xs-3 col-sm-2 col-md-2 col-lg-1 pull-right">
      	      <button type="button" class="btn btn-danger" @click="goBeforeChapter()"
      	        v-bind:style="{visibility: isFirstChapter}">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </button>
      	      <button type="button" class="btn btn-success" @click="goNextChapter()"
      	        v-bind:style="{visibility: isLastChapter}">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </button>
	           </div>
	        </div>
	      </div>
  	  </div>
  	  <div class="panel-body" id="panel-versiculos-body">

        <span v-if="isViewPermission">
    	    <ul class="list-group">
    	      <li class="list-group-item" v-for="versiculo in versiculos"
    	       v-html="versiculo.versiculoMontado"></li>
    	    </ul>
        </span>
        <span v-else style="width:100%">
          <versiculos-edit :versiculos="versiculos"></versiculos-edit>
        </span>
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
<style lang="scss">
  #panel-versiculos-body {
    height: 700px;
    overflow: auto;
  }

  li {
    .texto {
      color: red;
      cursor: pointer;
      &:hover {
        font-weight: bolder;
      }
    }
  }

  .list-group {
    list-style: decimal inside;
    .list-group-item {
      display: list-item;
    }
  }

</style>
<script>
import '../../js/selection.js'
import '../../js/selectionVersiculo.js'
import { mapGetters } from 'vuex'
import VersiculosEdit from './VersiculosEdit'

export default {
  name: 'versiculos',
  components: {
    VersiculosEdit
  },
  data () {
    return {
      versiculos: [],
      dicionarios: [],
      idioma: null,
      livro: null,
      capitulo: null
    }
  },
  computed: {
    isFirstChapter () {
      return this.capitulo.key.id === 1 ? 'hidden' : 'visible'
    },
    isLastChapter () {
      return this.capitulo.key.id === this.$route.params.capitulos.length ? 'hidden' : 'visible'
    },
    ...mapGetters(['isViewPermission'])
  },
  methods: {
    loadVersiculos () {
      this.$http.get('http://localhost:9090/api/versiculos/', {
        params: {
          livroId: this.livro.id,
          capituloId: this.capitulo.key.id
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
          livro: this.livro
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
      this.capitulo = this.$route.params.capitulos[this.capitulo.key.id]
      this.loadVersiculos()
    },
    goBeforeChapter () {
      this.capitulo = this.$route.params.capitulos[this.capitulo.key.id - 2]
      this.loadVersiculos()
    }
  },
  beforeMount: function () {
    this.livro = this.$route.params.livro
    this.capitulo = this.$route.params.capitulo
  },
  mounted: function () {
    this.loadVersiculos()
    this.idioma = this.$route.params.livro.testamento.idioma
  },
  updated: function () {
    if (this.isViewPermission) {
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
}
</script>
