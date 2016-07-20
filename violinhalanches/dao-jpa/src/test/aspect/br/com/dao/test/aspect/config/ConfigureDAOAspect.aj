package br.com.dao.test.aspect.config;

import br.com.dao.jpa.test.config.AbstractTestDAOConfig;

public aspect ConfigureDAOAspect {

	 declare parents : br.com.dao.jpa.test..*Test extends AbstractTestDAOConfig;
	
}
