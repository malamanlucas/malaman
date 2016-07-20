
var urlWebService, uf, cidade;

$(document).ready(function() {
	urlWebService = $("#urlWebService").val();
	uf		      = $("#uf").val();
	cidade        = $("#cidade").val();
	
	initActions();
});

function initActions() {
	$("#btn_limpar").click(function(){
		$("#form_address :text:not(#id_address)").val("");
	});
	cepOnBlurPopulateData();
	$("#btn_cadastrar").click(function(){
		$("#form_address").submitar();
	});
}

function cepOnBlurPopulateData() {
	$("#cep").blur(function(){
		var cep = $(this).valNoMask();
		if (cep.length == 8) {
			$.ajax({
				beforeSend: function() {
					showLoader();
				},
				url   : urlWebService,
				data : {"cep":cep},
				type  : "GET",
				cache : false,
				success:function(data) {
					data = $.parseJSON(data);
					if (data.resultado == "0") {
						alert("CEP inexistente na nossa base de dados: "+cep);
					} else if (data.cidade == cidade && data.uf == uf) {
						$("#bairro").val(data.bairro);
						$("#logradouro").val(data.logradouro);
					} else {
						alert("Só são permitidos endereços de Araras-SP");
					}
				},
				error: function() {
					//TODO: Fazer validação corretamente no javascript
				},
				complete : function() {
					hideLoader();
				}
			});
		}
	});
}

