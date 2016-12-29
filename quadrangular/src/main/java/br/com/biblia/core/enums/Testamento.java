package br.com.biblia.core.enums;

import lombok.Getter;

public enum Testamento {

	AMBOS("Ambos"),
	NOVO("Novo Testamento"),
	VELHO("Velho Testamento");
	
	@Getter
	private String descricao;

	private Testamento(String descricao) {
		this.descricao = descricao;
	}

	public boolean isNovo() {
		return this == NOVO;
	}
	
	public boolean isVelho() {
		return this == VELHO;
	}
	
}
