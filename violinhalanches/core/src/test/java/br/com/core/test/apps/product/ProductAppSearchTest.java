package br.com.core.test.apps.product;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.core.apps.produto.ProductApp;
import br.com.model.entities.manager.Product;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value={"/dbunit/produto/populate_all.xml"})
public class ProductAppSearchTest {

	@Resource(name="produtoFacade")
	private ProductApp app;
	
	@Test
	public void findById() {
		Product product = app.find(-1);
		System.out.println(product);
	}
	
	
}
