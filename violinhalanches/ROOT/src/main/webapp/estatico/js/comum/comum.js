var regex_onlyLetters = /[^a-zA-Z áéíóúãõâêîôûÁÉÍÓÚÀÈÌÒÙàèìòùÂÊÎÔÛÃÕ]/;
var loader, url_add_carrinho, painelSucesso, painelErro, url_check_status, urlOperatorActive, stompClient;

$(document).ready(function() {
	
	$("#painel-itens_cart").bind("click", function(){
		$("#itens_into_cart").fadeToggle("fast");
	});
	
	applyActionsSubmitForm();
	startCheckingStatus();
	loadCarousel();
	initComponents();
	applyActionsIcons();
	applyMask();
	buildFunctionsGlobal();
});

$(function() {
		$.fn.submitar = function() {
			showLoader();
			$(".mask").each(function(){
				$(this).val( $(this).valNoMask() );
			});
			stompClient.disconnect();
			$(this).submit();
		};
		$.fn.valNoMask = function() {
			var value = $(this).val();
			return value.replace(/[^A-Za-z 0-9]/g, "");
		};
	}
);


function defaultPopulate(urlPaginate, container, start, perPage, page) {
	var params = {"start":start,"qtd":perPage,"page":page};
	defaultAjax("GET", urlPaginate, container, params, false);
	
}

function defaultAjaxUpdateReturningJsonWithoutLoader(httpType, urlRequest, params, postSuccess) {
	$.ajax({
		type: httpType,
		url: urlRequest,
		async: true,
		data: params,
		accepts : {
			text : "application/json"
		},
		success: function(data) {
			if (postSuccess != undefined) {
				postSuccess(data);
			}
		},
		error: handleErrorAjax
	});
}

function defaultAjaxUpdateReturningJson(httpType, urlRequest, params, async, postSuccess) {
	$.ajax({
		beforeSend: function() {
			showLoader();
		},
		type: httpType,
		url: urlRequest,
		async: async,
		data: params,
		accepts : {
			text : "application/json"
		},
		success: function(data) {
			if (postSuccess != undefined) {
				postSuccess(data);
			}
		},
		error: handleErrorAjax, 
		complete: function() {
			hideLoader();
		}
	});
}

function handleErrorAjax(xhr, errorType, exception) {
	console.log( exception );
	if (exception == "Forbidden") {
		location.href = $("#url_negado").val();
	} else {
		location.href = $("#url_error").val();
	}
}

function defaultAjaxUpdate(httpType, urlRequest, params, postSuccess) {
	$.ajax({
		beforeSend: function() {
			showLoader();
		},
		type: httpType,
		url: urlRequest,
		async: true,
		data: params,
		success: function(data) {
			if (data == true) {
				console.log("status atualizado com sucesso");
			}
			if (postSuccess != undefined) {
				postSuccess();
			}
		},
		error: handleErrorAjax
		, complete: function() {
			hideLoader();
		}
	});
}

function defaultAjax(httpType, urlRequest, container, params, sync, postSuccess) {
	$.ajax({
		type: httpType,
		url: urlRequest,
		async: sync,
		data: params,
		success: function(data) {
			redirectIfErrorAcessControl(data);
			
			$(container).html(data);
			imageLazyLoad();
			if (postSuccess != undefined) {
				postSuccess();
			}
		},
		error: handleErrorAjax
	});
}

function redirectIfErrorAcessControl(data) {
	data = $(data);
	if (data.find("#btn_logar").length != 0) {
		location.href = $("#url_login").val();
	} else if (data.find("#acesso_negado").length != 0) {
		location.href = $("#url_negado").val();
	}
}



function initComponents() {
	loader            = $("#wrapper_load");
	painelSucesso     = $("#painel-sucesso");
	painelErro        = $("#painel-erro");
	formLogout        = $("#form_logout");
	url_add_carrinho  = $("#url_add_carrinho").val();
	urlOperatorActive = $("#url_operator_active").val();
}

function showLoader() {
	loader.show();
}

function hideLoader() {
	loader.hide();
}

function numberToMoeda(n) {
	return "R$ " + numberToString(n);
}

