$.fn.textSelected = function() {
	var selection = getSelection(this[0]);
	if (selection.type == "Range") {
		var idPaiOriginal = $(this).parent().attr("id");
		var idPaiSelecionado = $(selection.focusNode.parentElement).parent().attr("id")
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

$(document).ready(function() {

	$(".versiculo").off("mouseup").on("mouseup", function() {

		var expressao = $(this).textSelected();
		var keyAsJson = $(this).attr("json");
		
		if ( expressao != undefined && expressao != null && expressao.text != "") {
			console.log( expressao.text + " - " + keyAsJson );
			
			salvarExpressao([
				{
					name: "keyAsJson",
					value: keyAsJson
				},
				{
					name: "texto",
					value: expressao.text
				},
				{
					name: "inicio",
					value: expressao.start
				},
				{
					name: "fim",
					value: expressao.end
				}
			]);
			
		}

	});

});

function bindClick() {
	$(".texto").click(function() {
		definicao([ {
			name : 'dic',
			value : $(this).attr("dic")
		}, {
			name : 'idioma',
			value : $(this).parents("li").attr("idioma")
		} ]);
	});
}
