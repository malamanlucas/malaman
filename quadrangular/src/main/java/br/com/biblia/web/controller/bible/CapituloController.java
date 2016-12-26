package br.com.biblia.web.controller.bible;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.capitulo.CapituloApp;
import br.com.biblia.core.apps.livro.LivroApp;
import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Capitulo;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.Livro;
import lombok.Data;

@Data
@RestController("capituloMB")
@Scope("view")
public class CapituloController {

	private Capitulo entity = new Capitulo();
	private List<Capitulo> list;
	private List<Livro> livros;
	private Integer livroId;
	private Testamento testamento = Testamento.VELHO;

	@Autowired
	private CapituloApp app;
	
	@Autowired
	private LivroApp livroApp;

	@PostConstruct
	public void init() {
		searchLivros(); 
		clean();
		if ( !livros.isEmpty() ) {
			livroId = livros.get(0).getId();
			this.list = app.searchByLivro( livroId );
		}
	}

	public void searchLivros() {
		this.livros = livroApp.searchByTestamento(testamento);
		if (livros != null && !livros.isEmpty() )
			livroId = livros.get(0).getId();
		search();
	}
	
	private void clean() {
		entity = new Capitulo();
	}

	public void search() {
		list = this.app.searchByLivro( livroId );
	}

	public void delete(CapituloKey key) {
		app.deleteById(key);
		clean();
		search();
	}

	public void save() {
		entity.getKey().setLivroId( livroId );
		app.save( entity );
		clean();
		search();
	}
	
	public void saveBatch() {
		app.save( livroId, entity.getKey().getId() );
		clean();
		search();
	}
	
	public void deleteBatch() {
		app.deleteByLivro( livroId );
		search();
	}

}
