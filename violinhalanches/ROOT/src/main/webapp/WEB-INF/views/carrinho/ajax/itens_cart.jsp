<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<sec:authentication property="principal" scope="request" var="userWEB"/>
<input type="hidden" id="price_total_hidden" value="${userWEB.cart.getPriceTotalAsText()}" />

<c:choose>
	<c:when test="${userWEB.cart.hasItens()}">
		<c:forEach items="${userWEB.cart.itensAsCollection}" var="i"
			varStatus="status">
			<div>
				<div class="item-cart">
					<input type="hidden" class="item_description" value="${i.description}" /> 
					<input type="hidden" class="item_name"        value="${i.name}" /> 
					<input type="hidden" class="item_quantity"    value="${i.quantity}" />
					<input type="hidden" class="item_type"        value="${i.type}" />
					<div class="part-cart">
						<div class="desc-product">
							<vl-tags:tag_centralizar classCSS="txt13">
								${i.name}
							</vl-tags:tag_centralizar>
						</div>

						<div class="price txt13">${i.priceUnitAsText}</div>

						<img src="<c:url value="/estatico/img/loader.gif" />"
							class="img-lazyload"
							data-original="<c:url value="/produto/off/foto?nome=${i.name}&type=${i.type}" />"
							title="${i.description}" />
					</div>

					<div class="part-cart" style="margin-left: 6px">
						<vl-tags:tag_centralizar horizontal="true">
							<div class="txt13">Qtde</div>
							<div>
								<div style="display: inline-block">
									<a class="icon icon-less25 part-amount less"></a>
									<div class="part-amount">
										<vl-tags:tag_centralizar>
											<div class="txt18 quantity" style="border: 1px solid black; padding: 3px">
												${i.quantity}
											</div>
										</vl-tags:tag_centralizar>
									</div>
									<a class="icon icon-more25 part-amount more"></a>
								</div>
							</div>
						</vl-tags:tag_centralizar>
					</div>

					<div class="part-cart" style="margin-left: 6px">
						<vl-tags:tag_centralizar horizontal="true">
							<div>
								<div class="txt13">SubTotal</div>
								<div class="txt14 subTotal">${i.priceAsText}</div>
							</div>
						</vl-tags:tag_centralizar>
					</div>

				</div>
			</div>
			<vl-tags:vertical-space height="5" />
		</c:forEach>
		<vl-tags:vertical-space height="10" />
	</c:when>

	<c:otherwise>
		<div class="txt17 destaque">Não há itens no carrinho</div>
	</c:otherwise>
</c:choose>