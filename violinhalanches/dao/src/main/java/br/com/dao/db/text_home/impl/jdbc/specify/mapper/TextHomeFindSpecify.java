package br.com.dao.db.text_home.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.text_home.impl.jdbc.rowmapper.TextHomeMapper;

public class TextHomeFindSpecify implements QueryMapperSpecify {

	@Override
	public String getSql() {
		return "SELECT * FROM texto_home WHERE id=1";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new TextHomeMapper();
	}

}
