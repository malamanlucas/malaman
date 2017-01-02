package br.com.biblia.core.listener;

import javax.persistence.PrePersist;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.biblia.core.apps.dicionario.DicionarioApp;
import br.com.biblia.core.model.versiculo.ExpressaoDicionario;
import br.com.biblia.core.model.versiculo.ExpressaoDicionarioKey;
import br.com.biblia.web.config.AutowireHelper;

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
