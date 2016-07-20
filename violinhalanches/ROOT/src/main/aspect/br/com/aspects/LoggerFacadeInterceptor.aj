package br.com.aspects;

import java.lang.annotation.Annotation;
import java.lang.reflect.AccessibleObject;
import java.lang.reflect.Method;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.reflect.MethodSignature;

import br.com.comum.log.LogMessage;
import br.com.comum.log.LogUtility;
import br.com.comum.log.LoggerMessager;
import br.com.model.exception.SystemException;

public aspect LoggerFacadeInterceptor {

	Object around() :  ( call(public * (@br.com.comum.log.Loggable br.com.*..*).*(..)) ) ||
					     (@annotation(br.com.comum.log.Loggable) && 
					     call(public * br.com.*..*.*(..))) {

		JoinPoint jp = thisJoinPoint;
		Object result = null;
		LogMessage message = getLogMessage(jp);
		try {
			if (message != null) {
				logStart(message, jp);
				result = proceed();
			} else {
				result  = proceed();
			}
		} catch (Exception e) {
			if (message != null) {
				message.log( e.getMessage() );
			}
			throw new SystemException( e.getMessage() );
		}
		
		return result;
	}
	
	private static void logStart(LogMessage message, JoinPoint jp) {
		Object target = jp.getTarget();
		if (target instanceof LoggerMessager) {
			LoggerMessager messagerTarget = (LoggerMessager) target;
			messagerTarget.setLog( message );
			LogUtility.startFacade(jp, message);
		}
	}
	
	private static LogMessage getLogMessage(JoinPoint jp) {
		LogMessage message = null;
		Object thiz = jp.getThis();;
		if (thiz instanceof LoggerMessager) {
			LoggerMessager messagerThis   = (LoggerMessager) thiz;
			message = messagerThis.getLog();
		}
		return message;
	}
	
	public Class<? extends Object> getClassOfTarget(JoinPoint jp) {
		return getCurrentMethod(jp).getDeclaringClass();
	}
	
	public Method getCurrentMethod(JoinPoint jp) {
		return ((MethodSignature)jp.getSignature()).getMethod();
	}
	
	protected Annotation getAnnotation(AccessibleObject ao, Class<? extends Annotation> clazz) {
		return ao.isAnnotationPresent(clazz)?ao.getAnnotation(clazz):null;
	}


}
