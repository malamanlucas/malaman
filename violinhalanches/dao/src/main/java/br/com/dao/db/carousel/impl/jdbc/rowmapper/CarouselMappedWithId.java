package br.com.dao.db.carousel.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.Carousel;

public class CarouselMappedWithId implements RowMapper<Carousel> {

	@Override
	public Carousel mapRow(ResultSet rs, int rowNum) throws SQLException {
		Carousel carousel = new Carousel();
		carousel.setId( rs.getInt("id") );
		return carousel;
	}

}
