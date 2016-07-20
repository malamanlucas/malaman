package br.com.dao.factory;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.model.enums.DAOName;

public interface DAOFactory {
	
	GenericDAO getDAOByName(DAOName daoName);
	
	<T> T getDAOByName(DAOName daoName, Class<T> clazz);
}
