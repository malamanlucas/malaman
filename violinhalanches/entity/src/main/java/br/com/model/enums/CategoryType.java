package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum CategoryType {

	LANCHE("Lanche", 1, "lunch"), PRODUTO("Produtos e Bebidas", 2, "products");

	private static Map<Integer, CategoryType> hash;

	static {
		hash = new HashMap<Integer, CategoryType>();
		for (CategoryType t : CategoryType.values()) {
			hash.put(t.getCode(), t);
		}
	}

	public static CategoryType fromCode(Integer code) {
		return hash.get(code);
	}

	private int code;
	private String description;
	private String icon;

	private CategoryType(String description, int code, String icon) {
		this.description = description;
		this.code = code;
		this.icon = icon;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String descricao) {
		this.description = descricao;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
	

}
