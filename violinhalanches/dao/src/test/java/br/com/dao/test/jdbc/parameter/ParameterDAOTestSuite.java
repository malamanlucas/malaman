package br.com.dao.test.jdbc.parameter;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({
	ParameterDAOPersistenceTest.class,
	ParameterDAOSearchTest.class
})
public class ParameterDAOTestSuite {

}
