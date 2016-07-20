
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<input type="hidden" id="url_is_new" value="<c:url value="/novidade/isNew"/>" />
<input type="hidden" id="url_change_statusNew" value="<c:url value="/novidade/change"/>" />

<input type="hidden" id="url_change_enabled" value="<c:url value="/produto/enabled"/>" />
<input type="hidden" id="url_is_enabled" value="<c:url value="/produto/isEnabled"/>" />


<c:choose>
	<c:when test="${not empty produtos}">
		<c:forEach items="#{produtos}" var="i">
			<div class="painel-item txt14 check-new check-enabled">
				<div class="center destaque">
					<vl-tags:textCut max="24" text="${i.name}" />
				</div>
				<div class="p-img">
					<a class="icon-isNew icon_manager icon_manager-star_empty"></a>
					<a class="icon-enabled icon_manager icon_manager-enabled_false" style="position:absolute"></a>
					
					<img src="<c:url value="/estatico/img/loader.gif" />"
						class="img-lazyload"
						data-original="<c:url value="/produto/off/foto?id=${i.id}" />" />
				</div>
				<div class="p-dsc center">
					<input type="hidden" class="enabled" value="0" />
					<input type="hidden" class="new" value="0" /> 
					<input type="hidden" class="id" value="${i.id}" /> 
					<div class="center destaque">
						${i.priceAsText}
					</div>
					<sec:authorize access="hasRole('ROLE_GESTOR')">
						<a class="btn btn-md btn-primary submit-form" method="POST" url="<c:url value="/produto/edit?id=${i.id}"/>">Editar</a>
						<input type="button" class="btn btn-md btn-danger btn-excluir" value="Excluir" />
					</sec:authorize>
				</div>
			</div>
		</c:forEach>
	</c:when>
	<c:otherwise>
		<vl-tags:list_empty_message msg="Não há nenhum produto cadastrado"/>
	</c:otherwise>
</c:choose>

