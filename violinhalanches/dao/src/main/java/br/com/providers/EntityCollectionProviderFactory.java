package br.com.providers;

import br.com.providers.item.ItemCollectionProvider;

public class EntityCollectionProviderFactory {

	public static ItemCollectionProvider createItemCollectionProvider() {
		return new ItemCollectionProvider();
	}
	
}
