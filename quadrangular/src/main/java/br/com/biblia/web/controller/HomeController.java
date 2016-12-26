package br.com.biblia.web.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.livro.LivroApp;
import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Livro;
import lombok.Data;

@RestController("homeMB")
@Scope("view")
@Data
public class HomeController {
	
	@Autowired
	private LivroApp livroApp;
	
	List<Livro> novoTestamento;
	List<Livro> velhoTestamento;
	
	@PostConstruct
	public void init() {
		novoTestamento = livroApp.searchByTestamento( Testamento.NOVO );
		velhoTestamento = livroApp.searchByTestamento( Testamento.VELHO );
	}
	
	public String goCapitulo(String livroId) {
		return String.format( "show_capitulo.xhtml?livro_id=%s", livroId);
	}
	
}


