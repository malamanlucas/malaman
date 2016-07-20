
$(
	function() {
		$("body").append("<div id=\"fundoModal\"></div>");
		var fundoModal = $("#fundoModal");
		
		$.fn.abrirModalWithNoClone	 = function() {
			if (this.parents("#modal").length == 0) {
				build( fundoModal, $(this) );
			} else {
				alert("Não é possível abrir uma janela sobre a outra");
			}
		};
		
		$.fn.abrirModal = function() {
			if (this.parents("#modal").length == 0) {
				build( fundoModal, $(this).clone() );
			} else {
				alert("Não é possível abrir uma janela sobre a outra");
			}
	   	};
	   	
	   	$.fn.fecharModal = function() {
	   		janelaModal = $("#janelaModal");
	   		janelaModal.fadeOut({
	   			duration: 250,
	   			complete: function() {
	   				$("#janelaModal").remove();
	   				$("#modal").empty();
	   				$("body").css("overflow","visible");
	   				fundoModal.fadeOut({duration:250});
	   			}
	   		});
	   	}; 
	}
);

function build(fundoModal, modalContent) {
	
	$("body").css("overflow","hidden");
	
	modalContent.show();
	
	fundoModal.fadeIn();
	janelaModal = $("<div id=\"janelaModal\" style=\"display:none\"></div>");
	$("body").append(janelaModal);
	buildDimensions(janelaModal,$("body"),0);
	janelaModal.fadeIn();
	janelaModal.append("<div class=\"fecharModal\"><a class=\"icon icon-less35\"></a></div><div id=\"conteudoModal\"></div>");
	$(".fecharModal").click(function() {
		$(this).fecharModal();
	});
	
	$("body").bind("keyup",function(evt){
		if (evt.keyCode === $.ui.keyCode.ESCAPE) {
		   $("body").unbind("keyup");
           $(this).fecharModal(janelaModal);
        } 
	});
	conteudoModal = janelaModal.find("#conteudoModal");
	content = $("<div id=\"modal\" />").html(modalContent);
	conteudoModal.empty().html(content);
	conteudoModal.css("max-width","95%");
	conteudoModal.css("width","100%");
//	conteudoModal.css("height","+=50px");
	content.css("max-width","60%");
	centralizar(janelaModal);
//	centralizar($("#modal"));
	buildFunctionsGlobal();
	janelaModal.show();
}


function buildDimensions(obj, objContext, percentWidth) {
	percentWidth = (typeof percentWidth === 'undefined')?0:percentWidth;
	width = objContext.css("width").replace("px","");
	height = objContext.css("height").replace("px","");
//	maxheight = height-(height*0.3);
	maxwidth = width-(width*percentWidth);
//	janelaModal.css("max-height",maxheight);
	obj.css("max-width",maxwidth);
}

function centralizar(obj) {
	height = obj.css("height");
	width = obj.css("width");
	marginleft = parseFloat(width.replace("px","")/2)*-1;
	margintop = parseFloat(height.replace("px","")/2)*-1;
	obj.css("width",width).css("margin-left",marginleft).css("height",height).css("margin-top",margintop);
}

