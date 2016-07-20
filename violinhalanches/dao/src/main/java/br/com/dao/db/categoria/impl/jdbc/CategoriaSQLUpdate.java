package br.com.dao.db.categoria.impl.jdbc;

import br.com.model.entities.manager.Category;

public final class CategoriaSQLUpdate {
	
	public static String build(Category categoria) {
		StringBuilder sql = new StringBuilder("UPDATE categoria SET ");
		boolean alreadyHasParam = false;
		
		String  nome      = categoria.getName();
		String  descricao = categoria.getDescription();
		Integer tipo      = categoria.getTypeAsCode();
		
		if (nome != null) {
			alreadyHasParam = true;
			sql.append("nome = :name ");
		}
		
		if (descricao != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("descricao = :description ");
		}
		
		if (tipo != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("tipo = :typeAsCode");
		}
		
		if (alreadyHasParam) sql.append(",");
		sql.append("foto = :photoAsBytes ");
		sql.append("WHERE id = :id");
		
		return sql.toString();
	}


}
