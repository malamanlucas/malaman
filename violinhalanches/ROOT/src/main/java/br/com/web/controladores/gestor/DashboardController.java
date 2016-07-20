package br.com.web.controladores.gestor;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.comum.log.Loggable;
import br.com.core.apps.dashboard.DashboardApp;
import br.com.core.apps.pedido.PedidoApp;
import br.com.core.apps.printer.PrintFormatterApp;
import br.com.model.entities.user.ItemCart;
import br.com.model.entities.user.Pedido;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;
import br.com.web.PrinterHandler;
import br.com.web.converters.ProductConverter;

@Scope("singleton")
@Controller
@RequestMapping("/dashboard")
public class DashboardController {
	
	@Resource(name="printFormatterFacade")
	PrintFormatterApp printerFormat;
	
	@Autowired
	private SimpMessagingTemplate template;
	
	@Autowired
	private PrinterHandler printerHandler;
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String iniciar(Model model) {
		return initDashboard(model);
	}
	
	public String initDashboard(Model model) {
		return "dashboard/inicio";
	}
	
	@Loggable
	@RequestMapping(value="/ajax/pedido", method=RequestMethod.GET)
	public String loadPedidos(Model model) {
		PedidoApp app = getPedidoApp(); 
		List<Pedido> pedidos = app.searchCloseds();
		return defaultLoadPedidos(pedidos, model, app);
	}
	
	private String defaultLoadPedidos(List<Pedido> pedidos, Model model, PedidoApp app) {
		app.updateLoadedDashboard( pedidos );
		model.addAttribute( "pedidos", pedidos );
		return "dashboard/ajax/pedido";
	}
	
	@Loggable
	@RequestMapping(value="/ajax/pedido/pagination", method=RequestMethod.GET)
	public String loadPedidosPagination(Model model, @RequestParam Integer start, @RequestParam Integer qtd) {
		PedidoApp app = getPedidoApp();
		List<Pedido> pedidos = app.searchPaginationCloseds(start, qtd);
		return defaultLoadPedidos(pedidos, model, app);
	}
	
	@Loggable
	@RequestMapping(value="/json/pedido/status/update", method=RequestMethod.GET)
	public @ResponseBody Pedido updateStatus(Model model, @RequestParam Integer number,
											 @RequestParam StatusPagamento pagamento,
											 @RequestParam StatusPedido pedido) {
		Pedido pedidoEntity = getPedidoApp().updateStatus( Long.valueOf(number), pagamento, pedido);
		template.convertAndSendToUser( pedidoEntity.getUserLogged(), "/off/monitor/pedido", pedidoEntity );
		return pedidoEntity;
	}
	
	@Loggable
	@RequestMapping(value="/ajax/pedido/acoes", method=RequestMethod.GET)
	public String loadAcoesPedidos(Model model, @RequestParam Integer number, 
												 @RequestParam StatusPagamento pagamento, 
												 @RequestParam StatusPedido pedido,
												 @RequestParam MeioPagamento meioPagamento) {
		DashboardApp app = getDashboardApp();
		
		boolean isOnline = meioPagamento == MeioPagamento.ONLINE;
		
		model.addAttribute( "status_pagamentos", app.retrieveStatusPagamento(pagamento, isOnline) );
		model.addAttribute( "status_pedidos"   , app.retrieveStatusPedido   (pedido, pagamento) );
		model.addAttribute( "number"           , number );
		
		return "dashboard/ajax/pedido/acoes";
	}
	
	@RequestMapping(value="/ajax/user", method=RequestMethod.GET)
	public String retrieverQuantityPedido(Model model, @RequestParam String phone) {
		model.addAttribute( "user", getUserApp().find(phone) );
		return "dashboard/ajax/user";
	}
	
	@RequestMapping(value="/json/pedido/count", method=RequestMethod.GET)
	public @ResponseBody Integer retrieveNumberPedidoNotEntered(Model model) {
		return getPedidoApp().countNotEnteredInDashboard();
	}
	
	@Loggable
	@RequestMapping(value="/json/pedido/produtos", method=RequestMethod.GET)
	public @ResponseBody String retrieveProductsOfPedido(Model model, @RequestParam Integer number) {
		Pedido pedido = getPedidoApp().findByNumber( Long.valueOf(number) );
		return ProductConverter.forString( new ArrayList<ItemCart>( pedido.getItens() ) );
	}
	
	@Loggable
	@RequestMapping(value="/ajax/pedido/produtos/detail", method=RequestMethod.GET)
	public  String retrieveProductsDetailOfPedido(Model model, @RequestParam Integer number) {
		Pedido pedido = getPedidoApp().findByNumber( Long.valueOf(number) );
		model.addAttribute( "itens", pedido.getItens() );
		return "dashboard/ajax/produtos";
	}
	
	@Loggable
	@RequestMapping(value="/print")
	public @ResponseBody Void sendPrint(Model model, @RequestParam Long number) {
		Pedido pedido = getPedidoApp().findByNumber(number);
		pedido.setUser( getUserApp().find(pedido.getUserLogged()) );
		
		printerHandler.sendToAll( printerFormat.generateForDeliver(pedido) );
		return null;
	}
	
}
