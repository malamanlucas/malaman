package br.com.dao.db.produto;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.Product;

@Loggable
public interface ProductDAO extends DAO<Product, Integer>{

	void delete(String nome);
	
	byte[] findFoto(Integer id);
	
	byte[] findFoto(String nome, Integer type);
	
}
