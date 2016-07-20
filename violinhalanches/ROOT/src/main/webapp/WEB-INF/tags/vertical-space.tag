<%@ tag language="java" pageEncoding="UTF-8" body-content="empty"%>


<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core"	prefix="vl"%>

<%@ attribute name="height" required="true" rtexprvalue="false" type="java.lang.String" description="Height aplicado em CSS que será em Pixel" %>

<div class="clear" style="height:${height}px">&nbsp;</div>
