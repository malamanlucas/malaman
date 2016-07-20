<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<c:set var="url_salvar" scope="request">
	<c:url value="/carousel/save"/>
</c:set>

<style type="text/css">
	#campo_foto {
		width: 500px !important;
		height: 240px !important;
	}
</style>

<div id="assunto" class="aeae">
		
	<vl-tags:titulo titleName="Cadastro das fotos do Carousel" />
			
	<div class="wrapper-form">
		<form:form modelAttribute="carousel" action="${url_salvar}" method="POST" enctype="multipart/form-data">
			
			<form:hidden path="id"/>
			
			<div class="bloco-campo required-file" id="local_foto">
				<vl-tags:file-upload/>
			</div>
			
			<div class="clear" style="height:15px">&nbsp;</div>
			
			<div class="bloco-campo">
				<input type="button" class="btn-lg btn-success" value="Salvar" id="btn_salvar" />
			</div>
		</form:form>
	</div>		
</div>