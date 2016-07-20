<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<form action="<c:url value="/login/off/request/unblock"/>" method="GET" id="form_unblock" ></form>

<div id="assunto" class="caixa-arredondada">

	<vl-tags:titulo titleName="Faça Login usando uma conta cadastrada no Violinha Lanches" />
	
	<c:set var="url_logar" scope="request">
		<c:url value="/login/off/logar"/>
	</c:set>

	<div class="wrapper-form">
		<form:form modelAttribute="login" action="${url_logar}" method="POST" id="form_login">
		
<%-- 			<sec:csrfInput /> --%>
		
			<div class="clear" style="height:15px">&nbsp;</div>
			
			<div class="bloco-campo required">
				<label>Login(Seu Telefone/Celular)</label>
				<form:input path="telefone" id="telefone" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
	
			<div class="bloco-campo required">
				<label>Senha</label>
				<form:password path="senha"/>
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<vl-tags:captcha />
			
			<div class="bloco-campo">
				<input type="button" class="btn btn-lg btn-success" id="btn_logar" value="Logar" /> 
			</div>
		</form:form>	
	</div>
	
</div>