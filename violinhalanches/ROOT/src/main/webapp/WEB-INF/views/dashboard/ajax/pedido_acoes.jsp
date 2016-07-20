
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<div style="text-align: justify; font-size:0.6em">
	<c:if test="${not empty status_pagamentos}">
		<div class="txt14 center destaque">
			Status Pagamento
		</div>
	</c:if>
	<c:forEach items="${status_pagamentos}" var="t">
		<div class="wrapper-radio">
			<input type="radio" id="${t.name()}${number}" value="${t.name()}" name="pagamento${number}" class="radio_pagamento" />
			<label for="${t.name()}${number}" class="label-radio">${t.descricao}</label>
		</div>
	</c:forEach>
	
	
	<c:if test="${not empty status_pedidos}">
		<vl-tags:vertical-space height="10"/>
		<div class="txt14 center destaque">
			Status Pedido
		</div>
	</c:if>
	
	<c:forEach items="${status_pedidos}" var="t">
		<div class="wrapper-radio">
			<input type="radio" id="${t.name()}${number}" value="${t.name()}" name="pedido${number}" class="radio_pedido" />
			<label for="${t.name()}${number}" class="label-radio">${t.descricao}</label>
		</div>
	</c:forEach>
</div>