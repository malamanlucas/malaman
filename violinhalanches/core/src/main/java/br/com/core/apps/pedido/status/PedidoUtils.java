package br.com.core.apps.pedido.status;

import java.util.Date;

import br.com.model.entities.user.Pedido;
import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;

public class PedidoUtils {

	private PedidoUtils() {}
	
	public static void updateStatus(Pedido pedido) {
		
		StatusPagamento statusPagamento = pedido.getStatusPagamento();
		StatusPedido    statusPedido = pedido.getStatusPedido();
		
		if (statusPagamento == StatusPagamento.PAGO && pedido.isOnline() && statusPedido == StatusPedido.NAO_APROVADO) {
			statusPedido = StatusPedido.APROVADO;
		} else if (statusPagamento == StatusPagamento.CANCELADO) {
			statusPedido = StatusPedido.NAO_ENTREGUE;
		}
		
		pedido.setStatusPedido(statusPedido);
		
		pedido.setLastDateHourStatus( new Date() );
	}
	
}
