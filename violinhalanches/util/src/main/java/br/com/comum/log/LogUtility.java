package br.com.comum.log;

import java.lang.reflect.Method;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogUtility {

	protected static final Logger logger = LoggerFactory.getLogger( "root" );
	
	public static void log(Object object) {
		logger.info( object.toString() + "\n\n" );
	}
	
	public static void startDAO(JoinPoint jp, LogMessage logMessager) {
		start(jp, logMessager, "DAO   ");
	}
	
	public static void startFacade(JoinPoint jp, LogMessage logMessager) {
		start(jp, logMessager, "Facade");
	}
	
	private static void start(JoinPoint jp, LogMessage logMessager, String layer) {
		Method method  = getCurrentMethod(jp);
		Class<?> clazz = method.getDeclaringClass();
		String clazzName = clazz.getSimpleName();
		StringBuffer buffer = new StringBuffer();
		buffer.append("\n" + asterisco() + layer+" " + clazzName + " - "+method.getName());
		buffer.append( logParams(logMessager, method, jp.getArgs()) );
		
		logMessager.log( buffer.toString() );
	}
	
	public static void startController(JoinPoint jp, LogMessage logMessager) {
		Method method  = getCurrentMethod(jp);
		Class<?> clazz = method.getDeclaringClass();
		String clazzName = clazz.getSimpleName();
		StringBuffer buffer = new StringBuffer();
		buffer.append("\n" + tracos() + "CONTROLLER " + clazzName + " - "+method.getName()+"  ");
		buffer.append( logParams(logMessager, method, jp.getArgs()) );
		
		logMessager.log( buffer.toString() );
	}
	
	private static String logParams(LogMessage logMessager, Method method, Object[] args) {
		
		StringBuffer params = new StringBuffer();
		params.append("        Params:[");

		for (Object object : args) {
			params.append( " "+object.toString() + ":"+object.getClass().getSimpleName()+" |" ); 
		}
		
		params.append(" ]");
		
		return params.toString();
	}
	
	
	public static String horizontalSeparator() {
		return "\n----------------------------------------------------------------------------------------------------";
	}
	
	private static String tracos() {
		return "--------------------------------";
	}

	private static String asterisco() {
		return "********************************";
	}
	
	private static Method getCurrentMethod(JoinPoint jp) {
		return ((MethodSignature)jp.getSignature()).getMethod();
	}
	
	public static void logError(JoinPoint jp, Exception e) {
		Method method  = getCurrentMethod(jp);
		Class<?> clazz = method.getDeclaringClass();
		String clazzName = clazz.getSimpleName();
		StringBuffer buffer = new StringBuffer();
		buffer.append("\n" + clazzName + " - "+method.getName()+" : "+e.getMessage());
		
		logger.error( buffer.toString() );
		
		
	}
	
}
