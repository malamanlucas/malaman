package br.com.dao.db.system_status.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.system_status.impl.jdbc.rowmapper.SystemStatusMapper;

public class SystemStatusFindSpecify implements QueryMapperSpecify {

	@Override
	public String getSql() {
		return "SELECT * FROM status_geral WHERE id=1";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new SystemStatusMapper();
	}

}
