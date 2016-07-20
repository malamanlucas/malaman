package br.com.dao.aspects.config;

import br.com.dao.jpa.test.config.AbstractTestDAOConfig;

public aspect DAOConfigurer {
	
	declare parents : br.com.dao.jpa.test..*Test extends AbstractTestDAOConfig;

}
