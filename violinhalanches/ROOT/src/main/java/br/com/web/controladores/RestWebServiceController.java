package br.com.web.controladores;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.comum.config.ConfigUtils;
import br.com.comum.http.HttpClientUtils;
import br.com.comum.log.Loggable;
import br.com.core.apps.pedido.PedidoApp;
import br.com.model.entities.user.Pedido;
import br.com.model.enums.StatusPagamento;
import br.com.web.PrinterHandler;

@Scope("singleton")
@Controller("restWebService")
@RequestMapping(value="/rest")
public class RestWebServiceController {

	@RequestMapping(method=RequestMethod.GET,value="/cep")
	public @ResponseBody String findEnderecoByCep(@RequestParam(required=true,value="cep") String cep) {
		String url = ConfigUtils.getURLWebService( cep );
		return HttpClientUtils.getResultAsString(url);
	}
	
	@Autowired
	private SimpMessagingTemplate template;
	
	@Resource(name="pedidoFacade")
	private PedidoApp pedidoApp;
	
	@RequestMapping(value="/pagseguro", method={RequestMethod.GET, RequestMethod.POST})
	@Loggable
	public @ResponseBody Void test(@RequestParam String notificationCode, @RequestParam String notificationType) {
		
		System.out.println( notificationType );
		System.out.println( notificationCode );
		Pedido pedido = pedidoApp.updateStatus(notificationCode);
		template.convertAndSendToUser( "gestor", "/dashboard/refresh/pedido", pedido );
		Thread.sleep(1000);
		template.convertAndSendToUser( pedido.getUserLogged(), "/off/monitor/pedido", pedido );
		return null;
	}
	
	@Autowired
	PrinterHandler meuHandler;
	
	@RequestMapping(value="/teste")
	public @ResponseBody Void teste2() {
		
		return null;
	}
	
}
