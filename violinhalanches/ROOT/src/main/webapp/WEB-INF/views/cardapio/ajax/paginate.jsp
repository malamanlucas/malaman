
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<c:choose>
	<c:when test="${not empty categorias}">
		<c:forEach items="${categorias}" var="c">
			<div class="painel-item">
				<input type="hidden" class="code" value="${c.id}" />
		
				<div class="negrito nome center" title="${c.description}">
					<vl-tags:textCut max="25" text="${c.name}" />
				</div>
				<img src="<c:url value="/estatico/img/loader.gif" />"
					class="img-lazyload generic-img" title="${c.description}"
					data-original="<c:url value="/categoria/off/foto?id=${c.id}" />" />
			</div>
		</c:forEach>
		<vl-tags:vertical-space height="10"/>
	</c:when>
	<c:otherwise>
		<vl-tags:list_empty_message msg="Não há nenhuma categoria no cardápio."/>
	</c:otherwise>
</c:choose>

