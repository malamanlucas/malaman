package br.com.dao.db.pedido.impl.jdbc;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.pedido.PedidoDAO;
import br.com.model.entities.user.Pedido;

@Scope(value="prototype", proxyMode=ScopedProxyMode.TARGET_CLASS)
@Repository("pedidoJDBC")
public class PedidoJDBCImpl extends GenericDAO<Pedido> implements PedidoDAO {

	private static final String INSERT = 
			"INSERT INTO pedido(dt_hora_emissao, dt_hora_last_status, preco, troco, itens, " +
			"status_pedido, status_pagamento, user_logged, pagamento, recebimento, endereco, url_pagamento, carregado_dashboard, preco_entrega, entregar) VALUES" +
			"(:dateHourEmission, :lastDateHourStatus, :price, :troco, :itensAsJSON, :statusPedidoAsCode, :statusPagamentoAsCode," +
			" :userLogged, :paymentAsCode, :receiverAsCode, :addressAsJSON, :paymentUrl, :loadedDashboard, :deliveryPrice, :entregar) ";
	
	private static final String UPDATE =
			"UPDATE pedido SET dt_hora_emissao=:dateHourEmission, dt_hora_last_status=:lastDateHourStatus, preco=:price,"
		  + "troco=:troco, itens=:itensAsJSON, status_pedido=:statusPedidoAsCode, status_pagamento=:statusPagamentoAsCode,"
		  + "user_logged=:userLogged, pagamento=:paymentAsCode, recebimento=:receiverAsCode, "
		  + "endereco=:addressAsJSON, url_pagamento=:paymentUrl, carregado_dashboard=:loadedDashboard, "
		  + "preco_entrega=:deliveryPrice, entregar=:entregar "
		  + "WHERE id=:number";
	
	private static final String UPDATE_STATUS =
			"UPDATE pedido SET dt_hora_last_status=:lastDateHourStatus, status_pedido=:statusPedidoAsCode, status_pagamento=:statusPagamentoAsCode "
		  + "WHERE id=:number";
	
	private static final String UPDATE_CARREGADO_DASHBOARD = 
			"UPDATE pedido SET carregado_dashboard=:loadedDashboard WHERE id=:number";
	
	@Override
	public Pedido insert(Pedido t) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		
		npJdbcTemplate.update(INSERT, new BeanPropertySqlParameterSource(t), keyHolder, new String[]{"id"} );
		
		t.setNumber( extractGeneratedKey(keyHolder).longValue() );
		return t;
	}

	@Override
	public void update(Pedido t) {
		npJdbcTemplate.update(UPDATE, new BeanPropertySqlParameterSource(t) );
	}

	@Override
	public void delete(Long k) {
		// TODO Auto-generated method stub
	}

	@Override
	public void updateStatus(Pedido pedido) {
		npJdbcTemplate.update(UPDATE_STATUS, new BeanPropertySqlParameterSource(pedido) );
	}

	@Override
	public void updateLoadedDashboard(List<Pedido> pedidos) {
		batchUpdate( pedidos, UPDATE_CARREGADO_DASHBOARD );
	}

}
