package br.com.dao.db.carousel.impl.jdbc.specify.specify;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class CarouselCountSpecify implements QueryPrimitiveSpecify {

	@Override
	public String getSql() {
		return "SELECT count(0) FROM carousel";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public Class<?> getReturnedType() {
		return Integer.class;
	}

}
