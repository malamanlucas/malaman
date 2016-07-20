package br.com.core.apps.carousel.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.carousel.CarouselApp;
import br.com.dao.db.carousel.CarouselDAO;
import br.com.dao.db.carousel.impl.jdbc.specify.mapper.CarouselSearchAllSpecify;
import br.com.dao.db.carousel.impl.jdbc.specify.mapper.CarouselSearchPaginationSpecify;
import br.com.dao.db.carousel.impl.jdbc.specify.specify.CarouselCountSpecify;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.model.entities.manager.Carousel;

@Scope("prototype")
@Service("carouselFacade")
@Transactional(readOnly=true)
public class CarouselFacade implements CarouselApp {

	@Resource(name="carouselJDBC")
	private CarouselDAO dao;
	
	@Override
	public byte[] retrieveFotoById(Integer id) {
		return dao.findPhoto(id);
	}

	@Override
	public List<Carousel> searchAll() {
		return dao.search( new CarouselSearchAllSpecify() );
	}

	@Transactional(readOnly=false)
	public void save(@Valid Carousel carousel) {
	
		if (carousel.getId() == null) {
			dao.insert( carousel );
		} else {
			dao.update( carousel );
		}
	}

	@Transactional(readOnly=false)
	public void delete(Integer id) {
		dao.delete( id );
	}

	@Override
	public Integer countCarousel() {
		return (Integer) dao.find( new CarouselCountSpecify() );
	}

	@Override
	public List<Carousel> searchPagination(Integer start, Integer qtd) {
		QueryMapperSpecify specify = new CarouselSearchPaginationSpecify(start, qtd); 
		return dao.search(specify);
	}

}
