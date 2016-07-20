<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags" %>

<div id="assunto">
	
	<div class="wrapper" id="painel-gestor">
		<fieldset class="caixa">
			<legend class="txt13">Usuario</legend>
			<div class="center">
				<a class="btn btn-large btn-warning submit-form" url="<c:url value="/manager_user/"/>" >Gerenciar</a>
			</div>
			<div class="wrapper3 center txt13">
				Aréa responsável para gerenciar todos os usuarios;
			</div>
		</fieldset>
		
		<fieldset class="caixa">
			<legend class="txt13">Pedido</legend>
			<div class="center">
				<a class="btn btn-large btn-info">Gerenciar</a>
			</div>
			<div class="wrapper3 center txt13">
				Aréa responsável para gerenciar todos os pedidos feitos
			</div>
		</fieldset>
		
		<div class="clear"></div>
		
		<fieldset class="caixa">
			<legend class="txt13">Ingrediente</legend>
			<div class="center">
				<a url="<c:url value="/item/gerenciar/"/>" class="btn btn-large btn-success submit-form">Gerenciar</a>
			</div>
			<div class="wrapper3 center txt13">
				Área responsável pela visualização, cadastramento, exclusão e edição dos
				ingredientes.
			</div>
		</fieldset>
		
		<fieldset class="caixa">
			<legend class="txt13">Lanches</legend>
			<div class="center">
				<a url="<c:url value="/lanche/gerenciar/"/>" class="btn btn-large btn-danger submit-form">
					Gerenciar
				</a>
			</div>
			<div class="wrapper3 center txt13">
				Área responsável pela visualização, cadastramento, exclusão e edição dos
				Lanches.
			</div>
		</fieldset>
		
		<div class="clear"></div>
		
		
		<fieldset class="caixa">
			<legend class="txt13">Categorias</legend>
			<div class="center">
				<a url="<c:url value="/categoria/gerenciar/"/>" class="btn btn-large btn-primary submit-form">
					Gerenciar
				</a>
			</div>
			<div class="wrapper3 center txt13">
				Área responsável pela visualização, cadastramento, exclusão e edição das
				Categoria.
			</div>
		</fieldset>
		
		
		<fieldset class="caixa">
			<legend class="txt13">Produtos</legend>
			<div class="center">
				<a url="<c:url value="/produto/gerenciar/"/>" class="btn btn-large btn-warning submit-form">
					Gerenciar
				</a>
			</div>
			<div class="wrapper3 center txt13">
				Área responsável pela visualização, cadastramento, exclusão e edição dos
				Produtos.
			</div>
		</fieldset>
		
		<div class="clear"></div>
		
		<fieldset class="caixa">
			<legend class="txt13">Home</legend>
			<div class="center">
				<a class="btn btn-large btn-warning submit-form" url="<c:url value="/carousel/gerenciar/"/>">Carousel</a>
				<a class="btn btn-large btn-warning submit-form" url="<c:url value="/gestor/text"/>">Texto Inicial</a>
				<a class="btn btn-large btn-warning submit-form" url="<c:url value="/gestor/status"/>">Status</a>
				<a class="btn btn-large btn-warning submit-form" style="margin-top:3px" url="<c:url value="/gestor/methods"/>">Pagamento/Recebimento</a>
				<a class="btn btn-large btn-warning submit-form" url="<c:url value="/parameter/"/>">Parâmetros</a>
			</div>
			<div class="wrapper3 center txt13">
				Área responsável por alterar as imagens do carousel, o texto inicial do site e o
				status da venda e do estabelecimento.
			</div>
		</fieldset>
	</div>
	
</div>