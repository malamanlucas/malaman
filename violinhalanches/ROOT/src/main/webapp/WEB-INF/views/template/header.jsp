<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_add_carrinho"  value="<c:url value="/carrinho/add"/>" />

<input type="hidden" id="url_carousel_ajax" value="<c:url value="/carousel/off/carousels"/>" />

<sec:authentication property="principal" scope="request" var="userWEB" />

<sec:authorize access="hasRole('ROLE_USUARIO')">
	<div id="painel-preco_cart" class="txt20">
		<span  class="destaque" > Preço Total:  </span> <span id="valor_final"> ${userWEB.cart.priceTotalAsText} </span>
	</div>
	
	<div id="painel-itens_cart" class="txt20">
		<div> Itens no Carrinho</div>
		<ul id="itens_into_cart" class="txt10" style="display:none">
			<c:forEach items="${userWEB.cart.itensAsCollection}" var="item">
				<li>${item.quantity} ${item.name}</li>
			</c:forEach>
		</ul>
	</div>
</sec:authorize>

<div id="headerTop">
	
	<div id="carousel" class="caixa">
		<vl-tags:tag_centralizar styleCSS="text-align:center"> 
			<img src="<c:url value="/estatico/img/loader.gif"/>" style="width:70px; height:70px" />
		</vl-tags:tag_centralizar>
	</div>

	<div id="areaLogin" class="caixa">
		<div id="northLogin">
			<img src="<c:url value="/estatico/img/logo_header.png" />" />
		</div>
		<div id="southLogin">
			<%@ include file="/WEB-INF/views/template/header/area_login.jsp" %>
		</div>
	</div>
	
</div>

<div class="clear" style="height: 7px">&nbsp;</div>
<div id="menu" class="caixa">
	<ul class="txt18">
		<li>
			<div class="item-menu submit-form" url="<c:url value="/"/>">
				<a class="icon icon-home" ></a> 
				<a class="txt-menu">Home</a>
			</div>
		</li>
		<li>
			<div class="item-menu submit-form" url="<c:url value="/off/contato"/>">
				<a class="icon icon-contact" ></a>
				<a class="txt-menu" >Contato</a>
			</div>
		</li>
		<li>
			<div class="item-menu submit-form" url="<c:url value="/cardapio/off/"/>">
				<a class="icon icon-menu" ></a>
				<a class="txt-menu" >Cardápio</a>
			</div>
		</li>
		<sec:authorize access="hasAnyRole('ROLE_GESTOR', 'ROLE_USUARIO')">
		<li>
			<div class="item-menu submit-form" url="<c:url value="/carrinho/"/>">
				<a class="icon icon-cart" ></a>
				<a class="txt-menu">Carrinho</a>
			</div>
		</li>
		</sec:authorize>
		
		<sec:authorize access="hasRole('ROLE_GESTOR')">
			<li>
				<div class="item-menu submit-form" url="<c:url value="/gestor/"/>">
					<a class="icon icon-manager" ></a> 
					<a class="txt-menu">Gerenciar</a>
				</div>
			</li>
		</sec:authorize>
		<sec:authorize access="hasAnyRole('ROLE_OPERADOR', 'ROLE_GESTOR')">
			<li>
				<div class="item-menu submit-form" url="<c:url value="/dashboard/"/>">
					<a class="icon icon-dashboard"></a> 
					<a class="txt-menu">Dashboard</a>
				</div>
			</li>
		</sec:authorize>
	</ul>
</div>