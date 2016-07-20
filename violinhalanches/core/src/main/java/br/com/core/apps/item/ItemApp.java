package br.com.core.apps.item;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.core.apps.FotoRetriever;
import br.com.model.entities.manager.Item;

@Loggable
public interface ItemApp extends FotoRetriever {
	
	void delete(int id);
	Item retrieveById(int id);
	void save(Item item);
	List<Item> searchAll();
	List<Item> searchPagination(int start, int qtd);
	List<Item> searchByProdutoId(Integer idProduto);
	Integer countItens();
	Integer countItensByProductId(Integer id);
}
