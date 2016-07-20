package br.com.aspects.controller;


public aspect ControllerPCD {

	public pointcut scopePackage() : 
		within(br.com.web.controladores..*) ||
		within(br.com.web.controladores.abstracts.AbstractController) ||
		within(br.com.web.controladores.*);

	public pointcut scopeMethodCarregarForm() : 
		execution(* *..*.carregarForm(..));
	
	public pointcut scopeMethod() :
		execution(* *..*.*(..));  
	
	public pointcut scopeMethodsProtectedOrPrivate() :
		execution(protected * *..*.*(..)) || execution(private * *..*.*(..));
	
}
