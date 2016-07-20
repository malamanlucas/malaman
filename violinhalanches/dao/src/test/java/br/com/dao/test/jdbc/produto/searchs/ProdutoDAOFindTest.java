package br.com.dao.test.jdbc.produto.searchs;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.dao.EmptyResultDataAccessException;

import br.com.dao.db.item.impl.jdbc.specify.primitive.ItemFindPhotoSpecify;
import br.com.dao.db.produto.ProductDAO;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductFindByIdSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductFindByNameSpecify;
import br.com.dao.test.jdbc.produto.asserts.ProdutoFindAsserts;
import br.com.model.entities.manager.Product;
import br.com.model.enums.ProductType;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
value={"/dbunit/item/populate_7.xml","/dbunit/categoria/populate_7.xml",
	   "/dbunit/produto/populate_4.xml", "/dbunit/item_produto/populate_1.xml"})
public class ProdutoDAOFindTest {

	
	@Resource(name="produtoJDBC")
	private ProductDAO dao;
	
	@Test
	public void findById() {
		Product produto = dao.find( new ProductFindByIdSpecify(-1) );
		ProdutoFindAsserts.defaultz(produto);
	}
	
	@Ignore
	@Test
	public void findFoto() {
		dao.find( new ItemFindPhotoSpecify(-1) );
	}
	
	@Test(expected=EmptyResultDataAccessException.class)
	public void findFotoWithThrowingEmptyResult() {
		dao.find( new ItemFindPhotoSpecify(6) );
	}
	
	@Test
	public void findByName() {
		Product product = dao.find( new ProductFindByNameSpecify("Hot-Dog1", ProductType.PAO_MATA_FOME.getCode()));
		Assert.assertNotNull( product );
	}
}
