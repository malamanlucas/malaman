package br.com.dao.db.user.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class UserFindIdByPhoneSpecify implements QueryPrimitiveSpecify {

	private Object[] params;

	public UserFindIdByPhoneSpecify(String phone) {
		params = new Object[] { phone };
	}
	
	@Override
	public String getSql() {
		return "SELECT id FROM usuario WHERE telefone=?";
	}

	@Override
	public Object[] getParameters() {
		return params;
	}

	@Override
	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
