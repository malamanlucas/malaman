
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<sec:authentication property="principal.entity" scope="request" var="userLogged"/>

<c:forEach items="#{users}" var="user">
	<tr>
		<td>${user.name}</td>
		<td>${user.phone}</td>
		<td>${user.email}</td>
		<td class="status">
			<div style="min-width:139px">
				<a class="icon-habilitado icon_manager ${user.enable ? 'icon_manager-user_liberated' : 'icon_manager-user_blocked'}"></a>
				<a class="icon_manager icon_manager-user_change_status btn-change-status"
				   icon="icon_manager-user_change_status" icon_hover="icon_manager-user_change_status_hover" 
				   style="margin-left:2px"></a>
			   <input type="hidden" value="${user.enable}" class="value" />
			   <input type="hidden" value="habilitado" class="type" />
			</div>
			<vl-tags:vertical-space height="2"/> 
			<div>
				<a class="icon-confiavel icon_manager ${user.reliable ? 'icon_manager-user_trusted' : 'icon_manager-user_new'}"></a>
				<a class="icon_manager icon_manager-user_change_status btn-change-status"
				   icon="icon_manager-user_change_status btn-change-status" icon_hover="icon_manager-user_change_status_hover" 
				   style="margin-left:2px"></a>
				<input type="hidden" value="${user.reliable}" class="value" />
			   <input type="hidden" value="confiavel" class="type" />
			</div>
		</td>
		<td>
			<span class="detalhe detalhe_pedido">
				Visualizar
			</span> 
		</td>
		<td>
			<span class="detalhe detalhe_endereco">
				Visualizar
			</span> 
			<div class="detalhe edit-endereco">
				Atualizar
			</div>
		</td>
		<td class="detalhe_papeis">
			<vl-tags:loader />
		</td>
		<td>
			<div style="min-width:139px">
				<input type="hidden" class="id" value="${user.id}" />
				<a class="icon icon-customize btn-edit"></a>
				<c:choose>
					<c:when test="${user.id != userLogged.id}">
						<a class="icon_manager icon_manager-user_delete_enabled btn-excluir"></a>
					</c:when>
					<c:otherwise>
						<a class="icon_manager icon_manager-user_delete_disabled"></a>
					</c:otherwise>
				</c:choose>
			</div>
		</td>
	</tr>
</c:forEach>
