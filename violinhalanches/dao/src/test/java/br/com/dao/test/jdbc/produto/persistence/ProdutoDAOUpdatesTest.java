package br.com.dao.test.jdbc.produto.persistence;

import java.math.BigDecimal;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.dao.db.produto.ProductDAO;
import br.com.model.entities.manager.Product;
import br.com.model.enums.ProductType;
import br.com.providers.EntityModifier;
import br.com.providers.product.ProductProvider;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

public class ProdutoDAOUpdatesTest {

	@Resource(name="produtoJDBC")
	ProductDAO dao;
	
	ProductProvider produtoProvider = new ProductProvider();
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			value={"/dbunit/categoria/populate_1.xml" , "/dbunit/produto/populate_1.xml"})
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
			value="/dbunit/produto/expected/update.xml")
	@Test
	public void update() {
		Product produto = produtoProvider.provideEntity(new EntityModifier<Product>() {
			public Product modifier(Product t) {
				t.setId(-1);
				t.setName("TESTE");
				t.setPrice(new BigDecimal(3.63));
				t.setDescription("NOVA DESCRICAO");
				t.setType(ProductType.PAO_HAMBURGUER);
				return t;
			}
		});
		dao.update(produto);
	}
	
}
