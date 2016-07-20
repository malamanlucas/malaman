package br.com.dao.test.jdbc.pedido;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({
	PedidoDAOPersistenceTest.class,
	PedidoDAOSearchTest.class
})
public class PedidoDAOTestSuite {

}
