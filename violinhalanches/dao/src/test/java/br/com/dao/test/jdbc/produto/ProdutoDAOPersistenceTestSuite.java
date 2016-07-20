package br.com.dao.test.jdbc.produto;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import br.com.dao.test.jdbc.produto.persistence.ProdutoDAODeletesTest;
import br.com.dao.test.jdbc.produto.persistence.ProdutoDAOInsertsTest;
import br.com.dao.test.jdbc.produto.persistence.ProdutoDAOUpdatesTest;

@RunWith(Suite.class)
@SuiteClasses({
	ProdutoDAOInsertsTest.class,
	ProdutoDAOUpdatesTest.class,
	ProdutoDAODeletesTest.class
})
class ProdutoDAOPersistenceTestSuite {
	
}
