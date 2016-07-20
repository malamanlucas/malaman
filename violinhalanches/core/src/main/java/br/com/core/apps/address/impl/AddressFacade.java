package br.com.core.apps.address.impl;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.address.AddressApp;
import br.com.dao.db.user.UserDAO;
import br.com.model.entities.user.Address;

@Scope("prototype")
@Service("addressFacade")
@Transactional(readOnly=false)
public class AddressFacade implements AddressApp {

	@Resource(name="userJDBC")
	private UserDAO userDAO;
	
	public Address save(@Valid Address address) {
		try {
			if (address.getId() != null) {
				userDAO.updateAddress( address );
			} else {
				address = userDAO.insertAddress( address );
			}
			return address;
		} catch (DataIntegrityViolationException e) {
			throw new RuntimeException( "Não existe um usuario com o id: "+address.getUserId() );
		}
	}

	@Transactional(readOnly=true)
	public Address findByUserId(Integer id) {
		return userDAO.findAdressById( id );
	}

	@Override
	public void validate(@Valid Address address) {}


}
