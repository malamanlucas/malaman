package br.com.core.test.apps.product;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({
	ProductAppPersistenceTest.class,
	ProductAppSearchTest.class,
	ProductAppValidationTest.class
})
public class ProductAppTestSuite {

}
