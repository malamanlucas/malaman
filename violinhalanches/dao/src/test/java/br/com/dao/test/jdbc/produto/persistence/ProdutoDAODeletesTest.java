package br.com.dao.test.jdbc.produto.persistence;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.dao.db.produto.ProductDAO;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value={"/dbunit/categoria/populate_1.xml","/dbunit/produto/populate_1.xml"})
@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
			   value="/dbunit/produto/expected/delete.xml")
public class ProdutoDAODeletesTest {

	@Resource(name="produtoJDBC")
	private ProductDAO dao;
	
	@Test
	public void deleteById() {
		dao.delete(-1);
	}
	
	@Test
	public void deleteByNome() {
		dao.delete("Hot-Dog");
	}
	
	
}
