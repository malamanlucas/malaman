package br.com.dao.test.jdbc.categoria.search;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import br.com.dao.db.categoria.CategoryDAO;
import br.com.dao.db.categoria.impl.jdbc.specify.mapper.CategoryFindByIdSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.mapper.CategorySearchByTypeSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.mapper.CategorySearchPaginationSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.mapper.CategorySearchSpecify;
import br.com.model.entities.manager.Category;
import br.com.model.enums.CategoryType;

import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(value = "/dbunit/categoria/populate_7.xml")
public class CategoriaDAOMapperSearchTest {
	
	@Resource(name="categoriaJDBC")
	private CategoryDAO dao;
	
	@Test
	public void searchSearchSpecify() {
		List<Category> lstCategoria = dao.search( new CategorySearchSpecify() );
		Assert.assertNotNull(lstCategoria);
		Assert.assertTrue(lstCategoria.size() == 7);
	}
	
	@Test
	public void searchSearchByTypeSpecify() {
		List<Category> lstCategoria = dao.search( new CategorySearchByTypeSpecify(CategoryType.LANCHE) );
		Assert.assertNotNull(lstCategoria);
		Assert.assertTrue(lstCategoria.size() == 3);
	}
	
	@Test
	public void searchSearchPaginationSpecify() {
		List<Category> lstCategoria = dao.search( new CategorySearchPaginationSpecify(0, 5) );
		Assert.assertNotNull(lstCategoria);
		Assert.assertTrue(lstCategoria.size() == 5);
		
		lstCategoria = dao.search( new CategorySearchPaginationSpecify(0, 10) );
		Assert.assertTrue(lstCategoria.size() == 7);
		
		lstCategoria = dao.search( new CategorySearchPaginationSpecify(7, 10) );
		Assert.assertTrue(lstCategoria.size() == 0);
	}
	
	@Test
	public void searchFindByIdSpecify() {
		Category categoria = dao.find( new CategoryFindByIdSpecify(-1) );
		Assert.assertNotNull( categoria );
	}
	
	
}
