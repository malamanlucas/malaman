package br.com.dao.db.text_home.impl.jdbc;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.stereotype.Repository;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.text_home.TextHomeDAO;
import br.com.dao.db.text_home.impl.jdbc.specify.mapper.TextHomeFindSpecify;
import br.com.model.entities.manager.TextHome;

@Scope("prototype")
@Repository("textHomeJDBC")
public class TextHomeJDBCImpl extends GenericDAO<TextHome> implements TextHomeDAO {

	private static final String SQL_UPDATE = 
		"UPDATE texto_home SET titulo=:title, corpo=:body WHERE id=:id";
	
	private static final String SQL_INSERT = 
		"INSERT INTO texto_home(id, titulo, corpo) VALUES(:id, :title, :body)";

	public TextHome insert(TextHome t) {
		npJdbcTemplate.update( SQL_INSERT, new BeanPropertySqlParameterSource(t) );
		return t;
	}
	
	public void update(TextHome t) {
		npJdbcTemplate.update( SQL_UPDATE, new BeanPropertySqlParameterSource(t) );
	}

	@Override
	public void delete(Void k) {
		throw new UnsupportedOperationException("Não implementado");
	}

	@Override
	public TextHome find() {
		try {
			return find( new TextHomeFindSpecify() );
		} catch (EmptyResultDataAccessException e) {
			throw new RuntimeException( "Deveria ter texto_home padrao na tabela com id 1" );
		}
	}

}
