
var urlPedidos, urlAcoes, urlPedidoStatusUpdate, urlPrint, urlProducts, urlProductsDetail, urlPedidosPagination, urlCountNotEntered, urlLoadUser;

$(document).ready(function(){
	
	initURLs();
	initComponentsAjax();
	initActions();
	
});

function initActions() {
	
	$("#btn_load_pedidos").click(function(){
		showLoader();
		var qtd = 3;
		$.ajax({
			type: "GET",
			url: urlPedidosPagination,
			async: false,
			data: {"start":0, "qtd":qtd},
			success: function(data) {
				redirectIfErrorAcessControl(data);
				imageLazyLoad();
				
				var tbody = $(".table-pedidos");
				tbody.prepend( data );
				
				refreshButtonAndInitActionsPedido();
			},
			error: handleErrorAjax
		});
	});
}

function refreshButtonAndInitActionsPedido() {
	hideLoader();
	$("#btn_load_pedidos").hide();
	defaultAjaxUpdateReturningJsonWithoutLoader( "GET", urlCountNotEntered, {}, function(data){
		$("#count_pedido").text( data );
		if (parseInt(data) > 0) {
			$("#btn_load_pedidos").fadeIn();
		} 
	});
	initActionsPedido();
}

function initURLs() {
	urlLoadUser           = $("#url_user_ajax").val();
	urlPedidos            = $("#url_pedido_ajax").val();
	urlAcoes              = $("#url_acoes_ajax").val();
	urlPedidoStatusUpdate = $("#url_pedido_status_update").val();
	urlPrint              = $("#url_print").val();
	urlProducts           = $("#url_products").val();
	urlProductsDetail     = $("#url_products_detail").val();
	urlPedidosPagination  = $("#url_pedido_ajax_pagination").val();
	urlCountNotEntered    = $("#url_count_not_entered").val();
}

function initComponentsAjax() {
	loadPedidosAjax();
}

function loadPedidosAjax() {
	defaultAjax( "GET", urlPedidos, $(".table-pedidos"), {}, true, initActionsPedido );
}

function openModalDetailProducts(number) {
	showLoader();
	var productsDetail = $("<div class=\"txt15\" style=\"min-width:450px;padding:5px;margin-top:30px\" ></div>");
	
	defaultAjax("GET", urlProductsDetail, productsDetail, {"number": number}, true, function() {
		hideLoader();
		productsDetail.abrirModalWithNoClone();
	});
}
	
function initActionsPedido() {
	
	applyActionsIcons();
	
	$(".btn-printer").click(function() {
		var number = $(this).parents(".painel-pedido").find(".number").val();
		defaultAjaxUpdate("GET", urlPrint, {"number":number});
	});
	
	$(".modal_detalhe_produtos").click(function(){
		var number = $(this).parents(".painel-pedido").find(".number").val();
		openModalDetailProducts( number );
	});
	
	$(".table-pedidos .painel-pedido").each(function() {
		
		var number        = $(this).find(".number").val();
		var pagamento     = $(this).find(".status_pagamento").val();
		var pedido        = $(this).find(".status_pedido").val();
		var meioPagamento = $(this).find(".meio_pagamento").val();
	
		var container = $(this).find(".acoes");
		
		ajaxAcoesStatus(number, pagamento, pedido, meioPagamento, container);
		
		var phone          = $(this).find(".user_phone").val();
		var painelUsuario  = $(this).find(".painel_user");
		
		defaultAjax( "GET", urlLoadUser, painelUsuario, {"phone": phone}, true );
		
		var products = $(this).find(".products_detail");
		
		defaultAjaxUpdateReturningJsonWithoutLoader("GET", urlProducts, {"number":number}, function(data){
			products.text( data );
		});
		
	});
}

function ajaxAcoesStatus(number, pagamento, pedido, meioPagamento, container) {
	$(container).html( $("#painel-img-load .img-load").clone() );
	var params = {
		"number"        : number,
		"pagamento"     : pagamento,
		"pedido"        : pedido,
		"meioPagamento" : meioPagamento
	};
	
	defaultAjax("GET", urlAcoes, container, params, true, initActionStatus );
}

function ajaxUpdateStatus(number, pagamento, pedido, meioPagamento, container, painelUsuario, phone) {
	container.html($("#painel-img-load .img-load").clone());
	params = {
		"number"    : number,
		"pagamento" : pagamento,
		"pedido"    : pedido
	};
	$.ajax({
		type: "GET",
		url: urlPedidoStatusUpdate,
		data: params,
		accepts : {text : "application/json"},
		success: function(data) {
			if ( pedido == "ENTREGUE" || pedido == "NAO_ENTREGUE") {
				container.parents("tr").fadeOut({
					complete: function() {
						$(this).remove();
					}
				});
			} else {
				updateStatusJSON(data);
				ajaxAcoesStatus(number, pagamento, pedido, meioPagamento, container);
				painelUsuario.html("Carregando dados do usuário... <img src=\"/estatico/img/loader.gif\" style=\"width:45px\" />");
				defaultAjax( "GET", urlLoadUser, painelUsuario, {"phone": phone}, true );
			}
		},
		error: function(xhr, errorType, exception) {
			alert( exception );
			if (exception == "Forbidden") {
				location.href = $("#url_negado").val();
			} else {
				location.href = $("#url_error").val();
			}
		}
	});
}

function updateStatusJSON(data) {
	updateStatusAndHiddenFields( data );
}

function updateStatusAndHiddenFields(pedido) {
	var painelPedido = $("#pedido"+pedido.number);
	painelPedido.find(".status_pagamento").val( pedido.statusPagamento );
	painelPedido.find(".status_pedido"   ).val( pedido.statusPedido );
	
	updateIcon( painelPedido.find(".icon-status_pagamento"), pedido.statusPagamento );
	updateIcon( painelPedido.find(".icon-status_pedido")   , pedido.statusPedido );
}

function updateIcon(icon, actual) {
	actual = $("#"+actual).val();
	var old = icon.attr("actual");
	icon.removeClass(old).attr("actual",actual).addClass(actual);
}

function initActionStatus() {
	
	$(".radio_pagamento").click(function(){
		var pagamento = $(this).val();
		var painelPedido = $(this).parents(".painel-pedido");
		var number        = painelPedido.find(".number").val();
		var pedido        = painelPedido.find(".status_pedido").val();
		var meioPagamento = painelPedido.find(".meio_pagamento").val();
		var phone         = painelPedido.find(".user_phone").val();
		
		var container = painelPedido.find(".acoes");
		var painelUsuario = $("."+phone);
		ajaxUpdateStatus(number, pagamento, pedido, meioPagamento, container, painelUsuario, phone);
	});

	$(".radio_pedido").click(function(){
		var pedido        = $(this).val();
		var painelPedido  = $(this).parents(".painel-pedido");
		var pagamento     = painelPedido.find(".status_pagamento").val();
		var number        = painelPedido.find(".number").val();
		var meioPagamento = painelPedido.find(".meio_pagamento").val();
		var phone         = painelPedido.find(".user_phone").val();
		
		var container     = painelPedido.find(".acoes")
		var painelUsuario = painelPedido.find("."+phone);
		ajaxUpdateStatus(number, pagamento, pedido, meioPagamento, container, painelUsuario, phone);
	});
}
