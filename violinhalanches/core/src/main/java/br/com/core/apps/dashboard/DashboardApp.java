package br.com.core.apps.dashboard;

import java.util.List;

import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;

public interface DashboardApp {

	List<StatusPagamento> retrieveStatusPagamento(StatusPagamento pagamento, boolean isOnline);
	
	List<StatusPedido>    retrieveStatusPedido(StatusPedido pedido, StatusPagamento pagamento);
	
	void updateStatus(Long number, StatusPagamento statusPagamento, StatusPedido statusPedido);
	
	Integer retrieveQuantityPedidoLinkedWithUser(String phone);

	Integer retrieveQuantityPedidoLinkedWithUser(Integer id);
	
}
