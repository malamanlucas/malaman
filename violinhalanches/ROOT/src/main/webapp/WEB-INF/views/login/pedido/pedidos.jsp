<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<div id="assunto">
	<div class="titulo txt26">
		<div class="caixa-arredondada">Lista de últimos pedidos feitos</div>
	</div>
	
	<div id="painel-principal">
		<c:forEach items="${pedidos}" var="pedido">
			
			<div class="vertical-space15"></div>
			
			<div class="painel-centro">
				<div class="painel-icone">
					<c:choose>
						<c:when test="${pedido.pedidoStatus eq 'APROVADO'}">
							<img src="<c:url value="/estatico/img/pedido_ok.png" />" />
						</c:when>
						<c:otherwise>
							<img src="<c:url value="/estatico/img/remover.png" />" />
						</c:otherwise>
					</c:choose>
				</div>
				<div class="painel-dados">
					
					<vl-tags:tag_centralizar
					classCSS="txt14" styleCSS="text-align:justify" >
						<vl-tags:fieldPedido label="Número do Pedido: " valueClass="id_pedido"  value="${pedido.id}"/>
						<vl-tags:fieldPedido label="Meio Pagamento:" value="${pedido.meioPagamento.descricao}" />
						<vl-tags:fieldPedido label="Meio Recebimento:" value="${pedido.meioRecebimento.descricao}" />
						<vl-tags:fieldPedido label="Data/hora de Emissão: "  value="${pedido.dataEmissaoFmt}"/>
						<vl-tags:fieldPedido label="Preço Total: " value="${pedido.precoFmt}"/>					
						<vl-tags:fieldPedido label="Status" value="${pedido.pedidoStatus.descricao}"/>
						<vl-tags:fieldPedido label="Detalhes do Pedidos: " 
							value="Clique aqui" valueClass="destaque detalhe italico"/>
					</vl-tags:tag_centralizar>
				</div>
			</div>
		</c:forEach>
	</div>
</div>
