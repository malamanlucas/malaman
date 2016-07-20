

$(document).ready(function(){
	
	$("#btn_cadastrar").click(function(){
		$("#form_password").submitar();
	});
	
	$("#form_password").on('keypress', function(e) {
		var code = e.keyCode || e.which;
		if (code == 13) { // Enter keycode
			$("#form_password").submitar();
		}
	});
	
	
});