$.fn.textSelected = function() {
	var selection = window.getSelection();
	if (selection.type == "Range") {
		var idPaiOriginal = $(this).parents("li").attr("id");
		var idPaiSelecionado = $(selection.focusNode.parentElement).parents("li").attr("id")
		if ( idPaiOriginal == idPaiSelecionado ) {

			var start = selection.anchorOffset,
			end = selection.focusOffset;

			return {
				"text": $(this).text().substr(start, end-start),
				"start": start,
				"end": end
			};
		}

	} else {
		return {"text":""};
	}
};

// $(document).ready(function(){
	// bindVersiculoSelect();
	// var f = function() {
	// 	$(".panel-body").css("height", $(".list-group:eq(0)").height()+"px" );
	// };
	// f();
	// $(window).resize(f);

// });

function bindVersiculoSelect() {
	window.alert('qweqw')
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

function bindClick() {
	$(".texto").click(function() {
		// definicao([ {
		// 	name : 'dic',
		// 	value : $(this).attr("dic")
		// }, {
		// 	name : 'idioma',
		// 	value : $(this).parents("li").attr("idioma")
		// } ]);
	});
}
