<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<input type="hidden" id="url_comprar-lanche" value="<c:url value="/lanche/detalhe"/>" />

<div id="assunto">
	<div id="titulo_categoria" class="titulo">
		<span class="txt26">
			<c:out value="${categoria.name}" escapeXml="true" default="NULO" />
		</span>
		<div class="preto txt12">
			<c:out value="${categoria.description}" escapeXml="true" default="NULO" />
		</div>
	</div>

	<div id="lanches" class="txt15 painel-items">
			<c:forEach var="produto" items="${lstProduto}">
				<div class="lanche item">
					<div class="nome" style="font-size:0.8em; margin-top:10px">
						${produto.name}
					</div>
					<span class="valor destaque preto">${produto.priceAsText}</span>
					<img class="img-lazyload" title="${produto.description}"
						src="<c:url value="${url_foto_produto}?id=${produto.id}"/>" />
					<span class="botao-comprar">
						<a class="btn-sm btn-warning btn-comprar txt10 submit-form"
							url="<c:url value="${url_detalhe_produto}?id=${produto.id}"/>" >
						   Comprar
						</a>
					</span>
					<div class="clear"></div>
				</div>
			</c:forEach>
		<div class="clear">&nbsp;</div>
	</div>
</div>
