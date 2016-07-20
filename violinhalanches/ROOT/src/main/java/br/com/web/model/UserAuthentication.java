package br.com.web.model;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import br.com.model.entities.user.User;

public class UserAuthentication extends UsernamePasswordAuthenticationToken {

	private static final long serialVersionUID = 1L;

	public UserAuthentication(Object principal, Object credentials) {
		super(principal, credentials);
	}
	
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
