package br.com.comum.config;


public class ConfigProperties {
	
	public static String getCity() {
		return BundleUtils.getStringNormal("cidade");
	}
	
	public static String getUF() {
		return BundleUtils.getStringNormal("uf");
	}
	
	public static String getURL(String action) {
		return getURL()+action;
	}
	
	public static String getURL() {
		return BundleUtils.getStringNormal("url_sistema");
	}
	
	public static String getSMTPHost() {
		return BundleUtils.getStringNormal("smpt_host");
	}
	
	public static int getSMTPPort() {
		return Integer.valueOf(BundleUtils.getStringNormal("smpt_port"));
	}
	
	public static String getSMTPUsername() {
		return BundleUtils.getStringNormal("smpt_username");
	}
	
	public static String getSMTPPassword() {
		return BundleUtils.getStringNormal("smpt_password");
	}
	
	public static String getFromEmail() {
		return BundleUtils.getStringNormal("smpt_from");
	}
	
	public static String getPagSeguroEmail() {
		return BundleUtils.getStringNormal("pagseguro_email");
	}
	
	public static String getPagSeguroToken() {
		return BundleUtils.getStringNormal("pagseguro_token");
	}
	
	public static String getWebServiceCredentials() {
		return BundleUtils.getStringNormal("kinghost_token");
	}

	public static Integer getProxyPort() {
		return Integer.valueOf( BundleUtils.getStringNormal("proxy_port") );
	}

	public static String getProxyIP() {
		return BundleUtils.getStringNormal("proxy_ip");
	}

	public static String getProxyUserName() {
		return BundleUtils.getStringNormal("proxy_username");
	}

	public static String getProxyPassword() {
		return BundleUtils.getStringNormal("proxy_password");
	}

	public static Boolean getWithProxy() {
		return Boolean.valueOf( BundleUtils.getStringNormal("with_proxy") );
	}

	public static String getWebserviceCEP() {
		return BundleUtils.getStringNormal("kinghost_ws_cep");
	}
	
	public static String getJDBCUrl() {
		return BundleUtils.getStringNormal("jdbc_url");
	}

	public static String getJDBCUsername() {
		return BundleUtils.getStringNormal("jdbc_username");
	}

	public static String getJDBCPassword() {
		return BundleUtils.getStringNormal("jdbc_password");
	}

	public static String getGestorUser() {
		return BundleUtils.getStringNormal( "gestor_user" );
	}

	public static String getGestorPassword() {
		return BundleUtils.getStringNormal( "gestor_password" );
	}
	
}
