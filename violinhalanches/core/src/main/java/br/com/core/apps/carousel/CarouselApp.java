package br.com.core.apps.carousel;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.core.apps.FotoRetriever;
import br.com.model.entities.manager.Carousel;

@Loggable
public interface CarouselApp extends FotoRetriever {

	List<Carousel> searchAll();
	
	void save(Carousel carousel);
	
	void delete(Integer id);

	Integer countCarousel();

	List<Carousel> searchPagination(Integer start, Integer qtd);
	
	public byte[] retrieveFotoById(Integer id);
	
}
