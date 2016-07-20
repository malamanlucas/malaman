package br.com.core.test.apps.product;

import java.math.BigDecimal;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.core.apps.produto.ProductApp;
import br.com.model.entities.manager.Product;
import br.com.model.enums.ProductType;
import br.com.model.exception.SystemException;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value={"/dbunit/produto/populate_all.xml"})
public class ProductAppValidationTest {
	
	@Resource(name="produtoFacade")
	ProductApp app;
	
	@Test(expected=SystemException.class)
	public void checkIntegrationWhenProductNameIsInvalid() {
		Product product = new Product();
		product.setType(ProductType.PAO_HAMBURGUER);
		product.setName("awewqeqw");
		app.checkIntegrity(product);
	}
	
	@Test(expected=SystemException.class)
	public void checkIntegrationWhenIsProductAndPriceIsDifferentOfOriginal() {
		Product product = new Product();
		product.setName("Hot-Dog2");
		product.setType(ProductType.PRODUCT);
		product.setPrice( new BigDecimal(5.01) );
		app.checkIntegrity(product);
	}
	
	@Test
	public void checkIntegrationWhenIsProductAndHasValidPrice() {
		Product product = new Product();
		product.setName("Hot-Dog2");
		product.setType(ProductType.PRODUCT);
		product.setPrice( new BigDecimal(5.00) );
		app.checkIntegrity(product);
	}
	
	@Test(expected=SystemException.class)
	public void checkIntegrationWhenIsLunchAndExistsSomeItemNonExistent() {
		Product product = new Product();
		product.setName("Hot-Dog1");
		product.setType(ProductType.PAO_MATA_FOME);
		product.setPrice( new BigDecimal(5.00) );
		product.setDescription("(0)NomeInexistente");
		app.checkIntegrity(product);
	}
	
	@Test(expected=SystemException.class)
	public void checkIntegrationWhenisLunchAndExistsSomeItemWithAmountInExcess() {
		Product product = new Product();
		product.setType(ProductType.PAO_MATA_FOME);
		product.setName("Hot-Dog1");
		product.setPrice( new BigDecimal(5.00) );
		product.setDescription("(9)Logo1");
		app.checkIntegrity(product);
	}
	
	@Test(expected=SystemException.class)
	public void checkIntegrationWhenIsLunchModifiedAndHasInvalidPrice() {
		Product product = new Product();
		product.setType(ProductType.PAO_MATA_FOME);
		product.setName("Hot-Dog1");
		product.setPrice( new BigDecimal(5.01) );
		product.setDescription("(0)Logo1");
		app.checkIntegrity(product);
	}
	
	@Test
	public void checkIntegrationWhenIsLunchModifiedAndHasValidPrice() {
		Product product = new Product();
		product.setType(ProductType.PAO_MATA_FOME);
		product.setName("Hot-Dog1");
		product.setPrice( new BigDecimal(7.50) );
		product.setDescription("(2)Logo1");
		app.checkIntegrity(product);
	}
	
	@Test
	public void checkIntegrationWhenIsLunchNotModifiedAndHasValidPrice() {
		Product product = new Product();
		product.setType(ProductType.PAO_MATA_FOME);
		product.setName("Hot-Dog1");
		product.setPrice( new BigDecimal(5.00) );
		product.setDescription("(0)Logo1");
		app.checkIntegrity(product);
	}
	
}
