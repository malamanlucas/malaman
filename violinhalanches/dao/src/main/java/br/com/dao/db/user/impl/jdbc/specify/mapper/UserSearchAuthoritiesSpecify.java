package br.com.dao.db.user.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.user.impl.jdbc.rowmappers.UserAuthorityMapper;

public class UserSearchAuthoritiesSpecify implements QueryMapperSpecify {

	private Object[] params;

	public UserSearchAuthoritiesSpecify(Integer id) {
		params = new Object[]{ id };
	}
	
	@Override
	public String getSql() {
		return "SELECT papel FROM usuario_papel WHERE usuario=?";
	}

	@Override
	public Object[] getParameters() {
		return params;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new UserAuthorityMapper();
	}

}
