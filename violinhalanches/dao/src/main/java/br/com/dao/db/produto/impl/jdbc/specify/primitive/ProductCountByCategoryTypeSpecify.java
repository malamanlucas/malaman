package br.com.dao.db.produto.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;
import br.com.model.enums.CategoryType;

public class ProductCountByCategoryTypeSpecify implements QueryPrimitiveSpecify {

	private static final String QUERY_BYCATEGORIA_COUNT = 
			"SELECT count(0) FROM produto p "+
			"INNER JOIN categoria c  ON (p.categoria = c.id) "+
			"WHERE c.tipo = ?";
	
	private Object[] param;

	public ProductCountByCategoryTypeSpecify(CategoryType categoryType) {
		param = new Object[]{ categoryType.getCode() };
	}
	
	public String getSql() {
		return QUERY_BYCATEGORIA_COUNT;
	}

	public Object[] getParameters() {
		return param;
	}

	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
