package br.com.dao.db.payment_method.impl.jdbc;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.stereotype.Repository;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.payment_method.PaymentMethodDAO;
import br.com.model.entities.manager.PaymentMethod;

@Scope("prototype")
@Repository("paymentMethodJDBC")
public class PaymentMethodJDBCImpl extends GenericDAO<PaymentMethod> implements PaymentMethodDAO {

	private final static String SQL_INSERT = "INSERT INTO meio_pagamento(id, habilitado, descricao) VALUES (:id, :enabled, :description)";
	
	private final static String SQL_UPDATE = "UPDATE meio_pagamento SET habilitado=:enabled WHERE id=:id";
	
	public PaymentMethod insert(PaymentMethod t) {
		npJdbcTemplate.update(SQL_INSERT, new BeanPropertySqlParameterSource(t) );
		return t;
	}

	public void update(PaymentMethod t) {
		npJdbcTemplate.update(SQL_UPDATE, new BeanPropertySqlParameterSource(t) );
	}

	public void delete(Integer k) {
		throw new UnsupportedOperationException( "Deleção de meio de pagamento não implementado" );
	}

	@Override
	public void insert(List<PaymentMethod> methods) {
		batchUpdate( methods, SQL_INSERT );
	}

}
