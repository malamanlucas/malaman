package br.com.web.controladores;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.model.exception.SystemException;

@Scope("singleton")
@Controller(value="statusController")
@RequestMapping(value="/status")
public class StatusController {
	
	@RequestMapping(value="/transacao",method={RequestMethod.POST,RequestMethod.GET}) 
	public @ResponseBody boolean checkStatusTransacao() throws SystemException {
//		return getPagamentoApp().temNovaTransacao();
		return true;
	}
	
}
