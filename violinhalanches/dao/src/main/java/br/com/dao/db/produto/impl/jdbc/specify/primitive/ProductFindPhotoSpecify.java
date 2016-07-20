package br.com.dao.db.produto.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class ProductFindPhotoSpecify implements QueryPrimitiveSpecify {

	private Object[] param;

	public ProductFindPhotoSpecify(Integer id) {
		param = new Object[]{id};
	}
	
	public String getSql() {
		return "SELECT foto FROM produto WHERE id=?";
	}

	public Object[] getParameters() {
		return param;
	}

	@Override
	public Class<?> getReturnedType() {
		return byte[].class;
	}

}
