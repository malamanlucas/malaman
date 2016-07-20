package br.com.dao.db.produto.impl.jdbc.relations;

import br.com.model.enums.ProductType;

public class ProdutoCategoriaRelated {

	private Integer categoriaId;
	private ProductType tipo;
	
	public Integer getCategoriaId() {
		return categoriaId;
	}
	public void setCategoriaId(Integer categoriaId) {
		this.categoriaId = categoriaId;
	}
	public ProductType getTipo() {
		return tipo;
	}
	public void setTipo(ProductType tipo) {
		this.tipo = tipo;
	}
}
