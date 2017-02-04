<template>
  <div style="position:relative" class="editing">
    <ul class="list-group">
      <li class="list-group-item" v-for="versiculo in versiculos">
        <div :json="versiculo.key.json" v-html="versiculo.versiculoMontado" class="versiculo" />
      </li>
    </ul>

    <ul class="list-group lista_limpa">
      <li class="list-group-item" v-for="versiculo in versiculos">
        <div :json="versiculo.key.json" class="versiculo">
          {{ versiculo.texto }}
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .editing {
    .list-group {
      &.lista_limpa {
        opacity: 0.3;
      }
      .list-group-item {
        .versiculo {
          display: inline;
        }
      }
    }
    .texto {
      text-decoration: underline;
    }
  }


</style>
<script>
export default {
  name: 'versiculos-edit',
  props: ['versiculos'],
  methods: {
    bindVersiculoSelect () {
    	$(".list-group").css("position", "absolute");

    	$(".lista_limpa .versiculo").off("mouseup").on("mouseup", function() {

    		var expressao = $(this).textSelected();
    		var keyAsJson = $(this).attr("json");

    		if ( expressao != undefined && expressao != null && expressao.text != "") {
    			console.log( expressao.text + " - " + keyAsJson );

    			// initExpressao([
    			// 	{
    			// 		name: "keyAsJson",
    			// 		value: keyAsJson
    			// 	},
    			// 	{
    			// 		name: "texto",
    			// 		value: expressao.text
    			// 	},
    			// 	{
    			// 		name: "inicio",
    			// 		value: expressao.start
    			// 	},
    			// 	{
    			// 		name: "fim",
    			// 		value: expressao.end
    			// 	}
    			// ]);

    		}

    	});
    }
  },
  mounted: function() {
    this.bindVersiculoSelect()
  },
  updated: function() {
    this.bindVersiculoSelect()
  }
}
</script>
