

$(document).ready(function(){
	
	$("#btn_cadastrar").click(function(){
		$("#form_cadastro").submitar();
	});
	
	$("#form_cadastro").on('keypress', function(e) {
		var code = e.keyCode || e.which;
		if (code == 13) { // Enter keycode
			$("#form_cadastro").submitar();
		}
	});
	
	
});