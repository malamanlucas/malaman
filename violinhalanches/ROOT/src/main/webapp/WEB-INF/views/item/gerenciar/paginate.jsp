
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"	prefix="vl"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>


<c:choose>
	<c:when test="${not empty itens}">
		<c:forEach items="#{itens}" var="i">
			<div class="painel-item txt14">
				<div class="center destaque">
					<vl-tags:textCut max="24" text="${i.name}" />
				</div>
				<div class="p-img">
					<img src="<c:url value="/estatico/img/loader.gif" />" class="img-lazyload"
						 data-original="<c:url value="/item/off/foto?id=${i.id}" />" />
				</div>
				<div class="p-dsc center">
					<input type="hidden" class="id" value="${i.id}" />
					<div class="center destaque">
						${i.priceAsText}
					</div>
					<sec:authorize access="hasRole('ROLE_GESTOR')">
						<a class="btn btn-md btn-primary submit-form" method="POST" url="<c:url value="/item/edit?id=${i.id}"/>">Editar</a>
						<input type="button" class="btn btn-md btn-danger btn-excluir" value="Excluir" />
					</sec:authorize>
				</div>
			</div>
		</c:forEach>
	</c:when>
	<c:otherwise>
		<vl-tags:list_empty_message msg="Não há itens cadastrado"/>
	</c:otherwise>
</c:choose>

