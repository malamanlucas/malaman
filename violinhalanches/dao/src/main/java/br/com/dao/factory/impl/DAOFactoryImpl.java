package br.com.dao.factory.impl;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import br.com.comum.factory.GenericSpringBeanFactory;
import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.factory.DAOFactory;
import br.com.model.enums.DAOName;

@Scope("singleton")
@Component("factoryDAO")
public class DAOFactoryImpl extends GenericSpringBeanFactory implements DAOFactory {

	public GenericDAO getDAOByName(DAOName daoName) {
		return getBeanByName(daoName.getName(), GenericDAO.class);
	}

	@SuppressWarnings("unchecked")
	public <T> T getDAOByName(DAOName daoName, Class<T> clazz) {
		return (T) getDAOByName(daoName);
	}
}
