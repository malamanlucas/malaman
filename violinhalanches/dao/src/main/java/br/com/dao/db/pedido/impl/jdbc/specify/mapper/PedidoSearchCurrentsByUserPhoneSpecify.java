package br.com.dao.db.pedido.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.pedido.impl.jdbc.rowmapper.PedidoMapper;

public class PedidoSearchCurrentsByUserPhoneSpecify implements QueryMapperSpecify {

	private Object[] params;

	public PedidoSearchCurrentsByUserPhoneSpecify(String phone) {
		params = new Object[] { phone };
	}
	
	@Override
	public String getSql() {
		return "SELECT * FROM pedido WHERE user_logged = ? ORDER BY dt_hora_emissao DESC";
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
