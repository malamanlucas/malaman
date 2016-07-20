<%@page import="br.com.model.enums.CategoryType"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>


<form id="form_lanches" method="POST" action="<c:url value="/cardapio/off/lanches" />">
	<%-- <sec:csrfInput/> --%>
	<input type="hidden" class="tipo" name="tipo" value="" />
	<input type="hidden" class="categoriaId" name="categoria" value="" />
</form>

<form id="form_produtos" method="POST" action="<c:url value="/cardapio/off/produtos" />">
	<%-- <sec:csrfInput/> --%>
	<input type="hidden" class="categoriaId" name="categoria" value="" />
</form>

<input type="hidden" id="url_paginate_categorias" value="<c:url value="/cardapio/off/paginate" />" />
<input type="hidden" value="<%=CategoryType.LANCHE.getCode()%>" id="tipo_lanche" />
<input type="hidden" value="${tipo}" id="tipo_categoria" />

<div id="assunto">
	
	<vl-tags:titulo titleName="Cardápio" />
	
	<vl-tags:vertical-space height="5"/>
	
	<div class="center txt17 italico">
		Clique em uma das categorias e veja os itens dela.
	</div>
	
	<vl-tags:vertical-space height="5"/>
	
	<div id="painel-tipo-categoria" class="center">
		<c:forEach items="${tiposCategoria}" var="t">
			<div class="wrapper-radio">
				<input type="hidden" class="code" value="${t.code}" />
				<input type="radio" id="${t.name()}" value="${t.name()}" name="tipo" 
					<c:if test="${tipo eq t.code}"> checked="checked" </c:if> />
				<label for="${t.name()}" class="label-radio">
					<a class="icon icon-${t.icon}" icon="icon-${t.icon}" icon_hover="icon-${t.icon}_hover" ></a> 
				 </label>
			</div>
		</c:forEach>
	</div>
	
	<vl-tags:vertical-space height="10"/>
	
	<div class="caixa txt17" id="painel-categorias">
		<div class="center">
			<vl-tags:loader width="300" />
		</div>
	</div>
	
	<div class="modal_choose_bread" style="display:none">
		<div class="txt21" style="padding-top:30px">Escolha o pão que deseja ver os lanches</div>
		<div class="painel-choose_pao" style="display:inline-block;text-align:justify;padding:15px" >
			<div style="display:block" class="tipoPao" >
				<a class="icon icon-bread_normal" icon="icon-bread_normal" icon_hover="icon-bread_normal_hover" ></a>
				<input type="hidden" class="code_bread" value="${breadNormal}" />
			</div>
			
			<div style="display:block" class="tipoPao">
				<a class="icon icon-bread_kill_hungry" icon="icon-bread_kill_hungry" icon_hover="icon-bread_kill_hungry_hover" ></a>
				<input type="hidden" class="code_bread" value="${killHungry}" />
			</div>
			
			<div style="display:block" class="tipoPao">
				<a class="icon icon-bread_both" icon="icon-bread_both" icon_hover="icon-bread_both_hover" ></a>
				<input type="hidden" class="code_bread" value="-1" />
			</div>
		</div>
		<div class="clear" style="height:15px"></div>
	</div>
</div>
