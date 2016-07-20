package br.com.dao.test.jdbc.pedido;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Ignore;
import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

import br.com.comum.dates.Dates;
import br.com.dao.db.pedido.PedidoDAO;
import br.com.model.entities.user.Pedido;
import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;
import br.com.providers.EntityModifier;
import br.com.providers.EntityProviderFactory;
import br.com.providers.pedido.PedidoProvider;

public class PedidoDAOPersistenceTest {

	@Resource(name="pedidoJDBC")
	private PedidoDAO dao;
	private PedidoProvider pedidoProvider;
	
	public PedidoDAOPersistenceTest() {
		pedidoProvider = EntityProviderFactory.createPedidoProvider();
	}

	@Ignore
	@Test
	@DatabaseSetup(value={ "/dbunit/pedido/preconditions.xml"}, type=DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(value="/dbunit/pedido/expected/insert.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void insert() {
		Pedido pedido = pedidoProvider.provideEntity(new EntityModifier<Pedido>() {
			public Pedido modifier(Pedido t) {
				Date date = Dates.getDate("dd/MM/yyyy hh:mm:ss", "12/07/2014 01:01:01");
				t.setDateHourEmission  ( date );
				t.setLastDateHourStatus( date );
				return t;
			}
		});
		dao.insert(pedido);
	}
	
	@Ignore
	@Test
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value={"/dbunit/pedido/preconditions.xml","/dbunit/pedido/populate_1.xml"})
	@ExpectedDatabase(value="/dbunit/pedido/expected/update.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void update() {
		dao.update( pedidoProvider.provideEntity(new EntityModifier<Pedido>() {
			public Pedido modifier(Pedido t) {
				t.setNumber(1L);
				Date date = Dates.getDate("dd/MM/yyyy hh:mm:ss", "12/07/2014 01:01:01");
				t.setDateHourEmission  ( date );
				t.setLastDateHourStatus( date );
				t.setPaymentUrl("http://url_1");
				return t;
			}
		}) );
	}
	
	@Ignore
	@Test
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value={"/dbunit/pedido/preconditions.xml","/dbunit/pedido/populate_1.xml"})
	@ExpectedDatabase(value="/dbunit/pedido/expected/update_status.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void updateStatus() {
		dao.update( pedidoProvider.provideEntity(new EntityModifier<Pedido>() {
			public Pedido modifier(Pedido t) {
				t.setNumber(1L);
				t.setStatusPagamento(StatusPagamento.PAGO);
				t.setStatusPedido(StatusPedido.APROVADO);
				return t;
			}
		}) );
	}
	
	@Test
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value={"/dbunit/pedido/preconditions.xml","/dbunit/pedido/populate_1.xml"})
	@ExpectedDatabase(value="/dbunit/pedido/expected/update_loaded_dashboard.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void updateLoadedDashboard() {
		List<Pedido> lstPedido = Arrays.asList( pedidoProvider.provideEntity(new EntityModifier<Pedido>() {
									public Pedido modifier(Pedido t) {
										t.setNumber(1L);
										t.setLoadedDashboard(true);
										return t;
									}
								}) );
		dao.updateLoadedDashboard( lstPedido );
	}
	
	@Test
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_1.xml"})
	@ExpectedDatabase(value="/dbunit/pedido/expected/trigger_update_reliable.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void triggerUpdateUserDataWhenBecomeReliable() {
		Pedido pedido = pedidoProvider.provideEntity(new EntityModifier<Pedido>() {
			public Pedido modifier(Pedido t) {
				Date date = Dates.getDate("dd/MM/yyyy hh:mm:ss", "12/07/2014 01:01:01");
				t.setDateHourEmission  ( date );
				t.setLastDateHourStatus( date );
				t.setStatusPagamento(StatusPagamento.PAGO);
				t.setNumber(1L);
				return t;
			}
		});
		dao.update(pedido);
	}
	
	@Test
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value={"/dbunit/pedido/preconditions.xml", "/dbunit/pedido/populate_1.xml"})
	@ExpectedDatabase(value="/dbunit/pedido/expected/trigger_update_cancelled.xml", assertionMode=DatabaseAssertionMode.NON_STRICT)
	public void triggerUpdateUserDataWhenPedidoNotPayed() {
		Pedido pedido = pedidoProvider.provideEntity(new EntityModifier<Pedido>() {
			public Pedido modifier(Pedido t) {
				Date date = Dates.getDate("dd/MM/yyyy hh:mm:ss", "12/07/2014 01:01:01");
				t.setDateHourEmission  ( date );
				t.setLastDateHourStatus( date );
				t.setStatusPagamento(StatusPagamento.CANCELADO);
				t.setNumber(1L);
				return t;
			}
		});
		dao.updateStatus(pedido);
	}
	
//	"UPDATE pedido SET dt_hora_last_status=:lastDateHourStatus, status_pedido=:statusPedidoAsCode, status_pagamento=:statusPagamentoAsCode "
//	  + "WHERE id=:number";
	
}
