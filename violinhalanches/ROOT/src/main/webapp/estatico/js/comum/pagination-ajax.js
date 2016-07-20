var PaginationAjax = {};
PaginationAjax.Pager = function() {

	this.txtLoader = "<div class=\"wrapper txt31 center negrito italico\">Carregando..."
			+ "<img src=\""+$("#context_estatico").val()+"img/loader.gif\" style=\"max-width:45px\" /></div>";

	this.messageDelete = "Não foi especificado uma mensagem de sucesso para exclusão";

	this.callBackPostRender = function() {
		console.log("callBackPostRender Não implementada");
	};
	
	this.actionDelete = undefined;

	this.init = function(urlRequest, urlPage, itensPerPage, container, total, callBackPostRender) {
		this.urlRequest = urlRequest;
		this.urlPage = urlPage;
		this.itensPerPage = itensPerPage;
		this.container = container;
		this.setTotal(total);
		if (callBackPostRender != undefined) {
			this.callBackPostRender = callBackPostRender;
		}
		msgDelete = $("#message_delete").val();
		if (msgDelete != undefined) {
			this.messageDelete = msgDelete;
		}

		this.showPage(1);
	};

	this.setTotal = function(total) {
		this.total = parseInt(total);
	};

	this.showLoader = function() {
		this.old = $(".active").attr("id");
		$(this.container).empty().html(this.txtLoader);
	};

	this.getNumberOfPage = function() {
		var numPages = 0;
		numPages = Math.ceil(this.total / this.itensPerPage);
		return numPages;
	};

	this.showMessageNoItems = function() {
		$(this.container)
				.empty()
				.html("<div class=\"wrapper txt31 center negrito italico\">Não há registros </div>");
	};

	this.postDelete = function(page) {
		this.actionDelete = true;
		this.showPage(page);
		showSucessMsg(this.messageDelete);
	};
	
	this.setContainerMainControls = function( containerMainControls ) {
		this.containerMainControls = containerMainControls;
	};

	this.showPage = function(page) {
		if (this.page == 0 || this.total == 0) {
			this.showMessageNoItems();
			return;
		}
		this.currentPage = page;
		start = (page - 1) * this.itensPerPage;
		if ( this.actionDelete != undefined ) {
			var total = parseInt( $("#totais").text() );
			if ( start > 0 && this.currentPage > Math.ceil( total/this.itensPerPage ) ) {
				start -= this.itensPerPage;
			}
			this.actionDelete = undefined;
		}
		params = {
			"start" : start,
			"qtd" : this.itensPerPage,
			"page" : pager.urlPage
		};
		$(this.containerMainControls).empty();
		doAjax(params, this);
	};

	function doAjax(params, pager) {
		$.ajax({
			beforeSend : function() {
				pager.showLoader();
			},
			type : "GET",
			url : pager.urlRequest,
			async : true,
			data : params,
			success : function(data) {
				$(pager.container).html(data);
				pager.afterPopulate();
			},
			complete : function() {
				hideLoader();
			}
		});
	}

	this.afterPopulate = function() {
		imageLazyLoad();
		this.renderControls(this.currentPage, this.getNumberOfPage());
		this.applyEvents();
		this.callBackPostRender();
	};

	this.renderControls = function(currentPage, number) {
		var pagingControls = "<div class='main-controls'><div class='msg-control'>Páginas: </div> <ul>";
		if (parseInt(currentPage) > number)
			currentPage = number;
		for (var i = 1; i <= number; i++) {
			if (i != currentPage) {
				pagingControls += "<li class=\"btn-control\"><span id=\"" + i + "\">" + i + "</span></li>";
			} else {
				pagingControls += "<li class=\"btn-control\"><span id=\"" + i + "\" class=\"active\">" + i + "</span></li>";
			}
		}
		pagingControls += "</ul></div>";
		$(this.containerMainControls).append( pagingControls );
	};

	this.applyEvents = function() {
		$(".btn-control span[class!='active']").click(function() {
			pager.showPage($(this).attr("id"));
		});
	};
};
