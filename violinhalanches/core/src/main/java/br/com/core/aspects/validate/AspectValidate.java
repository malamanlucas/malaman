package br.com.core.aspects.validate;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

import javax.validation.Valid;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;

import br.com.core.validate.BeanValidator;

@Aspect
public class AspectValidate {

	public AspectValidate()	 {
		validator = new BeanValidator();
	}
	
	private BeanValidator validator;

	@Before("execution(* *(..,@javax.validation.Valid (*),..))")
	public void valid(JoinPoint jp) throws NoSuchMethodException {

		Method interfaceMethod = ((MethodSignature) jp.getSignature()).getMethod();
		Method implementationMethod = jp
										.getTarget()
										.getClass()
										.getMethod(interfaceMethod.getName(),
												interfaceMethod.getParameterTypes());

		// Get the annotated parameters and validate those with the @Valid
		// annotation
		Annotation[][] annotationParameters = implementationMethod.getParameterAnnotations();
		for (int i = 0; i < annotationParameters.length; i++) {
			Annotation[] annotations = annotationParameters[i];
			for (Annotation annotation : annotations) {
				if (annotation.annotationType().equals(Valid.class)) {
					Object arg = jp.getArgs()[i];
					validator.validate(arg);
				}
			}
		}

	}

}
