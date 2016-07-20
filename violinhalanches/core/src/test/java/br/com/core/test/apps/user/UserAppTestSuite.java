package br.com.core.test.apps.user;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({
	UserAppPersistenceTest.class,
	UserAppEmailSenderTest.class,
	UserAppSearchTest.class
})
public class UserAppTestSuite {

}
