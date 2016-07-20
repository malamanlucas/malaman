package br.com.dao.test.jdbc.produto;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import br.com.dao.test.jdbc.produto.searchs.ProdutoDAOCountTest;
import br.com.dao.test.jdbc.produto.searchs.ProdutoDAOFindTest;
import br.com.dao.test.jdbc.produto.searchs.ProdutoDAOSearchPaginationTest;

@RunWith(Suite.class)
@SuiteClasses({
	ProdutoDAOCountTest.class,
	ProdutoDAOFindTest.class,
	ProdutoDAOSearchPaginationTest.class
})
class ProdutoDAOSearchTestSuite {

	
}
