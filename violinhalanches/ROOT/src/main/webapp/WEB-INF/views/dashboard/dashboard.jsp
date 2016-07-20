<%@page import="br.com.model.enums.UserType"%>
<%@page import="br.com.model.enums.StatusPagamento"%>
<%@page import="br.com.model.enums.StatusPedido"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_user_ajax"              value="<c:url value="/dashboard/ajax/user" />"  />
<input type="hidden" id="url_count_not_entered"      value="<c:url value="/dashboard/json/pedido/count"/>" />
<input type="hidden" id="url_pedido_ajax_pagination" value="<c:url value="/dashboard/ajax/pedido/pagination"/>" />
<input type="hidden" id="url_products_detail"        value="<c:url value="/dashboard/ajax/pedido/produtos/detail"/>" />
<input type="hidden" id="url_products"               value="<c:url value="/dashboard/json/pedido/produtos"/>" />
<input type="hidden" id="url_print"                  value="<c:url value="/dashboard/print"/>" />
<input type="hidden" id="url_pedido_ajax"            value="<c:url value="/dashboard/ajax/pedido"/>" />
<input type="hidden" id="url_acoes_ajax"             value="<c:url value="/dashboard/ajax/pedido/acoes"/>" />
<input type="hidden" id="url_pedido_status_update"   value="<c:url value="/dashboard/json/pedido/status/update"/>" />

<c:forEach items="<%=StatusPedido.values()%>" var="p">
	<input type="hidden" id="${p}" value="${p.icon}" />
</c:forEach>
<c:forEach items="<%=StatusPagamento.values()%>" var="p">
	<input type="hidden" id="${p}" value="${p.icon}" />
</c:forEach>
<c:forEach items="<%=UserType.values()%>" var="p">
	<input type="hidden" id="${p}" value="${p.icon}" />
</c:forEach>

<div id="painel-img-load" style="display:none">
	<img src="<c:url value="/estatico/img/loader.gif"/>" style="width:40px" style="display:none" class="img-load">
</div>

<div id="assunto">
	
	<div class="txt18 destaque">
		<span id="count_pedido">0</span> Pedido(s) para ser(em) analisado(s)
		<div>
			 <a id="btn_load_pedidos" style="display:none" class="icon_manager icon_manager-dashboard_load" icon="icon_manager icon_manager-dashboard_load" icon_hover="icon_manager icon_manager-dashboard_load_hover" ></a>
		</div>
	</div>

	<vl-tags:titulo titleName="Painel de gerenciamento dos pedidos correntes." />
	
	<vl-tags:vertical-space height="10"/>
	
	<table class="table">
		<thead class="destaque txt16">
			<tr>
				<td>NRO</td>
				<td>PEDIDO</td>
				<td>CLIENTE</td>
				<td>PRODUTOS</td>
				<td>STATUS</td>
				<td>AÇÕES</td>
				<td>TOTAL</td>
			</tr>
		</thead>
		<tbody class="table-pedidos txt13">
			<tr>
				<td colspan="8">
					<div class="wrapper txt31 center negrito italico">
						Carregando...
						<img src="<c:url value="/estatico/img/loader.gif" />"  style="max-width:45px" />
					</div>
				</td>
			</tr>
		</tbody>
	</table>
	
</div>