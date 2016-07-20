package br.com.dao.db.system_status.impl.jdbc;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.stereotype.Repository;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.system_status.SystemStatusDAO;
import br.com.dao.db.system_status.impl.jdbc.specify.mapper.SystemStatusFindSpecify;
import br.com.model.entities.manager.SystemStatus;

@Scope("prototype")
@Repository("systemStatusJDBC")
public class SystemStatusJDBCImpl extends GenericDAO<SystemStatus> implements SystemStatusDAO {

	private static final String SQL_INSERT = 
			"INSERT INTO status_geral (id, venda_aberta, loja_aberta, operador_ativo) VALUES(:id, :saleOpened, :trailerOpened, :activeOperator)";
	
	private static final String SQL_UPDATE = 
			"UPDATE status_geral SET venda_aberta=:saleOpened, loja_aberta=:trailerOpened, operador_ativo=:activeOperator WHERE id=:id";
	
	@Override
	public SystemStatus insert(SystemStatus t) {
		npJdbcTemplate.update( SQL_INSERT, new BeanPropertySqlParameterSource(t) );
		return t;
	}

	@Override
	public void update(SystemStatus t) {
		npJdbcTemplate.update( SQL_UPDATE, new BeanPropertySqlParameterSource(t) );
	}

	@Override
	public void delete(Void k) {
		throw new UnsupportedOperationException("Deleção de SystemStatus não implementado!");
	}

	@Override
	public SystemStatus find() {
		try {
			return find( new SystemStatusFindSpecify() );
		} catch (EmptyResultDataAccessException e) {
			throw new RuntimeException( "Deveria ter status_geral com id 1 inserido" );
		}
	}

}
