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

	<vl-tags:titulo titleName="Alteração de senha" />

	<div class="wrapper-form">
		<form method="POST" action="<c:url value="/user/password/save"/>" id="form_password">
			
			<%-- <sec:csrfInput/> --%>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Senha Atual</label>
				<input type="text" name="oldPassword" value="" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Nova Senha</label>
				<input type="text" name="newPassword" value="" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Confirmar Nova Senha</label>
				<input type="text" name="confirmPassword" value="" />
			</div>
			
			<vl-tags:vertical-space height="10"/>
			
			<div class="bloco-campo">
				<input type="button" class="btn btn-md btn-success" id="btn_cadastrar" value="Salvar" /> 
			</div>
		</form>
	</div>
	
</div>