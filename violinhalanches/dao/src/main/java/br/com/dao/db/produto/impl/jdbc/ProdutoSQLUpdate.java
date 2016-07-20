package br.com.dao.db.produto.impl.jdbc;

import java.math.BigDecimal;

import br.com.model.entities.manager.Photo;
import br.com.model.entities.manager.Product;

public class ProdutoSQLUpdate {

	public static String build(Product p) {
		StringBuilder sql = new StringBuilder("UPDATE produto SET ");
		boolean alreadyHasParam = false;
		
		String nome         = p.getName();
		BigDecimal valor    = p.getPrice();
		String descricao    = p.getDescription();
		Integer categoriaId = p.getCategoryId();
		Integer typeAsCode  = p.getTypeAsCode();
		Boolean enabled     = p.getEnabled();
		Photo photo         = p.getPhoto();
		
		if (nome != null) {
			alreadyHasParam = true;
			sql.append("nome = :name ");
		}
		
		if (valor != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("valor = :price ");
		}
		
		if (descricao != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("descricao = :description ");
		}
		
		if (categoriaId != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("categoria = :categoryId ");
		}
		
		if (typeAsCode != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("tipo = :typeAsCode ");
		}
		
		if (enabled != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("habilitado = :enabled ");
		}
		
		if (photo != null) {
			if (alreadyHasParam) sql.append(",");
			sql.append("foto = :photoAsBytes ");
		}
		
		sql.append("WHERE id = :id");
		return sql.toString();
	}
	
}
