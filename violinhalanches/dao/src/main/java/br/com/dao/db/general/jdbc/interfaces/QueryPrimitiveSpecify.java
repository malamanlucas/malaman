package br.com.dao.db.general.jdbc.interfaces;



public interface QueryPrimitiveSpecify {

	String getSql();
	
	Object[] getParameters();
	
	Class<?> getReturnedType();
	
}
