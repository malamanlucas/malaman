package br.com.providers.item;

import java.math.BigDecimal;

import br.com.model.entities.manager.Item;
import br.com.providers.EntityProvider;

public class ItemProvider extends EntityProvider<Item>{
	
	@Override
	protected Item build() {
		Item i = new Item();
		i.setName("Logo");
		i.setPrice(new BigDecimal(2.50));
		i.setPhoto(provideFoto());
		return i;
	}
	
}
