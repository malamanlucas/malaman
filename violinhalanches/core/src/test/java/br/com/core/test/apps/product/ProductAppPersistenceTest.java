package br.com.core.test.apps.product;

import javax.annotation.Resource;

import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

import br.com.core.apps.produto.ProductApp;
import br.com.model.entities.manager.Product;
import br.com.model.enums.ProductType;
import br.com.model.exception.SystemException;
import br.com.providers.EntityModifier;
import br.com.providers.product.ProductProvider;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
value={"/dbunit/produto/populate_all.xml"})
public class ProductAppPersistenceTest {

	@Resource(name="produtoFacade")
	private ProductApp app;
	
	private ProductProvider provider = new ProductProvider();

	@Test
	public void delete() {
		app.delete(-1);
	}
	
	@Test
	public void insertWhenIsProduct() {
		Product product = provider.provideEntity(new EntityModifier<Product>() {
			public Product modifier(Product t) {
				t.setItens(null);
				t.setType(ProductType.PRODUCT);
				t.setName("Hot-Dog99");
				t.setDescription("Produto test INsert");
				t.setId(null);
				return t;
			}
		});
		app.save(product);
	}
	
	@Test(expected=SystemException.class)
	public void insertWhenIsProductAndWhenIsNameDuplicate() {
		Product product = provider.provideEntity(new EntityModifier<Product>() {
			public Product modifier(Product t) {
				t.setItens(null);
				t.setType(ProductType.PRODUCT);
				t.setName("Hot-Dog2");
				t.setDescription("Produto test INsert");
				t.setId(null);
				return t;
			}
		});
		app.save(product);
	}
	
	@Test(expected=SystemException.class)
	public void updateWhenIsProductAndWhenIsNameDuplicate() {
		Product product = provider.provideEntity(new EntityModifier<Product>() {
			public Product modifier(Product t) {
				t.setItens(null);
				t.setType(ProductType.PRODUCT);
				t.setName("Hot-Dog2");
				t.setDescription("Produto test INsert");
				t.setId(null);
				return t;
			}
		});
		app.save(product);
	}
	
	
}
