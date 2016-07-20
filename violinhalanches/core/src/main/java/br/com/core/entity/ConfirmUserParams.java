package br.com.core.entity;

import br.com.comum.config.ConfigProperties;
import br.com.comum.converters.ConversorJSON;
import br.com.model.entities.user.User;

public class ConfirmUserParams {

	private User user;
	
	public ConfirmUserParams(User user) {
		this.user = user;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getUrl() {
		return ConfigProperties.getURL("/user/off/save");
	}

	public String getUserAsJson() {
		return ConversorJSON.convertToString(user).replaceAll("\"", "'");
	}
	
}
