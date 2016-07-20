package br.com.dao.test.jdbc.user.asserts;

import org.junit.Assert;

import br.com.model.entities.user.Address;
import br.com.model.entities.user.User;

public class UserAsserts {

	public static void fullCheckExceptProfiles(User u, User o) {
		
		Assert.assertTrue( u.getEmail().equals(o.getEmail()) );
		Assert.assertTrue( u.getName().equals(o.getName()) );
		Assert.assertTrue( u.getPassword().equals(o.getPassword()) );
		Assert.assertTrue( u.getEnable() == o.getEnable() );
		Assert.assertTrue( u.getReliable() == o.getReliable() );
		
		checkAddress(u.getAddress(), o.getAddress());
	}
	
	private static void checkAddress(Address u, Address o) {
		Assert.assertTrue( u.getComplement().equals(o.getComplement()) );
		Assert.assertTrue( u.getBairro().equals(o.getBairro()) );
		Assert.assertTrue( u.getNumber().equals(o.getNumber()) );
		Assert.assertTrue( u.getStreet().equals(o.getStreet()) );
	}
	
}
