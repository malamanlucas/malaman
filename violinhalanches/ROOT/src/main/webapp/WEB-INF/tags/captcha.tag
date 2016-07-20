<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<div class="clear" style="height:15px">&nbsp;</div>

<div class="bloco-campo">
	<div style="width:80%" id="container_captcha">
		<img style="width:100%" src="<c:url value="/util/off/captcha?key=${key}"/>" /> 
	</div>
	<br/>
	<label>Digite os caracteres da imagem:</label> <input type="text" name="answer" value="" />
	<input type="hidden" name="original" value="${key}" id="captcha_key" />
</div>

<div class="clear" style="height:15px">&nbsp;</div>

 

