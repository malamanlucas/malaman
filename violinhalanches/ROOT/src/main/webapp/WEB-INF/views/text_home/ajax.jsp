
<%@page import="java.util.Locale"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.DateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<div>
	<div class="titulo txt29">
		<div class="fonte-destaque">
			${textHome.title}
		</div>
	</div>
	<p class="mg-top3">
		<span class="italico txt14" id="horario"> 
			<%=DateFormat.getDateInstance(DateFormat.FULL, new Locale("pt","BR")).format( new Date())%>
		</span> 
		<div class="txt14">
			${textHome.bodyForWEB}
		</div
	</p>
</div>
<vl-tags:vertical-space height="15"/>