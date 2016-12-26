package br.com.biblia.core.apps.versiculo;

import java.util.List;

import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;

public interface VersiculoApp {

	Versiculo save(Versiculo entity);
	
	void atualizarLimpo();
	
	List<Versiculo> findAll();
	
	List<Versiculo> search(Integer livroId, Integer capituloId);

	void deleteByKey(VersiculoKey key);
	
	void salvarExpressao(Expressao expressao);
	
}
