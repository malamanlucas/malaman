package br.com.dao.db.user.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class UserCountByPhoneSpecify implements QueryPrimitiveSpecify {

	private Object[] params;
	
	public UserCountByPhoneSpecify(String phone) {
		params = new Object[]{ phone };
	}

	public String getSql() {
		return "SELECT count(0) FROM usuario WHERE telefone=?";
	}

	public Object[] getParameters() {
		return params;
	}

	public Class<?> getReturnedType() {
		return Integer.class;
	}

	
	
}