function loadCarousel() {
	var urlRequest = $("#url_carousel_ajax").val();
	var container = $("#carousel");
	defaultAjax("POST", urlRequest, container, {}, true, carousel );
}

function numberToString(n, decimals) {
	var c = isNaN(decimals) ? 2 : Math.abs(decimals);
	var d = ',';
	var t = (typeof thousands_sep === 'undefined') ? '.' : thousands_sep;
	var sign = (n < 0) ? '-' : '';
	var i = parseInt(n = Math.abs(n).toFixed(c)) + '';
	var j = ((j = i.length) > 3) ? j % 3 : 0;
	return sign + (j ? i.substr(0, j) + t : '')
			+ i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t)
			+ (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
}

function aplicarEstiloValidacao() {
	if (painelErro.length == 1 && $("#painel-erro ul").length == 1) {
		painelErro.show();
		painelSucesso.hide();
	}
	$(".required label").prepend("<span style=\"color:red\">*</span>");
	$(".required-file #btn_cancel_foto").after("<span style=\"color:red;font-size:1.2em\"> (Obrigatório)</span>");
	hideSucess();
}

function hideSucess() {
	painelSucesso.fadeOut({
		duration:4000
	});
}

function showSucessMsg(msg) {
	painelSucesso.html(msg).fadeIn({
		duration: 500,
		complete: function() {
			hideSucess();
		}
	});
}

function stringToNumber(s) {
	if (typeof s == 'number') return s;
	if (s.indexOf("R$") != -1) {
		s = $.trim(s.replace("R$", ""));
	}
	return parseFloat(s.replace(",", "."));
}

function stringToMoeda(s) {
	return "R$ " + stringToNumber(s);
}

function XMLtoString(elem) {
	var serialized;
	// Obter XMLDocument encapsulado se elem for um jQuery Object
	if (elem instanceof jQuery)
		elem = elem.get(0);
	try {
		// XMLSerializer exists in current Mozilla browsers
		serialized = new XMLSerializer().serializeToString(elem);
	} catch (e) {
		// Internet Explorer has a different approach to serializing XML
		serialized = elem.xml;
	}
	return serialized;
}

$(function() {
	var foto = $("#foto");
	if (foto.length > 0) {
		foto.get(0).addEventListener("change", changeImagem, false);

		$("#btn_foto").click(function() {
			foto.trigger("click");
		});
		$("#btn_cancel_foto").click(cancelarImagem);
	}
});

function cancelarImagem() {
	$("#hasImage").val("false");
	$("#local_foto .erro").empty();
	$("#foto_item").css("display", "none");
	$("#sem_foto").css("display", "inline");
	$("#btn_foto").attr("value", "Selecionar Foto");
	$("#info_foto").css("display", "none");
	$("#btn_cancel_foto").css("display","none");
} 

function imagemSetada() {
	$("#hasImage").val("true");
	$("#sem_foto").css("display", "none");
	$("#btn_foto").attr("value", "Trocar Foto");
	$("#info_foto").css("display", "inline");
	$("#btn_cancel_foto").css("display","inline-block");
}


function updateStatusFirst(status) {
	$(".loading-status").hide();
	$("#icon-establishment, #icon_sale").show();
	updateStatus(status);
}

function updateTest(data) {
	console.log("não implementado");
}

function updateStatus(status) {
	var saleOpened    = status.saleOpened;
	var trailerOpened = status.trailerOpened;
	$("#status_sale").val( saleOpened );
	$("#status_establishment").val( trailerOpened );
	
	if( saleOpened ) {
		changeIcon($("#icon_sale"), "icon-online_sale_closed", "icon-online_sale_open");
	} else {
		changeIcon($("#icon_sale"), "icon-online_sale_open", "icon-online_sale_closed");
	}
	
	if( trailerOpened ) {
		changeIcon($("#icon-establishment"), "icon-establishment_closed", "icon-establishment_open");
	} else {
		changeIcon($("#icon-establishment"), "icon-establishment_open", "icon-establishment_closed");
	}
}

function changeIcon(icon, oldClass, newClass) {
	icon.removeClass( oldClass );
	icon.addClass( newClass );
}

function applyMask() {
	$(".mask").each(function(){
		$(this).mask( $(this).attr("mask") );
	});
}

