<template lang="html">
  <div class="" :style="{'margin-top': marginTop}">
    <ul class="list-group">
      <li class="list-group-item" v-for="v in versiculos">
        <div :json="v.key.json" v-html="v.versiculoMontado" class="versiculo"></div>
      </li>
    </ul>

    <ul class="list-group lista_limpa">
      <li class="list-group-item" v-for="v in versiculos">
        <div :json="v.key.json" class="versiculo" v-text="v.texto"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import '@/js/selection.js'
  import '@/js/selectionVersiculo.js'
  import $ from 'jquery'

  export default {
    props: ['marginTop'],
    computed: {
      ...mapGetters([
        'getCapitulo'
      ])
    },
    watch: {
      getCapitulo (newValue) {
        this.getVersiculos(newValue)
      }
    },
    data: () => ({
      versiculos: null
    }),
    methods: {
      getVersiculos (capitulo) {
        this.$http.get('/api/versiculos/', {
          params: {
            livroId: capitulo.key.livroId,
            capituloId: capitulo.key.id
          }
        }).then(response => {
          this.versiculos = response.data
        }).catch(e => {
          window.console.log(e)
        })
      },
      bindVersiculoSelect (_this) {
        $('.list-group').css('position', 'absolute')

        $('.lista_limpa .versiculo').off('mouseup').on('mouseup', function () {
          var expressao = $(this).textSelected()
          var keyAsJson = $(this).attr('json')

          if (expressao !== undefined && expressao !== null && expressao.text !== '') {
            // console.log( expressao.text + ' - ' + keyAsJson )
            console.log(`${expressao.text} - ${keyAsJson}`)
            // _this.expressaoSelecionada = expressao;

            // window.jQuery('#myModal').off('show.bs.modal').on('show.bs.modal', e => {
              // _this.carregarDadosModal(_this, JSON.parse(keyAsJson))
            // })

            // window.jQuery('#myModal').modal('show')
          }
        })
      }
    },
    mounted () {
      this.getVersiculos(this.getCapitulo)
      this.bindVersiculoSelect(this)
    },
    updated () {
      this.bindVersiculoSelect(this)
    }
  }
</script>

<style lang="scss">
  @import './versiculos';
</style>
