<%@ tag language="java" pageEncoding="UTF-8" body-content="empty"%>


<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"	prefix="vl"%>

<div class="message alerta" id="painel-erro" style="display:none">
	<c:if test="${not empty erro_no_form}">
		<vl:errorHandler/>
	</c:if>
</div>

<div class="message sucesso" id="painel-sucesso"
	<c:if test="${empty sucesso}">
		style="display:none"
	</c:if>>
	<c:out value="${sucesso}" escapeXml="false" default="NULO" />
</div>