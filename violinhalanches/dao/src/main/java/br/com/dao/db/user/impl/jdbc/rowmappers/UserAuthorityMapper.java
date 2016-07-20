package br.com.dao.db.user.impl.jdbc.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.user.Authority;


public class UserAuthorityMapper implements RowMapper<Authority> {

	public Authority mapRow(ResultSet rs, int rowNum) throws SQLException {
		return new Authority( rs.getString("papel") );
	}

}
