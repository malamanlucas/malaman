package br.com.model.enums;

public enum DAOName {

	CATEGORIA("categoriaJDBC"),
	ITEM("itemJDBC"),
	PRODUTO("produtoJDBC"),
	NOVIDADE("novidadeJDBC"), 
	PEDIDO("pedidoJDBC");
	
	private String name;
	
	private DAOName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
