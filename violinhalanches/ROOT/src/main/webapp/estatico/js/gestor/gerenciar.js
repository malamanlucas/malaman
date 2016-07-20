
var pager = new PaginationAjax.Pager();
var urlPaginate, urlDeletar, urlPage, perPage;

function initURLs() {
	urlPaginate = $("#url_paginate").val();
	urlDeletar  = $("#url_deletar").val();
	urlPage     = $("#url_page").val();
}

$(document).ready(function() {
	initURLs();
	var container = ".table-itens";
	var total = $("#total").val();
	$("#totais").text( total );
	var perPage = 8;
	pager.setContainerMainControls( container );
	pager.init(urlPaginate, urlPage, perPage, container, total, initActions);
});

function initActions() {
	$(".btn-excluir").click(function() {
		var paginaAtual = getPaginaAtual();
		pager.showLoader();
		var id = $(this).parents(".p-dsc").find(".id").val();
		ajaxDeletar(id,paginaAtual);
	});
	
	$(".icon-isNew").click(function(){
		var root = $(this).parents(".check-new");
		var id = root.find(".id").val();
		var statusNew = root.find(".new");
		changeStatusNew(id, $(this), statusNew);
	});
	
	$(".icon-enabled").click(function(){
		var root = $(this).parents(".check-enabled");
		var id   = root.find(".id").val();
		var statusEnabled = root.find(".enabled");
		changeStatusEnabled(id, $(this), statusEnabled);
	});
	
	refreshNews();
	applyActionsSubmitForm();
}

function refreshNews() {
	$(".check-new").each(function(){
		var id = $(this).find(".id").val();
		var icon = $(this).find(".icon-isNew");
		var statusNew = $(this).find(".new");
		refreshIconNew(id, icon, statusNew);
	});
	
	$(".check-enabled").each(function(){
		var id   = $(this).find(".id").val();
		var icon = $(this).find(".icon-enabled");
		var statusEnabled = $(this).find(".enabled");
		refreshIconEnabled(id, icon, statusEnabled);
	});
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

function refreshIconNew(id, icon, statusNew) {
	$.ajax({
		url : $("#url_is_new").val(),
		cache : false,
		data : {"id":id},
		accepts : {
			text : "application/json"
		},
		success : function(data) {
			if (data == true) {
				setIconAsNew(icon, statusNew);
			}
		}, error: function(data) {
			alert("Erro durante leitura da novidade do produto");
		}
	});
}

function refreshIconEnabled(id, icon, statusEnabled) {
	$.ajax({
		url : $("#url_is_enabled").val(),
		cache : false,
		data : {"id":id},
		accepts : {
			text : "application/json"
		},
		success : function(data) {
			if (data == true) {
				setIconAsEnabled(icon, statusEnabled);
			}
		}, error: function(data) {
			console.log(data);
			alert("Erro durante leitura da habilitação do produto");
		}
	});
}

function changeStatusEnabled(id, icon, statusEnabled) {
	$.ajax({
		beforeSend: function() {
			showLoader();
		},
		url : $("#url_change_enabled").val(),
		cache : false,
		data : {"id":id, "enabled": !(statusEnabled.val()==1) },
		success : function(data) {
			var val = statusEnabled.val();
			if (statusEnabled.val() == "0") {
				setIconAsEnabled(icon, statusEnabled);
			} else {
				setIconAsDisabled(icon, statusEnabled);
			}
		}, error: function(data) {
			alert("Erro durante atualização do status de habilitado");
		}, complete: function() {
			hideLoader();
		}
	});
}

function setIconAsEnabled(icon, statusEnabled) {
	statusEnabled.val(1);
	icon.removeClass("icon_manager-enabled_false");
	icon.addClass("icon_manager-enabled_true");
}

function setIconAsDisabled(icon, statusEnabled) {
	statusEnabled.val(0);
	icon.removeClass("icon_manager-enabled_true");
	icon.addClass("icon_manager-enabled_false");
}

function changeStatusNew(id, icon, statusNew) {
	$.ajax({
		beforeSend: function() {
			showLoader();
		},
		url : $("#url_change_statusNew").val(),
		cache : false,
		data : {"id":id, "isNew": !(statusNew.val()==1) },
		success : function(data) {
			if (statusNew.val() == "0") {
				setIconAsNew(icon, statusNew);
			} else {
				setIconAsNonNew(icon, statusNew);
			}
		}, error: function(data) {
			alert("Erro durante atualização do status de novidade");
		}, complete: function() {
			hideLoader();
		}
	});
}

function setIconAsNew(icon, statusNew) {
	statusNew.val(1);
	icon.removeClass("icon_manager-star_empty");
	icon.addClass("icon_manager-star_filled");
}

function setIconAsNonNew(icon, statusNew) {
	statusNew.val(0);
	icon.removeClass("icon_manager-star_filled");
	icon.addClass("icon_manager-star_empty");
}
