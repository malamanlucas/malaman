package br.com.dao.db.pedido.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class PedidoCountLinkedByUserIdSpecify implements QueryPrimitiveSpecify {

	private static final String SQL = 
			"SELECT count(0) FROM pedido WHERE user_logged = (SELECT telefone FROM usuario WHERE id=?)";
	
	private Object[] params;

	public PedidoCountLinkedByUserIdSpecify(Integer id) {
		params = new Object[] { id };
	}

	@Override
	public String getSql() {
		return SQL;
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
