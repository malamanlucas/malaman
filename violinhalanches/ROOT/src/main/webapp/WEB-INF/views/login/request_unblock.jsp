<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<div id="assunto" class="caixa-arredondada">
	
	<vl-tags:titulo titleName="Solicitar Desbloqueio" />

	<vl-tags:vertical-space height="15"/>
	
	<div class="wrapper-form">
		<form action="<c:url value="/login/off/unblock/send"/>" method="GET" id="form_unblock">
			
<!-- 			<sec:csrfInput /> -->
		
			<div class="bloco-campo required">
				<label>Telefone a ser desbloqueado:</label>
				<input type="text" name="phone" value="" />
				<input type="button" class="btn btn-md btn-success" id="btn_send" value="Solicitar" style="margin-bottom: 5px"/> 
			</div>
			
		</form>
	
</div>