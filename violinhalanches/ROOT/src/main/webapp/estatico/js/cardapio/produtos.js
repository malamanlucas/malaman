

$(document).ready(function(){
	
	
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
				
				$("#painel-sucesso").fadeIn({
					
				});
				showSucessMsg( "Produto adicionado com sucesso" );
			},
			error: handleErrorAjax
			, complete: function() {
				hideLoader();
			}
		});
		
	});
	
});