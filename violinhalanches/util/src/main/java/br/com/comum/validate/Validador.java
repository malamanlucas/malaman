package br.com.comum.validate;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONException;
import org.json.JSONObject;

import br.com.comum.config.ConfigUtils;
import br.com.comum.http.HttpClientUtils;

import com.google.common.base.Strings;


public class Validador {
	
	private static final String REGEX_ONLY_LETTERS = "^[\\p{L} .'-]+$";
	private static final String REGEX_ONLY_NUMBERS = "^[0-9]+$";
	private static final String ATOM = "[a-z0-9!#$%&'*+/=?^_`{|}~-]";
	private static final String DOMAIN = "(" + ATOM + "+(\\." + ATOM + "+)*";
	private static final String IP_DOMAIN = "\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\]";

	public static boolean isEmailValid(String email ) {
		if ( Strings.isNullOrEmpty( email ) ) {
			return false;
		}
		Pattern pattern = Pattern.compile("^" + ATOM + "+(\\." + ATOM + "+)*@"+ DOMAIN+ "|"+ IP_DOMAIN+ ")$",Pattern.CASE_INSENSITIVE);
		Matcher m = pattern.matcher( email );
		return m.matches();
	}
	
	public static boolean isCEPOf(String cep, String cidade, String uf) {
		boolean isValido = true;
		String url = ConfigUtils.getURLWebService(cep);
		try {
			JSONObject jsonObject = new JSONObject( HttpClientUtils.getResultAsString(url) );
			if (!uf.equals(jsonObject.get("uf")) ||  !cidade.equals(jsonObject.get("cidade"))) {
				isValido = false;
			}
		} catch (JSONException e) {
			isValido = false;
		}
		return isValido;
	}
	
	public static boolean hasOnlyNumbers(String str) {
		return str.matches(REGEX_ONLY_NUMBERS);
	}
	
	public static boolean hasOnlyLetters(String x) {
		return x.matches(REGEX_ONLY_LETTERS);
	}
	
	@SuppressWarnings("unchecked")
	public static boolean isCollectionEmptyOrNull(Object l) {
		return l==null | ((Collection<Object>)l).isEmpty();
	}
	
	@SuppressWarnings("unchecked")
	public static boolean isMapEmptyOrNull(Object l) {
		return l==null | ((Map<Object,Object>)l).isEmpty();
	}
	
	public static boolean isStringEmpty(String str) {
		return (str == null || str.isEmpty());
	}
	
	public static boolean isArrayBytesEmpty(byte[] val) {
		return (val == null || val.length == 0);
	}
	
	public static boolean isBigDecimalEmpty(BigDecimal val) {
		return (val == null);
	}
	
	public static boolean isBigDecimalBetween(BigDecimal val, BigDecimal min, BigDecimal max) {
		if (val.compareTo(min) == -1 || val.compareTo(max) == 1) return false;
		return true;
	}
	
	public static boolean isStringBetween(String val, int min, int max) {
		if (val.length() < min || val.length() > max) return false;
		return true;
	}
}
