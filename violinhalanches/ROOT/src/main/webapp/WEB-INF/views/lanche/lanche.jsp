<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"
	prefix="vl"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<c:choose>
	<c:when test="${not empty produto.id}">
		<c:set var="url_salvar" scope="request">
			<c:url value="/lanche/update" />
		</c:set>
	</c:when>
	<c:otherwise>
		<c:set var="url_salvar" scope="request">
			<c:url value="/lanche/itens" />
		</c:set>
	</c:otherwise>
</c:choose>

<div id="assunto" class="aeae">

	<c:choose>
		<c:when test="${not empty produto.id}">
			<vl-tags:titulo titleName="Edição do Lanche" />
		</c:when>
		<c:otherwise>
			<vl-tags:titulo titleName="Cadastro Inicial do Lanche" />
		</c:otherwise>
	</c:choose>

	<div class="wrapper-form">
		<form:form modelAttribute="produto" action="${url_salvar}"
			method="POST" enctype="multipart/form-data">

			<form:hidden path="id" />
			<form:hidden path="description" />
			
			<c:if test="${empty produto.id}">
				<input type="hidden" name="itensXml" value="<c:out value="${itensXml}" escapeXml="true" default="<items />" />" />
			</c:if>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Nome</label>
				<form:input path="name" id="campo_nome" />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo required">
				<label>Valor</label> 
				<form:input path="price" cssClass="campoMoeda" id="valor"/>
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo required">
				<label class="line">Categoria</label>
				<form:select path="category.id" id="categoria">
					<option value="">Selecione</option>
					<form:options items="${categorias}" itemLabel="name" itemValue="id"/>
				</form:select> 
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<c:forEach items="${tiposProduto}" var="t">
					<div class="wrapper-radio">
						<input type="radio" id="${t.name()}" value="${t.name()}" name="type" 
							<c:if test="${produto.type.code eq t.code}"> checked="checked" </c:if> />
						<label for="${t.name()}" class="label-radio">${t.description}</label>
					</div>
				</c:forEach>
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo required-file" id="local_foto">
				<vl-tags:file-upload />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<c:choose>
					<c:when test="${not empty produto.id}">
						<input type="button" class="btn btn-lg btn-success" id="btn_salvar" value="Salvar" />
					</c:when>
					<c:otherwise>
						<input type="button" class="btn btn-lg btn-success" id="btn_salvar" value="Cadastrar Ingredientes" />
					</c:otherwise>
				</c:choose>
				<input type="button" class="btn btn-lg btn-danger submit-form" url="<c:url value="/lanche/gerenciar"/>" value="Cancelar" />
			</div>
		</form:form>
	</div>
</div>