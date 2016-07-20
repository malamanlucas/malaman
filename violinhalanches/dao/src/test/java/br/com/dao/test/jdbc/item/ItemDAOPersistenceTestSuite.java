package br.com.dao.test.jdbc.item;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import br.com.dao.test.jdbc.item.persistence.ItemDAOPersistenceTest;


@RunWith(Suite.class)
@SuiteClasses({
	ItemDAOPersistenceTest.class
})
public class ItemDAOPersistenceTestSuite {

}
