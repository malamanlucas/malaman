<%@page import="br.com.model.enums.StatusPedido"%>
<%@page import="br.com.model.enums.StatusPagamento" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<sec:authentication property="principal" scope="request" var="userWEB" />

<c:forEach items="<%=StatusPedido.values()%>" var="p">
	<input type="hidden" id="${p}" value="${p.icon}" />
</c:forEach>
<c:forEach items="<%=StatusPagamento.values()%>" var="p">
	<input type="hidden" id="${p}" value="${p.icon}" />
</c:forEach>

<div id="assunto">
	<vl-tags:titulo titleName="Meus Pedidos" />
	
	<vl-tags:vertical-space height="15"/>
	
	<c:forEach items="${pedidos}" var="pedido">
		<div class="center txt15 painel-pedido" id="pedido${pedido.number}">
			<vl-tags:vertical-space height="5"/>
			<div>
				Pedido número: ${pedido.number} feito as ${pedido.dateHourEmissionAsText} 
				<br/>
				Ùltima data de mudança de status: ${pedido.lastDateHourStatusAsText}
			</div>
			<c:choose>
			
				<c:when test="${pedido.paymentMethod.getEnum().name() == 'ONLINE'}">
					Para pagar online o pedido clique no link abaixo.
					<br />				
					<a class="icon icon-secure_pay" icon="icon-secure_pay" icon_hover="icon-secure_pay_hover"
					   href="<c:out value="${pedido.paymentUrl}" default="javascript:void(0)" />" target="_blank">
				   </a>
				</c:when>
				
				<c:otherwise>
					<c:if test="${!userWEB.entity.reliable}">
						Porém não aprovado para ser feito, estaremos
						ligando em breve no número <span class="destaque">${userWEB.entity.phone}</span> 
						para confirmação, esteja atento.
					</c:if>
				</c:otherwise>
				
			</c:choose>
			<br />
			<br />
			<table class="table">
				<thead>
					<tr>
						<td>SITUAÇÃO do PEDIDO</td>
						<td>SITUAÇÃO do PAGAMENTO</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<a actual="${pedido.statusPedido.icon}" class="icon ${pedido.statusPedido.icon} icon-status_pedido" ></a>
						</td>
						<td>
							<a actual="${pedido.statusPagamento.icon}" class="icon ${pedido.statusPagamento.icon} icon-status_pagamento" ></a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<vl-tags:vertical-space height="15"/>
	</c:forEach>
	
	
</div>
