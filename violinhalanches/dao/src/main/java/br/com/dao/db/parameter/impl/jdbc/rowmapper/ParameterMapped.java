package br.com.dao.db.parameter.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.Parameter;

public class ParameterMapped implements RowMapper<Parameter> {

	@Override
	public Parameter mapRow(ResultSet rs, int rowNum) throws SQLException {
		Parameter p = new Parameter();
		p.setKey  ( rs.getString("chave") );
		p.setValue( rs.getString("valor") );
		return p;
	}

}
