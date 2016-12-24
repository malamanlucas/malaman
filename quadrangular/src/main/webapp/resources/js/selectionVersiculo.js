$.fn.textSelected = function() {
	var selection = getSelection(this[0]);
	if (selection.type == "Range") {
		var idPaiOriginal = $(this).parent().attr("id");
		var idPaiSelecionado = $(selection.focusNode.parentElement).parent().attr("id")
		if ( idPaiOriginal == idPaiSelecionado ) {
			
			var start = selection.anchorOffset,
			end = selection.focusOffset;
			
			return $(this).text().substr(start, end-start);
		}
		
	} else {
		return "";
	}
};
