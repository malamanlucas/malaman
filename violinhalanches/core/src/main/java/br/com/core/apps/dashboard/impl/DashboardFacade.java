package br.com.core.apps.dashboard.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.dashboard.DashboardApp;
import br.com.core.apps.pedido.status.PedidoUtils;
import br.com.dao.db.pedido.PedidoDAO;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoFindByNumberSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.primitive.PedidoCountLinkedByUserIdSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.primitive.PedidoCountLinkedByUserPhoneSpecify;
import br.com.model.entities.user.Pedido;
import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;


@Scope("singleton")
@Service("dashboardFacade")
@Transactional(readOnly=true)
public class DashboardFacade implements DashboardApp {

	@Resource(name="pedidoJDBC")
	private PedidoDAO pedidoDAO;
	
	public List<StatusPagamento> retrieveStatusPagamento(StatusPagamento pagamento, boolean isOnline) {
		if (pagamento == StatusPagamento.NAO_PAGO && !isOnline ) {
			return Arrays.asList( StatusPagamento.CANCELADO, StatusPagamento.PAGO );
		} else {
			return new ArrayList<StatusPagamento>();
		}
	}

	public List<StatusPedido> retrieveStatusPedido(StatusPedido pedido, StatusPagamento pagamento) {
		List<StatusPedido> listStatus = new ArrayList<StatusPedido>();
		switch (pedido) {
			case NAO_APROVADO:
				if (pagamento != StatusPagamento.CANCELADO) {
					listStatus.add( StatusPedido.APROVADO );
				}
				break;
			case APROVADO:
				listStatus.add( StatusPedido.PRONTO );
				break;
			case PRONTO: return Arrays.asList( StatusPedido.ENTREGUE, StatusPedido.NAO_ENTREGUE );
			default: return listStatus;
		}
		if (pagamento == StatusPagamento.PAGO) {
			listStatus.add( StatusPedido.ENTREGUE );
			listStatus.add( StatusPedido.NAO_ENTREGUE );
		}
		return listStatus;
	}

	@Override
	public void updateStatus(Long number, StatusPagamento statusPagamento,	StatusPedido statusPedido) {
		Pedido pedido = pedidoDAO.find( new PedidoFindByNumberSpecify(number) );
		pedido.setStatusPagamento(statusPagamento);
		pedido.setStatusPedido(statusPedido);;
		PedidoUtils.updateStatus(pedido);
		pedidoDAO.updateStatus(pedido);
	}

	@Override
	public Integer retrieveQuantityPedidoLinkedWithUser(String phone) {
		Integer count = (Integer) pedidoDAO.find( new PedidoCountLinkedByUserPhoneSpecify(phone) );
		return count;
	}

	@Override
	public Integer retrieveQuantityPedidoLinkedWithUser(Integer id) {
		Integer count = (Integer) pedidoDAO.find( new PedidoCountLinkedByUserIdSpecify(id) );
		return count;
	}
	
	

}
