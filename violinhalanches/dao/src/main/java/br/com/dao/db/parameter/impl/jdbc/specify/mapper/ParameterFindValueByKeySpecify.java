package br.com.dao.db.parameter.impl.jdbc.specify.mapper;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class ParameterFindValueByKeySpecify implements QueryPrimitiveSpecify {

	private Object[] params;

	public ParameterFindValueByKeySpecify(String key) {
		params = new Object[] { key };
	}
	
	@Override
	public String getSql() {
		return "SELECT valor FROM parametro WHERE chave=?";
	}

	@Override
	public Object[] getParameters() {
		return params;
	}

	@Override
	public Class<?> getReturnedType() {
		return String.class;
	}

}
