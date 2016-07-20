package br.com.comum.fmt;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DateFormat;
import java.text.Normalizer;
import java.text.NumberFormat;
import java.text.ParseException;
import java.util.Date;
import java.util.Locale;

public class Formatter {
	
	private static NumberFormat nf = null;
	private static DateFormat df = null;
	private static final String VAZIO = "";
	private static final String DEFAULT = "R$ 0,00";
	private static final String SIMBOLO_REAL = "R$";
	private static final String BARRA_PONTO = "\\.";
	private static final String PONTO = ".";
	private static final String VIRGULA = ",";
	private static final String REGEX_MASCARA = "[-|/]";
	
	static {
		Locale.setDefault(new Locale("pt","BR"));
	}
	
	private static NumberFormat getNumberFormat() {
		if (nf == null) {
		 	nf = NumberFormat.getCurrencyInstance(); 
		 	nf.setMinimumFractionDigits(2);
		 	nf.setMaximumFractionDigits(2);
		}
		return nf;
	}
	
	private static DateFormat getDateFormat() {
		if (df == null) {
			df = DateFormat.getDateTimeInstance();
		}
		return df;
	}
//	
	public static String numberToString(Object number) {
		if (number == null) return DEFAULT;
		return getNumberFormat().format(number);
	}
	
	public static String dateToString(Date date) {
		return getDateFormat().format(date);
	}
	
	public static BigDecimal arredondar(BigDecimal v) {
		return v.setScale(2, RoundingMode.HALF_UP);
	}
	
	public static BigDecimal stringToBigDecimal(String str) {
		try {
			if (str.startsWith(SIMBOLO_REAL)) {
				return new BigDecimal(getNumberFormat().parse(str).doubleValue());
			}
		} catch (ParseException e) {
		}
		if (str.contains(",")) {
			str = str.replaceAll(BARRA_PONTO, VAZIO);
		}
		try {
			return new BigDecimal(str.replace(VIRGULA,PONTO));
		} catch (NumberFormatException e) {
			return new BigDecimal(0);
		}
	}
	
	public static String removerMascara(String str) {
		return str.replaceAll(REGEX_MASCARA, "");
	}
	
	public static String removeAcentos(String string) {
	    if (string != null){
	        string = Normalizer.normalize(string, Normalizer.Form.NFD);
	        string = string.replaceAll("[^\\p{ASCII}]", "");
	    }
	    return string;
	}

}
