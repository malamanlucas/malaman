package br.com.comum.config;

public class ConfigUtils {

	private static final String URL_WEBSERVICE_CEP = ConfigProperties.getWebserviceCEP();
	
	public static String getURLWebService(String cep) {
		StringBuffer url = new StringBuffer(URL_WEBSERVICE_CEP);
		String credentials = ConfigProperties.getWebServiceCredentials();
		url.append("?auth="+credentials);
		url.append("&formato=json");
		url.append("&cep="+cep);
		return url.toString();
	}
	
	public static String getURLWebService() {
		StringBuffer url = new StringBuffer(URL_WEBSERVICE_CEP);
		String credentials = ConfigProperties.getWebServiceCredentials();
		url.append("?auth="+credentials);
		url.append("&formato=json");
		url.append("&cep=");
		return url.toString();
	}
	
}
