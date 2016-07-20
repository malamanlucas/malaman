<%@ tag language="java" pageEncoding="UTF-8" body-content="empty"%>


<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"	prefix="vl"%>

<%@ attribute name="titleName" required="true" rtexprvalue="true" type="java.lang.String" description="Titulo da Página" %>

<div id="titulo_form" class="txt29 negrito">
	<c:out value="${titleName}" default="Sem Título" />
</div>
