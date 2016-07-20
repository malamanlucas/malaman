package br.com.web.controladores.usuario;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Scope("prototype")
@Controller(value="homeController")
@RequestMapping(value="/")
public class HomeController {
	
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String iniciar(Model model) {
		return "home/inicio";
	}

	@RequestMapping(value="/off/contato", method=RequestMethod.GET)
	public String contato(Model model) {
		return "contato";
	}
	
}
