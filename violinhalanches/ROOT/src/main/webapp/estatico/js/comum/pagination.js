var Pagination = {};
Pagination.Pager = function() {
	
    this.init = function(itensPerPage, container, itens) {
    	this.itens = itens;
    	this.itensPerPage = itensPerPage;
	    this.container = container;
    	this.showPage(1);
    };
    
    this.getNumberOfPage = function() {
        var numPages = 0;
        if (this.itens != null && this.itensPerPage != null) {
            numPages = Math.ceil(this.itens.length / this.itensPerPage);
        }
        return numPages;
    };

    this.showPage = function(page) {
        this.currentPage = page;
        var html = '';

        start = (page-1) * this.itensPerPage;
        end = ((page-1)*this.itensPerPage) + this.itensPerPage;
        console.log(start + " - "+end);
        this.itens.slice(start,end).each(function() {
        	className = this.className;
            html += "<div class=\""+className+"\">" + $(this).html() + "</div>";
        });
        $(this.container).html(html);

        renderControls(this.currentPage, this.getNumberOfPage());
    };

    var renderControls = function(currentPage, number) {
        var pagingControls = "<div class='main-controls'><div class='msg-control'>Páginas: </div> <ul>";
        for (var i = 1; i <= number; i++) {
            if (i != currentPage) {
                pagingControls += '<li class="btn-control"><span onclick="pager.showPage('+i+');callBackPage();">' + i + '</span></li>';
            } else {
                pagingControls += '<li class="btn-control"><span class="active">' + i + '</span></li>';
            }
        }
        pagingControls += '</ul></div>';
        
        $(this.container).append(pagingControls);
    };
};
