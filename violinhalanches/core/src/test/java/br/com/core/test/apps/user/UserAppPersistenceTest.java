package br.com.core.test.apps.user;

import javax.annotation.Resource;

import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

import br.com.core.apps.user.UserApp;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.User;
import br.com.model.enums.Profile;
import br.com.providers.EntityModifier;
import br.com.providers.EntityProviderFactory;
import br.com.providers.user.UserProvider;

public class UserAppPersistenceTest {

	@Resource(name="userFacade")
	private UserApp app;
	
	private UserProvider userProvider;

	public UserAppPersistenceTest() {
		userProvider = EntityProviderFactory.createUserProvider();
	}
	
	@Test
	public void registerAsObject() {
		
		User user = userProvider.provideEntity();
		user = app.register( user );
		app.delete( user.getId() );
	}
	
	@Test
	public void registerAsJson() {
		
		String userAsJson = userProvider.provideAsJson();
		User user = app.register( userAsJson );
		
		app.delete( user.getId() );
	}
	
	@Test
	public void changeEmail() {
		User user = new User();
		user.setId( -1 );
		user.setEmail( "malamanlucas@hotmail.com" );
		app.update(user);
	}
	
	@Test
	public void changePassword() {
		User user = new User();
		user.setId( -1 );
		user.setPassword("123456");
		user.encriptPassword();
		
		app.changePassword("1236789", "1236789", "123456", user);
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/user/populate_1.xml", type = DatabaseOperation.INSERT)
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
							address.setBairro("Jardim dos Ypês1");
							address.setCep("13609253");
							address.setComplement( "Casa1" );
							
							return user;
						}
					});
		
		app.updateAll( user );
		
	}
	
}
