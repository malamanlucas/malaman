

function updateTest(data) {
	
	var pedido = JSON.parse(data.body);
	
	var painelPedido = $("#pedido"+pedido.number);
	updateIcon( painelPedido.find(".icon-status_pedido"), pedido.statusPedido );
	updateIcon( painelPedido.find(".icon-status_pagamento"), pedido.statusPagamento );
	
}

function updateIcon(icon, actual) {
	actual = $("#"+actual).val();
	var old = icon.attr("actual");
	icon.removeClass(old).attr("actual",actual).addClass(actual);
}