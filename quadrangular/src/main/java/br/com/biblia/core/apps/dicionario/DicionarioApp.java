package br.com.biblia.core.apps.dicionario;

import java.util.List;

import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.Dicionario;
import br.com.biblia.core.model.DicionarioKey;

public interface DicionarioApp {

	Dicionario save(Dicionario entity);

	List<Dicionario> search(Idioma idioma);

	Dicionario findOne(DicionarioKey key);
	
	void deleteById(DicionarioKey key);
	
}
