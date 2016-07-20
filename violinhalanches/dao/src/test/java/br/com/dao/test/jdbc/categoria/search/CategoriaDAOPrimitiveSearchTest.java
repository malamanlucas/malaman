package br.com.dao.test.jdbc.categoria.search;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.dao.EmptyResultDataAccessException;

import br.com.dao.db.categoria.CategoryDAO;
import br.com.dao.db.categoria.impl.jdbc.specify.primitive.CategoryCountByTypeSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.primitive.CategoryCountSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.primitive.CategoryFindPhotoSpecify;
import br.com.model.enums.CategoryType;

import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(value = "/dbunit/categoria/populate_7.xml")
public class CategoriaDAOPrimitiveSearchTest {
	
	@Resource(name="categoriaJDBC")
	private CategoryDAO dao;
	
	@Test
	public void testCountSpecify() {
		Integer count = (Integer) dao.find( new CategoryCountSpecify() );
		Assert.assertTrue(count == 7);
	}
	
	@Test
	public void testFindFotoSpecify() {
		dao.find(new CategoryFindPhotoSpecify(-1));
	}
	
	@Test(expected=EmptyResultDataAccessException.class)
	public void testFindFotoSpecifyWhenThrowsException() {
		dao.find(new CategoryFindPhotoSpecify(-38));
	}
	
	@Test
	public void testCountByCategoryTypeSpecifyWhenIsLanche() {
		Integer count = (Integer) dao.find(new CategoryCountByTypeSpecify(CategoryType.LANCHE));
		Assert.assertTrue(count == 3);
	}
	
	@Test
	public void testCountByCategoryTypeSpecifyWhenIsProduct() {
		Integer count = (Integer) dao.find(new CategoryCountByTypeSpecify(CategoryType.PRODUTO));
		Assert.assertTrue(count == 4);
	}
	
	
	
}
