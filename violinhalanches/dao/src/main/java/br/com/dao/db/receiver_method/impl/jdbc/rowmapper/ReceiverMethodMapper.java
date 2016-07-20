package br.com.dao.db.receiver_method.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.ReceiverMethod;

public class ReceiverMethodMapper implements RowMapper<ReceiverMethod> {

	@Override
	public ReceiverMethod mapRow(ResultSet rs, int arg1) throws SQLException {
		ReceiverMethod receiverMethod = new ReceiverMethod();
				
		receiverMethod.setId         ( rs.getInt("id") );
		receiverMethod.setEnabled    ( rs.getBoolean("habilitado") );
		receiverMethod.setDescription( rs.getString("descricao") );
				
		return receiverMethod;
	}

}
