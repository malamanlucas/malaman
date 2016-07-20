package br.com.dao.test.jdbc.produto.searchs;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.produto.ProductDAO;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductSearchPaginationByCategoryTypeSpecify;
import br.com.model.entities.manager.Product;
import br.com.model.enums.CategoryType;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
value={"/dbunit/item/populate_7.xml","/dbunit/categoria/populate_7.xml",
	   "/dbunit/produto/populate_4.xml", "/dbunit/item_produto/populate_1.xml"})
public class ProdutoDAOSearchPaginationTest {

	@Resource(name="produtoJDBC")
	private ProductDAO dao;
	
	@Test
	public void searchPaginationByCategoriaLanche() {
		QueryMapperSpecify specify = 
				new ProductSearchPaginationByCategoryTypeSpecify(CategoryType.LANCHE, 0, 2);
		List<Product> lstProduto = dao.search( specify );
		Assert.assertNotNull(lstProduto);
		Assert.assertTrue(lstProduto.size() == 2);
	}
	
}
