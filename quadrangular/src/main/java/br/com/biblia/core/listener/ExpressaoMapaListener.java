package br.com.biblia.core.listener;

import javax.persistence.PrePersist;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.biblia.core.apps.mapa.MapaApp;
import br.com.biblia.core.model.versiculo.ExpressaoMapa;
import br.com.biblia.web.config.AutowireHelper;

public class ExpressaoMapaListener {

	@Autowired
	private MapaApp app;
	
	@PrePersist
	public void test(ExpressaoMapa mapa) {
		AutowireHelper.autowire(this, this.app);
		app.createDefaultIfNotExists( mapa.getKey().getId() );
	}

}
