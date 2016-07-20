package br.com.dao.aspects.config;

import br.com.dao.test.config.AbstractTestDAOConfig;

public aspect DAOConfigurer {

	declare parents : br.com.dao.test..*Test extends AbstractTestDAOConfig;
	
}
