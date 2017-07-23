package br.com.biblia.enums;

import lombok.Getter;

public enum TipoExpressao {

	DICIONARIO("Dicionário"),
	MAPA("Mapa");
	
	@Getter
	private String descricao;

	private TipoExpressao(String descricao) {
		this.descricao = descricao;
	}
	
}
