<%@ tag language="java" pageEncoding="UTF-8" body-content="empty"%>

<%@ attribute name="label" required="true" 
rtexprvalue="false" type="java.lang.String" description="Label do Campo" %>

<%@ attribute name="value" required="true" 
rtexprvalue="true" type="java.lang.String" description="Valor do Campo" %>

<%@ attribute name="labelClass" required="false" 
rtexprvalue="false" type="java.lang.String" description="Classes do Label" %>

<%@ attribute name="valueClass" required="false" 
rtexprvalue="false" type="java.lang.String" description="Classes do Label" %>

<div class="vertical-space5"></div>
					
<strong class="${labelClass}">${label}</strong>
<span class="${valueClass}">${value}</span>