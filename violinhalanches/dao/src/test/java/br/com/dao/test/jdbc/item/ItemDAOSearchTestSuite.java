package br.com.dao.test.jdbc.item;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import br.com.dao.test.jdbc.item.search.ItemDAOSearchTest;


@RunWith(Suite.class)
@SuiteClasses({
	ItemDAOSearchTest.class
})
public class ItemDAOSearchTestSuite {

}
