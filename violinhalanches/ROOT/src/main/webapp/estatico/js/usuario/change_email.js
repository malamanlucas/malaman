

$(document).ready(function(){
	
	$("#btn_cadastrar").click(function(){
		$("#form_email").submitar();
	});
	
	$("#form_email").on('keypress', function(e) {
		var code = e.keyCode || e.which;
		if (code == 13) { // Enter keycode
			$("#form_email").submitar();
		}
	});
	
	
});