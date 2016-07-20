package br.com.dao.db.categoria.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.categoria.impl.jdbc.rowmapper.CategoriaMapped;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;

public class CategorySearchPaginationSpecify implements QueryMapperSpecify {

	private Object[] param;

	public CategorySearchPaginationSpecify(Integer start, Integer amount) {
		param = new Object[]{ start, amount };
	}
	
	public String getSql() {
		return "SELECT id, nome, descricao, tipo FROM categoria ORDER BY nome OFFSET ? LIMIT ? ";
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new CategoriaMapped();
	}

}
