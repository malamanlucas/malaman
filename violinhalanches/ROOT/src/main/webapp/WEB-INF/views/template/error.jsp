<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<div id="assunto" class="caixa-arredondada">
	
	<div id="titulo_form" class="txt25" style="color: red;font-style: italic;">
		Ocorreu um erro inesperado. Pode ser por acionar alguma ação no sistema antes dele ser carregado
		totalmente. Recarregue a página por favor.
	</div>
	
	<input type="hidden" id="page_error" />

</div>