package br.com.dao.db.user.impl.jdbc.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.user.Address;

public class AddressMapped implements RowMapper<Address> {
	
	public Address mapRow(ResultSet rs, int row) throws SQLException {
		Address address = new Address();
		address.setId        ( rs.getInt("id") );
		address.setStreet    ( rs.getString("logradouro") );
		address.setNumber    ( rs.getString("nro") );
		address.setComplement( rs.getString("complemento") );
		address.setBairro    ( rs.getString("bairro") );
		address.setCep       ( rs.getString("cep") );
		return address;
	}

}
