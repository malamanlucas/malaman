package br.com.dao.test.jdbc.item.persistence;

import java.math.BigDecimal;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.comum.fmt.Formatter;
import br.com.dao.db.item.ItemDAO;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemFindByIdSpecify;
import br.com.model.entities.manager.Item;
import br.com.providers.EntityCollectionProviderFactory;
import br.com.providers.EntityProviderFactory;
import br.com.providers.item.ItemCollectionProvider;
import br.com.providers.item.ItemProvider;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

public class ItemDAOPersistenceTest {

	private ItemProvider itemProvider;
	private ItemCollectionProvider itemCollectionProvider;

	public ItemDAOPersistenceTest() {
		itemProvider = EntityProviderFactory.createItemProvider();
		itemCollectionProvider = EntityCollectionProviderFactory
				.createItemCollectionProvider();
	}

	@Resource(name = "itemJDBC")
	private ItemDAO itemDAO;

	@Test
	@ExpectedDatabase(value = "/dbunit/item/expected/insert_batch.xml", assertionMode = DatabaseAssertionMode.NON_STRICT)
	public void insertBatch() {
		List<Item> lstItem = itemCollectionProvider
				.provideEntityCollections(itemProvider);
		itemDAO.insert(lstItem);
	}

	@Test
	@ExpectedDatabase(value = "/dbunit/item/expected/insert.xml", assertionMode = DatabaseAssertionMode.NON_STRICT)
	public void insert() {
		Item inserted = itemDAO.insert(itemProvider.provideEntity());
		Integer id = inserted.getId();
		Assert.assertNotNull("Erro durante geração do id", id);
	}

	@Test
	@DatabaseSetup(value = "/dbunit/item/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(value = "/dbunit/item/expected/update.xml", assertionMode = DatabaseAssertionMode.NON_STRICT)
	public void update() {
		Item item = itemDAO.find( new ItemFindByIdSpecify(-1));
		item.setName("Logo2");
		item.setPrice(Formatter.arredondar(new BigDecimal(2.63)));
		itemDAO.update(item);
	}

	@Test
	@DatabaseSetup(value = "/dbunit/item/populate_1.xml", type = DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(value = "/dbunit/item/expected/delete.xml", assertionMode = DatabaseAssertionMode.NON_STRICT)
	public void delete() {
		itemDAO.delete(-1);
	}
	
}
