<%@page import="br.com.web.model.UserAuthentication"%>
<%@ page import="br.com.model.entities.user.User"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>


<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<div id="area-login">
	<div id="wrapper-area-login">
		<div class="wrapper-login" style="margin-top: 10px;">
			<input type="hidden" id="status_sale" value="false" />
			<a class="icon icon-online_sale_closed" id="icon_sale" style="display:none"></a>
			<img src="<c:url value="/estatico/img/loader.gif"/>"  style="width:35px" class="loading-status"/>
		</div>
		
		<vl-tags:vertical-space height="0"/>
		
 		<div class="wrapper-login">
 			<input type="hidden" id="status_establishment" value="false" />
 			<img src="<c:url value="/estatico/img/loader.gif"/>"  style="width:35px" class="loading-status" />
			<a class="icon icon-establishment_closed" id="icon-establishment" style="display:none"></a>
		</div>

		<div class="wrapper-login">
			<div id="actions-login">
				<c:choose>
					<c:when test="<%=request.getRemoteUser() == null%>">
						<div class="txt12 negrito">Seja bem vindo Visitante!</div>

						<div class="btns-login">
							<a class="icon icon-login submit-form" icon="icon-login" icon_hover="icon-login_hover" url="<c:url value="/login/off/" />"> </a>
<%-- 							<a class="icon icon-register submit-form" icon="icon-register" icon_hover="icon-register_hover" url="<c:url value="/user/off/register/" />"> </a> --%>
						</div>
					</c:when>
					<c:otherwise>
						<div class="txt12 negrito">
							Olá: <sec:authentication property="principal.entity.firstName" /> 
						</div>
						<div class="btns-login">
							<form id="form_logout" method="POST" action="<c:url value="/j_spring_security_logout" />">
								<%-- <sec:csrfInput/> --%>
							</form>
							<a class="icon icon-logoff submit-form" icon="icon-logoff" icon_hover="icon-logoff_hover" url="javascript:void(0)" id="btn_logout">  </a>
							<a class="icon icon-account submit-form" icon="icon-account" icon_hover="icon-account_hover" url="<c:url value="/user/conta" />"> </a>
						</div>
					</c:otherwise>
				</c:choose>
			</div>
		</div>
	</div>
</div>