package br.com.model.entities.manager;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import br.com.model.converters.IngredientsAdapter;

@XmlRootElement(name="items")
@XmlJavaTypeAdapter(IngredientsAdapter.class)
public class Ingredients {
	
	public Ingredients() {
		items = new ArrayList<>();
	}
	
	private List<Item> items;
	
	@XmlElement(name="item")
	public List<Item> getItems() {
		return items;
	}
	public void setItems(List<Item> items) {
		this.items = items;
	}
	
	public String toString() {
		return "Ingredients [items=" + items + "]";
	}
	
}
