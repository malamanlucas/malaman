package br.com.core.apps.pedido;

import java.util.List;

import br.com.model.entities.user.Pedido;
import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;

public interface PedidoApp {

	Pedido save( Pedido pedido );
	
	List<Pedido> searchByUserPhone( String phone );
	
	Pedido findByNumber( Long number );

	Pedido updateStatus(String notificationCode);
	
	Pedido updateStatus(Long number, StatusPagamento statusPagamento, StatusPedido statusPedido);
	
	List<Pedido> searchAll();
	
	List<Pedido> searchCloseds();

	Integer countNotEnteredInDashboard();

	void updateLoadedDashboard(List<Pedido> pedidos);

	List<Pedido> searchPaginationCloseds(Integer start, Integer qtd);
	
}
