package br.com.comum.cripto;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.StringUtils;
import org.apache.commons.codec.digest.DigestUtils;


public final class Criptografador {
	
	public static String encodeBase64(String str) {
		return Base64.encodeBase64String(str.getBytes());
	}
	
	public static String decodeBase64(String code) {
		return StringUtils.newStringUtf8(Base64.decodeBase64(code.getBytes()));
	}
	
	public static String encodeMD5(String str) {
		return DigestUtils.md5Hex(str);
	}
	
}
