<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<div id="assunto" class="caixa-arredondada">

	<vl-tags:titulo titleName="Alterar Email" />

	<vl-tags:vertical-space height="15"/>
	<div class="wrapper-form">
		<form action="<c:url value="/user/request/change/email"/>" method="POST" id="form_email">
			
<%-- 			<sec:csrfInput /> --%>
		
			<div class="bloco-campo required">
				<label>Novo Email:</label>
				<input type="text" name="email" value="${email}" />
				<input type="button" class="btn btn-md btn-success" id="btn_cadastrar" value="Salvar" style="margin-bottom: 5px"/> 
			</div>
			
		</form>
	</div>
	
</div>