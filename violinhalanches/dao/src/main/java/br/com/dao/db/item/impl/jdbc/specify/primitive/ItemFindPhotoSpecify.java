package br.com.dao.db.item.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class ItemFindPhotoSpecify implements QueryPrimitiveSpecify {
	
	private Object[] param;

	public ItemFindPhotoSpecify(Integer id) {
		param = new Object[]{ id };
	}
	
	public String getSql() {
		return "SELECT foto FROM item WHERE id=?";
	}

	public Object[] getParameters() {
		return param;
	}

	public Class<?> getReturnedType() {
		return byte[].class;
	}

}
