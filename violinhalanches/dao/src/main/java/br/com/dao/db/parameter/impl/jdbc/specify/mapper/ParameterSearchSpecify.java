package br.com.dao.db.parameter.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.parameter.impl.jdbc.rowmapper.ParameterMapped;

public class ParameterSearchSpecify implements QueryMapperSpecify {

	@Override
	public String getSql() {
		return "SELECT * FROM parametro";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new ParameterMapped();
	}

}
