<%@page import="br.com.model.entities.user.User"%>
<%@page import="org.springframework.security.core.userdetails.UserDetails"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"
	prefix="vl"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<sec:authentication property="principal.entity" scope="request" var="user"/>

<c:set var="url_email" scope="request"> <c:url value="/user/email" /> </c:set>

<form method="GET" action="<c:url value="/user/email" />"    id="form_email" > </form>
<form method="GET" action="<c:url value="/user/password" />" id="form_password" > </form>
<form method="GET" action="<c:url value="/user/address" />"  id="form_address" > </form>

<div id="assunto">

	<div class="center">
		
		<div id="dados_usuario" style="position:relative">
			
			<vl-tags:vertical-space height="8"/>
			
			<div style="font-size:2.8em; margin-top: 5px; line-height: 20px;color: #F59300;font-weight: bolder">
				Pedidos
			</div>
			
			<vl-tags:vertical-space height="8"/>
			
			<div>
				<a class="btn-warning btn-sm submit-form" id="btn-pedido-current" url="<c:url value="/user/pedidos" />">Meus Pedidos</a>
			</div>
			
			<hr style="clear:both" />
			
			<div style="font-size:2.8em; margin-top: 5px; line-height: 20px;color: #F59300;font-weight: bolder">
				Dados Pessoais
			</div>
			
			<vl-tags:vertical-space height="8"/>
			
			<div>
				<a class="btn-warning btn-sm " id="btn-password">Alterar Senha</a>
				<a class="btn-warning btn-sm" id="btn-email">Alterar Email</a>
			</div>
			
			<vl-tags:vertical-space height="2"/>
			
			<hr style="clear:both" />
			
			<div class="txt15 field_wrapper">
				<div class="destaque">Nome e sobrenome:</div>
				<div class="value">
					${user.name} 
				</div>
			</div>
			
			<vl-tags:vertical-space height="8"/>
			
			<div class="txt15 field_wrapper">
				<div class="destaque">Telefone/Celular:</div>
				<div class="value">
					${user.phone} 
				</div>
			</div>
			
			<vl-tags:vertical-space height="8"/>
			
			<div class="txt15 field_wrapper">
				<div class="destaque">Tipo de Usuário:</div>
				<div class="value">
					${user.userType.description}
				</div>
			</div>
			
			<vl-tags:vertical-space height="8"/>
			
			<div class="txt15 field_wrapper">
				<div class="destaque">Email:</div>
				<div class="value">
					${user.email}
				</div>
			</div>
			
			
			<c:choose>
				<c:when test="${empty user.address}">
					<vl-tags:vertical-space height="8"/>
					
					<div class="txt15 field_wrapper">
						<div class="destaque">Endereço:</div>
						<div class="value">	Nenhum endereço cadastrado </div>
					</div>
					
					<vl-tags:vertical-space height="5"/>
					
					<div class="btn-warning btn-lg btn" id="btn-address" > Cadastrar Endereço </div>
				</c:when>
				<c:otherwise>
				
					<vl-tags:vertical-space height="16"/>
					
					<hr style="clear:both" />
					
					<a class="btn-warning btn-sm" style="float: left" id="btn-address">Alterar</a>
					<div style="font-size:2.8em; margin-top: 5px; line-height: 23px;color: #F59300;font-weight: bolder">
						Endereço
					</div>
					
					<vl-tags:vertical-space height="0"/>
					
					<hr style="clear:both" />
					
					<div class="txt15 field_wrapper">
						<div class="destaque">Rua:</div>
						<div class="value"> ${user.address.street} </div>
					</div>
					
					<vl-tags:vertical-space height="8"/>
					
					<div class="txt15 field_wrapper">
						<div class="destaque">Número:</div>
						<div class="value"> ${user.address.number} </div>
					</div>
					
					<vl-tags:vertical-space height="8"/>
					
					<div class="txt15 field_wrapper">
						<div class="destaque">Bairro:</div>
						<div class="value"> ${user.address.district} </div>
					</div>
					
					<vl-tags:vertical-space height="8"/>
					
					<div class="txt15 field_wrapper">
						<div class="destaque">CEP:</div>
						<div class="value"> ${user.address.cep} </div>
					</div>
					
				</c:otherwise>
			</c:choose>
			
			<vl-tags:vertical-space height="10"/>
			
		</div>
	</div>

</div>