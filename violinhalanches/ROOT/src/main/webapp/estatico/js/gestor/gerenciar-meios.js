var urlChangeMethod;

$(document).ready(function() {

	urlChangeMethod = $("#url_change_method").val();

	$(":checkbox[name='payment']").click(function() {

		var enabled = $(this).prop( "checked" );
		var id      = $(this).attr( "class" );
		
		changeMethod( false, enabled, id);

	});
	
	$(":checkbox[name='receiver']").click(function() {

		var enabled = $(this).prop( "checked" );
		var id      = $(this).attr( "class" );
		
		changeMethod( true, enabled, id);

	});

});

function changeMethod(method, enabled, id) {

	params = {
		"recebimento" : method,
		"enabled" : enabled,
		"id" : id
	};

	defaultAjaxUpdate( "POST", urlChangeMethod, params );

}
