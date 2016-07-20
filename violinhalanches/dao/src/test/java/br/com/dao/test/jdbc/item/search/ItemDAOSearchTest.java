package br.com.dao.test.jdbc.item.search;

import java.math.BigDecimal;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.comum.fmt.Formatter;
import br.com.dao.db.item.ItemDAO;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemFindByIdSpecify;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemSearchPaginationSpecify;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemSearchSpecify;
import br.com.dao.db.item.impl.jdbc.specify.primitive.ItemCountSpecify;
import br.com.model.entities.manager.Item;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

@DatabaseSetup(value = "/dbunit/item/populate_7.xml")
public class ItemDAOSearchTest {

	@Resource(name = "itemJDBC")
	private ItemDAO itemDAO;

	@Test
	public void find() {
		Item item = itemDAO.find( new ItemFindByIdSpecify(-5));
		Assert.assertNotNull(item);
	}

	@Test
	public void search() {
		List<Item> lstItem = itemDAO.search( new ItemSearchSpecify() );
		Assert.assertNotNull(lstItem);
		Assert.assertTrue(lstItem.size() == 7);
	}

	@Test
	public void countRows() {
		Integer countRows = (Integer) itemDAO.find( new ItemCountSpecify() );
		Assert.assertTrue(countRows == 7);
	}
	
	@DatabaseSetup(value = {"/dbunit/categoria/populate_1.xml","/dbunit/produto/populate_1.xml",
						    "/dbunit/item_produto/populate_1.xml"},
			        type=DatabaseOperation.REFRESH)
	@Test
	public void searchByProdutoId() {
		List<Item> lstItem = itemDAO.search(-1);

		for (Item item : lstItem) {
			Assert.assertTrue(item.getName().equals("Logo1"));
			Assert.assertTrue(item.getPrice().equals(Formatter.arredondar(new BigDecimal(2.50))));
			Assert.assertTrue(item.getAmount() == 1);
			Assert.assertTrue(item.getMaxAmount() == 1);
			Assert.assertTrue(item.getId() == -1);
		}

		Assert.assertTrue(lstItem.size() == 1);
	}

	@Test
	public void searchPagination() {
		List<Item> lstItem = null;
		
		lstItem = itemDAO.search( new ItemSearchPaginationSpecify(0, 7));
		Assert.assertTrue(lstItem.size() == 7);
		
		lstItem = itemDAO.search( new ItemSearchPaginationSpecify(0, 8));
		Assert.assertTrue(lstItem.size() == 7);
		
		lstItem = itemDAO.search( new ItemSearchPaginationSpecify(2, 5));
		Assert.assertTrue(lstItem.size() == 5);
		
		lstItem = itemDAO.search( new ItemSearchPaginationSpecify(4, 5));
		Assert.assertTrue(lstItem.size() == 3);
	}


}
