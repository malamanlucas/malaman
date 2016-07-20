package br.com.providers;

import br.com.comum.file.ResourceLoader;
import br.com.model.entities.manager.Photo;

public abstract class EntityProvider<T> {
	
	private static final String IMG_PATH = "img/item/logo.png";
	
	public Photo provideFoto() {
		byte[] bytes = ResourceLoader.loadAndRetrieveBytes(IMG_PATH);
		Photo foto = new Photo(bytes);
		return foto;
	}
	
	protected abstract T build();
	
	public T provideEntity(EntityModifier<T> modifier) {
		T entity = build();
		return modifier.modifier(entity);
	}
	
	public T provideEntity() {
		return build();
	}
	
}
