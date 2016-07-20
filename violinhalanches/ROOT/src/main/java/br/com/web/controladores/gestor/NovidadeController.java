package br.com.web.controladores.gestor;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Scope("prototype")
@Controller(value = "novidadeController")
@RequestMapping(value = "/novidade")
public class NovidadeController {
	
	@RequestMapping(value="/isNew", method={RequestMethod.POST,RequestMethod.GET})
	public @ResponseBody boolean isNew(@RequestParam Integer id) {
		return getNovidadeApp().isRegistered(id);
	}
	
	@RequestMapping(value="/change", method={RequestMethod.POST,RequestMethod.GET})
	public @ResponseBody boolean change(@RequestParam boolean isNew, @RequestParam Integer id) {
		if (isNew) {
			getNovidadeApp().add(id);
		} else {
			getNovidadeApp().remover(id);
		}
		return isNew;
	}
	
	@RequestMapping(value="/off/load", method=RequestMethod.POST)
	public String loadNovidades(Model model) {
		model.addAttribute( "novidades", getNovidadeApp().search() );
		return "home/novidade/paginate";
	}
	
}
