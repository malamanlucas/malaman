package br.com.dao.db.item.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class ItemCountByProductIdSpecify implements QueryPrimitiveSpecify {

	private Object[] params;
	
	private static final String QUERY = "SELECT SUM(qtd) FROM item i "
				+ "INNER JOIN item_produto ip ON (ip.item = i.id AND ip.produto = ?) ";

	public ItemCountByProductIdSpecify(Integer id) {
		params = new Object[]{ id };
	}
	
	public String getSql() {
		return QUERY;
	}

	public Object[] getParameters() {
		return params;
	}

	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
