package br.com.dao.db.general.interfaces;

import java.util.List;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public interface DAO<T, K> {

	T insert(T t);
	
	void update(T t);
	
	void delete(K k);
	
	List<T> search(QueryMapperSpecify specify);

	T find(QueryMapperSpecify specify);

	List<?> search(QueryPrimitiveSpecify specify);

	Object find(QueryPrimitiveSpecify specify);
	
}
