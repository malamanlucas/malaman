package br.com.dao.db.general.jdbc.interfaces;

import org.springframework.jdbc.core.RowMapper;


public interface QueryMapperSpecify {

	String getSql();
	
	Object[] getParameters();
	
	RowMapper<?> getMapper();
	
}
