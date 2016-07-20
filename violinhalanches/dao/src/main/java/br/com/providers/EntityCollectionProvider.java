package br.com.providers;

import java.util.List;

public abstract class EntityCollectionProvider<T> {

	public abstract List<T> provideEntityCollections(EntityProvider<T> entityProvider);
}
