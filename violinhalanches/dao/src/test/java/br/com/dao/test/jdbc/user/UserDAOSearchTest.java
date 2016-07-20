package br.com.dao.test.jdbc.user;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.user.UserDAO;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindByPhoneWithoutAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindWithAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserSearchPaginationSpecify;
import br.com.dao.db.user.impl.jdbc.specify.primitive.UserCountByPhoneSpecify;
import br.com.dao.db.user.impl.jdbc.specify.primitive.UserCountSpecify;
import br.com.dao.db.user.impl.jdbc.specify.primitive.UserFindIdByPhoneSpecify;
import br.com.dao.test.jdbc.user.asserts.UserAsserts;
import br.com.model.entities.user.Authority;
import br.com.model.entities.user.User;
import br.com.providers.EntityProviderFactory;
import br.com.providers.user.UserProvider;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

public class UserDAOSearchTest {

	@Resource(name="userJDBC")
	private UserDAO dao;
	
	private UserProvider userProvider;
	
	public UserDAOSearchTest() {
		userProvider = EntityProviderFactory.createUserProvider();
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_1.xml")
	@Test
	public void findWIthAddress() {
	
		String phone      = userProvider.provideKey();
		User userDB       = dao.find( new UserFindWithAddressSpecify(phone) );
		User userOriginal = userProvider.provideEntity();

		UserAsserts.fullCheckExceptProfiles(userDB, userOriginal);
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_7_only_user.xml")
	@Test
	public void searchPagination() {
		List<User> lstUser = null;
		
		lstUser = dao.search( new UserSearchPaginationSpecify(0, 7));
		Assert.assertTrue(lstUser.size() == 7);
		
		lstUser = dao.search( new UserSearchPaginationSpecify(0, 8));
		Assert.assertTrue(lstUser.size() == 7);
		
		lstUser = dao.search( new UserSearchPaginationSpecify(2, 5));
		Assert.assertTrue(lstUser.size() == 5);
		
		lstUser = dao.search( new UserSearchPaginationSpecify(4, 5));
		Assert.assertTrue(lstUser.size() == 3);
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_1.xml")
	@Test
	public void countUsers() {
		
		Integer count = (Integer) dao.find( new UserCountSpecify() );
		
		Assert.assertTrue( count == 1);
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_1.xml")
	@Test
	public void countUsersByPhone() {
		
		Integer count = (Integer) dao.find( new UserCountByPhoneSpecify( "93836299" ) );
		Assert.assertTrue( count == 1);
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_1.xml")
	@Test
	public void searchAuthorities() {
		
		List<Authority> authorities = dao.searchAuthorities( -1 );
		
		Assert.assertNotNull( authorities );
		Assert.assertTrue( authorities.size() == 2 ); 
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_1.xml")
	@Test
	public void findIdByPhone() {
		
		Integer id = (Integer) dao.find( new UserFindIdByPhoneSpecify( userProvider.provideKey() ));
		
		Assert.assertNotNull( id );
	}
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_1.xml")
	@Test
	public void findUserByPhoneWithOutAddress() {
		
		User user = dao.find( new UserFindByPhoneWithoutAddressSpecify(userProvider.provideKey()) );
		
		Assert.assertNotNull( user );
	}
	
	
}
