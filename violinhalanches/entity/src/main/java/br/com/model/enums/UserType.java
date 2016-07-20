package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum UserType {
	
	NOVO     ( "Novo"     , false , "icon_manager-user_new" ),
	CONFIAVEL( "Confiável", true  , "icon_manager-user_trusted" );
	
	private static Map<Boolean,UserType> hash;
	
	static {
		hash = new HashMap<Boolean,UserType>();
		for (UserType t : UserType.values()) {
			hash.put(t.getReliable(), t);
		}
	}
	
	public static UserType fromCode(Boolean reliable) {
		return hash.get( reliable );
	}
	
	private Boolean reliable;
	private String description;
	private String icon;
	
	private UserType(String description, Boolean reliable, String icon) {
		this.reliable    = reliable;
		this.description = description;
		this.icon        = icon;
	}

	public Boolean getReliable() {
		return reliable;
	}

	public String getDescription() {
		return description;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
}
