package br.com.dao.db.user.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class UserFindDuplicateDataSpecify implements QueryPrimitiveSpecify {

	private Object[] param;

	public UserFindDuplicateDataSpecify(String phone, String email) {
		param = new Object[]{ phone, email};
	}
	
	public String getSql() {
		return "SELECT count(0) FROM usuario WHERE telefone=? OR email=?";
	}

	public Object[] getParameters() {
		return param;
	}

	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
