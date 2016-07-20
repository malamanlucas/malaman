package br.com.model.entities.user;

import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority  {

	private static final long serialVersionUID = 1L;

	public Authority(String authority) {
		this.authority = authority;
	}
	
	private String authority;
	
	@Override
	public String getAuthority() {
		return authority;
	}

	@Override
	public String toString() {
		return "Authority [authority=" + authority + "]";
	}
	

}
