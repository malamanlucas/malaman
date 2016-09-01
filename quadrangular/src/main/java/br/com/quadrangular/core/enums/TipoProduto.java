package br.com.quadrangular.core.enums;

import lombok.Getter;

public enum TipoProduto {

	PAO_MATA_FOME("Pão Mata Fome"),
	PAO_HAMBURGUER("Pão de Hamburguer"), 
	PRODUTO("Produto");
	
	@Getter
	private String descricao;

	private TipoProduto(String descricao) {
		this.descricao = descricao;
	}
	
	public boolean isProduto() {
		return this.equals(PRODUTO);
	}

	
}
