package br.com.biblia.core.apps.livro;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.biblia.core.dao.LivroDAO;
import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Livro;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class LivroFacade implements LivroApp {

	@Autowired
	private LivroDAO dao;

	@Override
	public Livro save(Livro entity) {
		if ( entity.getId() == null ) {
			entity.setId( dao.retrieveNextId() );
		}
		dao.save(entity);
		return entity;
	}

	@Override
	public List<Livro> findAll() {
		return dao.findAll();
	}

	@Override
	public Livro findOne(Integer id) {
		return dao.findOne(id);
	}

	@Override
	public void deleteById(Integer id) {
		dao.delete(id);
	}

	@Override
	public List<Livro> searchByTestamento(Testamento testamento) {
		return dao.searchByTestamento(testamento);
	}


}
