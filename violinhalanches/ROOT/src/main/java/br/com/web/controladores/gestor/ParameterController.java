package br.com.web.controladores.gestor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.model.entities.manager.Parameter;
import br.com.web.annotations.Message;

@Scope("singleton")
@Controller(value = "parameterController")
@RequestMapping(value = "/parameter")
public class ParameterController {

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String initCarousel(Model model) {
		return carregarForm( model, getParameterApp().search() );
	}
	
	public String carregarForm(Model model, List<Parameter> parameters) {
		model.addAttribute("parameters", parameters);
		return "parameter/inicio";
	}
	
	@Message("Parametros atualizados com sucesso")
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public String save(Model model, String[] chave, String[] valor) {
		getParameterApp().update( convertParameters(chave, valor) );
		return  "gestor/inicio";
	}
	
	private List<Parameter> convertParameters(String[] keys, String[] values) {
		List<Parameter> parameters = new ArrayList<Parameter>();
		for (int i = 0; i < values.length; i++) {
			parameters.add( new Parameter(keys[i], values[i].replace(',', '.')) );
		}
		return parameters;
	}
	
	
	
}
