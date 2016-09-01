package br.com.quadrangular.core.enums;

import lombok.Getter;

public enum Testamento {

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
	
}