package br.com.core.test.apps.category;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.dao.EmptyResultDataAccessException;

import br.com.core.apps.categoria.CategoryApp;
import br.com.model.entities.manager.Category;
import br.com.model.enums.CategoryType;
import br.com.model.exception.SystemException;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(type  = DatabaseOperation.CLEAN_INSERT, 
			   value = "/dbunit/categoria/populate_7.xml")
public class CategoryAppSearchTest {

	@Resource(name="categoriaFacade")
	private CategoryApp app;
	
	@Test
	public void testCountCategoria() {
		Integer count = app.countCategoria();
		Assert.assertTrue(count == 7);
	}
	
	@Test
	public void testCountCategoryByType() {
		Integer countCategoria = app.countCategoria(CategoryType.LANCHE);
		Assert.assertTrue(countCategoria == 3);
	}
	
	@Test
	public void testFind() {
		Category category = app.find(-1);
		Assert.assertNotNull(category);
	}
	
	@Test
	public void testFindWhenThrowsException() {
		Category category = app.find(-99);
		Assert.assertNull(category);
	}
	
	@Test
	public void testSearchAll() {
		List<Category> categories = app.searchAll();
		Assert.assertNotNull(categories);
		Assert.assertTrue(categories.size() == 7);
	}
	
	@Test
	public void testSearchByType() {
		List<Category> categories = app.searchByTipo(CategoryType.LANCHE);
		Assert.assertNotNull(categories);
		Assert.assertTrue(categories.size() == 3);
	}
	
	@Test
	public void testSearchPagination() {
		List<Category> categories = app.searchPagination(2, 5);
		Assert.assertTrue(categories.size() == 5);
	}
	
}
