package br.com.core.aspects.config;

import br.com.core.apps.GenericFacade;

public aspect FacadeConfigurer {

	declare parents : br.com.core.apps..impl.*Facade extends GenericFacade;
	
	
	
}
