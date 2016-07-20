<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<form method="POST" action="<c:url value="/manager_user/edit"/>" id="form_edit">
<%-- 	<sec:csrfInput /> --%>
	<input type="hidden" name="id" value="" id="edit_id" />
</form>

<form method="POST" action="<c:url value="/manager_user/address/edit"/>" id="form_endereco">
<%-- 	<sec:csrfInput /> --%>
	<input type="hidden" name="userId" value="" id="user_id" />
</form>

<input type="hidden" id="url_ajax_pedido"        value="<c:url value="/manager_user/ajax/pedido" />" />
<input type="hidden" id="url_ajax_endereco"      value="<c:url value="/manager_user/ajax/endereco" />" />
<input type="hidden" id="url_ajax_papeis"        value="<c:url value="/manager_user/ajax/papeis" />" />
<input type="hidden" id="url_change_user_status" value="<c:url value="/manager_user/status/change" />" />

<input type="hidden" id="url_cadastro"   value="<c:url value="/manager_user/register" />" />
<input type="hidden" id="url_paginate"   value="<c:url value="/manager_user/gerenciar/paginate" />" />
<input type="hidden" id="url_deletar"    value="<c:url value="/manager_user/deletar" />" />
<input type="hidden" id="url_page"       value="manager_user/gerenciar/paginate" />
<input type="hidden" id="total"          value="${total}" />
<input type="hidden" id="message_delete" value="Usuário deletado com sucesso. //TODO: Todos os vinculos de pedidos também com ele foram excluidos?" />

<div id="assunto">

	<div id="wrapper-gerenciar">
		
		<sec:authorize access="hasRole('ROLE_GESTOR')">
			<div class="txt31" id="cadastro-item">
				<a href="javascript:void(0)">Cadastrar</a>
			</div>
		</sec:authorize>

		<div class="txt31 caixa" id="txt-qtd-itens"><span id="totais">${total}</span>  Usuario(s) cadastrado(s)</div>
	
		<vl-tags:vertical-space height="10"/>

		<table class="table">
			<thead class="destaque txt16">
				<tr>
					<td>NOME</td>
					<td>TELEFONE</td>
					<td>EMAIL</td>
					<td>STATUS</td>
					<td>PEDIDO</td>
					<td>ENDEREÇO</td>
					<td>PAPEIS</td>
					<td>AÇÃO</td>
				</tr>
			</thead>
			<tbody class="table-itens txt15">
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
		
		<div class="txt13" id="painel_main_controls" style="width:100%" ></div>
		
		<div class="modal_visualizar center txt18" style="display:none; padding: 10px; min-width:300px" >
			
			<div>
				Pedidos Pagos: 3
			</div>
			
			<vl-tags:vertical-space height="5"/>
			
			<div>
				Pedidos Feitos e Não Pagos: 5
			</div>
			
		</div>
		
	</div>
</div>