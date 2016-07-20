package br.com.dao.db.text_home.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.TextHome;

public class TextHomeMapper implements RowMapper<TextHome>{

	@Override
	public TextHome mapRow(ResultSet rs, int rowNum) throws SQLException {
		TextHome textHome = new TextHome();
		textHome.setTitle ( rs.getString("titulo") );
		textHome.setBody  ( rs.getString("corpo") );
		return textHome;
	}

}
