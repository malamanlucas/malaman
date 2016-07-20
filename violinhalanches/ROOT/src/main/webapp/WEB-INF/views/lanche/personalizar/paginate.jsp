<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"
	prefix="vl"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<c:choose>
	<c:when test="${not empty itens}">
		<c:forEach var="item" items="${itens}">
			<div class="painel-item">
				<input type="hidden" class="id"	value="${item.id}" />
				<input type="hidden" class="nome" value="${item.name}" />
				<input type="hidden" class="qtd_original" value="${item.amount}" />
				<input type="hidden" class="qtd_max" value="${item.maxAmount}" />
				<input type="hidden" class="valor" value="${item.price}" />
				<div class="txt30 destaque preto qtd">${item.amount}</div>
				<div class="txt20 preco valor_item">${item.priceAsText}</div>
				<div class="p-img">
					<img src="<c:url value="/estatico/img/loader.gif" />" 
						 class="img-lazyload generic-img"
						 data-original="<c:url value="/item/off/foto?id=${item.id}" />" title="${item.name}" />
				</div>
				<a class="add_item icon icon-more35" <c:if test="${item.amount == item.maxAmount}">style="display:none"</c:if> ></a>
				<a class="sub_item icon icon-less35" <c:if test="${item.amount == 0}">style="display:none"</c:if> ></a>
			</div>
		</c:forEach>
		<vl-tags:vertical-space height="15"/>
		
		<div id="painel-extra" class="center">
			<div class="txt16 destaque">Informações Extras</div>
			<textarea id="extra_info" rows="7" cols="50" style="width:80%"></textarea>
			<div class="txt14">
				(Por exemplo: Pão bem torrado ou pão bem queimado.)
			</div>
		</div>
		
	</c:when>
	<c:otherwise>
		<vl-tags:list_empty_message msg="Não há nenhum ingrediente cadastrado neste lanche."/>
	</c:otherwise>
</c:choose>
