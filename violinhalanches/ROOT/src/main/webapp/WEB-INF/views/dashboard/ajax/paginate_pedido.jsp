<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<c:forEach items="${pedidos}" var="p">
	<tr class="painel-pedido" id="pedido${p.number}">
		<td>
			<div class="txt22 destaque">${p.number}</div>
		</td>
		<td class="dados-pedido">
			<input type="hidden" value="${p.number}" class="number" /> 
			<input type="hidden" value="${p.userLogged}" class="user_phone" />
			<input type="hidden" value="${p.statusPagamento}" class="status_pagamento" /> 
			<input type="hidden" value="${p.statusPedido}" class="status_pedido" /> 
			<input type="hidden" value="${p.paymentMethod.getEnum()}" class="meio_pagamento" />
			<div class="info">
				Data Emissão: <span class="text_date_hour">${p.dateHourEmissionAsText}</span>
				<br /> Última atualização: <span class="text_last_date_hour">${p.lastDateHourStatusAsText}</span> <br/>
				Preço Entrega: <span>${p.deliveryPriceAsText}</span> <br/>
				<c:if test="${p.receiverMethod.getEnum() == 'BUSCAR_NA_EMPRESA'}">
					Cliente comerá aqui? <span>${p.entregar == true ? 'sim' : 'não'}</span>
				</c:if>
			</div> 
			<br/>
			<a class="icon_manager ${p.receiverMethod.getEnum().icon}"></a> 
			<a class="icon_manager ${p.paymentMethod.getEnum().icon}"> </a>
			<div <c:if test="${p.paymentMethod.getEnum() != 'PRESENCIAL_DINHEIRO'}">style="display:none"</c:if>>
				Necessário <span class="text_troco">${p.trocoAsText}</span> de troco
			</div>
		</td>
		<td>
			<div class="info">
				<div class="painel_user ${p.userLogged}">
					Carregando dados do usuário... <img src="<c:url value="/estatico/img/loader.gif" />" style="width:45px" />
				</div>
				<span class="text_user_address">
					<c:out value="${p.address.fullAddress}"	default="Nenhum Endereço informado"></c:out>
				</span> 
			</div>
		</td>
		<td>
			<div class="info pedido_itens" style="display:inline">
				<span class="detalhe center modal_detalhe_produtos">
					Visualizar detalhado
				</span> 
				<br/>
				<div class="center products_detail">
					<img src="<c:url value="/estatico/img/loader.gif" />" style="width:35px" />
				</div>
<%-- 				<c:forEach items="${p.itens}" var="i" varStatus="cont"> --%>
<%-- 					${i.fullName}, ${p.itens} --%>
<%-- 				</c:forEach> --%>
			</div>
		</td>
		<td class="center status">
			<table style="display: inline-block">
				<tr>
					<td>Pedido</td>
					<td>Pagamento</td>
				</tr>
				<tbody>
					<tr>
						<td><a actual="${p.statusPedido.icon}"    class="icon ${p.statusPedido.icon} icon-status_pedido"></a></td>
						<td><a actual="${p.statusPagamento.icon}" class="icon ${p.statusPagamento.icon} icon-status_pagamento"></a></td>
					</tr>
				</tbody>
			</table>
		</td>
		<td class="acoes"><img
			src="<c:url value="/estatico/img/loader.gif"/>" style="width: 40px">
		</td>
		<td><vl-tags:tag_centralizar>
				<div class="text_price">
					<a class="btn-printer icon_manager icon_manager-dashboard_print"
						icon="icon_manager-dashboard_print"
						icon_hover="icon_manager-dashboard_print_hover"></a> <br />
					${p.priceAsText}
				</div>
			</vl-tags:tag_centralizar></td>
	</tr>
</c:forEach>
