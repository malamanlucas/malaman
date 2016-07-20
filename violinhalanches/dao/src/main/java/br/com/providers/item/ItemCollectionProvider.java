package br.com.providers.item;

import java.util.ArrayList;
import java.util.List;

import br.com.model.entities.manager.Item;
import br.com.providers.EntityCollectionProvider;
import br.com.providers.EntityModifier;
import br.com.providers.EntityProvider;

public class ItemCollectionProvider extends EntityCollectionProvider<Item> {
	
	@Override
	public List<Item> provideEntityCollections(EntityProvider<Item> entityProvider) {
		List<Item> lstItem = new ArrayList<>();
		lstItem.add(provideEntityModifyingName(entityProvider, "Logo1"));
		lstItem.add(provideEntityModifyingName(entityProvider, "Logo2"));
		lstItem.add(provideEntityModifyingName(entityProvider, "Logo3"));
		lstItem.add(provideEntityModifyingName(entityProvider, "Logo4"));
		return lstItem;
	}
	
	private Item provideEntityModifyingName(EntityProvider<Item> entityProvider, final String nome) {
		return entityProvider.provideEntity(new EntityModifier<Item>() {
			public Item modifier(Item t) {
				t.setName(nome);
				return t;
			}
		});
	}


}
