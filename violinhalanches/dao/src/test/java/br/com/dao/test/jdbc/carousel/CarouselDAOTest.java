package br.com.dao.test.jdbc.carousel;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.carousel.CarouselDAO;
import br.com.dao.db.carousel.impl.jdbc.specify.specify.CarouselCountSpecify;
import br.com.model.entities.manager.Carousel;
import br.com.model.entities.manager.Photo;

public class CarouselDAOTest {

	@Resource(name="carouselJDBC")
	private CarouselDAO dao;
	
	@Test
	public void insert() {
		Carousel carousel = new Carousel();
		carousel.setPhoto( new Photo(new byte[]{1}));
		carousel = dao.insert( carousel );
		Assert.assertNotNull( carousel.getId() );
	}
	
	@Test
	public void update() {
		Carousel carousel = new Carousel();
		carousel.setPhoto( new Photo(new byte[]{1}));
		carousel = dao.insert( carousel );
		dao.update(carousel);
	}
	
	@Test
	public void delete() {
		Carousel carousel = new Carousel();
		carousel.setPhoto( new Photo(new byte[]{1}));
		carousel = dao.insert( carousel );
		dao.delete( carousel.getId() );
	}
	
	@Test
	public void findFoto() {
		Carousel carousel = new Carousel();
		carousel.setPhoto( new Photo(new byte[]{99}));
		carousel = dao.insert( carousel );
		Integer id = carousel.getId();
		byte[] content = dao.findPhoto( id );
	}
	
	@Test
	public void searchAll() {
		Carousel carousel = new Carousel();
		carousel.setPhoto( new Photo(new byte[]{1}));
		carousel = dao.insert( carousel );
		dao.delete( carousel.getId() );
	}
	
	@Test
	public void carouselCountSpecify() {
		Integer count = (Integer) dao.find( new CarouselCountSpecify() );
		Assert.assertTrue( count == 0);
	}
	
}
