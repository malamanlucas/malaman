package br.com.biblia.web.controller.bible;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.livro.LivroApp;
import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Livro;
import lombok.Data;

@Data
@RestController("livroMB")
@Scope("view")
public class LivroController {

	private Livro entity = new Livro();
	private List<Livro> list;
	private Testamento testamento = Testamento.VELHO;

	@Autowired
	private LivroApp app;

	@PostConstruct
	public void init() {
		clean();
		search();
	}
	
	public Testamento[] allTestamento() {
		return new Testamento[] {Testamento.VELHO, Testamento.NOVO };
	}

	private void clean() {
		entity = new Livro();
	}

	public void search() {
		list = this.app.searchByTestamento( testamento );
	}

	public void delete(Integer id) {
		app.deleteById(id);
		clean();
		search();
	}

	public void save() {
		entity.setTestamento(testamento);
		app.save( entity );
		clean();
		search();
	}
	
}
