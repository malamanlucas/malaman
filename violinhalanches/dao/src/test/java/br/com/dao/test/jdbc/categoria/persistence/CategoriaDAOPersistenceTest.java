package br.com.dao.test.jdbc.categoria.persistence;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.dao.db.categoria.CategoryDAO;
import br.com.model.entities.manager.Category;
import br.com.model.enums.CategoryType;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;


public class CategoriaDAOPersistenceTest {

	@Resource(name="categoriaJDBC")
	private CategoryDAO dao;
	
	@ExpectedDatabase(value="/dbunit/categoria/expected/insert.xml",
					  assertionMode=DatabaseAssertionMode.NON_STRICT)	
	@Test
	public void testInsert() {
		Category c = new Category();
		c.setName("Teste");
		c.setType(CategoryType.LANCHE);
		c.setDescription("Teste Categoria");
		dao.insert(c);
	}
	
	@ExpectedDatabase(value="/dbunit/categoria/expected/update.xml",
			  assertionMode=DatabaseAssertionMode.NON_STRICT)
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
				   value="/dbunit/categoria/populate_1.xml")	
	@Test
	public void testUpdate() {
		Category c = new Category();
		c.setId(-1);
		c.setName("Hot-Dog2");
		c.setDescription("Lanches só com hot-dog2");
		c.setType(CategoryType.PRODUTO);
		dao.update(c);
	}
	
	@ExpectedDatabase(value="/dbunit/categoria/expected/delete.xml",
			  assertionMode=DatabaseAssertionMode.NON_STRICT)
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
				   value="/dbunit/categoria/populate_1.xml")	
	@Test
	public void testDelete() {
		dao.delete(-1);
	}
	
	
}
