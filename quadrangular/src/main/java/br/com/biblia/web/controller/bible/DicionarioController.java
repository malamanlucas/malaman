package br.com.biblia.web.controller.bible;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.dicionario.DicionarioApp;
import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.Dicionario;
import lombok.Data;

@RestController("dicionarioMB")
@Scope("view")
@Data
public class DicionarioController {

	private Dicionario entity = new Dicionario();
	private Dicionario entityModal;
	private List<Dicionario> list;
	private Idioma idioma = Idioma.HEBRAICO;

	@Autowired
	private DicionarioApp app;

	@PostConstruct
	public void init() {
		clean();
		search();
	}
	
	public Idioma[] allIdioma() {
		return Idioma.values();
	}
	
	private void clean() {
		entity = new Dicionario();
	}

	public void search() {
		list = this.app.search( idioma );
	}

	public void save() {
		entity.getKey().setIdioma( idioma );
		entity.setExiste( true );
		app.save( entity );
		clean();
		search();
	}
	
}
