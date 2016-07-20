package br.com.dao.db.item.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class ItemCountSpecify implements QueryPrimitiveSpecify {

	@Override
	public String getSql() {
		return "SELECT COUNT(0) FROM item";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
