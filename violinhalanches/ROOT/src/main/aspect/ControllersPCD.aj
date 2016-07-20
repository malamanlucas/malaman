

public aspect ControllersPCD {

	public pointcut scopeMDFeControllers()    : within(br.com.varitus.mdfe.web.emission..*);
	public pointcut scopeNFSeControllers()    : within(br.com.varitus.nfse.web..*);
	public pointcut scopeGDMControllers()     : within(br.com.varitus.ged.web.controller..*);
	public pointcut scopeGeneralControllers() : within(br.com.varitus.general.web.controller..*);
	
	
	public pointcut scopeProjects() : scopeMDFeControllers() ||
								      scopeGeneralControllers() ||
								      scopeGDMControllers() ||
								      scopeNFSeControllers();
	
	public pointcut getMethods() : execution(public * *..*.get*()) && scopeProjects();
	public pointcut setMethods() : execution(public void *..*.set*(..)) && scopeProjects();
	
	public pointcut actionMethods() : execution(public * *..*.*(..)) 
								      && scopeProjects()
								      && !getMethods()
								      && !setMethods()
								      ;
	
	
}
