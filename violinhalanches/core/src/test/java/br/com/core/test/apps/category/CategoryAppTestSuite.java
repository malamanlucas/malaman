package br.com.core.test.apps.category;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({
	CategoryAppPersistenceTest.class,
	CategoryAppSearchTest.class
})
public class CategoryAppTestSuite {

}
