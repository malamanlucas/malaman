package br.com.comum.config;

import java.util.ResourceBundle;

import br.com.comum.constantes.Constantes;
import br.com.comum.cripto.Criptografador;

public class BundleUtils {

	static ResourceBundle BUNDLE = ResourceBundle.getBundle(Constantes.BUNDLE_FILE_NAME);
	
	public static String getStringDecoded(String key) {
		return Criptografador.decodeBase64(BUNDLE.getString(key));
	}
	
	public static String getStringNormal(String key) {
		return BUNDLE.getString(key);
	}

}
