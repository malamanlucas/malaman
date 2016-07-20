package br.com.dao.db.user.impl.jdbc.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.user.User;

public class UserMapped implements RowMapper<User> {

	@Override
	public User mapRow(ResultSet rs, int arg1) throws SQLException {
		User user = new User();
		
		user.setId               ( rs.getInt("id") );
		user.setPhone            ( rs.getString("telefone") );
		user.setName             ( rs.getString("nome") );
		user.setPassword         ( rs.getString("senha") );
		user.setEmail            ( rs.getString("email") );
		user.setReliable         ( rs.getBoolean("confiavel") );
		user.setEnable           ( rs.getBoolean("habilitado"));
		user.setQuantityPedido   ( rs.getInt ("qt_pedido") );
		user.setQuantityPayed    ( rs.getInt( "qt_pago") );
		user.setQuantityCancelled( rs.getInt( "qt_nao_pago" ) );
		
		return user;
	}

}
