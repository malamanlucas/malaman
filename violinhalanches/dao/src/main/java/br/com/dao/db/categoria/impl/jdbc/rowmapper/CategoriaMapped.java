package br.com.dao.db.categoria.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.Category;
import br.com.model.enums.CategoryType;

public class CategoriaMapped implements RowMapper<Category> {

	@Override
	public Category mapRow(ResultSet rs, int rowNum) throws SQLException {
		Category c = new Category();
		c.setId(rs.getInt("id"));
		c.setName(rs.getString("nome"));
		c.setDescription(rs.getString("descricao"));
		c.setType(CategoryType.fromCode(rs.getInt("tipo")));
		return c;
	}

}
