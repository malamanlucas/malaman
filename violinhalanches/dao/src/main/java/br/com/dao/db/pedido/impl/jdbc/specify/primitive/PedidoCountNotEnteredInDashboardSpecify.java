package br.com.dao.db.pedido.impl.jdbc.specify.primitive;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class PedidoCountNotEnteredInDashboardSpecify implements QueryPrimitiveSpecify {

	@Override
	public String getSql() {
		return "SELECT count(0) FROM pedido WHERE carregado_dashboard = false";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public Class<?> getReturnedType() {
		return Integer.class;
	}


}
