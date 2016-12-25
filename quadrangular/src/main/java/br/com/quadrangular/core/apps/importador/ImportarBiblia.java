package br.com.quadrangular.core.apps.importador;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public interface ImportarBiblia {

	void importar(String livro, String abbreviation, Integer qtdCapitulos);
	
}
