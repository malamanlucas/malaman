<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"
	prefix="vl"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<title>Violinha Lanches</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<%-- <sec:csrfMetaTags /> --%>
<link rel="icon" type="image/png"
	href="<c:url value="/estatico/img/aba_navegador.png" />" />

<tiles:importAttribute toName="css_infra" name="css_infra" />
<c:forEach items="${css_infra}" var="css">
	<link rel="stylesheet" type="text/css" href="<c:url value="${css}" />"
		media="screen" />
</c:forEach>

<tiles:importAttribute toName="css_person" name="css_person" />
<c:forEach items="${css_person}" var="css">
	<link rel="stylesheet" type="text/css" href="<c:url value="${css}" />"
		media="screen" />
</c:forEach>

<c:if test="${not empty redirecionar}">
	<c:redirect url="${url}" />
</c:if>
</head>

<div id="wrapper_load">
	<div id="status_load" class="loader"></div>
	<div class="loader">
		<img src="<c:url value="/estatico/img/loader.gif"/>" />
	</div>
</div>

<form id="form_action" action="" method="GET"></form>

<body>
	<input type="hidden" id="websocket_url"        value="<c:url value="/off/add" />" />
	<input type="hidden" id="url_icon_arrows"      value="<c:url value="/estatico/img/a14.png" />" />
	<input type="hidden" id="context_estatico"     value="<c:url value="/estatico/" />" />
	<input type="hidden" id="url_new_status"       value="<c:url value="/gestor/off/status/new"/>" />
	<input type="hidden" id="url_captcha"          value="<c:url value="/util/off/captcha"/>" />
	<input type="hidden" id="url_error"	           value="<c:url value="/util/off/error"/>" />
	<input type="hidden" id="url_login"	           value="<c:url value="/login/off/"/>" />
	<input type="hidden" id="url_negado"           value="<c:url value="/login/off/negado"/>" />
	<input type="hidden" id="url_img_fechar_modal" value="<c:url value="/estatico/img/fechar.jpg"/>" />
	<input type="hidden" id="url_pedido_produtos"  value="<c:url value="/pedido/produtos" />" />
	<input type="hidden" id="url_operator_active"  value="<c:url value="/gestor/operator/active" />" />
	
	<div id="container">

		<div id="header">
			<tiles:insertAttribute name="header" ignore="true" />
		</div>

		<vl-tags:vertical-space height="10" />

		<fieldset id="content" class="caixa" style="margin-top: 10px">
			<legend class="txt25">
				<tiles:insertAttribute name="titulo" ignore="true" />
			</legend>
			<vl-tags:messages />
			<tiles:insertAttribute name="body" ignore="true" />
		</fieldset>

		<div id="footer" class="txt11 caixa">
			<tiles:insertAttribute name="footer" ignore="true" />
		</div>

	</div>

	<tiles:importAttribute toName="js_infra" name="js_infra" />
	<c:forEach items="${js_infra}" var="js">
		<script type="text/javascript" src="<c:url value="${js}" />"></script>
	</c:forEach>

	<tiles:importAttribute toName="js_person" name="js_person" />
	<c:forEach items="${js_person}" var="js">
		<script type="text/javascript" src="<c:url value="${js}" />"></script>
	</c:forEach>

</body>
</html>

