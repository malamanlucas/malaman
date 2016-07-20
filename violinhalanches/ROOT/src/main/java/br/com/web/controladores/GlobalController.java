package br.com.web.controladores;

import java.math.BigDecimal;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.servlet.ModelAndView;

import br.com.model.converters.CurrencyConverter;
import br.com.web.util.MessageUtils;

@ControllerAdvice
public class GlobalController {

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		binder.registerCustomEditor(BigDecimal.class, new CurrencyConverter());
	}
	
	@ExceptionHandler(Exception.class)
	public ModelAndView handleError(HttpServletRequest req, Exception e) {
		
		ModelAndView mav = new ModelAndView();

		e.printStackTrace();
		MessageUtils.deliverError(mav, e.getMessage());
		
		mav.setViewName("home/inicio");
		return mav;
	}
	
}
