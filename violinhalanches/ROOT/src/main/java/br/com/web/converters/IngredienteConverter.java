package br.com.web.converters;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import br.com.comum.converters.ConversorJAXB;
import br.com.model.converters.IngredientsAdapter;
import br.com.model.entities.manager.Ingredients;
import br.com.model.entities.manager.Item;

public class IngredienteConverter {

	public static List<Item> convert(String xml) {
		try {
			xml = xml.replaceAll("xmlns=\"http://www.w3.org/1999/xhtml\"", "");
			
			Ingredients i = (Ingredients) ConversorJAXB
													.stringXMLToObject(xml, Ingredients.class, new IngredientsAdapter());
			List<Item> itens = i.getItems();
			return itens;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public static String forString(List<Item> itens) {
		
		Collections.sort( itens, new Comparator<Item>() {
			public int compare(Item o1, Item o2) {
				return o1.getName().compareTo( o2.getName() );
			}
		});
		
		StringBuilder text = new StringBuilder();
		
		for (Item item : itens) {
			text.append("("+item.getAmount()+")"+item.getName()+", ");
		}
		return formatCorrectly( text );
	}
	
	private static String formatCorrectly(StringBuilder s) {
		int pos = s.lastIndexOf(",");
		s.replace(pos, pos+1, ".");
		pos = s.lastIndexOf(",");
		if (pos != -1) {
			s.replace(pos, pos+1, " &");
		}
		return s.toString().trim();
	}

	
}
