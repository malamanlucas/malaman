package br.com.biblia.apps.capitulo;

import java.util.List;

import br.com.biblia.model.Capitulo;
import br.com.biblia.model.CapituloKey;

public interface CapituloApp {

	Capitulo save(Capitulo entity);
	
	void save(Integer livroId, Integer capitulos);

	List<Capitulo> findAll();

	Capitulo findOne(CapituloKey key);
	
	void deleteById(CapituloKey key);
	void deleteByLivro(Integer livroId);
	
	List<Capitulo> searchByLivro(Integer livroId);
	
	
}
