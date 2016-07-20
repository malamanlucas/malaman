<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_change_method" value="<c:url value="/gestor/methods/change"/>" />

<div id="assunto" class="caixa-arredondada">

	<vl-tags:titulo titleName="Gerenciar Meios de Pagamento e Recebimento" />

	<vl-tags:vertical-space height="10"/>

	<div class="center">
			<div style="width:49%; display:inline-block;" class="center">
				<div id="meio_pagamento" style="display:inline-block;text-align: justify;
				 border-radius: 10px;border: 1px solid black;padding: 7px;">
					
					<div class="txt15 destaque">
						Meio Pagamento
					</div>
					
					<c:forEach items="${payments}" var="p" >
						<div class="wrapper-checkbox">
							<input type="checkbox" id="payment-${p.id}" class="${p.id}" value="${p.id}" name="payment"
								<c:if test="${p.enabled}">
									checked="checked"
								</c:if>  
								<c:if test="${p.id eq defaultPayment}">
									disabled="disabled"
								</c:if> /> 
							<label for="payment-${p.id}" class="label-checkbox"> ${p.description} </label>
						</div>
					</c:forEach>
					
				</div>
			</div>
			<div style="width:49%; display:inline-block;" class="center">
				<div id="meio_recebimento" style="display:inline-block;text-align: justify;
				 border-radius: 10px;border: 1px solid black;padding: 7px;">
					
					<div class="txt15 destaque">
						Meio Recebimento
					</div>
				
					<c:forEach items="${receivers}" var="p" >
						<div class="wrapper-checkbox">
							<input type="checkbox" id="receiver-${p.id}" class="${p.id}" value="${p.id}" name="receiver"
								<c:if test="${p.enabled}">
									checked="checked"
								</c:if>
								<c:if test="${p.id eq defaultReceiver}">
									disabled="disabled"
								</c:if> /> 
							<label for="receiver-${p.id}" class="label-checkbox"> ${p.description} </label>
						</div>
					</c:forEach>
				</div>
			</div>
			
		</div>
	
	<vl-tags:vertical-space height="10"/>
	
</div>