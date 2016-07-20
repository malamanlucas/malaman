
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<c:choose>
	<c:when test="${not empty categorias}">
		<c:forEach items="#{categorias}" var="i">
			<div class="painel-item txt14">
				<div class="center destaque">
					<vl-tags:textCut max="24" text="${i.name}" />
				</div>
				<div class="p-img">
					<img src="<c:url value="/estatico/img/loader.gif" />" class="img-lazyload"
						 data-original="<c:url value="/categoria/off/foto?id=${i.id}" />" 
						 title="${i.description}" />
				</div>
				<div class="p-dsc center">
					<input type="hidden" class="id" value="${i.id}" />
					<sec:authorize access="hasRole('ROLE_GESTOR')">
						<a class="btn btn-md btn-primary submit-form" method="POST" url="<c:url value="/categoria/edit?id=${i.id}"/>">Editar</a>
						<input type="button" class="btn btn-md btn-danger btn-excluir" value="Excluir" />
					</sec:authorize>
				</div>
			</div>
		</c:forEach>
	</c:when>
	<c:otherwise>
		<vl-tags:list_empty_message msg="Não há nenhuma categoria no cardápio."/>
	</c:otherwise>
</c:choose>

