package br.com.core.test.apps.address;

import javax.annotation.Resource;

import org.junit.Ignore;
import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

import br.com.core.apps.address.AddressApp;
import br.com.model.entities.user.Address;
import br.com.model.exception.SystemException;
import br.com.providers.EntityProviderFactory;
import br.com.providers.user.AddressProvider;

public class AddressAppPersistenceTest {

	@Resource(name="addressFacade")
	private AddressApp app;
	
	private AddressProvider addressProvider;
	
	public AddressAppPersistenceTest() {
		addressProvider = EntityProviderFactory.createAddressProvider();
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/user/populate_1_without_address.xml")
	@Test
	public void insert() {
		Address address = addressProvider.provideEntity();
		address.setUserId(-1);
		app.save(address);
	}
	
	@Test(expected=SystemException.class)
	public void insertWithUserNotExisting() {
		Address address = addressProvider.provideEntity();
		address.setUserId(-1);
		app.save(address);
	}
	
	@Ignore
	@Test(expected=SystemException.class)
	public void insertWithCEPInvalid() {
		Address address = addressProvider.provideEntity();
		address.setId( -1 );
		app.save(address);
	}
	
	@Ignore
	@Test(expected=SystemException.class)
	public void insertWithCEPValidButNotAllowed() {
		Address address = addressProvider.provideEntity();
		address.setId( -1 );
		app.save(address);
	}
	
}
