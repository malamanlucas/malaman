package br.com.dao.db.user.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.user.impl.jdbc.rowmappers.UserMapped;

public class UserSearchPaginationSpecify implements QueryMapperSpecify {

	private Object[] params;
	
	private static final String QUERY = 	
			"SELECT * FROM usuario OFFSET ? LIMIT ?";
	
	public UserSearchPaginationSpecify(Integer start, Integer qtd) {
		params = new Object[]{ start, qtd };	}
	
	public String getSql() {
		return QUERY;
	}

	public Object[] getParameters() {
		return params;
	}

	public RowMapper<?> getMapper() {
		return new UserMapped();
	}

}
