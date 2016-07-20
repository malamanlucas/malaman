package br.com.comum.http;

import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;


public class HttpClientUtils {

	public static String getResultAsString(String url) {
		try {
			CloseableHttpClient client     = HttpClientFactory.createHttpClient();
			HttpGet get           	       = HttpClientFactory.createHttpGet(url);
			CloseableHttpResponse response = client.execute( get );
			String result                  = getResponseAsString( response );
			
			org.apache.http.client.utils.HttpClientUtils.closeQuietly( client );
			org.apache.http.client.utils.HttpClientUtils.closeQuietly( response );
			return result;
		} catch (Exception e) {
			throw new RuntimeException( e );
		}
	}
	
	private static String getResponseAsString(HttpResponse response) {
		try {
			InputStream content = response
										.getEntity()
										.getContent();
			return IOUtils.toString( content );
		} catch (Exception e) {
			throw new RuntimeException( e );
		}
	}
	
}
