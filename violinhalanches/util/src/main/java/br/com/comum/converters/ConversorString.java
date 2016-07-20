package br.com.comum.converters;

import java.io.UnsupportedEncodingException;

public class ConversorString {

	public static String convertCharSet(String oldCharSet, String newCharSet, String old) {
		try {
			return new String(old.getBytes(oldCharSet),newCharSet);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return "";
		}
	}
	
}
