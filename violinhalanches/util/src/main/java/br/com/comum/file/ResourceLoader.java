package br.com.comum.file;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import org.apache.commons.io.IOUtils;

import com.google.common.base.Preconditions;

public class ResourceLoader {

	private static void check(String resourceName) {
		Preconditions.checkNotNull(resourceName, "resourceName is NULL");
		Preconditions.checkArgument(!resourceName.isEmpty(), "Passe o nome do recurso");
	}
	
	public static URL loadURL(String resourceName) {
		check(resourceName);
		return Thread.currentThread()
								  .getContextClassLoader()
								  .getResource(resourceName);
	}
	
	public static InputStream loadInputStream(String resourceName) {
		check(resourceName);
		return Thread.currentThread()
								  .getContextClassLoader()
								  .getResourceAsStream(resourceName);
	}
	
	public static byte[] loadAndRetrieveBytes(String resourceName) {
		try {
			InputStream inputStream = loadInputStream(resourceName);
			return IOUtils.toByteArray(inputStream);
		} catch (IOException e) {
			throw new IllegalArgumentException("Erro ao carregar: "+resourceName);
		}
	}
	
	
}
