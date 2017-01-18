package br.com.biblia.core.enums;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

import lombok.Getter;

@JsonFormat(shape=Shape.OBJECT)
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
