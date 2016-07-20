package br.com.dao.db.payment_method.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.payment_method.impl.jdbc.rowmapper.PaymentMethodMapper;

public class PaymentMethodSearchAllSpecify implements QueryMapperSpecify {

	@Override
	public String getSql() {
		return "SELECT * FROM meio_pagamento";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new PaymentMethodMapper();
	}

}
