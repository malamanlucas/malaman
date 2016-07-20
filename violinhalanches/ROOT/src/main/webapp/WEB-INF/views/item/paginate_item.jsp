
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"
	prefix="vl"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>


<c:forEach var="item" items="${itens}">
	<div class="item">
		<input type="hidden" value="${item.id}" class="id" /> 
		<input type="hidden" value="${item.name}" class="nome" /> 
		<input type="hidden" value="${item.price}" class="valor" />
		<input type="hidden" value="${item.maxAmount}" class="qtd_max" /> &nbsp; 
		<img src="<c:url value="/estatico/img/loader.gif" />" 
			 class="img-lazyload" style="width:70px; height:70px" 
			 data-original="<c:url value="/item/off/foto?id=${item.id}" />" />
	</div>
</c:forEach>