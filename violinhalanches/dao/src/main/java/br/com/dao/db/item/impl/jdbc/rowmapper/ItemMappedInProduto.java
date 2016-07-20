package br.com.dao.db.item.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.Item;


public class ItemMappedInProduto implements RowMapper<Item> {

	@Override
	public Item mapRow(ResultSet rs, int rowNum) throws SQLException {
		Item i = new Item();
		i.setId(rs.getInt("id"));
		i.setName(rs.getString("nome"));
		i.setPrice(rs.getBigDecimal("valor"));
		i.setAmount(rs.getInt("qtd"));
		i.setMaxAmount(rs.getInt("qtd_max"));
		return i;
	}
}
