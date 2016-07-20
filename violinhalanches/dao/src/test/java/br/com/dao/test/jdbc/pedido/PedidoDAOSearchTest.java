package br.com.dao.test.jdbc.pedido;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.pedido.PedidoDAO;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoFindByNumberSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoSearchAllClosedsSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoSearchCurrentsByUserPhoneSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.primitive.PedidoCountLinkedByUserIdSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.primitive.PedidoCountLinkedByUserPhoneSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.primitive.PedidoCountNotEnteredInDashboardSpecify;
import br.com.model.entities.user.Pedido;
import br.com.providers.EntityProviderFactory;
import br.com.providers.pedido.PedidoProvider;
import br.com.providers.user.UserProvider;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

public class PedidoDAOSearchTest {

	@Resource(name="pedidoJDBC")
	PedidoDAO dao;
	private UserProvider userProvider;
	private PedidoProvider pedidoProvider;
	
	public PedidoDAOSearchTest() {
		userProvider   = EntityProviderFactory.createUserProvider();
		pedidoProvider = EntityProviderFactory.createPedidoProvider();
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
				   value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_1.xml"})	
	@Test
	public void searchCurrentsByUserPhone() {
		
		String phone = userProvider.provideKey();
		List<Pedido> pedidos = dao.search( new PedidoSearchCurrentsByUserPhoneSpecify(phone) );
		
		Assert.assertNotNull( pedidos );
		Assert.assertFalse( pedidos.isEmpty() );
		//TODO: Comparar o resto dos campos
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
			   value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_1.xml"})	
	@Test
	public void findByNumber() {
		
		Long number = pedidoProvider.provideKey();
		Pedido pedido = dao.find( new PedidoFindByNumberSpecify(number) );
		
		Assert.assertNotNull( pedido );
		Assert.assertNotNull( pedido.getNumber() );
		//TODO: Comparar o resto dos campos
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
			   	   value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_1.xml"})	
	@Test
	public void searchAllCloseds() {
		List<Pedido> pedidos = dao.search( new PedidoSearchAllClosedsSpecify() );
		
		Assert.assertNotNull( pedidos );
		Assert.assertFalse  ( pedidos.isEmpty() );
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
		   	   value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_1.xml"})	
	@Test
	public void countNotEnteredInDashboard() {
		Integer count = (Integer) dao.find( new PedidoCountNotEnteredInDashboardSpecify() );
		
		Assert.assertNotNull( count );
		Assert.assertTrue( count != 0 );
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
		   	   value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_1.xml"})
	@Test
	public void countPedidoLinkedByUserPhone() {
		
		String phone = userProvider.provideKey();
		Integer count = (Integer) dao.find( new PedidoCountLinkedByUserPhoneSpecify(phone) );
		
		Assert.assertNotNull( count );
		Assert.assertTrue( count != 0 );
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
		   	   value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_1.xml"})
	@Test
	public void countPedidoLinkedById() {
		
		Integer count = (Integer) dao.find( new PedidoCountLinkedByUserIdSpecify(-1) );
		Assert.assertTrue( count != 0 );
		
	}
	
	
}
