package br.com.dao.db.payment_method.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.PaymentMethod;

public class PaymentMethodMapper implements RowMapper<PaymentMethod> {

	@Override
	public PaymentMethod mapRow(ResultSet rs, int arg1) throws SQLException {
		PaymentMethod paymentMethod = new PaymentMethod();
		
		paymentMethod.setId         ( rs.getInt("id") );
		paymentMethod.setEnabled    ( rs.getBoolean("habilitado") );
		paymentMethod.setDescription( rs.getString("descricao") );
		
		return paymentMethod;
	}

}
