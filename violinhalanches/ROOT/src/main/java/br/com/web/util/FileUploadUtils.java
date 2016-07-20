package br.com.web.util;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import br.com.model.entities.manager.Photo;

public class FileUploadUtils {
	
	public static Photo obterFoto(MultipartFile imagem) throws IOException {
		return  new Photo(imagem.getOriginalFilename(),imagem.getSize(),imagem.getBytes()); 
	}
	
	public static Photo obterFoto(byte[] bytes) {
		return new Photo(bytes);
	}
	
}
