<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<input type="hidden" value="" id="produtos_xml" />

<div id="assunto">

	<div class="titulo txt26">
		<div class="caixa-arredondada">
			Descrição dos Produtos do Pedido: ${id}
		</div>
	</div>
	
	<table class="txt15 table table-bordered destaque" 
	style="width:80%;margin: 0 auto">
		<thead>
			<tr style="width:100%">
				<td class="col-header" colspan="2">Foto</td>
				<td class="col-header" colspan="2">Descrição</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="p" items="${produtos}">
				<tr class="produto-confirm" style="width:100%">
					<td style="width: 50%" colspan="2">
						<img style="width: 100%; height: 200px; min-width: 200px" src="<c:url value="/produto/foto?nome=${p.nome}"/>" />
					</td>
					<td style="width: 50%; vertical-align:middle" colspan="2">
						${p.name} <br/>
						${p.description} <br />
						${p.price} <br /> Qtde: ${p.qtd} <br /> SubTotal:
						${p.subTotalFormatado}
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>