

import java.io.IOException;
import java.lang.reflect.Method;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;


public aspect ControllerActionsExceptionHandler {

	private static final String PERFORM_NAMED = "perform";
	private static final String EXECUTE_NAMED = "execute";
	private static final String METODO_NAO_ENCONTRADO_CONTROLLER = "Método '%s' não encontrado no controlador %s";
	private static final String DEFAULT_SUCCESS_MESSAGE = "Operação realizada com sucesso!";
	private static final String DEFAULT_ERROR_MESSAGE   = "Problemas ao executar sua ação.";
	
//	Object around() : ControllersPCD.actionMethods() {
//		try {
//			Object result = proceed();
//			deliverSuccessMessage(thisJoinPoint);
//			return result;
//		} catch(Exception e) {
//			e.printStackTrace();
//			deliverErrorMessage(e);
//			return Action.ERROR;
//		}
//	}
//	
//	private void deliverSuccessMessage(JoinPoint point) {
//		Method crosscutedMethod = extractCrosscutedMethod(point);
//		String methodName = crosscutedMethod.getName();	
//			
//		Message messageAnnotation   = crosscutedMethod.getAnnotation(Message.class);
//		boolean deliverByNomination = methodName.contains(EXECUTE_NAMED) || methodName.contains(PERFORM_NAMED);
//		boolean deliverByAnnotation = messageAnnotation != null;
//		
//		if(deliverByAnnotation) {
//			deliverMessagebyAnnotation(messageAnnotation);
//		} else if(deliverByNomination) {
//			MessageUtils.infoMessage(DEFAULT_SUCCESS_MESSAGE);
//		}
//	}
//
//	
//
//	private Method extractCrosscutedMethod(JoinPoint point) {
//		String methodName = null;
//		try {
//			
//			Signature methodSignature = point.getSignature();
//			methodName = methodSignature.getName();
//			
//			Object controller = point.getThis();
//			Method[] methods  = controller.getClass().getDeclaredMethods(); 
//			for(Method method : methods) {
//				
//				String currentMethodName = method.getName();
//				if(currentMethodName.equals(methodName))
//					return method;
//			}
//			
//			
//			throw new IllegalArgumentException();
//		} catch(Exception e) {
//			String message = METODO_NAO_ENCONTRADO_CONTROLLER;
//			message = String.format(message, methodName, point.getThis().getClass());
//			throw new IllegalArgumentException(message);
//		}
//	}
//
//	private void deliverErrorMessage(Exception e) {
//		if(exceptionIsDatabaseSafe(e))
//			MessageUtils.errorMessage(e.getMessage());
//		else
//			MessageUtils.errorMessage(DEFAULT_ERROR_MESSAGE);
//	}
//
//	private boolean exceptionIsDatabaseSafe(Exception e) {
//		return e instanceof IllegalArgumentException ||
//			   e instanceof IllegalStateException    ||
//			   e instanceof NullPointerException;
//	}
//	
//	private void deliverMessagebyAnnotation(Message messageAnnotation) {
//		String info = messageAnnotation.value();
//		if(info.isEmpty())
//			MessageUtils.infoMessage(DEFAULT_SUCCESS_MESSAGE);
//		else MessageUtils.infoMessage(info);
//	}
}
