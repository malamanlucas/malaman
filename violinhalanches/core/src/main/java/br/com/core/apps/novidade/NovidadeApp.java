package br.com.core.apps.novidade;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.model.entities.manager.Product;

@Loggable
public interface NovidadeApp {

	void add(Integer id);

	void remover(Integer id);

	List<Product> search();

	boolean isRegistered(Integer id);

}
