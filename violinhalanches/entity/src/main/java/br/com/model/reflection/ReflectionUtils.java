package br.com.model.reflection;

import java.lang.reflect.Method;

public final class ReflectionUtils {

	public static void checkInstances(Object... var) {
		for (Object o : var) {
			System.out.println(o);
		}
	}
	
	public static void showMethodNameAndResult(Object o) { 
		try {
			Method[] methods = o.getClass().getDeclaredMethods();
			System.out.println(methods.length);
			for (Method m : methods) {
				Class<?> returnType = m.getReturnType();
				int sizeParameters = m.getGenericParameterTypes().length;
				if (!returnType.equals(Void.class) && sizeParameters == 0) {
					m.setAccessible(true);
					System.out.println(m.getName()+ " : "+ m.invoke(o, null));
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
