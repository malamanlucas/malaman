package br.com.web.controladores.gestor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.core.apps.manager.ManagerUserApp;
import br.com.core.apps.parameter.ParameterApp;
import br.com.core.apps.system_status.SystemStatusApp;
import br.com.model.entities.manager.PaymentMethod;
import br.com.model.entities.manager.ReceiverMethod;
import br.com.model.entities.manager.SystemStatus;
import br.com.model.entities.manager.TextHome;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.MeioRecebimento;
import br.com.web.annotations.FormError;
import br.com.web.inactivity.CounterTimer;
import br.com.web.model.SystemStatusWEB;
import br.com.web.util.WebSocketUtils;

@Scope("prototype")
@Controller
@RequestMapping("/gestor")
public class GestorController {

	@Autowired
	private SimpMessagingTemplate template;
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String inicio() {
		return "gestor/inicio";
	}
	
	@RequestMapping(value="/text", method={RequestMethod.GET})
	public String initForm(Model model) {
		TextHome textHome = getTextHomeApp().find();
		System.out.println( textHome );
		return carregarForm( model, textHome );
	}
	
	@RequestMapping(value="/text/save", method={RequestMethod.POST})
	@FormError public String save(Model model, TextHome textHome) {
		getTextHomeApp().update( textHome );
		return getHomeController().iniciar(model);
	}
	
	public String carregarForm(Model model, TextHome textHome) {
		model.addAttribute("textHome", textHome);
		return "text_home/inicio";
	}
	
	@RequestMapping(value="/off/text/load", method={RequestMethod.POST})
	public String loadTextHomeAjax(Model model) {
		model.addAttribute("textHome", getTextHomeApp().find());
		return "text_home/ajax";
	}
	
	@RequestMapping(value="/status", method={RequestMethod.GET})
	public String initStatus(Model model) {
		SystemStatusWEB statusWEB = new SystemStatusWEB( getSystemStatusApp().find() );
		model.addAttribute("status",  statusWEB);
		return "status";
	}
	
	@RequestMapping(value="/off/status/new", method={RequestMethod.POST, RequestMethod.GET})
	public @ResponseBody SystemStatus getStatus(Model model) {
		return getSystemStatusApp().find();
	}
	
	@RequestMapping(value="/operator/active", method=RequestMethod.POST)
	public @ResponseBody boolean setOperatorAsActivate() {
		SystemStatusApp app = getSystemStatusApp();
		SystemStatus status = app.find();
		status.setActiveOperator( true );
		app.update(status);
		return true;
	}
	
	@RequestMapping(value="/status/change", method={RequestMethod.POST})
	public @ResponseBody boolean changeStatus(Model model, SystemStatus status, String change) {
		if ( change.equals("sale") ) {
			status.setSaleOpened   ( !status.isSaleOpened() );
		} else { // trailer
			status.setTrailerOpened( !status.isTrailerOpened() );
		}
		WebSocketUtils.deliveryNewStatus( status, template );
		SystemStatusApp app = getSystemStatusApp();
		app.update( status );
		
		if (status.isSaleOpened()) {
			ParameterApp parameterApp = getParameterApp();
			Integer inactivityTime = parameterApp.findInactivityTime();
			Integer answerInactivityTime = parameterApp.findAnswerInactivityTime();
			new CounterTimer(template, app).execute( inactivityTime, answerInactivityTime );
		}
		
		return true;
	}
	
	@RequestMapping(value="/methods", method=RequestMethod.GET)
	public String initManageMethods(Model model) {
		
		ManagerUserApp managerApp = getManagerApp();
		
		List<PaymentMethod>  payments  = managerApp.searchPaymentMethods();
		List<ReceiverMethod> receivers = managerApp.searchReceiverMethods();
		
		model.addAttribute( "payments" , payments  );
		model.addAttribute( "receivers", receivers );
		
		model.addAttribute( "defaultPayment"  , MeioPagamento.PRESENCIAL_DINHEIRO.getCode() );
		model.addAttribute( "defaultReceiver" , MeioRecebimento.BUSCAR_NA_EMPRESA.getCode() );
		
		return "gerenciar_meios";
	}
	
	
	@RequestMapping(value="/methods/change", method=RequestMethod.POST)
	public @ResponseBody boolean changeMethod(@RequestParam boolean recebimento,
											  @RequestParam boolean enabled,
											  @RequestParam int     id) {
		
		
		if ( recebimento ) {
			ReceiverMethod method = new ReceiverMethod();
			method.setEnabled( enabled );
			method.setId     ( id );
			getManagerApp().update( method );
		} else {
			PaymentMethod method = new PaymentMethod();
			method.setEnabled( enabled );
			method.setId     ( id );
			getManagerApp().update( method );
		}
		
		return true;
	}
	
}
