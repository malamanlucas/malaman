
/***
 * Função para escutar quando a método for chamado no CSS(Media-Queries)
 */

var options = { 
	$AutoPlay: true,
	$BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $ChanceToShow: 2
    },
    $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
        $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
        $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
        $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
    }
};

function carousel() {
	$(".jssora14l,.jssora14r,.jssora14ldn,.jssora14rdn")
					.css( "background-image", "url("+$("#url_icon_arrows").val()+")" );
	new $JssorSlider$('slider_container', options);
	applyAll();
}

$(window).resize(function(){
	applyAll();
});

function applyAll() {
	applyResponsive( $("#slider_container") );
	applyResponsive( $("#slider_container").children() );
	applyResponsive( $("#slider_container").children().children() );
	applyResponsive( $(".slide:eq(0)").parent() );
	applyResponsive( $(".slide") );
	applyResponsive( $(".slide").children() );
	applyResponsive( $(".slide .img_item") );
	applyResponsive( $(".slide .img_item") );
	$(".arrow").css("top","50%").css("margin-top","-25px");
}

function applyResponsive(d) {
	d.css("width","100%").css("height","100%");
}
