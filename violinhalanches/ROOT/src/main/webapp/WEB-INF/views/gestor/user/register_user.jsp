<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<c:set var="url_save" scope="request">
	<c:url value="/manager_user/save" />
</c:set>

<div id="assunto" class="caixa-arredondada">

	<vl-tags:titulo titleName="Cadastro de Usuário" />
	
	<div class="wrapper-form">
		<form:form modelAttribute="user" action="${url_save}" method="POST" id="form_cadastro">
			
			<form:hidden path="quantityPedido" />
			<form:hidden path="quantityPayed" />
			<form:hidden path="quantityCancelled" />
			<form:hidden path="id" />
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label title="Será usado como login no site">Telefone ou Celular:</label>
				<form:input path="phone" />
			</div>
			
			<vl-tags:vertical-space height="15"/>
	
			<div class="bloco-campo required">
				<label>Senha</label>
				<form:input path="password" maxlength="30" />
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
			
			<div class="bloco-campo required">
				<label>Habilitado</label>
				<form:select path="enable">
					<form:option value="true" label="Sim" />
					<form:option value="false" label="Não" />
				</form:select>
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo required">
				<label>Confiável</label>
				<form:select path="reliable">
					<form:option value="true" label="Sim" />
					<form:option value="false" label="Não" />
				</form:select>
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo">
				<c:forEach items="${profiles}" var="p">
					<div class="wrapper-checkbox">
						<input type="checkbox" id="${p.name()}" value="${p.name()}" name="profiles" 
							<c:if test="${ user.hasProfile(p.description) }">
								checked="checked"
							</c:if>	/>
						<label for="${p.name()}" class="label-checkbox">${p.description}</label>
					</div>
				</c:forEach>
			</div>
			
			<vl-tags:vertical-space height="15"/>
			
			<div class="bloco-campo">
				<input type="button" class="btn btn-md btn-success" id="btn_cadastrar" value="Salvar" /> 
			</div>
			
		</form:form>
	</div>
	
	
	
</div>