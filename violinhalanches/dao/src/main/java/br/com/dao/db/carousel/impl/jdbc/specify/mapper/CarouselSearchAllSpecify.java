package br.com.dao.db.carousel.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.carousel.impl.jdbc.rowmapper.CarouselMappedWithId;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;

public class CarouselSearchAllSpecify implements QueryMapperSpecify {

	@Override
	public String getSql() {
		return "SELECT id FROM carousel";
	}

	@Override
	public Object[] getParameters() {
		return null;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new CarouselMappedWithId();
	}

}
