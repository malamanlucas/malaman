package br.com.web.converters;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import br.com.model.entities.user.ItemCart;

public class ProductConverter {

	public static String forString(List<ItemCart> itens) {

		Collections.sort(itens, new Comparator<ItemCart>() {
			public int compare(ItemCart o1, ItemCart o2) {
				return o1.getName().compareTo(o2.getName());
			}
		});

		StringBuilder text = new StringBuilder();

		for (ItemCart item : itens) {
			text.append("(" + item.getQuantity() + ")" + item.getName() + ", ");
		}
		return formatCorrectly(text);
	}

	private static String formatCorrectly(StringBuilder s) {
		int pos = s.lastIndexOf(",");
		s.replace(pos, pos + 1, ".");
		pos = s.lastIndexOf(",");
		if (pos != -1) {
			s.replace(pos, pos + 1, " e");
		}
		return s.toString().trim();
	}

}
