
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<table class="table produtos_detail">
	<thead class="destaque">
		<tr>
			<td>Nome</td>
			<td>Descrição</td>
			<td>Preço unitário</td>
			<td>Info Extra</td>
			<td>Foto</td>
		</tr>
	 </thead>
	 <tbody>
	 	<c:forEach items="${itens}" var="item">
	 		<tr>
	 			<td>${item.name}</td>
	 			<td>${item.description}</td>
	 			<td>${item.priceUnitAsText}</td>
	 			<td>${item.extraInfo}</td>
	 			<td>
	 				<img style="width:70px;height:50px" src="<c:url value="/produto/off/foto?nome=${item.name}&type=${item.type}" />" />
	 			</td>
	 		</tr>
	 	</c:forEach>
	 </tbody>
</table>