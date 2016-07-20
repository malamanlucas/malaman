package br.com.core.apps.categoria;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.core.apps.FotoRetriever;
import br.com.model.entities.manager.Category;
import br.com.model.enums.CategoryType;

@Loggable
public interface CategoryApp extends FotoRetriever {
	
	List<Category> searchPagination(Integer start, Integer qtd);
	List<Category> searchAll();
	List<Category> searchByTipo(CategoryType tipo);
	void delete(Integer id);
	Category find(Integer id);
	void save(Category categoria);
	Integer countCategoria();
	Integer countCategoria(CategoryType tipoCategoria);
}
