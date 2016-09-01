package br.com.quadrangular.core.enums;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;

public enum Idioma {

	HEBRAICO("Hebraico"),
	GREGO("Grego"),
	ARAMAICO("Aramaico");
	
	@Getter
	private String descricao;
	
	private Idioma(String descricao) {
		this.descricao = descricao;
	}
	
	private static Map<String, Idioma> hash;
	
	public static Idioma fromDescricao(String descricao) {
		return hash.get( descricao );
	}
	
	static {
		hash = new HashMap<>();
		for (Idioma idioma : Idioma.values()) {
			hash.put( idioma.getDescricao(), idioma );
		}
	}
	
	
}
