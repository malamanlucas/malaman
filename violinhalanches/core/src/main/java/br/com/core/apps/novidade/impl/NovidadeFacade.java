package br.com.core.apps.novidade.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.novidade.NovidadeApp;
import br.com.dao.db.novidade.NovidadeDAO;
import br.com.dao.db.novidade.impl.jdbc.specify.mapper.NovidadeSearchProductSpecify;
import br.com.model.entities.manager.Product;

@Scope("prototype")
@Service("novidadeFacade")
@Transactional(readOnly=true)
public class NovidadeFacade implements NovidadeApp {

	@Resource(name="novidadeJDBC")
	private NovidadeDAO dao;
	
	@Transactional(readOnly=false)
	public void add(Integer id) {
		dao.add( id );
	}

	@Transactional(readOnly=false)
	public void remover(Integer id) {
		dao.delete( id );
	}

	public List<Product> search() {
		return dao.search( new NovidadeSearchProductSpecify() );
	}

	public boolean isRegistered(Integer id) {
		return dao.isRegistered(id);
	}

}
