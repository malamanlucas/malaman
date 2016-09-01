package br.com.quadrangular.core.apps.versiculo;

import java.util.List;

import br.com.quadrangular.core.model.versiculo.Versiculo;
import br.com.quadrangular.core.model.versiculo.VersiculoKey;

public interface VersiculoApp {

	Versiculo save(Versiculo entity);
	List<Versiculo> findAll();
	
	List<Versiculo> search(Integer livroId, Integer capituloId);

	Versiculo findOne(Integer id);
	
	void deleteByKey(VersiculoKey key);
	
}