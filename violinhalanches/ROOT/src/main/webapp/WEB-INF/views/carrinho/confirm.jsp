<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_ajax_itens" value="<c:url value="/carrinho/itens"/> " />

<sec:authentication property="principal" scope="request" var="userWEB" />

<form action="<c:url value="/pedido/finish"/>" method="POST" id="form_finish">
<%-- 	<sec:csrfInput /> --%>
	<input type="hidden" name="amountPayable" id="troco_hidden"  value="" />
	<input type="hidden" name="deliveryPrice" id="preco_entrega" value="${deliveryPrice}" /> 
	<input type="hidden" name="entregar"      id="entregar"      value="false" />
</form>

<div id="assunto">
	
	<vl-tags:titulo titleName="Confirmação do Pedido" />
	
	<div class="center txt16">
		Confira os dados, se estiverem corretos, clique em comprar.
	</div>
	
	<div>
		<a style="float:right"  class="icon icon-end_buy" icon="icon-end_buy" icon_hover="icon-end_buy_hover" id="btn_finish" ></a>
		<a style="float:left"   class="icon icon-back submit-form" icon="icon-back" icon_hover="icon-back_hover" url="<c:url value="/carrinho/" />"></a>
	</div>
	
	<vl-tags:vertical-space height="10"/>
	
	<table class="table">
		<tbody>
			<tr class="txt16">
				<td class="destaque">Valor Total </td>
				<td>${userWEB.cart.priceTotalAsText} ${textDeliveryPrice}</td>
			</tr>
			<tr>
				<td class="destaque txt16">Forma Pagamento</td>
				<td>
					<div class="txt16">
						${userWEB.cart.paymentMethod.description}
					</div>
					<c:if test="${userWEB.cart.paymentMethod.id eq faceWithMoneyCode}">
						<vl-tags:vertical-space height="5"/>
						<div id="painel-troco" >
							<vl-tags:vertical-space height="5"/>
							<label>Valor a ser Pago: </label>
							<input type="text" class="campo campoMoeda" id="troco" value="${amountPayable}"  />
						</div>
					</c:if>
				</td>
			</tr>
			<tr class="txt16">
				<td class="destaque">Meio Recebimento</td>
				<td>${userWEB.cart.receiverMethod.description}</td>
			</tr>
			<c:choose>
				<c:when test="${userWEB.cart.receiverMethod.id eq addressDeliveryCode}">
					<tr class="txt16">
						<td class="destaque">Endereço de Entrega</td>
						<td>${userWEB.deliveryAddress.fullAddress}</td>
					</tr>
				</c:when>
				<c:otherwise>
					<tr id="question_delivery">
						<td class="destaque txt16">Vai comer no local?</td>
						<td id="pergunta_entrega">
							<div class="wrapper-radio" style="margin-right:5px">
								<input type="radio" value="true" id="SIM" name="entregar" /> 
								<label for="SIM" class="label-radio">Sim</label>
							</div>
							<div class="wrapper-radio">
								<input type="radio" value="false" id="NAO" name="entregar" checked="checked" /> 
								<label for="NAO" class="label-radio">Não</label>
							</div>
						</td>
					</tr>
				</c:otherwise>
			</c:choose>
		</tbody>
	</table>
	
	<vl-tags:vertical-space height="10"/>
	
	<div id="painel-cart" >
	
		<!--  Load Via Ajax -->
		<div class="wrapper txt31 center negrito">
			Carregando Itens...
			<img src="<c:url value="/estatico/img/loader.gif" />" style="max-width:45px" />
		</div>		
		
	</div>
	
	<vl-tags:vertical-space height="10"/>
	
</div>
