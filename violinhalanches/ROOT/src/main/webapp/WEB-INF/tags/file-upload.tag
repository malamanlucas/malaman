<%@ tag language="java" pageEncoding="UTF-8" body-content="empty"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:choose>
	<c:when test="${not empty editImage}">
		<input type="file" name="imagem" id="foto" style="display:none"/> 
		<input class="btn btn-md btn-primary"style="margin-bottom: 2px" type="button" id="btn_foto" value="Trocar Foto" /> 
		<input class="btn btn-md btn-danger" style="margin-bottom: 2px;margin-left: 2%" id="btn_cancel_foto" type="button" value="Cancelar" />
		 	
		<div class="erro mg-top1 sucess" style="text-align: center; width: 80%; margin-bottom: 1%;">
			Imagem pronta para ser salva.
		</div>
		<div id="campo_foto">
			<img id="sem_foto" class="img-lazyload"	style="width: 100%; height: 100%;display: none"	src="<c:url value="/estatico/img/sem_imagem.jpg" />" />
			
			<img src="<c:url value="${urlGetImage}" />"	id="foto_item" class="img-lazyload" data-original="" style="width:100%;height:100%" />
			
		</div>
		<div id="info_foto" class="txt14" style="display: none">
			Tamanho: <span id="tm_foto">??</span> KB <br />
			Nome: <span id="nome_foto">??</span>
		</div>
		<input type="hidden" name="hasImage" id="hasImage" value="edit" />
	</c:when>
	
	<c:when test="${not empty getFotoTmp}">
		<input type="file" name="imagem" id="foto" style="display:none"/> 
		<input class="btn btn-md btn-primary"style="margin-bottom: 2px" type="button" id="btn_foto" value="Trocar Foto" />
		<input class="btn btn-md btn-danger" style="margin-bottom: 2px;margin-left: 2%" id="btn_cancel_foto" type="button" value="Cancelar" />
		 	
		<div class="erro mg-top1 sucess" style="text-align: center; width: 80%; margin-bottom: 1%;">
			Imagem pronta para ser salva.
		</div>
		<div id="campo_foto">
			<img id="sem_foto" style="width: 100%; height: 100%;display: none" class="img-lazyload"	src="<c:url value="/estatico/img/sem_imagem.jpg" />" />
			
			<img src="<c:url value="/util/off/fotoTmp" />" id="foto_item" class="img-lazyload" data-original="" style="width:100%;height:100%" />
			
		</div>
		<div id="info_foto" class="txt14">
			Tamanho: <span id="tm_foto">${sizeFoto}</span> KB <br />
			Nome: <span id="nome_foto">${nomeFoto}</span>
		</div>
		<input type="hidden" name="hasImage" id="hasImage" value="tmp" />
	</c:when>
	
	<c:otherwise>
		<input type="file" name="imagem" id="foto" style="display:none"/> 
		<input class="btn btn-md btn-primary"style="margin-bottom: 2px" type="button" id="btn_foto" value="Selecionar Foto" /> 
		<input class="btn btn-md btn-danger" style="margin-bottom: 2px;display:none;margin-left: 2%" id="btn_cancel_foto" type="button" value="Cancelar" />
		 	
		<div class="erro mg-top1" style="text-align: center; width: 80%; margin-bottom: 1%;"></div>
		<div id="campo_foto">
			<img id="sem_foto" style="width: 100%; height: 100%" class="img-lazyload" src="<c:url value="/estatico/img/sem_imagem.jpg" />" />
			
			<img src=""	id="foto_item" class="img-lazyload" data-original="" style="width:100%;height:100%;display:none" />
		</div>
		<div id="info_foto" class="txt14" style="display: none">
			Tamanho: <span id="tm_foto">??</span> KB <br />
			Nome: <span id="nome_foto">??</span>
		</div>
		<input type="hidden" name="hasImage" id="hasImage" value="false"/>
	</c:otherwise>
</c:choose>