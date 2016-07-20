package br.com.dao.test.jdbc.produto.searchs;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.categoria.impl.jdbc.specify.primitive.CategoryCountByTypeSpecify;
import br.com.dao.db.produto.ProductDAO;
import br.com.model.enums.CategoryType;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
value={"/dbunit/item/populate_7.xml","/dbunit/categoria/populate_7.xml",
	   "/dbunit/produto/populate_4.xml", "/dbunit/item_produto/populate_1.xml"})
public class ProdutoDAOCountTest {

	@Resource(name="produtoJDBC")
	private ProductDAO dao;
	
	@Test
	public void countRowsByTipoCategoriaProduto() {
		Integer count = (Integer) dao.find( new CategoryCountByTypeSpecify(CategoryType.LANCHE) );
		Assert.assertTrue(count == 3);
	}
	
	@Test
	public void countRowsByTipoCategoriaLanche() {
		Integer count = (Integer) dao.find( new CategoryCountByTypeSpecify(CategoryType.PRODUTO) );
		Assert.assertTrue(count == 4);
	}
	
}
