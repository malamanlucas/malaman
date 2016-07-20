package br.com.comum.test;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TesteUtils {

	private static final SimpleDateFormat DATE_FORMAT = 
			new SimpleDateFormat("hh:mm:ss");
	
	public static void showMsg(String t, Object o) {
//		System.out.println("------"+t+"-------"+o + " "+DATE_FORMAT.format(new Date())+"------");
	}
	
}
