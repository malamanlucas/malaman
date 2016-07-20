package br.com.dao.db.user.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class UserCountSpecify implements QueryPrimitiveSpecify {

	public String getSql() {
		return "SELECT count(0) FROM usuario";
	}

	public Object[] getParameters() {
		return null;
	}

	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
