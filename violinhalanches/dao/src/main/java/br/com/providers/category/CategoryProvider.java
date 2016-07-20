package br.com.providers.category;

import br.com.model.entities.manager.Category;
import br.com.model.enums.CategoryType;
import br.com.providers.EntityProvider;

public class CategoryProvider extends EntityProvider<Category>{

	@Override
	protected Category build() {
		Category c = new Category();
		c.setId(-1);
		c.setName("Hot-Dog");
		c.setDescription("Lanches só com hot-dog");
		c.setType(CategoryType.LANCHE);
		c.setPhoto(provideFoto());
		return c;
	}


}
