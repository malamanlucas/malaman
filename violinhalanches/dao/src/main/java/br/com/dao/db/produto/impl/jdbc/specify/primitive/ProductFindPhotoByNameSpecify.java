package br.com.dao.db.produto.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class ProductFindPhotoByNameSpecify implements QueryPrimitiveSpecify {

	private Object[] param;

	public ProductFindPhotoByNameSpecify(String name, Integer type) {
		param = new Object[]{ name, type };
	}
	
	public String getSql() {
		return "SELECT foto FROM produto WHERE nome=? AND tipo=?";
	}

	public Object[] getParameters() {
		return param;
	}

	@Override
	public Class<?> getReturnedType() {
		return byte[].class;
	}

}
