package br.com.core.aspects.config;

import br.com.core.test.config.AbstractTestCoreConfig;

public aspect ConfigureCOREAspect {

	 declare parents : br.com.core.test..*Test extends AbstractTestCoreConfig;
	
}
