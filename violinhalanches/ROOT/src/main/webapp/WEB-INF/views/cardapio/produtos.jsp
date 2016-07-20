<%@page import="br.com.model.enums.CategoryType"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>


<div id="assunto">
	
	<vl-tags:titulo titleName="${titulo}" />
	
	<vl-tags:vertical-space height="5"/>
	
	<div class="center txt17 italico">${categoria.description}</div>
	<vl-tags:vertical-space height="3"/>
	<div class="center txt14 italico">${descricao}</div>
	
	<vl-tags:vertical-space height="10"/>
	
	<div class="caixa txt18">
		
		<c:choose>
			<c:when test="${not empty produtos}">
				<c:forEach items="${produtos}" var="p">
					<div class="painel-item">
						<div class="negrito nome center">
							<vl-tags:textCut max="25" text="${p.name}" />
						</div>
						<div class="valor txt13">${p.priceAsText}</div>
						
						<sec:authorize access="hasRole('ROLE_USUARIO')">
							<a class="icon icon-buy comprar" icon="icon-buy" icon_hover="icon-buy_hover" title="Adicionar ao Carrinho"></a>
						</sec:authorize>
						
						
						<c:if test="${p.typeAsCode == 1 or p.typeAsCode == 2}">
							<a class="icon icon-customize personalizar" icon="icon-customize" icon_hover="icon-customize_hover" title="Personalizar os Ingredientes"></a>
							<form action="<c:url value="/lanche/off/detail"/>" method="POST" class="form_customize">
								<input type="hidden" name="id" value="${p.id}" />
		<%-- 						<sec:csrfInput /> --%>
							</form>
						</c:if>
						
						<img src="<c:url value="/estatico/img/loader.gif" />" class="img-lazyload generic-img"
						 	 data-original="<c:url value="/produto/off/foto?id=${p.id}" />"
						 	 title="${p.description}" />
						 	 
						 <!-- Form add Carrinho -->
						 <form class="form_add_cart" method="POST" action="<c:url value="/carrinho/add/"/>">
		<%-- 				 	<sec:csrfInput /> --%>
							<input type="hidden" name="id"          value="${p.id}" />
						 	<input type="hidden" name="name"        value="${p.name}" />
						 	<input type="hidden" name="price"       value="${p.price}" />
						 	<input type="hidden" name="typeAsCode"  value="${p.typeAsCode}" />
						 	<input type="hidden" name="description" value="${p.description}" />
						 </form>
						 
					</div>
				</c:forEach>
				<vl-tags:vertical-space height="10"/>
			</c:when>
			<c:otherwise>
				<vl-tags:list_empty_message msg="Não há nenhum produto neste cardápio"/>
			</c:otherwise>
		</c:choose>
		
	</div>
	
</div>