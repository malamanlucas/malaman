package br.com.dao.test.jdbc.produto;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({
	ProdutoDAOPersistenceTestSuite.class,
	ProdutoDAOSearchTestSuite.class
})
public class ProdutoDAOTestSuite {

}
