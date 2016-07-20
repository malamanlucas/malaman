package br.com.core.test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import br.com.core.test.apps.address.AddressAppTestSuite;
import br.com.core.test.apps.category.CategoryAppTestSuite;
import br.com.core.test.apps.item.ItemAppTestSuite;
import br.com.core.test.apps.manager.ManagerUserAppSuite;
import br.com.core.test.apps.parameter.ParameterAppTestSuite;
import br.com.core.test.apps.payment.PaymentAppTest;
import br.com.core.test.apps.printer.PrintFormatterAppTest;
import br.com.core.test.apps.product.ProductAppTestSuite;
import br.com.core.test.apps.text_home.TextHomeAppTest;
import br.com.core.test.apps.user.UserAppTestSuite;

@RunWith(Suite.class)
@SuiteClasses({
	AddressAppTestSuite.class,
	CategoryAppTestSuite.class,
	ItemAppTestSuite.class,
	ManagerUserAppSuite.class,
	PaymentAppTest.class,
	PrintFormatterAppTest.class,
	ProductAppTestSuite.class,
	TextHomeAppTest.class,
	UserAppTestSuite.class,
	ParameterAppTestSuite.class
})
public class TestCORESuite {

}
