package br.com.biblia.core.enums;

import lombok.Getter;

public enum Testamento {

	AMBOS("Ambos", null),
	NOVO("Novo Testamento", Idioma.GREGO),
	VELHO("Velho Testamento", Idioma.HEBRAICO);
	
	@Getter
	private String descricao;
	
	@Getter
	private Idioma idioma;

	private Testamento(String descricao, Idioma idioma) {
		this.descricao = descricao;
		this.idioma = idioma;
	}

	public boolean isNovo() {
		return this == NOVO;
	}
	
	public boolean isVelho() {
		return this == VELHO;
	}
	
}
