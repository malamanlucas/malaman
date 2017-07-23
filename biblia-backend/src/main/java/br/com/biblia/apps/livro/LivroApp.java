package br.com.biblia.apps.livro;

import java.util.List;

import br.com.biblia.enums.Testamento;
import br.com.biblia.model.Livro;

public interface LivroApp {

	Livro save(Livro entity);

	List<Livro> findAll();

	Livro findOne(Integer id);
	List<Livro> searchByTestamento(Testamento testamento);
	
	void deleteById(Integer id);
	
}
