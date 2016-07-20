package br.com.core.apps.address;

import javax.validation.Valid;

import br.com.comum.log.Loggable;
import br.com.model.entities.user.Address;

@Loggable
public interface AddressApp {
	
	Address save(Address address);
	
	void validate(Address address);

	Address findByUserId(Integer id);
	
}
