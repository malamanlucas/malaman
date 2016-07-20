
$(document).ready(function() {

	$("#telefone").focus();

	$("#btn_logar").click(function() {
		$("#form_login").submitar();
	});

	$("#form_login").on('keypress', function(e) {
		var code = e.keyCode || e.which;
		if (code == 13) { // Enter keycode
			$("#form_login").submitar();
		}
	});
	
	$(".link").click(function(){
		
		$("#form_unblock").submitar();
		
	});

});