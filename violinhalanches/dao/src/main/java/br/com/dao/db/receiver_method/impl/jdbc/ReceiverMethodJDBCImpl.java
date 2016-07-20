package br.com.dao.db.receiver_method.impl.jdbc;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.stereotype.Repository;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.receiver_method.ReceiverMethodDAO;
import br.com.model.entities.manager.ReceiverMethod;

@Scope("prototype")
@Repository("receiverMethodJDBC")
public class ReceiverMethodJDBCImpl extends GenericDAO<ReceiverMethod> implements ReceiverMethodDAO {

	private final static String SQL_INSERT = "INSERT INTO meio_recebimento(id, habilitado, descricao) VALUES (:id, :enabled, :description)";
	
	private final static String SQL_UPDATE = "UPDATE meio_recebimento SET habilitado=:enabled WHERE id=:id";
	
	public ReceiverMethod insert(ReceiverMethod t) {
		npJdbcTemplate.update(SQL_INSERT, new BeanPropertySqlParameterSource(t) );
		return t;
	}

	public void update(ReceiverMethod t) {
		npJdbcTemplate.update(SQL_UPDATE, new BeanPropertySqlParameterSource(t) );
	}

	public void delete(Integer k) {
		throw new UnsupportedOperationException( "Deleção de meio de pagamento não implementado" );
	}

	@Override
	public void insert(List<ReceiverMethod> methods) {
		
		batchUpdate(methods, SQL_INSERT);
		
	}

}
