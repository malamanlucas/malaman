package br.com.biblia.core.utils;

import java.io.InputStream;

import org.apache.commons.io.IOUtils;

public class ResourceLoader {

	public static byte[] getContentAsBytes(String path) {
		try {
			return IOUtils.toByteArray( getContentAsInputStream(path) );
		} catch (Exception e) {
			throw new RuntimeException( e.getMessage(), e );
		}
	}

	public static InputStream getContentAsInputStream(String path) {
		return Thread.currentThread()
								.getContextClassLoader()
								.getResourceAsStream( path );
	}
	
}
