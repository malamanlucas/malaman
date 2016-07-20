package br.com.dao.db.user.impl.jdbc.relations;

public class UserProfile {
	
	public UserProfile(String role, Integer user) {
		this.role = role;
		this.user = user;
	}
	
	private String role;
	private Integer user;
	
	public Integer getUser() {
		return user;
	}

	public String getRole() {
		return role;
	}
	
}