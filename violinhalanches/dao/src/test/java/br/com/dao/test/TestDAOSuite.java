package br.com.dao.test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import br.com.dao.test.jdbc.DeleteAllTest;
import br.com.dao.test.jdbc.carousel.CarouselDAOTest;
import br.com.dao.test.jdbc.categoria.CategoriaDAOTestSuite;
import br.com.dao.test.jdbc.item.ItemDAOTestSuite;
import br.com.dao.test.jdbc.novidade.NovidadeDAOTest;
import br.com.dao.test.jdbc.parameter.ParameterDAOTestSuite;
import br.com.dao.test.jdbc.payment_method.PaymentMethodDAOSuite;
import br.com.dao.test.jdbc.pedido.PedidoDAOTestSuite;
import br.com.dao.test.jdbc.produto.ProdutoDAOTestSuite;
import br.com.dao.test.jdbc.receiver_method.ReceiverMethodDAOSuite;
import br.com.dao.test.jdbc.system_status.SystemStatusDAOTest;
import br.com.dao.test.jdbc.text_home.TextHomeDAOTest;
import br.com.dao.test.jdbc.user.UserDAOTestSuite;

@RunWith(Suite.class)
@SuiteClasses({
	DeleteAllTest.class,
	CategoriaDAOTestSuite.class,
	CarouselDAOTest.class,
	ItemDAOTestSuite.class,
	NovidadeDAOTest.class,
	ProdutoDAOTestSuite.class,
	TextHomeDAOTest.class,
	UserDAOTestSuite.class,
	SystemStatusDAOTest.class,
	PaymentMethodDAOSuite.class,
	ReceiverMethodDAOSuite.class,
	ParameterDAOTestSuite.class,
	PedidoDAOTestSuite.class
})
public class TestDAOSuite {
	
}
