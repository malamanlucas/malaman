package br.com.dao.db.parameter.impl.jdbc;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.parameter.ParameterDAO;
import br.com.model.entities.manager.Parameter;

@Scope("prototype")
@Repository("parameterJDBC")
public class ParameterJDBCImpl extends GenericDAO<Parameter> implements ParameterDAO {

	private static final String SQL_INSERT = "INSERT into parametro(chave,valor) VALUES(:key, :value)";
	private static final String SQL_UPDATE = "UPDATE parametro SET valor=:value WHERE chave=:key";
	
	@Override
	public Parameter insert(Parameter t) {
		update(t, SQL_INSERT);
		return t;
	}

	@Override
	public void update(Parameter t) {
		update(t, SQL_UPDATE);
	}

	@Override
	public void delete(String key) {
		jdbcTemplate.update("DELETE FROM parametro WHERE chave=?", key);
	}

	@Override
	public void update(List<Parameter> parameters) {
		batchUpdate(parameters, SQL_UPDATE);
	}

	@Override
	public void deleteAll() {
		jdbcTemplate.update("DELETE FROM parametro");
	}

	public void insert(List<Parameter> parameters) {
		batchUpdate( parameters, SQL_INSERT );
	}

}
