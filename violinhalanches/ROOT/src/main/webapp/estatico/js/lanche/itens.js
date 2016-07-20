var painelArrastar, tabela, xml;

var pager = new PaginationAjax.Pager();

$(document).ready(function() {
	var urlPaginate = $("#url_paginate").val();
	var total = $("#total").val();
	var container = $("#ingredientes");
	pager.setContainerMainControls( container );
	pager.init(urlPaginate, "item/paginate", 12, container, total, initActions);
	init();
});

function populate(container, start, perPage) {
	defaultPopulate(urlPaginate, container, start, perPage, "item/paginate");
}

function addItemTabela(id, nome, qtd) {
	if (id != null) {
		var row = "<tr class=\"" + id + "\">";
	} else { // id == null
		var row = "<tr>";
	}
	row += "<td>" + nome.replace(/\_/g, ' ') + "</td>";
	row += "<td class=\"qtd\">"+qtd+"</td>";
	row += "<td><a class=\"delete-item icon icon-less25\" title=\"Excluir\"></a></td>";
	row += "</tr>";
	tabela.find("tbody").append(row);
	$(".qtd").editable(function(value, settings) {
		alterarItemXML("items item#"+id+"","qtd",value);
		return (value);
	}, {
		type : 'text',
		submit : 'OK',
		cancel : "Cancel",
		tooltip   : "Clique para editar"
	});
	
	$(".delete-item").click(function() {
		var row = $(this).parents("tr");
		row.fadeOut({
			duration: 500,
			complete: function() {
				id = row.attr("class");
				removerItemXML("item[id='"+id+"']");
				row.remove();
			}
		});
	});
}

function addIngrediente(id, nome, valor) {
	var item = tabela.find("." + id);
	if (item.length == 0) {
		addItemTabela(id, nome, 1);
		addItemXML(id,nome,1,valor);
	} else {
		var qtd = parseInt(item.find(".qtd").text());
		item.find(".qtd").text(qtd + 1);
		alterarItemXML("items item#"+id+"","qtd",qtd+1);
	}
}

function addItemXML(id,nome, qtd, valor) {
	xml.find("items").append($("<item id=\""+id+"\" valor=\""+valor+"\" nome=\""+nome+"\" qtd=\""+qtd+"\" />"));
}

function removerItemXML(query) {
	xml.find(query).remove();
}

function alterarItemXML(query,prop,value) {
	xml.find(query).attr(prop,value);
}

function destacarPainelArrastar() {
	painelArrastar.css("border", "4px solid red");
}

function removerDestaquePainelArrastar() {
	painelArrastar.css("border", "1px solid black");
}

function popularTabela() {
	xml.find("item").each(function() {
		var nome = $(this).attr("nome");
		var qtd  = $(this).attr("qtd");
		var id   = $(this).attr("id");
		addItemTabela(id, nome, qtd);
	});
}

function initActions() {
	$("#ingredientes .item img").css("width", $("#ingredientes .item img:eq(0)").css("width"));
	$("#ingredientes .item img").draggable({
		revert : false,
		cursor: "pointer",
		addClasses : false,
		revertDuration : 400,
		helper : "clone"
	});
}

function init() {
	
	xml = $($.parseXML( $("#campo_xml_hidden").val()));
	
	tabela = $("table");
	painelArrastar = $("#arraste");
	
	if (xml.find("item").length > 0) {
		popularTabela();
	}
	
	$("#btn_voltar").click(function(){
		request( $("#form_voltar") );
	});
	
	$("#btn_prosseguir").click(function() {
		request( $("#form_itens") );
	});
	
	initActions();

	$("#arraste").droppable({
		accept : "#ingredientes .item img",
		drop : function(event, ui) {
			var id    = ui.draggable.siblings(".id").val();
			var nome  = ui.draggable.siblings(".nome").val();
			var valor = ui.draggable.siblings(".valor").val();
			addIngrediente( id, nome, valor );
		},
		over : destacarPainelArrastar,
		out : removerDestaquePainelArrastar,
		deactivate : removerDestaquePainelArrastar
	});
}

function request(form) {
	form.find(".campo_xml_hidden").val(XMLtoString(xml));
	form.submitar();
}
