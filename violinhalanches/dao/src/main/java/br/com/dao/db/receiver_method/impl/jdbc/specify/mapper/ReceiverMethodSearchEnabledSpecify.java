package br.com.dao.db.receiver_method.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.receiver_method.impl.jdbc.rowmapper.ReceiverMethodMapper;

public class ReceiverMethodSearchEnabledSpecify implements QueryMapperSpecify {

	@Override
	public String getSql() {
		return "SELECT * FROM meio_recebimento WHERE habilitado=true";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new ReceiverMethodMapper();
	}

}
