package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum ProductType {
	
	PAO_MATA_FOME ("pão mata fome"    ,1,"MF"),
	PAO_HAMBURGUER("pão de hamburguer",2,"PH"),
	PRODUCT       ("produto"          ,3,"");
	
	public static ProductType getFromDescription(String description) {
		return hash.get(description);
	}
	
	private static Map<Integer,ProductType> hash;
	
	static {
		hash = new HashMap<Integer,ProductType>();
		for (ProductType p : ProductType.values()) {
			hash.put(p.getCode(), p);
		}
	}
	
	public static ProductType fromCode(Integer code) {
		return hash.get(code);
	}
	
	private String description;
	private Integer code;
	private String acronym;
	
	private ProductType(String description, Integer code, String acronym) {
		this.description = description;
		this.code        = code;
		this.acronym     = acronym;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getAcronym() {
		return acronym;
	}

	public void setAcronym(String acronym) {
		this.acronym = acronym;
	}
	
	
}
