package br.com.dao.db.user.impl.jdbc.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.user.Address;
import br.com.model.entities.user.User;

public class UserWithAddressMapped implements RowMapper<User> {
	
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		User user = new User();
		user.setId      ( rs.getInt("id") );
		user.setPhone   ( rs.getString("telefone") );
		user.setPassword( rs.getString("senha") );
		user.setName    ( rs.getString("nome") );
		user.setEmail   ( rs.getString("email") );
		user.setReliable( rs.getBoolean("confiavel") );
		user.setEnable  ( rs.getBoolean("habilitado") );
		user.setQuantityPedido   ( rs.getInt ("qt_pedido") );
		user.setQuantityPayed    ( rs.getInt( "qt_pago") );
		user.setQuantityCancelled( rs.getInt( "qt_nao_pago" ) );
		
		String street = rs.getString("logradouro");
		if (street != null) {
			Address address = new Address();
			address.setStreet    ( street );
			address.setId        ( rs.getInt("end_id") );
			address.setNumber    ( rs.getString("nro") );
			address.setComplement( rs.getString("complemento") );
			address.setBairro( rs.getString("bairro") );
			address.setCep( rs.getString("cep") );
			
			user.setAddress(address);
		}
		return user;
	}

	
	
}
