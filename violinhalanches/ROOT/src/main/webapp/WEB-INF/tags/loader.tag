<%@ tag language="java" pageEncoding="UTF-8" body-content="empty"%>


<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"	prefix="vl"%>

<%@ attribute name="width" required="false" rtexprvalue="false" type="java.lang.Integer" description="Default 45px" %>

<img src="<c:url value="/estatico/img/loader.gif" />" style="width: ${empty width ? 45 : width}px" />