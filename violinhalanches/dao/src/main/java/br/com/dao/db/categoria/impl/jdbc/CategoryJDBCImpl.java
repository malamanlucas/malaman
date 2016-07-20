package br.com.dao.db.categoria.impl.jdbc;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import br.com.dao.db.categoria.CategoryDAO;
import br.com.dao.db.categoria.impl.jdbc.specify.primitive.CategoryFindPhotoSpecify;
import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.model.entities.manager.Category;

@Scope("prototype")
@Repository("categoriaJDBC")
public class CategoryJDBCImpl extends GenericDAO<Category> implements CategoryDAO {

	private static final String INSERT = "INSERT INTO categoria (nome, descricao, tipo, foto) " +
										 "VALUES(:name, :description, :typeAsCode, :photoAsBytes)";
	public Category insert(Category t) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		
		npJdbcTemplate.update(INSERT, new BeanPropertySqlParameterSource(t), 
				keyHolder, new String[]{"id"} );
		
		t.setId( extractGeneratedKey(keyHolder) );
		return t;
	}

	public void update(Category t) {
		String sql = CategoriaSQLUpdate.build(t);
		npJdbcTemplate.update(sql, new BeanPropertySqlParameterSource(t));
	}

	public void delete(Integer k) {
		jdbcTemplate.update("DELETE FROM categoria WHERE id=?", k);
	}

	public byte[] findFoto(Integer id) {
		try {
			return (byte[]) find( new CategoryFindPhotoSpecify(id) );
		} catch (EmptyResultDataAccessException e) {
			return getDefaultPhoto();
		}
	}

	
}
