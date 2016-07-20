<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"	prefix="vl"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<input type="hidden" id="url_paginate" value="<c:url value="/produto/gerenciar/paginate" />" />
<input type="hidden" id="url_deletar" value="<c:url value="/produto/deletar" />" />
<input type="hidden" id="url_page" value="produto/gerenciar/paginate" />
<input type="hidden" id="total" value="${total}" />
<input type="hidden" id="message_delete" value="Produto excluido com sucesso" />

<div id="assunto">
	
	<div id="wrapper-gerenciar">
		
		<sec:authorize access="hasRole('ROLE_GESTOR')">
			<div class="txt31" id="cadastro-item">
				<a class="submit-form" url="<c:url value="/produto/" />" >Cadastrar</a>
			</div>
		</sec:authorize>

		<div class="txt31 caixa" id="txt-qtd-itens"><span id="totais">${total}</span>  Produto(s) cadastrada(s)</div>
		
		<div class="vertical-space5"></div>

		<div class="table-itens caixa">
			<div class="wrapper txt31 center negrito italico">
				Carregando...
				<img src="<c:url value="/estatico/img/loader.gif" />" style="max-width:45px" />
			</div>
		</div>
	</div>
</div>