package br.com.dao.test.jdbc.produto.asserts;

import java.math.BigDecimal;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.junit.Assert;

import br.com.comum.fmt.Formatter;
import br.com.model.entities.manager.Item;
import br.com.model.entities.manager.Product;

public class ProdutoFindAsserts {

	
	public static void defaultz(Product produto) {
		Assert.assertNotNull( produto );
		Assert.assertTrue( produto.getId() == -1 );
		Assert.assertTrue( produto.getName().equals("Hot-Dog1") );
		BigDecimal expectedValor = Formatter.arredondar( new BigDecimal(5) );
		Assert.assertTrue( produto.getPrice().equals(expectedValor) );
		Assert.assertTrue( produto.getDescription().equals("Logo1.") );
		Assert.assertEquals( produto.getTypeAsCode(), new Integer(1) );
		Assert.assertEquals( produto.getCategoryId(), new Integer(-1) );
	}
	
	public static void withItens(Product produto) {
		List<Item> lstItem = produto.getItens();
		Assert.assertTrue(!CollectionUtils.isEmpty(lstItem));
		Assert.assertTrue(lstItem.size() == 1);
	}
}
