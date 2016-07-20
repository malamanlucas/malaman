package br.com.web.util;

import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import br.com.comum.constantes.Constantes;
import br.com.web.annotations.Message;

public class MessageUtils {

	private static final String SUCCESS = "Operação realizada com sucesso";
	private static final String ERROR   = "Ocorreu um erro durante a operação";
	
	
	public static void deliverSucess(Model model, String msg) {
		if (msg == null) {
			msg = SUCCESS;
		}
		model.addAttribute(Constantes.SUCESSO, msg);
	}
	
	public static void deliverSucess(Model model, Message msg) {
		deliverSucess(model, msg.value());
	}
	
	public static void deliverError(ModelAndView mav, String msg) {
		mav.addObject(Constantes.ERRO_GENERICO, msg);
	}
	
	public static void deliverError(Model model, String msg) {
		if (msg == null) {
			msg = ERROR;
		}
		model.addAttribute(Constantes.ERRO_GENERICO, msg);
	}
	
	
}
