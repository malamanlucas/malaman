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

function printXML() {
	var str = "\n\n<items>"; 
	xml.find("item").each(function(){
		str += "\n\t<item id=\""+$(this).attr("id")+"\" nome=\""+$(this).attr("nome")+"\" valor=\""+$(this).attr("valor")+"\" qtd=\""+$(this).attr("qtd")+"\" qtd_max=\""+$(this).attr("qtd_max")+"\" />";
	});
	str += "\n</items>";
	console.log(str);
}

function addItemTabela(id, nome, valor, qtd) {
	if (id != null) {
		var row = "<tr class=\"" + id + "\">";
	} else { // id == null
		var row = "<tr>";
	}
	row += "<td>" + nome.replace(/\_/g, ' ') + "</td>";
	row += "<td class=\"qtd\">"+qtd+"</td>";
	row += "<td class=\"campoMoedaEdited valor\">" + valor + "</td>";
	row += "</tr>";
	tabela.find("tbody").append( row );
	$(".qtd").editable(function(value, settings) {
		alterarItemXML("items item#"+id+"","qtd_max",value);
		return (value);
	}, {
		type : 'text',
		submit : 'OK',
		cancel : "Cancel",
		tooltip   : "Clique para editar"
	});
	
	$(".campoMoedaEdited").editable(function(value, settings) {
		var value = stringToNumber(value);
		alterarItemXML("items item#"+id+"","valor",value);
		return numberToMoeda(value);
	}, {
		type : 'text',
		submit : 'OK',
		cancel : "Cancel",
		tooltip   : "Clique para editar"
	});
}

function addIngrediente(id,nome, valor) {
	var item = tabela.find("." + id);
	if (item.length == 0) {
		addItemTabela(id, nome, valor, 1);
		addItemExtraXML(id,nome,valor,1);
		
	} else {
		var qtd = parseInt(item.find(".qtd").text());
		item.find(".qtd").text(qtd+1);
		alterarItemXML("items item#"+id+"","qtd_max",qtd+1);
		alterarItemXML("items item#"+id+"","valor",valor);
	}
}

function addItemExtraXML(id,nome, valor, qtdExtra) {
	var item = xml.find("items item#"+id+""); 
	if (item.length == 0) {
		xml.find("items").append($("<item id=\""+id+"\" nome=\""+nome+"\" valor=\""+valor+"\" qtd=\"0\" qtd_max=\""+qtdExtra+"\" />"));
	} else {
		item.attr("qtd_max",parseInt(item.attr("qtd"))+parseInt(qtdExtra));
		item.attr("valor",stringToNumber(valor));
	}
	printXML();
}

function alterarItemXML(query,prop,value) {
	var item = xml.find(query);
	if (prop == "qtd") {
		item.attr(prop,parseInt(parseInt(item.attr("qtd"))+parseInt(value)));
	} else if (prop == "valor") {
		item.attr(prop, stringToNumber(value) );
	} else if (prop == "qtd_max") {
		item.attr("qtd_max",parseInt(item.attr("qtd"))+parseInt(value));
	}
	
}

function destacarPainelArrastar() {
	painelArrastar.css("border", "4px solid red");
}

function removerDestaquePainelArrastar() {
	painelArrastar.css("border", "1px solid black");
}


function initActions() {
	$("#ingredientes .item img").css("width", $("#ingredientes .item img:eq(0)").css("width"));
	$("#ingredientes .item img").draggable({
		revert : false,
		addClasses : false,
		revertDuration : 400,
		helper : "clone"
	});
}

function init() {
	xml = $($.parseXML( $("#campo_xml_hidden").val()));
	
	xml.find("items item").each(function(){
		$(this).attr("qtd_max",$(this).attr("qtd"));
	});
	
	popularTabela();
	
	tabela = $("#tabelaIngredientesExtras");
	
	painelArrastar = $("#arraste");
	
	$("#arraste").droppable({
		accept : "#ingredientes .item img",
		drop : function(event, ui) {
			addIngrediente(ui.draggable.siblings(".id").val(), 
						  ui.draggable.siblings(".nome").val(),
						  ui.draggable.siblings(".valor").val());
		},
		over : destacarPainelArrastar,
		out : removerDestaquePainelArrastar,
		deactivate : removerDestaquePainelArrastar
	});
	
	initActions();
	
	url_voltar = $("#url_voltar").val();
	
	$("#btn_finalizar").click(function() {
		request( $("#form_itens") );
	});
	
	$("#btn_voltar").click(function() {
		request( $("#form_voltar") );
	});
}

function request(form) {
	form.find(".campo_xml_hidden").val(XMLtoString(xml));
	form.submitar();
}

function callBackPage() {
	initActions();
}

function popularTabela() {
	xml.find("item").each(function() {
		row = "<tr>";
		row += "<td class=\"nome\">" + $(this).attr("nome") + "</td>";
		row += "<td class=\"qtd\">" + $(this).attr("qtd") + "</td>";
		row += "</tr>";
		$("#tabelaIngredientes tbody").append(row);
	});
}
