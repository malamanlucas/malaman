package br.com.dao.db.carousel.impl.jdbc;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import br.com.dao.db.carousel.CarouselDAO;
import br.com.dao.db.carousel.impl.jdbc.specify.specify.CarouselFindPhotoSpecify;
import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.model.entities.manager.Carousel;

@Scope("prototype")
@Repository("carouselJDBC")
public class CarouselJDBCImpl extends GenericDAO<Carousel> implements CarouselDAO {

	public Carousel insert(Carousel carousel) {
		SimpleJdbcInsert insert = createSimpleJdbcInsert();
		insert.setTableName("carousel");
		insert.setColumnNames( Arrays.asList(new String[]{"foto"}) );
		insert.setGeneratedKeyName("id");
		
		Map<String,Object> param = new HashMap<>();
		param.put( "foto", carousel.getPhotoAsBytes() );
		
		Number holder = insert.executeAndReturnKey( param );
		carousel.setId( holder.intValue() );
		
		return carousel;
	}

	public void update(Carousel carousel) {
		SqlParameterSource param = new BeanPropertySqlParameterSource( carousel );
		npJdbcTemplate.update("UPDATE carousel SET foto = :photoAsBytes WHERE id = :id", param);
	}

	public void delete(Integer id) {
		jdbcTemplate.update("DELETE FROM carousel WHERE id=?", id);
	}

	public byte[] findPhoto(Integer id) {
		try {
			return (byte[]) find( new CarouselFindPhotoSpecify(id) );
		} catch (EmptyResultDataAccessException e) {
			return getDefaultPhoto();
		}
	}

}
