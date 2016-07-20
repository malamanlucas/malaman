package br.com.providers.user;

import br.com.model.entities.user.Address;
import br.com.providers.EntityProvider;

public class AddressProvider extends EntityProvider<Address>{
	
	private final Integer id = -1;
	
	public Integer provideKey() {
		return id;
	}
	
	@Override
	protected Address build() {
		Address address = new Address();
		address.setComplement( "Casa" );
		address.setNumber( "315" );
		address.setStreet("Rua Alberto Lotto");
		address.setCep( "13609253" );
		address.setBairro( "Jardim dos Ypês" );
		return address;
	}

}
