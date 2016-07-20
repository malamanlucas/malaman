package br.com.dao.db.produto.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.produto.impl.jdbc.rowmappers.ProdutoMapped;

public class ProductSearchByCategoryIdSpecify implements QueryMapperSpecify {

	private static final String QUERY = 
				"SELECT id, nome, descricao, valor, categoria, tipo, habilitado FROM produto WHERE habilitado=true AND categoria=? ORDER BY nome";
	private Object[] param;
	
	public ProductSearchByCategoryIdSpecify(Integer id) {
		param = new Object[]{ id };
	}
	
	public String getSql() {
		return QUERY;
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new ProdutoMapped();
	}

}
