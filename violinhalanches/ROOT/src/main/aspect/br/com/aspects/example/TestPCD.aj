package br.com.aspects.example;

import org.aspectj.lang.JoinPoint;

import br.com.aspects.controller.abstracts.AbstractAspectController;

public aspect TestPCD extends AbstractAspectController {

	public pointcut scope() : within(br.com.web.A);
	
	public pointcut method() : 
		call(public !static * *.*(..));
	
	Object around() : scope() && method(){
		
		JoinPoint jp = thisJoinPoint;
		System.out.println( jp.getThis() );
		System.out.println( jp.getTarget() );
		Object result = proceed();
		return result;
	}
	
	
	
	
	
}
