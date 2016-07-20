package br.com.dao.db.pedido.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class PedidoCountLinkedByUserPhoneSpecify implements QueryPrimitiveSpecify {

	private Object[] params;

	public PedidoCountLinkedByUserPhoneSpecify(String phone) {
		params = new Object[] { phone };
	}

	@Override
	public String getSql() {
		return "SELECT count(0) FROM pedido WHERE user_logged = ?";
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
