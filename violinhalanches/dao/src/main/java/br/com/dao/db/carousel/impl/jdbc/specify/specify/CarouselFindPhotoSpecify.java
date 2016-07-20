package br.com.dao.db.carousel.impl.jdbc.specify.specify;

import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;

public class CarouselFindPhotoSpecify implements QueryPrimitiveSpecify {

	private Object[] param;
	
	public CarouselFindPhotoSpecify(Integer id) {
		param = new Object[]{ id };
	}

	@Override
	public String getSql() {
		return "SELECT foto FROM carousel WHERE id=?";
	}

	@Override
	public Object[] getParameters() {
		return param;
	}

	@Override
	public Class<?> getReturnedType() {
		return byte[].class;
	}

}
