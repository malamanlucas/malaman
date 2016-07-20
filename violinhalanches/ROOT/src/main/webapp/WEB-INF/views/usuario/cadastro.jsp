<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<c:set var="url_confirm" scope="request">
	<c:url value="/user/off/register/confirm"/>
</c:set>

<div id="assunto" class="caixa-arredondada">

	<vl-tags:titulo titleName="Cadastra-se para tornar-se um usuário do Violinha Lanches" />
	
	<div class="wrapper-form">
		<form:form modelAttribute="user" action="${url_confirm}" method="POST" id="form_cadastro">
		
			<form:hidden path="enable"/>
			<form:hidden path="reliable"/>
		
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label title="Será usado como login no site">Telefone ou Celular:</label>
				<form:input path="phone" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
	
			<div class="bloco-campo required">
				<label>Senha</label>
				<form:password path="password" maxlength="30" />
			</div>

			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Confirmar Senha</label>
				<form:password path="confirmPassword" maxlength="30"/>
			</div>

			<vl-tags:vertical-space height="15"/>			
	
			<div class="bloco-campo required">
				<label>Nome e sobrenome</label>
				<form:input path="name" maxlength="100"/>
			</div>
			
			<vl-tags:vertical-space height="15"/>
	
			<div class="bloco-campo required">
				<label title="Este email será usado para confirmação">Email (Será usado para comprar online)</label>
				<form:input path="email" maxlength="50"/>
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<vl-tags:captcha />
			
			<div class="bloco-campo">
				<input type="button" class="btn btn-md btn-success"  id="btn_cadastrar" value="Cadastrar" /> 
			</div>
			
		</form:form>
	</div>
	
	
	
</div>