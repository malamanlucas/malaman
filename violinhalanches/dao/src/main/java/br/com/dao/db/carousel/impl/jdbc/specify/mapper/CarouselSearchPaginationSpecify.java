package br.com.dao.db.carousel.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.carousel.impl.jdbc.rowmapper.CarouselMappedWithId;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;

public class CarouselSearchPaginationSpecify implements QueryMapperSpecify {

	private Object[] param;

	public CarouselSearchPaginationSpecify(Integer start, Integer amount) {
		param = new Object[]{ start, amount };
	}
	
	public String getSql() {
		return "SELECT id FROM carousel OFFSET ? LIMIT ?";
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new CarouselMappedWithId();
	}

}
