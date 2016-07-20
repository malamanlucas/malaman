package br.com.aspects.abstracts;

import java.lang.annotation.Annotation;
import java.lang.reflect.AccessibleObject;
import java.lang.reflect.Method;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.reflect.MethodSignature;

public abstract class AbstractAspect {
	
	public Method getCurrentMethod(JoinPoint jp) {
		return ((MethodSignature)jp.getSignature()).getMethod();
	}
	
	protected Annotation getAnnotation(AccessibleObject ao, Class<? extends Annotation> clazz) {
		return ao.isAnnotationPresent(clazz)?ao.getAnnotation(clazz):null;
	}
	
}
