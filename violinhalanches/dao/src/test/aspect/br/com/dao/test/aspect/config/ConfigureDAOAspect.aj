package br.com.dao.test.aspect.config;

import br.com.dao.test.config.AbstractTestDAOConfig;

public aspect ConfigureDAOAspect {

	 declare parents : br.com.dao.test.jdbc..*Test extends AbstractTestDAOConfig;
	
}
