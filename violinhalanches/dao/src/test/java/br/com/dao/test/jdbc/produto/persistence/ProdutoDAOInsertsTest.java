package br.com.dao.test.jdbc.produto.persistence;

import javax.annotation.Resource;

import org.junit.Test;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;

import br.com.dao.db.produto.ProductDAO;
import br.com.model.entities.manager.Product;
import br.com.providers.EntityModifier;
import br.com.providers.product.ProductProvider;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

public class ProdutoDAOInsertsTest {

	@Resource(name="produtoJDBC")
	ProductDAO dao;
	
	ProductProvider produtoProvider = new ProductProvider();
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
		value={"/dbunit/item/populate_7.xml","/dbunit/categoria/populate_1.xml"})
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
					  value="/dbunit/produto/expected/insertFull.xml")
	@Test
	public void insertFull() {
		Product produto = produtoProvider.provideEntity( new EntityModifier<Product>() {
			
			public Product modifier(Product t) {
				t.setDescription("ABCDEFG123");
				return t;
			}
		} );
		
		dao.insert(produto);
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			value={"/dbunit/item/populate_7.xml","/dbunit/categoria/populate_1.xml"})
	@Test
	public void insertWithNoItens() {
		Product produto = produtoProvider.provideEntity(new EntityModifier<Product>() {
			public Product modifier(Product t) {
				t.setItens(null);
				return t;
			}
		});
		dao.insert(produto);
	}
	
	@Test(expected=DataIntegrityViolationException.class)
	public void insertWithNoCategoria() {
		Product produto = produtoProvider.provideEntity(new EntityModifier<Product>() {
			public Product modifier(Product t) {
				t.setCategory(null);
				return t;
			}
		});
		dao.insert(produto);
	}
	
	@Test(expected=DataIntegrityViolationException.class)
	public void insertWithViolateCategoriaConstrantFK() {
		Product produto = produtoProvider.provideEntity();
		dao.insert(produto);
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value="/dbunit/categoria/populate_1.xml")
	@Test(expected=DataIntegrityViolationException.class)
	public void insertWithViolateItensConstrantFK() {
		Product produto = produtoProvider.provideEntity();
		dao.insert(produto);
	}

	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
		value={"/dbunit/item/populate_7.xml","/dbunit/categoria/populate_1.xml"})
	@Test(expected=DuplicateKeyException.class)
	public void insertWithDuplicateKey() {
		Product produto = produtoProvider.provideEntity();
		dao.insert(produto);
		dao.insert(produto);
	}
	
}
