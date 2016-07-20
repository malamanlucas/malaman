<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"
	prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>
<sec:authentication property="principal" scope="request" var="userWEB" />

<div id="painel-preco_cart" class="txt20">
	<span class="destaque"> Preço Total: </span> 
	<span id="valor_final">${userWEB.cart.priceTotalAsText}</span>
</div>

<div id="painel-itens_cart" class="txt20">
	<div>Itens no Carrinho</div>
	<ul id="itens_into_cart" class="txt10" style="display: none">
		<c:forEach items="${userWEB.cart.itensAsCollection}" var="item">
			<li>${item.quantity} ${item.name}</li>
		</c:forEach>
	</ul>
</div>