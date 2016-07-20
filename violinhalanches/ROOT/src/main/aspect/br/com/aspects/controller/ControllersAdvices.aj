package br.com.aspects.controller;

import org.aspectj.lang.JoinPoint;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.aspects.controller.abstracts.AbstractAspectController;
import br.com.comum.log.LogMessage;
import br.com.comum.log.LogUtility;
import br.com.comum.log.LoggerMessager;
import br.com.web.controladores.abstracts.AbstractController;


public aspect ControllersAdvices extends AbstractAspectController {
	
	public static Logger logger = LoggerFactory.getLogger( "root" );
	
	declare parents : br.com.web.controladores.* extends AbstractController;
	declare parents : br.com.web.controladores.gestor.* extends AbstractController;
	declare parents : br.com.web.controladores.usuario.* extends AbstractController;
	
	declare soft : Exception : 
		ControllerPCD.scopePackage() && ControllerPCD.scopeMethod();
	
	Object around() : ControllerPCD.scopePackage() &&
					  ControllerPCD.scopeMethod() && 
					  !ControllerPCD.scopeMethodCarregarForm() &&
					  !ControllerPCD.scopeMethodsProtectedOrPrivate() {
		Object result = null;
		JoinPoint jp = thisJoinPoint;
		try {
			boolean needLog = isAnnonatedWithLoggable(jp);
			
			if (needLog) {
				LoggerMessager messager = (LoggerMessager) jp.getThis();
				LogMessage logMessager = new LogMessage();
				messager.setLog( logMessager );
				
				
				LogUtility.startController(jp, logMessager);
				
				result = proceed();
				
				logMessager.log( LogUtility.horizontalSeparator() );
				LogUtility.log( logMessager );
			} else {
				result = proceed();
			}
			deliverMessageSuccessful(jp);
		} catch (Exception e) {
			result = deliverMessageError(e, jp, result);
			LogUtility.logError(jp, e);
			e.printStackTrace();
			if (result != null) {
				return result;
			}
			throw new RuntimeException( e.getMessage() );
		}
		return result;
	}

}
