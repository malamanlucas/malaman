package br.com.dao.db.produto.impl.jdbc.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.Category;
import br.com.model.entities.manager.Product;

public class ProdutoMapped implements RowMapper<Product> {

	@Override
	public Product mapRow(ResultSet rs, int i) throws SQLException {
		Product p = new Product();
		p.setId( rs.getInt("id") );
		p.setName( rs.getString("nome") );
		p.setDescription( rs.getString("descricao") );
		p.setPrice( rs.getBigDecimal("valor") );
		p.setCategory( new Category(rs.getInt("categoria")) );
		p.setTypeAsCode( rs.getInt("tipo") );
		p.setEnabled( rs.getBoolean("habilitado") );
		return p;
	}

}
