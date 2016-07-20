package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum AddressType {

	ENDERECO_CADASTRADO( "Endereço Cadastrado",  1 ),
	OUTRO_ENDERECO     ( "Outro Endereço"     ,  2 ),
	NOT_SPECIFIED      ( "Nenhum"             ,  3);
	
	private String description;
	private int   code;
	
	private static Map<Integer,AddressType> hash;
	
	static {
		hash = new HashMap<Integer,AddressType>();
		for (AddressType m : AddressType.values()) {
			hash.put(m.getCode(), m);
		}
	}
	
	public static AddressType fromCode(int code) {
		return hash.get(code);
	}
	
	
	private AddressType(String description, int code) {
		this.description = description;
		this.code = code;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getCode() {
		return code;
	}


	public void setCode(int code) {
		this.code = code;
	}

	
}
