package br.com.quadrangular.core.apps.dicionario;

import java.util.List;

import br.com.quadrangular.core.enums.Idioma;
import br.com.quadrangular.core.model.Dicionario;
import br.com.quadrangular.core.model.DicionarioKey;

public interface DicionarioApp {

	Dicionario save(Dicionario entity);

	List<Dicionario> search(Idioma idioma);

	Dicionario findOne(DicionarioKey key);
	
	void deleteById(DicionarioKey key);
	
}
