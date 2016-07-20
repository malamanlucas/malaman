package br.com.comum.dates;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Dates {

	public static Date getDate(String format, String date) {
		try {
			return new SimpleDateFormat(format).parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public static String getDate(String format, Date date) {
		return new SimpleDateFormat(format).format(date);
	}
	
}
