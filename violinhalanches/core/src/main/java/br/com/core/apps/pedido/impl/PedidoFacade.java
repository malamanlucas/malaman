package br.com.core.apps.pedido.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.payment.PaymentApp;
import br.com.core.apps.pedido.PedidoApp;
import br.com.core.apps.pedido.status.PedidoUtils;
import br.com.core.apps.pedido.validate.PedidoValidator;
import br.com.core.converters.ConverterTransactionStatus;
import br.com.core.validate.BeanValidator;
import br.com.dao.db.pedido.PedidoDAO;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoFindByNumberSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoSearchAllClosedsSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoSearchAllSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoSearchCurrentsByUserPhoneSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.mapper.PedidoSearchPaginationAllClosedsSpecify;
import br.com.dao.db.pedido.impl.jdbc.specify.primitive.PedidoCountNotEnteredInDashboardSpecify;
import br.com.model.entities.user.Pedido;
import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;
import br.com.uol.pagseguro.domain.Transaction;

import com.google.common.base.Preconditions;

@Scope("prototype")
@Service("pedidoFacade")
@Transactional(readOnly=true)
public class PedidoFacade implements PedidoApp {

	@Resource(name="pagseguroFacade")
	private PaymentApp paymentApp;
	
	@Resource(name="pedidoJDBC")
	private PedidoDAO dao;
	
	@Resource(name="beanValidator")
	private BeanValidator validator;
	
	private String terminateRequest(Pedido pedido) {
		return paymentApp.doPayment( pedido.getItens(), pedido.getNumber().toString() );
	}

	@Transactional(readOnly=false)
	public Pedido save(Pedido pedido) {
		Preconditions.checkArgument( isSaleEnabled(), "Desculpe a venda pelo site não está habilitada" );
		
		new PedidoValidator(validator).validate(pedido);
		
		pedido = dao.insert( pedido );
		
		if ( pedido.isOnline() ) {
			String url = terminateRequest( pedido );
			pedido.setPaymentUrl( url );
			dao.update( pedido );
		}
		
		return pedido;
	}
	
	private boolean isSaleEnabled() {
		return true;
	}

	public Pedido findByNumber(Long number) {
		return dao.find( new PedidoFindByNumberSpecify(number) );
	}

	@Transactional(readOnly=false)
	public Pedido updateStatus(String notificationCode) {
		Transaction transaction = paymentApp.findTransactionByNotificationCode(notificationCode);
		
		Long number = Long.valueOf( transaction.getReference() );
		
		Pedido pedido = dao.find( new PedidoFindByNumberSpecify( number ) );
		StatusPagamento pagamento = ConverterTransactionStatus.convert( transaction.getStatus() );
		pedido.setStatusPagamento( pagamento );
		
		PedidoUtils.updateStatus(pedido);
		dao.updateStatus(pedido);
		
		return pedido;
	}

	@Override
	public List<Pedido> searchByUserPhone(String phone) {
		return dao.search( new PedidoSearchCurrentsByUserPhoneSpecify(phone) );
	}

	@Override
	public List<Pedido> searchAll() {
		return dao.search( new PedidoSearchAllSpecify() );
	}

	@Transactional(readOnly=false)
	public Pedido updateStatus(Long number, StatusPagamento statusPagamento, StatusPedido statusPedido) {
		Pedido pedido = dao.find( new PedidoFindByNumberSpecify(number) );
		pedido.setStatusPagamento(statusPagamento);
		pedido.setStatusPedido(statusPedido);;
		PedidoUtils.updateStatus(pedido);
		dao.updateStatus(pedido);
		return pedido;
	}

	@Override
	public List<Pedido> searchCloseds() {
		return dao.search( new PedidoSearchAllClosedsSpecify() );
	}

	@Override
	public Integer countNotEnteredInDashboard() {
		return (Integer) dao.find( new PedidoCountNotEnteredInDashboardSpecify() );
	}

	@Transactional(readOnly=false)
	public void updateLoadedDashboard(List<Pedido> pedidos) {
		Preconditions.checkNotNull( pedidos, "Para atualizar os pedidos, passe uma lista não nula" );
		for (Pedido pedido : pedidos) { 
			pedido.setLoadedDashboard(true);
		}
		dao.updateLoadedDashboard( pedidos );
	}

	@Override
	public List<Pedido> searchPaginationCloseds(Integer start, Integer qtd) {
		return dao.search( new PedidoSearchPaginationAllClosedsSpecify(start, qtd) );
	}

}
