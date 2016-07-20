package br.com.comum.check;

public class Checker {

	public static boolean isNumeric(String str) {
	    return str.matches("-?\\d+(.\\d+)?");
	}
}
