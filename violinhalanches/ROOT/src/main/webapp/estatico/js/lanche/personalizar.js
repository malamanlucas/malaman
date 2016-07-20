
function obterDescricaoLanche() {
	var str = "";
	var elements = $(".painel-item");
	var tm = elements.length - 1;
	elements.each(function(index) {
		if (index == 0) {
			str += "(" + $(this).find(".qtd").text() + ")"
					+ $(this).find(".nome").val();
			if (index == tm) {
				str += ".";
			}
		} else if (index != tm) {
			str += ", " + "(" + $(this).find(".qtd").text() + ")"
					+ $(this).find(".nome").val();
		} else {
			if (tm > 0) {
				str += " & ";
			}
			str += "(" + $(this).find(".qtd").text() + ")"
					+ $(this).find(".nome").val() + ".";
		}
	});
	return str;
}

var valorFinal;

$(document).ready(function() {
	valorFinal = parseFloat($("#lanche_preco").val());
	
	$("#add-carro").click(function() {
		$("#price_product").val(parseFloat(valorFinal).toFixed(2));
		$("#descricao_product").val( obterDescricaoLanche() );
		$("#extra_info_hidden").val( $("#extra_info").val() );
		$("#form_add_cart").submitar();
	});
	
	$("#amount_itens_lanche").bind("click", function(){
		$("#itens_into_lanche").fadeToggle("fast");
	});
	
	loadItensDynamically();
});

function loadItensDynamically() {
	var params = { "id": $("#lanche_id").val() };
	var container = $("#painel-item");
	var urlRequest = $("#url_detail_itens").val();
	defaultAjax("POST", urlRequest, container, params, true, initActions);
}

function initActions() {
	acaoAdd_Item();
	acaoSub_Item();
	populateDropDownItensIntoLanche();
}

function populateDropDownItensIntoLanche() {
	$(".painel-item").each(function(){
		var name          = $(this).find(".nome").val();
		var currentAmount = $(this).find(".qtd_original").val();
		var id            = $(this).find(".id").val();
		
		if ( parseInt(currentAmount) > 0) {
			addItemIntoLanche(id, currentAmount, name);
		}
	});
}

function addItemIntoLanche(id, currentAmount, name) {
	$("#itens_into_lanche").append("<li class=\""+id+"\">"+currentAmount+" "+name+"(s)</li>");
}

function atualizarTotal(val, op) {
	if (op == "+") {
		valorFinal += parseFloat(val);
	} else if (op == "-") {
		valorFinal -= parseFloat(val);
	}
	$("#valor_final_lanche").text(numberToMoeda(valorFinal));
}

function atualizarItensIntoLanche(id, name, currentAmount, op) {
	var item = $("#itens_into_lanche").find("."+id);
	var currentAmount = parseInt( currentAmount );
	if (op == "+") {
		if (currentAmount == 1) {
			addItemIntoLanche(id, currentAmount, name);
		} else {
			item.html( ""+currentAmount+" "+name+"(s)" );
		}
	} else if (op == "-") {
		if (currentAmount == 0) {
			item.remove();
		} else {
			item.html( ""+currentAmount+" "+name+"(s)" );
		}
	}
}

function acaoAdd_Item() {
	$(".add_item").click(function() {
		var pai = $(this).parent();
		var qtdOriginal = parseInt(pai.find(".qtd_original").val());
		var qtd = pai.find(".qtd");
		var qtdAtual = parseInt($.trim(qtd.text()));
		var qtdMax = parseInt(pai.find(".qtd_max").val());
		var id = pai.find(".id").val();
		var name = pai.find(".nome").val();

		if (qtdAtual >= qtdOriginal) {
			atualizarTotal(pai.find(".valor").val(), "+");
		}

		qtdAtual++;
		$("#qtdItems").text(parseInt($("#qtdItems").text())+1);
		qtd.text(qtdAtual);
		if (qtdAtual == qtdMax && $(this).css("display") != "none") {
			$(this).css("display","none");
		} 
		
		var btn_sub = pai.find(".sub_item");
		if (btn_sub.css("display") == "none") {
			btn_sub.css("display","inline");
		}
		
		atualizarItensIntoLanche(id, name, qtdAtual, "+");
	});
}

function acaoSub_Item() {
	$(".sub_item").click(function() {
		var pai = $(this).parent();
		var qtdOriginal = parseInt(pai.find(".qtd_original").val());
		var qtd = pai.find(".qtd");
		var qtdAtual = parseInt($.trim(qtd.text()));
		var id = pai.find(".id").val();
		var name = pai.find(".nome").val();
		
		
		if (qtdAtual > qtdOriginal) {
			atualizarTotal(pai.find(".valor").val(), "-");
		}
		
		qtdAtual--;
		$("#qtdItems").text(parseInt($("#qtdItems").text())-1);
		qtd.text(qtdAtual);
		if (qtdAtual == 0 && $(this).css("display") != "none") {
			$(this).css("display","none");
		}
		
		btn_add = pai.find(".add_item");
		if (btn_add.css("display") == "none") {
			btn_add.css("display","inline");
		}
		
		atualizarItensIntoLanche(id, name, qtdAtual, "-");
	});
}