package br.com.biblia.core.apps.dicionario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.biblia.core.dao.DicionarioDAO;
import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.Dicionario;
import br.com.biblia.core.model.DicionarioKey;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class DicionarioFacade implements DicionarioApp {

	@Autowired
	private DicionarioDAO dao;
	
	@Override
	public Dicionario save(Dicionario entity) {
		dao.save( entity );
		return entity;
	}

	@Override
	public List<Dicionario> search(Idioma idioma) {
		return dao.search(idioma);
	}

	@Override
	public Dicionario findOne(DicionarioKey key) {
		return dao.findOne( key );
	}

	@Override
	public void deleteById(DicionarioKey key) {
		dao.delete( key );
	}

}
