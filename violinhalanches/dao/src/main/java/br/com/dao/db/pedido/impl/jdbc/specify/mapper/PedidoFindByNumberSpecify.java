package br.com.dao.db.pedido.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.pedido.impl.jdbc.rowmapper.PedidoMapper;

public class PedidoFindByNumberSpecify implements QueryMapperSpecify {

	private Object[] params;

	public PedidoFindByNumberSpecify(Long number) {
		params = new Object[] { number };
	}
	
	@Override
	public String getSql() {
		return "SELECT * FROM pedido WHERE id = ?";
	}

	@Override
	public Object[] getParameters() {
		return params;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new PedidoMapper();
	}

}
