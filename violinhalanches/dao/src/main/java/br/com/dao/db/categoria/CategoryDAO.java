package br.com.dao.db.categoria;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.Category;

@Loggable
public interface CategoryDAO extends DAO<Category, Integer>{
	
	byte[] findFoto(Integer id);
	
}
