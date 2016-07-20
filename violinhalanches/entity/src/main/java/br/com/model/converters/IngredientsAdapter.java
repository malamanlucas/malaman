package br.com.model.converters;

import java.util.List;

import javax.xml.bind.annotation.adapters.XmlAdapter;

import br.com.model.entities.manager.Ingredients;
import br.com.model.entities.manager.Item;

public class IngredientsAdapter extends XmlAdapter<List<Item>, Ingredients>{

	@Override
	public Ingredients unmarshal(List<Item> v) throws Exception {
		Ingredients i = new Ingredients();
		i.setItems(v);
		return i;
	}

	@Override
	public List<Item> marshal(Ingredients v) throws Exception {
		return v.getItems();
	}


}
