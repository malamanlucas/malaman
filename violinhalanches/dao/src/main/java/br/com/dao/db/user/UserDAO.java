package br.com.dao.db.user;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.Authority;
import br.com.model.entities.user.User;

@Loggable
public interface UserDAO extends DAO<User, Integer>{

	Address insertAddress(Address address);
	
	void updateAddress(Address address);
	
	Address findAdressById(Integer id);
	
	void updateAll(User user);
	
	List<Authority> searchAuthorities(Integer id);
	
}
