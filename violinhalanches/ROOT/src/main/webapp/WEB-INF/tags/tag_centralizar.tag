<%@ tag language="java" pageEncoding="UTF-8" body-content="scriptless"%>

<%@ attribute name="vertical" required="false" 
rtexprvalue="false" type="java.lang.Boolean" description="Centralização Vertical" %>

<%@ attribute name="horizontal" required="false" 
rtexprvalue="false" type="java.lang.Boolean" description="Centralização Horizontal" %>

<%@ attribute name="classCSS" required="false" 
rtexprvalue="false" type="java.lang.String" description="classes CSS do Conteúdo" %>

<%@ attribute name="styleCSS" required="false" 
rtexprvalue="false" type="java.lang.String" description="Estilo Inline CSS do Conteúdo" %>


<div style="display: table; width:100%; height:100%;">
	<div style="display:table-cell;vertical-align: middle">
		<div class="${classCSS}" style="${styleCSS}">
			<jsp:doBody />
		</div>
	</div>
</div>