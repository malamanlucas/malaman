package br.com.biblia.core.enums;

import lombok.Getter;

public enum TipoPerfil {
	
	ROLE_USER("Usuário"),
	ROLE_OPERADOR("Operador"),
	ROLE_GESTOR("Gestor");
	
	@Getter
	private String descricao;

	private TipoPerfil(String descricao) {
		this.descricao = descricao;
	}
	
}
