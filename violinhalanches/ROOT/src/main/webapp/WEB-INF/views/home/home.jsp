<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<script>
//   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//   ga('create', 'UA-53596929-1', 'auto');
//   ga('send', 'pageview');

</script>

<input type="hidden" id="url_load_novidades" value="<c:url value="/novidade/off/load"/>" />
<input type="hidden" id="url_load_text_home" value="<c:url value="/gestor/off/text/load"/>" />

<div id="assunto" class="painel-info" >
	<div>
		<div class="titulo txt26">
			<div class="fonte-destaque">
				Violinha Lanches
			</div>
		</div>
		<div class="txt18">
			<img src="<c:url value="/estatico/img/loader.gif" />" style="width:70px; height:70px" />
			<!-- Load via Ajax -->
		</div>
	</div>
	<vl-tags:vertical-space height="10"/>
</div>

<div id="painel-novidade">
	<div id="titulo_novidade" class="txt26">
		Novidades
	</div>
	
	<vl-tags:vertical-space height="5"/>

	<div id="novidades">
		<img src="<c:url value="/estatico/img/loader.gif" />" style="width:70px; height:70px" />
		<!-- Load via Ajax -->
	</div>
</div>