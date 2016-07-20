package br.com.dao.db.pedido.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.user.Pedido;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.MeioRecebimento;
import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;

public class PedidoMapper implements RowMapper<Pedido> {

	@Override
	public Pedido mapRow(ResultSet rs, int rowNum) throws SQLException {
		Pedido pedido = new Pedido();
		
		pedido.setNumber            ( rs.getLong("id") );
		pedido.setDateHourEmission  ( rs.getTimestamp("dt_hora_emissao") );
		pedido.setLastDateHourStatus( rs.getTimestamp("dt_hora_last_status") );
		pedido.setPrice             ( rs.getBigDecimal("preco") );
		pedido.setTroco             ( rs.getBigDecimal("troco") );
		pedido.setDeliveryPrice     ( rs.getBigDecimal("preco_entrega") );
		pedido.setItensAsJSON       ( rs.getString("itens") );
		pedido.setStatusPedido      ( StatusPedido.fromCode( rs.getInt("status_pedido") ) );
		pedido.setStatusPagamento   ( StatusPagamento.fromCode( rs.getInt("status_pagamento") ) );
		pedido.setUserLogged        ( rs.getString("user_logged") );
		pedido.setPaymentMethod     ( MeioPagamento.fromCode(rs.getByte("pagamento")).getPaymentMethod() );
		pedido.setReceiverMethod    ( MeioRecebimento.fromCode(rs.getByte("recebimento")).getReceiverMethod() );
		pedido.setAddressAsJSON     ( rs.getString("endereco") );
		pedido.setPaymentUrl        ( rs.getString("url_pagamento") );
		pedido.setLoadedDashboard   ( rs.getBoolean("carregado_dashboard") );
		pedido.setEntregar          ( rs.getBoolean("entregar") );
		
		return pedido;
	}

}
