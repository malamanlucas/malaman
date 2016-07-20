
var urlPaginateCategoria, container, tipoCategoria, tipoLanche;

$(document).ready(function(){
	
	tipoCategoria        = $("#tipo_categoria").val();
	tipoLanche           = $("#tipo_lanche").val();
	urlPaginateCategoria = $("#url_paginate_categorias").val();
	container            = $("#painel-categorias");
	
	defaultAjax( "GET", urlPaginateCategoria, container, {"tipo": $("#tipo_categoria").val() }, true, initActions );
	
	$("#painel-tipo-categoria :radio").click( function(){
		var tipo = $(this).parent().find(".code").val();
		showLoader();
		defaultAjax( "GET", urlPaginateCategoria, container, {"tipo":tipo}, false, initActions );
		tipoCategoria = tipo;
	});
	
});

function initActions() {
	hideLoader();
	$(".generic-img").click( function(){
		
		var categoriaId = $(this).siblings(".code").val();
		if ( tipoCategoria ===  tipoLanche ) {
			$("#form_lanches .categoriaId").val( categoriaId );
			
			$("#assunto .modal_choose_bread").abrirModal();
			applyActionsIcons();
			$("#modal .tipoPao").click(function(){
				var tipo = $(this).find(".code_bread").val();
				$("#form_lanches .tipo").val( tipo );
				$("#form_lanches").submitar();
			});
		} else {
			$("#form_produtos .categoriaId").val( categoriaId );
			$("#form_produtos").submitar();
		}
		
	});
}

