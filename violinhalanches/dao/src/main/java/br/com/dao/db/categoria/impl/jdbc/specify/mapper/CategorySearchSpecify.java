package br.com.dao.db.categoria.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.categoria.impl.jdbc.rowmapper.CategoriaMapped;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;

public class CategorySearchSpecify implements QueryMapperSpecify {

	@Override
	public String getSql() {
		return "SELECT id, nome, descricao, tipo FROM categoria ORDER BY nome";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new CategoriaMapped();
	}

}
