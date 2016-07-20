package br.com.dao.test.jdbc.payment_method;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.payment_method.PaymentMethodDAO;
import br.com.dao.db.payment_method.impl.jdbc.specify.mapper.PaymentMethodSearchEnabledSpecify;
import br.com.model.entities.manager.PaymentMethod;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

public class PaymentMethodDAOTest {

	@Resource(name="paymentMethodJDBC")
	private PaymentMethodDAO dao;
	
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
					  value="/dbunit/payment_method/expected/insert.xml")
	@Test
	public void insert() {
	
		dao.insert( providePaymentMethod( 1, true) );
		
	}
	
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
			  value="/dbunit/payment_method/expected/insert_batch.xml")
	@Test
	public void insertBatch() {
		
		List<PaymentMethod> list = Arrays.asList( providePaymentMethod( 1, true  ),
				 	   							  providePaymentMethod( 2, false ),
				 	   							  providePaymentMethod( 3, true  ) );
		
		dao.insert( list );
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
				   value="/dbunit/payment_method/populate_1.xml")
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
	  			   value="/dbunit/payment_method/expected/update.xml")
	@Test
	public void update() {
		
		dao.update( providePaymentMethod( 1, false) );
		
	}

	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/payment_method/populate_1.xml")
	@Test
	public void searchAllEnabled() {
		
		List<PaymentMethod> list = dao.search( new PaymentMethodSearchEnabledSpecify() );
		
		Assert.assertNotNull( list );
		Assert.assertTrue   ( list.size() == 1 );
		
	}
	
	
	private PaymentMethod providePaymentMethod(int id, boolean enabled) {
		PaymentMethod method = new PaymentMethod();
		method.setId( id );
		method.setEnabled( enabled );
		method.setDescription( "teste" );
		return method;
	}
	
}
