package br.com.dao.db.pedido.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.pedido.impl.jdbc.rowmapper.PedidoMapper;

public class PedidoSearchAllSpecify implements QueryMapperSpecify {
	
	@Override
	public String getSql() {
		return "SELECT * FROM pedido ORDER BY dt_hora_emissao DESC";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new PedidoMapper();
	}

}
