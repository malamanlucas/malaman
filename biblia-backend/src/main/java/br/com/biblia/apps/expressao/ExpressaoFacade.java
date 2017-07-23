package br.com.biblia.apps.expressao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import br.com.biblia.dao.ExpressaoDAO;
import br.com.biblia.model.versiculo.Expressao;
import br.com.biblia.model.versiculo.ExpressaoKey;
import br.com.biblia.model.versiculo.VersiculoKey;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
@Transactional(propagation=Propagation.REQUIRED)
public class ExpressaoFacade implements ExpressaoApp {

	@Autowired
	private ExpressaoDAO dao;
	
	@Override
	public Expressao save(Expressao expressao) {
		
		if ( CollectionUtils.isEmpty(expressao.getDicionarios()) && CollectionUtils.isEmpty(expressao.getMapas()) ) {
			VersiculoKey versiculoKey = new VersiculoKey(expressao.getKey().getVersiculoId(), expressao.getKey().getCapituloId(), expressao.getKey().getLivroId());
			dao.deleteByKeyAndInicioAndFim(versiculoKey, expressao.getInicio(), expressao.getFim());
			return expressao;
		} else { 
			if (expressao.getKey().getExpressaoId() == null) {
				expressao.getKey().setExpressaoId( dao.retrieveNextExpressaoId(expressao.getKey()) );
			}
			
			if ( expressao.getDicionarios() != null ) {
				expressao.getDicionarios().forEach( t -> t.getKey().setExpressaoKey( expressao.getKey() ) );
			}
			
			if ( expressao.getMapas() != null ) {
				expressao.getMapas().forEach( t -> t.getKey().setExpressaoKey( expressao.getKey() ) );
			}
			return dao.save(expressao);
		}
		
	}

	@Override
	public Expressao findByKeyAndInicioAndFim(ExpressaoKey key, Integer inicio, Integer fim) {
		VersiculoKey versiculoKey = new VersiculoKey(key.getVersiculoId(), key.getCapituloId(), key.getLivroId());
		return dao.findByKeyAndInicioAndFim(versiculoKey, inicio, fim);
	}

	
}
