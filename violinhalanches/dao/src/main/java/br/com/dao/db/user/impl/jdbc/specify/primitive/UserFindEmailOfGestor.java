package br.com.dao.db.user.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class UserFindEmailOfGestor implements QueryPrimitiveSpecify {

	private static final String sql = 
			"SELECT email FROM usuario WHERE telefone = 'gestor'";

	@Override
	public String getSql() {
		return sql;
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public Class<?> getReturnedType() {
		return String.class;
	}

}
