package br.com.core.test.apps.payment;

import java.math.BigDecimal;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import br.com.core.apps.payment.PaymentApp;
import br.com.model.entities.manager.Product;
import br.com.model.entities.user.Cart;
import br.com.uol.pagseguro.domain.Transaction;

@Ignore
public class PaymentAppTest {
	
	@Resource(name="pagseguroFacade")
	PaymentApp app;
	
	@Test
	public void doPayment() throws Exception {
		
		Cart cart = provideCart();
		
		String url = app.doPayment( cart.getItensAsCollection(), "1" );
		
		System.out.println( url );
		
	}
	
	@Test
	public void findTransactionByNotificationCode() {
		
		String code = "EE6C7949E73AE73ACCE774872F90807EF0ED";
		Transaction transaction = app.findTransactionByNotificationCode( code );
		
		Assert.assertNotNull( transaction );
	}
	
	@Test
	public void findTransactionByCode() {
		
		String code = "EE6C7949E73AE73ACCE774872F90807EF0ED";
//		Transaction transaction = app.findTransactionByCode( "1" );
		
//		Assert.notNull( transaction );
		
	}

	private Cart provideCart() {
		Cart cart = new Cart();
		
		Product product = new Product();
		product.setName( "Coca-cola" );
		product.setPrice( new BigDecimal(3) );
		product.setDescription( "Coca-cola muito fera" );
		
		cart.addItem( product );
		
		return cart;
	}
	
	
}
