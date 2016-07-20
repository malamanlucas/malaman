<%@ tag language="java" pageEncoding="UTF-8" body-content="empty"%>


<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"
	prefix="vl"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ attribute name="text" required="true" rtexprvalue="true"
	type="java.lang.String" %>
<%@ attribute name="max" required="true" type="java.lang.Integer" %>	

<c:choose>
	<c:when test="${fn:length(text) gt max}">
		<span class="nome destaque italico" title="${text}">
			${fn:substring(text,0,max-3)}... </span>
	</c:when>
	<c:otherwise>
		<span class="nome destaque italico"> ${text} </span>
	</c:otherwise>
</c:choose>