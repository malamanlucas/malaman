<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<c:set var="url_salvar" scope="request">
	<c:url value="/gestor/text/save"/>
</c:set>

<div id="assunto" class="caixa-arredondada">

	<vl-tags:titulo titleName="Cadastro do Texto da HOME" />

	<div class="wrapper-form" style="max-width: 100%; width: 90% !important">
		<form:form method="POST" action="${url_salvar}" id="form_text_home" modelAttribute="textHome" >
			
			<%-- <sec:csrfInput/> --%>
			
			<form:hidden path="id"/>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Título</label>
				<form:textarea path="title"/>
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Corpo</label>
				<form:textarea path="body" cols="10" cssStyle="height: 300px" />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<input type="submit" class="btn btn-md btn-success" id="btn_cadastrar" value="Salvar" /> 
			</div>
		</form:form>
	</div>
	
</div>