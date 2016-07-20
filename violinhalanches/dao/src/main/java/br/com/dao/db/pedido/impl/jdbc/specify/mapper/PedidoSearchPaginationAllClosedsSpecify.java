package br.com.dao.db.pedido.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.pedido.impl.jdbc.rowmapper.PedidoMapper;
import br.com.model.enums.StatusPedido;

public class PedidoSearchPaginationAllClosedsSpecify implements QueryMapperSpecify {
	
	private Object[] param;
	
	public PedidoSearchPaginationAllClosedsSpecify(Integer start, Integer qtd) {
		param = new Object[] {StatusPedido.ENTREGUE.getCode(), StatusPedido.NAO_ENTREGUE.getCode(), start, qtd};
	}
	
	@Override
	public String getSql() {
		return "SELECT * FROM pedido WHERE carregado_dashboard = false AND NOT status_pedido IN(?,?) ORDER BY dt_hora_emissao DESC OFFSET ? LIMIT ?";
	}

	@Override
	public Object[] getParameters() {
		return param;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new PedidoMapper();
	}

}
