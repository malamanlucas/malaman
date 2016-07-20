package br.com.dao.db.novidade.impl.jdbc;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.novidade.NovidadeDAO;
import br.com.model.entities.manager.Product;

@Scope("prototype")
@Repository("novidadeJDBC")
public class NovidadeJDBCImpl extends GenericDAO<Product> implements NovidadeDAO {

	public void add(Integer id) {
		jdbcTemplate.update("INSERT INTO novidade VALUES(?)", id);
	}

	public boolean isRegistered(Integer id) {
		return jdbcTemplate.queryForObject("SELECT count(0) FROM novidade WHERE produto=?", Integer.class, id) == 1;
	}

	public Product insert(Product t) {
		throw new UnsupportedOperationException( "Not Implemented" );
	}

	public void update(Product t) {
		throw new UnsupportedOperationException( "Not Implemented" );
	}

	public void delete(Integer id) {
		jdbcTemplate.update("DELETE FROM novidade WHERE produto=?", id);
	}



}
