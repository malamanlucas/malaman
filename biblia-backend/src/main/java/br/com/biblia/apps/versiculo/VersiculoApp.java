package br.com.biblia.apps.versiculo;

import java.util.List;

import br.com.biblia.model.CapituloKey;
import br.com.biblia.model.Sentenca;
import br.com.biblia.model.versiculo.Expressao;
import br.com.biblia.model.versiculo.Versiculo;
import br.com.biblia.model.versiculo.VersiculoKey;

public interface VersiculoApp {

	Versiculo save(Versiculo entity);
	
	List<Versiculo> findAll();
	
	List<Versiculo> search(CapituloKey key);

	void deleteByKey(VersiculoKey key);
	
	void salvarExpressao(Expressao expressao);

	Integer qtdOcorrenciasTermo(String termo);

	List<Sentenca> searchSentencasByTermo(String string);
	
}
