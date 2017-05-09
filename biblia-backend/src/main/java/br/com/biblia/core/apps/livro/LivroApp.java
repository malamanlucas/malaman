package br.com.biblia.core.apps.livro;

import java.util.List;

import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Livro;

public interface LivroApp {

	Livro save(Livro entity);

	List<Livro> findAll();

	Livro findOne(Integer id);
	List<Livro> searchByTestamento(Testamento testamento);
	
	void deleteById(Integer id);
	
}
