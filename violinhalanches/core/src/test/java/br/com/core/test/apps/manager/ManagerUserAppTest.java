package br.com.core.test.apps.manager;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import br.com.core.apps.manager.ManagerUserApp;
import br.com.model.entities.manager.PaymentMethod;
import br.com.model.entities.manager.ReceiverMethod;
import br.com.model.exception.SystemException;
import br.com.providers.EntityProviderFactory;
import br.com.providers.user.UserProvider;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

public class ManagerUserAppTest {

	@Resource(name="managerUserFacade")
	private ManagerUserApp app;
	
	private UserProvider userProvider;
	
	public ManagerUserAppTest() {
		userProvider = EntityProviderFactory.createUserProvider();
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/payment_method/populate_1.xml")
	@Test
	public void updatePaymentMethod() {
		
		PaymentMethod method = new PaymentMethod();
		method.setId( 1 );
		method.setEnabled( false );
		app.update(method);
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/receiver_method/populate_1.xml")
	@Test
	public void updateReceiverMethod() {
		
		ReceiverMethod method = new ReceiverMethod();
		method.setId( 1 );
		method.setEnabled( false );
		app.update(method);
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/receiver_method/populate_1.xml")
	@Test
	public void searchReceiverMethodsEnabled() {
		
		List<ReceiverMethod> list = app.searchReceiverMethodsEnabled();
		Assert.assertNotNull( list );
		Assert.assertTrue( list.size() == 1);
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/payment_method/populate_1.xml")
	@Test
	public void searchPaymentMethodsEnabled() {
		
		List<PaymentMethod> list = app.searchPaymentMethodsEnabled();
		Assert.assertNotNull( list );
		Assert.assertTrue( list.size() == 1);
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
			value={"/dbunit/user/populate_1_block.xml", "/dbunit/user/populate_1_gestor.xml"})
	@Test
	@Ignore
	public void requestUnblock() {
		app.requestUnblock( userProvider.provideKey() );
	}
	
	@Test(expected=SystemException.class)
	public void requestUnblockWhenPhoneNotExists() {
		app.requestUnblock( userProvider.provideKey() );
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/user/populate_1.xml")
	@Test(expected=SystemException.class)
	public void requestUnblockWhenPhoneIsNotBlocked() {
		app.requestUnblock( userProvider.provideKey() );
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, 
			value={"/dbunit/user/populate_1_block.xml"})
	@Test
	public void unblock() {
		app.unblock( userProvider.provideKey() );
	}
	
}
