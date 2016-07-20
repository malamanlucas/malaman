
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<div id="slider_container">

	<div u="loading" style="position: absolute; top: 0px; left: 0px;">
		<img u="image" src="<c:url value="/estatico/img/loader.gif"/>" />
	</div>

	<div u="slides" class="slide">
		
		<div>
			<img u="image" src2="<c:url value="/estatico/img/logo_default.png"/>" />
		</div>
		<c:forEach items="${carousels}" var="c">
			<div>
				<img u="image" src2="<c:url value="/carousel/off/foto?id=${c.id}"/>" />
			</div>
		</c:forEach>
		
	</div>

	<style>
	
.jssora14l,.jssora14r,.jssora14ldn,.jssora14rdn {
	position: absolute;
	cursor: pointer;
	display: block;
	overflow: hidden;
}

.jssora14l {
	background-position: -15px -35px;
}

.jssora14r {
	background-position: -75px -35px;
}

.jssora14l:hover {
	background-position: -135px -35px;
}

.jssora14r:hover {
	background-position: -195px -35px;
}

.jssora14ldn {
	background-position: -255px -35px;
}

.jssora14rdn {
	background-position: -315px -35px;
}
</style>
	<span u="arrowleft" class="jssora14l arrow"
		style="width: 30px; height: 50px; top: 50%; left: 0px"></span> <span
		u="arrowright" class="jssora14r arrow"
		style="width: 30px; height: 50px; top: 50%; right: 0px"></span>

</div>
