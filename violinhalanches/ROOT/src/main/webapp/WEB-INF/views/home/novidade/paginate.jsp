<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>


<c:forEach items="${novidades}" var="p">
	<div class="novidade">
		<div class="negrito nome center txt14">
			<vl-tags:textCut max="25" text="${p.name}" />
		</div>
		
		<vl-tags:vertical-space height="2"/>
		
		<div class="valor txt18">${p.priceAsText}</div>
		
		<sec:authorize access="hasRole('ROLE_USUARIO')">		
			<a class="icon icon-buy comprar" icon="icon-buy" icon_hover="icon-buy_hover" title="Adicionar ao Carrinho"></a>
		</sec:authorize>
		
		<form class="form_add_cart" method="POST" action="<c:url value="/carrinho/add/no/redirect"/>">
<%-- 		 	<sec:csrfInput /> --%>
			<input type="hidden" name="id"          value="${p.id}" />
		 	<input type="hidden" name="name"        value="${p.name}" />
		 	<input type="hidden" name="price"       value="${p.price}" />
		 	<input type="hidden" name="typeAsCode"  value="${p.typeAsCode}" />
		 	<input type="hidden" name="description" value="${p.description}" />
		 </form>
		
		<c:if test="${p.typeAsCode == 1 or p.typeAsCode == 2}">
			<sec:authorize access="hasRole('ROLE_USUARIO')">
				<a class="icon icon-customize personalizar" icon="icon-customize" icon_hover="icon-customize_hover" title="Personalizar os Ingredientes"></a>
			</sec:authorize>
			<form action="<c:url value="/lanche/off/detail"/>" method="POST" class="form_customize">
<%-- 				<sec:csrfInput /> --%>
				<input type="hidden" name="id" value="${p.id}" />
			</form>
		</c:if>
		
		<img src="<c:url value="/estatico/img/loader.gif" />" class="img-lazyload generic-img"
		 	 data-original="<c:url value="/produto/off/foto?id=${p.id}" />"
		 	 title="${p.description}" />
	</div>
</c:forEach>
