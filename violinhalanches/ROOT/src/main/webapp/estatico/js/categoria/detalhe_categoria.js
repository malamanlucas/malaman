$(document).ready(function() {
	url_comprar_lanche = $("#url_comprar-lanche").val();
	$(".btn-comprar-lanche").click(function() {
		id = $(this).siblings(".id").val();
		location.href = url_comprar_lanche + "?id=" + id;
	});
	
	$(".btn-comprar-produto").click(function() {
		id = $(this).siblings(".id").val();
		location.href = url_comprar + "?id=" + id;
	});
	
//	$(".itens").each(function() {
//		desc = $(this).parent();
//		if ($(this).val() == "NULO") {
//			desc.append("Sem Ingredientes");
//			return;
//		}
//		items = $($.parseXML($(this).val())).find("item");
//		qtdItems = items.length;
//		str = "";
//		items.each(function(index) {
//			if (index == 0) {
//				str += $(this).attr("nome");
//				if (index + 1 == qtdItems) {
//					str += ".";
//				}
//			} else if (index + 1 != qtdItems) {
//				str += ", " + $(this).attr("nome");
//			} else {
//				if (qtdItems > 1) {
//					str += " e ";
//				}
//				str += $(this).attr("nome") + ".";
//			}
//		});
//		if (str.length > 16) {
//			desc.append(str.substring(0, 36) + "...");
//			desc.attr("title", str);
//		} else {
//			desc.append(str);
//		}
//		$(desc).tooltip({
//			track : true
//		});
//	});
});