package br.com.exames.apps.exame;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.exames.dao.ExameDAO;
import br.com.exames.model.Exame;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class ExameFacade implements ExameApp {

	@Autowired
	private ExameDAO dao;
	
	@Override
	public Exame save(Exame entity) {
		if ( entity.getId() == null ) {
			entity.setId( dao.retrieveNextId() );
		}
		entity.getClinicas().forEach(c -> c.getKey().setExameId(entity.getId()));
		dao.save( entity );
		return entity;
	}

	@Override
	public List<Exame> findAll() {
		return dao.findAll();
	}

	@Override
	public void delete(Integer id) {
		dao.delete(id);
	}
	
}
