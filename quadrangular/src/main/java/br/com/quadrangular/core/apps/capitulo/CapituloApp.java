package br.com.quadrangular.core.apps.capitulo;

import java.util.List;

import br.com.quadrangular.core.model.Capitulo;
import br.com.quadrangular.core.model.CapituloKey;

public interface CapituloApp {

	Capitulo save(Capitulo entity);
	
	void save(Integer livroId, Integer capitulos);

	List<Capitulo> findAll();

	Capitulo findOne(CapituloKey key);
	
	void deleteById(CapituloKey key);
	void deleteByLivro(Integer livroId);
	
	List<Capitulo> searchByLivro(Integer livroId);
	
	
}
