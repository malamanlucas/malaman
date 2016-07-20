
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<sec:authentication property="principal" scope="request" var="userWEB" />

<div class="txt15 destaque">
	 Pagamento
</div>

<c:forEach items="${payments}" var="p">
	<div class="wrapper-radio">
		<input type="radio" class="payment" id="payment-${p.id}" value="${p.id}" name="payment"
			<c:if test="${p.id eq userWEB.cart.paymentMethod.id}">
				checked="checked"
			</c:if> />
		<label for="payment-${p.id}" class="label-radio"> ${p.description} </label>
	</div>
</c:forEach>
