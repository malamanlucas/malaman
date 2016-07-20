package br.com.dao.test.jdbc.categoria;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import br.com.dao.test.jdbc.categoria.persistence.CategoriaDAOPersistenceTest;
import br.com.dao.test.jdbc.categoria.search.CategoriaDAOMapperSearchTest;
import br.com.dao.test.jdbc.categoria.search.CategoriaDAOPrimitiveSearchTest;

@RunWith(Suite.class)
@SuiteClasses({
	CategoriaDAOPersistenceTest.class,
	CategoriaDAOMapperSearchTest.class,
	CategoriaDAOPrimitiveSearchTest.class
})
public class CategoriaDAOTestSuite {

}
