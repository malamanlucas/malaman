package br.com.dao.db.novidade;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.Product;

@Loggable
public interface NovidadeDAO extends DAO<Product, Integer>{

	void add(Integer id);
	
	boolean isRegistered(Integer id);
	
}
