package br.com.dao.db.categoria.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.categoria.impl.jdbc.rowmapper.CategoriaMapped;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.model.enums.CategoryType;

public class CategorySearchByTypeSpecify implements QueryMapperSpecify {

	private Object[] param;

	public CategorySearchByTypeSpecify(CategoryType type) {
		param = new Object[]{ type.getCode() };
	}
	
	public String getSql() {
		return "SELECT id, nome, descricao, tipo FROM categoria WHERE tipo=? ORDER BY nome";
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new CategoriaMapped();
	}

}
