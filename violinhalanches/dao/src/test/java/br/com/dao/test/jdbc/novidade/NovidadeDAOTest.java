package br.com.dao.test.jdbc.novidade;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

import br.com.dao.db.novidade.NovidadeDAO;
import br.com.dao.db.novidade.impl.jdbc.specify.mapper.NovidadeSearchProductSpecify;
import br.com.model.entities.manager.Product;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value={"/dbunit/produto/populate_all.xml", "/dbunit/novidade/populate_2.xml"})
public class NovidadeDAOTest {

	@Resource(name="novidadeJDBC")
	private NovidadeDAO dao;
	
	@Test
	public void testIsRegistered() {
		boolean isNew = dao.isRegistered(-99);
		Assert.assertFalse(isNew);
	}
	
	@Test
	public void testSearchProduto() {
		List<Product> produtos = dao.search( new NovidadeSearchProductSpecify() );
		Assert.assertTrue(produtos.size() == 2);
	}
	
	
}
