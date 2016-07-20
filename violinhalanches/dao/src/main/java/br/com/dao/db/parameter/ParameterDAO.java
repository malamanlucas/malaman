package br.com.dao.db.parameter;

import java.util.List;

import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.Parameter;

public interface ParameterDAO extends DAO<Parameter, String>{

	void update(List<Parameter> parameters);
	
	void deleteAll();
	
	void insert(List<Parameter> parameters);
	
}
