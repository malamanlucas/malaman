package br.com.core.test.apps.user;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

import br.com.core.apps.user.UserApp;
import br.com.model.entities.user.Authority;

public class UserAppSearchTest {

	@Resource(name="userFacade")
	private UserApp app;
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_1.xml")
	@Test
	public void countUser() {
		
		Integer count = app.countUser();
		
		Assert.assertTrue( count == 1 );
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,	value="/dbunit/user/populate_1.xml")
	@Test
	public void searchRolesById() {
		
		List<Authority> authorities = app.searchRolesById( -1 );
		
		Assert.assertNotNull( authorities );
		Assert.assertTrue   ( authorities.size() == 2 );
		
	}
	
}
