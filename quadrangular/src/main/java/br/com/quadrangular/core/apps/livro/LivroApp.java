package br.com.quadrangular.core.apps.livro;

import java.util.List;

import br.com.quadrangular.core.enums.Testamento;
import br.com.quadrangular.core.model.Livro;

public interface LivroApp {

	Livro save(Livro entity);

	List<Livro> findAll();

	Livro findOne(Integer id);
	List<Livro> searchByTestamento(Testamento testamento);
	
	void deleteById(Integer id);
	
}
