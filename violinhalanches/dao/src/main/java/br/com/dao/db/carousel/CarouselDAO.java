package br.com.dao.db.carousel;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.Carousel;

@Loggable
public interface CarouselDAO extends DAO<Carousel, Integer> {

	byte[] findPhoto(Integer id);
	
}
