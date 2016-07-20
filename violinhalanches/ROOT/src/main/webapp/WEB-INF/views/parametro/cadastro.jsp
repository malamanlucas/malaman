<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<c:set var="url_salvar" scope="request">
	<c:url value="/parameter/save"/>
</c:set>

<div id="assunto" class="caixa-arredondada">

	<vl-tags:titulo titleName="Tela de atualização dos parametros do Sistema" />

	<div class="wrapper-form" style="max-width: 100%; width: 90% !important">
		<form action="${url_salvar}" id="form_parametro" method="POST">
			
			<table class="table txt12">
				
				<vl-tags:vertical-space height="25"/>
				
				<c:forEach items="${parameters}" var="p">
					<tr>
						<td>
							<label>${p.key}</label>
							<input type="hidden" name="chave" value="${p.key}" />
						</td>
						<td style="text-align: left">
							
							<input type="text" name="valor" value="${p.value}" 
								<c:choose>
									<c:when test="${p.dataType eq 'PRECO'}">
										class="campoMoeda"
									</c:when>
									<c:when test="${p.dataType eq 'NUMERO'}">
										class="onlyNumber"
									</c:when>
								</c:choose>
							/>
						</td>
					</tr>
				</c:forEach>
			</table>
			
			<div class="center">
				<input type="submit" class="btn btn-lg btn-success" id="btn_cadastrar" value="Salvar" /> 
			</div>
		</form>
	</div>
	
</div>