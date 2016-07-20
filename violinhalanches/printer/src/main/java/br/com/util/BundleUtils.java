package br.com.util;

import java.util.ResourceBundle;

public class BundleUtils {

	static ResourceBundle BUNDLE = ResourceBundle.getBundle("config");
	
	public static String getWS() {
		return BUNDLE.getString("ws");
	}

	public static String getDLL() {
		return BUNDLE.getString("dll");
	}
	
	
	
}
