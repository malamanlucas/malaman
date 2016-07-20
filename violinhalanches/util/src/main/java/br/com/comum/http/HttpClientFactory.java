package br.com.comum.http;

import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import br.com.comum.config.ConfigProperties;

class HttpClientFactory {
	
	private static final String  ipProxy   = ConfigProperties.getProxyIP();
	private static final Integer port      = ConfigProperties.getProxyPort();
	private static final String  username  = ConfigProperties.getProxyUserName();
	private static final String  password  = ConfigProperties.getProxyPassword();
	private static final Boolean withProxy = ConfigProperties.getWithProxy();

	public static CloseableHttpClient createHttpClient() {
		if (withProxy) {
			return createHttpClientWithProxyUniararas();
		}
		return HttpClients.createSystem();
	}
	
	private static CloseableHttpClient createHttpClientWithProxyUniararas() {
		return createHttpClientWithProxyAuthentication(ipProxy, port, username, password);
	}
	
	private static HttpGet createGetWithProxyUniararas(String url) {
		return createGetWithProxy(url, ipProxy, port);
	}
	
	private static HttpGet createGetWithProxy(String url, String ipProxy, Integer port) {
		HttpHost proxy = new HttpHost(ipProxy, port, "http");
		RequestConfig config = RequestConfig
											.custom()
											.setProxy(proxy)
											.build();
		HttpGet get = new HttpGet(url);
		get.setConfig(config);
		return get;
	}
	
	private static CloseableHttpClient createHttpClientWithProxyAuthentication(String ipProxy, Integer port, String username, String password) {
		CredentialsProvider credentials = new BasicCredentialsProvider();
		credentials.setCredentials(
									new AuthScope(ipProxy, port),
									new UsernamePasswordCredentials(username, password)
								  );
		return HttpClients
						.custom()
						.setDefaultCredentialsProvider(credentials)
						.build();
	}

	public static HttpGet createHttpGet(String url) {
		if (withProxy) {
			return createGetWithProxyUniararas(url);
		}
		return new HttpGet(url);
	}
	
	
	
}
