<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="urlWebService" value="<c:url value="/rest/cep" />" />
<input type="hidden" id="uf" value="${uf}" />
<input type="hidden" id="cidade" value="${city}" />

<div id="assunto" class="caixa-arredondada">

	<vl-tags:titulo titleName="Cadastro de Endereço de Entregas" />

	<c:set var="url_cadastrar" scope="request">
		<c:url value="/manager_user/address/save"/>
	</c:set>
	
	<div class="wrapper-form">
		<form:form modelAttribute="address" action="${url_cadastrar}" method="POST" id="form_address">
		
			<form:hidden path="id" id="id_address" />
			<form:hidden path="userId" />
			
			<vl-tags:vertical-space height="15" />
			
			<div class="bloco-campo required">
				<label title="Digite o CEP que será completado os campos bairro e logradouro de Araras-SP">CEP (Será usado para validar o endereço)</label>
				<form:input path="cep" id="cep" maxlength="8" cssClass="mask" mask="99999-999" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Logradouro</label>
				<form:input readonly="true" path="street" id="logradouro" maxlength="100" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Número</label>
				<form:input path="number" maxlength="8" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo">
				<label>Complemento (Ex: casa, 2 andar, sala 8)</label>
				<form:input path="complement" maxlength="30" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Bairro</label>
				<form:input readonly="true" path="district" id="bairro" maxlength="40" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo">
				<input type="submit" class="btn btn-md btn-success" id="btn_cadastrar" value="Salvar" /> 
			    <input type="button" class="btn btn-md btn-danger"  id="btn_limpar"    value="Limpar Campos" /> 
			</div>
			
		</form:form>
	</div>
	
</div>