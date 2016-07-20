package br.com.dao.db.pedido;

import java.util.List;

import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.user.Pedido;

public interface PedidoDAO extends DAO<Pedido, Long>{

	void updateStatus(Pedido pedido);

	void updateLoadedDashboard(List<Pedido> pedidos);
	
}
