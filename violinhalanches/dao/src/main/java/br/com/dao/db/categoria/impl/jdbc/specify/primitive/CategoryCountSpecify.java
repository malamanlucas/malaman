package br.com.dao.db.categoria.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class CategoryCountSpecify implements QueryPrimitiveSpecify {

	public String getSql() {
		return "SELECT count(0) FROM categoria";
	}

	public Object[] getParameters() {
		return null;
	}

	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
