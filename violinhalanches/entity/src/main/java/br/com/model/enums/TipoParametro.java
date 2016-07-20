package br.com.model.enums;

public enum TipoParametro {
	ITEM("item"), 
	LANCHE("lanche"),
	USUARIO("usuario");
	
	private TipoParametro(String desc) {
		this.descricao = desc;
	}
	
	private String descricao;
	
	public String getDescricao() {
		return this.descricao;
	}
}
