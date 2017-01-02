package br.com.biblia.core.apps.expressao;

import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoKey;

public interface ExpressaoApp {

	Expressao save(Expressao expressao);
	Expressao findByKeyAndInicioAndFim(ExpressaoKey key, Integer inicio, Integer fim);
	
}
