
var urlWebService, uf, cidade, urlEnderecoLoader, urlSaveAddress, urlQuantity, urlItens, urlChangeMethod;

$(document).ready(function() {
	
	initURLs();
	loadComponentsAjax();
	initActions();
	
});

function loadComponentsAjax() {
	loadMethods();
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
	
	$(".more").click(function() {
		var itemCart = $(this).parents(".item-cart");
		var quantity = parseInt( itemCart.find(".item_quantity").val() );
		quantity++;
		ajaxQuantity( itemCart, quantity );
	});
	
	$(".less").click(function(){
		var itemCart = $(this).parents(".item-cart");
		var quantity = parseInt( itemCart.find(".item_quantity").val() );
		quantity--;
		ajaxQuantity( itemCart, quantity );
	});
	
}

function ajaxQuantity(itemCart, quantity) {
	var name        = itemCart.find(".item_name").val();
	var description = itemCart.find(".item_description").val();
	var type        = itemCart.find(".item_type").val();
	
	var params = {
			"name"        : name,
			"description" : description,
			"quantity"	  : quantity,
			"type"	      : type
	};
	
	defaultAjaxUpdateReturningJson( "POST", urlQuantity, params, false, function(data) {
		if (data.quantity == 0) {
			loadItensCart();
		} else {
			$("#valor_final").text( data.priceTotal );
			itemCart.find(".subTotal").text( data.subTotal );
			itemCart.find(".quantity").text( data.quantity );
			itemCart.find(".item_quantity").val( data.quantity );
		}
	});
}

function initURLs() {
	urlItens          = $("#url_ajax_itens").val();
	urlWebService     = $("#urlWebService").val();
	uf		          = $("#uf").val();
	cidade            = $("#cidade").val();
	urlEnderecoLoader = $("#url_endereco_loader").val();
	urlSaveAddress    = $("#url_save_address").val();
	urlQuantity       = $("#url_quantity").val();
	urlChangeMethod   = $("#url_change_method").val();
}

function initActions() {
	
	$("#btn_cancel").click(function(){
		$("#form_cart_clean").submitar();
	});
	
	$("#ENDERECO_CADASTRADO").click(function() {
		hideError();
		var params = {
			"typeAddress" : $(this).val()
		}
		defaultAjaxUpdateReturningJson("GET", urlEnderecoLoader, params, true, populateAddressDelivery);
	});
	
	$("#OUTRO_ENDERECO").click(function(){
		hideError();
		$("#assunto .form_endereco").abrirModal();
		applyMask();
		cepOnBlurPopulateData();
		$("#modal .btn_salvar_end").click(function(){
			params = $( "#modal .form_endereco form" ).serialize();
			params += "&typeAddress="+$("input[name='addressType']:checked").val();
			defaultAjaxUpdateReturningJson("POST", urlSaveAddress, params, false, populateAddressDelivery);
			$(this).fecharModal();
		});
	});
}

function populateAddressDelivery(result) {
	if ( result.hasError == true) {
		showError( result.errorMsg );
	} else {
		$("#endereco_delivery").html( result );
	}
} 

function loadMethods() {
	
	loadPaymentsEnabled();
	loadReceiversEnabled();
	
}

function loadPaymentsEnabled() {
	container = $("#meio_pagamento");
	defaultAjax("GET", $("#url_meio_pagamento").val(), container, {}, true, initActionsPayments);
}

function loadReceiversEnabled() {
	container = $("#meio_recebimento");
	defaultAjax("GET", $("#url_meio_recebimento").val(), container, {}, true, initActionsReceivers);
}

function initActionsPayments() {
	$(".payment").click(function(){
		var params = {
			"code" : $(this).val(),
			"type" : "payment"
		};
		defaultAjaxUpdate("POST", urlChangeMethod, params);
	});
}

function initActionsReceivers() {
	$(".receiver").click(function(){
		var code = $(this).val();
		var params = {
				"code" : code,
				"type" : "receiver"
			};
		defaultAjaxUpdate("POST", urlChangeMethod, params);
		if (code == 2) {
			$("#painel-endereco").fadeIn();
		} else {
			$("#painel-endereco").fadeOut();
		}
	});
}

function cepOnBlurPopulateData() {
	$("#modal .cep").blur(function(){
		var cep = $(this).valNoMask();
		if (cep.length == 8) {
			$.ajax({
				beforeSend: function() {
					showLoader();
				},
				url   : urlWebService,
				data : {"cep":cep},
				type  : "GET",
				cache : false,
				success:function(data) {
					data = $.parseJSON(data);
					if (data.resultado == "0") {
						alert("CEP inexistente na nossa base de dados: "+cep);
					} else if (data.cidade == cidade && data.uf == uf) {
						$("#modal .bairro").val(data.bairro);
						$("#modal .logradouro").val(data.logradouro);
					} else {
						alert("Só são permitidos endereços de Araras-SP");
					}
				},
				error: function() {
					//TODO: Fazer validação corretamente no javascript
				},
				complete : function() {
					hideLoader();
				}
			});
		}
	});
}

