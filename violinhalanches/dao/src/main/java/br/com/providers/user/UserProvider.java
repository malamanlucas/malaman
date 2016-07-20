package br.com.providers.user;

import br.com.comum.converters.ConversorJSON;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.User;
import br.com.model.enums.Profile;
import br.com.providers.EntityProvider;

public class UserProvider extends EntityProvider<User> {
	
	private String key = "93836299";
	
	public String provideKey() {
		return key;
	}
	
	protected User build() {
		User user = new User();
		user.setPhone( key );
		user.setName("Lucas");
		user.setPassword("123456");
		user.setConfirmPassword("123456");
		user.setEmail("malamanlucas@gmail.com");
		user.setReliable(true);
		user.setEnable  (true);
		user.setProfiles( new Profile[] { Profile.USER, Profile.MANAGER } );
		user.setAddress( provideAddress() );
		user.setQuantityPedido(0);
		user.setQuantityCancelled(0);
		user.setQuantityPayed(0);
		return user;
	}
	
	private Address provideAddress() {
		Address address = new Address();
		address.setComplement("Casa");
		address.setNumber("315");
		address.setStreet("Rua Alberto Lotto");
		address.setBairro("Jardim dos Ypês");
		address.setCep("13609253");
		return address;
	}

	public String provideAsJson() {
		User user = build();
		return ConversorJSON.convertToString( user );
	}

}
