package br.com.providers.product;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import br.com.model.entities.manager.Category;
import br.com.model.entities.manager.Item;
import br.com.model.entities.manager.Product;
import br.com.model.enums.ProductType;
import br.com.providers.EntityModifier;
import br.com.providers.EntityProvider;
import br.com.providers.category.CategoryProvider;
import br.com.providers.item.ItemProvider;

public class ProductProvider extends EntityProvider<Product> {

	@Override
	protected Product build() {
		Product p = new Product();
		p.setName("Cachorro-Quente");
		p.setPrice(new BigDecimal(2.50));
		p.setPhoto(provideFoto());
		p.setItens(provideItens());
		p.setCategory(provideCategoria());
		p.setType(ProductType.PAO_HAMBURGUER);
		return p;
	}
	
	private Category provideCategoria() {
		return new CategoryProvider().provideEntity();
	}
	
	private List<Item> provideItens() {
		List<Item> lstItem = new ArrayList<>();
		ItemProvider itemProvider = new ItemProvider();
		lstItem.add(provideEntityModifyingNameAndId(itemProvider, "Logo1", -1));
		lstItem.add(provideEntityModifyingNameAndId(itemProvider, "Logo2", -2));
		lstItem.add(provideEntityModifyingNameAndId(itemProvider, "Logo3", -3));
		lstItem.add(provideEntityModifyingNameAndId(itemProvider, "Logo4", -4));
		return lstItem;
	}
	
	private Item provideEntityModifyingNameAndId(EntityProvider<Item> entityProvider, 
						final String nome, final Integer id) {
		return entityProvider.provideEntity(new EntityModifier<Item>() {
			public Item modifier(Item t) {
				t.setId(id);;
				t.setName(nome);
				t.setAmount(1);
				t.setMaxAmount(1);
				t.setPrice(new BigDecimal(2.73));
				return t;
			}
		});
	}
	
	
	

}
