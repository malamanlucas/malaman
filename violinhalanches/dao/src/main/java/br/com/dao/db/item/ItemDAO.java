package br.com.dao.db.item;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.Item;

@Loggable
public interface ItemDAO extends DAO<Item, Integer> {

	void insert(List<Item> lstItem);
	
	List<Item> search(Integer idProduto);
	
	byte[] findFoto(Integer id);
}
