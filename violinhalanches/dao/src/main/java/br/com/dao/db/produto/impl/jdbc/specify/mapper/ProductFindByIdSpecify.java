package br.com.dao.db.produto.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.produto.impl.jdbc.rowmappers.ProdutoMapped;

public class ProductFindByIdSpecify implements QueryMapperSpecify {

	private Object[] param;

	public ProductFindByIdSpecify(Integer id) {
		param = new Object[]{id};
	}
	
	public String getSql() {
		return "SELECT id, nome, valor, tipo, categoria, descricao, habilitado FROM produto WHERE id=?";
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new ProdutoMapped();
	}

}
