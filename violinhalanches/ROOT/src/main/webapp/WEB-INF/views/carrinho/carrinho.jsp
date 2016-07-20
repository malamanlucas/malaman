<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_ajax_itens" value="<c:url value="/carrinho/itens"/> " />
<input type="hidden" id="url_quantity"   value="<c:url value="/carrinho/quantity" />" />
<input type="hidden" id="url_change_method"   value="<c:url value="/carrinho/method/change" />" />

<input type="hidden" id="url_endereco_loader" value="<c:url value="/carrinho/address"/>" />
<input type="hidden" id="url_save_address" value="<c:url value="/carrinho/address/save"/>" />
<input type="hidden" id="url_meio_pagamento" value="<c:url value="/carrinho/payments"/>" />
<input type="hidden" id="url_meio_recebimento" value="<c:url value="/carrinho/receivers"/>" />
<input type="hidden" id="urlWebService" value="<c:url value="/rest/cep" />" />
<input type="hidden" id="uf" value="${uf}" />
<input type="hidden" id="cidade" value="${city}" />

<sec:authentication property="principal" scope="request" var="userWEB" />

<form action="<c:url value="/carrinho/clean"/>" method="POST" id="form_cart_clean">
</form>

<div id="assunto">

	<vl-tags:titulo titleName="Meu Carrinho de Compras" />
	
	<div class="txt16 center">
		Clique nas imagens para visualizar a descrição do produto.
	</div>
	
	<vl-tags:vertical-space height="10"/>
	
	<div>
		<a style="float:right" url="<c:url value="/pedido/confirm" />" class="icon icon-next submit-form" icon="icon-next" icon_hover="icon-next_hover"></a>
		<a style="float:left" id="btn_cancel" class="icon icon-erase_cart" icon="icon-erase_cart" icon_hover="icon-erase_cart_hover" ></a>
	</div>
	
	<vl-tags:vertical-space height="10"/>
	
	<hr />
	<div id="painel-cart" >
	
		<!--  Load Via Ajax -->
		<div class="wrapper txt31 center negrito">
			Carregando Itens...
			<img src="<c:url value="/estatico/img/loader.gif" />" style="max-width:45px" />
		</div>
		
	</div>
	
	<hr />
	
	<vl-tags:vertical-space height="10"/>
	
		<div id="meios">
			<div class="center" id="wrapper_meio_pagamento">
				<div id="meio_pagamento">
					
					<div class="txt15 destaque">
						Pagamento <br/>
						<div class="center">
							Carregando... <br/>
							<img src="<c:url value="/estatico/img/loader.gif" />" style="width:70px; height:70px" />
						</div>
					</div>
					
				</div>
			</div>
			<div class="center" id="wrapper_meio_recebimento">
				<div id="meio_recebimento">
					
					<div class="txt15 destaque">
						Meio de Recebimento <br/>
						<div class="center">
							Carregando... <br/>
							<img src="<c:url value="/estatico/img/loader.gif" />" style="width:70px; height:70px" />
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	
	<vl-tags:vertical-space height="10"/>
	
	<hr />
	
	<vl-tags:vertical-space height="10"/>
	
	<div id="painel-endereco"
		<c:if test="${userWEB.cart.receiverMethod.id eq 1}">
			style="display:none"
		</c:if> >
		<div class="center">
			<div id="tipo_endereco">
				<div>
					<div class="txt15 destaque">Tipo de Enderço </div>
					
					<c:forEach items="${addressTypes}" var="e">
						<div class="wrapper-radio">
							<input type="radio" id="${e.name()}" value="${e.code}" name="addressType" 
								<c:if test="${e.code eq userWEB.cart.addressType.code}">
									checked="checked"
								</c:if>	/>
							<label for="${e.name()}" class="label-radio">${e.description}</label>
						</div>
					</c:forEach>
				</div>
				<vl-tags:vertical-space height="2"/>
			</div>
		</div>
		
		<vl-tags:vertical-space height="10"/>
		
		
		<div class="center">
			<div id="endereco">
				<div class="txt18">
					<div class="destaque center">
						Endereço de Entrega
					</div>
					<div class="center" id="endereco_delivery">
						<c:out value="${userWEB.deliveryAddress.fullAddress}" default="Nenhum endereço para entrega especificado" />
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	<div class="form_endereco" style="display:none">
	
		<vl-tags:vertical-space height="10"/>
		
		<div class="txt17 destaque">
			Cadastro de Endereço
		</div>
		
		<vl-tags:vertical-space height="10"/>
		
		<form>
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<label title="Digite o CEP que será completado os campos bairro e logradouro de Araras-SP">CEP (Será usado para validar o endereço)</label>
				<input type="text" name="cep" class="cep mask" maxlength="8" mask="99999-999" />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<label>Logradouro</label>
				<input type="text" name="street" maxlength="100" class="logradouro" readonly="readonly" />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<label>Número</label>
				<input type="text" name="number" maxlength="8"  />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<label>Complemento (Ex: casa, 2 andar, sala 8)</label>
				<input type="text" name="complement" maxlength="30"  />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<label>Bairro</label>
				<input type="text" name="district" maxlength="40" class="bairro" readonly="readonly" />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<input type="button" value="Salvar" class="btn_salvar_end btn btn-lg btn-success" /> 
			
		</form>
	</div>
	
	<vl-tags:vertical-space height="10"/>
		
</div>
