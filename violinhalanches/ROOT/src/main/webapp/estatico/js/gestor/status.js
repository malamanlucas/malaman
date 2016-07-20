
var urlRequest;

$(document).ready(function(){
	
	urlRequest = $("#url_change_status").val();
	
	initActions();
	
});

function initActions() {
	
	$("#change_trailer").click(function() {
		doRequestChangeStatusAjax("trailer")
	});

	$("#change_sale").click(function() {
		doRequestChangeStatusAjax("sale")
	});
	
}

function doRequestChangeStatusAjax(change) {
	showLoader();
	params = {
			"change"        : change,
			"saleOpened"    : $("#status_sale").val(),
			"trailerOpened" : $("#status_establishment").val()
	};
	defaultAjaxUpdate("POST", urlRequest, params);
}