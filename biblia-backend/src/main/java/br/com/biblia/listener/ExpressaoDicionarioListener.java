package br.com.biblia.listener;

import javax.persistence.PrePersist;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.biblia.apps.dicionario.DicionarioApp;
import br.com.biblia.config.AutowireHelper;
import br.com.biblia.model.versiculo.ExpressaoDicionario;
import br.com.biblia.model.versiculo.ExpressaoDicionarioKey;

public class ExpressaoDicionarioListener {

	@Autowired
	private DicionarioApp app;
	
	@PrePersist
	public void test(ExpressaoDicionario dicionario) {
		AutowireHelper.autowire(this, this.app);
		ExpressaoDicionarioKey key = dicionario.getKey();
		app.createDefaultIfNotExists(key.getId(), key.getIdioma());
	}

}
