package br.com.dao.db.item.impl.jdbc;

import java.math.BigDecimal;

import br.com.model.entities.manager.Item;

public final class ItemSQLUpdate {
	
	public static String build(Item item) {
		StringBuilder sql = new StringBuilder("UPDATE item SET ");
		boolean alreadyHasParam = false;
		
		String nome = item.getName();
		BigDecimal valor = item.getPrice();
		
		if (nome != null) {
			alreadyHasParam = true;
			sql.append("nome = :name ");
		}
		
		if (valor != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("v_padrao = :price ");
		}
		
		if (alreadyHasParam) sql.append(",");
		sql.append("foto = :photoAsBytes ");
		sql.append("WHERE id = :id");
		
		return sql.toString();
	}


}
