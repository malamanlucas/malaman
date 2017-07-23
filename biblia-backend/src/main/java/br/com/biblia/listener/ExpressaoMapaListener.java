package br.com.biblia.listener;

import javax.persistence.PrePersist;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.biblia.apps.mapa.MapaApp;
import br.com.biblia.config.AutowireHelper;
import br.com.biblia.model.versiculo.ExpressaoMapa;

public class ExpressaoMapaListener {

	@Autowired
	private MapaApp app;
	
	@PrePersist
	public void test(ExpressaoMapa mapa) {
		AutowireHelper.autowire(this, this.app);
		app.createDefaultIfNotExists( mapa.getKey().getId() );
	}

}
