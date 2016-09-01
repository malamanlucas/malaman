package br.com.quadrangular.core.enums;

import lombok.Getter;

public enum TipoCategoria {

	PRODUTO("Produto"),
	LANCHE("Lanche");
	
	@Getter
	private String descricao;

	private TipoCategoria(String descricao) {
		this.descricao = descricao;
	}
	
}
