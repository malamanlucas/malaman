
var pager = new PaginationAjax.Pager();
var urlPaginate, urlDeletar, urlPage, perPage, urlEndereco, urlPedido, urlPapeis, urlChangeUserStatus;
var parentIcon;

function initURLs() {
	urlPaginate         = $("#url_paginate").val();
	urlDeletar          = $("#url_deletar").val();
	urlPage             = $("#url_page").val();
	urlPedido           = $("#url_ajax_pedido").val();
	urlEndereco         = $("#url_ajax_endereco").val();
	urlPapeis           = $("#url_ajax_papeis").val();
	urlChangeUserStatus = $("#url_change_user_status").val();
}

$(document).ready(function() {
	initURLs();
	var container = ".table-itens";
	var total = $("#total").val();
	$("#totais").text( total );
	var perPage = 8;
	pager.setContainerMainControls( "#painel_main_controls" );
	pager.init(urlPaginate, urlPage, perPage, container, total, initActions );
	
	$("#cadastro-item").click(function(){
		location.href = $("#url_cadastro").val();
	});
});

function initActions() {
	
	applyActionsIcons();
	
	$(".btn-excluir").click(function() {
		var paginaAtual = getPaginaAtual();
		pager.showLoader();
		var id = $(this).parent().find(".id").val();
		ajaxDeletar(id,paginaAtual);
	});
	
	$(".btn-edit").click(function(){
		var id = $(this).parent().find(".id").val();
		var form = $("#form_edit");
		form.find("#edit_id").val( id );
		form.submitar();
	});
	
	$(".edit-endereco").click(function(){
		var id = $(this).parents("tr").find(".id").val();
		var form = $("#form_endereco");
		form.find("#user_id").val( id );
		form.submitar(); 
	});
	
	initDetalhes();
	
	$(".btn-change-status").click(function(){
		var hiddenValue = $(this).siblings(".value");
		
		var type  = $(this).siblings(".type").val(); 
		var value = hiddenValue.val() == "true";
		var id    = $(this).parents("tr").find(".id").val();
		
		hiddenValue.val( !value );
		
		parentIcon = $(this).parent();
		
		params = {
			"type"  : type,
			"value" : value,
			"id"    : id
		};
		
		defaultAjaxUpdateReturningJson("POST", urlChangeUserStatus, params, true, refreshUserIconStatus)
		
	});
	
}

function initDetalhes() {
	$(".detalhe_pedido").click(function() {
		var id = $(this).parents("tr").find(".id").val()
		ajaxVisualizeDetail( urlPedido, id );
	});
	
	$(".detalhe_endereco").click(function() {
		var id = $(this).parents("tr").find(".id").val()
		ajaxVisualizeDetail( urlEndereco, id );
	});
	
	$(".detalhe_papeis").each(function(){
		var id = $(this).parents("tr").find(".id").val();
		var container = $(this);
		defaultAjax("POST", urlPapeis, container, {"id":id}, true);
	});
}

function refreshUserIconStatus(data) {
	var icon = $( parentIcon ).find( data.icon );
	icon.removeClass( data.oldValue ).addClass( data.newValue );
}

function ajaxVisualizeDetail( url, id ) {
	params = {
		"id": id
	};
	
	showLoader();
	defaultAjax("POST", url, $("#assunto .modal_visualizar"), params, false);
	hideLoader();
	$("#assunto .modal_visualizar").abrirModal();
}

function getPaginaAtual() {
	var paginaAtual = parseInt($.trim($(".main-controls .active").text()));
	var total = parseInt($("#total").val());
	if ( Math.ceil((total-1)/perPage) < paginaAtual) {
		paginaAtual--;
	}
	return paginaAtual;
}

function atualizarTotal(data) {
	$("#total").val( data );
	$("#totais").text( data );
	pager.setTotal( data );
}

function ajaxDeletar(id, paginaAtual) {
	$.ajax({
		type:"GET",
		url:urlDeletar,
		data:{"id":id},
		accepts : {text : "application/json"},
		success: function(data) {
			atualizarTotal(parseInt(data));
			pager.postDelete(paginaAtual);
		}
	});
}


