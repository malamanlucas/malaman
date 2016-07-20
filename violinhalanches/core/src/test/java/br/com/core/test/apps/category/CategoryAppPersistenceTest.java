package br.com.core.test.apps.category;

import javax.annotation.Resource;

import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

import br.com.core.apps.categoria.CategoryApp;
import br.com.model.entities.manager.Category;
import br.com.model.exception.SystemException;
import br.com.providers.EntityModifier;
import br.com.providers.category.CategoryProvider;

@DatabaseSetup(type  = DatabaseOperation.CLEAN_INSERT, 
			   value = "/dbunit/categoria/populate_7.xml")
public class CategoryAppPersistenceTest {

	@Resource(name="categoriaFacade")
	private CategoryApp app;
	
	private CategoryProvider provider;

	public CategoryAppPersistenceTest() {
		this.provider = new CategoryProvider();
	}
	
	@Test(expected=SystemException.class)
	public void insertWithDuplicateKey() {
		Category category = provider.provideEntity(new EntityModifier<Category>() {
			public Category modifier(Category t) {
				t.setId(null);
				t.setName("Hot-Dog1");
				return t;
			}
		});
		app.save(category);
	}
	
	@Test(expected=SystemException.class)
	public void updateWithDuplicateKey() {
		Category category = provider.provideEntity(new EntityModifier<Category>() {
			public Category modifier(Category t) {
				t.setName("Hot-Dog2");
				return t;
			}
		});
		app.save(category);
	}
	
	
	@Test
	public void insert() {
		Category category = provider.provideEntity();
		category.setId(null);
		app.save(category);
	}
	
	@Test
	public void update() {
		Category category = provider.provideEntity();
		app.save(category);
	}
	
}
