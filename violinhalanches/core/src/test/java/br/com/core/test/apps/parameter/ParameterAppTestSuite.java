package br.com.core.test.apps.parameter;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;


@RunWith(Suite.class)
@SuiteClasses({
	ParameterAppPersistenceTest.class,
	ParameterAppSearchTest.class
})
public class ParameterAppTestSuite {

}
