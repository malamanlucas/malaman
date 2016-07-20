function notifyDashboard(data) {
	var count_pedido = JSON.parse(data.body);
	
	$("#btn_load_pedidos").fadeIn();
	$("#count_pedido").text( count_pedido );
}

function refreshPedidoDashboard(data) {
	
	var pedido = JSON.parse(data.body);
	
	var number          = pedido.number
	var statusPagamento = pedido.statusPagamento;
	var statusPedido    = pedido.statusPedido;
	var meioPagamento   = pedido.paymentMethod.enum;
	
	var container = $("#pedido"+number).find(".acoes")
	
	ajaxUpdateStatus(number, statusPagamento, statusPedido, meioPagamento, container);
	
}

function addRow() {
	var row = $("#painel-pedido_load").find(".painel-pedido").clone();
	populateRow(pedido, row);
	
	$(".table-pedidos").append( row );
	
//	// populate acoes
	var number    = pedido.number
	var pagamento = pedido.statusPagamento
	var pedido    = pedido.statusPedido
	
	var container = row.find(".acoes");
	ajaxAcoesStatus( number, pagamento, pedido, container );
	initActionStatus();
}

function populateRow(pedido, row) {
	// populate pedido
	row.attr("id", "pedido"+pedido.number);
	row.find(".number").val(pedido.number);
	row.find(".status_pagamento").val(pedido.statusPagamento);
	row.find(".status_pedido").val(pedido.statusPedido);
	row.find(".meio_pagamento").val(pedido.meioPagamento);
	row.find(".text_number").text(pedido.number);
	row.find(".text_date_hour").text(pedido.dateHourEmissionAsText);
	row.find(".text_last_date_hour").text(pedido.lastDateHourEmissionAsText);

	// populate user
	row.find(".text_username").text(pedido.user.name);
	var address = pedido.address;
	var resultAddress = address != undefined ? address.fullAddress : "Nenhum Endereço informado";
	row.find(".text_user_address").text(resultAddress);
	row.find(".text_user_phone").text(pedido.user.phone);
	var statusIcon = $("#" + pedido.user.userType).val();
	row.find(".icon_status_user").attr("actual", statusIcon).addClass(statusIcon);

	// populate itens
	var mapItens = pedido.itens;
	var itens = "";
	for (var i = 0; i < mapItens.length; i++) {

		var item = mapItens[i];
		itens += item.quantity + " " + item.key.name + " <br/>";

	}
	row.find(".pedido_itens").append(itens);

	// populate status
	updateIcon( row.find(".status .icon-status_pedido")   ,	pedido.statusPagamento );
	updateIcon( row.find(".status .icon-status_pagamento"),	pedido.statusPagamento );
	
	//populate price
	row.find(".text_price").text( pedido.priceAsText );
	
}
