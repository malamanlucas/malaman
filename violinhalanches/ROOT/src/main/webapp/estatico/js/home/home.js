
var url_categoria_detalhe;

$(document).ready(function(){
	
	$(".categoria img").click(function() {
		$(this).siblings("form").submitar();
	});

	loadComponentsAjax();
});

function loadComponentsAjax() {
	loadNovidades();
	loadTextHome();
}

function loadTextHome() {
	var urlPaginate = $("#url_load_text_home").val();
	var container   = $("#assunto");
	defaultAjax( "POST", urlPaginate, container, {},  true);
}

function loadNovidades() {
	var urlPaginate = $("#url_load_novidades").val();
	var container   = $("#novidades");
	defaultAjax( "POST", urlPaginate, container, {},  true, initActions );
}

function initActions() {
	applyActionsIcons();
	
	$(".personalizar").click(function(){
		$(this).siblings(".form_customize").submitar();
	});
	
	$(".comprar").click(function(){
		var form = $(this).parent().find(".form_add_cart");
		var params = form.serialize();
		$.ajax({
			beforeSend: function() {
				showLoader();
			},
			type: "GET",
			url: form.attr("action"),
			async: true,
			data: params,
			dataType: "html",
			success: function(data) {
				data = $("<div>").html(data);
				$("#painel-preco_cart").html( data.find("#painel-preco_cart").html() ) ;
				$("#painel-itens_cart").html( data.find("#painel-itens_cart").html() );
				showSucessMsg( "Produto adicionado com sucesso" );
			},
			error: handleErrorAjax
			, complete: function() {
				hideLoader();
			}
		});
		
	});
}

