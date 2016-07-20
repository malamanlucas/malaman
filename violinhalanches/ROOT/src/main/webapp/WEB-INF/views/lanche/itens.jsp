<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_paginate" value="<c:url value="/item/gerenciar/paginate" />" />
<input type="hidden" id="total" value="${sessionScope.totalItens}" />

<form id="form_voltar" style="display:none" action="<c:url value="/lanche/voltarLanche" />" method="POST">
<%-- 	<sec:csrfInput /> --%>
	<input type="hidden" class="campo_xml_hidden" name="itensXml" value="<c:out value="${itensXml}" escapeXml="true" default="<items />" />" />
</form>

<form style="display: none" id="form_itens" action="<c:url value="/lanche/itens/extras" />" method="POST">
<!-- 	<sec:csrfInput /> -->
	<input type="hidden" class="campo_xml_hidden" id="campo_xml_hidden" name="itensXml" value="<c:out value="${itensXml}" escapeXml="true" default="<items />" />" />
</form>

<input type="hidden" id="url_itensExtras" value="<c:url value="/lanche/itens/extras"/>" />

<div id="assunto">
	<div class="titulo txt26">
		<strong>Nome do Lanche: </strong> 
			<c:out value="${sessionScope.lancheSessao.name}" default="NULO" />
		&nbsp;&nbsp;&nbsp; 
		<strong>Valor: </strong>
		<c:out value="${sessionScope.lancheSessao.priceAsText}" default="NULO" />
	</div>
	
	<br />
	<div id="painel-acoes">
		<button id="btn_voltar"	class="btn btn-lg btn-danger left">Voltar</button>
		<button id="btn_prosseguir" class="btn btn-lg btn-success right">Cadastrar Itens Extras</button>
		<div class="clear"></div>
	</div>
	<br /> <br />

	<div id="localArrastavel">
		<div id="ingredientes">
			<!-- Painel que carregará via AJAX os Ingredientes -->
		</div>
		
		<div id="arraste">
			<img class="img-lazyload" src="<c:url value="/util/off/fotoTmp" />" />
			<h1 class="txt19">
				ARRASTE AQUI <br />OS INGREDIENTES
			</h1>
		</div>
		
		<div style="clear: right">&nbsp;</div>
		
		<div id="tabelaIngredientes" style="margin-top: 1%">
			<h1 class="txt24">Ingredientes do Lanche</h1>
			<table class="txt18 table table-bordered table-hover">
				<thead>
					<tr class="txt10">
						<th style="width: 60%">Nome</th>
						<th style="width: 25%">Quantidade</th>
						<th style="width: 15%">Ações</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<div class="clear">&nbsp;</div>
	</div>
</div>
