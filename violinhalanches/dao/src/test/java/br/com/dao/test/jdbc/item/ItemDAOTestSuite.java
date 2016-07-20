package br.com.dao.test.jdbc.item;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({
	ItemDAOPersistenceTestSuite.class,
	ItemDAOSearchTestSuite.class
})
public class ItemDAOTestSuite {
	
}
