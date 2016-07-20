<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_detail_itens" value="<c:url value="/lanche/detail/itens" />" /> 

<input type="hidden" id="lanche_preco" value="${lanche.price}" />

<form id="form_add_cart" method="POST" action="<c:url value="/carrinho/add" />">

<%-- 	<sec:csrfInput /> --%>
	<input type="hidden"                        name="id"          value="${lanche.id}" />
	<input type="hidden" id="descricao_product" name="description" value="" />
	<input type="hidden" id="price_product"     name="price"       value="" />
	<input type="hidden" id="name_product"      name="name"        value="${lanche.name}"  />
	<input type="hidden"                        name="typeAsCode"  value="${lanche.typeAsCode}" />
	<input type="hidden" id="extra_info_hidden" name="extraInfo"   value="" />
	
</form>

<div id="assunto">
	<div class="titulo txt26">
		<div class="caixa-arredondada fonte-destaque">
			Monte o lanche do seu jeito.
		</div>
		<button class="btn btn-success btn-lg" id="add-carro">Adicionar ao Carrinho</button>
	</div>
	
	<vl-tags:vertical-space height="10"/>
	
	<div id="painel-cima">
		<div id="painel-lanche">
			<div id="painel-lanche-nome" class="wrapper-center">
				<div id="lanche_nome" class="txt20"> ${lanche.name} </div>
			</div>
			
			<img src="<c:url value="/estatico/img/loader.gif" />" 
				class="img-lazyload"
				data-original="<c:url value="/produto/off/foto?id=${lanche.id}"/>" style="width:100%" />
		</div>
		<div class="clear"></div>
	</div>
	
	<vl-tags:vertical-space height="15"/>
		
	<div id="painel-lanche-qtdItems" class="txt23 destaque">
		<span id="lanche_qtdItems">
			<span id="amount_itens_lanche">
				<span id="qtdItems">${amountItens}</span> Ingrediente(s)
			</span>
			<ul id="itens_into_lanche" class="txt10">
			</ul>
		</span>
		<span id="valor_final_lanche" >${lanche.priceAsText}</span>
	</div>
		
	<vl-tags:vertical-space height="10"/>
	
	<div id="painel-item" >
		
		<input type="hidden" id="lanche_id" value="${lanche.id}" />
		<img src="<c:url value="/estatico/img/loader.gif" />"/>
		
	</div>

</div>


