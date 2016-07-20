package br.com.dao.db.categoria.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.categoria.impl.jdbc.rowmapper.CategoriaMapped;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;

public class CategoryFindByIdSpecify implements QueryMapperSpecify {

	private Object[] param;

	public CategoryFindByIdSpecify(Integer id) {
		param = new Object[]{ id };
	}
	
	public String getSql() {
		return "SELECT id, nome, descricao, tipo FROM categoria WHERE id=?";
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new CategoriaMapped();
	}

}
