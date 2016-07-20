package br.com.dao.db.categoria.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class CategoryFindPhotoSpecify implements QueryPrimitiveSpecify {

	private Object[] param;

	public CategoryFindPhotoSpecify(Integer id) {
		param = new Object[]{ id };
	}
	
	public String getSql() {
		return "SELECT foto FROM categoria WHERE id=?";
	}

	public Object[] getParameters() {
		return param;
	}

	public Class<?> getReturnedType() {
		return byte[].class;
	}

}
