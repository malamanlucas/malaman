package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum Profile {

	USER("ROLE_USUARIO"),
	MANAGER("ROLE_GESTOR"),
	OPERATOR("ROLE_OPERADOR");
	
	private static Map<String, Profile> hash;
	
	static {
		hash = new HashMap<>();
		for (Profile p : Profile.values()) {
			hash.put( p.getDescription(), p);
		}
	}
	
	public static Profile fromCode(String code) {
		return hash.get( code );
	}
	
	
	private Profile(String description) {
		this.description = description;
	}
	
	private String description;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
