package br.com.biblia.apps.mapa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.biblia.dao.MapaDAO;
import br.com.biblia.enums.Testamento;
import br.com.biblia.model.Mapa;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class MapaFacade implements MapaApp {

	@Autowired
	private MapaDAO dao;
	
	@Override
	public void createDefaultIfNotExists(Integer codigo) {
		
		if ( dao.findOne(codigo) == null ) {
			dao.save( Mapa.builder()
								.id(codigo)
								.nome("Não definido")
								.testamento(Testamento.AMBOS)
								.build() );
		}
		
	}


}
