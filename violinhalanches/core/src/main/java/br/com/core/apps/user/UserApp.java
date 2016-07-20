package br.com.core.apps.user;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.model.entities.user.Authority;
import br.com.model.entities.user.User;

@Loggable
public interface UserApp {

	void requestRegister(User user);
	
	User register(User user);
	
	User register(String userAsJson);
	
	void delete(Integer id);
	
	void update(User user);
	
	void updateAll(User user);
	
	User findWithAddress(String phone);
	
	List<Authority> searchRolesById(Integer id);
	
	void requestChangeEmail(String name, String email);
	
	void changePassword(String newPassword, String confirmPassword, String oldPassword, User user);
	
	List<User> searchPagination(Integer start, Integer qtd);
	
	Integer countUser();
	
	User find(Integer id);
	
	User find(String phone);
	
	boolean userExists(String phone);
	
}
