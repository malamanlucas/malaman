
var urlItens;

$(document).ready(function() {
	
	initURLs();
	loadComponentsAjax();
	initActions();
	
});

function initActions() {
	
	$("#question_delivery :radio").click(function(){
		$("#entregar").val( $(this).val() );
	});
	
}

function loadComponentsAjax() {
	loadItensCart();
}

function loadItensCart() {
	$("#valor_final").text( "Carregando..." );
	defaultAjax("GET", urlItens, $("#painel-cart"), {}, true, initActionsCart);
}

function initActionsCart() {
	
	var priceTotal = $("#price_total_hidden").val();
	
	$("#valor_final").text( priceTotal );
	
	imageLazyLoad();
	
	$("#btn_finish").click(function(){
		
		var form  = $("#form_finish");
		form.find("#troco_hidden").val( $("#troco").val() );
		form.submitar();
	});
	
}

function initURLs() {
	urlItens          = $("#url_ajax_itens").val();
}
