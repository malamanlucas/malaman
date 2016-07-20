<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_change_status" value="<c:url value="/gestor/status/change"/>" />

<div id="assunto" class="caixa-arredondada">
	
	<vl-tags:titulo titleName="Alteração dos status do sistema" />

	<vl-tags:vertical-space height="10"/>

	<div class="center">
		<a title="Venda Online" class="icon_manager icon_manager-button_change_sales" icon="icon_manager-button_change_sales" icon_hover="icon_manager-button_change_sales_hover" id="change_sale"></a>
		
		<a title="Carrinho" class="icon_manager icon_manager-button_change_establishment" icon="icon_manager-button_change_establishment" icon_hover="icon_manager-button_change_establishment_hover" id="change_trailer"></a>
	</div>
	
	<vl-tags:vertical-space height="10"/>
	
</div>