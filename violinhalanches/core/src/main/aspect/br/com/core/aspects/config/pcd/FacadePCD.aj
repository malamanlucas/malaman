package br.com.core.aspects.config.pcd;

public aspect FacadePCD {

	public pointcut scopeFacade()  : within(br.com.core.apps..impl.*Facade);

	public pointcut scopeMethodFoto() :
		execution(public !static byte[] retrieveFotoById(..)) || 
		execution(public !static byte[] *Foto*(..));

	public pointcut scopeMethod()    : execution(public !static * *..*.*(..));

}
