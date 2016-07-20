package br.com.dao.aspect.logging;

import org.aspectj.lang.annotation.Aspect;

@Aspect
public class AspectLogging {
	
//	@Around("@annotation(br.com.comum.log.Loggable) && " +
//			"call(public * br.com.*..*.*(..))")
//	public Object around(ProceedingJoinPoint pjp) throws Throwable {
//		String clazzName = pjp.getTarget().getClass().getSimpleName();
//		
//		Logger logger = LoggerFactory.getLogger( "root" );
//		
//		LoggerMessager messagerThis   = (LoggerMessager) pjp.getThis();
//		LoggerMessager messagerTarget = (LoggerMessager) pjp.getTarget();
//		
//		LogMessage message = messagerThis.getLog();
//		
//		messagerTarget.setLog( message );
//		
//		message.log( "\n"+asterisco()+"Executando "+clazzName+" "+asterisco()+"\n" );
//		
//		Object result = pjp.proceed();
//		
//		message.log( asterisco()+"Finalizando "+clazzName+" "+asterisco() );
//		
//		return result;
//	}
//	
//	private String asterisco() {
//		return "********************************";
//	}
	
	
	
	
}
