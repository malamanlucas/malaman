package br.com.dao.db.categoria.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;
import br.com.model.enums.CategoryType;

public class CategoryCountByTypeSpecify implements QueryPrimitiveSpecify {

	private Object[] param;

	public CategoryCountByTypeSpecify(CategoryType tipo) {
		param = new Object[]{ tipo.getCode() };
	}
	
	public String getSql() {
		return "SELECT count(0) FROM categoria WHERE tipo=?";
	}

	public Object[] getParameters() {
		return param;
	}

	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
