package br.com.dao.db.user.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.user.impl.jdbc.rowmappers.UserMapped;

public class UserFindByIdWithoutAddressSpecify implements QueryMapperSpecify {

	private Object[] params;
	private static final String SQL = 
			"SELECT * FROM usuario WHERE id=?";
	
	public UserFindByIdWithoutAddressSpecify(Integer id) {
		params = new Object[] { id };
	}
	
	public String getSql() {
		return SQL;
	}

	public Object[] getParameters() {
		return params;
	}

	public RowMapper<?> getMapper() {
		return new UserMapped();
	}

}
