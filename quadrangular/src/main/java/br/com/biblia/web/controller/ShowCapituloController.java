package br.com.biblia.web.controller;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.context.FacesContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.capitulo.CapituloApp;
import br.com.biblia.core.model.Capitulo;
import br.com.biblia.core.model.Livro;
import lombok.Data;

@Data
@RestController("showCapituloMB")
@Scope("view")
public class ShowCapituloController {

	@Autowired
	CapituloApp app;
	
	List<Capitulo> capitulos;
	Livro livro;
	
	@PostConstruct
	public void init() {
		FacesContext ctx = FacesContext.getCurrentInstance();
		String livroId = ctx.getExternalContext().getRequestParameterMap().get("livro_id");
		capitulos = app.searchByLivro( Integer.valueOf(livroId));
	}

//	@Autowired
//	private HomeController homeController;
	
	public String goVersos(Capitulo capitulo) {
//		homeController.setLivro( livro );
//		homeController.setCapitulo( capitulo );
//		return String.format"show_versiculo.xhtml";
		return null;
	}
	
}