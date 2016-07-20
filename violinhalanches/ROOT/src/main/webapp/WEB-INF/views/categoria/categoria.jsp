<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<c:set var="url_salvar" scope="request">
	<c:url value="/categoria/salvar"/>
</c:set>

<div id="assunto" class="aeae">
		
	<vl-tags:titulo titleName="Cadastro de Categoria dos Produtos" />
			
	<div class="wrapper-form">
		<form:form modelAttribute="categoria" action="${url_salvar}" method="POST"
		enctype="multipart/form-data">
			
			<form:hidden path="id"/>
			
			<div class="clear" style="height:15px">&nbsp;</div>
		
			<div class="bloco-campo required">
				<label>Nome</label> 
				<form:input path="name" id="campo_nome"/>
			</div>
			
			<div class="clear" style="height:15px">&nbsp;</div>
	
			<div class="bloco-campo required">
				<label>Descrição</label>
				<form:textarea path="description"/>
			</div>
			
			<div class="clear" style="height:15px">&nbsp;</div>
			
			<div class="bloco-campo required">
				<label>Tipo da Categoria</label>
				<form:select path="typeAsCode">
					<form:option label="--Selecione--" value="-1" />
					<form:options items="${tiposCategoria}" itemValue="code"/>
				</form:select>
			</div>
			
			<div class="clear" style="height:15px">&nbsp;</div>
	
			<div class="bloco-campo required-file" id="local_foto">
				<vl-tags:file-upload/>
			</div>
			
			<div class="clear" style="height:15px">&nbsp;</div>
			
			<div class="bloco-campo">
				<input type="button" class="btn-lg btn-success" value="Salvar" id="btn_salvar" />
				<input type="button" class="btn btn-lg btn-danger submit-form" url="<c:url value="/categoria/gerenciar"/>" value="Cancelar" />
			</div>
		</form:form>
	</div>		
</div>