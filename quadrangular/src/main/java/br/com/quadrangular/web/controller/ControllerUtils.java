package br.com.quadrangular.web.controller;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.primefaces.model.DefaultStreamedContent;
import org.primefaces.model.StreamedContent;

import br.com.quadrangular.core.utils.ResourceLoader;

public class ControllerUtils {

	public static DefaultStreamedContent getDefaultImage() {
		String path = "sem_imagem.gif";
		InputStream content = ResourceLoader.getContentAsInputStream( path );
		return new DefaultStreamedContent( content );
	}

	public static StreamedContent getImage(byte[] foto) {
		return new DefaultStreamedContent( new ByteArrayInputStream(foto) );
	}
			
}
