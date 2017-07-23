package br.com.biblia.apps.expressao;

import br.com.biblia.model.versiculo.Expressao;
import br.com.biblia.model.versiculo.ExpressaoKey;

public interface ExpressaoApp {

	Expressao save(Expressao expressao);
	Expressao findByKeyAndInicioAndFim(ExpressaoKey key, Integer inicio, Integer fim);
	
}
