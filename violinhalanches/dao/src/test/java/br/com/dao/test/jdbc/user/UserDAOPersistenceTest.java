package br.com.dao.test.jdbc.user;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;
import com.google.common.base.Preconditions;

import br.com.dao.db.user.UserDAO;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.User;
import br.com.model.enums.Profile;
import br.com.providers.EntityModifier;
import br.com.providers.EntityProviderFactory;
import br.com.providers.user.AddressProvider;
import br.com.providers.user.UserProvider;

public class UserDAOPersistenceTest {
	
	@Resource(name="userJDBC")
	private UserDAO userDAO;
	
	private UserProvider    userProvider;
	private AddressProvider addressProvider;
	
	public UserDAOPersistenceTest() {
		userProvider    = EntityProviderFactory.createUserProvider();
		addressProvider = EntityProviderFactory.createAddressProvider();
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/user/expected/insert.xml")
	public void insert() {
		User user = userProvider.provideEntity();
		user = userDAO.insert(user);
		Assert.assertNotNull( user.getId() );
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/user/expected/update_all.xml")
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	public void updateAllDataAvaiable() {
		User user = userProvider.provideEntity();
		user.setId(-1);
		user.setReliable(false);
		user.setEmail("malamanlucas@hotmail.com1");
		user.setEnable(false);
		user.setName("Lucas Malaman1");
		user.setPassword("12341");
		user.setPhone("354266241");
		
		userDAO.update(user);
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/user/expected/update_password.xml")
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	public void updateOnlyPassword() {
		User user = new User(); 
		user.setId( -1 );
		user.setPassword("1234");
		userDAO.update(user);
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/user/expected/update_email.xml")
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	public void updateOnlyEmail() {
		User user = new User(); 
		user.setId( -1 );
		user.setEmail("malamanlucas@hotmail.com");
		userDAO.update(user);
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/user/expected/update_reliable.xml")
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	public void updateOnlyReliable() {
		User user = new User(); 
		user.setId( -1 );
		user.setReliable( false );
		userDAO.update(user);
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/user/expected/update_enable.xml")
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	public void updateOnlyEnable() {
		User user = new User(); 
		user.setId( -1 );
		user.setEnable( false );
		userDAO.update(user);
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/user/expected/insert_address.xml")
	@DatabaseSetup(value={"/dbunit/user/populate_1_without_address.xml"}, type = DatabaseOperation.CLEAN_INSERT)
	public void insertAddress() {
		
		Address address = addressProvider.provideEntity();
		address.setUserId( -1 );
		
		Address insertAddress = userDAO.insertAddress( address );
		
		Preconditions.checkNotNull( insertAddress.getId() );
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/user/expected/update_address.xml")
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	public void updateAddress() {
		Address address = addressProvider.provideEntity( new EntityModifier<Address>() {
			public Address modifier(Address t) {
				t.setComplement( t.getComplement()+"1" );
				t.setNumber( t.getNumber()+"1" );
				t.setStreet( t.getStreet()+"1" );
				t.setBairro( t.getBairro()+"1" );
				t.setCep   ( t.getCep() );
				return t;
			}
		});
		address.setUserId( -1 );
		
		userDAO.updateAddress( address );
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(value="/dbunit/user/expected/update_all_remove_roles.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void updateAllRemoveAllRoles() {
		
		User user = userProvider.provideEntity( new EntityModifier<User>() {
						public User modifier(User user) {
							user.setId( -1 );
							user.setPhone   ("938362991");
							user.setName    ("Lucas1");
							user.setPassword("1234561");
							user.setEmail   ("malamanlucas@gmail.com1");
							user.setReliable( false );
							user.setEnable  ( false );
							user.setProfiles( new Profile[]{} );
							
							Address address = user.getAddress();
							address.setUserId( user.getId() );
							address.setStreet( "Rua Alberto Lotto1" );
							address.setNumber( "3151" );
							address.setComplement( "Casa1" );
							
							return user;
						}
					});
		
		userDAO.updateAll(user);
		
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(value="/dbunit/user/expected/update_all_change_roles.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void updateAll() {
		
		User user = userProvider.provideEntity( new EntityModifier<User>() {
						public User modifier(User user) {
							user.setId( -1 );
							user.setPhone   ("354266241");
							user.setName    ("Lucas Malaman1");
							user.setPassword("12341");
							user.setEmail   ("malamanlucas@gmail.com1");
							user.setReliable( false );
							user.setEnable  ( false );
							user.addProfiles( Profile.OPERATOR );
							
							Address address = user.getAddress();
							address.setUserId( user.getId() );
							address.setStreet( "Rua Alberto Lotto1" );
							address.setNumber( "3151" );
							address.setComplement( "Casa1" );
							address.setBairro("Jardim dos Ypês");
							address.setCep("13609253");
							
							return user;
						}
					});
		
		userDAO.updateAll(user);
		
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(value="/dbunit/user/expected/delete.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void delete() {
		userDAO.delete( -1 );
	}
	
}
