package br.com.biblia.core.apps.versiculo;

import java.util.List;

import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.Sentenca;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;

public interface VersiculoApp {

	Versiculo save(Versiculo entity);
	
	List<Versiculo> findAll();
	
	List<Versiculo> search(CapituloKey key);

	void deleteByKey(VersiculoKey key);
	
	void salvarExpressao(Expressao expressao);

	Integer qtdOcorrenciasTermo(String termo);

	List<Sentenca> searchSentencasByTermo(String string);
	
}
