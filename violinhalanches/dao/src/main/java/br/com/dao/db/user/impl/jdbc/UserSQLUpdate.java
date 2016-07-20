package br.com.dao.db.user.impl.jdbc;

import br.com.model.entities.user.User;

public class UserSQLUpdate {

	public static String build(User u) {
		StringBuilder sql = new StringBuilder("UPDATE usuario SET ");
		boolean alreadyHasParam = false;
		
		String name               = u.getName();
		String phone              = u.getPhone();
		String password           = u.getPassword();
		String email              = u.getEmail();
		Boolean enabled           = u.getEnable();
		Boolean reliable          = u.getReliable();
		Integer quantityPedido    = u.getQuantityPedido();
		Integer quantityPayed     = u.getQuantityPayed();
		Integer quantityCancelled = u.getQuantityCancelled();
		
		if (name != null) {
			alreadyHasParam = true;
			sql.append("nome = :name ");
		}
		
		if (phone != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("telefone = :phone ");
		}
		
		if (password != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("senha = :password ");
		}
		
		if (email != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("email = :email ");
		}
		
		if (enabled != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("habilitado = :enable ");
		}
		
		if (reliable != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("confiavel = :reliable ");
		}
		
		if (quantityPedido != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("qt_pedido = :quantityPedido ");
		}
		
		if (quantityPayed != null) {
			if (alreadyHasParam) sql.append(",");
			alreadyHasParam = true;
			sql.append("qt_pago = :quantityPayed ");
		}
		
		if (quantityCancelled != null) {
			if (alreadyHasParam) sql.append(",");
			sql.append("qt_nao_pago = :quantityCancelled ");
		}
		
		sql.append("WHERE id = :id");
		return sql.toString();
	}
	
}
