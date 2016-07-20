package br.com.dao.db.produto.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.produto.impl.jdbc.rowmappers.ProdutoMapped;

public class ProductFindByNameSpecify implements QueryMapperSpecify {

	private Object[] param;

	public ProductFindByNameSpecify(String name, Integer tipo) {
		param = new Object[]{ name, tipo };
	}
	
	public String getSql() {
		return "SELECT id, nome, valor, tipo, categoria, descricao, habilitado FROM produto WHERE nome=? AND tipo = ?";
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new ProdutoMapped();
	}

}
