package br.com.dao.test.jdbc.user;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({
	UserDAOPersistenceTest.class,
	UserDAOSearchTest.class
})
public class UserDAOTestSuite {

}
