package br.com.dao.test.jdbc.pedido;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.pedido.PedidoDAO;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoSearchPaginationAllClosedsSpecify;
import br.com.model.entities.user.Pedido;
import br.com.providers.EntityProviderFactory;
import br.com.providers.pedido.PedidoProvider;
import br.com.providers.user.UserProvider;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_7.xml"})	
public class PedidoDAOSearchPaginationTest {

	@Resource(name="pedidoJDBC")
	PedidoDAO dao;
	private UserProvider userProvider;
	private PedidoProvider pedidoProvider;
	
	public PedidoDAOSearchPaginationTest() {
		userProvider   = EntityProviderFactory.createUserProvider();
		pedidoProvider = EntityProviderFactory.createPedidoProvider();
	}
	
	@Test
	public void searchPagination() {
		QueryMapperSpecify specify = new PedidoSearchPaginationAllClosedsSpecify(0, 3);
		List<Pedido> pedidos = dao.search( specify );
		
		Assert.assertNotNull( pedidos );
		Assert.assertTrue( pedidos.size() == 3);
	}
	
	
}
