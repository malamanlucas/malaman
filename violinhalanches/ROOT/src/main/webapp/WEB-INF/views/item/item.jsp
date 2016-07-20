
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<c:set var="url_salvar" scope="request">
	<c:url value="/item/salvar"/>
</c:set>

<input type="hidden" id="minimoValorPadrao" value="<c:out value="${parametros.minimoValorPadrao}" />" />
<input type="hidden" id="maximoValorPadrao" value="<c:out value="${parametros.maximoValorPadrao}" />" />
<input type="hidden" id="minimoLengthNome" value="<c:out value="${parametros.minimoLengthNome}" />" />
<input type="hidden" id="maximoLengthNome" value="<c:out value="${parametros.maximoLengthNome}" />" />

<div id="assunto" class="aeae">
	
	<vl-tags:titulo titleName="Cadastro de Ingredientes" />
	
	<div class="wrapper-form">
		<form:form modelAttribute="item" action="${url_salvar}" method="POST" enctype="multipart/form-data" id="form_item">

			<form:hidden path="id"/>
			
			<div class="clear" style="height:15px">&nbsp;</div>
			
			<div class="bloco-campo required">
				<label>Nome</label>
				<form:input path="name" id="campo_nome"/>
			</div>
			
			<div class="clear" style="height:15px">&nbsp;</div>
	
			<div class="bloco-campo required">
				<label>Valor Padrão</label>
				<form:input cssClass="campoMoeda" path="price" id="valor_padrao"/>
			</div>
			
			<div class="clear" style="height:15px">&nbsp;</div>
	
			<div class="bloco-campo required-file" id="local_foto">
				<vl-tags:file-upload/>
			</div>
			
			<div class="clear" style="height:15px">&nbsp;</div>
			
			<div class="bloco-campo">
				<input type="button" class="btn btn-lg btn-success" id="btn_salvar" value="Salvar" /> 
				<input type="button" class="btn btn-lg btn-danger submit-form" url="<c:url value="/item/gerenciar"/>" value="Cancelar" />
			</div>
		</form:form>
	</div>
</div>