function applyActionsIcons() {
	$(".icon, .icon_manager").hover(function(){
		$(this).removeClass( $(this).attr("icon") );
		$(this).addClass( $(this).attr("icon_hover") );
	}, function() {
		$(this).removeClass( $(this).attr("icon_hover") );
		$(this).addClass( $(this).attr("icon") );
	});
}

function buildFunctionsGlobal() {
	aplicarEstiloValidacao();
	
	$("#btn_logout").click(function(){
		formLogout.submitar();
	});
	
	$("#btn_salvar").click(function(){
		$(this).parents("form").submitar();
	});

	if ($(".campoMoeda").length > 0) {
		$(".campoMoeda").maskMoney();
	}
	
	applyTitleTrack();
	
	$("#reload_captcha").click(function(){
		urlCaptcha = $("#url_captcha").val();
		container = $("#container_captcha");
		key = $("#captcha_key").val();
		defaultAjax("GET", urlCaptcha, container, {"key":key}, false);
	});
	
	if ($(".img-lazyload").length > 0) {
		imageLazyLoad();
	}
}

function applyActionsSubmitForm() {
	$(".submit-form").click(function(){
		
		var url    = $(this).attr("url");
		
		showLoader();
		setTimeout(function(){
			location.href = url;
		}, "300");
		
	});
}

function applyTitleTrack() {
	$("#content").tooltip({
		track : true
	});
}

function imageLazyLoad() {
	$(".img-lazyload").lazyload({
		effect : "fadeIn",
		threshold: 1000
	});
}

function showError(msg) {
	painelSucesso.hide();
	painelErro.show().empty().html(msg);
}

function hideError() {
	painelErro.hide();
}

function changeImagem(event) {
	f = event.target.files[0];
	if (!f.type.match('image.*')) {
		$("#local_foto .erro").removeClass("sucess").html("Só é permitido imagens");
		return;
	}
	tmKB = Math.round(parseInt(f.size) / 1024).toFixed(0);
	//TODO: Parametrizar o 1000 vindo de alguma forma do servidor
	if (tmKB > 1000) {
		$("#local_foto .erro").removeClass("sucess").html( "Excedeu o limite máximo de 1000KB" );
		return;
	}
	$("#local_foto .erro").addClass("sucess").html(
			"Imagem pronta para ser salva.");
	$("#nome_foto").html(f.name);
	$("#tm_foto").html(tmKB);
	r = new FileReader();
	r.onabort = function(e) {
		alert("cancelado");
	};

	r.onload = function(e) {
		$("#foto_item").attr("src", e.target.result)
					   .css("height", "100%")
					   .css("width", "100%")
					   .css("display", "inline");
		imagemSetada();
	};

	r.readAsDataURL(f);
}

function startCheckingStatus() {
	defaultAjaxUpdateReturningJsonWithoutLoader( "POST", $("#url_new_status").val(), {} , updateStatusFirst);
	var socket = new SockJS( $("#websocket_url").val() );
	stompClient = Stomp.over(socket);
	
	stompClient.connect({}, function(frame) {
		console.log("Connected: " + frame);
		stompClient.subscribe("/off/refresh/status", function( data ) {
			var dataAsJSON = JSON.parse(data.body);
			updateStatus( dataAsJSON.status );
		});
		
		stompClient.subscribe("/user/off/monitor/pedido", updateTest);
		stompClient.subscribe("/user/dashboard/notify/pedidos", notifyDashboard);
		stompClient.subscribe("/user/dashboard/refresh/pedido", refreshPedidoDashboard)
		stompClient.subscribe("/user/gestor/inactivity", gestorInactivity)
	});
}

function gestorInactivity(data) {
	var result = confirm( data.body );
	if (result) {
		defaultAjaxUpdate("POST", urlOperatorActive, {});
	}
}

function notifyDashboard(data) {
	console.log( "loadPedido não implementado" )
}

function refreshPedidoDashboard(data) {
	console.log( "refreshPedidoDashboard não implementado" )
}

//$(document).ajaxSend(function(e, xhr, options) {
//	var token = $("meta[name='_csrf']").attr("content");
//	var header = $("meta[name='_csrf_header']").attr("content");
//	xhr.setRequestHeader(header, token);
//});