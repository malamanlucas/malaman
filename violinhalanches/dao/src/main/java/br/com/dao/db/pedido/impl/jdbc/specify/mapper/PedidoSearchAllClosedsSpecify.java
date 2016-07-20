package br.com.dao.db.pedido.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.pedido.impl.jdbc.rowmapper.PedidoMapper;
import br.com.model.enums.StatusPedido;

public class PedidoSearchAllClosedsSpecify implements QueryMapperSpecify {
	
	@Override
	public String getSql() {
		return "SELECT * FROM pedido WHERE NOT status_pedido IN(?,?) ORDER BY dt_hora_emissao DESC";
	}

	@Override
	public Object[] getParameters() {
		return new Object[]{ StatusPedido.ENTREGUE.getCode(), StatusPedido.NAO_ENTREGUE.getCode() };
	}

	@Override
	public RowMapper<?> getMapper() {
		return new PedidoMapper();
	}

}
