package br.com.comum.converters;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;

public class ConverterCollections {

	public static <T> String forString(Collection<T> objects) {
		StringBuilder text = new StringBuilder();
		Iterator<T> iterator = objects.iterator();
		while ( iterator.hasNext() ) {
			Object o = iterator.next();
			text.append(o+", ");
		}
		return formatCorrectly( text );
	}
	
//	public static String forString(List<T> objects) {
//		StringBuilder text = new StringBuilder();
//		Iterator<Object> iterator = objects.iterator();
//		while ( iterator.hasNext() ) {
//			Object o = iterator.next();
//			text.append(o+", ");
//		}
//		return text.toString();
//	}
	
	private static String formatCorrectly(StringBuilder s) {
		int pos = s.lastIndexOf(",");
		s.replace(pos, pos+1, ".");
		pos = s.lastIndexOf(",");
		if (pos != -1) {
			s.replace(pos, pos+1, " e");
		}
		return s.toString().trim();
	}
	
	
}
